# NAVAI Space — Company Website

Source for [navai-space.github.io](https://navai-space.github.io) — the website of **NAVAI Space**, building the onboard perception layer for spacecraft autonomy: an edge-optimized multi-sensor foundation model that lets spacecraft track non-cooperative targets in real time, under the harshest lighting conditions in orbit.

The site is a single-page React app with two views:

- **Company website** — landing page with mission, technology, and team.
- **Developer portal** — interactive showcase and repository template browser.

## Tech Stack

- [React 19](https://react.dev/) + TypeScript
- [Vite 6](https://vite.dev/) for dev server and production builds
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [Motion](https://motion.dev/) for animations, [Lucide](https://lucide.dev/) icons

## Development

**Prerequisites:** Node.js 20+

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:3000
npm run lint    # type-check with tsc
npm run build   # production build to dist/
npm run preview # preview the production build
```

## Project Structure

```
├── index.html               # Vite entry point
├── src/
│   ├── main.tsx             # React bootstrap
│   ├── App.tsx              # View switcher (website ⇄ developer portal)
│   ├── components/
│   │   ├── CompanyWebsite.tsx
│   │   ├── DeveloperPortal.tsx
│   │   └── NavaiLogo.tsx
│   ├── data.ts              # Site content (company info, team, milestones)
│   ├── types.ts             # Shared TypeScript types
│   └── assets/images/       # Static images
└── .github/workflows/
    └── deploy.yml           # GitHub Pages deployment
```

## Deployment

Every push to `main` triggers the [deploy workflow](.github/workflows/deploy.yml), which builds the app with `npm ci && npm run build` and publishes `dist/` to GitHub Pages.

> **Note:** The repository's Pages settings must have **Source: GitHub Actions** selected (Settings → Pages).
