# starter-next-awwwards

The production starter for projects scaffolded by the **Moon-Level Awwwards Agency OS**.

You probably don't run this directly. It is copied into `workspace/<slug>/` by `make scaffold NAME=<slug>` from the pack root.

## Stack

- Next.js 15 (App Router) + React 18 + TypeScript strict
- Tailwind CSS 3 with OKLCH color tokens
- React Three Fiber 8 + drei + three.js (for sites that earn 3D)
- GSAP 3 (for sites that earn scroll-driven motion)
- Playwright (for `npm run screenshots`)
- Node-native `node --test` for unit tests

## Scripts

| Command | Purpose | Gate it satisfies |
|---|---|---|
| `npm run dev` | local dev | — |
| `npm run build` | production build | Gate 3 |
| `npm run typecheck` | tsc --noEmit | Gate 3 |
| `npm run lint` | next lint | Gate 3 |
| `npm run test` | smoke tests | Gate 3 |
| `npm run screenshots` | Playwright capture into ./screenshots/ | Gate 4 |
| `npm run analyze:assets` | asset-weight budget check | Gate 5 |
| `npm run design:readiness` | combined readiness gate | Gate 5 |

## Install

```bash
npm install
cp .env.example .env.local
npm run dev
```

## First-edit checklist

1. Replace placeholder copy in `app/page.tsx` and `components/Hero.tsx` with the real H1/sub/CTA from `docs/copy-system.md`.
2. Update OKLCH tokens in `app/globals.css` with the real palette from `docs/art-direction.md`.
3. Update `lib/easings.ts` with the actual motion tokens from `docs/motion-language-system.md`.
4. Replace `components/three/Scene.tsx` with the real concept-tied scene from `docs/web-native-3d-pipeline.md`, or delete it if the project doesn't earn 3D.
5. Add real `public/images/hero-poster.webp` for the reduced-motion fallback.
6. Run `npm run dev`, then in another terminal `npm run screenshots`.
7. Fill `docs/screenshot-matrix.md` and `docs/visual-review.md`.
8. Run `npm run design:readiness` from this directory until it passes.

## Where to put what

- **3D assets** → `public/3d/` (GLB + KTX2)
- **Images** → `public/images/` (WebP/AVIF, hero-poster.webp is special)
- **Real sections** → `components/<SectionName>.tsx`
- **Page composition** → `app/page.tsx`
- **Type/color/motion tokens** → `lib/` and `app/globals.css`

## Forbidden

- No `console.log` left in shipped code.
- No `// TODO` left at ship time — promote to `docs/visual-review.md` if real.
- No localStorage / sessionStorage in scene components.
- No animating layout-affecting properties (only transform/opacity).
- No hardcoded API keys — all secrets in `.env.local`.
