import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n";

export const siteConfig = {
  name: "Sahlaa.AI",
  legalName: "Sahlaa Software LLC",
  tagline: "Smart Solutions. Stronger Businesses.",
  description:
    "Sahlaa.AI is a software company in Cairo, Egypt building POS systems, ERP platforms, mobile apps, and web applications for Egypt and MENA businesses.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.sahlaa.com",
  email: "info@sahlaa.com",
  phone: "+201090811974",
  phoneDisplay: "+20 109 081 1974",
  areaServed: ["EG", "SA", "AE", "QA", "KW", "BH", "OM"],
  sameAs: [
    "https://www.linkedin.com/company/sahlaa-software",
    "https://www.facebook.com/sahlaa.software",
  ],
  ogImage: "/brand/sahlaa-ai-lockup.png",
};

export const staticRoutes = ["/", "/solutions", "/projects", "/contact"];

/**
 * Build locale-aware `alternates` (canonical + hreflang) for a given path.
 * `path` is locale-agnostic and should start with "/" (use "" or "/" for home).
 */
export function buildAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  const clean = path === "/" ? "" : path;
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `/${l}${clean}`;
  }
  languages["x-default"] = `/en${clean}`;
  return {
    canonical: `/${locale}${clean}`,
    languages,
  };
}
