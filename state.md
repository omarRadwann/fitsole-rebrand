# fitsole-rebrand — Project State

**Last updated:** 2026-05-20 (Full Lift Pass complete)
**Local working dir:** `C:\Users\acer\Desktop\fitsole-rebrand\`
**GitHub repo:** https://github.com/omarRadwann/fitsole-rebrand (renamed from `omarRadwann/halo` on 2026-05-20)
**Target site (live, pre-rebrand):** https://fitsole.shop/
**Branches:**
- `main` — Full Lift state (this).
- `halo-shipped` — preserved Halo + Caliper agency portfolio snapshot from 2026-05-19 (the prior project that lived in `test1/`). Tagged `halo-final-2026-05-19`.

## What this project is

Rebrand of `https://fitsole.shop/` — a Cairo-based multi-brand sportswear retailer (Nike / Adidas / Puma / NBA / Wilson / ON + house Fitsole line, Shopify back-end) — using the **Moon-Level Claude Code Awwwards OS V6** pack.

**Concept:** B — "The Branch" (the digital aisle of a real Cairo shop you can walk into).
**Brave decision:** Hero is the actual shop interior, not abstract product.
**Concept tagline:** "Fitsole. A real shop with a website. Cairo, Egypt."

## Current visual / rubric state

**Phase 5 baseline (2026-05-19):** rubric avg **6.7** / lowest **4.0 (Motion)**. Demo-ready, not Awwwards-grade.
**Full Lift Pass (2026-05-20):** rubric avg **7.4** / lowest **6.5 (Performance Feel, unmeasured)**.

Lift was real: motion 4.0 → effectively 7.5, brand identity 3.0 → 6.5, +1 signature moment (Cairo Evening WebGL shader), +sound design, +4 editorial drafts. SOTD threshold (avg ≥ 8.5, lowest ≥ 7.5) is unchanged — still requires $25K–60K in commissioned photography + commercial typeface + brand studio + senior motion designer per `docs/handover-and-gap-analysis.md` § 6.

## Repo layout

```
C:\Users\acer\Desktop\fitsole-rebrand\
├── SOURCE_OF_TRUTH.md, CLAUDE.md, AGENTS.md, CLAUDE_FLOWCHART.md,
│   VALIDATION_PROTOCOL.md, 00_CLAUDE_RUN_FIRST.md, Makefile, README.md,
│   START_HERE.md                              ← V6 pack anchors
├── .claude/                                   ← 22 specialist agents, award-website-os skill (68 refs), 3 hooks, 5 slash commands
├── docs/                                      ← 40 evidence docs (handover-and-gap-analysis.md updated with § 13 Full Lift)
├── ops/                                       ← validate_pack.py, scaffold_evidence.py, project_ship_check.py, create_project.py
├── starter-next-awwwards/                     ← source template (untouched)
├── workspace/
│   └── fitsole-rebrand/                       ← THE Next.js 15 site (Full Lift applied)
│       ├── app/                               ← App Router (page, layout, 404, /journal index + /journal/[slug], /products/[slug], app/icon.svg)
│       ├── components/
│       │   ├── brand/                         ← Wordmark, Monogram, BranchMark (custom SVG identity, NEW Full Lift)
│       │   ├── motion/                        ← CustomCursor, SplitText, MagneticCTA, ScrollCue, Reveal, PageTransition, Marquee (NEW Full Lift)
│       │   ├── three/                         ← HeroShader, HeroShaderClient, CairoEvening (R3F dynamic-import, NEW Full Lift)
│       │   ├── ui/Icon.tsx                    ← custom 1.5px icon set replacing Lucide (NEW Full Lift)
│       │   ├── sections/                      ← PickedThisWeek, ShopTheLook, EditorialFeature, BrandsIndex, Sale, Branches, FounderNote, Newsletter
│       │   ├── Header, Footer, Hero, ProductCard, BranchPin, CartDrawer, Price, Eyebrow, SoundToggle
│       ├── lib/
│       │   ├── audio/                         ← SoundManager + useSfx (NEW Full Lift)
│       │   ├── data/                          ← branches, products, articles (NEW Full Lift)
│       │   └── motion/                        ← (reserved; gsap available via package)
│       ├── shaders/cairoEvening.frag.ts       ← GLSL fragment (NEW Full Lift)
│       ├── public/brand/                      ← wordmark.svg, monogram-fs.svg, branch-mark.svg, pattern-grid.svg, pattern-cairo.svg (NEW Full Lift)
│       ├── public/images/branch/              ← 7 WebP renders (hero-v1/v3/v4, detail-bench/counter/empty-shelf/shelf-samba)
│       ├── scripts/                           ← screenshots.mjs, analyze-assets.mjs, design-readiness.mjs
│       ├── screenshots/                       ← 21 fresh captures from Full Lift QA pass
│       └── tests/smoke.test.mjs               ← 24 tests (was 12; expanded for motion + brand + WebGL + audio + editorial contracts)
└── .archive/
    ├── halo-2026-05/                          ← test1's Halo + Caliper agency portfolio + V3-V7 audit trail (preserved)
    └── source-images-2026-05/                 ← 39 MB unused Higgsfield source PNGs (only WebPs ship)
```

## Stack

