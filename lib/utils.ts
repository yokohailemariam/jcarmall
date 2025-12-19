import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return `Br ${price.toLocaleString()}`;
};

export const formatDistance = (value: number) => {
  const formatter = new Intl.NumberFormat("en-US");
  return `${formatter.format(value)} km`;
};
