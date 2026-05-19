# Ship Decision - Fitsole Drop Floor

## Decision

**PASS FOR INTERNAL OWNER REVIEW. NO SHIP FOR PRODUCTION.**

The local static prototype is substantially improved and verified for owner/design review. It is not a production Shopify ship because the actual Shopify theme source/export is unavailable, legal asset/claim approval is still required, and Lighthouse LCP remains over budget.

## Evidence

| Area | Status | Evidence |
|---|---|---|
| Local app | Verified | Served at `http://127.0.0.1:8765/`. |
| Static test | Verified | `npm test` passed. |
| Screenshots | Verified | Seven screenshots in `upgrade-diffs/qa/fitsole-review-after/`. |
| Accessibility automation | Verified | axe returned 0 violations. |
| Mobile overflow | Verified | `scrollWidth` 390 equals `innerWidth` 390. |
| Mobile product media | Verified | 0 blank visible media panels in Playwright. |
| Mobile menu focus | Verified | Focus remained inside open drawer after repeated Tab presses. |
| Reduced motion | Verified | Reduced-motion media query active and screenshot captured. |
| Cart preservation | Verified | Cart link remains `https://fitsole.shop/cart`; no local fake cart added. |
| Product data flow | Verified | Live product feed rendered 104 styles; fallback seed renders immediately. |
| Lighthouse | Verified report / cleanup error | Report generated, but command exited 1 on Windows temp cleanup. Performance 85, LCP 3.4s. |
| Legal assets and claims | Manual review required | Owner approval required. |
| Full live checkout transaction | Not run | Requires owner-approved Shopify transaction test. |
| Production Shopify implementation | Blocked | Theme source/export is not present. |

## Production Blockers

- Shopify theme source/export is unavailable.
- Lighthouse LCP is 3.4s, above the 2.5s budget.
- Product, brand, trust, font, and campaign asset rights require owner confirmation.
- Full screen-reader review has not been run.
- Full live Shopify checkout transaction has not been run.

## Current Use

Use this as an internal owner-review prototype and a production design direction. Do not treat it as a final public Shopify deployment.