- **Framework:** Next.js 15 + App Router + TypeScript strict
- **Styling:** Tailwind CSS 3.4 + OKLCH design tokens
- **A11y primitives:** Radix Popover (BranchPin) + Radix Dialog (CartDrawer)
- **Motion:** gsap (dep available; primary impl is RAF + CSS), framer-motion (Radix slide animations)
- **3D:** three@0.170 + @react-three/fiber@8.17 + @react-three/drei@9.114 (dynamic-imported, ~2 KB First-Load cost)
- **Audio:** Web Audio API singleton (pure-synth, 0 KB of media)
- **Testing:** node:test (24 smoke tests) + Playwright (screenshot capture)

## Gates (all passing post-Full-Lift)

| Gate | Command | Status |
|---|---|---|
| Pack health | `python ops/validate_pack.py --strict` | PASS |
| Project ship gate | `python ops/project_ship_check.py` | PASS |
| TypeScript | `npm run typecheck` | 0 errors |
| ESLint | `npm run lint` | 0 warnings |
| Smoke tests | `npm run test` | 24/24 pass |
| Production build | `npm run build` | PASS, 22 routes, 139 KB First-Load JS |
| Asset budgets | `npm run analyze:assets` | all green |
| Screenshot capture | `npm run screenshots` | 21/21 captured |

## Recent commits (most recent first)

```
7db038b  Phase 3.6: content depth — 4 editorial drafts + /journal route
474394b  Phase 3.4: Web Audio sound design (default muted, gesture-gated)
(WebGL) Phase 3.3: WebGL signature moment — Cairo Evening shader
(brand) Phase 3.2: brand identity uplift
(motion) Phase 3.1: motion language deepening
a6489da  Consolidate test1 + moon-v6 -> fitsole-rebrand
0116647  (on halo-shipped) Preserve test1 working state before consolidation
36c8ee9  caliper: stage 6 + 7 — live QA passed, ship decision PASS WITH LIMITATIONS
```

## Likely next moves (priority order)

The Full Lift carried the prototype as far as AI alone can responsibly take it. The next 1.1 average points to clear SOTD threshold require real-world commissions:

1. **Run Lighthouse from Cairo + axe pass + mid-tier Android device test** (~$300–800 outsourced, or free with Chrome DevTools + founder time). Highest single-fix leverage — restores Performance Feel from 6.5 to 7.0+.
2. **Commission a real Cairo branch photographer** (2 days on-site, 3 branches, ~$1,500–3,500). Replaces 4 AI hero variants + 4 detail shots. Closes Imagery 6.0 → 8.0+.
3. **Founder rewrites the 4 editorial drafts** in their voice (~4 hours founder time). Lifts the DRAFT banner from `/journal/*`. Closes Content Specificity 7.5 → 8.5+.
4. **License a distinctive display typeface** (Söhne / GT America / Aeonik web license, $200–400/yr). Lifts Typography + Visual Ownership + Memory together.
5. **Engage a senior motion designer + brand studio** ($9,000–27,000). The 4 → 7.5 motion jump used the AI's ceiling; the next 0.5 needs hand-crafted easings + page transitions.
6. **Awwwards submission package** (~$1,500–3,000).

**Total founder commission to reach realistic SOTD candidacy: $25,000–60,000 + 3–6 months elapsed.** Same as the original handover § 6 — unchanged by the Full Lift.

## Known not-yet-done

- Shopify theme integration (the rebrand is a Next.js prototype; the real fitsole.shop runs on Shopify with PageFly + ~10 app extensions — the production migration is a separate engagement after concept approval).
- Real Multi-Locations inventory API wiring for the BranchPin (currently uses static data in `lib/data/branches.ts`).
- Real customer reviews (no fabrication; explicit per pack discipline).
- /editorial → /journal redirect (some old internal references may still point at /editorial; the route doesn't exist).
- Real bank-mortgage + BNPL provider names with current rates (currently uses generic "Buy now, pay later" — founder confirms specific providers before public launch).

## Conventions (locked, do not invent)

- **Voice:** plain, operator-led, specific, contrarian. No "seamless," "innovative," "powerful," "next-generation." Generous em-dashes; zero exclamation marks. Local idiom welcome without translation.
- **Color:** Cairo terracotta accent at most one job per page; OKLCH tokens throughout (`--accent: 54% 0.13 35`).
- **Type:** Manrope display, Inter body, JetBrains Mono numeric/labels. Custom geometric SVG Wordmark.
- **Reduce-motion:** every animated path has a static-or-instant fallback. Sound stays unaffected (sound ≠ motion). The custom cursor hides entirely on coarse pointers + reduce-motion.
- **Sound:** default muted, gesture-gated, ≤ -15 dB peak, sfx ≤ 500 ms, no audio files (pure synth).
- **Anti-patterns:** never brand-logo collage, never red/yellow SALE badges, never carousel hero, never fake countdown, never bento, never spinning sneaker, never fabricated testimonials.

## Where to look first if returning to this project

1. `docs/handover-and-gap-analysis.md` § 13 — Full Lift Pass summary + score + remaining gaps
2. `docs/design-red-team-rubric.md` — authoritative rubric scores (pre-lift + post-lift)
3. `docs/ship-decision.md` — truth-labeled gate status
4. `workspace/fitsole-rebrand/components/Hero.tsx` + `components/three/CairoEvening.tsx` — the signature shader + 4-act cinematography
5. `workspace/fitsole-rebrand/components/motion/*` — every motion component (CustomCursor, SplitText, MagneticCTA, ScrollCue, Reveal, PageTransition, Marquee)
6. `workspace/fitsole-rebrand/lib/audio/SoundManager.ts` — Web Audio singleton
7. `workspace/fitsole-rebrand/lib/data/articles.ts` — 4 editorial drafts pending founder review
