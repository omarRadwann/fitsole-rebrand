# Final Creative Direction - Fitsole Verified Drop Floor

## Evidence Status

| Item | Status | Notes |
|---|---|---|
| Selected concept | Verified | `docs/concept-scorecard.md` selected Verified Drop Floor at 89/100. |
| Current commerce platform | Verified | Prior audit identified the live site as Shopify/PageFly. |
| Shopify theme source | Blocked | No Shopify theme/export is present in this repo. |
| Implementation started | Not run | This file is a blueprint only. No production code was changed. |
| Legal asset rights | Manual review required | Owner must confirm rights for all product, lifestyle, brand, video, and claim assets. |

## Creative Commitment

Fitsole will become **Verified Drop Floor**: a premium, kinetic sneaker-commerce floor where every product feels current, every size and price stays visible, and every trust cue helps the shopper buy with confidence.

This is not fake luxury, not a tech-gradient boutique, and not a WebGL demo. The memorable system is the **red verification line** moving through drops, product cards, sizes, trust modules, and cart feedback. The site should feel sharp and sneaker-culture aware while staying fast, legible, and safe to shop.

## Brand World

Mood: premium retail energy, exact, current, confident.

World: a drop floor, receipt desk, and product wall fused into one commerce system.

Material: rubber sole texture, shoebox board, matte red labels, concrete floor, clean store light, stitched tags, paper receipts.

Interaction: red-line verification, product image flips, size-gated quick add, filter confirmation, cart receipt feedback.

Memory: "Fitsole is where the drop is clear enough to trust."

## Homepage Section-By-Section Plan

1. Announcement and trust bar
   - Content: delivery window, exchange/returns, BNPL/payment, support link.
   - Behavior: static by default; no marquee unless owner approves exact text and performance.
   - Conversion job: reassure before browsing starts.

2. Header and product-led hero
   - Content: featured drop/category, hero product/lifestyle image, price or category cue if applicable, `Shop new drops`, secondary `Shop sale`.
   - Composition: full-width image-led hero, not a card. The first viewport must show product, headline, and a visible shopping path.
   - Conversion job: create desire and immediate route to product.

3. Verification strip
   - Content: authenticity/process, local delivery, exchange/returns, payment/BNPL.
   - Rule: claims must use owner-approved language only.
   - Conversion job: answer doubts early without long copy.

4. New arrivals floor
   - Content: product grid or rail with price, sale state, size signal, labels.
   - Behavior: product cards get image swap and red-line hover/focus/tap state.
   - Conversion job: let ready buyers shop quickly.

5. Category routes
   - Content: Sneakers, Apparel, Accessories, Kids if current catalog supports it, Sale.
   - Composition: editorial category tiles using real product/category imagery.
   - Conversion job: route browsing by intent.

6. Drop edit / Fitsole picks
   - Content: curated products with short merchandiser-style labels.
   - Rule: do not invent scarcity or staff picks unless owner confirms curation.
   - Conversion job: make the site feel merchandised, not dumped from a catalog.

7. Shop the fit
   - Content: footwear plus apparel/accessory pairings.
   - Behavior: bundle-like cross-sell without forcing cart bundling.
   - Conversion job: increase desire and average order value while preserving choice.

8. Sale floor
   - Content: sale products with transparent original/current price.
   - Rule: discounts must stay readable and legally accurate.
   - Conversion job: support deal-seeking without cheapening the premium system.

9. Confidence desk
   - Content: size guide, delivery, exchange/returns, authenticity, support.
   - Behavior: accordion rows on mobile, clear links on desktop.
   - Conversion job: resolve final objections before footer.

10. Footer
   - Content: policies, support phone/email, social links, payment methods, legal details, newsletter if real.
   - Conversion job: make Fitsole feel reachable and accountable.

## Header / Navigation Plan

Desktop:
- Sticky but compact header.
- Primary nav: New In, Sneakers, Brands, Apparel, Kids, Sale.
- Utility nav: Search, Account, Cart.
- Help route visible in header or utility drawer.
- Mega menu may be used only if it is scannable and product/category-led.

