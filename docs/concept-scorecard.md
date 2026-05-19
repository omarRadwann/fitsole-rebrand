# Concept Scorecard

Three concepts compete. One is selected. Both the selection and the rejections are recorded.

Methodology: `references/02-concept-art-direction-master.md` (concept formula + scoring rubric), `references/65-soty-sotd-patterns-master.md` (SOTY/SOTD patterns), `references/68-client-conversion-vs-award-taste.md` (conversion vs award trade-off).

## Concept formula

> This website presents [business] as [visual metaphor / world] so that [audience] feels [emotion] and understands [core value].

---

## Concept A — Safe Premium: "The Curator"

**One-sentence concept:** This website presents *Fitsole* as *Cairo's most informed curator of premium sportswear* so that *Egyptian sneaker shoppers* feel *welcomed into a real scene* and understand *that taste, not stock count, is what makes a retailer matter*.

**Visual metaphor:** Modern Egyptian magazine — editorial typography as primary visual, restrained product photography, weekly curatorial picks, branches mentioned but not centered.

**Signature interaction:** **Pinned editorial header** — as the user scrolls past the hero, the editorial feature line of the week (e.g. "This week: the case for slip-ons in a Cairo summer") pins to the top of the page, becoming a quiet reading-mode header that follows them through the shop. The shop itself is the article.

**Signature visual:** A single full-bleed editorial photograph (a founder pick of the week, or one product on a Cairo location) with type-led headline overlaid in A24-style scale-jump composition.

**Scores (1–10):**
- Design: **7** (strong potential but category-twin risk — too close to END./Patta in tone)
- Usability: **9** (editorial discipline is friendly, low cognitive load)
- Creativity: **6** (it is the obvious move)
- Content: **8** (editorial layer adds real content depth)
- Developer craft: **7** (Next.js + GSAP + Shopify Storefront API — well within scope)
- Business usefulness: **9** (directly drives conversion through trust building)
- Feasibility: **9** (ships inside soft timeline with one frontend engineer; no founder dependencies beyond standard rebrand inputs)
- Performance risk: **9** (low — type + restrained imagery + light JS)

**Score: 8.0** · **Lowest: 6 (Creativity)**

**Strengths:**
- Lowest implementation risk; cleanest path to ship.
- Mobile-equivalent design is straightforward (editorial layout adapts well).
- No paid tools needed — Tailwind + GSAP + free type system + mined first-party photography.
- Directly closes the trust gap with editorial = "we picked this" voice.

**Weaknesses:**
- Closest to END. and Patta in technique. Risks the "END. but smaller" mimicry trap flagged in the benchmark-reference-board mining test.
- Brave decision is mild (the curator voice is itself the bravery — refusing brand-logo-collage). Not strong enough for SOTY/Honorable Mention conversation.
- Does not own Fitsole's structural advantage (physical branches in Egypt). Misses a free moat.
- Memorability lives entirely in execution craft; concept itself is forgettable.

---

## Concept B — Experimental: "The Branch"

**One-sentence concept:** This website presents *Fitsole* as *the digital aisle of a real Cairo shop you can walk into* so that *Egyptian sneaker shoppers* feel *the certainty of dealing with a real place and real people* and understand *that Fitsole's physical presence is the authentication every digital sneaker buyer in Egypt actually wants*.

**Visual metaphor:** The physical store, made digital. The site's structural backdrop is the actual Fitsole branch interior — real shelving, real signage, real cash counter — photographed honestly. Products appear in shelf context, not on infinite-white-cyclorama. The hero is a wide photograph of the actual shop, not a product.

**Signature interaction:** **Branch-as-pin geography.** When the user lands on a product, a small persistent banner above the cart action shows *which Fitsole branch has it in stock today*, with the branch address and a "Reserve at branch" CTA presented as equal in weight to "Add to cart." The shop is honest about where the shoe physically is. On the homepage, hero scroll reveals branch-by-branch curated picks ("Zamalek's most-asked-for this week"), making the geography readable as the structural design device.

**Signature visual:** Wide photograph of the actual Fitsole branch interior — real shelves, real space, real fluorescent-or-golden-hour light — with the H1 set over it at confident editorial scale: **"The shop you can walk into."** No models, no brand logos overlaid, no badge soup. Just the real space and the typographic claim.

