# 29 — Smart Dependency and Stack Decisions

## Mission

Avoid dependency bloat and wrong-stack decisions.

## Default Stack

For most premium marketing/business sites:
- Next.js App Router
- TypeScript
- Tailwind
- semantic components
- CSS variables
- Motion/GSAP only if needed
- R3F/Three only if justified

For content-heavy:
- Astro or Next.js SSG

For pure creative experiment:
- Vite + React or vanilla Three depending on SEO needs

## Dependency Decision Gate

Before adding a dependency, answer:
1. What problem does it solve?
2. Can platform/CSS solve it?
3. Is it maintained?
4. Does it affect bundle?
5. Is it accessible?
6. Is it needed on initial load?
7. Can it be dynamically imported?

## Avoid

- adding GSAP for one fade
- adding Three.js for a static blob
- adding a carousel lib for three cards
- adding full icon packs
- adding animation + GSAP + Lenis + framer all together without reason
- adding UI libraries then shipping default look

## Smart Choices

Use CSS for:
- simple transitions
- simple reveals
- hover/focus
- responsive layout
- sticky elements
- basic keyframes

Use JS for:
- measured interactions
- scroll orchestration
- canvas/WebGL
- complex gestures
- route transitions
- synchronized timelines

Use server rendering for:
- copy
- SEO content
- static sections
- metadata

Use client components for:
- interactive nav
- animations
- forms
- WebGL
- local UI state

## Bundle Hygiene

- dynamic import heavy visual sections
- avoid client wrapper around whole page
- keep "use client" leaf-level
- tree-shake icons
- analyze if bundle feels large
- remove unused packages
