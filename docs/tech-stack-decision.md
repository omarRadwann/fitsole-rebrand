# Tech Stack Decision - Fitsole Rebrand Concepts

## Evidence Status

| Item | Status | Notes |
|---|---|---|
| Current live platform | Verified | Fitsole live site is Shopify/PageFly with Shopify CDN/storefront assets and third-party apps. |
| Local Shopify theme source | Blocked | The repo does not include Shopify theme files. |
| Concept phase only | Verified | No redesign code or production implementation started. |
| `web-native-3d-master` agent | Blocked | Exact role not available; `master-technical-director` covered web-native 3D decisions. |

## Stack Decision

Recommended production direction: **Shopify theme-native rebrand first**.

This should be treated as an Online Store 2.0 theme redesign or theme refactor once the theme source/export is available. A headless Next.js/R3F rebuild is not the default recommendation because Fitsole's current value sits in live Shopify commerce: product discovery, filters, PDPs, cart, checkout, apps, payment methods, policy pages, and local trust.

## Layer Recommendations

| Layer | Recommendation | Status | Rationale |
|---|---|---|---|
| Commerce backend | Shopify | Verified | Existing live site uses Shopify storefront and checkout patterns. |
| Theme implementation | Shopify theme-native / Online Store 2.0 | Blocked | Requires theme source/export. Preserves checkout/cart/catalog behavior. |
| Page builder | Reduce PageFly dependence where possible | Manual review required | PageFly/app scripts create performance/integration pressure. Need app inventory before removal. |
| Frontend architecture | Liquid/sections/snippets/assets first | Blocked | No theme source yet. Avoid headless scope unless explicitly approved. |
| Motion | CSS transitions first; GSAP only for scoped choreography | Manual review required | Strong 2D motion can carry the rebrand without heavy JS. |
| 3D/WebGL | None for core launch | Manual review required | Current 3D justification is low and performance risk is high. |
| Images | Shopify CDN responsive assets with strict crop rules | Manual review required | Product desire depends more on product/lifestyle imagery than 3D. |
| JavaScript | Minimal, deferred, section-scoped | Manual review required | Protect INP and avoid app-stack bloat. |
| Accessibility | Real DOM content, keyboard/focus states, reduced motion | Not run | Needs source and automated/manual audit. |
| Performance budget | LCP < 2.5s, INP < 200ms, CLS < 0.1 | Not run | Baseline not measured yet. |

## Concept-Specific Stack Decisions

| Concept | Recommended Stack | Motion | 3D/WebGL | Difficulty |
|---|---|---|---|---:|
| Verified Drop Floor | Shopify theme-native, Liquid sections, CSS variables, responsive image rules, scoped JS | CSS + small JS; optional GSAP for hero/drop sequence only | No core 3D | 6/10 with source, 8/10 now |
| Fit Check Lab | Shopify theme-native plus richer product metadata/templates | DOM/SVG size and material interactions | Conditional future R3F product-inspection module | 7/10 with source, 9/10 if metadata missing |
| Egypt Moves Here | Shopify theme-native plus campaign/story sections and local asset system | CSS/GSAP route-like transitions | No core 3D | 8/10 due asset production |

## Why Not Headless Next.js Now

- Theme source is already missing; starting a headless rebuild would add even more unknowns.
- Checkout, payments, BNPL, customer account, apps, product filtering, and analytics continuity would require careful migration.
- SEO and product content are safer inside Shopify unless there is a strong owner-approved technical reason to go headless.
- Awwwards-level polish can be achieved in Shopify with art direction, media discipline, motion restraint, and better product modules.

Headless Next.js can be reconsidered only if Fitsole explicitly wants a larger rebuild and can provide API access, product data, app requirements, analytics requirements, checkout constraints, and a launch plan.

## Dependency Rules

- Do not add Three.js/R3F for decoration.
- Do not add a second animation stack if the existing theme already loads GSAP/Lenis/Barba.
- Do not add carousel libraries for simple rails unless replacing an existing dependency reduces weight.
- Do not add full UI libraries that create a generic look.
- Do not add product recommendation/bundle apps until owner confirms business need and performance impact.

## Performance Guardrails

- Keep hero product or lifestyle image visible before any nonessential script.
- Reserve image dimensions and product-card space to avoid CLS.
- Lazy-load below-fold media.
- Defer nonessential app scripts where Shopify/app constraints allow.
- Avoid canvas/WebGL before product content.
- Use responsive crops for mobile.
- Audit PageFly/app extensions before adding new interaction code.

## Accessibility Guardrails

- Menu, search, cart drawer, filters, sort, size guide, gallery, size chips, and add-to-cart must be keyboard reachable.
- Focus must be visible.
- Filter/sort bottom sheets must trap and restore focus correctly.
- Product information must not be canvas-only.
- Reduced motion must replace parallax/scrubbed sequences with static hierarchy.
- Sale labels and trust states must not rely on color alone.

## Open Technical Blockers

- Shopify theme source/export.
- App inventory and app-criticality decision.
- Analytics/tracking requirements.
- Checkout customization constraints.
- Current Lighthouse/field Web Vitals.
- Current axe/keyboard baseline.
- Legal asset and claim approvals.