**Scores (1–10):**
- Design: **8** (concept-tied, specific, memorable — the hero frame is unique to Fitsole)
- Usability: **8** (branch-stock CTA is a real value-add; some risk of confusing non-Egyptian browsers but the audience is Egyptian)
- Creativity: **9** (genuinely different from the category norm; not END., not Patta, not Nike.com EG)
- Content: **9** (requires real branch photography + named branch addresses + founder context — earns content commitment)
- Developer craft: **7** (requires Shopify multi-location inventory integration via Storefront API — well-supported, requires setup)
- Business usefulness: **9** (drives conversion through trust + makes branches a moat instead of a footnote)
- Feasibility: **6** (depends on founder commissioning quality branch photography in Phase 4 + confirming Shopify Multi-Locations is enabled — these are real dependencies)
- Performance risk: **7** (large branch hero photo needs careful Next.js Image optimization; reduced-motion path needs design but is solvable)

**Score: 7.875** · **Lowest: 6 (Feasibility — and this is the concept bet)**

**Strengths:**
- **Owns Fitsole's unique advantage** — physical retail presence in Egypt is something Nike.com EG, Adidas.com EG, and grey-market Instagram sellers cannot replicate.
- Brave decision is clear and ownable: the hero is the actual shop, not abstract product. END. and Patta don't do this; Fitsole would.
- Directly addresses the #1 buyer fear from research ("is this real, is the size actually in stock?").
- Builds local SEO via branch-named pages and addresses.
- Egyptian specificity is earned through real space rather than stereotypes.
- Reference board's mining test is structurally answered — this concept is the one END. would not do.

**Weaknesses:**
- Feasibility hinges on founder cooperation (branch shoot, multi-location data). If branches are not photogenic or not yet finished, the concept is undermined.
- One sub-standard branch photo can make the whole site feel small-time — quality bar must be enforced.
- Risk of parochialism if executed without taste — the discipline of the type system + restraint of the photography has to do the heavy lifting.
- International / diaspora visitors get the rebrand's *cultural* value but cannot use the branch-reserve CTA — needs graceful degradation for non-Egypt shoppers.

---

## Concept C — Moonshot: "Authorized"

**One-sentence concept:** This website presents *Fitsole* as *the receipt for every sneaker in Egypt — the retailer whose supply chain is so transparent that buying through Fitsole is the only way to know you got what you paid for* so that *every Egyptian sneaker shopper* feels *seen for caring about authenticity* and understands *that the receipt is the rebrand*.

**Visual metaphor:** The receipt / certificate / paperwork. The site is structured like a meticulously honest authorized-retailer document. Every product carries a visible provenance card (where it was distributed from, what authorization stamp it carries). The type system is built around the typographic language of customs paperwork, banking receipts, brand authorization letterheads — but elevated as design. The brand's identity is *honesty made beautiful*.

**Signature interaction:** **The provenance reveal.** Hover-on or tap on a product card and a paperwork-style provenance ticket fades in: "Imported via [authorized distributor], stamped by [brand authorization], received at [Fitsole branch] on [date]." On PDP, this is the above-the-fold experience — product, receipt, H1. The homepage hero is a single product photographed as forensic evidence on a clean surface, with its provenance card unfolded alongside.

**Signature visual:** One sneaker, photographed like archive evidence on a neutral surface, with a printed/typeset provenance receipt laid open next to it. Confident serif for the receipt body. Quiet red for stamps. The composition reads like a high-end newspaper graphic about authenticity.

**Scores (1–10):**
- Design: **9** (structurally new, memorable, ownable; an honest concept built on a real industry pain point)
- Usability: **7** (provenance theater could feel heavy if not balanced with browse-and-buy flow)
- Creativity: **10** (no one is doing this; it is a real concept innovation for the category)
- Content: **9** (forces real content — provenance, distributor names, founder accountability — that other concepts could ship without)
- Developer craft: **8** (custom provenance data layer + carefully designed UI; substantial but achievable)
- Business usefulness: **10** (if true, this is the strongest possible positioning in the Egyptian market)
- Feasibility: **5** (founder dependency on naming distributors publicly + legal sign-off + every-product coverage = high risk inside soft timeline)
- Performance risk: **7** (image-heavy by design; needs strict asset budget management)

**Score: 8.125** · **Lowest: 5 (Feasibility)**

**Strengths:**
- Directly addresses Egypt's #1 sneaker-buyer fear (counterfeit risk).
- Brave decision is enormous: the retailer's identity becomes its paperwork.
- Memorability is extreme — the "receipt sneaker" frame is genuinely viral on Egyptian sneaker Twitter/Instagram.
- Real SOTY-candidate potential.

**Weaknesses:**
- **Hard founder dependency** that may not be deliverable: naming authorized-distributor relationships publicly requires those relationships to exist, be in writing, and be share-able. If Fitsole is partly grey-market or has informal distributor relationships, the concept breaks at first contact with reality.
- Legal review needed on each "authorization" claim — brand-permission ask per Nike, Adidas, Puma, etc.
- One un-authorized SKU breaks the conceit.
- Risk of cold/forensic register; warmth must be earned through copy alone, which is hard.
- Higher implementation cost than B (data infrastructure for provenance).

