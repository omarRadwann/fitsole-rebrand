# Art Direction

The visual world that belongs to Fitsole and no other multi-brand sportswear retailer. Inherits the locked concept from [creative-brief.md](creative-brief.md) — Concept B "The Branch": the digital aisle of a real Cairo shop you can walk into.

Methodology: `references/02-concept-art-direction-master.md`, `references/13-awwwards-quality-taste-rubric.md`, `references/16-visual-composition-cheats.md`, `references/44-super-strong-design-playbook.md`.

## Mood

Three concept-phrases, no buzzwords:

1. **shop-floor present** — the rebrand feels like standing in the actual store, not in an abstract retail space
2. **warm-fluorescent calm** — the lighting of a well-built Cairo retail interior at end-of-day; not luxury-cold, not boutique-twee
3. **shelf-shadow honest** — products sit in shelf context with real shadows; nothing is photographed against infinite-white cyclorama

## World / metaphor

The site lives inside **the actual Fitsole branch** — a real Egyptian retail interior. Walls, shelves, fluorescent and warm tungsten light, glass counter, fitting bench, paper price tags, brushed aluminum trim. Not "premium minimal store" abstracted; the specific space, photographed honestly.

## Material language

What the site is made of, visually:

- **Slatwall / MDF / brushed aluminum** — the actual materials of mid-good retail fixtures.
- **Fluorescent tube light + warm sodium-tone evening light** bleeding through window glass.
- **Paper price tags** — real type, real edges, hung from real pegs.
- **Glass counter reflections** — used sparingly for hero detail shots.

Materials explicitly banned: marble, velvet, brass-as-luxury-signal, 3D cyclorama renders, "premium gradient" backgrounds, glassmorphism.

## Typography

