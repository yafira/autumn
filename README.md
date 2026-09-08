# Autumn — homepage

Design Engineer take-home assignment. One page, greenfield, deployed on its own infra — a proposed homepage that could replace Autumn's two existing sites (`findautumn.com`, `get-autumn.com`) for both sales and recruiting.

Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion.

## Stack

- **Next.js** — App Router, statically prerendered at build time (no server required)
- **Tailwind CSS v4** — CSS-first theme in `src/app/globals.css` (`@theme`) holding every design token: colors, fonts, spacing
- **Framer Motion** — scroll-triggered reveals, the SEM funnel diagram's animated flow lines, the hero dashboard's animated trend line and counters, the hotel carousel's slide transitions, the interactive flanking hero cards, the animated FAQ accordion
- **Instrument Sans** (headlines) + **Inter** (body) via Google Fonts, and a self-hosted **Departure Mono** (OFL-licensed, `public/fonts/`) for every numeric/data figure on the page — prices, stats, ratings, the departure-board-style flip-reveal number
- **TypeScript**, **ESLint** — configured out of the box, both clean

## Run locally

```
npm install
npm run dev
```

Visit http://localhost:3000

## Build

```
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx        — fonts, metadata
    page.tsx           — assembles the page from components
    globals.css        — design tokens (@theme) + base styles
  components/
    Header.tsx, Footer.tsx, LeafMark.tsx     — nav/footer + wordmark
    Hero.tsx, HeroVisual.tsx, RateToggle.tsx,
    AutumnDashboard.tsx, FlipReveal.tsx      — hero: headline, dashboard
                                                mockup, direct-vs-OTA toggle
    HotelCarousel.tsx                        — auto-advancing property
                                                carousel with per-property
                                                outcome stats
    Problem.tsx                              — pain points
    Sem.tsx, FunnelDiagram.tsx, SearchMock.tsx — SEM section (the hero
                                                offering) + funnel diagram
    Proof.tsx, Counter.tsx                   — social proof: case study,
                                                text thread, video slot
    Services.tsx                             — the other four services,
                                                as a vertical timeline
    PhotoSpotlight.tsx                       — real property photo +
                                                floating stat card
    Flagship.tsx, BellButton.tsx             — Flagship Program entry
    Faq.tsx                                  — animated accordion
    FinalCta.tsx                             — closing CTA
    Eyebrow.tsx, Reveal.tsx, IndexCounter.tsx — shared: section labels,
                                                scroll-reveal wrapper,
                                                sticky progress counter

public/
  fonts/               — self-hosted Departure Mono + its OFL license
```

## Notes on the build

- **SEM is the hero**, per the brief: the headline and hero dashboard are about search specifically, not general branding.
- **Two motion elements do explanatory work**: the SEM funnel diagram (direct booking vs. OTA commission) and the hero dashboard's animated trend line (demonstrating "reporting you'll actually read"). Everything else — the carousel, scroll reveals, hover interactions — is craft-level polish rather than explanation; see the submission note for the reasoning behind that trade-off.
- **Real photography** (Pexels, free commercial license, no attribution required) throughout, in place of earlier abstract placeholders.

## Deploy

**Vercel (recommended)**

```
npm i -g vercel
vercel --prod
```

Or connect the GitHub repo at vercel.com/new and accept the defaults — it's a static Next.js site, no build config needed.
