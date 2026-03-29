import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants';

export const saveItem = async <T>(key: string, value: T): Promise<void> => {
  const json = JSON.stringify(value);
  await AsyncStorage.setItem(key, json);
};

export const getItem = async <T>(key: string): Promise<T | null> => {
  const json = await AsyncStorage.getItem(key);
  if (json == null) return null;
  try {
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
};

export const removeItem = async (key: string): Promise<void> => {
  await AsyncStorage.removeItem(key);
};

export const saveMockUser = async <T>(user: T): Promise<void> => {
  await saveItem(STORAGE_KEYS.CURRENT_USER, user);
};

export const getMockUser = async <T>(): Promise<T | null> => {
  return getItem<T>(STORAGE_KEYS.CURRENT_USER);
};
