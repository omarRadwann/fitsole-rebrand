# Concept Scorecard - Fitsole Awwwards Commerce Rebrand

## Evidence Status

| Item | Status | Notes |
|---|---|---|
| Prior audit used | Verified | Based on `docs/current-site-audit.md`, `docs/rebrand-gap-map.md`, and `docs/research-brief.md`. |
| Specialist pressure | Verified | Used available `market-researcher`, `creative-director`, `art-director`, `ux-copy-strategist`, and `master-technical-director` agents. |
| `web-native-3d-master` | Blocked | No agent with this exact name is available in the current Codex role list; web-native 3D decisions were handled by `master-technical-director` and OS 3D references. |
| Production theme source | Blocked | No Shopify theme source/export is present in the repo. |
| Legal asset rights | Unknown / requires owner confirmation | Global-brand imagery, lifestyle assets, branch claims, and product media rights need owner confirmation. |

## Decision Summary

Winner: **Verified Drop Floor**.

Why: it gives Fitsole a sharper owned retail world while keeping products, prices, sizes, filters, trust, and checkout clarity in the foreground. It borrows the strongest specialist inputs: market research's "Verified Drop Floor", creative direction's "Fit Check / Verified", art direction's "Drop Discipline", UX copy's "Drop Desk", and technical direction's "Red Line Commerce System".

The winning idea is not "luxury sneaker cinema." It is a commerce system that makes each product feel current, authentic, findable, and safe to buy.

## Concept A - Verified Drop Floor

### 1. Concept Name

**Verified Drop Floor**

### 2. One-Sentence Brand Idea

Fitsole becomes the trusted local drop floor where every pair, fit, price, size, and checkout path is clear before the shopper commits.

### 3. Emotional World

Sharp, confident, product-literate, fast-moving, and locally trustworthy. Less hype noise; more "this is the pair, this is the price, this is why you can buy it now."

### 4. Visual Direction

Product-first editorial commerce. A disciplined red/white/graphite grid, crisp product crops, campaign photography with real movement, and a recurring red verification line that guides the eye through drops, sizes, trust, and cart states.

### 5. Typography Direction

Condensed grotesk for drop/category headlines, neutral sans for product and checkout UI, and a compact mono only for SKU-like details, sale codes, size/rule labels, and delivery metadata. Mobile headings must be capped and line-broken intentionally.

### 6. Color / Material Direction

Fitsole red, warm white, graphite, pale concrete, asphalt, and light silver rules. Material cues: matte product labels, receipt paper, rubber sole texture, stitched tags, store-floor concrete, clean shelf lighting.

### 7. Motion Language

Precise retail feedback: product image swap, red-line scan reveals, filter drawer slide, cart confirmation, sale tag snap, size-chip selection, and subtle product-card lift. No scroll-jacking. No decorative background motion.

### 8. Homepage Structure

1. Announcement/trust bar: delivery, exchange, BNPL.
2. Product-led hero: latest drop or campaign, visible shopping path, `Shop new drops`.
3. Trust strip: authenticity, local delivery, returns/exchange, BNPL.
4. New arrivals floor: dense but art-directed product rail.
5. Category routes: Sneakers, Apparel, Accessories, Sale.
6. Shop the look / complete the fit.
7. Trending now grid.
8. Brand paths with legal-safe labels.
9. Confidence module: size guide, delivery, returns, support.
10. FAQ/legal/social footer.

### 9. Product Card Behavior

Product image stays dominant. Price, sale price, regular price, discount, label, and size availability remain readable without hover. Hover/tap can reveal secondary product angle or styled view. Quick add is size-gated. Labels are standardized: New, Sale, Sold out, Low stock if verified, Fitsole pick if curated.

### 10. Navigation Behavior

Sticky header with menu, search, cart, and account. Mega menu organized by New In, Sneakers, Brands, Apparel, Kids, Sale, Help. Search should prioritize product name, SKU/variant, brand, price, sale state, and availability. Mobile uses horizontal category chips below hero and bottom-sheet filters on collections.

### 11. Product Detail Page Direction

