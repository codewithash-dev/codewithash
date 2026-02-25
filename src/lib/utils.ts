/**
 * Shared utilities for Code with Ash.
 * Add helpers here as your site grows.
 */

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
