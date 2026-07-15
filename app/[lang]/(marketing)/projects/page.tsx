import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import JsonLd from "@/components/JsonLd";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates, siteConfig } from "@/lib/seo";
import { getProjects } from "@/lib/db";
import { breadcrumbSchema } from "@/lib/schema";

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
  const title = isAr ? "أعمالنا" : "Our Work";
  const description = isAr
    ? "مشاريع برمجية سلّمتها سهلة — أنظمة نقاط بيع ومنصات ERP وتطبيقات موبايل ومواقع لشركات في مصر والمنطقة."
    : "Software projects delivered by Sahlaa — POS systems, ERP platforms, mobile apps, and websites for businesses in Egypt and MENA.";
  return {
    title,
    description,
    alternates: buildAlternates(locale, "/projects"),
    openGraph: { title, description, url: `${siteConfig.siteUrl}/${locale}/projects`, type: "website" },
  };
}

export default async function ProjectsPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale = params.lang as Locale;
  const t = getDictionary(locale);
  const projects = await getProjects();
  const isAr = locale === "ar";

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
          { name: t.nav.projects, path: `/${locale}/projects` },
        ])}
      />
      <Section>
        <SectionHeading eyebrow={t.projects.tag} title={t.projects.title} subtitle={t.contact.subtitle} />
        <div className="mt-14">
          <ProjectsExplorer
            projects={projects}
            locale={locale}
            allLabel={t.projects.all}
            viewLabel={t.projects.viewDetails}
            emptyLabel={t.projects.noProjects}
          />
        </div>
      </Section>
    </>
  );
}
