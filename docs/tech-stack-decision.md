# Tech Stack Decision

Binding for the project. Changes after the decision freeze date trigger re-running build / typecheck / lint / screenshots gates. Methodology: `references/29-smart-dependency-stack-decisions.md`, `references/40-spline-vs-blender-claude-decision-matrix.md`, `references/08-performance-core-web-vitals-master.md`, `references/11-claude-runtime-compatibility-master.md`.

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | Matches `starter-next-awwwards/`. Server Components excellent for editorial + SEO + headless Shopify. Image optimization is the strongest in-class for the photography-heavy concept. |
| Language | **TypeScript (strict)** | Pack default. Catches integration bugs early; Shopify Storefront API types are well-published. |
| Styling | **Tailwind CSS** (v3 → v4 when stable) with CSS variables for design tokens | Matches starter; OKLCH tokens from `art-direction.md` define the palette; Tailwind utility classes for layout speed. Theme tokens declared in CSS, not in Tailwind config — keeps the design system portable. |
| Component primitives | **Radix UI** primitives (Dialog, Sheet, Popover, ScrollArea) + custom on top | Accessibility ground state without committing to a heavy UI kit. shadcn-style copy-in, no extra dependency tree. |
| Forms | **React Hook Form + Zod** | Minimal needs (newsletter, contact, branch-reserve). Lightweight, type-safe. |
| Analytics | **Plausible** | Privacy-respecting, EU/Egypt-friendly, no consent banner needed in most jurisdictions, small JS payload (≈1KB). Founder may prefer Shopify Analytics + Plausible side-by-side; both possible. |
| Hosting | **Vercel** (default) | Native Next.js, edge for ISR, easy preview deploys. Founder confirms — may have existing infra. |
| Catalog source | **Shopify** (existing back-end, preserved) | Confirmed live (Shopify CDN, `checkout.fitsole.shop`). Storefront API in headless mode is the integration target. |
| Editorial CMS | **MDX files in repo** at launch, with migration path to **Sanity** if editorial volume justifies it | Budget-conscious. Editorial pieces are weekly, low-volume initially. Repo-based MDX = no extra cost, version-controlled, easy. Sanity becomes worth it if the founder hires a content person. |
| Image pipeline | **next/image + Vercel image optimization** | AVIF / WebP / responsive srcset built-in. Critical for the photography-heavy concept (branch hero, product flats, editorial). |

## Motion stack

| Layer | Choice | Reason |
|---|---|---|
| CSS | **Yes** for state transitions (hover, focus, sheet/modal open/close), prefers-reduced-motion media query | Native, free, optimal. |
| Framer Motion | **Yes — selectively.** For component-level reveals (cart sheet, mobile menu) | Already common in Next.js ecosystems. ~50KB gz; budget acceptable given selective use. |
| GSAP | **Yes — for the two signature motions only:** hero slow-pan (ScrollTrigger) + product card hover-reveal timing | Free for non-commercial use; Club GreenSock license required for commercial. **Founder approval needed** if licensing has not yet been purchased. Alternative: implement both motions with vanilla JS + IntersectionObserver. |
| Theatre.js | **No** | No scene animation needed. Concept rejects scroll theater. |

**Motion budget:** ≤80KB gz total motion-related JS. Tailored to the concept's restrained motion language (`motion-language-system.md`).

## 3D route

Pick exactly one:

- [x] **None** (static / 2D illustration only)
- [ ] CSS / SVG illusion of 3D
- [ ] Lightweight shader (OGL / Pixi)
- [ ] R3F scene with GLB
- [ ] Vanilla Three.js (isolated scene)
- [ ] Spline scene
- [ ] Blender procedural → GLB
- [ ] Hybrid

**Justification:**

1. **Why is 3D necessary for this site's concept?** It isn't. The signature visual is a photograph of the actual Fitsole branch interior. 3D would introduce a virtual space that competes with the real space the concept is built on. The concept earns its strength by being *not* abstract.
2. **What does 3D do that 2D / video / illustration could not?** Nothing for this concept. The branch photograph + restrained motion (slow-pan, card hover-reveal) covers every interaction the concept needs.
3. **What is the cost (KB, GPU, mobile risk) and is it earned?** Any 3D KB/GPU/mobile spend is wasted on this concept. Not earned.

**Decision: None.** No `web-native-3d-pipeline.md` or `webgl-3d-budget.md` work needed for this project (those docs stay as template stubs marked `Not run` in `ship-decision.md`).

## Build / QA commands the starter must support

Verified present in `starter-next-awwwards/scripts/` and `starter-next-awwwards/package.json`:

- `npm run dev` — `Manual review` (assume Next.js standard)
- `npm run build` — `Manual review`
- `npm run typecheck` — `Manual review`
- `npm run lint` — `Manual review`
- `npm run test` — `Manual review` (`tests/smoke.test.mjs` confirmed present)
- `npm run screenshots` — `Manual review` (`scripts/screenshots.mjs` confirmed present)
- `npm run analyze:assets` — `Manual review` (`scripts/analyze-assets.mjs` confirmed present)
- `npm run design:readiness` — `Manual review` (`scripts/design-readiness.mjs` confirmed present)

These labels become `Verified` after `make scaffold NAME=fitsole-rebrand` (or `python ops/create_project.py --name fitsole-rebrand`) and a first `npm install` + `npm run typecheck` inside `workspace/fitsole-rebrand/`.

## Hosting and deploy

- **Provider:** Vercel (default — founder may swap to existing infra, no concept dependency on Vercel).
- **Domain:** Existing `fitsole.shop` (DNS migration plan: keep apex on Shopify-hosted checkout subdomain, point root + www at Vercel via CNAME). Manual review by founder before DNS cutover.
- **Preview deploy strategy:** Vercel preview branch per PR. `screenshot-critic` runs against preview URLs.
- **Production deploy:** Requires founder approval (per `SOURCE_OF_TRUTH.md`). The pack does not deploy.

