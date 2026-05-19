# Creative Brief

The synthesis document the creative-director and art-director both sign off on before art and copy diverge. Locked at concept-time. Changes require re-scoring.

## Project

- Name: **Fitsole rebrand**
- Slug: **fitsole-rebrand** (proposed `workspace/fitsole-rebrand/`)
- Scope: Full rebrand of https://fitsole.shop/ — frontend redesign on the existing Shopify back-end (default). Retailer brand + house "Fitsole" product line treated as one system unless founder splits the scope.

## The one-sentence ambition

> This website presents *Fitsole* as *the digital aisle of a real Cairo shop you can walk into* so that *Egyptian sneaker shoppers* feel *the certainty of dealing with a real place and real people* and understand *that Fitsole's physical presence is the authentication every digital sneaker buyer in Egypt actually wants*.

## What this site is NOT

- Not a brand-logo collage retailer ("Nike × Adidas × Puma!"); the carried brands are stock, not identity.
- Not a hype/drop/FOMO storefront with countdown timers and manufactured scarcity.
- Not a globally-anonymous "premium e-commerce" template; this site looks unmistakably Egyptian.
- Not an editorial magazine for sneaker culture (that's Highsnobiety's job); editorial content here serves the shop, not the other way around.
- Not a copy of END. or Patta — the brave decision below explicitly rejects that.
- Not a trust-badge-decoration storefront ("Free shipping ✓ Secure checkout ✓ As seen in ✓"). Trust is built through real proof: real branches, real founder, real return policy.

## Selected concept (from concept-scorecard)

- **Concept name:** B — "The Branch"
- **One-liner:** The digital aisle of a real Cairo shop you can walk into.
- **Why selected:** Owns Fitsole's structural advantage (physical retail in Egypt) that no global brand-direct competitor and no grey-market Instagram seller can replicate. Brave decision is clear, ownable, and the one move category competitors reliably do not make. Feasibility is the bet, and the dependencies are real but tractable for a real retailer with real branches.

## The brave decision

**The homepage hero is a photograph of the actual Fitsole branch interior — not a product, not a model, not an editorial scene — the actual shop. The H1 sits over the real space at confident editorial scale: "The shop you can walk into." The whole site is anchored to physical retail; products are presented in shelf context where helpful; "Reserve at branch" is a CTA of equal weight to "Add to cart"; branch addresses appear as design device, not footer fine print.**

Most clients would reject this:
- It looks "less premium" than abstract-product-on-cyclorama.
- It commits the brand to specific physical spaces (one bad-looking branch undermines the system).
- It risks "looking like a small shop" to international visitors.

The defense: Egyptian sneaker shoppers — the actual audience — have been told they're shopping at a brand-anonymous global storefront when they're actually buying from a local retailer. Concept B is honesty as design discipline. The shop is real; we show the shop. This is the one move END. and Patta would not make, and it is exactly the move the audience needs.

## Tone

| Dimension | This project | Not this project |
|---|---|---|
| Formality | Specific, plain-spoken, lightly editorial | Corporate-luxury, salesperson-formal |
| Confidence | Quiet — earned through proof, not adjectives | Loud — "Egypt's #1!", "AUTHENTIC GUARANTEED!" |
| Warmth | Warm but unfussy — like a knowledgeable shop staff | Cold-luxury / globally-detached, or fake-friendly |
| Wit | Sparing, local-cultural references where natural | Forced jokes, meme-bait, hype slang |
| Density | Restrained — short sentences, generous whitespace, scale-jumps | Wall-of-text product descriptions, badge soup, info-density panic |

The voice should sound like a real Cairo retailer with a point of view. Specific over generic. Warm over salesy. Calm over hype. Egyptian over globally-anonymous, but English-language and inclusive of diaspora / regional visitors.

## The signature triple

- **Signature idea:** Fitsole is the digital aisle of a real Cairo shop you can walk into; physical retail is the rebrand's trust spine, not a footer detail.
- **Signature visual:** A wide photograph of the actual Fitsole branch interior at well-controlled light (golden hour or designed fluorescent), with the H1 "The shop you can walk into." set over it at editorial scale. No models, no logo overlays, no badges. The real space, the typographic claim, one primary CTA.
- **Signature interaction:** **Branch-as-pin geography.** On every product card and PDP, a small persistent indicator shows *which Fitsole branch has it in stock today*, with branch address and a "Reserve at branch" CTA presented as co-equal to "Add to cart." On the homepage, the hero scroll reveals branch-by-branch curated picks ("Zamalek's most-asked-for this week"), making the geography readable as design device. Detailed spec lives in `docs/signature-interaction-spec.md` (to be filled by `creative-technologist-master`).

