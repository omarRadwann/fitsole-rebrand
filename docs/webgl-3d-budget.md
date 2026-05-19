# WebGL / 3D Budget

**Status: NOT RUN — 3D route is None for this project.**

Per [tech-stack-decision.md](tech-stack-decision.md) § 3D route and [web-native-3d-pipeline.md](web-native-3d-pipeline.md), this project ships no WebGL, no canvas-based 3D, and no GLB / KTX2 / Draco assets. The performance budget that matters for this project is the **image + JS budget**, captured below as a translation of the 3D template into the rebrand's actual constraints.

## Image budget (the actual constraint for this rebrand)

| Asset | Target | Owner |
|---|---|---|
| Hero branch photograph (above-the-fold, mobile) | ≤ 180 KB AVIF / 240 KB WebP | frontend-engineer |
| Hero branch photograph (above-the-fold, desktop) | ≤ 320 KB AVIF / 420 KB WebP | frontend-engineer |
| Product card primary flat | ≤ 60 KB AVIF / 80 KB WebP | asset-pipeline-master |
| Product card hover-reveal secondary | ≤ 70 KB AVIF / 90 KB WebP | asset-pipeline-master |
| Branch detail shots (section anchors) | ≤ 120 KB AVIF / 160 KB WebP | asset-pipeline-master |
| OG image (= hero, separate render) | ≤ 280 KB WebP | frontend-engineer |
| Total above-the-fold image payload (mobile) | ≤ 280 KB | frontend-engineer |

## JS / motion budget

| Layer | Target | Owner |
|---|---|---|
| First-load JS (gzipped, mobile) | ≤ 165 KB | frontend-engineer |
| Motion-related JS (GSAP or fallback) | ≤ 60 KB gz | frontend-engineer |
| Framer Motion (selective) | ≤ 35 KB gz | frontend-engineer |
| Plausible analytics | ≤ 2 KB gz | frontend-engineer |

## Runtime budget

| Metric | Target | Owner |
|---|---|---|
| LCP (mobile mid-tier, 4G fast Egypt) | ≤ 2.0 s | frontend-engineer + gpu-performance-master |
| INP (mobile) | ≤ 150 ms | frontend-engineer |
| CLS | ≤ 0.05 | frontend-engineer |
| Total transferred (first paint, mobile) | ≤ 700 KB | frontend-engineer |

## Mobile policy

- Hero photograph: same image, separate mobile crop (vertical aspect), responsive srcset via `next/image`.
- Motion: hero slow-pan disabled on `prefers-reduced-motion: reduce`. Product card hover-reveal does not fire on touch devices (no hover state — tap goes straight to PDP).
- No canvas / no GL context anywhere on mobile (confirmed by 3D route = None).

## Reduced-motion rules

When `prefers-reduced-motion: reduce`:

- Hero slow-pan disabled — hero photograph is static.
- Product card hover-reveal disabled — card shows primary flat only; secondary shot accessible via tap → PDP.
- Page transitions instant.
- All scroll-tied motion paused.

## Measurement method

- LCP / INP / CLS: Lighthouse mobile (4G simulated) + WebPageTest from Cairo node where available.
- First-load JS: `npm run build` + `@next/bundle-analyzer`.
- Image payload: `npm run analyze:assets` from the starter scripts.

## Acceptance

The image + JS + runtime budget is accepted when every Measured cell (Phase 6 `qa-report.md`) is ≤ its Target, or the divergence is explicitly approved and documented in `assumptions.md`.

**Truth label for `ship-decision.md`:** `Not run — 3D route = None per tech-stack-decision.md § 3D route.` Image + JS budgets above are the operative constraints; they're labeled per gate in `qa-report.md` after Phase 6 measurement.