| Role | Family | Weight / variants | Why |
|---|---|---|---|
| Display | **Geist** (variable, OFL 1.1, https://github.com/vercel/geist-font) | 400 → 800 | Free for commercial use, variable axis for editorial scale-jumps, slightly modern but not trendy. Pairs cleanly with Inter. |
| Body | **Inter** (variable, OFL 1.1) | 400, 500, 600 | Workhorse, excellent multilingual support including Arabic (useful for occasional bilingual moments — e.g. branch names, social handles). |
| Mono / numeric | **JetBrains Mono** (variable, OFL 1.1) | 400, 600 | Price displays, SKU codes, branch hours. Mono = "factual" register; reads as honest. |

**Type scale (clamp):**

```css
--type-h1: clamp(2.75rem, 7.5vw, 6rem);        /* editorial scale, big jump */
--type-h2: clamp(1.875rem, 4vw, 3.5rem);
--type-h3: clamp(1.375rem, 2.5vw, 2rem);
--type-body-lg: 1.125rem;
--type-body: 1rem;
--type-small: 0.875rem;
--type-eyebrow: 0.75rem;                       /* uppercase, tracked, mono */
```

**Rhythm rules:**

- Display: tracking −0.02em, line-height 0.95 (display sits tight, almost touching baseline-to-cap)
- Body: tracking 0, line-height 1.65 (generous — this is editorial, not feature-density)
- Max body line: 60ch (forces narrow column composition vs. wall-of-text)
- Eyebrow: uppercase, tracking 0.12em, JetBrains Mono (the "fact label" register)

**Licensing status:** All three families OFL 1.1 (free, commercial-allowed). No paid font purchases needed. License files included in `public/fonts/LICENSE.txt`.

## Color

OKLCH tokens. Egyptian retail interior at end-of-day, with one warm accent tied to Cairo terracotta brick.

| Token | OKLCH | Hex (fallback) | Role |
|---|---|---|---|
| `--bg` | `oklch(97% 0.008 80)` | `#F8F4EE` | Warm off-white. Walls of the shop. Default page background. |
| `--bg-elevated` | `oklch(100% 0 0)` | `#FFFFFF` | Card / modal surface. Only when separation is structurally needed. |
| `--fg` | `oklch(15% 0.008 80)` | `#16110B` | Near-black with slight warmth. All body text. |
| `--fg-muted` | `oklch(45% 0.01 80)` | `#6F6557` | Eyebrows, secondary text, branch addresses. |
| `--rule` | `oklch(85% 0.01 80)` | `#D9D0C2` | Hairline rules. Used sparingly. |
| `--accent` | `oklch(54% 0.13 35)` | `#B25030` | **Cairo terracotta.** The single warm accent. Used ONLY for: the primary CTA (Add to cart / Reserve at branch), the H1's last word OR a single editorial type moment per page (never both on the same page). |
| `--sale` | `oklch(45% 0.06 25)` | `#7A4035` | Muted, warm-grey-red. Used ONLY for strikethrough on sale prices. NEVER for SALE badges. |

**Color rules:**

- **Accent has at most one job per page.** Either the primary CTA, or one type moment. Pages that try both lose meaning.
- **No red/yellow SALE badges.** Sale prices use the strikethrough + the muted `--sale` token on the old price, with the current price in `--fg`. Honest, restrained.
- **No gradients** as primary design device. Gradients are not the personality.
- **Photographs carry color contribution.** The branch photos are the color story — the design tokens are the quiet ground that lets the photos sing.

## Composition

**Grid:** 12-column base, 24px gutter desktop / 16px gutter tablet / 16px gutter mobile (with stronger edge padding). Used asymmetrically — most content occupies 8 of 12 with a 4-column "editorial rail" carrying branch context, founder pulls, or "in stock at" indicators.

**Hero composition principle:** Single full-bleed photograph of the actual Fitsole branch interior. Type sits in the bottom-left third — H1 in display weight 600 at full clamp size, sub in body-lg, primary CTA below. **No center-aligned hero anything.** No badge overlays. No floating brand logos.

**Mobile hero composition (a separate design, not a desktop stack):**

- Image: vertical-cropped branch interior (different crop than desktop — taller, focused on a single shelf bay rather than the wide-shot). 60vh image height.
- Type: H1 sits BELOW the image, not over it (less contrast risk on mobile, more readable). Sub below H1, single CTA below sub.
- Edge padding: 20px. The type column is full-width.
- H1 mobile scale: `clamp(2.5rem, 10vw, 3.5rem)` — the type is the visual on mobile, even more than on desktop.

**Section-to-section contrast strategy:** Alternates full-bleed photograph sections with type-led editorial sections. Not the same rhythm as the existing site (which is full-width grid → full-width grid). The rhythm is: shop (photo) → voice (type) → shop → voice. Each transition is a beat the user feels.

**Bento usage rule:** **Banned as a primary move.** Bento is the 2024 category-average composition; the rebrand explicitly avoids it. If a bento-like grid appears, it must be earned by content (e.g. "this week's editorial picks" can use a 3-row asymmetric grid, but it is not the default homepage structure).

## Imagery language

**Real photography only.** First-party only. Two source streams:

1. **Mined from existing fitsole.shop** — the professional product flats (transparent-PNG side/lateral/detail views), the on-model standard/back views. To be migrated subject to founder ownership confirmation (`assumptions.md` #8).
2. **Commissioned branch photography** — wide branch interior + 3-4 detail shots per branch (shelving, glass counter, fitting bench, signage). Founder must commission; the hero and section anchors depend on this. **No-ship blocker until shot.**

**Banned imagery sources:**
- Stock photography of any kind (no Unsplash, no Pexels, no Getty).
- AI-generated images of people, places, or products (no Midjourney, no Flux, no SDXL).
- 3D renders of products.
- Royalty-free "athlete in slow-motion" video footage.

**Imagery rules:**
- Products always appear in **shelf context** for the homepage hero+branch sections. Transparent-PNG flats are reserved for product cards and PDP detail views.
- **No models on the homepage hero** — concept rule. Models can appear in editorial sections where consent is documented.
- **Branch staff hands** are allowed in detail shots (showing a product on a hand, tagging a SKU). Identifying staff faces require release; on-brand for editorial sections only.
- All photography goes through `asset-ledger.csv` with explicit rights confirmation.

## Motion language

Personality summary: **Editorial / restrained.** Not luxury, not technical, not cinematic, not playful.

Detailed spec lives in [motion-language-system.md](motion-language-system.md) (to be filled by `gsap-animation-master`). High-level rules locked here:

- **No scroll-jacking.** Native scroll. Period.
- **No parallax theater** as primary effect.
- **Two signature motions only:**
  1. **Hero slow-pan.** The branch hero photograph subtly pans laterally (≤12px translate) over 8s of scroll, simulating a slow walk into the shop. Reduced-motion: static.
  2. **Product card hover-reveal.** Card cross-fades between primary product flat and secondary in-context shelf shot on hover (200ms, ease-in-out). Reduced-motion: no transition.
- Page transitions: instant. No fade-in shrouds, no overlay washes.
- Easing: prefer custom cubic-bezier authored for this project, not GSAP's defaults. Avoid bouncy spring physics — they read as toy-like and clash with the editorial register.

## Iconography

**Type-based + sparse line icons.**

- Currency, SKU codes, sizes, hours: **JetBrains Mono** in `--fg-muted`. Type is the icon.
- Functional icons (cart, search, account, menu, branch pin): **single-weight line, 1.5px stroke, 24px nominal**. Minimal, no fills. Inspired by good wayfinding signage.
- **No emoji.** No filled icons. No bento icons. No 3D-rendered icon sets.
- The branch-pin icon is the only custom icon — drawn for this project, used wherever branch geography appears.

## Sound

None. The rebrand is a quiet site.

## Anti-pattern list (banned in this project)

Hard rejections enforced in `docs/design-red-team-rubric.md`:

1. **Brand-logo collage hero.** No "Nike × Adidas × Puma" composite.
2. **Red/yellow SALE badges.** Discounts use type and the muted `--sale` token only.
3. **"Trusted by" / brand-badge soup rows.**
4. **Bento layouts as primary structure.**
5. **Smiling-couple-in-athleisure lifestyle photography.**
6. **Infinite-white-cyclorama product photography on the homepage hero.**
7. **Centered hero with 3 feature cards under it.**
8. **3D product spinners.**
9. **AI-generated faces presented as customers.**
10. **Background gradient as the entire personality.**
11. **Scroll-jacking, scroll-snap as primary navigation, cursor-follower dots.**
12. **Stock "athlete in slow-motion" video.**
13. **The "plastic 3D pin on cartoon globe" hero illustration.** *Added 2026-05-20 after Abraham John (@Abmankendrick, May 19 2026) ran a viral thread titled "Stop using boring 3D sites" — the cover image is exactly this cliché. The shape says "tech startup that pays for stock 3D," not "a real shop you can walk into." Cairo Evening fragment shader (`components/three/CairoEvening.tsx`) is the explicit anti-cliché answer: bespoke atmospheric shader, not stock library 3D.*

## Reference anchors (from `benchmark-reference-board.md`)

The 5 references most influential for this art direction:

- https://cncpts.com — regional retailer claiming taste authority at Fitsole's scale.
- https://www.patta.nl — place-as-identity positioning technique.
- https://www.aesop.com — product-as-object restraint and voice-through-copy discipline.
- https://a24films.com — scale-jump typography discipline.
- https://www.pentagram.com — type as the primary design device.

Explicitly rejected as too close (mining test):
- https://www.endclothing.com — the brave decision (hero = actual shop) is the one move END. would not make.

## "Only this business" test

Could this art-direction apply unchanged to a competitor?

**No.** The visual system is anchored to (a) the actual physical Fitsole branch interior in Egypt — swapping the logo to "KSPORT" or another Egyptian sneaker shop would require re-photographing their space, and (b) Cairo terracotta as the single warm accent. A different category (e.g. a coffee chain or a boutique) might use similar typography or composition discipline, but the structural anchor — the branch — is Fitsole-specific.

## Decisions still pending

- **Branch photography:** No-ship blocker. Founder must commission a real branch shoot before Phase 5 implementation. Wide interior + 3–4 detail shots per branch minimum.
- **Number of branches to feature:** Drives editorial rotation. Founder confirmation on branch count + which to feature.
- **House "Fitsole" line visual handling:** Currently treated within the same system as carried brands. If the founder wants the house line to feel like a distinct sub-brand within the retailer container, art direction extends with a sub-system mark for it. (Decision: hold until founder confirms scope per `one-input-brief.md` open question #2.)
- **Optional bilingual / Arabic typographic moments:** Inter supports Arabic; the rebrand could embed selective Arabic text for cultural specificity (e.g. branch names, "Cairo" in display script, footer). Defaults to English-only unless founder wants this — flag for Phase 4 ux-copy-strategist consideration.
