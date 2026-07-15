import { MapPinned, CodeXml, Wallet, ShieldCheck } from "lucide-react";
import Reveal from "../Reveal";
import type { TranslationKey } from "@/constants/translations";

const icons = [MapPinned, CodeXml, Wallet, ShieldCheck];

export default function Differentiators({ t }: { t: TranslationKey }) {
  return (
    <section className="border-b border-border bg-surface-muted/40">
      <div className="section-container grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse lg:grid-cols-4">
        {t.differentiators.list.map((item, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={item.title} delay={i * 0.05} className="h-full">
              <div className="flex h-full items-start gap-3.5 px-1 py-6 sm:px-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
