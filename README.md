# Dear Melody — Marketing Website

Static marketing site for Dear Melody, built with Next.js (App Router), TypeScript, and Tailwind CSS. Pages are pre-rendered at build time (SSG) for fast loads and strong SEO.

## Stack

- **Next.js 16** — App Router, static generation, metadata API
- **TypeScript**
- **Tailwind CSS v4**
- **Docker** — multi-stage build with standalone output

## Pages

| Route      | Description              |
| ---------- | ------------------------ |
| `/`        | Home (hero, features, pricing teaser, CTA) |
| `/about`   | About                    |
| `/blog`    | Blog index (MDX posts)   |
| `/blog/[slug]` | Individual blog posts |
| `/pricing` | Pricing plans            |
| `/contact` | Contact form (placeholder) |
| `/privacy` | Privacy policy (placeholder) |
| `/terms`   | Terms of service (placeholder) |

SEO helpers included: per-page metadata, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`, and JSON-LD on the home page.

## Local development

```bash
npm install
cp .env.example .env.local   # optional — defaults to http://localhost:3000
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to your real domain so canonical URLs, sitemap, and Open Graph tags are correct.

## Docker

Build and run with Docker Compose:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com docker compose up --build -d
```

Or build the image directly:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  -t dearmelody-website .

docker run -p 3000:3000 dearmelody-website
```

The container runs Next.js in standalone mode on port 3000.

## Project structure

```
src/
  app/           # Routes and SEO files (sitemap, robots)
  components/    # Header, footer, UI primitives
  content/blog/  # MDX blog posts with frontmatter
  lib/           # Site config, SEO, and blog helpers
```

Site copy and branding live in `src/lib/site.ts`.

## Writing blog posts

Add a new `.mdx` file to `src/content/blog/` with frontmatter:

```mdx
---
title: "Your post title"
description: "A short summary for SEO and the blog index."
date: "2026-03-01"
author: "Optional author name"
---

Your MDX content here. Supports **markdown**, lists, blockquotes, and [links](/contact).
```

Posts are statically generated at build time. Custom MDX component styles live in `src/components/mdx-components.tsx`.

## Deploying to a VPS

1. Clone the repo on your server.
2. Set `NEXT_PUBLIC_SITE_URL` to your domain.
3. Run `docker compose up --build -d`.
4. Put a reverse proxy (nginx, Caddy, Traefik) in front of port 3000 with TLS.

## Next steps

- Replace placeholder copy in `src/lib/site.ts`
- Add real logo and OG image assets
- Wire the contact form to your email/CRM provider
- Replace legal page placeholders with final copy
