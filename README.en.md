# TRIGRA — Website

[🇪🇸 Español](README.md) · 🇺🇸 English

Website of **TRIGRA**, a digital solutions company: web development, custom systems, process automation and artificial intelligence.

🌐 **Live:** [trigra-app.web.app](https://trigra-app.web.app)

Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), fully static, deployed to **Firebase Hosting** with **GitHub Actions**.

---

## ✨ What's included

A single page (`/`) with section navigation:

| Section | Content |
| --- | --- |
| **Hero** | Headline, calls to action and animated counters |
| **Projects** | List with an animated indicator and preview; *Full case study* modal with a gallery (website / admin panel) and a full-screen carousel |
| **Solutions** | 8 services as cards, each with its own detail modal |
| **Technologies** | Infinite-loop logo marquee |
| **Process** | 4 steps as draggable cards with inertia |
| **About us** | Mission, vision and founder card |
| **Contact** | Form that validates and sends the message through WhatsApp (pre-filled depending on the button the visitor came from) |
| **Footer** | Navigation and Privacy Policy / Terms modals |

Also: a navbar with a sliding indicator that hides when reaching the footer, a floating social button that fans out, scroll-triggered entrance animations, and the original *coming soon* landing kept at [`/proximamente`](https://trigra-app.web.app/proximamente).

## 🚀 Local development

Requires **Node.js 20+**.

```bash
npm install       # install dependencies
npm run dev       # local server at http://localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the build (use this to measure with Lighthouse)
```

> Measure performance on `npm run build && npm run preview`, not on `npm run dev`: dev mode doesn't bundle or compress, so scores are misleading.

## 🗂️ Structure

```
src/
├── components/     # One section or UI piece per file (Hero, Proyectos, SolucionModal…)
├── data/           # Editable content: projects, solutions, process, technologies, legal, social
├── layouts/        # BaseLayout: <head>, fonts, SEO meta tags
├── pages/          # index (site), proximamente, 404
├── scripts/        # Shared logic: modals (modal.ts) and scroll reveal (reveal.ts)
├── styles/         # global.css: Tailwind, animations and modal styles
└── utils/          # Build-time helpers: image dimensions, inline SVG
public/
├── icons/          # SVG icons (solutions, steps, social, decorations)
└── images/         # Photos and screenshots, organized by section
```

## ✏️ Editing content

Most copy **doesn't live in the components** but in `src/data/`, so it can be changed without touching the design:

| To change… | File |
| --- | --- |
| Projects (copy, stack, URL, gallery) | `src/data/proyectos.ts` |
| Solutions and their modal | `src/data/soluciones.ts` |
| Process steps | `src/data/proceso.ts` |
| Technology marquee logos | `src/data/tecnologias.ts` |
| Privacy Policy / Terms | `src/data/legal.ts` |
| Social links, WhatsApp number and message | `src/data/social.ts` |

> The site content is in Spanish; file and folder names follow that language.

### Images

Images are detected **at build time**: if the file exists it is shown; otherwise a placeholder appears. Conventions:

| Use | Path |
| --- | --- |
| Project thumbnail / modal screenshot | `public/images/proyectos/<slug>.webp` · `<slug>-full.webp` |
| Project modal gallery | `public/images/proyectos/<slug>/web-1..4.webp` · `admin-1..4.webp` (+ `-lg` for the carousel) |
| Solution | `public/images/soluciones/<slug>.webp` |
| Process step | `public/images/proceso/<slug>.webp` |
| Technology logo | `public/images/tecnologias/<slug>.svg` (or `.webp`/`.png`) |
| Team photo | `public/images/equipo/<slug>.webp` |
| Solution / step icon | `public/icons/icon-<name>.svg` · `icon-paso-<slug>.svg` |

> **Optimize before uploading.** Screenshots often come as multi-MB PNGs. Convert them to WebP at their display size (with [`sharp`](https://sharp.pixelplumbing.com), which ships with Astro). SVG icons are inlined into the HTML and take the text color, so their original color doesn't matter.

## 🔄 Deployment (CI/CD)

- **Push to `main`** → `deploy.yml` builds and publishes to **production** (`live` channel).
- **Pull Request** → `preview.yml` publishes a **temporary preview URL** to review before merging.

The `FIREBASE_SERVICE_ACCOUNT_TRIGRA_APP` secret is already set in the repository and `projectId: trigra-app` is fixed in the workflows. For a manual deploy:

```bash
npm run build
firebase deploy --only hosting
```

> ⚠️ Every push to `main` goes to production. For larger changes, work on a branch and open a Pull Request.

## 🔒 Security and performance

`firebase.json` applies security headers to every route: HSTS, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP and a **strict Content-Security-Policy** (own resources only, `script-src 'self'`). Firebase doesn't allow comments in that file, so the explanation lives here.

Decisions to keep in mind when adding code:

- **No inline scripts.** The CSP blocks them; that's why `astro.config.mjs` sets `assetsInlineLimit: 0` and attributes like `onclick` or `onload` aren't used.
- **Self-hosted fonts.** Space Grotesk and Plus Jakarta Sans are served from the site with `@fontsource` (no Google Fonts).
- **No `backdrop-filter: blur`** over scrolling content or on fixed elements: it causes scroll jank.
- **Deferred images.** Modal images are preloaded when approaching their button; the footer background is requested when reaching it.
- If a third-party service is added (analytics, forms), the CSP must be extended with its domain.

## 🎨 Design system

- **Space Grotesk** → headings and buttons (`font-display`)
- **Plus Jakarta Sans** → body text (`font-body`)
- Brand colors in `tailwind.config.mjs`; typography tokens exported from Figma in `src/design/textStyles.json`.

## 📄 License

**Proprietary software.** © 2026 TRIGRA. All rights reserved. Copying, modifying, distributing or using this code without written permission is not allowed. See [LICENSE](LICENSE).
