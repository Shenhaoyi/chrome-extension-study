import { StorageKeys } from '~const/storage';
import { storage } from '~storage';

export const set = async (origin: string, selector: string) => {
  const obj = (await storage.get(StorageKeys.SELECTOR)) || {};
  const list = obj[origin] || [];
  list.push(selector);
  obj[origin] = list;
  await storage.set(StorageKeys.SELECTOR, obj);
};
