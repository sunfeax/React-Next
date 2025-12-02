import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
