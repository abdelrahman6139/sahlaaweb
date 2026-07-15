import type { MetadataRoute } from "next";
import projects from "@/data/projects.json";
import { siteConfig } from "@/lib/seo";
import { solutionSlugs } from "@/data/solutions";
import { locales } from "@/lib/i18n";

/** Emits both locales for every URL, with hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.siteUrl;

  const alt = (path: string) => ({
    languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}${path}`])),
  });

  const localizedPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/solutions", priority: 0.9, freq: "monthly" },
    { path: "/projects", priority: 0.8, freq: "weekly" },
    { path: "/contact", priority: 0.7, freq: "monthly" },
    ...solutionSlugs.map((slug) => ({ path: `/solutions/${slug}`, priority: 0.9, freq: "monthly" as const })),
    ...projects.map((p) => ({
      path: `/projects/${p.id}`,
      priority: p.featured ? 0.8 : 0.6,
      freq: "monthly" as const,
    })),
  ];

  return localizedPaths.flatMap(({ path, priority, freq }) =>
    locales.map((locale) => ({
      url: `${base}/${locale}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
      alternates: alt(path),
    }))
  );
}
