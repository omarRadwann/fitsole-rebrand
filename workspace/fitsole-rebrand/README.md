# fitsole-rebrand

**The digital aisle of a real Cairo shop you can walk into.**

A rebrand of [fitsole.shop](https://fitsole.shop/) — a multi-brand premium-mainstream sportswear retailer in Egypt (Shopify back-end). Concept B "The Branch" from `../../docs/concept-scorecard.md`. The brave decision: the hero is a photograph of the actual Fitsole branch interior, not abstract product photography.

## Status

Phase 5 (frontend implementation) — **prototype**. Static front-end built against placeholder data. Production-ready integration with Shopify Storefront API + commissioned photography requires founder confirmation on the no-ship blockers below.

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev   # http://localhost:3000
```

## Scripts

| Command | Purpose | Pack gate satisfied |
|---|---|---|
| `npm run dev` | Local dev | — |
| `npm run typecheck` | `tsc --noEmit` | Gate 3 |
| `npm run lint` | `next lint` | Gate 3 |
| `npm run build` | Production build | Gate 3 |
| `npm run test` | Smoke tests | Gate 3 |
| `npm run screenshots` | Playwright capture into `./screenshots/` | Gate 4 |
| `npm run analyze:assets` | Asset-weight budget check | Gate 5 |
| `npm run design:readiness` | Combined readiness gate | Gate 5 |

## File layout

```
app/
  layout.tsx          ← fonts (Inter + JetBrains Mono), metadata, Header + Footer wiring
  page.tsx            ← homepage composition: Hero → Picked → Editorial → Brands → Sale → Branches → Founder → Newsletter
  not-found.tsx       ← concept-tied 404 ("This shelf's empty.")
  globals.css         ← OKLCH design tokens + reduced-motion + .hero-pan-target
components/
  Hero.tsx            ← signature hero with vanilla-JS slow-pan (reduced-motion-aware)
  Header.tsx          ← top nav + branch banner
  Footer.tsx          ← 4-column footer with branch list + voice line
  ProductCard.tsx     ← hover-reveal cross-fade + BranchPin
  BranchPin.tsx       ← THE SIGNATURE INTERACTION (Radix Popover)
  Price.tsx           ← Intl.NumberFormat EGP formatter
  Eyebrow.tsx         ← reusable mono eyebrow
  sections/           ← one component per homepage section
lib/
  easings.ts          ← motion tokens (locked in docs/motion-language-system.md)
  data/
    branches.ts       ← placeholder Cairo branches (founder confirms)
    products.ts       ← placeholder catalog mirroring observed SKUs from fitsole.shop
public/
  images/             ← placeholder SVGs for product cards
```

## Design system

- **Color tokens (OKLCH)** declared in `app/globals.css` and exposed to Tailwind via `tailwind.config.ts`:
  - `bg` warm off-white, `fg` near-black with warmth, `accent` Cairo terracotta, `sale` muted warm-grey-red.
- **Type system:** Inter for display (weight 600+) + body, JetBrains Mono for numeric / eyebrow / SKU labels.
- **Motion:** two locked signatures only — hero slow-pan (scroll-tied, ≤12px translate over 100vh) + product card hover-reveal cross-fade. Reduced-motion respected globally.
- **Composition:** asymmetric 12-column grid, `max-w-editorial` (74rem) container, full-bleed photo sections alternating with type-led editorial sections.

## No-ship blockers (must answer before production deploy)

These are tracked in `../../docs/creative-brief.md` § No-ship blockers and `../../docs/agent-court-report.md` § Unresolved risks:

1. **Branch photography commissioned.** The hero placeholder must be replaced with a real wide shot of a Fitsole branch interior. See `../../docs/asset-ledger.csv` § hero-branch-wide.webp.
2. **Shopify Multi-Locations enabled** with per-branch inventory accessible via Storefront API. Drops directly into `lib/data/branches.ts` + `lib/data/products.ts` (currently hard-coded placeholders).
3. **Branch addresses, hours, phone/WhatsApp** delivered by founder. Currently rendered as "— pending —" in `lib/data/branches.ts`.
4. **"Physical Egyptian retail" brand position confirmed** as the rebrand spine. If founder wants a globally-neutral aesthetic, concept must be re-scored.

Soft blockers (not pre-deploy critical but improve the site):

- Founder note (real 2–3 paragraphs) — rendered as italicized placeholder in `components/sections/FounderNote.tsx`.
- BNPL provider name + terms — currently "Provider pending founder confirmation" in `Branches.tsx`.
- Year of founding for the hero trust line — hero currently reads "authorized retailer" without the "since YEAR" anchor.
- Real customer reviews if any exist (Google Maps, Instagram tags) with permission.

## Production data integration

The placeholder data files in `lib/data/` are typed to match Shopify Storefront API responses. To wire real data:

1. Add Shopify credentials to `.env.local`:
   ```
   SHOPIFY_STORE_DOMAIN=fitsole.shop
   SHOPIFY_STOREFRONT_API_TOKEN=...
   ```
2. Replace `BRANCHES` constant in `lib/data/branches.ts` with a `fetchBranches()` call against the Shopify Locations API (Multi-Locations must be enabled).
3. Replace `PRODUCTS` constant in `lib/data/products.ts` with a `fetchProducts()` call against the Storefront API (with `inventoryByLocation` projection).
4. Wire the `BranchPin` reservation CTA to a real reserve-at-branch backend (founder confirms business logic).
5. Replace placeholder SVGs in `public/images/` with real product imagery (mined from existing fitsole.shop subject to founder ownership confirmation per `../../docs/assumptions.md` #8).

## Anti-patterns (banned for this project)

See `../../docs/art-direction.md` § Anti-pattern list. The rebrand explicitly does not ship:

- Brand-logo collage hero
- Red/yellow SALE badges
- "Trusted by" / brand-badge soup
- Bento layouts as primary structure
- Smiling-couple-in-athleisure lifestyle photography
- Infinite-white-cyclorama product photography on the homepage hero
- 3D product spinners
- AI-generated faces presented as customers
- Scroll-jacking, parallax theater, cursor-follower dots

## Forbidden in shipped code

- No `console.log` left at ship time.
- No `// TODO` — promote to `../../docs/visual-review.md` § Priority-ordered fix list.
- No animating layout-affecting properties (only transform / opacity / CSS-var-driven).
- No hardcoded API keys — `.env.local` only.

## Pack docs reference

The single source of truth for every design decision in this implementation:

- `../../docs/one-input-brief.md`
- `../../docs/research-brief.md`
- `../../docs/benchmark-reference-board.md`
- `../../docs/concept-scorecard.md`
- `../../docs/creative-brief.md`
- `../../docs/art-direction.md`
- `../../docs/copy-system.md`
- `../../docs/tech-stack-decision.md`
- `../../docs/signature-interaction-spec.md`
- `../../docs/motion-language-system.md`
- `../../docs/asset-ledger.csv`
- `../../docs/visual-review.md`
- `../../docs/agent-court-report.md`
