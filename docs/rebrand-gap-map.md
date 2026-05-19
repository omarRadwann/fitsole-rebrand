# Rebrand Gap Map - Fitsole

## Current Implementation Status

The local static root has moved from an audit blueprint to a Fitsole Drop Floor prototype. It is sharper, more commerce-safe, and less template-like than the starting point, but the remaining gaps are real: production Shopify source is missing, owner-cleared campaign assets are missing, and Lighthouse LCP remains over budget.

## Gap Matrix

| Area | Current State After Fixes | Remaining Gap | Preserve | Risk If Overdone | Status |
|---|---|---|---|---|---|
| Brand identity | Red/black/cream drop-floor system is visible and no longer carries prototype copy. | Needs owner-approved campaign imagery and fuller brand world. | Fitsole logo, red energy, clear store routes. | Fake luxury or generic sneaker hype would weaken trust. | Manual review required |
| Homepage hero | Stronger product tile, clearer shopper copy, visible CTAs and cart. | Product still relies on transparent catalog PNG; mobile first viewport is text-heavy. | Search, cart, category access, fast route to products. | Hero spectacle could delay shopping. | Verified / manual review required |
| Product listing | Product media loads, names are cleaner, size summaries are scan-friendly. | Cards still feel like commerce cards, not fully editorial merchandising. | Price, sale price, product route, quick check. | Heavy motion or hidden info would hurt conversion. | Verified |
| Product detail dialog | Fit/exchange confidence language replaced admin route/data language. | Not a true PDP; final size/checkout stays on live Fitsole product page. | Price, sizes, product link, close behavior. | Local fake checkout would be dangerous. | Verified |
| Mobile | No overflow, no blank media, drawer search added, focus contained. | First viewport could use a stronger mobile product crop and shorter text. | Menu, cart, search, 2-up product density. | Desktop-first cinematic layout would fail mobile. | Verified / manual review required |
| Accessibility | Axe 0, contrast blocker fixed, focus trap fixed, repeated action labels improved. | Full screen-reader and external Shopify route QA still needed. | Semantic DOM, real buttons/links, reduced motion. | Custom canvas/cursor/hidden controls would create barriers. | Verified automated / manual review required |
| Performance | No WebGL; responsive image URLs, `srcset`, lazy loading, reduced font weights, staged render added. | Lighthouse Performance 85 and LCP 3.4s still miss budget. | DOM-first product content, no heavy animation libraries. | More media or WebGL would worsen LCP/INP. | Verified report / manual review required |
| Motion | Minimal CSS motion and reduced-motion fallback. | Needs a more memorable but still useful motion language. | Button/card feedback and no scroll-jacking. | Decorative motion would hurt product scanning. | Manual review required |
| 3D/WebGL | Not used. | Still not justified without owner-cleared product/material/fit assets. | Fast product imagery and DOM commerce. | Meaningless 3D would be slow and legally risky. | Verified no WebGL |
| Legal assets | Uses live Fitsole product images and public product routes. | Rights, brand usage, trust claims, and campaign assets require owner confirmation. | Real product media only. | Illegal copied brand assets or AI fakes are unacceptable. | Manual review required |
| SEO | Root metadata, manifest, 404, favicon, robots/sitemap are Fitsole-oriented. | Actual Shopify product/category SEO must be handled in theme. | Crawlable links and product/category routes. | Client-only replacement could hide content. | Verified / manual review required |

## Fixed In This Pass

- Removed internal prototype/status wording from public UI.
- Removed public owner-confirmation/authenticity caveats from the shopping page.
- Replaced legacy Halo favicon and 404 route.
- Fixed blank mobile product media.
- Improved hero product scale and image readiness.
- Cleaned raw product titles and size strings.
- Reframed quick-check dialog around fit and exchange confidence.
- Added mobile search and drawer focus containment.
- Fixed contrast and horizontal overflow blockers.
- Added responsive Shopify image URLs, image `srcset`, reduced font weights, and fallback-first rendering.

## Remaining No-Ship Reasons

| Reason | Status | Detail |
|---|---|---|
| Shopify theme source unavailable | Blocked | Local static app cannot be considered a production theme implementation. |
| LCP over budget | Verified report / manual review required | Lighthouse LCP is 3.4s against a 2.5s target. |
| Asset/legal confirmation missing | Manual review required | Product, brand, trust, font, and campaign usage require owner approval. |
| Campaign-grade visual assets missing | Manual review required | Awwwards-level feeling needs stronger owned photography/video. |
| Full checkout QA not run | Not run | No owner-approved live transaction or Shopify theme checkout test was performed. |

## Updated Scorecard

For `Performance risk`, higher means more risk.

| Dimension | Score | Status | Interpretation |
|---|---:|---|---|
| Brand distinctiveness | 7 | Manual review required | Much stronger than the starting point, still asset-limited. |
| Ecommerce clarity | 8 | Verified | Clear paths, cards, search, cart, filters, prices, and size cues. |
| Awwwards potential | 8 | Manual review required | Strong foundation if paired with real campaign assets and tighter motion. |
| Visual system | 7 | Manual review required | Good typographic system; needs more image/art-direction depth. |
| Motion potential | 6 | Manual review required | Useful but underdeveloped. |
| 3D/WebGL justification | 2 | Verified | Still not justified for this phase. |
| Mobile experience | 7 | Verified / manual review required | Functional and contained; first viewport can be more product-led. |
| Performance risk | 7 | Verified report / manual review required | Improved implementation, but LCP still fails budget. |
| Implementation difficulty | 8 | Verified / manual review required | Shopify port, legal assets, and performance tuning remain hard parts. |

## Decision

**Internal review prototype: yes. Production ship: no.**

The site no longer feels like a normal default ecommerce template, but it also is not yet a final Awwwards-level commerce experience. The next real leap comes from owner-cleared assets, production Shopify integration, and performance work.
