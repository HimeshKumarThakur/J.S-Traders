import type { AdminData, AdminProduct, ProductOverride } from '../types/adminData';

export const ADMIN_SESSION_STORAGE_KEY = 'js_traders_admin_session_v1';

export const DEFAULT_ADMIN_ID = process.env.NEXT_PUBLIC_ADMIN_ID ?? 'admin';
export const DEFAULT_ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? '1234';

const isBrowser = () => typeof window !== 'undefined';
const emptyData: AdminData = { products: [], overrides: [] };

const toOverrideMap = (overrides: ProductOverride[]) =>
  overrides.reduce<Record<string, ProductOverride>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});

const requestAdminData = async (
  payload?:
    | { type: 'addProduct'; payload: Omit<AdminProduct, 'id' | 'createdAt'> }
    | { type: 'updateProduct'; id: string; payload: Omit<AdminProduct, 'id' | 'createdAt'> }
    | { type: 'removeProduct'; id: string }
    | { type: 'upsertOverride'; payload: Omit<ProductOverride, 'updatedAt'> }
    | { type: 'removeOverride'; id: string },
): Promise<AdminData> => {
  const endpoint = '/api/admin-data';
  const options: RequestInit = payload
    ? {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    : { method: 'GET' };

  const response = await fetch(endpoint, options);
  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Failed to sync admin data.');
  }

  const data = (await response.json()) as AdminData;
  if (!data || !Array.isArray(data.products) || !Array.isArray(data.overrides)) return emptyData;
  return data;
};

export const fetchAdminData = async (): Promise<AdminData> => requestAdminData();

export const addAdminProduct = async (payload: Omit<AdminProduct, 'id' | 'createdAt'>): Promise<AdminData> =>
  requestAdminData({ type: 'addProduct', payload });

export const removeAdminProduct = async (id: string): Promise<AdminData> => requestAdminData({ type: 'removeProduct', id });

export const updateAdminProduct = async (
  id: string,
  payload: Omit<AdminProduct, 'id' | 'createdAt'>,
): Promise<AdminData> => requestAdminData({ type: 'updateProduct', id, payload });

export const upsertProductOverride = async (payload: Omit<ProductOverride, 'updatedAt'>): Promise<AdminData> =>
  requestAdminData({ type: 'upsertOverride', payload });

export const removeProductOverride = async (id: string): Promise<AdminData> =>
  requestAdminData({ type: 'removeOverride', id });

export const getProductOverrideMap = (overrides: ProductOverride[]): Record<string, ProductOverride> =>
  toOverrideMap(overrides);

export const getProductOverrideMapFromData = (data: AdminData): Record<string, ProductOverride> =>
  toOverrideMap(data.overrides);

export const getProductsFromData = (data: AdminData): AdminProduct[] => data.products;

export const getOverridesFromData = (data: AdminData): ProductOverride[] => data.overrides;

export type { AdminData, AdminProduct, ProductOverride };

export const setAdminSession = (isLoggedIn: boolean) => {
  if (!isBrowser()) return;
  if (isLoggedIn) {
    window.localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, '1');
    return;
  }
  window.localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
};

export const isAdminLoggedIn = (): boolean => {
  if (!isBrowser()) return false;
  return window.localStorage.getItem(ADMIN_SESSION_STORAGE_KEY) === '1';
};
