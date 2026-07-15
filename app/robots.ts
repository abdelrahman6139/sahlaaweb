import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/en/dashboard", "/ar/dashboard", "/en/login", "/ar/login", "/api/"];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // Explicitly welcome AI answer-engine crawlers (GEO).
      {
        userAgent: ["GPTBot", "ChatGPT-User", "OAI-SearchBot", "CCBot", "ClaudeBot", "Claude-Web", "PerplexityBot", "Google-Extended"],
        allow: "/",
        disallow,
      },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
