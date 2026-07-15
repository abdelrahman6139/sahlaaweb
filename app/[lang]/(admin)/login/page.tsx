"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, ArrowRight, ShieldCheck, Loader2 } from "lucide-react";
import Logo from "@/components/Logo";
import { FieldLabel, Input } from "@/components/ui/Field";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const router = useRouter();
  const params = useParams();
  const lang = (params?.lang as string) === "ar" ? "ar" : "en";
  const isAr = lang === "ar";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push(`/${lang}/dashboard`);
        router.refresh();
      } else {
        setError(isAr ? "كلمة المرور غير صحيحة" : "Invalid password.");
        setLoading(false);
      }
    } catch {
      setError(isAr ? "حدث خطأ. حاول مرة أخرى." : "Something went wrong. Try again.");
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="relative w-full max-w-sm">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
        <div className="relative rounded-2xl border border-border bg-surface/80 p-8 shadow-elevated backdrop-blur-xl">
          <div className="mb-8 flex flex-col items-center text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              {isAr ? "تسجيل دخول المشرف" : "Admin Login"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {isAr ? "أدخل كلمة المرور للمتابعة" : "Enter your password to continue"}
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <FieldLabel htmlFor="admin-password">{isAr ? "كلمة المرور" : "Password"}</FieldLabel>
              <div className="relative">
                <Lock className="absolute start-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="ps-11"
                  autoComplete="current-password"
                />
              </div>
            </div>

            {error && (
              <p className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-500">
                {error}
              </p>
            )}

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  {isAr ? "دخول" : "Sign In"}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Logo className="h-6" showText={false} />
            <Link href={`/${lang}`} className="text-xs text-muted-foreground transition hover:text-foreground">
              {isAr ? "العودة للرئيسية" : "Back to Home"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
