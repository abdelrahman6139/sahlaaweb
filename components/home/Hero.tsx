import { ArrowRight, Sparkles, CheckCircle2, TrendingUp, Users2, Zap } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { HighlightedTitle } from "../ui/SectionHeading";
import Reveal from "../Reveal";
import type { TranslationKey } from "@/constants/translations";
import type { Locale } from "@/lib/i18n";

export default function Hero({ t, locale }: { t: TranslationKey; locale: Locale }) {
  const base = `/${locale}`;
  const stats = [
    { value: "80+", label: t.stats.delivered, icon: TrendingUp },
    { value: "98%", label: t.stats.retention, icon: Sparkles },
    { value: "5+", label: t.stats.yearsActive, icon: Zap },
    { value: "24/7", label: t.stats.support, icon: Users2 },
  ];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border">
      {/* Background: mesh glows + dot grid for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(rgb(var(--foreground) / 0.35) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute -top-48 start-[8%] h-[620px] w-[780px] -translate-x-1/2 rounded-full bg-primary/25 blur-[150px]" />
        <div className="absolute top-0 end-[-10%] h-[520px] w-[560px] rounded-full bg-accent/20 blur-[140px]" />
        <div className="absolute bottom-0 start-1/2 h-[300px] w-[900px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[130px]" />
      </div>

      <div className="section-container grid items-center gap-14 py-28 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div className="flex flex-col items-start gap-7">
          <Reveal immediate>
            <Badge eyebrow>
              <Sparkles className="h-3.5 w-3.5" />
              {t.hero.tag}
            </Badge>
          </Reveal>
          <Reveal immediate delay={0.05}>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.75rem]">
              <HighlightedTitle text={t.hero.title} />
            </h1>
          </Reveal>
          <Reveal immediate delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {t.hero.subtitle}
            </p>
          </Reveal>
          <Reveal immediate delay={0.15}>
            <div className="flex flex-wrap items-center gap-3">
              <Button href={`${base}/contact`} size="lg">
                {t.hero.cta_primary}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Button>
              <Button href={`${base}/projects`} size="lg" variant="secondary">
                {t.hero.cta_secondary}
              </Button>
            </div>
          </Reveal>
          <Reveal immediate delay={0.2}>
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 pt-3 text-sm text-muted-foreground">
              {t.services.list.map((s) => (
                <span key={s.title} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {s.title}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.15}>
          <div className="relative mt-16 sm:mt-14">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-accent/10 to-transparent blur-2xl" />

            {/* Floating trust badge — sits fully above the card, clear of its content */}
            <div className="absolute -top-16 start-6 z-10 hidden items-center gap-3 rounded-2xl border border-border bg-surface p-4 shadow-elevated sm:flex">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {["from-brand-500 to-brand-700", "from-accent to-brand-600", "from-emerald-500 to-brand-500"].map(
                  (g, i) => (
                    <div key={i} className={`h-8 w-8 rounded-full border-2 border-surface bg-gradient-to-br ${g}`} />
                  )
                )}
              </div>
              <div className="text-sm">
                <p className="font-semibold text-foreground">{t.statsCard.activeClients}</p>
                <p className="text-xs text-muted-foreground">{t.statsCard.limitedSlots}</p>
              </div>
            </div>

            {/* Product mockup: abstract dashboard preview */}
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-elevated">
              <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="ms-3 h-5 flex-1 max-w-[60%] rounded-md bg-surface-muted" />
              </div>
              <div className="grid grid-cols-3 gap-3 p-5">
                <div className="col-span-2 flex flex-col gap-2 rounded-xl border border-border bg-surface-muted/40 p-4">
                  <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-primary to-accent" />
                  <div className="mt-3 flex h-24 items-end gap-1.5">
                    {[40, 65, 45, 80, 60, 95, 70].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/70 to-accent/60"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="rounded-xl border border-border bg-surface-muted/40 p-3">
                    <div className="h-2 w-1/2 rounded-full bg-muted-foreground/30" />
                    <div className="mt-2 h-4 w-3/4 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="rounded-xl border border-border bg-surface-muted/40 p-3">
                    <div className="h-2 w-1/2 rounded-full bg-muted-foreground/30" />
                    <div className="mt-2 h-4 w-2/3 rounded-full bg-primary/70" />
                  </div>
                  <div className="flex-1 rounded-xl border border-border bg-surface-muted/40 p-3">
                    <div className="h-2 w-1/2 rounded-full bg-muted-foreground/30" />
                    <div className="mt-2 h-4 w-1/2 rounded-full bg-accent/70" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-border p-5 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <s.icon className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-extrabold text-foreground">{s.value}</span>
                    <span className="text-xs leading-tight text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
