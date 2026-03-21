import { promises as fs } from 'fs';
import path from 'path';
import type { AdminData, AdminProduct, ProductOverride } from '../types/adminData';

const storePath = process.env.VERCEL
  ? '/tmp/js-traders-admin-data.json'
  : path.join(process.cwd(), 'data', 'admin-data.json');

const emptyStore = (): AdminData => ({ products: [], overrides: [] });

const ensureStoreFile = async () => {
  await fs.mkdir(path.dirname(storePath), { recursive: true });
  try {
    await fs.access(storePath);
  } catch {
    await fs.writeFile(storePath, JSON.stringify(emptyStore(), null, 2), 'utf-8');
  }
};

const normalizeStore = (input: unknown): AdminData => {
  if (!input || typeof input !== 'object') return emptyStore();

  const maybe = input as Partial<AdminData>;
  const products = Array.isArray(maybe.products) ? maybe.products : [];
  const overrides = Array.isArray(maybe.overrides) ? maybe.overrides : [];

  return {
    products: products.filter(
      (item): item is AdminProduct =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as AdminProduct).id === 'string' &&
        typeof (item as AdminProduct).title === 'string' &&
        typeof (item as AdminProduct).image === 'string' &&
        typeof (item as AdminProduct).price === 'number' &&
        typeof (item as AdminProduct).createdAt === 'string',
    ),
    overrides: overrides.filter(
      (item): item is ProductOverride =>
        typeof item === 'object' &&
        item !== null &&
        typeof (item as ProductOverride).id === 'string' &&
        typeof (item as ProductOverride).title === 'string' &&
        typeof (item as ProductOverride).image === 'string' &&
        typeof (item as ProductOverride).price === 'number' &&
        typeof (item as ProductOverride).updatedAt === 'string',
    ),
  };
};

export const readAdminDataStore = async (): Promise<AdminData> => {
  await ensureStoreFile();
  try {
    const raw = await fs.readFile(storePath, 'utf-8');
    return normalizeStore(JSON.parse(raw));
  } catch {
    return emptyStore();
  }
};

export const writeAdminDataStore = async (data: AdminData) => {
  await ensureStoreFile();
  await fs.writeFile(storePath, JSON.stringify(data, null, 2), 'utf-8');
};
