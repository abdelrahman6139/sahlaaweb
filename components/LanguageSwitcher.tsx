"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const labels: Record<Locale, string> = { en: "EN", ar: "عربي" };

/** Swaps the locale prefix on the current path so the user stays on the same page. */
function swapLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/");
  // segments[0] === "" because pathname starts with "/"
  if (segments[1] && isLocale(segments[1])) {
    segments[1] = target;
  } else {
    segments.splice(1, 0, target);
  }
  return segments.join("/") || `/${target}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const current: Locale =
    isLocale(pathname.split("/")[1] ?? "") ? (pathname.split("/")[1] as Locale) : "en";

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-surface p-1">
      {locales.map((l) => (
        <Link
          key={l}
          href={swapLocale(pathname, l)}
          aria-current={current === l ? "true" : undefined}
          className={cn(
            "rounded-md px-2.5 py-1 text-xs font-bold transition",
            current === l
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {labels[l]}
        </Link>
      ))}
    </div>
  );
}
