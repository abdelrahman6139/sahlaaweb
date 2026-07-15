import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/home/Hero";
import Differentiators from "@/components/home/Differentiators";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SolutionCard from "@/components/SolutionCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import JsonLd from "@/components/JsonLd";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { getFeaturedProjects } from "@/lib/db";
import { solutions } from "@/data/solutions";
import { organizationSchema, itemListSchema } from "@/lib/schema";

export default async function HomePage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale = params.lang as Locale;
  const t = getDictionary(locale);
  const featured = await getFeaturedProjects(3);

  const learnMore = locale === "ar" ? "اعرف المزيد" : "Learn more";

  const schemas = [
    organizationSchema(locale, t.footer.about),
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
      <Hero t={t} locale={locale} />
      <Differentiators t={t} />

      {/* Solutions / Services */}
      <Section id="solutions">
        <SectionHeading
          eyebrow={t.services.tag}
          title={t.services.title}
          subtitle={t.hero.subtitle}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <SolutionCard solution={s} locale={locale} learnMore={learnMore} />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={`/${locale}/solutions`} variant="outline">
            {t.nav.solutions}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Button>
        </div>
      </Section>

      {/* Process */}
      <Section muted>
        <SectionHeading eyebrow={t.process.tag} title={t.process.title} />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <Card className="h-full p-8">
                <span className="text-5xl font-extrabold text-primary/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Featured projects */}
      {featured.length > 0 && (
        <Section id="projects">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow={t.projects.tag}
              title={t.projects.title}
              className="max-w-xl"
            />
            <Button href={`/${locale}/projects`} variant="outline" className="shrink-0">
              {t.projects.viewDetails}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <ProjectCard project={p} locale={locale} viewLabel={t.projects.viewDetails} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Testimonials */}
      <Section muted>
        <SectionHeading
          eyebrow={t.testimonials.tag}
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />
        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {t.testimonials.list.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <TestimonialCard name={item.name} role={item.role} text={item.text} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-accent/10 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-80 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              {t.projects.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t.projects.ctaDesc}</p>
            <div className="mt-8 flex justify-center">
              <Button href={`/${locale}/contact`} size="lg">
                {t.projects.ctaBtn}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
