import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Card from "./ui/Card";
import { typeColor, type Project } from "@/lib/projectMeta";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  locale,
  viewLabel,
}: {
  project: Project;
  locale: Locale;
  viewLabel: string;
}) {
  const isAr = locale === "ar";
  const title = isAr ? project.title_ar : project.title_en;
  const summary = isAr ? project.summary_ar : project.summary_en;
  const image = project.mainImage || project.images?.[0];

  return (
    <Card as="article" hover className="group flex flex-col overflow-hidden">
      <Link href={`/${locale}/projects/${project.id}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-surface-muted" />
          )}
          <span
            className={cn(
              "absolute start-3 top-3 rounded-full border px-2.5 py-1 text-xs font-semibold backdrop-blur-sm",
              typeColor(project.type)
            )}
          >
            {project.type}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {summary}
          </p>
          <div className="flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary">
            {viewLabel}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" />
          </div>
        </div>
      </Link>
    </Card>
  );
}