Mobile:
- Sticky top row: menu, logo, search, cart.
- Category chips under hero or collection intro: New, Sneakers, Sale, Kids, Help.
- Menu opens as a full-height drawer with large tap targets and direct category links.
- Search is never hidden behind decorative motion.

Rules:
- Cart count must stay visible.
- Header height must not consume too much mobile viewport.
- Navigation animation must never block search or cart.
- Current Shopify URL structure and SEO-significant routes should be preserved where possible.

## Product Grid Plan

Grid goal: dense enough for shopping, composed enough for premium desire.

Desktop:
- 4-up default product grid where product imagery supports it.
- Feature one larger editorial product tile per major section only when it has strong imagery.
- Filters and sort stay visible or one click away.

Mobile:
- 2-up grid for collections.
- Product name, price, sale state, and label must remain visible.
- Filter and sort open in bottom sheets.
- Product image aspect ratio must be stable to prevent layout shift.

Product information hierarchy:
1. Product image.
2. Brand/product name.
3. Price and sale state.
4. Size/availability cue if reliable.
5. Label: New, Sale, Sold out, Low stock only if verified.

## Product Card States

Default:
- Primary product image, name, price, sale/compare-at price, label.
- No essential information hidden behind hover.

Hover / focus:
- Red verification line draws along one edge.
- Secondary image appears if available.
- Quick add or quick view appears with keyboard focus support.

Tap:
- First tap opens product or reveals size choices depending on Shopify pattern.
- Size choice must be explicit before add-to-cart.

Selected size:
- Size chip becomes high-contrast and labeled for screen readers.
- Add to cart becomes active.

Sold out:
- Product remains browsable but add state is disabled.
- Notify/back-in-stock only if the app exists and is owner-approved.

Loading/error:
- Add-to-cart loading state is visible.
- Cart error states are plain-language and near the action.

## Product Detail Plan

Above fold:
- Product gallery left/top.
- Buying panel right/below: product name, price, sale state, size selector, size guide, add-to-cart, payment/BNPL, delivery/exchange trust.
- Gallery controls must be keyboard/touch accessible.

Buying confidence block:
- Authenticity/process language.
- Delivery estimate or policy summary.
- Exchange/returns summary.
- Support route.

Below fold:
- Product details in bullets, not generic prose.
- Materials and fit/use notes if owner can provide.
- Complete-the-fit cross-sells.
- Related products from same brand/category.
- FAQ accordion.

Rules:
- Add-to-cart must never be below a decorative section on mobile.
- Price and selected size must remain easy to verify before adding.
- Product descriptions must not make unsupported performance or authenticity claims.

## Cart / Checkout Preservation Rules

- Preserve Shopify checkout and payment flow.
- Do not modify checkout unless owner explicitly approves and Shopify plan supports it.
- Cart drawer/page must show product image, variant, size, quantity, price, subtotal, discounts, and checkout CTA.
- Checkout CTA must stay high-contrast and above long upsells.
- Upsells must never hide checkout.
- Cart errors must be visible and recoverable.
- Payment, BNPL, shipping, exchange, and returns language must match actual policy.
- Do not add animations that delay checkout.

## Mobile-First Layout Rules

- Design the 390px viewport first.
- Hero must show product and shopping path in the first viewport.
- No oversized campaign intro before products.
- Tap targets should be 44px where practical.
- Sticky add-to-cart on PDP after size selection.
- Filters/sort in bottom sheets with focus return.
- Product cards must not rely on hover.
- Text must wrap cleanly; no viewport-width font scaling.
- The red-line motif should become shorter, clearer, and less animated on mobile.

## Image / Video / 3D Asset List

Required for v1:
- Product hero image or campaign crop: owner-provided / Shopify product media, rights confirmation required.
- Product grid images: existing Shopify media, rights confirmation required.
- Category route images: owner-provided product/category photography, rights confirmation required.
- Lifestyle/editorial images: new owner-produced or licensed photography with model/property releases.
- Trust icons: custom simple line icons or existing theme icons with license confirmation.
- Product macro images: optional, owner-provided or new photography.

Optional:
- Short product/lifestyle video loops: owner-produced or properly licensed, muted, compressed, poster fallback.

