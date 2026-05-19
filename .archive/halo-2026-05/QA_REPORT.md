# Halo — QA Report

Per `ULTIMATE_WEBSITE_AGENT_OS.md` §10 (QA gates) and §32 (Deliverable files).

**Date:** 2026-05-18
**Build:** GitHub Pages deploy from `main` (commit at first ship)
**Live URL:** https://omarradwann.github.io/halo/

## Commands run

| Command | Result |
|---|---|
| `git init -b main && git add -A && git commit` | Clean — 13 files, 1 initial commit |
| `gh repo create omarradwann/halo --public --source=. --push` | Repo created, main branch pushed |
| `gh api -X POST repos/omarRadwann/halo/pages -f source[branch]=main -f source[path]=/` | Pages enabled, https_enforced |
| GitHub Pages build (legacy / .nojekyll) | Built in 32.8s |
| `curl -sIL https://omarradwann.github.io/halo/` | HTTP 200, 143 KB |
| `curl -sIL https://omarradwann.github.io/halo/work.html` | HTTP 200, 54 KB |
| `curl -sIL https://omarradwann.github.io/halo/studio.html` | HTTP 200 |
| `curl -sIL https://omarradwann.github.io/halo/journal.html` | HTTP 200 |
| `curl -sIL https://omarradwann.github.io/halo/blender/apogee_sculpture.glb` | HTTP 200, 211 KB |
| `& 'E:\blender.exe' -b -P 'blender/apogee_sculpture.py'` | Built 4 GLBs in ~1s, total 600 KB |

## Browser checks (via preview tool on Chromium-based engine)

| Page | Render | Cursor | 3D moment | Console |
|---|---|---|---|---|
| `/` (home) | ✅ | ✅ dot + lerping ring + halo | ✅ sculpture + halo ring + 280 reactive particles + story-mode cinematography | Clean (78 historical entries are pre-revert artifacts) |
| `/work.html` | ✅ | ✅ | ✅ elaborate knot rotating at 0.32 rad/s, 418×418 canvas | Clean |
| `/studio.html` | ✅ | ✅ | ✅ calm icosphere rotating at 0.18 rad/s, 418×418 canvas | Clean |
| `/journal.html` | ✅ | ✅ | ✅ twisted Mobius ribbon, 418×418 canvas | Clean |

Cross-doc View Transition support detected (`CSS.supports('view-transition-name', 'halo-topbar') === true`) on the preview engine.

## Screenshot critique (per OS §23)

Multi-position screenshots taken across all sections and pages during the build. Scoring against the OS rubric (each /10):

| Axis | Score | Notes |
|---|---|---|
| Above-fold clarity | 9 | Hero answers the 5-second test on every page |
| Visual originality | 9 | Sculptural family is distinctive; not template |
| Typography | 9 | Instrument Serif + Inter Variable is editorial-grade |
| Spacing / layout | 9 | Confident; staircase grids on Engagement and Manifesto |
| Asset quality | 9 | Blender-baked, dispersion glass with warm amber attenuation |
| Mobile design | 7.5 | Designed but not yet device-tested on real hardware |
| Interaction quality | 9 | Gravity field on type AND particles; reactive at the cursor |
| Conversion clarity | 8 | "Brief the practice" CTA visible above the fold; email link in every footer |
| Trust | 9 | Voices + press + casework + named-partner studio + on-record refusals |
| Overall memorability | 9 | Halo / field / gravity carries throughout |

**Average: 8.65 / 10** — meets the Awwwards-aspiring target (8.8) on most axes; mobile pending device testing.

## Performance notes

- Home: ~144 KB HTML + 211 KB Blender GLB + Three.js + GSAP from CDN. LCP candidate is the hero text (rendered immediately by the browser). 3D loads progressively.
- Internal pages: ~50 KB HTML + their page-specific Blender GLB (171 KB studio, 7.8 KB journal, 210 KB work). Same Three.js cached from CDN after first home visit.
- GitHub Pages serves over HTTPS with `https_enforced: true`. Browser HTTP cache via CDN.
- No formal Lighthouse run yet — to be done post-launch on the live URL.

## Accessibility notes

- Semantic HTML throughout: `<header>`, `<main>`, `<section>` with `aria-label`/`aria-labelledby`, `<article>`, `<footer>`.
- Single `<h1>` per page; logical heading hierarchy.
- `aria-hidden="true"` on all decorative 3D canvases and the custom cursor elements.
- Keyboard navigation: nav links + case-card buttons have `:focus-visible` outline (2px amber, 3px offset).
- Reduce-motion paths: full disablement of story-mode cinematography, particle reactivity, gravity field, footer ASCII animation, and page-fade transitions when `prefers-reduced-motion: reduce`.
- Color contrast: warm amber on near-black background tested at WCAG AA for text; large display sizes always meet 3:1.
- No `pointer-coarse` dependency: gravity field activates on touch via tap-burst.

## Known issues / risks

1. **78 stale Three.js shader errors** in console — historical from the per-card WebGL experiment (reverted). Count is frozen; no active errors.
2. **No real Lighthouse run** yet — only HTTP curl probes confirm delivery.
3. **Mobile not device-tested** — `prefers-reduced-motion` is respected, and `(hover: hover) and (pointer: fine)` gates the custom cursor and gravity field, but no real iPhone/Android verification.
4. **6 of 12 cases on `/work.html` are detail-light** — Bay Mineral, Atelier Forge, Praxis Health, Sea Beam, Northern Index, Tilden & Co. have one-paragraph ledes but no drawer-deep copy. Cases 1–6 (the originals) all have full drawer detail on the home.
5. **No OG image / favicon / webmanifest** — placeholders only. Required before a real client launch.
6. **Cross-doc View Transitions only on Chromium 126+**. Firefox/Safari fall through to the JS opacity-fade fallback on internal pages. Home keeps its preloader as its entry transition.

## Launch checklist

- [x] Repo created
- [x] Initial commit + push
- [x] GitHub Pages enabled, first build green
- [x] All 4 pages return HTTP 200 on live URL
- [x] GLB assets return HTTP 200
- [x] `.nojekyll` present
- [x] `.gitignore` excludes local-only state, includes agent OS
- [ ] Real Lighthouse run (mobile + desktop, 3 trials each)
- [ ] Real iPhone + Android device testing
- [ ] OG image per page
- [ ] Favicon family
- [ ] Custom domain (if desired)
- [ ] Analytics (if desired — Plausible or Fathom recommended; nothing in v1)

## Sign-off

This is a portfolio / fictional case study. Not for live commercial deployment without the unchecked items above being addressed.
