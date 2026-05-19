# QA Report - Fitsole Drop Floor

## Scope

This QA pass covers the local static root app at `http://127.0.0.1:8765/` after the screenshot review and fix pass. The repo is still not a Shopify theme export; product, cart, search, policy, and checkout paths link back to `https://fitsole.shop/`.

## Checks

| Check | Status | Evidence |
|---|---|---|
| Local preview | Verified | In-app/browser target served `http://127.0.0.1:8765/`. |
| Static test | Verified | `npm test` passed: `Fitsole static verification passed.` |
| Screenshot set | Verified | Seven screenshots saved in `upgrade-diffs/qa/fitsole-review-after/`. |
| Desktop product media | Verified | Playwright showed 0 blank visible product media. |
| Mobile product media | Verified | Playwright showed 0 blank visible product media. |
| Mobile overflow | Verified | `scrollWidth` 390 equals `innerWidth` 390. |
| Mobile menu focus | Verified | Focus remained inside `#mobileDrawer` after repeated Tab presses. |
| Mobile cart link | Verified | Header cart href is `https://fitsole.shop/cart`. |
| Reduced motion | Verified | Playwright `reducedMotion: reduce` matched the media query and screenshot was captured. |
| Accessibility automation | Verified | `npx @axe-core/cli http://127.0.0.1:8765/ --exit` returned 0 violations. |
| Manifest JSON | Verified | `node -e "JSON.parse(...)"` passed. |
| Lighthouse report | Verified report / cleanup error | Report generated at `upgrade-diffs/qa/fitsole-review-after/lighthouse.json`; CLI exited 1 on Windows temp cleanup. |
| Formatting | Not run | No formatter script exists in `package.json`. |
| Linting | Not run | No lint script exists in `package.json`. |
| Typecheck | Not run | Static HTML/CSS/JS app; no typecheck script exists. |
| Build | Not run | Static app; no build script exists. |
| Full live checkout transaction | Not run | Would require owner-approved live Shopify transaction testing. |
| Screen-reader pass | Manual review required | Automated axe cannot cover full SR experience. |
| Legal asset/claims review | Manual review required | Product imagery, trust claims, brand usage, and fonts require owner confirmation. |
| Shopify production readiness | Blocked | Actual Shopify theme source/export is not present. |

## Lighthouse

| Metric | Result | Status |
|---|---:|---|
| Performance | 85/100 | Manual review required |
| Accessibility | 100/100 | Verified |
| Best Practices | 100/100 | Verified |
| SEO | 100/100 | Verified |
| LCP | 3.4 s | Failed budget |
| FCP | 3.1 s | Manual review required |
| TBT | 0 ms | Verified |
| CLS | 0.041 | Verified |
| Speed Index | 3.1 s | Manual review required |

Lighthouse caveat: metrics are parseable, but the command exits 1 because Chrome Launcher cannot delete a temp profile folder on Windows.

## Specialist Findings Incorporated

| Specialist | Status | Result |
|---|---|---|
| Screenshot critic | Verified / manual review | Initial no-ship; main blockers were prototype copy, weak hero product, blank media, admin dialog, and generic mobile/product cards. |
| Accessibility UX | Verified / manual review | Fixed contrast, mobile focus containment, horizontal overflow, repeated action names, mobile search, skip link copy, and dialog description. |
| GPU performance | Verified / manual review | No WebGL needed; image delivery and LCP remain top risks. Added responsive image URLs, `srcset`, lazy/eager split, reduced font weights, and staged fallback rendering. |
| Release QA | Verified / manual review | Initial no-ship; fixed public prototype copy, legacy Halo favicon/404, and blank mobile media. Production Shopify readiness remains blocked. |

## Current QA Decision

**PASS FOR INTERNAL OWNER REVIEW. NO SHIP FOR PRODUCTION.**

Verified: local static app, screenshots, product feed rendering, cart link, reduced motion, axe, mobile overflow, mobile focus containment, and static test.

Manual review required: visual taste, screen reader, legal assets/claims, performance budget, and live Shopify checkout.

Blocked: production Shopify implementation until the actual theme source/export is available.
