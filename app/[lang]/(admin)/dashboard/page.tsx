"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  MessageSquare,
  Star,
  Plus,
  Pencil,
  Trash2,
  LogOut,
  Globe,
  X,
  Mail,
} from "lucide-react";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { FieldLabel, Input, Textarea, Select } from "@/components/ui/Field";
import { useLanguage } from "@/context/LanguageContext";
import { typeColor, type Project } from "@/lib/projectMeta";
import type { ContactRequest } from "@/lib/db";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = ["POS System", "ERP Platform", "Mobile App", "Website", "Custom Software"];

const emptyForm: Partial<Project> = {
  title_en: "", title_ar: "", type: "POS System",
  summary_en: "", summary_ar: "", description_en: "", description_ar: "",
  tags: [], featured: false, mainImage: "", images: [],
};

export default function Dashboard() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const params = useParams();
  const lang = (params?.lang as string) === "ar" ? "ar" : "en";

  const [tab, setTab] = useState<"projects" | "requests">("projects");
  const [projects, setProjects] = useState<Project[]>([]);
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Project | null>(null);
  const [form, setForm] = useState<Partial<Project>>(emptyForm);
  const [selected, setSelected] = useState<ContactRequest | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const [p, r] = await Promise.all([fetch("/api/projects"), fetch("/api/requests")]);
      if (p.ok) setProjects(await p.json());
      if (r.ok) setRequests(await r.json());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const logout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push(`/${lang}/login`);
    router.refresh();
  };

  const openModal = (project?: Project) => {
    setEditing(project ?? null);
    setForm(project ? { ...project } : emptyForm);
    setModalOpen(true);
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editing ? "PUT" : "POST";
    const url = editing ? `/api/projects/${editing.id}` : "/api/projects";
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setModalOpen(false);
      fetchData();
    }
  };

  const remove = async (id: string) => {
    if (!confirm(language === "ar" ? "هل أنت متأكد من الحذف؟" : "Delete this project?")) return;
    const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
    if (res.ok) fetchData();
  };

  const stats = [
    { label: t.dashboard.totalProjects, value: projects.length, icon: Briefcase },
    { label: t.dashboard.featured, value: projects.filter((p) => p.featured).length, icon: Star },
    { label: t.dashboard.totalRequests, value: requests.length, icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Logo className="h-8" />
            <span className="hidden rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground sm:inline">
              {t.dashboard.title}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button href={`/${lang}`} variant="ghost" size="sm">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{t.dashboard.liveSite}</span>
            </Button>
            <Button onClick={logout} variant="secondary" size="sm">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">{language === "ar" ? "خروج" : "Logout"}</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.label} className="flex items-center gap-4 p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-8 flex items-center gap-2 border-b border-border">
          {(["projects", "requests"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={cn(
                "-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition",
                tab === key
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              )}
            >
              {t.dashboard.tabs[key]}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          </div>
        ) : tab === "projects" ? (
          <div className="mt-6">
            <div className="mb-4 flex justify-end">
              <Button onClick={() => openModal()} size="sm">
                <Plus className="h-4 w-4" />
                {t.dashboard.addProject}
              </Button>
            </div>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-start text-sm">
                  <thead className="border-b border-border bg-surface-muted/50 text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="px-5 py-3 text-start font-semibold">{t.dashboard.table.title}</th>
                      <th className="px-5 py-3 text-start font-semibold">{t.dashboard.table.type}</th>
                      <th className="px-5 py-3 text-center font-semibold">{t.dashboard.featured}</th>
                      <th className="px-5 py-3 text-end font-semibold">{t.dashboard.table.edit}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((p) => (
                      <tr key={p.id} className="border-b border-border last:border-0">
                        <td className="px-5 py-4 font-medium text-foreground">
                          {language === "ar" ? p.title_ar : p.title_en}
                        </td>
                        <td className="px-5 py-4">
                          <span className={cn("rounded-full border px-2.5 py-1 text-xs font-medium", typeColor(p.type))}>
                            {p.type}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-center">
                          {p.featured && <Star className="mx-auto h-4 w-4 fill-amber-400 text-amber-400" />}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => openModal(p)} aria-label={t.dashboard.table.edit} className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:text-foreground">
                              <Pencil className="h-4 w-4" />
                            </button>
                            <button onClick={() => remove(p.id)} aria-label={t.dashboard.table.delete} className="flex h-9 w-9 items-center justify-center rounded-lg border border-rose-500/20 text-rose-500 transition hover:bg-rose-500/10">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-start text-sm">
                  <thead className="border-b border-border bg-surface-muted/50 text-xs uppercase text-muted-foreground">
                    <tr>
                      <th className="px-5 py-3 text-start font-semibold">{language === "ar" ? "الاسم" : "Name"}</th>
                      <th className="px-5 py-3 text-start font-semibold">{t.contact.serviceType}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((r) => (
                      <tr
                        key={r.id}
                        onClick={() => setSelected(r)}
                        className={cn(
                          "cursor-pointer border-b border-border last:border-0 transition hover:bg-surface-muted/50",
                          selected?.id === r.id && "bg-surface-muted/50"
                        )}
                      >
                        <td className="px-5 py-4">
                          <p className="font-medium text-foreground">{r.name}</p>
                          <p className="text-xs text-muted-foreground" dir="ltr">{r.email}</p>
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">{r.service || "—"}</td>
                      </tr>
                    ))}
                    {requests.length === 0 && (
                      <tr><td className="px-5 py-10 text-center text-muted-foreground" colSpan={2}>{t.dashboard.requests.select}</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="lg:sticky lg:top-24 lg:self-start">
              {selected ? (
                <Card className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-lg font-bold text-foreground">{selected.name}</p>
                      <p className="text-sm text-muted-foreground" dir="ltr">{selected.email}</p>
                    </div>
                    <button onClick={() => setSelected(null)} aria-label="Close" className="text-muted-foreground hover:text-foreground">
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <dl className="mt-5 space-y-3 text-sm">
                    {selected.company && (
                      <div className="flex gap-2"><dt className="text-muted-foreground">{t.contact.company}:</dt><dd className="font-medium text-foreground">{selected.company}</dd></div>
                    )}
                    {selected.phone && (
                      <div className="flex gap-2"><dt className="text-muted-foreground">{t.contact.phoneLabel2}:</dt><dd className="font-medium text-foreground" dir="ltr">{selected.phone}</dd></div>
                    )}
                    <div className="flex gap-2"><dt className="text-muted-foreground">{t.dashboard.table.added}:</dt><dd className="font-medium text-foreground">{new Date(selected.createdAt).toLocaleDateString()}</dd></div>
                  </dl>
                  <div className="mt-5 rounded-xl border border-border bg-surface-muted/50 p-4 text-sm leading-relaxed text-foreground">
                    {selected.message}
                  </div>
                  <Button href={`mailto:${selected.email}`} className="mt-5 w-full">
                    <Mail className="h-4 w-4" />
                    {t.dashboard.requests.reply}
                  </Button>
                </Card>
              ) : (
                <Card className="flex flex-col items-center justify-center gap-3 p-12 text-center">
                  <MessageSquare className="h-10 w-10 text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground">{t.dashboard.requests.select}</p>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-elevated sm:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">
                  {editing ? t.dashboard.modal.editTitle : t.dashboard.modal.addTitle}
                </h2>
                <button onClick={() => setModalOpen(false)} aria-label={t.dashboard.modal.cancel} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <form onSubmit={save} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="f-te">Title (EN)</FieldLabel>
                    <Input id="f-te" required value={form.title_en} onChange={(e) => setForm({ ...form, title_en: e.target.value })} />
                  </div>
                  <div>
                    <FieldLabel htmlFor="f-ta">العنوان (AR)</FieldLabel>
                    <Input id="f-ta" required dir="rtl" value={form.title_ar} onChange={(e) => setForm({ ...form, title_ar: e.target.value })} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="f-type">{t.dashboard.table.type}</FieldLabel>
                    <Select id="f-type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
                      {PROJECT_TYPES.map((tp) => <option key={tp} value={tp}>{tp}</option>)}
                    </Select>
                  </div>
                  <label className="flex cursor-pointer items-center gap-3 self-end rounded-xl border border-border bg-surface-muted/50 px-4 py-3">
                    <input type="checkbox" checked={!!form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="h-4 w-4 accent-[rgb(var(--primary))]" />
                    <span className="text-sm font-medium text-foreground">{t.dashboard.modal.featuredLabel}</span>
                  </label>
                </div>
                <div>
                  <FieldLabel htmlFor="f-img">Main image URL</FieldLabel>
                  <Input id="f-img" dir="ltr" placeholder="https://…" value={form.mainImage} onChange={(e) => setForm({ ...form, mainImage: e.target.value })} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="f-se">Summary (EN)</FieldLabel>
                    <Textarea id="f-se" rows={2} value={form.summary_en} onChange={(e) => setForm({ ...form, summary_en: e.target.value })} />
                  </div>
                  <div>
                    <FieldLabel htmlFor="f-sa">الملخص (AR)</FieldLabel>
                    <Textarea id="f-sa" rows={2} dir="rtl" value={form.summary_ar} onChange={(e) => setForm({ ...form, summary_ar: e.target.value })} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <FieldLabel htmlFor="f-de">Description (EN)</FieldLabel>
                    <Textarea id="f-de" rows={4} value={form.description_en} onChange={(e) => setForm({ ...form, description_en: e.target.value })} />
                  </div>
                  <div>
                    <FieldLabel htmlFor="f-da">الوصف (AR)</FieldLabel>
                    <Textarea id="f-da" rows={4} dir="rtl" value={form.description_ar} onChange={(e) => setForm({ ...form, description_ar: e.target.value })} />
                  </div>
                </div>
                <div>
                  <FieldLabel htmlFor="f-tags">Tags (comma separated)</FieldLabel>
                  <Input
                    id="f-tags"
                    value={(form.tags ?? []).join(", ")}
                    onChange={(e) => setForm({ ...form, tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
                  />
                </div>
                <div className="flex justify-end gap-3 border-t border-border pt-5">
                  <Button type="button" variant="ghost" onClick={() => setModalOpen(false)}>{t.dashboard.modal.cancel}</Button>
                  <Button type="submit">{editing ? t.dashboard.modal.saveChanges : t.dashboard.modal.save}</Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pb-6 text-center">
        <Link href={`/${lang}`} className="text-xs text-muted-foreground hover:text-foreground">
          {t.nav.backToHome}
        </Link>
      </div>
    </div>
  );
}