Product gallery and buying panel first. Price, size selector, size guide, Add to cart, BNPL/payment, delivery, returns/exchange, authenticity/support appear near the purchase decision. Below: product detail bullets, material, fit/use notes, complete-the-fit cross-sells, FAQ accordion.

### 12. Mobile Behavior

Search/cart/menu stay visible. Hero must show product and path within the first viewport. Collection intro is concise, not a huge text block. Filter/sort controls remain one tap away. PDP gets sticky bottom add-to-cart once a size is selected. Trust points appear before long description.

### 13. 3D / WebGL Recommendation

**No 3D for the core concept.** Product imagery, tight layout, and purposeful motion will create more desire with lower conversion and performance risk. Optional future: lightweight WebGL image treatment for product photography only if it keeps DOM content accessible and has poster fallback.

### 14. Spline / R3F / Blender Recommendation

- Spline: not recommended unless Fitsole supplies an exportable, legally cleared, optimized scene.
- R3F/Three.js: not for core launch; conditional future module only if product inspection materially improves buying confidence.
- Blender: not for global-brand sneaker replicas. Use only for owned/private-label or abstract non-infringing support assets if justified.
- Default: Shopify-native DOM, images, CSS motion, minimal scoped JS.

### 15. Asset Requirements

- Cleared product photography with consistent crop rules.
- Mobile-specific hero crops.
- Campaign/lifestyle assets with model/property releases.
- Product detail macros for material/sole/fit if available.
- Legal-safe brand/path labels.
- Verified trust claims: authenticity process, branch count, delivery windows, returns/exchange, BNPL/payment partners.

### 16. Why This Could Feel Awwwards-Level

It treats commerce mechanics as the art direction. The signature visual language is not a decorative scene; it is the red verification system moving through product discovery, size confidence, and cart feedback. It can feel award-level because every detail belongs to a sneaker retailer and still helps shopping.

### 17. Why This Could Fail

Weak product imagery would make it feel like a styled template. Unsupported "verified" language could create legal/trust risk. Too much drop hype could feel fake if inventory and merchandising are not current.

### 18. Conversion Risk

Low to medium. It preserves the product grid and purchase primitives, but must avoid fake scarcity, over-large editorial sections, and hidden price/size states.

### 19. Implementation Difficulty

6/10 if Shopify theme source is available; 8/10 right now because source, app constraints, legal assets, and performance baselines are blocked.

### 20. Score Out Of 100

**89/100**

## Concept B - Fit Check Lab

### 1. Concept Name

**Fit Check Lab**

### 2. One-Sentence Brand Idea

Fitsole becomes the place where shoppers can check style, size, material, availability, and return confidence before buying.

### 3. Emotional World

Precise, assured, tactile, and helpful. It should feel like a premium product inspection desk, not a sterile lab.

### 4. Visual Direction

Clean product diagnostics: macro material crops, fit notes, size panels, measurement-like dividers, product close-ups, and confidence modules. The UI feels engineered for certainty.

### 5. Typography Direction

Wide grotesk or geometric sans for confident headings, neutral sans for body/UI, restrained mono for sizes, EU/US conversions, stock, delivery, and material labels.

### 6. Color / Material Direction

Chalk white, cool grey, graphite, Fitsole red, soft rubber black, and muted steel. Material cues: sizing ruler, paper label, outsole texture, mesh, leather, suede, and boxed-product details.

### 7. Motion Language

Small, explanatory motion: size chip selection, product-detail reveal, material zoom, fit-note accordion, filter confirmation, and sticky add-to-cart state change. Motion confirms choices rather than performing.

### 8. Homepage Structure

1. Hero: "Shop your size. Trust the source." with product and search/size entry.
2. Size/brand/style search module.
3. Trust strip: authenticity, delivery, exchange, BNPL.
4. Product rails by need: Everyday, Statement, Running, Sale, Kids.
5. Size confidence preview.
6. Material/detail story for selected hero products.
7. Bestsellers and new arrivals.
8. FAQ focused on authenticity, returns, delivery, payment.

### 9. Product Card Behavior

Cards show size availability earlier than current state. Price and sale stay prominent. Optional quick-view includes delivery/returns summary. Labels are sober: Available sizes, Easy exchange, BNPL available only if true. Quick add requires size selection.

