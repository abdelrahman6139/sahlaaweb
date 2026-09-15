import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight, Tag, Calendar, ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import ProjectGallery from "@/components/ProjectGallery";
import JsonLd from "@/components/JsonLd";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates, siteConfig } from "@/lib/seo";
import { getProject, getProjects } from "@/lib/db";
import { typeColor } from "@/lib/projectMeta";
import { breadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.flatMap((p) => ["en", "ar"].map((lang) => ({ lang, id: p.id })));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; id: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.lang) ? params.lang : "en") as Locale;
  const project = await getProject(params.id);
  if (!project) return {};
  const isAr = locale === "ar";
  const title = isAr ? project.title_ar : project.title_en;
  const description = isAr ? project.summary_ar : project.summary_en;
  const image = project.mainImage || project.images?.[0];
  return {
    title,
    description,
    alternates: buildAlternates(locale, `/projects/${project.id}`),
    openGraph: {
      title,
      description,
      url: `${siteConfig.siteUrl}/${locale}/projects/${project.id}`,
      type: "article",
      images: image ? [image] : undefined,
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: { lang: string; id: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const locale = params.lang as Locale;
  const t = getDictionary(locale);
  const project = await getProject(params.id);
  if (!project) notFound();
  const isAr = locale === "ar";

  const title = isAr ? project.title_ar : project.title_en;
  const description = isAr ? project.description_ar : project.description_en;
  const gallery = [project.mainImage, ...(project.images ?? [])].filter(Boolean) as string[];

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
          { name: t.nav.projects, path: `/${locale}/projects` },
          { name: title, path: `/${locale}/projects/${project.id}` },
        ])}
      />
      <Section>
        <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <Link href={`/${locale}`} className="hover:text-foreground">
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
          <Link href={`/${locale}/projects`} className="hover:text-foreground">
            {t.nav.projects}
          </Link>
          <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
          <span className="text-foreground">{title}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="flex flex-col gap-8">
            <ProjectGallery images={gallery} alt={title} />
            <div>
              <span
                className={cn(
                  "mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold",
                  typeColor(project.type)
                )}
              >
                {project.type}
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                {description.split("\n").filter(Boolean).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <Card className="p-7">
              <h2 className="text-lg font-semibold text-foreground">
                {isAr ? "تفاصيل المشروع" : "Project details"}
              </h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Tag className="h-4 w-4 text-primary" />
                  <dt className="text-muted-foreground">{t.dashboard.table.type}:</dt>
                  <dd className="font-medium text-foreground">{project.type}</dd>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-primary" />
                  <dt className="text-muted-foreground">{t.dashboard.table.added}:</dt>
                  <dd className="font-medium text-foreground">
                    {new Date(project.createdAt).toLocaleDateString(isAr ? "ar-EG" : "en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </dd>
                </div>
              </dl>
              {project.tags?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
                >
                  {isAr ? "زيارة الموقع المباشر" : "Visit live site"}
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 p-7">
              <h2 className="text-lg font-semibold text-foreground">{t.projects.ctaTitle}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.projects.ctaDesc}</p>
              <Button href={`/${locale}/contact`} className="mt-5 w-full">
                {t.projects.ctaBtn}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Button>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
