# Sahlaa Software Website

Premium, bilingual (Arabic/English) company website built with Next.js 14, TypeScript, and Tailwind CSS — engineered for SEO and generative-engine (AI) discoverability.

## Highlights
- **Bilingual, separately-indexable** routes: every page exists at `/en/...` and `/ar/...` with `hreflang` alternates and server-rendered `lang`/`dir` (no RTL flash).
- **Premium UI** with a light/dark theme toggle (persisted, no-flash), built on semantic design tokens and a reusable component system.
- **Intent-based solution pages** (`/[lang]/solutions/[slug]`) targeting real buyer questions ("I want a POS system", "I want to build a startup"): POS, ERP, startup MVP, mobile app, website, custom software. Each carries `Service` + `FAQPage` + `BreadcrumbList` JSON-LD.
- **Secured admin**: server-side httpOnly-cookie auth (no client password), middleware-gated `/[lang]/dashboard` and write APIs.

## Routes
- `/` → redirects to `/en` (or `/ar` via `Accept-Language`)
- `/[lang]` — home · `/[lang]/solutions` + `/[lang]/solutions/[slug]` — solutions
- `/[lang]/projects` + `/[lang]/projects/[id]` — portfolio · `/[lang]/contact` — contact
- `/[lang]/login` + `/[lang]/dashboard` — admin (noindex, gated)
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/manifest.webmanifest`

## SEO + GEO
- Per-page metadata with canonical + `hreflang` (en / ar / x-default) via `lib/seo.ts` `buildAlternates`.
- JSON-LD builders in `lib/schema.ts` (`ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`, `ItemList`).
- Locale-aware `sitemap.ts` (both languages + all solutions/projects), `robots.ts` (welcomes AI crawlers, blocks admin/api), and an expanded `/llms.txt` listing solution pages as preferred sources.

## Environment
Copy `.env.example` to `.env.local` and set:
- `NEXT_PUBLIC_SITE_URL` — canonical/sitemap host.
- `ADMIN_PASSWORD` — the admin login password.
- `ADMIN_TOKEN` — a long random session value.

## Data & hosting
Content lives in `data/*.json`, accessed through the `lib/db.ts` seam. JSON writes work locally and for read-only production; for host-safe writes on Vercel/Netlify, swap the `lib/db.ts` bodies for a hosted store (Vercel KV / Postgres / Turso).

## Scripts
- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — lint checks
