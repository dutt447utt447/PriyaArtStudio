import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(productTitle?: string) {
  const base = "Hello Priya! I am interested in your luxury resin art";
  if (productTitle) {
    return encodeURIComponent(`${base} - specifically "${productTitle}". Could you share details & customization options?`);
  }
  return encodeURIComponent(`${base}. I would love to get a custom piece designed!`);
}
