import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function saveToStorage<T>(key: string, value: T): T {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}
export function getFromStorage<T>(key: string, defaultValue: T): T {
  const storageData = localStorage.getItem(key);
  if (storageData) {
    return JSON.parse(storageData);
  } else {
    return defaultValue;
  }
}
export function deleteFromStorage(key: string) {
  localStorage.removeItem(key);
}
