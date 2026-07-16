"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { HighlightedTitle } from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { cn } from "@/lib/utils";
import type { Solution } from "@/data/solutions";
import type { Locale } from "@/lib/i18n";

/** Per-card dark accent themes, cycled across the services. */
const accents = [
  { grad: "from-[#0c1226] to-[#080c18]", tag: "bg-blue-500/15 text-blue-300 ring-blue-400/20", num: "text-blue-300/50", btn: "bg-blue-600 hover:bg-blue-500", glow: "bg-blue-500/25" },
  { grad: "from-[#07140f] to-[#050d0a]", tag: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/20", num: "text-emerald-300/50", btn: "bg-emerald-600 hover:bg-emerald-500", glow: "bg-emerald-500/25" },
  { grad: "from-[#150c26] to-[#0e0818]", tag: "bg-violet-500/15 text-violet-300 ring-violet-400/20", num: "text-violet-300/50", btn: "bg-violet-600 hover:bg-violet-500", glow: "bg-violet-500/25" },
  { grad: "from-[#231404] to-[#160c03]", tag: "bg-amber-500/15 text-amber-300 ring-amber-400/20", num: "text-amber-300/50", btn: "bg-amber-500 hover:bg-amber-400 text-black", glow: "bg-amber-500/25" },
  { grad: "from-[#210b12] to-[#16070c]", tag: "bg-rose-500/15 text-rose-300 ring-rose-400/20", num: "text-rose-300/50", btn: "bg-rose-600 hover:bg-rose-500", glow: "bg-rose-500/25" },
  { grad: "from-[#04171d] to-[#030f13]", tag: "bg-cyan-500/15 text-cyan-300 ring-cyan-400/20", num: "text-cyan-300/50", btn: "bg-cyan-500 hover:bg-cyan-400 text-black", glow: "bg-cyan-500/25" },
];

interface Props {
  solutions: Solution[];
  locale: Locale;
  eyebrow: string;
  title: string;
  exploreLabel: string;
  prevLabel: string;
  nextLabel: string;
}

export default function ServicesCarousel({
  solutions,
  locale,
  eyebrow,
  title,
  exploreLabel,
  prevLabel,
  nextLabel,
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const isRTL = locale === "ar";

  const go = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(solutions.length - 1, index));
      setActive(next);
      const track = trackRef.current;
      const card = track?.children[next] as HTMLElement | undefined;
      card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    },
    [solutions.length]
  );

  // Keep `active` roughly in sync when the user scrolls/swipes manually.
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const c = el.offsetLeft + el.offsetWidth / 2;
      const d = Math.abs(c - center);
      if (d < min) {
        min = d;
        nearest = i;
      }
    });
    setActive(nearest);
  }, []);

  return (
    <div>
      {/* Header: eyebrow + title on the start side, arrows on the end side */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-4">
          <Badge eyebrow>{eyebrow}</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <HighlightedTitle text={title} />
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(active - 1)}
            disabled={active === 0}
            aria-label={prevLabel}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-primary/50 hover:text-primary disabled:opacity-40 disabled:pointer-events-none"
          >
            {isRTL ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            disabled={active === solutions.length - 1}
            aria-label={nextLabel}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-primary/50 hover:text-primary disabled:opacity-40 disabled:pointer-events-none"
          >
            {isRTL ? <ArrowLeft className="h-5 w-5" /> : <ArrowRight className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="scrollbar-hide mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4"
        style={{ scrollPadding: "0 1rem" }}
      >
        {solutions.map((s, i) => {
          const accent = accents[i % accents.length];
          const c = s[locale];
          const isActive = i === active;
          return (
            <article
              key={s.slug}
              className={cn(
                "group relative w-[86vw] max-w-[560px] shrink-0 snap-center overflow-hidden rounded-3xl bg-gradient-to-b p-5 ring-1 ring-white/10 transition-all duration-500 sm:w-[70vw] sm:p-6 lg:w-[560px]",
                accent.grad,
                isActive ? "opacity-100" : "opacity-55 hover:opacity-80"
              )}
            >
              <div
                className={cn(
                  "pointer-events-none absolute -top-24 start-1/2 h-56 w-72 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-500",
                  accent.glow,
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />

              <div className="relative flex items-center justify-between">
                <span className={cn("font-mono text-2xl font-bold tabular-nums", accent.num)}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider ring-1",
                    accent.tag
                  )}
                >
                  {s.category[locale]}
                </span>
              </div>

              <div className="relative mt-4 aspect-[16/11] overflow-hidden rounded-2xl">
                <Image
                  src={s.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 640px) 86vw, 560px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative mt-6 flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white">{c.name}</h3>
                <p className="min-h-[2.5rem] text-sm leading-relaxed text-white/60">{c.tagline}</p>
                <Link
                  href={`/${locale}/solutions/${s.slug}`}
                  className={cn(
                    "mt-2 inline-flex w-fit items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition",
                    accent.btn
                  )}
                >
                  {exploreLabel}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* Progress dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {solutions.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => go(i)}
            aria-label={`${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === active ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