## Risk register

| # | Risk | Mitigation | Owner |
|---|---|---|---|
| 1 | Shopify Multi-Locations not enabled — "Reserve at branch" interaction (the signature) breaks. | Founder confirms Multi-Locations is on with per-branch inventory data via Storefront API. If not: graceful degrade to "Check availability at branch" contact CTA. | Founder + master-technical-director |
| 2 | Branch photography quality below bar — entire hero concept is compromised. | Asset-pipeline-master writes a tight brief (`asset-ledger.csv` + `ai-asset-pipeline.md` § Real assets brief) with composition / light / scale requirements. Founder commissions accordingly. Block ship if hero photo doesn't pass red-team. | Asset-pipeline-master + founder |
| 3 | Mobile LCP risk on hero branch photograph (large, full-bleed). | next/image priority + blurhash + AVIF + responsive srcset; pre-load hint; target ≤2.0s LCP on a mid-tier 4G Egyptian mobile. Measured at `npm run screenshots` and Lighthouse. | Frontend-engineer + gpu-performance-master |
| 4 | EGP price formatting + Arabic number rendering edge cases. | `Intl.NumberFormat('en-EG', { style: 'currency', currency: 'EGP' })` server-rendered. Verify rendering on actual Egyptian mobile devices (or BrowserStack equivalent). | Frontend-engineer |
| 5 | Storefront API rate limits during sale events (Egyptian Black Friday equivalents: White Friday Nov, Eid sales). | Use ISR with revalidate=60 on collection pages; inventory polled at request-time only on PDP; edge cache on collection grids. | Frontend-engineer |
| 6 | RTL / bilingual text rendering if Arabic moments are introduced. | Use CSS logical properties (`inline-start` / `inline-end` instead of `left` / `right`), Inter's Arabic glyphs. Hold optional Arabic moments behind a flag until founder confirms scope. | Art-director (decision) + frontend-engineer (implementation) |
| 7 | Authorized-retailer copy claim risk if not all brands are authorized. | Copy says only what founder can document. Per-brand authorization labels in product pages reflect reality, not aspiration. Founder confirms list. | Founder + ux-copy-strategist |
| 8 | GSAP commercial license cost (if used). | Founder approves license or asset-pipeline-master falls back to vanilla-JS + IntersectionObserver implementation of the two signature motions. | Founder + frontend-engineer |

Top 2 risks: **#1 (Multi-Locations) and #2 (branch photography quality)**. Both block the signature interaction and the signature visual respectively — they are the legs the rebrand stands on.

## Rejected options

What was considered and explicitly rejected:

- **Shopify Liquid theme rewrite (in-Shopify, not headless).** Considered for lower complexity. Rejected because Liquid limits the editorial layer's async/state ambitions and constrains the type/motion system more than the rebrand wants. Headless Next.js is the right ceiling-vs-effort balance.
- **Astro.** Strong for content sites. Rejected because the Shopify Storefront API integration patterns are less mature in 2026 than the Next.js + Shopify Hydrogen / commerce-kit ecosystem.
- **Remix.** Strong framework. Rejected because the team standard in this pack is Next.js (starter ships with Next.js); switching adds context cost without proportional benefit for this project.
- **Spline / R3F / Blender / shaders.** Rejected — concept does not earn 3D. See § 3D route above.
- **Sanity / Contentful at launch.** Rejected for initial scope — MDX files in repo are sufficient for weekly editorial pieces. Sanity migration is documented as a future option if editorial volume warrants.
- **Cookie consent banner.** Rejected by default because Plausible analytics + no third-party tracking + Egyptian audience = no GDPR / Egyptian consent law trigger that we're aware of. Founder confirms; if they want a banner regardless, easy to add.
- **Loyalty / subscription mechanic.** Out of scope for this rebrand. Can be added post-launch if founder wants.

## Decision freeze date

**Decision frozen: 7 days after the founder confirms the 4 no-ship blockers from `creative-brief.md`** (branch photography commissioned, Multi-Locations confirmed, branch addresses delivered, brand position confirmed).

After freeze, stack changes require re-running `npm run typecheck && npm run lint && npm run build && npm run test && npm run screenshots && npm run analyze:assets && npm run design:readiness` — and the screenshot-critic loop restarts.

## Approvals needed from the user

1. **Vercel hosting** — confirm or substitute existing host (founder's call).
2. **DNS cutover plan** — founder approves the apex / www DNS change before production deploy.
3. **GSAP commercial license** — purchase OR confirm we fall back to vanilla-JS for the two signature motions. ~$199 USD/yr if purchased; not blocking if we fall back.
4. **Plausible analytics** — confirm willing to use, or specify alternative.
5. **MDX-in-repo editorial CMS** — confirm acceptable for launch (low maintenance, devs add pieces) OR pre-approve Sanity from the start (cost: free tier likely sufficient initially).

## Handoff

**Stack and 3D route locked.** Next specialists to spawn:
- `frontend-engineer` (Phase 5, blocked by founder dependencies)
- `asset-pipeline-master` (running in parallel — see `asset-ledger.csv` next)
- `web-native-3d-master` is NOT spawned (3D route = None)
- `gsap-animation-master` to author `motion-language-system.md` in detail once founder approves GSAP licensing or fallback path

The frontend-engineer cannot scaffold until founder confirms:
- Multi-Locations enabled (risk #1)
- Branch photography committed (risk #2)
- "Physical Egyptian retail" brand position confirmed (per `creative-brief.md`)
