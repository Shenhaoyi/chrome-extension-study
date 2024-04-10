import { StorageKeys } from '~const/storage';
import { storage } from '~storage';

export const get = () => {
  return storage.get<boolean>(StorageKeys.MAIN_SWITCH);
};

export const set = async (value: boolean) => {
  await storage.set(StorageKeys.MAIN_SWITCH, value);
};

export const change = async (value: boolean = undefined) => {
  if (value === undefined) {
    value = !(await get());
  }
  // 存储
  await set(value);
};
