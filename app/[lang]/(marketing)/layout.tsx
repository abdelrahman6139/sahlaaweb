import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

export default function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  if (!isLocale(params.lang)) notFound();
  const lang = params.lang as Locale;
  const t = getDictionary(lang);

  return (
    <>
      <Header locale={lang} nav={t.nav} />
      <main className="pt-20">{children}</main>
      <Footer locale={lang} t={t} />
    </>
  );
}
