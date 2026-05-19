# Assumptions

Everything the operator inferred without explicit user confirmation. This file exists so the user can correct any wrong assumption with one comment, instead of discovering it on the launched site.

Format: one row per assumption. ✅ = resolved by live-site research. 🆕 = added after Phase 2 site mining.

| # | Assumption | Reason / source | Risk if wrong | Confidence (L/M/H) |
|---|---|---|---|---|
| 1 | fitsole.shop is e-commerce. | Domain TLD `.shop`, project mode "rebrand", user said "rebranding this https://fitsole.shop/". ✅ **RESOLVED** — confirmed by live site (Shopify, EGP pricing, `/cart`, `checkout.fitsole.shop`). | Strategy and conversion model both shift if it turns out to be content/affiliate/lead-gen, not direct commerce. | H |
| 2 | ~~Sub-category is footwear OR insoles/orthotics.~~ ✅ **RESOLVED — footwear + apparel + accessories, multi-brand retailer** carrying Nike, Adidas, Puma, NBA, Wilson, ON, plus house "Fitsole" line. No orthotic / medical / health products on site. | Verified directly on live homepage: nav has "Men/Women/Kids → Footwear/Apparel/Accessories", brand pages for major sportswear brands, no health/orthotic copy anywhere. | None — resolved. | H |
| 3 | Audience is B2C, mobile-heavy. ✅ **CONFIRMED** — standard e-commerce signals + Egyptian market mobile-first reality. | Live site is mobile-responsive Shopify storefront, no B2B/wholesale section visible. | Misses if there's a wholesale motion not surfaced on the public site. Founder confirmation worth a question if it ever matters. | M |
| 4 | Primary conversion is **buy product**. ✅ **CONFIRMED** — standard `/cart` → `checkout.fitsole.shop` flow. | Live site funnel is unambiguous. | None — confirmed. | H |
| 5 | ~~Operating geography unknown.~~ ✅ **RESOLVED — Egypt.** Currency EGP, URL parameter `region_country=EG`, "Easy exchange at our branches" implies physical Egyptian retail presence. | Direct site evidence. | None — resolved. | H |
| 6 | Audience tier is **premium-mainstream**, not luxury and not bargain. | Price points observed: Nike Campus 00s EGP 10,999 ≈ $220 USD (premium-mainstream Nike retail), house T-shirts EGP 999 ≈ $20 (mainstream basics). Range fits premium-mainstream tier in Egypt. | If brand wants to go upscale (Concepts-tier curation) or down (deep-discount aggregator), tone shifts. Founder note will clarify. | M |
| 7 | ~~Brand tone leans practical/honest/clean.~~ **REFINED**: Current existing voice is **transactional / utilitarian** (almost no brand voice at all). The rebrand DECISION is whether to lean into clean-efficient retail or lean against by introducing editorial/cultural voice. This is a concept-time question, not a default. | Live site has effectively no brand storytelling — only product grids + transactional banners (BNPL, free shipping, branch exchange). | Picking the wrong direction here mis-targets the audience. `creative-director` must justify the choice in the three-concept competition. | M |
| 8 | The user owns fitsole.shop and has rights to mine the existing product imagery + copy + catalog data. | They said "rebranding this" with no ownership caveat. Standard assumption for a rebrand engagement. **Still must be confirmed before asset-ledger labels imagery as `licensed`.** | If they're a contractor without first-party rights, anything mined goes `Blocked` in `asset-ledger.csv` and the asset pipeline must regenerate from scratch. | M |
| 9 | No paid tools approved → signature visual must come from typography, layout, motion, and signature interaction. **3D is essentially off the table** unless free Three.js / R3F / OGL primitives can earn it. | Direct user answer in Phase 1. | If concept work concludes 3D is necessary, orchestrator must come back to user for paid-tool approval — not silently downgrade. | H |
| 10 | Award target is **none stated** → orchestrator calibrates to **Honorable Mention** ceiling for the taste rubric. | User didn't specify; brief template treats this as optional. Calibrating to HM means we still chase the 8.5+ rubric average. | Worst case is over-investing build cycles for an award the user doesn't care about; rubric ≥ 8.5 still serves conversion. | H |
| 11 | Name "fitsole" stays unless concept work argues for a rename. | No user signal that the name is on the table. Default conservative. | A rename surfaces as an explicit ask before any new-identity work locks in — not a silent swap. | M |
| 12 | Existing URL structure should default to **preserved**: Shopify-standard `/collections/*` and `/products/*`. | A full rebrand can break URLs and lose SEO. Surfacing this is required (brief's open question #3). | If we restructure URLs silently, user loses ranked traffic. The orchestrator MUST ask before any URL change. | H |
| 13 | Brand voice for the rebrand is **open until founder confirms a written voice anchor**. Default leaning: **specific + culturally grounded + non-hype** (reject the global sneaker-hype voice; introduce a voice that sounds like a real Egyptian sportswear retailer with branches and inventory, not a fake-American hype shop). | E-commerce footwear default voice is over-hyped ("step into greatness"); the rebrand will reject that. Egyptian market specificity is a real angle to claim. | If founder voice is genuinely hype-driven or wants global anonymity, we lose them in `copy-system.md`. Catchable in concept review. | L |
| 14 | Real proof = **quiet proof + retail-presence proof**: process detail, sourcing transparency, return policy honesty, branch addresses, founder note. No fabricated reviews, no invented metrics, no fake "as seen in" logos. | `SOURCE_OF_TRUTH.md` forbids fake proof; user provided no real proof material; live site has physical branches that can be foregrounded as authentic proof. | None — safe default. | H |
| 15 | Stack default is `starter-next-awwwards/` (Next.js + Tailwind + R3F + GSAP) **consuming the existing Shopify back-end via Storefront API** (headless), OR a Shopify Liquid theme rewrite. `master-technical-director` decides. | Pack default + Shopify constraint. Headless Shopify with Next.js is the higher-effort, higher-design-ceiling path; theme rewrite is faster but capped by Liquid's expressiveness. | Picking the wrong path delays ship or caps the visual ambition. Decision goes in `tech-stack-decision.md`. | M |
| 16 | ~~Platform unknown.~~ ✅ **RESOLVED — Shopify.** Confirmed by CDN paths (`//fitsole.shop/cdn/shop/files/`), checkout subdomain (`checkout.fitsole.shop`), URL structure (`/collections/*`), customer-auth pattern (`/customer_authentication/redirect`). | Direct site evidence. | None — resolved. | H |
| 17 | The `make` toolchain may be unreliable on this Windows host; **`python ops/<script>.py` is the canonical invocation** in this run. ✅ Confirmed working. | Makefile declares `SHELL := /bin/bash` and `PYTHON ?= python3`; Windows defaults are bash-not-on-PATH and `python` (not `python3`). | None — both forms are documented in the pack as equivalent. | H |
| 18 | `scaffold_evidence.py` creates **40** templates in `docs/` (matches `SKILL.md` and example doc). ✅ Verified. | Direct verification: scaffold produced 40 files. | None — informational. | H |
| 19 🆕 | This is a **multi-brand retailer rebrand**, not a single-brand DTC rebrand. The visual system must be a **container that elevates carried brands** (Nike, Adidas, Puma, NBA, Wilson, ON) without competing with them — yet must also make space for the house "Fitsole" product line to feel like a tastemaker pick, not an embarrassment next to the global heavyweights. | Live site nav confirms: Best sellers → Men/Women/Kids → Brands (Nike, Adidas, Puma, FITSOLE, NBA, Wilson, ON). | If we design like a single-brand DTC, the carried brands look out of place; if we design too neutral, the rebrand has no signature. The brave decision in `creative-brief.md` must address this directly. | H |
| 20 🆕 | **Egyptian market context** matters: EGP currency volatility = no hard-coded prices in copy/imagery; BNPL is a real conversion lever (Aman, Tabby, ValU, MisrPay compete here) and must stay prominent; English UI is the local convention for premium retail (not Arabic) so don't switch unless the founder wants it. | Live site evidence: EGP pricing, "Buy now pay later" prominent in top banner, English-only UI for a 2026 Egyptian Shopify store. | If we ignore market context, we ship a generic global-looking site that loses the local audience. Egyptian specificity is also an Awwwards-worthy angle (most footwear retail rebrands genericize). | H |
| 21 🆕 | **Fitsole has physical retail branches in Egypt.** "Easy exchange at our branches" in the top banner confirms this. Branches are an authentic proof point that quiet-proof storytelling can foreground. | Direct site copy. | If branches turn out to be 1 small kiosk and not a real retail footprint, the visual emphasis we'd put on "retail presence" needs to scale down. Founder confirmation on branch count / locations is a Phase 3 ask. | M |
| 22 🆕 | **Existing photography quality is high** (transparent-PNG product flats, on-model standard/back views, detail shots — all professional). The rebrand can build on this rather than re-shoot, *if* asset rights are confirmed (assumption #8). | Image filenames in homepage HTML reveal a structured product-photo system. | If photography rights aren't first-party, we lose this asset; the rebrand then needs a generation strategy without paid tools = very tight. | M |
| 23 🆕 | **Existing trust infrastructure is empty.** No reviews, no testimonials, no ratings, no "as seen in", no certifications. The rebrand has a clean slate to introduce honest proof — but must NOT manufacture proof to fill the gap. | Direct site evidence: trust signals on homepage are only BNPL + free shipping + branch exchange. | If we build a rebrand assuming reviews/testimonials exist, the copy system will have empty slots at launch. Default: lean on **branches + founder note + process detail + return policy** as quiet proof. | H |
| 24 🆕 | **Anti-pattern audit of live site is clean.** No fake reviews, no logo soup, no stock-customer-faces, no "21st century" filler. This means the rebrand doesn't need to clear out junk — it can spend its budget on building a strong positive signature instead of fixing negative debt. | Direct site evidence. | None — informational. | H |

## Categories of assumption typically present

- Audience identity (job titles, sophistication, pain points)
- Conversion mechanic (call / form / WhatsApp / etc.)
- Brand tone (formal / friendly / editorial / technical)
- Visual language (color, type, imagery direction)
- Geography and language
- Content sources (real / generated / placeholder)
- Tech stack and hosting
- 3D / motion ambition
- Asset rights handling

## Conflicts with `SOURCE_OF_TRUTH.md` or user instructions

None as of Phase 2 mid-point. The user's "no paid tools" + "no brand assets" combination remains fully consistent with `SOURCE_OF_TRUTH.md`. The multi-brand retail context introduces a new design challenge but no rule conflict.

## Assumptions that need user confirmation before ship

These are not blockers for design work, but they are blockers for ship:

- **Rebrand scope** (retailer storefront vs. retailer + house "Fitsole" line as one system) — assumption #19. Open question #2 in brief.
- **User owns fitsole.shop and has asset rights** — assumption #8. Must be confirmed before `asset-ledger.csv` labels mined imagery as `licensed`.
- **Existing URL structure may change** — assumption #12. Surface before any IA-altering work.
- **Re-platform vs. re-skin** (keep Shopify back-end vs. migrate) — assumption #15. Default = keep Shopify. Founder confirmation required if migration is wanted.
- **Name "fitsole" stays** — assumption #11. If concept work argues for a rename, come back to user.
- **Branch count and locations** — assumption #21. Affects how much weight quiet-proof storytelling puts on retail presence.
- **The 90-day success metric** in `one-input-brief.md` is a placeholder until founder confirms a real baseline.

## What the live-site research did NOT resolve

- **Why** Fitsole exists vs. buying from Nike/Adidas Egypt direct. The competitive angle is unanswered — `market-researcher` Phase 2 deep dive should investigate Egyptian sportswear retail landscape (BSTN-equivalent, multi-brand premium retailers like SUNS, etc.) and the gap Fitsole is filling.
- **Founder identity / origin.** No About page visible on homepage. Phase 2 should ask founder for a 2–3 paragraph origin note to anchor a new voice.
- **Customer mix.** Male/female/kids split on the actual sales side (not just nav structure). Could matter for hero imagery selection.
- **Performance baseline.** No analytics access. The "90-day uplift" target is directional only.
