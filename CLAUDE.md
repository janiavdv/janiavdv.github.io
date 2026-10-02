# CLAUDE.md

Jania's personal portfolio site, hosted on GitHub Pages at https://janiavdv.github.io. Pages: home, projects, resume, 404.

## Stack

Astro 5, Tailwind CSS 3, daisyUI 4 (`cupcake` light / `dracula` dark), TypeScript. Node 20 in CI.

## Commands

- `npm install`
- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built site

There's no test or lint setup; `npm run build` is the check.

## Structure

- `src/pages/` — routes (`index`, `projects`, `resume`, `404`, `robots.txt.ts`)
- `src/components/` — `Head.astro` plus `ui/` components
- `src/layouts/Layout.astro` — shared page layout
- `src/data/resume.ts`, `src/data/tagStyles.ts` — resume content and tag styling; update content here, not in pages
- `src/types/resume.ts` — types for the resume data
- `src/settings.ts` — profile, social links, theme names, site URL, SEO defaults
- `public/` — static files (favicon, og image, resume PDF)
- `DESIGN.md` — design system and visual rules; read before changing styling

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.

## Conventions

- Keep responses concise and conversational.
- Write idiomatic code; no unnecessary comments.
- Follow `DESIGN.md` and the existing daisyUI theme tokens rather than hard-coding colors.
- Open a PR for changes; don't push to `main`.
