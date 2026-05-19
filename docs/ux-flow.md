# UX Flow - Fitsole Verified Drop Floor

## Evidence Status

| Item | Status | Notes |
|---|---|---|
| UX concept | Verified | Based on selected concept and prior live-site audit. |
| Checkout tested | Not run | Requires live/theme testing after implementation. |
| Mobile flow tested | Not run | Requires screenshots and device/browser QA. |
| Theme constraints | Blocked | Shopify theme source/export is unavailable. |

## UX Promise

The experience must make shopping feel sharper, not harder. Every premium moment should support one of four buyer needs: find the right product, trust the source, choose the right size, or check out clearly.

## Core Shopper Paths

1. Ready buyer
   - Lands on homepage or product page.
   - Sees product/price/size route fast.
   - Adds to cart with visible size and trust confirmation.
   - Checks out without animation or upsell obstruction.

2. Browser
   - Uses New In, Sneakers, Brands, Apparel, Kids, or Sale.
   - Filters by size, brand, price, color, availability, sale.
   - Compares product cards in a stable grid.

3. Confidence seeker
   - Checks authenticity, delivery, exchange/returns, size guide.
   - Sees support/contact route near decision points.
   - Returns to product without losing context.

4. Deal shopper
   - Enters Sale route.
   - Sees original/current price clearly.
   - Filters and checks sizes without hidden sale conditions.

## Header / Nav Flow

Desktop:
- Header visible at load.
- Menu routes to shopping categories first.
- Search opens quickly and supports direct product discovery.
- Cart icon updates immediately after add-to-cart.
- Help/policy route is reachable without footer hunting.

Mobile:
- Header has menu, logo, search, cart.
- Menu drawer lists key categories and Help.
- Category chips provide a faster second path after hero.
- Drawer, search, and cart all support Escape/close and focus return.

## Homepage Flow

1. Trust bar sets baseline confidence.
2. Hero gives one primary shopping action.
3. Trust strip answers the first doubts.
4. New arrivals lets ready buyers move.
5. Category routes help browsers self-select.
6. Fitsole picks creates curated desire.
7. Shop the fit and sale floor deepen discovery.
8. Confidence desk resolves questions before footer.

## Product Grid Flow

Controls:
- Filter and sort remain visible.
- Mobile filter opens as a bottom sheet.
- Applied filters appear as removable chips.
- Clear all is always available.

Product cards:
- Price and sale state always visible.
- Size availability visible if data is reliable.
- Quick add is optional and size-gated.
- Product link remains the primary fallback.

Grid update:
- Avoid long loading states.
- Use skeletons only if they preserve layout.
- Empty states must suggest nearby categories or clearing filters.

## Product Card States

Default:
- Image, name, price, label, availability cue.

Hover/focus:
- Red-line active state.
- Secondary image if available.
- Quick add/quick view without shifting layout.

Tap:
- Opens PDP or explicit size selector.
- No hover-only content.

Selected:
- Size and add-to-cart state are visually and programmatically clear.

Unavailable:
- Disabled size chips remain readable.
- Sold-out card cannot be confused with active inventory.

## Product Detail Flow

Above fold:
- Gallery and buying panel only.
- Price, size selector, size guide, add-to-cart, payment/delivery/exchange notes.

After add:
- Cart drawer or page confirms exact product, image, size, quantity, price.
- Continue shopping and checkout are clear.

Below fold:
- Product details.
- Fit/material/use notes.
- Complete-the-fit suggestions.
- Related products.
- FAQ and support.

Mobile PDP:
- Gallery first but not oversized.
- Buying panel appears before long storytelling.
- Sticky bottom add-to-cart after size choice.
- Size guide opens in accessible drawer/modal.

## Cart / Checkout Preservation Rules

- Preserve Shopify checkout route and payment behavior.
- Keep checkout CTA visually dominant.
- Do not add forced account creation before checkout.
- Do not insert large recommendation blocks above checkout CTA.
- Keep subtotal, discounts, shipping/tax caveat, and selected variants clear.
- Quantity updates must show loading/error states.
- Cart drawer must be keyboard accessible and closeable.
- Checkout handoff must not depend on custom animation.

## Mobile-First Rules

- Start with real mobile compositions, not desktop shrinkage.
- Keep menu/search/cart reachable from top.
- Keep filters/sort one tap away on collection pages.
- Keep PDP add-to-cart close to size selection.
- Do not hide prices or sale labels under taps.
- Use short labels and wrap long product names cleanly.
- Avoid horizontal overflow from large typography.

## Error And Edge States

- No size selected: keep add-to-cart disabled or show clear inline prompt.
- Variant unavailable: explain and keep shopper in context.
- Cart add fails: show plain-language error near button.
- Empty cart: suggest New In, Sale, or recently viewed if available.
- No search results: show categories and spelling-neutral message.
- No filter results: offer clear filters and nearby collection route.

## Accessibility Rules

- Menus, drawers, filters, quick add, size guide, gallery, and cart are keyboard usable.
- Focus does not disappear behind sticky header.
- Touch targets are practical for mobile.
- Announce cart updates with an accessible live region if theme supports it.
- Prevent scroll lock bugs in nested drawers.

## Build Plan By UX Risk

1. Audit current routes, templates, apps, filters, and checkout handoff.
2. Update labels and hierarchy without changing functional flows.
3. Improve product card content and stable dimensions.
4. Improve mobile filters and menu.
5. Improve PDP buying panel and trust proximity.
6. Add motion states only after static UX passes.
7. Run cart/checkout regression checks before any release.
