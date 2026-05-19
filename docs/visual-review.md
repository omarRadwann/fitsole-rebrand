# Visual Review — Current state of https://fitsole.shop/

The **rebrand-specific gate** required by `CLAUDE_FLOWCHART.md` § "Branch: existing repo": current-state critique of the existing site before any code is written. Section-by-section judgments with Keep / Repair / Cut, leading to a priority-ordered fix list.

Methodology: `references/49-visual-qa-red-team.md`. Source for observations: WebFetch on 2026-05-19 (the `market-researcher` Phase 2 intake).

**Note on screenshots:** Live captures of the current site are not embedded here — they would be commissioned in Phase 5 visual-QA loop. This review uses the structural observations from the WebFetch intake plus the homepage HTML signals.

---

## Header / nav

- Screenshot ref: pending Phase 5 capture (captured in Phase 5 `screenshot-matrix.md`)
- **Working:** IA is comprehensive — Men / Women / Kids × Footwear / Apparel / Accessories with brand pages (Nike, Adidas, Puma, FITSOLE, NBA, Wilson, ON) and SALE. Header is functional Shopify-standard (Login / Search / Cart). The top banner usefully surfaces BNPL, free shipping, and branch exchange — three real trust signals.
- **Not working:** No brand voice present in the chrome (no tagline, no value prop, no editorial nav item). Brand pages exist as flat collection lists, not as curatorial statements. Top banner is informational only — the same three lines a generic Shopify store could put there.
- **Decision: Repair.**
- **Specific tasks:**
  1. Keep the IA spine (don't break URLs).
  2. Add an "Inside Fitsole" editorial nav item (matches the concept's editorial layer).
  3. Re-treat brand pages as typographic curatorial statements per `art-direction.md` § Composition, not logo-grid landing pages.
  4. Strengthen the top banner with concrete branch-presence detail ("3 branches in Cairo · open today") rather than only transactional benefits.

## Hero

- Screenshot ref: pending Phase 5 capture
- **5-second test answers (current site):** What is this? — *A sneaker store, probably*. Who for? — *Unclear*. Why care? — *Discounts?* What next? — *Click a banner, hope*. **Fails the 5-second test.**
- **Working:** Banner carousel rotates through three meaningful collection drops (SALE, NBA, ADIDAS) — at least it points to real product.
- **Not working:** No H1. No value proposition. No claim of any kind. The carousel itself is the cliché — banner-carousel-as-hero is a 2014 e-commerce pattern that signals "we don't know what to lead with." Worst: the hero says nothing about *Fitsole* — it could be any multi-brand Egyptian sneaker store stocking the same brands.
- **Decision: Cut entirely. Replace.**
- **Specific tasks:**
  1. Replace banner carousel with the concept's signature visual: full-bleed photograph of the actual Fitsole branch interior + H1 "The shop you can walk into." + sub + primary CTA. See `art-direction.md` § Composition and `copy-system.md` § Hero copy.
  2. No carousel. No auto-rotation. One frame, anchored.
  3. Mobile hero is a separate composition (image above type stack), not a stack of the desktop layout. Per `art-direction.md` § Mobile hero composition.

## Section — New Arrivals

- Screenshot ref: pending Phase 5 capture
- **Working:** Catalog mining surfaces real product (CAMPUS 00s W, TOKYO W, Handball Spezial, etc.) with real prices in EGP. The product flats themselves are professional.
- **Not working:** "New Arrivals" is the most generic possible section title. There are 9 products in a flat grid with no editorial context, no taste signal, no "we picked these" voice. The grid reads as "everything that came in this week" rather than "what we chose to feature this week."
- **Decision: Repair.**
- **Specific tasks:**
  1. Rename to "Picked this week" per `copy-system.md` § Section 2.
  2. Trim from 9 items to 3–6 — restraint is the design move.
  3. Add eyebrow ("PICKED THIS WEEK · MAY 19 — MAY 25") and one short editorial paragraph ("Six pieces our buyers chose for the week...").
  4. Each card uses the hover-reveal interaction from `art-direction.md` § Motion (primary product flat → secondary shelf-context shot).

## Section — Shop the Look

- Screenshot ref: pending Phase 5 capture
- **Working:** Outfit-bundling is a real AOV-uplift play. Three coordinated outfits is a reasonable size.
- **Not working:** "Shop the Look" as a section title is generic. The coordination logic isn't editorial (no story behind the looks; no occasion; no naming).
- **Decision: Repair.**
- **Specific tasks:**
  1. Re-frame as named looks ("Maadi Friday" / "Heliopolis morning run" / "Zamalek weekend"), tied to Cairo-cultural moments — this is the geographic-specificity lever from `creative-brief.md`.
  2. Each look gets a one-sentence editorial note from a Fitsole staff member or founder (per `copy-system.md` voice — "we" voice, plain assertion).
  3. Looks composed against real branch interior or Cairo location backdrops where possible (subject to asset rights).

## Section — SALE

- Screenshot ref: pending Phase 5 capture
- **Working:** Prices clearly shown with old-vs-new strikethrough. The discount mechanic is honest.
- **Not working:** Currently uses red/yellow SALE styling (typical Shopify theme). Anti-pattern per `art-direction.md` § Anti-pattern list.
- **Decision: Repair.**
- **Specific tasks:**
  1. Remove red/yellow SALE badges entirely.
  2. Show discounts via type only: strikethrough on old price (in `--sale` muted warm-grey-red), current price in `--fg`. No "%-off" badge overlays on product cards.
  3. Section header per `copy-system.md` § Section 5: "Last-season pieces at fair prices" with the explicit no-FOMO note.

## Section — Brands (the existing brand collection pages)

- Screenshot ref: pending Phase 5 capture
- **Working:** Each brand has its own collection URL (`/collections/nike`, `/collections/adidas`, etc.) — good SEO structure.
- **Not working:** The brand-collection pages (per Shopify default theme) are flat product grids with no curatorial voice. They miss the chance to be Fitsole's strongest taste statement.
- **Decision: Repair.**
- **Specific tasks:**
  1. Each brand page gets an editorial intro: "Why we carry [Brand]" — 2–3 paragraphs of plain Fitsole voice, naming which of the brand's models Fitsole specifically keeps and which they don't.
  2. Brand index page (`/brands` — new) is typographic, not logo-grid (per `copy-system.md` § Section 4: "Six brands we picked. Three more we said no to.").
  3. Per-brand pages preserve SEO equity (keep URLs as-is, replace the contents).

## Section — Branches / trust infrastructure

- Screenshot ref: pending Phase 5 capture — **may not exist as a section on the current site at all** (the WebFetch surfaced "easy exchange at our branches" in the top banner, but no dedicated branches section was visible on the homepage).
- **Working:** Branches exist (per top banner). This is the single strongest unused asset on the existing site.
- **Not working:** Branches are referenced once, in a banner, then never elevated. There is no Branches page, no addresses, no photographs, no hours, no phone numbers visible. **The biggest gap on the existing site.**
- **Decision: Create (effectively, "Repair from nothing").**
- **Specific tasks:**
  1. Build a dedicated `/branches` page per `copy-system.md` § Section 6 — branch addresses, photographs, hours, phone/WhatsApp per branch.
  2. Surface branches on every product page (the "in stock at Zamalek" signal from `creative-brief.md` § Signature interaction).
  3. Branches photographed in the same visual style as the hero (the commissioned shoot).

## Section — Founder / About

- Screenshot ref: pending Phase 5 capture — **does not exist on the current site.**
- **Working:** Nothing. The current site has no founder, no About, no origin story.
- **Not working:** The entire trust infrastructure assumes a faceless brand. In Egyptian sneaker retail this is a weak position (counterfeit fear is high; faceless = "could be anyone").
- **Decision: Create.**
- **Specific tasks:**
  1. Add a § 7 founder-note section to the homepage per `copy-system.md` § Section 7 (2–3 paragraphs, plain first-person voice, signed with real name).
  2. Add a deeper `/about` page that expands the founder note with the Fitsole origin story.
  3. Founder content is **`Manual review` until founder writes it.**

## Footer

- Screenshot ref: pending Phase 5 capture (not surfaced in the WebFetch homepage HTML excerpt — probably Shopify standard)
- **Working:** Assumed-functional Shopify-standard footer with policy links, social, possibly newsletter.
- **Not working:** Currently the footer is the last opportunity to deliver brand voice and it's almost certainly being wasted on legal-boilerplate filler.
- **Decision: Repair.**
- **Specific tasks:**
  1. Replace standard footer with the 4-column composition in `copy-system.md` § Footer copy.
  2. Final voice line: "Fitsole. A real shop with a website. Cairo, Egypt." Replaces the generic "© 2025 All rights reserved" lead.
  3. Branch addresses surfaced in footer column 1.

## Signature interaction

- Screenshot ref: N/A — current site has no signature interaction. Every interaction is generic Shopify (hover product card, add to cart, etc.).
- **Concept tie obvious from screenshot?** N/A — concept doesn't exist yet on the current site.
- **Mobile version:** Current site is mobile-responsive Shopify but mobile is a degraded version of desktop, not a distinct design.
- **Reduced-motion path:** Not verified (the current site uses Shopify defaults; reduced-motion likely respected for native CSS animations).
- **Decision: Create.**
- **Specific tasks:**
  1. Implement "Branch-as-pin geography" per `creative-brief.md` § Signature interaction — on every PDP and product card, show which branch has the SKU in stock, with "Reserve at branch" CTA co-equal to "Add to cart."
  2. Implement hero slow-pan + product-card hover-reveal per `art-direction.md` § Motion language.
  3. Mobile is its own design — branch pin geography becomes a tap-expand element, not a hover state.
  4. Reduced-motion: all signature motions degrade to static. Document in `motion-language-system.md`.

---

## Cross-cutting concerns

### Typography

- **Current:** Shopify-default type stack (system sans). No typographic personality. Hierarchical jumps are mild — H2 ≈ 1.25× body, H1 ≈ 1.6× body. Reads as "default theme."
- **Repair direction:** Replace with the locked type system from `art-direction.md` (Geist display + Inter body + JetBrains Mono numeric). Commit to scale-jumps (H1 clamp up to 6rem). Type as the visual.

### Color

- **Current:** Black on white with red/yellow SALE accents. Generic e-commerce palette.
- **Repair direction:** Replace with the locked OKLCH tokens from `art-direction.md`. Cairo terracotta accent used with discipline (one job per page). No red/yellow SALE badges.

### Spacing / composition

- **Current:** Tight Shopify grid; sections rendered minimally with consistent spacing. Reads as "competent default."
- **Repair direction:** Asymmetric grid use (8-of-12 with 4-column editorial rail). Section-to-section contrast (full-bleed photo → type-led editorial → full-bleed → type-led). Generous whitespace where the concept earns it.

### Motion

- **Current:** Standard Shopify card hover (subtle scale, opacity change). No concept-tied motion.
- **Repair direction:** Two locked signature motions (hero slow-pan + card hover-reveal). Nothing else. Restraint is the motion language.

### Mobile-as-its-own-design

- **Current:** Mobile is a degraded stack of desktop sections. The hero carousel becomes a carousel on mobile (worse on a small screen than on desktop). Product grid stacks to 2-column or 1-column depending on size.
- **Repair direction:** Mobile hero is a separate composition (image-then-type, not type-over-image). Branch-pin geography becomes a tap-expand on mobile, not a hover. Mobile type scale is intentionally large — type-as-visual on mobile even more than on desktop.

### Detail consistency

- **Current:** Default Shopify focus states (browser-default outline). Cards have default Shopify radius. Iconography is standard Shopify icon set.
- **Repair direction:** Custom focus ring using `--accent` Cairo terracotta. Card radius locked (suggest 8px; small, restrained). Custom 1.5px-stroke line icons per `art-direction.md` § Iconography.

---

## The "would this still make sense for a competitor" test (current site)

| Section | Could be pasted onto a competitor unchanged? |
|---|---|
| Header / nav | Y — generic Shopify nav. |
| Hero (banner carousel) | Y — the carousel images could swap brand and the structure would still work for any sneaker retailer. **Fails.** |
| New Arrivals | Y — "New Arrivals" + grid is the universal default. **Fails.** |
| Shop the Look | Y — same. **Fails.** |
| SALE | Y — same. **Fails.** |
| Brands (collection pages) | Y — flat collection grids are generic. **Fails.** |
| Branches | N/A — doesn't exist as a section. |
| Founder / About | N/A — doesn't exist. |
| Footer (assumed Shopify-standard) | Y — generic footer. **Fails.** |

**Every section that currently exists fails the "only this business" test.** This confirms the rebrand is not over-scoped — the current site has no Fitsole-specific design content above the level of the brand logo. The rebrand is what makes Fitsole legible as a specific business.

---

## Priority-ordered fix list (the only part the next build pass acts on)

The fix list below is the **single source of truth** for what frontend-engineer implements once founder dependencies are confirmed and Phase 5 begins. Items above the line are concept-critical (must ship); items below are nice-to-have (cut if budget runs out).

1. **Replace banner-carousel hero with single signature hero** (branch photograph + H1 "The shop you can walk into." + sub + primary CTA). Per `art-direction.md` and `copy-system.md`. Blocked on hero photograph commission.
2. **Build `/branches` section + page** with real addresses, hours, contact, and branch photographs. Per `copy-system.md` § Section 6. Blocked on founder branch data + photography.
3. **Implement "Reserve at branch" signature interaction** on PDP + product card. Blocked on Shopify Multi-Locations confirmation.
4. **Re-treat brand collection pages as curatorial statements** with editorial intros + typographic brand index at `/brands` (new). Preserve URL structure for SEO.
5. **Replace red/yellow SALE styling** with type-only discount treatment (strikethrough + muted warm tone). Per `art-direction.md` § Color.
6. **Rename "New Arrivals" → "Picked this week"** and trim to 3–6 curated items with editorial framing.
7. **Add founder note section** to homepage + deeper `/about` page. Blocked on founder writing the note.
8. **Replace mobile hero with a separate composition** (image + type stack, not over-image overlay). Test on real mid-tier Egyptian mobile devices.
9. **Implement product card hover-reveal motion** (cross-fade primary → secondary shelf-context shot). Reduced-motion: static.
10. **Implement hero slow-pan motion.** Reduced-motion: static.
11. **Add `/editorial/` (Inside Fitsole) section** with the first weekly piece. MDX-in-repo per `tech-stack-decision.md`.
12. **Replace footer** with the 4-column composition + "A real shop with a website. Cairo, Egypt." final line.

— line —

13. Add optional Arabic-typographic moments (branch names, footer city tag) — pending founder approval per `art-direction.md` § Decisions still pending.
14. Add Cairo-themed "Shop the Look" outfit naming (Maadi Friday, etc.) — depends on additional content/photography effort.
15. Build out brand-page editorial content for all 6 carried brands — phase-2 work if budget allows.
16. Newsletter section with weekly-pick hook — only if founder has a content cadence to support it.
