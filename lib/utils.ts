import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility for merging Tailwind CSS class names conditionally.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 * Used by shadcn/ui components and any component that imports from "@/lib/utils".
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
