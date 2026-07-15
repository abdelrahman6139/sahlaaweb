/** Minimal className combiner (truthy strings joined, de-duped whitespace). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
}