Not used for v1:
- Spline scene.
- Blender assets.
- Runtime 3D product models.
- External brand campaign imagery unless Fitsole has explicit rights.

See `docs/asset-ledger.csv` for source and legal status by asset type.

## Performance Budget

Targets:
- LCP: under 2.5s.
- INP: under 200ms.
- CLS: under 0.1.
- Hero image: optimized AVIF/WebP where Shopify allows; no huge PNG hero.
- Initial motion: CSS-first; no heavy animation library for simple fades.
- 3D/WebGL: 0KB for v1 core launch.
- Video: below-fold or poster-first; no autoplay sound.

Rules:
- Preload only the primary hero image/font asset when needed.
- Lazy-load below-fold media.
- Reserve image dimensions.
- Avoid app/script additions before app inventory.
- Avoid scroll listeners that perform layout reads on every frame.

## Accessibility Rules

- Target WCAG 2.2 AA.
- One h1 per page.
- Real DOM text for product names, prices, CTAs, and trust copy.
- Visible focus on nav, search, filters, size chips, gallery, cart, checkout.
- Keyboard-reachable menus, filters, drawers, quick add, and PDP gallery.
- Color is never the only sale/availability signal.
- Reduced motion is designed, not ignored.
- Product images need meaningful alt text when they convey product information.
- Decorative red-line graphics should be hidden from assistive tech.

## SEO Rules

- Preserve existing product, collection, policy, and article URLs where possible.
- Server-render core product/category copy in Shopify.
- Keep product names and prices crawlable.
- Do not hide headings in canvas or image-only text.
- Each collection gets concise intro copy with category-specific terms.
- Product pages use specific materials, model names, color, size/fit, and care info only when verified.
- Add structured data through Shopify/theme conventions if already present.
- Avoid duplicate PageFly/theme title conflicts.

## Build Plan

Phase 0 - Access and evidence:
- Obtain Shopify theme export/source.
- Inventory apps, scripts, fonts, media, and checkout constraints.
- Confirm asset rights and legal claims.
- Run baseline Lighthouse, axe, mobile screenshot, and keyboard audit.

Phase 1 - Low-risk system layer:
- Define tokens: color, type, spacing, radii, motion.
- Update header/nav styling and trust bar.
- Standardize product card labels and states.
- Replace stale/generic copy with approved Fitsole copy.

Phase 2 - Product discovery:
- Rework homepage order around hero, trust strip, new arrivals, categories, curated drop, sale, confidence desk.
- Improve collection grid, filters, sort, and mobile chips.
- Improve PDP buying panel and trust proximity.

Phase 3 - Motion and polish:
- Add CSS-first card, nav, filter, and cart transitions.
- Add red-line verification motif.
- Add reduced-motion fallback.
- Add only scoped JS where commerce state requires it.

Phase 4 - Media:
- Add approved hero/category/lifestyle crops.
- Add macro/detail assets if available.
- Optimize responsive images and video posters.

Phase 5 - QA and release:
- Run build/theme validation.
- Run Lighthouse, axe, keyboard, reduced-motion, mobile screenshot, cart flow, and checkout handoff checks.
- Update `docs/qa-report.md`, `docs/visual-review.md`, and `docs/ship-decision.md`.

## Implementation Checklist - Safest First

1. Confirm Shopify theme source/export and app inventory.
2. Confirm legal claims, branch/support details, and media rights.
3. Run baseline performance, accessibility, screenshot, and cart-flow checks.
4. Create design tokens without changing commerce behavior.
5. Update header, trust bar, and footer labels.
6. Standardize product card labels, price states, and image ratios.
7. Improve mobile collection filters/sort and category chips.
8. Reorder homepage sections around product discovery.
9. Improve PDP buying panel and trust proximity.
10. Add red-line CSS motion and reduced-motion states.
11. Add approved hero/category/lifestyle media.
12. Optimize images, scripts, and app loading.
13. Re-run Lighthouse, axe, keyboard, reduced-motion, mobile screenshots, cart, and checkout handoff.
14. Update final QA and ship decision with Verified / Manual review required / Not run / Blocked labels.
