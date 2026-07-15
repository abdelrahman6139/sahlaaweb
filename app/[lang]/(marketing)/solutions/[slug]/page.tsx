import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, Wallet, ChevronRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import ProjectCard from "@/components/ProjectCard";
import JsonLd from "@/components/JsonLd";
import { SolutionIcon } from "@/components/icons";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates, siteConfig } from "@/lib/seo";
import { solutions, getSolution, solutionSlugs } from "@/data/solutions";
import { getProjects } from "@/lib/db";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return solutions.flatMap((s) =>
    ["en", "ar"].map((lang) => ({ lang, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const locale = (isLocale(params.lang) ? params.lang : "en") as Locale;
  const solution = getSolution(params.slug);
  if (!solution) return {};
  const c = solution[locale];
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: c.keywords,
    alternates: buildAlternates(locale, `/solutions/${solution.slug}`),
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url: `${siteConfig.siteUrl}/${locale}/solutions/${solution.slug}`,
      type: "website",
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  if (!isLocale(params.lang) || !solutionSlugs.includes(params.slug)) notFound();
  const locale = params.lang as Locale;
  const t = getDictionary(locale);
  const solution = getSolution(params.slug)!;
  const c = solution[locale];
  const isAr = locale === "ar";

  const allProjects = await getProjects();
  const related = allProjects.filter((p) => p.type === solution.projectType).slice(0, 3);

  const path = `/solutions/${solution.slug}`;
  const schemas = [
    serviceSchema({
      locale,
      name: c.name,
      description: c.metaDescription,
      path: `/${locale}${path}`,
      serviceType: solution.projectType,
    }),
    faqSchema(c.faqs),
    breadcrumbSchema([
      { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
      { name: t.nav.solutions, path: `/${locale}/solutions` },
      { name: c.name, path: `/${locale}${path}` },
    ]),
  ];

  const labels = {
    included: isAr ? "ما الذي تحصل عليه" : "What you get",
    how: isAr ? "كيف نبنيه" : "How we build it",
    idealFor: isAr ? "مناسب لـ" : "Ideal for",
    timeline: isAr ? "المدة الزمنية" : "Timeline",
    pricing: isAr ? "التسعير" : "Pricing",
    faq: isAr ? "أسئلة شائعة" : "Frequently asked questions",
    otherSolutions: isAr ? "حلول أخرى" : "Other solutions",
    relatedWork: isAr ? "أعمال ذات صلة" : "Related work",
  };

  return (
    <>
      <JsonLd schema={schemas} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -top-32 start-1/3 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        <div className="section-container py-16 sm:py-20">
          <nav className="mb-8 flex items-center gap-1.5 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href={`/${locale}`} className="hover:text-foreground">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            <Link href={`/${locale}/solutions`} className="hover:text-foreground">
              {t.nav.solutions}
            </Link>
            <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
            <span className="text-foreground">{c.name}</span>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="flex flex-col items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/15">
                <SolutionIcon name={solution.icon} className="h-7 w-7" />
              </div>
              <Badge eyebrow>&ldquo;{c.intent}&rdquo;</Badge>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                {c.name}
              </h1>
              <p className="text-lg font-medium text-foreground">{c.tagline}</p>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{c.hero}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button href={`/${locale}/contact`} size="lg">
                  {c.cta}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Button>
                <Button href={`/${locale}/projects`} size="lg" variant="secondary">
                  {t.nav.projects}
                </Button>
              </div>
            </div>

            <Card className="flex flex-col gap-5 p-7">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{labels.timeline}</p>
                  <p className="text-sm text-muted-foreground">{c.timeline}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wallet className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{labels.pricing}</p>
                  <p className="text-sm text-muted-foreground">{c.startingFrom}</p>
                </div>
              </div>
              <div className="border-t border-border pt-5">
                <p className="mb-3 text-sm font-semibold text-foreground">{labels.idealFor}</p>
                <div className="flex flex-wrap gap-2">
                  {c.idealFor.map((item) => (
                    <span key={item} className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem framing */}
      <Section>
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            {c.problem}
          </p>
        </Reveal>
      </Section>

      {/* Features */}
      <Section muted className="!pt-0 sm:!pt-0">
        <SectionHeading align="left" title={labels.included} className="max-w-xl" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {c.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <Card className="h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <SectionHeading align="left" title={labels.how} className="max-w-xl" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {c.process.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative rounded-2xl border border-border bg-surface/70 p-7">
                <span className="text-4xl font-extrabold text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Related work */}
      {related.length > 0 && (
        <Section muted>
          <SectionHeading align="left" title={labels.relatedWork} className="max-w-xl" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <ProjectCard project={p} locale={locale} viewLabel={t.projects.viewDetails} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      <Section>
        <SectionHeading title={labels.faq} />
        <div className="mt-12">
          <FAQ items={c.faqs} />
        </div>
      </Section>

      {/* Other solutions */}
      <Section muted>
        <SectionHeading align="left" title={labels.otherSolutions} className="max-w-xl" />
        <div className="mt-8 flex flex-wrap gap-3">
          {solutions
            .filter((s) => s.slug !== solution.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/${locale}/solutions/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                <SolutionIcon name={s.icon} className="h-4 w-4" />
                {s[locale].name}
              </Link>
            ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-accent/10 px-8 py-14 text-center sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{c.cta}</h2>
            <div className="mt-8 flex justify-center">
              <Button href={`/${locale}/contact`} size="lg">
                {t.hero.cta_primary}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
