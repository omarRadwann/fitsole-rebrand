# Motion System - Fitsole Verified Drop Floor

## Evidence Status

| Item | Status | Notes |
|---|---|---|
| Concept direction | Verified | Based on Verified Drop Floor in `docs/concept-scorecard.md`. |
| Motion implemented | Not run | Blueprint only; no production motion code changed. |
| Reduced-motion tested | Not run | Requires implementation and browser QA. |
| WebGL fallback | Manual review required | No WebGL is planned for v1; fallback rules are documented. |

## Motion Principle

Motion should make the store feel checked, current, and responsive. It must confirm actions, guide attention, reveal product hierarchy, or reward a shopping decision. Motion that only decorates should be cut.

## Signature Motif

The core motion motif is the **red verification line**.

Uses:
- Hero product entrance.
- Section divider.
- Product-card hover/focus/tap.
- Active size selection.
- Filter apply confirmation.
- Cart add confirmation.
- Trust strip reveal.

Rules:
- The line moves in short, precise distances.
- It never blocks product images, price, size, or CTA.
- It must be understandable as a static rule in reduced motion.
- It should feel like a retail verification mark, not a sci-fi scan.

## Motion Tokens

Durations:
- Micro: 120ms.
- Fast: 180ms.
- Base: 280ms.
- Slow: 480ms.
- Hero: 700ms max.

Easing:
- Standard: cubic-bezier(0.22, 1, 0.36, 1).
- Snap: cubic-bezier(0.2, 0.8, 0.2, 1).
- Exit: cubic-bezier(0.76, 0, 0.24, 1).

Distance:
- Micro UI: 4px to 8px.
- Card/image reveal: 8px to 16px.
- Section reveal: 16px to 28px.
- No large parallax distances on mobile.

## Animation Rules

- CSS transitions first.
- Use transforms and opacity, not layout properties.
- Do not animate product card size.
- Do not scroll-jack.
- Do not use smooth-scroll libraries unless the existing theme already depends on one and it is proven safe.
- Do not split letters randomly; if type reveals are used, reveal words or meaning units.
- Navigation, search, filters, cart, and checkout controls must remain responsive during animation.
- Disable or shorten animation on low-end/mobile if it affects input.

## Component Motion

Header:
- Compact sticky transition after scroll threshold.
- Active menu underline uses the red verification line.
- Mobile drawer slides in under 280ms and restores focus on close.

Hero:
- Product image loads static first.
- Headline and CTAs appear without delaying the image.
- Optional red-line sweep across product/category metadata after content is visible.

Product cards:
- Hover/focus: image swap or subtle scale limited to 1.02.
- Red line draws in 180ms.
- Quick add appears without moving price/name.
- On touch, card behavior must not require hover.

Filters and sort:
- Bottom sheet opens from bottom on mobile.
- Applied filter gets a quick red confirmation tick/line.
- Product grid should not animate every card on each filter update if it causes input delay.

PDP gallery:
- Thumbnail selection uses quick opacity/transform feedback.
- No heavy carousel physics.
- Image zoom must not trap keyboard or hide close controls.

Cart:
- Add confirmation: short receipt-like snap and cart count update.
- Checkout CTA must be immediately available.
- No celebratory animation that delays checkout.

## Reduced-Motion Fallback

When `prefers-reduced-motion: reduce` is active:
- Remove parallax, scrubbed effects, long reveals, animated line draws, and smooth scrolling.
- Keep static red rules, clear active states, and instant opacity changes.
- Product image swap may become a direct image change or be disabled.
- Mobile drawer/filter/cart should open instantly or with near-zero duration.
- Do not autoplay video loops unless user initiates them.

## WebGL Fallback

V1 decision: no WebGL.

If WebGL is introduced later:
- DOM product content remains the source of truth.
- Canvas loads after hero and critical product content.
- Static poster appears first.
- Reduced motion gets the poster, not the canvas.
- Failure mode is normal DOM shopping, not a broken blank stage.

## Performance Budget

- No Three.js/R3F/Spline runtime in v1.
- Animation library budget: 0KB unless existing theme already includes it or scoped GSAP is approved.
- Main-thread tasks from animation should stay under 50ms.
- No animation should create visible CLS.
- All below-fold reveals should be optional progressive enhancement.

## QA Required After Implementation

- Keyboard nav through header, menu, filters, PDP gallery, size chips, and cart.
- Reduced-motion browser check.
- Mobile tap behavior check at 390px and 430px widths.
- Lighthouse INP/CLS check.
- Screenshot review for overlapping animated text or shifted CTAs.
