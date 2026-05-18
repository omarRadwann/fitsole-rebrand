# 08 — Performance / Core Web Vitals Master

## Mission

Make the site feel premium because it is fast.

## Core Web Vitals Targets

- LCP: under 2.5s
- INP: under 200ms
- CLS: under 0.1

Use lab tools for development and field data when available.

## LCP Protection

- server-render hero text
- optimize hero image/video
- preload only critical asset
- avoid blocking fonts
- do not load Three.js before hero text unless essential
- avoid client-only hero if not needed
- set image dimensions

## INP Protection

- avoid heavy JS on input
- split heavy components
- debounce expensive events
- avoid huge hydration
- avoid global scroll listeners doing layout reads
- use passive listeners when appropriate
- avoid long tasks

## CLS Protection

- reserve image/video/model space
- set width/height
- avoid late font shifts
- avoid injecting banners above content
- avoid animation that changes layout

## JavaScript Budget

Marketing:
- keep initial JS as low as practical
- dynamic import heavy pieces
- server components by default
- avoid duplicate animation libraries

Creative/3D:
- total page weight must be justified
- lazy-load canvas
- poster fallback
- compressed GLB/textures
- cap DPR

## Image Optimization

- AVIF/WebP
- responsive sizes
- next/image or equivalent
- art-directed mobile crops
- lazy-load below fold
- compress
- no 5MB hero PNG

## Video Optimization

- poster required
- preload metadata only
- muted playsinline
- compressed WebM/MP4
- no blocking first paint
- pause control if meaningful

## 3D Optimization

- GLB optimized
- Meshopt/Draco
- texture compression
- instancing
- low draw calls
- no expensive real-time shadows on mobile
- adaptive quality
- canvas pause hidden/offscreen

## Commands

```bash
npm run build
npm run typecheck
npm run lint
npm run analyze
npx lighthouse http://localhost:3000 --view
npx @axe-core/cli http://localhost:3000
```

## No-Ship Performance Issues

- hero loads after blank canvas
- unoptimized hero media
- massive JS for static site
- janky scroll
- mobile GPU overheats
- layout shifts visibly
- console performance warnings ignored
