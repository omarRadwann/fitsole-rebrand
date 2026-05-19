# Screenshot Matrix

Every visual capture for the Fitsole rebrand. The `project_ship_check.py` requires `desktop`, `mobile`, and `reduced` to appear here.

## Capture method

- Tool: **Playwright (chromium)** via `scripts/screenshots.mjs`
- Command: `npm run dev` in one terminal, then `npm run screenshots` in another
- Storage: `workspace/fitsole-rebrand/screenshots/` (gitignored)
- Capture date: pending Phase 6 run

## Matrix

| Page | Section | Desktop (1920 / 1440) | Tablet (1024) | Mobile (390 / 360) | Reduced-motion (desktop + mobile) | Notes |
|---|---|---|---|---|---|---|
| / | hero | pending Phase 6 capture | pending | pending | pending | Hero photograph still placeholder — visual judgment limited until real shoot lands |
| / | picked this week | pending | pending | pending | pending | 6 placeholder cards, real branch-pin indicators |
| / | editorial feature | pending | pending | pending | pending | Static type composition |
| / | brands index | pending | pending | pending | pending | Typographic, no logos |
| / | sale | pending | pending | pending | pending | Strikethrough-only, no badges |
| / | branches | pending | pending | pending | pending | 3 placeholder branches |
| / | founder note | pending | pending | pending | pending | Italicized placeholder |
| / | signature interaction (BranchPin expanded) | pending | pending | pending — tap-direct on touch | pending — opacity instant | The strongest mid-state shot |
| / | footer | pending | pending | pending | pending | Voice line: "A real shop with a website. Cairo, Egypt." |
| /404 | full | pending | pending | pending | pending | "This shelf's empty." |

## Mandatory shots (per pack requirement)

- [ ] Hero, desktop (1440), light state
- [ ] Hero, mobile (390)
- [ ] Hero, reduced-motion (slow-pan disabled, photograph static)
- [ ] Signature interaction (BranchPin expanded popover), desktop
- [ ] Signature interaction (BranchPin tap-expanded), mobile
- [ ] Footer, desktop and mobile
- [ ] 404 page, full
- [ ] 3D / WebGL canvas frame — **N/A** (3D route = None per tech-stack-decision.md)

## Coverage by viewport

| Viewport | Status |
|---|---|
| Desktop 1920 | Not run — pending Phase 6 capture |
| Desktop 1440 | Not run — pending Phase 6 capture |
| Tablet 1024 | Not run — pending Phase 6 capture |
| Mobile 390 (iPhone 14 device emulation) | Not run — pending Phase 6 capture |
| Mobile 360 (low-end Android) | Not run — pending Phase 6 capture |

## Coverage by state

| State | Status |
|---|---|
| Default | Not run — pending Phase 6 capture |
| Reduced motion (desktop + mobile) | Not run — pending Phase 6 capture |
| Dark mode | Not applicable — single-mode design |
| High-contrast | Manual review — Cairo terracotta accent contrast against warm off-white needs WCAG 2.2 AA verification at small sizes |
| Loading | Manual review — Next.js streaming SSR; loading.tsx not separately designed |
| Empty / error | Verified at structural level — 404 page is concept-tied; cart-empty state pending Phase 5.5 |

## The "founder-share" shot

Which single screenshot would the founder actually post on social?

**Desktop hero at 1440 × 900**, full-bleed branch photograph (once commissioned and shot) with the H1 "The shop you can walk into." set over it at bottom-left. **OG image = founder-share image** — same frame, no separate render. Per `docs/copy-system.md` § SEO/metadata.

Until the real branch photograph lands, the founder-share frame is **Blocked** — placeholder hero cannot serve this role.

## Issues found during capture

Pending Phase 6 capture. Anticipated issues to watch for:

- Font-loading flash on first paint (Inter + JetBrains Mono via next/font/google — should be `display: swap` controlled).
- Layout shift around the BranchPin popover expand (verify CLS = 0).
- Branch hero placeholder gradient may read flat at small viewports — confirm.
- Mobile hero type contrast against placeholder gradient — likely fine, but verify when real photograph lands (may need scrim).

## How to run

```bash
# Terminal 1
cd workspace/fitsole-rebrand
npm run dev

# Terminal 2 (after browsers install)
npx playwright install chromium
npm run screenshots
```

Screenshots land in `workspace/fitsole-rebrand/screenshots/` — 14 captures (7 viewport × state combinations × 2 pages).
