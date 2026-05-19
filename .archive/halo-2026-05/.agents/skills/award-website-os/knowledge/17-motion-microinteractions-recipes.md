# 17 — Motion and Microinteraction Recipes

## Motion Principle

Motion should make the interface feel intentional, not busy.

## Premium Timing Defaults

- button press: 80–140ms
- hover response: 150–250ms
- card reveal: 300–500ms
- section reveal: 500–800ms
- hero entrance: 900–1400ms
- page transition: 180–350ms

## Easing Cheats

Luxury:
`cubic-bezier(0.22, 1, 0.36, 1)`

Mechanical:
`cubic-bezier(0.2, 0.8, 0.2, 1)`

Dramatic:
`cubic-bezier(0.76, 0, 0.24, 1)`

Avoid linear except for:
- progress
- tickers
- technical scanning
- shader time

## Microinteraction Recipes

### Magnetic CTA, But Subtle
- move 8–16px max
- only pointer-fine
- reset smoothly
- never reduce click target
- disable reduced motion

### Button Press
- scale 0.98
- shadow tightens
- text/icon shifts 1px
- restores quickly

### Link Hover
- underline draws from left
- color shifts slightly
- icon moves 2–4px
- no layout shift

### Card Hover
- image scale 1.02
- border/line changes
- metadata appears
- card does not jump

### Form Success
- short check motion
- copy confirms specific action
- next step shown
- no confetti unless brand is playful

### Menu Open
- background locks
- focus moves
- items stagger subtly
- close button obvious
- escape works

## Scroll Reveal Rules

Reveal:
- headings first
- proof second
- body third
- CTA last

Do not reveal:
- every paragraph
- long body copy letter-by-letter
- essential content too late

## Signature Interaction Recipes

### Chaos-to-Clarity
Before: scattered nodes/lines.
On scroll: nodes align into process/product.
Best for: operations, logistics, construction, AI systems.

### Layer Reveal
User scrolls through layers of a product/process.
Best for: healthcare, architecture, SaaS mechanisms.

### Material Transformation
Surface changes from raw to refined.
Best for: luxury, skincare, construction, architecture.

### Measurement Cursor
Cursor/tap reveals dimensions/quality markers.
Best for: architecture, construction, product craft.

### Living Diagram
Diagram responds to hover/tap with real explanations.
Best for: SaaS, operations, technical products.

## Reduced Motion Substitutes

Instead of removing:
- replace parallax with static layering
- replace camera travel with crossfade
- replace text animation with instant visible text
- replace scroll scrub with chapter cards
- replace shader distortion with static mask
