# Signature Interaction Spec

Inherits the signature interaction from [creative-brief.md](creative-brief.md) § Signature triple. Methodology: `references/59-signature-interaction-and-game-feel-master.md`.

## The interaction

**Branch-as-pin geography.** On every product card, every PDP, and on the homepage editorial picks, a small persistent line shows *which Fitsole branch has the SKU in stock right now*. Hover or tap expands it into a reservable CTA equal in weight to "Add to cart."

User-facing language: *"In stock at Zamalek today · Reserve there →"*

## Why this one (concept tie)

The signature visual is the actual branch interior; the signature interaction is the live geographic proof that the branch is real, the stock is real, and the customer can walk into the shop to claim the shoe. The interaction *literally is* the concept ("The shop you can walk into") executed as a UI mechanic.

## Where it lives on the site

- **Homepage hero:** Sub-section under the H1 surfaces "3 branches in Cairo · open today" as a static live indicator (not the full interaction).
- **Homepage "Picked this week" cards:** Each card carries a single-line branch-stock indicator below the price.
- **Homepage editorial section ("Zamalek's most-asked-for this week"):** Geography IS the editorial frame.
- **PDP (Product Detail Page):** The full interaction. Sits above the cart CTA with co-equal visual weight to "Add to cart."
- **Search results / collection grids:** Same single-line indicator as homepage cards.
- **Trigger:** Always-visible on load (the branch-stock line is part of the card / PDP from first paint). Hover/tap expands into the reserve CTA.

## Mechanics

