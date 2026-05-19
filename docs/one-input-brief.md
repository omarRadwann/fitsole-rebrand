# One-Input Brief

This is the user's single input plus the studio's first-pass interpretation, refined by Phase-2 live-site research.

## User input (verbatim)

> rebranding this https://fitsole.shop/

## Business type interpretation (RESOLVED from live-site research)

- Category: **e-commerce, multi-brand sportswear retailer** (not single-brand DTC).
- Sub-category: **footwear + apparel + accessories**, retailer carrying Nike, Adidas, Puma, NBA, Wilson, ON, plus a house "Fitsole" line. **Not** insoles, **not** orthotics, **no** health/orthopedic claims anywhere on the live site.
- Operating geography: **Egypt.** Currency Egyptian Pound (EGP). UI in English. URL parameter `region_country=EG`. Has physical retail branches ("Easy exchange at our branches" in top banner). Implied market: Cairo / Alexandria / major Egyptian cities.
- Likely audience: **B2C Egyptian sneaker/sportswear shoppers**, premium-mainstream (Nike Campus 00s at EGP 10,999 ≈ ~$220 USD; this is *not* the discount tier). Mixed Men/Women/Kids, mobile-heavy. Sophistication: brand-aware (the carried-brands roster signals an audience that knows Adidas Sambas from Adidas Spezials).

## Primary conversion goal

- [x] **buy product** (confirmed — standard e-commerce funnel: browse → PDP → cart → `checkout.fitsole.shop`).

Secondary: **add to cart / view product detail** (the meaningful micro-conversion). The "Shop the Look" feature on the homepage suggests AOV-uplift via outfit bundling is a real existing tactic.

## What success looks like in 90 days

Placeholder until the founder defines a real KPI baseline:

> **Lift in PDP → add-to-cart rate AND in cart → checkout completion rate, plus one signature screenshot (the founder-share frame from `creative-brief.md`) that earns its first organic share in Egyptian fashion/sneaker circles without paid amplification.**

Founder must confirm. Treated as `Manual review` in `ship-decision.md` until they do.

## Inputs the user has provided

- [ ] Brand assets (logo, fonts, colors) — only an existing logo (Fitsole_Brand__Logo.png) visible on the live site
- [x] Existing site URL — **https://fitsole.shop/**
- [x] Sample copy — minimal, transactional ("Buy now pay later", "Easy exchange at our branches"); mineable from the live site
- [x] Real product imagery — extensive on live site (`_FOOTWEAR_Photography_Side_Lateral_Center_View_transparent.png`, on-model apparel shots) — first-party if user owns the site
- [ ] Real proof (case studies, testimonials, metrics)
- [ ] Domain (not provided for a new identity)
- [ ] None — only the business type

## Live-site research findings (Phase 2 intake summary)

| Dimension | Finding |
|---|---|
| Platform | **Shopify** (confirmed via CDN paths, `checkout.fitsole.shop` subdomain, `/collections/*` URL pattern) |
| Catalog scope | Men / Women / Kids × Footwear / Apparel / Accessories. 40+ products visible on homepage. |
| Brands carried | Nike, Adidas, Puma, NBA, Wilson, ON, plus house "Fitsole" line. |
| Currency | EGP (Egyptian Pound). Price range observed: EGP 999 (T-shirt) → EGP 12,000+ (premium sneakers). |
| Conversion mechanics | BNPL ("Buy now pay later"), free shipping on prepaid orders, easy exchange at physical branches. |
| Existing voice/tone | **Transactional, utilitarian** — minimal storytelling, no lifestyle copy, no hype. Driven by product grids and brand logos. |
| Trust signals (existing) | None of: reviews, star ratings, testimonials, "as seen in" media, certifications. Only the BNPL + free-shipping + branch-exchange banner. |
| Existing photography | Professional transparent-PNG product flats + on-model standard/back views + detail shots. Quality is solid. |
| Anti-patterns visible | None significant — no fake reviews, no logo soup, no "AI customer" faces. Surprisingly clean existing baseline. |
| Health/medical claims | **None.** Sub-category is sportswear retail, not orthotic. |
| URL structure | Shopify-standard `/collections/{slug}` and `/products/{slug}`. Brand collections exist (e.g. `/collections/nike`, `/collections/adidas`). |

## Inputs that are missing

