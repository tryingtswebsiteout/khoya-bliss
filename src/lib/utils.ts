// This file is needed by Shadcn/UI for utility functions like cn()
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format price to PKR currency
 * @param amount - The price amount
 * @returns Formatted price string with PKR currency
 */
export function formatPriceToPKR(amount: number | string): string {
  const numAmount = typeof amount === 'string' ? parseFloat(amount) : amount;
  if (isNaN(numAmount)) return 'PKR 0';
  return `PKR ${numAmount.toLocaleString('en-PK', { maximumFractionDigits: 0 })}`;
}