- **Input:** Pointer hover (desktop), tap (mobile/touch), keyboard focus (Tab to indicator → Enter to expand).
- **Output:** Visual reveal of branch detail block (address, walking time from the indicator's parent product, "Reserve there" CTA + secondary "Find another branch" link).
- **State variables:** `inStockBranchId` (Shopify Multi-Locations data), `userBranchPreference` (sticky in localStorage if user has picked a default), `expanded: boolean`.
- **Boundaries:**
  - Start: indicator visible on first paint with the closest in-stock branch (or "Available to order — `<longest ETA>`" if no branch has it).
  - End: expand state collapses on outside-click, Escape key, or focus-loss after 5s.
  - Reset on navigation.
- **Sample-data shape (for frontend-engineer):**
  ```ts
  type BranchStock = {
    branchId: string
    branchName: string  // e.g. "Zamalek"
    branchAddress: string
    inStockSizes: string[]  // e.g. ["42", "43", "44"]
    distanceFromUserKm?: number  // if geolocation granted
  }
  ```

## Game feel

- **Easing vocabulary:** `--ease-smooth` (cubic-bezier(0.45, 0, 0.15, 1)) for the expand. See [motion-language-system.md](motion-language-system.md) § Easing tokens.
- **Latency target:** ≤ 60ms from hover/tap input to first visual response (the expand begins immediately; underlying inventory data is already client-side from page load).
- **Haptic / cursor / pointer feedback:** Cursor changes to pointer on the indicator. No haptic on mobile (the tap target is large enough to not need it).
- **Failure / out-of-bounds behavior:**
  - No branch has stock → indicator reads "Out of stock at all branches · `<ETA>` to restock" with a "Notify me" CTA (no Reserve flow).
  - Shopify Multi-Locations API fails → graceful degrade: indicator shows "Stock at branches — visit to confirm" with a phone/WhatsApp number, no reserve flow.
  - Reserve flow rejected (size taken between expand and submit) → optimistic UI rollback + "Just sold — try another branch" message in the same component.

## Mobile version (distinct, not a smaller copy)

On touch devices, the indicator is **always expanded in its first form** — the single-line "In stock at `<branch>` today" with a tap target that triggers the Reserve flow directly (not a two-step hover-then-expand-then-click). The mobile pattern recognizes that hover doesn't exist and that the user wants the action exposed faster.

Mobile-specific:
- Larger tap target (44px minimum height for the indicator block).
- "Reserve at `<branch>`" CTA renders as a full-width secondary button beneath "Add to cart" on PDP.
- Branch list (if user wants to switch branches) opens as a bottom sheet (Radix `Drawer` / custom), not a hover popover.

## Reduced-motion version

Under `prefers-reduced-motion: reduce`:

- All transitions instant (no expand animation; the block appears immediately on hover/focus on desktop, always-expanded on mobile).
- Indicator content still surfaces — meaning is preserved.
- Reserve flow still works identically; only the motion is removed.

## Performance budget

- **JS heap added:** ≤ 8 KB for the interaction logic (state, expand handler, focus management). No external library beyond Radix Popover (already in stack).
- **GPU cost:** None. Pure DOM. No canvas, no transforms beyond a single `translateY` on the expand.
- **Mobile policy:** Same interaction, distinct (above). No degradation needed.

## Discoverability

The indicator is **always visible**, never hidden behind a "Click to see availability" affordance. The user sees "In stock at Zamalek today" as part of the product info on first render. The interaction's *existence* is communicated by its always-on first state; the *expanded* affordance is communicated by:

- The pointer-cursor on desktop hover.
- The branch-pin icon (custom — see `asset-ledger.csv`) signaling "this is a location, you can do something with it."
- The mobile-first explicit "Reserve there →" arrow.

No tooltip needed. No "?" help icon. No onboarding tour.

## Accessibility

- **Keyboard alternative:** Indicator is a focusable element (`role="button"` if not natively focusable). Tab to it → Enter expands → Tab continues into the expanded controls → Escape collapses. Full keyboard equivalence.
- **Screen reader behavior:** Indicator announces as "In stock at Zamalek today, expand to reserve." On expand, a `aria-live="polite"` region announces "Reserve at Zamalek — branch details available." Reserve CTA announces as "Reserve `<product>` at `<branch>` — opens reservation form."
- **Focus behavior:** Focus moves into the expanded block on activation (to the Reserve CTA). On collapse (Escape or outside-click), focus returns to the indicator.
- **Contrast:** Indicator text contrasts against card background per WCAG 2.2 AA — uses `--fg` on `--bg` per `art-direction.md` § Color.

## What this interaction is NOT

- **Not a "check availability" gated reveal.** The branch info is always visible. The expand only adds the reservation flow.
- **Not a generic "Click & Collect" mechanic.** "Reserve at branch" carries a specific promise: the size is held under the user's name for 24 hours. "Click & Collect" carries no such promise.
- **Not exported to every product context.** The signature lives on PDPs, cards, and the homepage. It does NOT appear in cart, checkout, or account pages (those are functional, not signature).
- **Not a hover-only mechanic.** Hover is the desktop expand; tap is the mobile equivalent; keyboard is the a11y equivalent. The interaction's *meaning* doesn't depend on hover.

## Acceptance criteria

The interaction is implemented correctly when:

- [ ] Indicator renders on first paint with real Shopify Multi-Locations data.
- [ ] Expand fires within 60ms of input.
- [ ] Mobile users get the distinct tap-direct version (not a degraded hover-emulation).
- [ ] Keyboard users reach Reserve via Tab + Enter.
- [ ] Reduced-motion users get instant transitions but identical meaning.
- [ ] Out-of-stock fallback states render correctly.
- [ ] Shopify Multi-Locations API failure degrades gracefully (visit-to-confirm + phone).
- [ ] Reserve flow surface (form, success state, fail state) is a separate spec — design in Phase 5.
- [ ] At least one screenshot of the interaction (collapsed + expanded + mobile + reduced-motion) appears in [screenshot-matrix.md](screenshot-matrix.md).

## Dependencies (no-ship blockers)

- **Shopify Multi-Locations enabled** with per-branch inventory data accessible via Storefront API. Confirmed by founder.
- **Branch list with names, addresses, hours, phone/WhatsApp** delivered by founder.
- **Reserve flow business logic** — how long is the hold? Cash payment at branch only, or pre-paid? Founder confirms before frontend implementation of the reserve form.
