import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import Logo from "./Logo";
import { siteConfig } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import type { TranslationKey } from "@/constants/translations";

export default function Footer({ locale, t }: { locale: Locale; t: TranslationKey }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t.nav.solutions,
      links: [
        { href: `${base}/solutions/pos`, label: t.services.list[0].title },
        { href: `${base}/solutions/erp`, label: t.services.list[1].title },
        { href: `${base}/solutions/mobile-app`, label: t.services.list[2].title },
        { href: `${base}/solutions/website`, label: t.services.list[3].title },
      ],
    },
    {
      title: t.footer.links,
      links: [
        { href: base, label: t.nav.home },
        { href: `${base}/solutions`, label: t.nav.solutions },
        { href: `${base}/projects`, label: t.nav.projects },
        { href: `${base}/contact`, label: t.nav.contact },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface-muted/40">
      <div className="section-container py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-500 dark:text-sky-400">
              {t.footer.tagline}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">{t.footer.about}</p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.sameAs[0]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition hover:text-primary hover:border-primary/40"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.sameAs[1]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition hover:text-primary hover:border-primary/40"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">{t.nav.contact}</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2.5 transition hover:text-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2.5 transition hover:text-foreground" dir="ltr">
                  <Phone className="h-4 w-4 text-primary" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary" />
                {t.footer.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>{t.footer.rights.replace("2026", String(year))}</p>
          <p>{t.footer.consultation}</p>
        </div>
      </div>
    </footer>
  );
}
