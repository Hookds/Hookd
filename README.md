# Hookd marketing site

Standalone Next.js App Router project: **not** part of `pmsbuild`. Keep code, installs, deployments, and remotes isolated.

## Prerequisites

- Node 20+
- npm (ships with Node)

## Local dev

```bash
cd /Users/kirtanmirani/Projects/hookd-website
npm install          # skip if deps already installed
npm run dev          # http://localhost:3000
```

## Configure booking + metadata

| What | Where |
| --- | --- |
| Booking / calendar links | `lib/constants.ts` (`BOOKING_URL`) |
| Default SEO host | `app/layout.tsx` (`metadata.metadataBase`) |

## Brand palette (site-wide)

Custom tokens live in `app/globals.css` under `@theme inline`:

| Token | Hex | Typical use |
| --- | --- | --- |
| `hookd-navy` | `#0F172A` | Headlines, featured service card fill, outlines |
| `hookd-rose` | `#D9899C` | Brand fills: buttons, icons, soft tints |
| `hookd-rose-strong` | `#8B3650` | **Readable** pink on white / grey (quotes, emphasis) |
| `hookd-rose-on-dark` | `#F5D0D8` | **Readable** pink on navy (featured card quotes) |
| `hookd-muted` | `#F8F9FA` | Outer service cards, audits |
| `hookd-bg` | `#FFFFFF` | Page canvas |
| `hookd-body` | `#374151` | Paragraph copy (darker grey for legibility) |

Palette stays within these tokens (plus white/navy mixes): **white** as the default field, **mid pink** only for large fills/buttons, **darker/lighter roses** for small text.

Fonts: **Inter** (body/UI) + **Plus Jakarta Sans** (headlines & display lines via `font-serif`). This pairing matches common modern B2B and SaaS sites; swap faces in `app/layout.tsx` if your brand team prefers something else (e.g. all-Inter, or IBM Plex).

## Routes implemented

| Path | Notes |
| --- | --- |
| `/` | Homepage mapped to briefing: hero, social proof placeholders, hover services, Hookd AI prompt, audit block, narrative sections |
| `/services/paid-ads` | Condensed Paid Ads storyline + CTAs |
| `/services/content-creation` | Condensed content storyline |
| `/services/hookd-closers` | Closer wedge + simplified pricing tiers |
| `/hookd-ai` | Stub explainer: you will embed conversational product surface |
| `/skeptical` | Alternate CTA for skeptical visitors |

Audit UI: `components/AuditToolSection.tsx`. Wire uploads, LLM, and email-before-results flows on your backend.

## Git (own repo: never inside `pmsbuild`)

`create-next-app` started `.git`; this environment couldn’t finalize it. **On your machine**, initialize a standalone repo here (no relation to `pmsbuild`):

```bash
cd /Users/kirtanmirani/Projects/hookd-website
git init -b main
# after your first snapshot:
#   git add . && git commit -m "..."
#   git remote add origin <your-new-empty-repo-url>
#   git push -u origin main
```

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local preview |
| `npm run build` | Production smoke test |
| `npm run lint` | ESLint |
