export interface Project {
  id: string;
  title_en: string;
  title_ar: string;
  summary_en: string;
  summary_ar: string;
  description_en: string;
  description_ar: string;
  type: string;
  tags: string[];
  mainImage?: string;
  images: string[];
  featured: boolean;
  createdAt: string;
  client?: string;
  year?: string;
  url?: string;
}

/** Badge color tokens per project type. Defined once, reused across all cards. */
export const typeColors: Record<string, string> = {
  "POS System": "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  "ERP Platform": "bg-brand-500/10 text-brand-500 border-brand-500/20",
  "Mobile App": "bg-violet-500/10 text-violet-500 border-violet-500/20",
  Website: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Custom Software": "bg-rose-500/10 text-rose-500 border-rose-500/20",
};

export function typeColor(type: string): string {
  return typeColors[type] ?? "bg-slate-500/10 text-muted-foreground border-border";
}
