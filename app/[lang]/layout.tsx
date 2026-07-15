import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { inter, arabic } from "../fonts";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider, themeNoFlashScript } from "@/context/ThemeContext";
import { siteConfig, buildAlternates } from "@/lib/seo";
import { getDictionary } from "@/lib/i18n";
import { locales, isLocale, dir, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const lang = (isLocale(params.lang) ? params.lang : "en") as Locale;
  const t = getDictionary(lang);
  const title =
    lang === "ar"
      ? "سهلة.AI | شركة برمجيات في القاهرة، مصر"
      : "Sahlaa.AI | Software Company in Cairo, Egypt";
  const ogImageUrl = `${siteConfig.siteUrl}${siteConfig.ogImage}`;

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description: t.footer.about,
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "technology",
    alternates: buildAlternates(lang, ""),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description: t.footer.about,
      url: `${siteConfig.siteUrl}/${lang}`,
      siteName: siteConfig.name,
      locale: lang === "ar" ? "ar_EG" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_EG",
      type: "website",
      images: [{ url: ogImageUrl, width: 1273, height: 1236, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.footer.about,
      images: [ogImageUrl],
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;

  return (
    <html lang={lang} dir={dir(lang)} className={`${inter.variable} ${arabic.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeNoFlashScript }} />
      </head>
      <body className="min-h-screen selection:bg-primary/25">
        <ThemeProvider>
          <LanguageProvider language={lang}>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
