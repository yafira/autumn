# Autumn — homepage

Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion.

## Stack
- **Next.js** — App Router, static export at build time (no server needed)
- **Tailwind CSS v4** — CSS-first theme in `src/app/globals.css` (`@theme`) with the site's design tokens (colors, fonts)
- **Framer Motion** — the marquee scroll, the funnel diagram's animated flow lines, the rate toggle, the stat count-up, and the scroll-progress bar in the sticky index counter
- **TypeScript**, **ESLint** — both configured out of the box

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
    layout.tsx     — fonts, metadata
    page.tsx        — assembles the page from components
    globals.css     — design tokens (@theme) + base styles
  components/
    Header.tsx, Hero.tsx, SearchMock.tsx, RateToggle.tsx, Marquee.tsx,
    Problem.tsx, Sem.tsx, FunnelDiagram.tsx, Proof.tsx, Counter.tsx,
    Services.tsx, Flagship.tsx, Faq.tsx, FinalCta.tsx, Footer.tsx,
    IndexCounter.tsx
```

## Deploy
**Vercel (recommended — same platform the reference site uses)**
```
npm i -g vercel
vercel --prod
```
Or connect the GitHub repo at vercel.com/new and accept the defaults — no build config needed, Vercel detects Next.js automatically.