---

## Selection

**Selected concept: B — "The Branch"**

**Reason (3-5 sentences):** Concept B is the strongest concept that ships under this project's actual constraints (no paid tools, soft timeline, single founder counterparty) while still earning a real brave decision. It owns Fitsole's structural advantage — physical retail presence in Egypt — that Nike.com EG, Adidas.com EG, and grey-market Instagram sellers cannot replicate; this advantage is currently buried in a single line of the banner ("Easy exchange at our branches") and the rebrand foregrounds it as the spine. The brave decision (hero = actual shop, not abstract product) is the one move END., Patta, and every category competitor reliably do not make, which directly answers the benchmark-board mining test. Feasibility is the bet: it requires the founder to commission branch photography and confirm Shopify Multi-Locations is enabled — both real but tractable asks for a real Egyptian retailer with branches that already exist.

## Rejected concepts

- **Concept A — "The Curator" (rejected):** Too close to END./Patta in technique; the brave decision (curator voice as such) is mild and the entire upside lives in execution craft. Fails the mining test — the user would be most upset to see Awwwards link to ours as "reminded me of END."
- **Concept C — "Authorized" (rejected):** Founder dependency on publicly naming authorized-distributor relationships is too risky inside a soft timeline; one un-authorized SKU breaks the conceit; legal sign-off per brand-authorization claim is a blocker the orchestrator cannot resolve. If founder later confirms full authorized status across the catalog and legal sign-off, this concept can be revisited as an evolution of B.

## Trade-offs accepted by selecting this concept

- **Feasibility risk over conversion safety.** Concept A has a higher feasibility score (9 vs 6) but a weaker brave decision; the project accepts higher execution risk in exchange for a Fitsole-specific concept that cannot be copy-pasted to a competitor.
- **Founder cooperation as a hard dependency.** Concept B requires the founder to (a) commission high-quality branch photography in Phase 4, and (b) confirm Shopify Multi-Locations is enabled. Both are reasonable asks for a real retailer with real branches — but if either is blocked, the orchestrator must come back to the user before frontend implementation begins. Logged as a no-ship blocker in `creative-brief.md`.
- **International visitor experience is a graceful degradation.** Concept B is built primarily for the Egyptian audience; diaspora and global visitors get the cultural value but cannot use the "Reserve at branch" CTA. A clean fallback ("Order for delivery") is required and not theatrical.
- **Less internationally-anonymous design.** The rebrand will look unmistakably Egyptian (in a tasteful, restrained way). A founder who wanted a globally-neutral aesthetic would need to push back here. Default assumption: cultural specificity is a feature, per the strategic positioning in `research-brief.md`.

## Reference inspirations and rejections

**Inspires this concept:**
- https://www.patta.nl — geographic / community specificity as positioning. Take the technique (place-as-identity); reject the surface aesthetic.
- https://cncpts.com — regional retailer claiming taste authority at Fitsole's actual scale. Take "Boston for Concepts → Cairo for Fitsole" lesson.
- https://www.aesop.com — product-as-object photography restraint; voice-through-copy discipline; "speed is a design decision."
- https://www.pentagram.com — scale-jump typography discipline.

**Explicitly rejected as too close:**
- https://www.endclothing.com — same-category twin; rebrand must contain at least one move END. would not make. Concept B's "hero is the actual shop" is exactly that move.

## Hand-off to art-director and ux-copy-strategist

The selected concept becomes the immutable spine. Art direction, copy, and signature-interaction spec all inherit from "The Branch" — the digital aisle of a real Cairo shop you can walk into. Changes to the concept after this point require a re-scoring round (do not proceed with re-scoring unless the founder pushes back on the brave decision or a blocker emerges in the founder dependencies).

**Next specialist:** `art-director`. Then `ux-copy-strategist` and `asset-pipeline-master` and `master-technical-director` in parallel.

**Pending founder asks before Phase 5 implementation:**
1. Branch photography: founder must commission or approve a real shoot of the Fitsole branch interior(s) — at least one branch, ideally two for editorial rotation.
2. Shopify Multi-Locations: confirm enabled with per-branch inventory data accessible via Storefront API.
3. Branch addresses, hours, contact numbers for each branch (text content for the trust-infrastructure section).
4. Confirmation that the rebrand can lean into "physical Egyptian retail" as the brand position (vs. globally-neutral aesthetic).
