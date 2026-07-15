"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { FieldLabel, Input, Textarea, Select } from "./ui/Field";
import Button from "./ui/Button";
import type { TranslationKey } from "@/constants/translations";
import type { Locale } from "@/lib/i18n";

export default function ContactForm({ t, locale }: { t: TranslationKey; locale: Locale }) {
  const c = t.contact;
  const services = [
    ...t.services.list.map((s) => s.title),
    c.customSoftware,
    c.supportMaintenance,
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(c.fieldRequired);
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setError(c.errorNetwork);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <h3 className="text-xl font-bold text-foreground">{c.successTitle}</h3>
        <p className="text-sm text-muted-foreground">{c.successBody}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="cf-name" required>{c.nameLabel}</FieldLabel>
          <Input id="cf-name" value={form.name} onChange={update("name")} placeholder={c.placeholderName} autoComplete="name" />
        </div>
        <div>
          <FieldLabel htmlFor="cf-email" required>{c.emailLabel}</FieldLabel>
          <Input id="cf-email" type="email" value={form.email} onChange={update("email")} placeholder="name@company.com" autoComplete="email" dir="ltr" />
        </div>
        <div>
          <FieldLabel htmlFor="cf-phone">{c.phoneLabel}</FieldLabel>
          <Input id="cf-phone" type="tel" value={form.phone} onChange={update("phone")} placeholder="+20 …" autoComplete="tel" dir="ltr" />
        </div>
        <div>
          <FieldLabel htmlFor="cf-company">{c.company}</FieldLabel>
          <Input id="cf-company" value={form.company} onChange={update("company")} autoComplete="organization" />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="cf-service">{c.serviceType}</FieldLabel>
        <Select id="cf-service" value={form.service} onChange={update("service")}>
          <option value="">{c.servicePlaceholder}</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </Select>
      </div>

      <div>
        <FieldLabel htmlFor="cf-message" required>{c.message}</FieldLabel>
        <Textarea id="cf-message" rows={5} value={form.message} onChange={update("message")} placeholder={c.messagePlaceholder} />
      </div>

      {error && (
        <p className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-500">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "sending"} className="w-full sm:w-auto">
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {c.sending}
          </>
        ) : (
          <>
            {c.sendBtn}
            <Send className="h-4 w-4 rtl:-scale-x-100" />
          </>
        )}
      </Button>
    </form>
  );
}
