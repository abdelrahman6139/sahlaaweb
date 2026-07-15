import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";
import { AUTH_COOKIE, isValidSession } from "@/lib/auth";

const PUBLIC_FILE = /\.(.*)$/;

/** Write operations on these API routes require an admin session. */
function isProtectedApi(pathname: string, method: string): boolean {
  const isWrite = ["POST", "PUT", "DELETE", "PATCH"].includes(method);
  if (pathname.startsWith("/api/requests")) {
    // Reading inquiries is admin-only; submitting the contact form (POST) is public.
    return method === "GET";
  }
  if (pathname.startsWith("/api/projects")) {
    return isWrite; // reads are public (used to render the site)
  }
  return false;
}

function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (cookie && locales.includes(cookie as (typeof locales)[number])) return cookie;

  const accept = req.headers.get("accept-language") ?? "";
  if (/(^|,|\s)ar\b/i.test(accept)) return "ar";
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const authed = isValidSession(req.cookies.get(AUTH_COOKIE)?.value);

  // Protect admin-only API operations.
  if (pathname.startsWith("/api")) {
    if (isProtectedApi(pathname, req.method) && !authed) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    return NextResponse.next();
  }

  // Skip Next internals and files with extensions (covers sitemap/robots/llms.txt handlers)
  if (
    pathname.startsWith("/_next") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/llms.txt" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Already has a locale prefix → continue.
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) {
    // Gate the admin dashboard behind a valid session.
    if (/^\/(en|ar)\/dashboard(\/|$)/.test(pathname) && !authed) {
      const url = req.nextUrl.clone();
      url.pathname = `/${pathname.split("/")[1]}/login`;
      return NextResponse.redirect(url);
    }
    const res = NextResponse.next();
    res.cookies.set("NEXT_LOCALE", pathname.split("/")[1], { path: "/" });
    return res;
  }

  // No locale → redirect to the detected one, preserving the path.
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set("NEXT_LOCALE", locale, { path: "/" });
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