## Audience and conversion (carried from one-input-brief + research-brief)

- **Primary audience:** Egyptian sneaker- and sportswear-aware shoppers, 18–35, urban (Cairo/Alexandria/Giza), premium-mainstream spending tier. Brand-aware, mobile-heavy, organic-search and Instagram-driven arrival.
- **Primary action:** Buy product. Funnel: browse → PDP → add-to-cart → cart → checkout (`checkout.fitsole.shop`).
- **Required belief at action:** "This shop is real, my size is actually in stock, returns work, and the price is the real out-the-door price." See `docs/research-brief.md` § Required beliefs.

## Constraints (carried)

- **Timeline:** Soft. Target: shippable rebrand inside 8–10 weeks of frontend implementation once founder dependencies are met.
- **Budget signals:** **No paid tools approved.** Midjourney / Flux / Spline = Blocked. Free generators + first-party photography only. Branch shoot must be commissioned by founder (cost owned by the user, not the pack).
- **Brand restrictions:** Default keep "Fitsole" name. Existing logo PNG exists but is weak — concept allows new identity within the constraint that any new mark must coexist with carried-brand logos (Nike/Adidas/Puma) without competing visually.
- **Tech restrictions:** Existing Shopify back-end preserved by default. Stack decision pending in `docs/tech-stack-decision.md`: either Next.js front-end consuming Shopify Storefront API (headless) or Shopify Liquid theme rewrite. The "Branch-as-pin" interaction requires Shopify Multi-Locations enabled — founder confirmation needed.

## Reference anchors (from benchmark-reference-board.md)

The concept inherits techniques (never surfaces) from:

- https://www.patta.nl — geographic / community specificity as positioning
- https://cncpts.com — regional retailer claiming taste authority at Fitsole's actual scale
- https://www.aesop.com — product-as-object restraint; voice-through-copy
- https://www.pentagram.com — scale-jump typography discipline
- https://a24films.com — editorial type system + restraint

## Anti-references

What this project is explicitly NOT allowed to look like:

- Generic Egyptian Shopify multi-brand sneaker shops (brand-logo collage hero + percent-off badge soup) — see `benchmark-reference-board.md` § Anti-reference 1.
- Hype-streetwear drop-timer / FOMO theater (`benchmark-reference-board.md` § Anti-reference 2).
- Generic Shopify dropshipping theme aesthetic (trust-badge soup, fake review stars, "as seen in" rows) (`benchmark-reference-board.md` § Anti-reference 3).
- https://www.endclothing.com — the mining-test answer; rebrand must contain at least one move END. would not make (the hero-as-real-shop is that move).

## No-ship blockers (pending founder confirmation before frontend implementation)

These do not block art direction or copy work; they DO block scaffold + build:

1. **Branch photography commissioned.** Founder must commit to a real, high-quality shoot of at least one branch interior (preferably two for editorial rotation). One bad branch photo undermines the entire concept.
2. **Shopify Multi-Locations enabled** with per-branch inventory data accessible via Storefront API (if going headless) or Liquid (if theme rewrite). If not enabled, the "Reserve at branch" interaction degrades to a contact-the-branch flow.
3. **Branch addresses, hours, phone/WhatsApp** for each branch as text content for the trust-infrastructure section.
4. **Confirmation of "physical Egyptian retail" as brand position** (vs. globally-neutral aesthetic). Default: yes — but if the founder explicitly wants the latter, Concept B is the wrong concept and we re-score.

## Sign-off

- Creative director: **Verified** (this brief, this run, in-context simulation per `AGENTS.md` § "If subagent spawning is not available")
- Art director: **Not run** (next agent in sequence)
- UX/copy strategist: **Not run**
- Technical director: **Not run**

When all four are `Verified`, the brief is locked. Until then, treat the signature triple as the working spine and surface any concept-level pushback before deeper work begins.
