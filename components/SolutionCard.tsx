import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Card from "./ui/Card";
import { SolutionIcon } from "./icons";
import type { Solution } from "@/data/solutions";
import type { Locale } from "@/lib/i18n";

export default function SolutionCard({
  solution,
  locale,
  learnMore,
}: {
  solution: Solution;
  locale: Locale;
  learnMore: string;
}) {
  const content = solution[locale];
  return (
    <Card hover className="group flex flex-col gap-4 p-7">
      <Link href={`/${locale}/solutions/${solution.slug}`} className="flex h-full flex-col gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
          <SolutionIcon name={solution.icon} className="h-6 w-6" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-sm font-medium text-primary">&ldquo;{content.intent}&rdquo;</p>
          <h3 className="text-lg font-semibold text-foreground">{content.name}</h3>
          <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{content.tagline}</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {learnMore}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </Link>
    </Card>
  );
}
