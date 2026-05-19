# Web-Native 3D Pipeline - Fitsole

## Decision

**No 3D/WebGL for the core Fitsole rebrand concept.**

This is a deliberate web-native 3D decision, not a lack of ambition. Fitsole is an ecommerce sneaker/fashion site with existing performance risk, no local Shopify theme source, and a live app-heavy Shopify/PageFly stack. Strong product photography, editorial layout, product-card behavior, trust modules, and precise 2D motion are more likely to increase product desire and buying confidence than decorative 3D.

## Evidence Status

| Item | Status | Notes |
|---|---|---|
| Current 3D justification | Manual review required | Audit score was 3/10; no current purchase-confidence need requires 3D. |
| Blender availability | Verified | Blender is installed locally, but availability does not justify use. |
| Shopify theme source | Blocked | No theme source/export is present. |
| Legal product models/assets | Unknown / requires owner confirmation | No cleared 3D product assets supplied. |
| Web-native 3D specialist role | Blocked | `web-native-3d-master` is not available in the role list; technical director covered the decision. |

## Tool Decision Matrix

| Route | Use When | Fitsole Decision | Why |
|---|---|---|---|
| No 3D | Product photos, macro imagery, SVG diagrams, and motion communicate better | Default / winner | Fastest, safest, most conversion-aligned. |
| Spline | Owner supplies or approves an exportable Spline scene with legal clearance | Not now | No scene provided; Spline would add runtime/asset risk. |
| R3F / Three.js | Full code ownership is needed for a custom product/fit/material interaction | Conditional future | Only valid if it improves buying confidence and theme/build path supports it. |
| Blender | Procedural/generated assets or cleared owned product/private-label models are justified | Conditional future | Do not create fake branded sneaker replicas. |
| Lightweight WebGL image effects | A real product image needs a signature distortion/reveal with DOM fallback | Optional future | Must lazy-load and preserve product/price/CTA in DOM. |

## Concept Recommendations

### Verified Drop Floor

- 3D recommendation: no 3D.
- Web-native approach: DOM product grid, responsive image crops, CSS/GSAP red-line verification motion.
- Fallback: native static product grid.
- Reason: product clarity and speed are the award move.

### Fit Check Lab

- 3D recommendation: no v1 3D; possible future R3F module.
- Future use case: material/fit inspection or outsole/upper layer explorer using real cleared assets.
- Fallback: macro photography, SVG size diagrams, DOM accordions.
- Reason: fit confidence can be solved first with better data and imagery.

### Egypt Moves Here

- 3D recommendation: no 3D.
- Web-native approach: local photography, route-like CSS/GSAP transitions, map-like section wayfinding if accessible.
- Fallback: static route labels and product/category links.
- Reason: authenticity and local relevance come from real photos, not generated space.

## R3F / Three.js Rules If Later Approved

R3F/Three.js is allowed only after a written 3D justification that answers:

1. Which buyer doubt does it reduce?
2. Which product desire does it increase?
3. What real assets are legally cleared?
4. What is the mobile fallback?
5. What is the reduced-motion fallback?
6. What performance budget protects LCP/INP/CLS?
7. How are product title, price, size, Add to cart, and trust copy kept in DOM?

Technical constraints:

- Lazy-load after essential LCP content.
- Use poster-to-canvas upgrade.
- Cap DPR to `[1, 1.5]`, mobile `[1, 1]`.
- Avoid real-time shadows and heavy postprocessing on mobile.
- Pause when hidden or offscreen.
- Dispose resources.
- Keep canvas from blocking product CTAs.
- Test mobile Safari and mid-range Android.

## Spline Rules If Later Approved

Spline may be used only if:

- Fitsole supplies or approves the scene.
- The scene can be exported/embedded legally.
- File/runtime weight is measured.
- It has a static poster fallback.
- It respects reduced motion.
- It does not block product discovery or checkout.
- It does not contain unlicensed global-brand product replicas.

Current decision: **not recommended**.

## Blender Rules If Later Approved

Blender may be used only for:

- Fitsole-owned/private-label product models with rights.
- Abstract non-infringing sole/material diagrams.
- Procedural support objects that explain fit/material/packaging.
- Poster renders where a bitmap is better than runtime 3D.

Do not use Blender to model Nike/adidas/Puma/ON/NBA products unless owner provides explicit rights and product model sources.

## Asset Ledger Requirements

Any future 3D/WebGL work must add entries to `docs/asset-ledger.csv` for:

- Model source.
- Texture source.
- Scene source.
- Product reference images.
- Generated assets.
- License, commercial use, modification rights, attribution, model/property release, and risk notes.

## Current Pipeline Recommendation

For the selected **Verified Drop Floor** concept:

1. Create no 3D assets.
2. Build an image and crop system first.
3. Use strong 2D interaction for product desire: red-line reveal, product-card image swap, size selection, filter/cart feedback.
4. Keep all product and purchase information in accessible DOM.
5. Revisit R3F only after theme source, asset rights, and performance baseline exist.