| Missing input | Plan for handling |
|---|---|
| Real customer reviews / testimonials | Defer to founder; if real ones exist (Google reviews, Instagram DMs, Trustpilot) we can use them with permission. Otherwise lean on quiet proof: branch addresses, founder note, return policy. |
| Founder note / brand origin story | The current site has no About copy. Phase 2 should ask founder for 2-3 paragraphs of origin story to anchor a new voice. |
| Performance baseline analytics | None. The 90-day "lift" target is directional only until baseline is known. |
| Confirmation that founder owns mined assets | Assumption #8. Required before any imagery moves into `asset-ledger.csv` as `licensed`. |
| Top-converting / SEO URLs to preserve | Founder confirmation needed (open question #2 below). |

## Constraints

- **Timeline:** soft. No hard deadline declared.
- **Budget signal:** **No paid tools approved.** Midjourney / Flux / Spline = Blocked. Free generators + the live site's own first-party photography only.
- **Brand restrictions:** No locked palette / typography / new mark provided. The current "Fitsole" wordmark exists but is weak (logo PNG only, no system around it). Rebrand allows new identity within the constraint that the **house brand sits inside a multi-brand retail container** — the visual system must elevate carried brands (Nike/Adidas/Puma) without competing with them.
- **Tech restrictions:** **Existing Shopify back-end is the assumed source of truth for catalog data.** Default rebrand path: new front-end (could be Next.js consuming Shopify Storefront API, or a Shopify theme rewrite). `master-technical-director` decides in `tech-stack-decision.md` — a re-platform is NOT in scope unless founder asks for it.
- **Existing IA / URL preservation:** **DEFAULT = preserve Shopify `/collections/*` and `/products/*` URL structure** to protect SEO. Confirm with founder before any restructure.
- **Egyptian market specifics:** EGP currency volatility means prices change often — the rebrand must NOT hardcode prices in copy/imagery. BNPL is a real conversion lever (huge in Egypt — Aman, Tabby, ValU, MisrPay all compete here); keep it prominent.

## Project mode

- [ ] New site (greenfield)
- [x] **Rebrand (existing site exists)** — full rebrand, not visual refresh only
- [ ] Visual refresh only
- [ ] Webapp / tool

Per `CLAUDE_FLOWCHART.md` § "Branch: existing repo":

1. Inspect the current site before any rewrite. ✅ Done (Phase 2 intake above).
2. Fill `docs/visual-review.md` with current-state critique BEFORE changes. Next step.
3. Improve in slices: strategy → layout → copy → assets → motion → 3D → QA.

## Open questions for the user

Only must-ask items (paid tools, credentials, exact brand assets, legal claims, destructive actions, deploy approval):

1. ~~Sub-category sanity check~~ → **RESOLVED**: multi-brand sportswear retailer (footwear + apparel + accessories), not orthotics.
2. **Rebrand scope:** Is the rebrand for the **retailer "fitsole"** (the storefront), or also the **house "Fitsole" brand line** (the in-house product line that sits alongside Nike/Adidas/Puma)? Default assumption: both, treated as one system. Confirm.
3. **Existing URL preservation:** Are there top-converting / SEO-ranking URLs that must be preserved? If yes, list them. If unknown, orchestrator defaults to preserving Shopify's `/collections/*` and `/products/*` structure.
4. **Name retention:** Default is to keep "fitsole" as the retailer brand name. Confirm — or signal openness to a rename if the concept work points that way.
5. **Asset ownership:** Confirm you own fitsole.shop and have rights for the product photography on the live site to be re-used in the rebrand. (Required before `asset-ledger.csv` labels them `licensed`.)
6. **Re-platform vs. re-skin:** Default is to keep Shopify as the back-end and re-build the front-end (theme rewrite or Storefront-API headless). Confirm — a full re-platform off Shopify is a much bigger scope discussion.
7. **Deploy approval:** The pack does not deploy. Founder deploys after handoff.

Items deliberately not asked (per `CLAUDE.md` "ask only for" rules): conversion goal, award target, anti-references, deadline, target audience — all inferred and logged in `assumptions.md`.

## Operator note

The Phase 2 site mining changed the project profile materially. The original mental model — "rebrand a footwear or orthotic DTC brand" — is wrong on both counts. The real shape is **a multi-brand Egyptian sportswear retailer, premium-mainstream tier, on Shopify, with physical branches, English UI, EGP pricing, and a transactional existing voice that has zero brand storytelling**.

This is a *harder* rebrand than a single-brand DTC. The visual system can't lean on a hero product (because the heroes are Nike's and Adidas's, not Fitsole's). The signature has to come from **the retail experience itself**: how Fitsole curates, how it talks about footwear culture, how it serves the Egyptian sneakerhead audience that's currently underserved by the major-brand global sites and by the generic local resellers. The brave decision the `creative-director` proposes must address: *what does Fitsole stand for that Nike.com or Adidas.com cannot?* Likely angles: editorial curation, local cultural specificity (Egyptian sneaker community), service depth (the branches, the exchange policy), or a strong house-brand-as-tastemaker stance.

3D is off the table (no paid Spline; Three.js / R3F only earns its place if the concept demands a specific interaction like a virtual try-on or a single hero product spin — neither feels concept-correct here). The signature visual will come from typography, editorial layout, motion choreography on the product grid, and (if the user clears asset rights) the existing professional product photography. Phase 2 continues with `market-researcher` deep-synthesis + `reference-mining` (multi-brand retail benchmarks: SSENSE, END., Concepts, BSTN, KSML in Egypt context). Then `creative-director` produces three concepts and selects one.
