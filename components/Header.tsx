"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

interface NavDict {
  home: string;
  solutions: string;
  projects: string;
  contact: string;
  themeToggle: string;
  menu: string;
  close: string;
  startProject: string;
}

export default function Header({ locale, nav }: { locale: Locale; nav: NavDict }) {
  const pathname = usePathname() || "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const base = `/${locale}`;
  const links = [
    { href: base, label: nav.home },
    { href: `${base}/solutions`, label: nav.solutions },
    { href: `${base}/projects`, label: nav.projects },
    { href: `${base}/contact`, label: nav.contact },
  ];

  const isActive = (href: string) =>
    href === base ? pathname === base : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <div className="section-container flex h-20 items-center justify-between gap-6">
        <Link href={base} aria-label="Sahlaa" className="shrink-0">
          <Logo className="h-9" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "relative rounded-lg px-4 py-2.5 text-sm font-medium transition",
                isActive(l.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute inset-x-4 -bottom-[1px] h-0.5 rounded-full bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle label={nav.themeToggle} />
          <div className="hidden md:block">
            <Button href={`${base}/contact`} size="sm">
              {nav.startProject}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? nav.close : nav.menu}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm font-medium transition",
                    isActive(l.href)
                      ? "bg-surface-muted text-foreground"
                      : "text-muted-foreground hover:bg-surface-muted hover:text-foreground"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-3 flex items-center justify-between">
                <LanguageSwitcher />
                <Button href={`${base}/contact`} size="sm">
                  {nav.startProject}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
