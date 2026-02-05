# Cactus IT Solution — Company Website (Next.js App Router)

A modern, responsive, SEO-friendly marketing site for **Cactus IT Solution** built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Features
- Clean, tech-forward UI with cactus-green accents
- Sticky navbar, responsive mobile menu
- Smooth page transitions (Framer Motion) + optional native View Transitions
- SEO: Metadata API, OpenGraph/Twitter images, sitemap, robots
- Accessible components (ARIA + keyboard-friendly)
- Contact form with validation + `/api/contact` Route Handler (Resend-ready)
- Ready for Vercel deployment

## Quick Start (npm)
```bash
npm install
npm run dev
```

## Contact form email
Set environment variables:
- `RESEND_API_KEY` (optional; if missing, the API returns success but only logs)

Then deploy to Vercel and configure the env var in your project settings.

## Scripts
- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — lint
- `npm run format` — format with Prettier + Tailwind plugin

## Project Structure
See `src/` for all app routes and components.
