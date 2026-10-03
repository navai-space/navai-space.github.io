# NAVAI Space — Company Website

Source for [navai-space.com](https://navai-space.com) — the website of **NAVAI Space**, building the onboard perception layer for spacecraft autonomy: an edge-optimized multi-sensor foundation model designed to help spacecraft track non-cooperative targets in real time.

The site is a single-page React app: a landing page covering the vision, the foundation model, application areas, and a contact form.

## Tech Stack

- [React 19](https://react.dev/) + TypeScript
- [Vite 6](https://vite.dev/) for dev server and production builds
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Motion](https://motion.dev/) for animations, [Lucide](https://lucide.dev/) icons

## Development

**Prerequisites:** Node.js 20+

```bash
npm ci          # install dependencies exactly as locked
npm run dev     # start dev server at http://localhost:3000
npm run lint    # type-check with tsc
npm run build   # production build to dist/
npm run preview # preview the production build
```

## Project Structure

```
├── index.html               # Vite entry point; page title, SEO and link-preview tags
├── public/                  # Copied as-is to the site root
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   └── og-image.png         # 1200×630 link-preview image
├── src/
│   ├── main.tsx             # React bootstrap
│   ├── App.tsx
│   ├── components/
│   │   ├── CompanyWebsite.tsx   # The landing page and contact form
│   │   └── NavaiLogo.tsx
│   ├── data.ts              # Company info (team, milestones); not currently shown on the site
│   ├── types.ts
│   └── assets/logo/         # Brand logos (SVG + PNG, primary and reversed-white)
└── .github/workflows/
    └── deploy.yml           # GitHub Pages deployment
```

The contact form posts to [FormSubmit](https://formsubmit.co/); the endpoint is `FORMSUBMIT_ENDPOINT` at the top of `CompanyWebsite.tsx`.

## Deployment

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml), which builds the app with `npm ci && npm run build` and publishes `dist/` to GitHub Pages.

To check a change before pushing, run `npm run lint`, then `npm run build` and `npm run preview`; this is the same build the workflow runs.

> **Note:** The repository's Pages settings must have **Source: GitHub Actions** selected (Settings → Pages).
