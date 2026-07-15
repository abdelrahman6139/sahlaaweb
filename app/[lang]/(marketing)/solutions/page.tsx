import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import SolutionCard from "@/components/SolutionCard";
import JsonLd from "@/components/JsonLd";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates, siteConfig } from "@/lib/seo";
import { solutions } from "@/data/solutions";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.lang) ? params.lang : "en") as Locale;
  const isAr = locale === "ar";
  const title = isAr ? "الحلول — ماذا تريد أن تبني؟" : "Solutions — What do you want to build?";
  const description = isAr
    ? "من أنظمة نقاط البيع و ERP إلى تطبيقات الموبايل والمواقع والمنتجات الأولية للشركات الناشئة — اختر ما تريد بناءه واحصل على حل مصمم لعملك في مصر والمنطقة."
    : "From POS and ERP systems to mobile apps, websites, and startup MVPs — pick what you want to build and get a solution tailored to your business in Egypt and MENA.";
  return {
    title,
    description,
    alternates: buildAlternates(locale, "/solutions"),
    openGraph: { title, description, url: `${siteConfig.siteUrl}/${locale}/solutions`, type: "website" },
  };
}

export default function SolutionsHub({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale = params.lang as Locale;
  const t = getDictionary(locale);
  const isAr = locale === "ar";
  const learnMore = isAr ? "اعرف المزيد" : "Learn more";

  const schemas = [
    breadcrumbSchema([
      { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
      { name: t.nav.solutions, path: `/${locale}/solutions` },
    ]),
    itemListSchema(
      solutions.map((s) => ({
        name: s[locale].name,
        description: s[locale].tagline,
        path: `/${locale}/solutions/${s.slug}`,
      }))
    ),
  ];

  return (
    <>
      <JsonLd schema={schemas} />
      <Section>
        <SectionHeading
          eyebrow={t.nav.solutions}
          title={isAr ? "ماذا تريد أن {تبني}؟" : "What do you want to {build}?"}
          subtitle={
            isAr
              ? "اختر هدفك وسنأخذك من الفكرة إلى منتج شغّال — مصمم لعملك في مصر والمنطقة."
              : "Pick your goal and we'll take you from idea to a working product — tailored for your business in Egypt and MENA."
          }
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <SolutionCard solution={s} locale={locale} learnMore={learnMore} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
