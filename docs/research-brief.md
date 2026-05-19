# Research Brief

Status: **Complete (Phase 2)** — open questions captured at the end for Phase-3 escalation.

Field methodology per `references/01-business-research-master.md`; benchmark mining per `references/61-current-awwwards-benchmark-mining.md` (captured separately in [benchmark-reference-board.md](benchmark-reference-board.md)).

## Business interpretation

Fitsole (https://fitsole.shop/) is a **multi-brand premium-mainstream sportswear retailer in Egypt** operating on Shopify. It carries Nike, Adidas, Puma, NBA, Wilson, ON, plus an in-house "Fitsole" apparel line. Storefront is English-language; pricing in EGP (range ≈ EGP 999 basics → EGP 12,000+ premium sneakers). Conversion mechanics include BNPL, free shipping on prepaid, and physical retail branches for exchange. The existing site has clean technical execution but **no brand voice, no editorial content, and no trust infrastructure** (no reviews/testimonials/certifications). This is the gap the rebrand exists to close.

## Primary audience

**Egyptian sneaker- and sportswear-aware shoppers, 18–35, urban (Cairo/Alexandria/Giza), premium-mainstream spending tier.** They know the difference between Adidas Samba OG and Samba Classic; they price-compare against grey-market Instagram sellers; they read Hypebeast and follow `@fashion.cairo` and `@sneakers.eg` types of accounts. Channel of arrival: organic search ("nike egypt", "adidas samba cairo"), Instagram (organic + paid), word-of-mouth from physical branch visits.

Sub-segments:
- **Sneakerheads** — chase specific colorways/releases, will pay premium for what they want, are the loudest voice on social.
- **Sport/fitness adults** — buy for running/training/court; conversion is more utilitarian, less drop-driven.
- **Parents buying for kids** — large segment (the Kids nav category is fleshed out: footwear, apparel, accessories).
- **Apparel-led buyers** — basics + house "Fitsole" tees/shorts; lower AOV, higher repeat.

## Secondary audience

- **Egyptian diaspora / regional MENA visitors** browsing for what's available locally vs. ordering from abroad.
- **Casual gift-shoppers** during seasonal moments (Eid, Back-to-School, January sale).
- **Press / influencers** considering whether Fitsole is worth featuring as a destination.

## Buyer fears (in user-style language)

- "Will my size actually be in stock, or will I be told 'sold out' after I pay?"
- "Is this authentic? Egyptian e-comm sneaker market has a counterfeit problem — how do I know Fitsole's stock is real?"
- "If it doesn't fit, can I actually return it without a fight?"
- "Is the website price the real price, or are there hidden fees at checkout?"
- "I've never heard of 'fitsole' as a brand — is this a real shop with a real address, or a dropshipper?"
- "BNPL — am I going to get hit with hidden interest if I split this into installments?"
- "If the courier doesn't deliver, who do I talk to? Is there a phone number / WhatsApp / human?"

## Required beliefs before conversion

To go from "interested" to "checkout":
- Fitsole stocks **authentic** product, not grey-market or fake.
- Returns and exchanges are **frictionless** at the physical branches.
- The pricing on the website is the **real out-the-door price**.
- There's a **real human** I can reach if something goes wrong.
- The size I want is **actually available** (not "we'll let you know later").
- Fitsole has **taste** — they didn't just import any random brand list; they curated this.
- The BNPL terms are **honest** — no hidden interest, no surprise hits.

To go from "first-time buyer" to "loyalty/repeat":
- The packaging / unboxing made the purchase feel like a real moment.
- Customer service responded fast and like a human.
- Subsequent drops are interesting enough that I want to know what they get next.

## Competitor patterns

The Egyptian sportswear retail landscape splits into four archetypes. Fitsole occupies the **premium multi-brand retailer** lane; the rebrand should position decisively within it.

### A. Local Egyptian multi-brand Shopify shops (direct competitors)

Examples in this archetype: KSPORT (kbrandsfp.com / similar), several local Cairo Shopify sneaker stores.

- **Visual cliché:** Hero is a brand-logo collage (Nike + Adidas + Puma on a single banner). Product grid uses every available pixel. Heavy use of percent-off badges in red/yellow.
- **Copy cliché:** "Egypt's #1 sneaker store!" / "Authentic guaranteed!" / "Same-day shipping!" — overpromising without anchoring proof.
- **Trust signals:** WhatsApp number on every page (good move), but no reviews, no editorial content, no founder story.
- **Gap they leave:** No taste-maker positioning. They look like distribution channels, not curators. Brand storytelling = zero.

### B. Egyptian premium retail (adjacent, not direct)

Examples: Concrete (street/apparel concept stores in Cairo), boutique fashion shops in Zamalek/New Cairo.

- **Visual:** More restrained than archetype A. Often editorial photography, slower pacing.
- **Copy:** More tasteful but often genericized — "elevated essentials" type filler.
- **Gap they leave:** Don't carry the premium sportswear brands Fitsole carries — there's no local competitor combining premium sportswear + editorial retail taste.

### C. Global multi-brand sportswear retailers (aspirational benchmarks, not direct competitors)

Examples: END. Clothing (UK), SSENSE (CA), Concepts (US Boston), Foot Patrol (UK), BSTN (DE), Notre (US Chicago), Patta (NL), KITH (US).

- **Visual:** Editorial-led. Strong type system. Restrained product display. Magazine / "Inside" / "Features" sections that elevate the retailer above pure distribution.
- **Copy:** Authoritative voice, often regional-specific (Foot Patrol = London, Patta = Amsterdam streetwear culture, Concepts = Boston).
- **Trust signals:** Real editorial content, real founders, real heritage proof. Customer reviews where they exist. Press features as proof.
- **What Fitsole can learn:** *Don't* try to be END. or KITH — they have decades and millions in editorial budget. *Do* steal the **technique** of treating the retailer as a curator with a voice, not a shelf with stock.

### D. Brand direct sites (Nike.com, Adidas.com, Puma.com — competing for the same customer's wallet)

- **Visual:** Heavy product theater, big hero campaigns, complex motion. Resource-rich.
- **Copy:** Brand-mandated, often hype-driven ("step into greatness", "made to play").
- **Gap they leave:** **Lack local Egyptian specificity.** Nike.com EG is functional but generic; it doesn't speak to Cairo sneaker culture, it doesn't have physical branches with real humans, and it doesn't curate across brands. **This is Fitsole's structural opening.**

## Clichés to avoid (the anti-pattern list)

Hard rejections, locked at concept-time, enforced in `docs/design-red-team-rubric.md`:

1. **Brand-logo collage hero.** "[Nike logo] × [Adidas logo] × [Puma logo]" as a centerpiece. The carried brands are not the identity — Fitsole is.
2. **Percent-off badge soup.** Yellow/red SALE explosion. Mark discounts honestly but quietly.
3. **"Egypt's #1 [anything]" copy.** Unverifiable, dilutes trust.
4. **"Authentic guaranteed!" stamp.** Saying you're authentic implies competitors aren't — and if you have to say it, you're losing the argument. Build authenticity through editorial proof (where the stock came from, named brand-partner relationships, founder accountability).
5. **AI-generated faces presented as customers.** Forbidden by `SOURCE_OF_TRUTH.md`.
6. **Stock photo of generic athlete mid-action shot.** Used universally; signifies nothing.
7. **Mega-menu mega-soup.** The current site already does this well; don't regress.
8. **Hype-streetwear FOMO mechanics done badly** — fake "X people viewing this product", countdown timers on non-drop items, manufactured scarcity.
9. **Hero video of running shoes in slow-motion on rocky terrain.** Total cliché; signifies sportswear without saying anything specific.
10. **Smiling-couple-in-athleisure lifestyle hero.** The category's #1 cliché.
11. **"Trusted by"** logo soup of brand badges.
12. **Founder/team photos that look generated.** A real founder note > a generated face.

## Trust signals needed

The current site is empty on trust. The rebrand must introduce, in order of impact:

1. **Branch addresses and physical proof.** Photos of actual branches (interior, exterior), addresses with map, opening hours, real phone number / WhatsApp. This is the strongest authenticity proof an Egyptian retailer can ship.
2. **Founder note.** 2–3 paragraphs from the actual founder explaining why Fitsole exists and what its taste is. Named, attributable, not corporate-speak.
3. **Process transparency.** "Where our stock comes from" — name the authorized distributor relationships if disclosable. If not, name the principle (authorized retailer status, what that means, what verification looks like).
4. **Honest return policy.** Specific, in plain language, on its own page. "30 days, full refund if unworn, exchange at branches within 60 days." Not the lawyer-speak.
5. **Real customer reviews** — if they exist (Google reviews, Instagram tags, etc.), import with permission. Do NOT manufacture reviews.
6. **BNPL terms exposed clearly** — no interest math hidden. Spell out exactly what installment X costs.

## Site type

E-commerce — multi-brand retailer, Shopify back-end (preserved), Next.js front-end (proposed in `tech-stack-decision.md`) OR Shopify theme rewrite (alternative). Includes editorial content layer (Magazine / "Inside Fitsole" / similar) that the current site lacks entirely.

## Primary conversion (carried from one-input-brief)

**Buy product** (`/cart` → `checkout.fitsole.shop`).

Funnel events to design for:
1. PDP view → add-to-cart (signature interaction lives near here)
2. Add-to-cart → cart-view (cart should feel designed, not bolted on per `references/65-soty-sotd-patterns-master.md` § E-commerce)
3. Cart-view → checkout init
4. Checkout init → completion (Shopify-hosted; we don't redesign checkout itself but we ensure pre-checkout removes friction)

## Recommended sections (homepage)

Working hypothesis, to be locked by `creative-director` after concept selection:

1. **Hero / signature first frame.** Either editorial product-as-object OR cultural moment (depending on concept). NOT brand-logo collage.
2. **What's new this week.** Curated, not "all new arrivals". 3–6 picks max, with editorial language.
3. **Editorial feature.** "Inside Fitsole" / "This week" — one piece of content (founder pick, behind-a-drop, branch visit, customer feature with real consent).
4. **Shop the brands.** Curated brand index — not a logo grid; a typographic/editorial treatment that says "here's how we organize our taste."
5. **Sale / current drops.** Honest, restrained, no badge soup.
6. **Branches & how it works.** Map + addresses + return policy + BNPL terms + WhatsApp. The trust-infrastructure cluster.
7. **Footer.** Real, full — about, terms, privacy, returns, contact, newsletter (with real hook), social.

## SEO / semantic topics

Carried Shopify URL structure preserves the bulk of existing SEO equity. Topics to consider in copy and metadata:

- "[Brand] [model] Egypt" (e.g. "Nike Campus 00s Egypt", "Adidas Samba Cairo") — long-tail traffic that's currently underserved.
- "Authentic sneakers Egypt", "sneaker store Cairo", "sneaker store Alexandria", "sneaker store Giza" — local intent.
- "BNPL sneakers Egypt", "buy now pay later sneakers" — payment-mechanic intent.
- Editorial content topics: drop calendars, brand histories, sizing guides (especially for kids).

Phase-3 SEO deep dive needs founder confirmation on existing ranking URLs and Google Search Console access.

## Sources

| Source | URL | What we learned |
|---|---|---|
| Live fitsole.shop homepage | https://fitsole.shop/ | Sub-category, geography, platform (Shopify), catalog scope, brand roster, EGP pricing, existing voice (transactional), trust gap. WebFetch on 2026-05-19. |
| WebFetch on END. Clothing (target reference) | https://www.endclothing.com | **BLOCKED — HTTP 416 (bot protection).** Knowledge of this site used from training; flag for `Manual review` if specific claims need verification. |
| WebFetch on Aesop (target reference) | https://www.aesop.com | **BLOCKED — HTTP 403 (Cloudflare).** Same caveat. |
| Pack reference: 61-current-awwwards-benchmark-mining.md | (local) | Mining methodology + capture format. |
| Pack reference: 65-soty-sotd-patterns-master.md | (local) | SOTY shared traits, e-commerce-specific patterns, brave-decision examples. |
| Pack reference: 14-ai-anti-genericity-protocol.md | (local) | Anti-pattern list (to be cross-referenced before concept selection). |

## Assumptions made during research

See [assumptions.md](assumptions.md). Phase-2 additions: assumptions #19 (multi-brand container challenge), #20 (Egyptian market context), #21 (physical branches as proof), #22 (existing photography quality), #23 (empty trust infrastructure), #24 (clean anti-pattern audit of current site).

## Open research questions

For the founder / next user interaction:

1. **Branch count & locations.** Where are the physical Fitsole branches? How many? This drives how much weight quiet-proof storytelling puts on retail presence.
2. **Founder identity & origin story.** Who started Fitsole, when, why? Without this, the editorial voice has no anchor.
3. **Existing customer reviews or social proof.** Google Maps reviews, Instagram tag photos, anything organic? Permission to use.
4. **Distributor relationships.** Authorized retailer status for Nike/Adidas/Puma — confirmable in writing? This is THE authenticity trust signal in Egyptian sneaker retail.
5. **Best-selling SKUs and underperformers.** Which products carry the brand right now? Which products are pulled? Informs hero selection and editorial picks.
6. **Existing analytics / baseline conversion data.** Anything from Shopify analytics or Google Analytics? Without it, the 90-day KPI is directional only.
7. **Top-converting / SEO-ranking URLs.** From Search Console — must be preserved.
8. **Existing customer mix.** Men/Women/Kids split on actual revenue (not just nav structure). Drives hero imagery.
9. **BNPL provider(s).** Which Egyptian BNPL is wired in (Aman, ValU, etc.)? Drives how BNPL is presented.
10. **House "Fitsole" brand line ambition.** Is the house line meant to grow into a hero product line, or stay as adjacent basics? Big strategic question.

For Phase-3 specialist asks (not founder-blocking):

- `market-researcher` deep-dive on 3 specific local competitors with screenshots if accessible.
- `reference-mining` should ideally include 1 MENA retailer reference that demonstrates regional design discipline — current best candidate to investigate is Saudi/UAE multi-brand retailers like Level Shoes (Dubai) or SUNS, but neither is a perfect fit.
- Performance baseline of fitsole.shop (LCP/INP) — to set "we're already at X, the rebrand needs to land at Y" in the QA report.
