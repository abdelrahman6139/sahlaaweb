import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates, siteConfig } from "@/lib/seo";
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
  const title = isAr ? "تواصل معنا" : "Contact Us";
  const description = isAr
    ? "تواصل مع سهلة للبرمجيات في القاهرة، مصر. احكِ لنا عن مشروعك واحصل على عرض سعر ثابت — أنظمة نقاط بيع، ERP، تطبيقات، ومواقع."
    : "Get in touch with Sahlaa Software in Cairo, Egypt. Tell us about your project and get a fixed quote — POS, ERP, apps, and websites.";
  return {
    title,
    description,
    alternates: buildAlternates(locale, "/contact"),
    openGraph: { title, description, url: `${siteConfig.siteUrl}/${locale}/contact`, type: "website" },
  };
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  if (!isLocale(params.lang)) notFound();
  const locale = params.lang as Locale;
  const t = getDictionary(locale);
  const isAr = locale === "ar";

  const info = [
    { icon: Mail, label: t.contact.emailLabel, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, label: t.contact.phoneLabel2, value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.locationValue, href: undefined },
    { icon: Clock, label: isAr ? "الرد" : "Response", value: isAr ? "خلال ٢٤ ساعة" : "Within 24 hours", href: undefined },
  ];

  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: isAr ? "الرئيسية" : "Home", path: `/${locale}` },
          { name: t.nav.contact, path: `/${locale}/contact` },
        ])}
      />
      <Section>
        <SectionHeading eyebrow={t.contact.tag} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {info.map((item) => {
              const Icon = item.icon;
              const body = (
                <Card className="flex items-start gap-4 p-6" hover={!!item.href}>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="truncate font-semibold text-foreground" dir={item.icon === Phone ? "ltr" : undefined}>
                      {item.value}
                    </p>
                  </div>
                </Card>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {body}
                </a>
              ) : (
                <div key={item.label}>{body}</div>
              );
            })}
          </div>

          <Card className="p-7 sm:p-9">
            <ContactForm t={t} locale={locale} />
          </Card>
        </div>
      </Section>
    </>
  );
}
