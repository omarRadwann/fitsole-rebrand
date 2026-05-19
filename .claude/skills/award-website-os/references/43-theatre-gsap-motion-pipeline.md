# 43 — Theatre, GSAP, and Motion Pipeline

## Tool roles

- **GSAP**: scroll choreography, pinned sequences, section transitions, advanced timeline control.
- **Framer Motion**: interface state, route transitions, small UI motion, presence animations.
- **Theatre.js**: keyframed cinematic 3D sequences, camera moves, lights, and scene properties when visual timing matters.
- **CSS**: microinteractions, simple transitions, hover/focus states, low-cost fallback motion.

## Decision rule

Use the least complex motion system that achieves the intended feeling. Do not stack GSAP, Framer Motion, Theatre.js, and custom RAF loops in the same section unless there is a clear reason and ownership plan.

## Scroll motion rule

Scroll motion must preserve readability. If users cannot understand the offer while the page performs, the page is not premium; it is noisy.

## Reduced-motion rule

Every motion system must obey reduced-motion. Replace long animations with instant states, opacity changes, static poster frames, or simplified transitions.

## Claude Code implementation rules

- Keep timelines isolated in client components.
- Clean up GSAP contexts on unmount.
- Avoid animating layout-heavy properties.
- Prefer transforms and opacity.
- Document major motion decisions in `docs/art-direction.md` and `docs/web-native-3d-pipeline.md`.
