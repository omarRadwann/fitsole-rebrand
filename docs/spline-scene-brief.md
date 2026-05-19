# Spline Scene Brief - Fitsole Verified Drop Floor

## Evidence Status

| Item | Status | Notes |
|---|---|---|
| Spline scene for v1 | Not run | No Spline scene is planned or created. |
| Spline justification | Manual review required | Current decision is no Spline because it does not improve core buying confidence enough. |
| Legal 3D assets | Blocked | No cleared 3D product models or Spline scene were supplied. |
| WebGL fallback | Verified | Core site direction works without WebGL. |

## Decision

Do **not** use Spline for the v1 Fitsole rebrand.

The strongest concept, Verified Drop Floor, should win through product imagery, typography, product-card behavior, red-line commerce motion, and trust proximity. A Spline scene would add runtime, legal, and mobile risk without solving a current buyer doubt.

## If Spline Is Later Reconsidered

Spline is allowed only if all conditions are met:

1. Fitsole supplies or explicitly approves the scene.
2. Every model, texture, logo, and product reference is legally cleared for commercial use.
3. The scene explains product desire or buying confidence.
4. The scene has a static poster fallback.
5. Reduced motion skips the scene.
6. The scene lazy-loads after product and CTA content.
7. Product names, prices, sizes, and CTAs remain in accessible DOM.
8. Mobile performance is measured on a real or representative device.

## Approved Future Use Cases

Potentially valid:
- Abstract red-line product wall that acts as an editorial background only after content is visible.
- Non-branded material/sole texture study for private-label or legally cleared products.
- Lightweight campaign poster scene exported as a still image rather than runtime.

Rejected:
- Branded sneaker replicas.
- Floating shoes with no buying function.
- Random glass/gradient showroom.
- Canvas-first hero that delays product discovery.
- Any scene that hides navigation, product price, size, or checkout path.

## Performance Budget If Later Approved

- Runtime is lazy-loaded below critical hero/product content.
- Poster image displays first.
- No autoplay camera path for reduced motion.
- Scene weight must be measured before approval.
- Mobile scene may be replaced entirely with the poster.
- No Spline scene may be required to complete shopping.

## Fallback

Fallback is the normal Shopify-native page:
- Product-led hero image.
- Real navigation.
- Product grid.
- Red-line CSS/SVG motif.
- Accessible trust and purchase content.

This fallback is not a lesser experience; it is the preferred v1 direction.
