import { siteConfig } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

const url = (path = "") => `${siteConfig.siteUrl}${path}`;

/** Organization / ProfessionalService schema for the whole site. */
export function organizationSchema(locale: Locale, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: url(`/${locale}`),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description,
    areaServed: siteConfig.areaServed.map((code) => ({ "@type": "Country", identifier: code })),
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "ar" ? "القاهرة" : "Cairo",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      availableLanguage: ["en", "ar"],
    },
    sameAs: siteConfig.sameAs,
  };
}

/** Service schema for a solution/intent page. */
export function serviceSchema(opts: {
  locale: Locale;
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType,
    url: url(opts.path),
    provider: { "@id": `${siteConfig.siteUrl}/#organization` },
    areaServed: siteConfig.areaServed.map((code) => ({ "@type": "Country", identifier: code })),
    availableLanguage: ["en", "ar"],
  };
}

/** FAQPage schema — high value for AI answer engines. */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList schema. Items: { name, path }. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

/** ItemList of services/solutions for the home + solutions hub. */
export function itemListSchema(items: { name: string; description: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.description,
      url: url(item.path),
    })),
  };
}
