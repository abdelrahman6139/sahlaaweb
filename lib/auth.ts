/**
 * Server-side admin auth using an httpOnly cookie.
 * Configure ADMIN_PASSWORD and ADMIN_TOKEN in your environment (.env.local
 * for dev, your host's env settings for production) — see .env.example.
 *
 * In production these are required; there is no fallback, so a deployment
 * that forgets to set them fails closed (login always rejects) rather than
 * silently accepting a hardcoded default.
 */

const isProd = process.env.NODE_ENV === "production";

export const AUTH_COOKIE = "sahlaa_admin";

export function adminPassword(): string {
  const value = process.env.ADMIN_PASSWORD;
  if (value) return value;
  if (isProd) return ""; // no value can match an empty submitted password field
  return "dev-only-password"; // local development convenience only
}

/** The opaque session value stored in the cookie once authenticated. */
export function adminToken(): string {
  const value = process.env.ADMIN_TOKEN;
  if (value) return value;
  if (isProd) return "";
  return "dev-only-session-token";
}

/** Edge/middleware-safe check: is this cookie value a valid session? */
export function isValidSession(cookieValue: string | undefined): boolean {
  const token = adminToken();
  return !!cookieValue && !!token && cookieValue === token;
}