### 10. Navigation Behavior

Search becomes the first-class behavior: find by size, brand, style, color, or sale. Menu simplifies to Shop, Brands, Sale, Size Guide, Help. Collection filters prioritize size, brand, availability, price, color, and sale.

### 11. Product Detail Page Direction

Buying confidence panel beside/under product media: selected size, size guide, fit notes, delivery estimate, exchange/refund summary, authenticity note, BNPL/payment options. Product description becomes scannable and product-specific.

### 12. Mobile Behavior

Persistent search and cart. Saved/recent size filter if feasible. Trust panel appears before long product descriptions. PDP sticky add-to-cart shows selected size and price. Filter bottom sheet should make size selection frictionless.

### 13. 3D / WebGL Recommendation

No 3D for v1. Conditional future R3F/Three product-inspection module only if it uses real cleared assets and improves material or fit understanding. Strong macro photography and DOM/SVG size tools are better first.

### 14. Spline / R3F / Blender Recommendation

- Spline: not recommended.
- R3F/Three.js: conditional for a fit/material explorer with full code ownership.
- Blender: conditional only for owned/private-label or abstract sole-layer diagrams.
- Default: DOM, image macros, SVG sizing diagrams, Shopify-native sections.

### 15. Asset Requirements

- Reliable size metadata and availability.
- Product macro photography: outsole, upper, insole/fit, texture.
- Accurate material and fit notes.
- Verified authenticity process language.
- Returns/exchange and delivery details approved by owner.

### 16. Why This Could Feel Awwwards-Level

It turns purchase anxiety into interaction design. The site would feel premium because it is exact: every visual detail answers a buyer doubt.

### 17. Why This Could Fail

It can become too clinical and lose fashion desire. It also needs reliable product data; without fit notes and imagery, it becomes generic UI polish.

### 18. Conversion Risk

Medium-low. It likely improves confidence but could add cognitive load if too much diagnostic information appears before product desire.

### 19. Implementation Difficulty

7/10 with theme access; 9/10 if product metadata and fit notes need to be created from scratch.

### 20. Score Out Of 100

**84/100**

## Concept C - Egypt Moves Here

### 1. Concept Name

**Egypt Moves Here**

### 2. One-Sentence Brand Idea

Fitsole becomes the local movement map for Egypt: sneakers, sport, streetwear, kids, branches, delivery, and real everyday use in one commerce experience.

### 3. Emotional World

Local, kinetic, street-level, social, and grounded. It should feel like Egyptian daily movement seen through product, not like imported global-brand advertising.

### 4. Visual Direction

Editorial local commerce: real Cairo/Giza/street/store contexts, ground-level footwear photography, branch/support proof, map-like section transitions, and product paths by city rhythm, sport, family, and weekend.

### 5. Typography Direction

Humanist grotesk for approachable retail clarity, condensed display for local movement headlines, optional Arabic-compatible type direction if bilingual content is confirmed. No decorative faux-local typography.

### 6. Color / Material Direction

Fitsole red, warm white, asphalt, sun-faded concrete, denim blue, sport green used sparingly, and receipt/tag textures. Materials: pavement, store shelving, shoebox, cotton, mesh, leather, rubber.

### 7. Motion Language

Route-like transitions and section wayfinding: red path line, product rails that move like routes, branch/support cards sliding into view, image wipes from street context to product detail. Motion stays lightweight and skippable.

### 8. Homepage Structure

1. Hero: real local lifestyle/product image with immediate product path.
2. Shop by moment: commute, gym, match day, weekend, kids.
3. New drops and sale rails.
4. Branch/local trust module.
5. Delivery and exchange by region.
6. Shop by gender/category.
7. Brand/product paths.
8. Social/local community feed if rights are cleared.
9. FAQ and support footer.

### 9. Product Card Behavior

Cards can include a small "where it moves" tag: Street, Sport, Weekend, Kids, Sale, if merchandising supports it. Product image, price, discount, sizes, and Add/quick-view remain primary.

### 10. Navigation Behavior

