<!-- .github/copilot-instructions.md -->
# Cactus IT Solution — Agent instructions (concise)

These notes help an AI coding agent be productive in this repository. Keep suggestions and edits small, explicit, and consistent with the project's patterns.

1. Big picture
- Next.js (App Router) + TypeScript + Tailwind CSS marketing site.
- UI composed from small building blocks in `src/components/ui/` and page sections in `src/components/sections/`.
- Route data / static content is in `src/content/` (e.g. `site.ts`, `projects.ts`, `services.ts`) and referenced by components.
- Server/API: Route handlers under `src/app/api/` (example: `src/app/api/contact/route.ts`). A small custom server is provided in `server.mjs` for non-Vercel hosts (cPanel).

2. Key files to read before editing
- `src/app/layout.tsx` — global layout, fonts, and Metadata (App Router metadata pattern).
- `src/app/page.tsx` and other route `page.tsx` files — canonical page composition using section components.
- `src/app/api/contact/route.ts` — contact form POST handler; uses Zod and Resend. Note: when `RESEND_API_KEY` is missing the handler intentionally returns success and logs.
- `src/components/forms/ContactForm.tsx` — client form component using `react-hook-form` + `zodResolver`; POSTs to `/api/contact`. Has honeypot field `website` (hidden) — bots filling it should be treated as spam.
- `src/content/site.ts` — central site metadata (SITE, NAV_ITEMS, SOCIAL_LINKS).
- `next.config.mjs` — external image remotePatterns; update when adding external image domains.

3. Conventions and patterns (project-specific)
- App Router (server components by default). Files with "use client" are explicit client components (e.g. `ContactForm.tsx`).
- Zod schemas and `zodResolver` are the standard for form validation (see `ContactForm.tsx` + `route.ts`). Mirror validation both client-side and server-side when possible.
- Tailwind-first styling. Small utility `cn` (in `src/lib/utils.ts`) composes classes. Prefer existing classes and preserve responsive utilities.
- UI primitives live in `src/components/ui/*` (Button, Card, Input, etc.) — reuse them rather than introducing new bare elements.
- Content driven: add new services/projects entries in `src/content/*.ts` rather than hardcoding strings in components.
- Emails: `src/app/api/contact/route.ts` relies on `RESEND_API_KEY` and `Resend` package. The handler returns OK when the key is missing to keep the UI working in dev — preserve that behavior unless changing intent.

4. Build / run / lint (developer workflows)
- Install: prefer pnpm or npm. package.json scripts are canonical.
  - Install: `pnpm install` (or `npm install`) 
  - Dev: `pnpm dev` → runs `next dev` (local App Router dev server).
  - Build: `pnpm build` → `next build`.
  - Start (production): `pnpm start` → `next start`.
  - Lint: `pnpm lint` (uses Next.js eslint config).
  - Format: `pnpm format` (Prettier + tailwind plugin).
- Custom server: `server.mjs` can be used instead of `next start` for environments that require a plain Node HTTP server (the file reads PORT from env for cPanel). Do not remove without confirming deployment targets.

5. Editing guidance for AI agents
- Small, focused PRs. Keep changes to a single responsibility (component, route, or content file).
- Use TypeScript types (see `src/types/*`) and preserve the project's export/alias pattern (`@/` path alias).
- When adding external image hosts, update `next.config.mjs` remotePatterns.
- Preserve accessibility and ARIA patterns found in components (e.g. `aria-live` in `ContactForm`, labels on inputs).
- Respect the honeypot: the field name is `website` (hidden). Server treats filled honeypots as success — keep this behavior if replicating forms.

6. Integration and external dependencies
- Resend (email) — server-side in `src/app/api/contact/route.ts`. Requires `RESEND_API_KEY` for real sends.
- Google fonts are loaded with `next/font/google` in `layout.tsx` — prefer editing font usage there.
- Toasts: the project uses `sonner` and local hooks (`src/hooks/use-toast.ts`) and UI wrappers in `src/components/ui/toast*`.

7. Examples to cite in PRs or fixes
- To wire a new API-backed form: replicate `ContactForm.tsx` (client-side hooks + zod) and `src/app/api/<your-route>/route.ts` (server zod parse + NextResponse). Keep the same error handling pattern.
- To add a new navigation item: update `NAV_ITEMS` in `src/content/site.ts` and ensure route `page.tsx` exists under `src/app/`.

8. What *not* to change without confirmation
- `next.config.mjs` image rules and experimental flags (viewTransition) — these affect build behavior.
- `server.mjs` unless deployment requirements call for it.
- Global font variables and `layout.tsx` metadata templates — confirm SEO/branding changes with maintainers.

If anything above is unclear, tell me where you'd like more detail (files, examples, or additional conventions) and I'll iterate.
