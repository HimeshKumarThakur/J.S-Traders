import type { AdminData } from '../types/adminData';
import { getAdminStorageInfo, probeAdminStorage, readAdminData, writeAdminData } from './storage/adminStorage';

export const readAdminDataStore = async (): Promise<AdminData> => {
  const info = getAdminStorageInfo();
  console.log('[AdminDataStore] Reading data with backend:', info.activeBackend, 'hasUpstashConfig:', info.hasUpstashConfig);
  return readAdminData();
};

export const writeAdminDataStore = async (data: AdminData) => {
  const info = getAdminStorageInfo();
  console.log(
    '[AdminDataStore] Writing data with backend:',
    info.activeBackend,
    'hasUpstashConfig:',
    info.hasUpstashConfig,
    'products:',
    data.products.length,
    'overrides:',
    data.overrides.length,
  );
  await writeAdminData(data);
};

export { getAdminStorageInfo, probeAdminStorage };
