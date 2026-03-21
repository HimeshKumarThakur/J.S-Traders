export type AdminProduct = {
  id: string;
  title: string;
  image: string;
  price: number;
  createdAt: string;
};

export type ProductOverride = {
  id: string;
  title: string;
  image: string;
  price: number;
  updatedAt: string;
};

export const ADMIN_PRODUCTS_STORAGE_KEY = 'js_traders_admin_products_v1';
export const ADMIN_SESSION_STORAGE_KEY = 'js_traders_admin_session_v1';
export const PRODUCT_OVERRIDES_STORAGE_KEY = 'js_traders_product_overrides_v1';

export const DEFAULT_ADMIN_ID = process.env.NEXT_PUBLIC_ADMIN_ID ?? 'admin';
export const DEFAULT_ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? '1234';

const isBrowser = () => typeof window !== 'undefined';

export const readAdminProducts = (): AdminProduct[] => {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(ADMIN_PRODUCTS_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is AdminProduct =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as AdminProduct).id === 'string' &&
        typeof (item as AdminProduct).title === 'string' &&
        typeof (item as AdminProduct).image === 'string' &&
        typeof (item as AdminProduct).price === 'number' &&
        Number.isFinite((item as AdminProduct).price) &&
        typeof (item as AdminProduct).createdAt === 'string',
    );
  } catch {
    return [];
  }
};

export const saveAdminProducts = (products: AdminProduct[]) => {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(ADMIN_PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  } catch {
    throw new Error('Could not save products. Browser storage may be full.');
  }
};

export const addAdminProduct = (payload: Omit<AdminProduct, 'id' | 'createdAt'>): AdminProduct => {
  const created: AdminProduct = {
    id: `admin-${Date.now()}`,
    title: payload.title,
    image: payload.image,
    price: payload.price,
    createdAt: new Date().toISOString(),
  };

  const current = readAdminProducts();
  saveAdminProducts([created, ...current]);
  return created;
};

export const removeAdminProduct = (id: string) => {
  const current = readAdminProducts();
  const next = current.filter((item) => item.id !== id);
  saveAdminProducts(next);
};

export const updateAdminProduct = (id: string, payload: Omit<AdminProduct, 'id' | 'createdAt'>) => {
  const current = readAdminProducts();
  const next = current.map((item) =>
    item.id === id
      ? {
          ...item,
          title: payload.title,
          image: payload.image,
          price: payload.price,
        }
      : item,
  );
  saveAdminProducts(next);
};

export const readProductOverrides = (): ProductOverride[] => {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(PRODUCT_OVERRIDES_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is ProductOverride =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as ProductOverride).id === 'string' &&
        typeof (item as ProductOverride).title === 'string' &&
        typeof (item as ProductOverride).image === 'string' &&
        typeof (item as ProductOverride).price === 'number' &&
        Number.isFinite((item as ProductOverride).price) &&
        typeof (item as ProductOverride).updatedAt === 'string',
    );
  } catch {
    return [];
  }
};

const saveProductOverrides = (overrides: ProductOverride[]) => {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(PRODUCT_OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
  } catch {
    throw new Error('Could not save product edits. Browser storage may be full.');
  }
};

export const upsertProductOverride = (payload: Omit<ProductOverride, 'updatedAt'>) => {
  const current = readProductOverrides();
  const nextItem: ProductOverride = {
    ...payload,
    updatedAt: new Date().toISOString(),
  };

  const exists = current.some((item) => item.id === payload.id);
  const next = exists ? current.map((item) => (item.id === payload.id ? nextItem : item)) : [nextItem, ...current];
  saveProductOverrides(next);
};

export const removeProductOverride = (id: string) => {
  const current = readProductOverrides();
  const next = current.filter((item) => item.id !== id);
  saveProductOverrides(next);
};

export const getProductOverrideMap = (): Record<string, ProductOverride> => {
  const overrides = readProductOverrides();
  return overrides.reduce<Record<string, ProductOverride>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
};

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