Dual-mode navigation: shop by category/brand and shop by use case. Store/support path becomes more visible. Search remains global. Mobile category chips should include New, Sneakers, Sale, Kids, and Help.

### 11. Product Detail Page Direction

Product first, local confidence second: gallery, price, size, add-to-cart, then "moves with" use-case notes, delivery/exchange support, branch/WhatsApp help, and complete-the-fit suggestions.

### 12. Mobile Behavior

Thumb-first, locally useful. Quick category chips, sticky search/cart, short hero, dense product grid, store/help trust modules collapsed into tappable rows. No map gimmick that delays product browsing.

### 13. 3D / WebGL Recommendation

No 3D. Strong local photography, editorial layout, and simple route motion are better. If a future campaign uses WebGL, keep it to lightweight image transitions with DOM fallback.

### 14. Spline / R3F / Blender Recommendation

- Spline: not recommended.
- R3F/Three.js: not recommended for core concept.
- Blender: not recommended.
- Default: Shopify-native sections, responsive photography, CSS/GSAP only where needed.

### 15. Asset Requirements

- Cleared local lifestyle photography.
- Branch/store photography and accurate branch count.
- Delivery/exchange region details.
- Real social/UGC rights if used.
- Bilingual/Arabic direction if owner wants stronger local market fit.
- Product photography matched to local moments.

### 16. Why This Could Feel Awwwards-Level

It could own a world global competitors cannot: local movement, real store trust, and product discovery rooted in Egypt. Done well, the site becomes culturally specific without losing ecommerce clarity.

### 17. Why This Could Fail

If assets are stock-like, legally unclear, or too generic streetwear, the concept collapses. It also risks becoming a brand campaign rather than a shopping engine.

### 18. Conversion Risk

Medium. Local storytelling can increase trust, but too much narrative before products will slow ready buyers.

### 19. Implementation Difficulty

8/10 with theme access because it requires new photo production, rights clearance, and possibly bilingual/local content strategy.

### 20. Score Out Of 100

**81/100**

## Comparative Scorecard

| Criterion | Verified Drop Floor | Fit Check Lab | Egypt Moves Here |
|---|---:|---:|---:|
| Product desire | 9 | 7 | 8 |
| Buying confidence | 9 | 10 | 8 |
| Ecommerce clarity | 9 | 8 | 8 |
| Brand distinctiveness | 8 | 7 | 9 |
| Awwwards potential | 9 | 8 | 8 |
| Mobile integrity | 9 | 8 | 8 |
| Performance feasibility | 8 | 8 | 8 |
| Legal / asset feasibility | 7 | 7 | 5 |
| Implementation feasibility | 7 | 6 | 5 |
| 3D discipline | 10 | 8 | 10 |
| **Total / 100** | **89** | **84** | **81** |

## Winning Concept

**Verified Drop Floor** wins.

It is the strongest because it solves Fitsole's core gap without fighting the business. Fitsole already has product depth, sales mechanics, category breadth, trust claims, and mobile shopping patterns. What it lacks is an owned, premium, memorable commerce system. Verified Drop Floor gives the brand a visual and behavioral idea while preserving product discovery.

It also avoids the most dangerous trap: expensive-looking creative work that slows shoppers down. The winning concept can feel Awwwards-level through typography, product imagery, red-line interaction, product-card choreography, and trust modules rather than decorative 3D.

## Rejected Direction Notes

- Generic sneaker 3D spin: rejected because it does not improve fit, authenticity, price clarity, or buying confidence.
- Luxury black/gold sneaker boutique: rejected because it clashes with Fitsole's red identity and multi-brand sportswear energy.
- Neon/glitch streetwear: rejected because it would feel template-like and could hurt trust.
- Full-screen cinematic scroll: rejected for core commerce because it delays product discovery on mobile.

## No-Ship Risks For Concept Phase

- Do not use "verified" as a legal/authentication claim unless Fitsole confirms the process.
- Do not use global-brand logos/campaign imagery beyond allowed ecommerce merchandising rights.
- Do not claim branch count until owner reconciles current claims.
- Do not add 3D/WebGL unless the purpose, asset rights, mobile fallback, reduced-motion fallback, and performance budget are documented.

