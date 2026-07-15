import { translations, type Language, type TranslationKey } from "@/constants/translations";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function isRTL(locale: Locale): boolean {
  return locale === "ar";
}

/** Server-usable dictionary accessor. Content is passed into server components. */
export function getDictionary(locale: Language): TranslationKey {
  return translations[locale];
}

/** The counterpart locale, for hreflang alternates and language switching. */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}

/** Full URL path for a locale + path (path should start with "/" or be ""). */
export function localePath(locale: Locale, path = ""): string {
  const clean = path === "/" ? "" : path;
  return `/${locale}${clean}`;
}
