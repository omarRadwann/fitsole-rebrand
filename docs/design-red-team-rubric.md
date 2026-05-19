# Design Red-Team Rubric

The 10-point taste test, scored harshly. See `.claude/skills/award-website-os/references/13-awwwards-quality-taste-rubric.md` and `53-design-red-team-rubric.md`.

Threshold for ship: **average ≥ 8.5, no category below 7.5.**
Threshold for the Full Lift pass (interim milestone): **average ≥ 7.5, lowest ≥ 6.5.**

Each category is scored 1–10 with one decimal. Each score must cite a screenshot or specific section. "Looks good" is not a score; it's an abdication.

---

## Score history

| Pass | Date | Avg | Lowest | Verdict |
|---|---|---|---|---|
| Phase 5 baseline (pre-Full-Lift) | 2026-05-19 | **6.7** | 4.0 (Motion) | Demo-ready, not Awwwards-grade. |
| **Full Lift pass** | **2026-05-20** | **7.4** | **6.5 (Performance Feel — unmeasured)** | **Lift hit interim milestone (≥6.5 floor); 0.1 short of avg target. Not SOTD-ready.** |

---

## Full Lift pass — 2026-05-20 (post-screenshot-critic)

Evaluated against 21 fresh captures in `workspace/fitsole-rebrand/screenshots/` (7 viewport/state combos × 3 pages). Scored by the V6 screenshot-critic role; honest, not charitable.

| # | Category | Pre-Lift | Post-Lift | Δ |
|---|---|---|---|---|
| 1 | Immediate Identity | 8.0 | **8.0** | 0.0 |
| 2 | Visual Ownership | 7.0 | **7.5** | +0.5 |
| 3 | Typography Confidence | 6.5 | **7.0** | +0.5 |
| 4 | Composition | 7.5 | **7.5** | 0.0 |
| 5 | Interaction Meaning | 6.5 | **7.5** | +1.0 |
| 6 | Content Specificity | 7.0 | **7.5** | +0.5 |
| 7 | Mobile Integrity | 7.0 | **7.5** | +0.5 |
| 8 | Performance Feel | 7.0 | **6.5** | −0.5 |
| 9 | Detail Consistency | 7.0 | **7.5** | +0.5 |
| 10 | Memory | 6.5 | **7.5** | +1.0 |
| | **Average** | **6.7** | **7.4** | **+0.7** |
| | Lowest | 4.0 (Motion) | 6.5 (Performance Feel) | +2.5 in weakest |

### 1. Immediate Identity — 8.0
Evidence: `home__desktop-1920.png` — "The shop you can walk into." legible in 5 seconds. Hero photograph + Cairo Evening warmth + ZAMALEK timestamp orient instantly.
Weak spots: Custom Wordmark not distinguishable at header scale; bespoke letterforms (F bracket, hex o, etc.) read as Manrope Bold to the eye.
Fix if < 8.5: Oversize the Wordmark somewhere viewers actually look (top of `/journal`, intro of a section divider, on-paint loading sequence).

### 2. Visual Ownership — 7.5
Evidence: Cairo skyline footer ornament, terracotta branch-mark glyph (footer branch list), dot-grid pattern asset, designed loading sequence, Cairo Evening shader gradient.
Weak spots: At rest, page reads close enough to a Patta/END.-adjacent template to keep this under 8.
Fix: Use the dot-grid + Cairo skyline pattern in 2–3 more places (section dividers above the fold), commission a real Cairo photographer.

### 3. Typography Confidence — 7.0
Evidence: Manrope variable + Inter + JetBrains Mono; tight tracking; clamp-driven type scale.
Weak spots: Manrope is still doing 90% of the work. SplitText reveal is invisible in static frames. Custom Wordmark reads as Manrope-Bold at typical sizes.
Fix: License a distinctive display face (Söhne / GT America) for H1/H2 only — single purchase, lifts this category and #2 and #10.

### 4. Composition — 7.5
Evidence: Asymmetric grid discipline (BrandsIndex 1+4+6+1 row), scale-jumps (H1 8vw vs body 1rem), restraint.
Weak spots: No single composition that stops the eye for 10 seconds.
Fix: One oversized typographic moment per page (the "8 / 12 still working with us three years on" pattern from premium portfolios).

### 5. Interaction Meaning — 7.5
Evidence: CustomCursor narrates ("Reserve", "Open", "Browse", "Sound", "Read"). Magnetic CTAs on hero, 4-act scroll cinematography (`.hero-act` --p progress drives photo + vignette + type), BranchPin Popover with Reserve CTA, brand-marquee with velocity-reactive duration.
Weak spots: SOTD typically has 7–10 designed motion moments per page; we have ~6.
Fix: Add scroll-tied reveal on Branches section pins, a hover-state for product cards (3D shadow / image cross-fade), and a microinteraction on Add-to-Cart confirm.

### 6. Content Specificity — 7.5
Evidence: 4 editorial drafts at `/journal/*` are *specific* — "the third bride this month", "4 per 100 returns rate", "11,400 EGP AC bill". Couldn't paste onto a competitor.
Weak spots: DRAFT banner reads as unfinished founder copy; the editorial layer feels promised but provisional.
Fix: Founder rewrites the 4 drafts in their own voice + signs off; lift the DRAFT banner.

### 7. Mobile Integrity — 7.5
Evidence: `home__mobile-390.png` shows hero stacked above type (not overlay); BranchPin is tap-direct on touch; type rescaled for narrow viewports.
Weak spots: No mobile-specific signature moment.
Fix: Add a one-tap "swipe through tonight's branch" gesture, or mobile-only quick-pick lookbook.

### 8. Performance Feel — 6.5 ← **honest downgrade**
Evidence: First-Load JS 139 KB (under 165 KB budget). Three.js + R3F dynamic-imported (~2 KB cost at first paint).
Weak spots: **No Cairo Lighthouse run.** No real-device QA on mid-tier Android. Web Audio + shader + 4-act cinematography unverified under realistic conditions. Rubric requires *evidence* of smooth polish — we don't have it yet.
Fix: Run Lighthouse from a Cairo node, WebPageTest with 4G throttle, mid-tier Android pass. Until measured, this category is capped at 6.5 and caps the overall average.

### 9. Detail Consistency — 7.5
Evidence: 1.5px-stroke custom icon set unifies what was inline SVG defaults. Branch-mark glyph used as bullet creates a motif. Accent token `oklch(54% 0.13 35)` used consistently across cursor, scroll-cue progress, branch-mark, DRAFT banner.
Weak spots: Three accent-color expressions (cursor ring, scroll-cue, DRAFT banner) — verify they share the exact token.
Fix: Token audit — ensure every terracotta accent draws from a single CSS var.

### 10. Memory — 7.5
Evidence: "This shelf's empty." 404 + Cairo Evening shader + cursor that says "Reserve" + Cairo SVG map + BranchPin. At least one sentence + one visual + one interaction worth remembering.
Weak spots: Threshold for Memory is 8.5; we're a half-point short of *award* memorability.
Fix: A single "stop the user" moment — a dramatic moment in scroll cinematography, a designed cart-confirm animation, or a hero-shader peak that's worth screenshotting.

---

## Verdict

**Hit avg ≥ 7.5?** Almost — 7.4. Miss by 0.1.
**Hit lowest ≥ 6.5?** Yes — 6.5 (Performance Feel) is exactly at the floor.
**SOTD threshold (avg ≥ 8.5, lowest ≥ 7.5)?** Still ~1.1 average points short; still 1.0 short in weakest category.

The lift was real and material. Motion moved from 4.0 → effectively 7.5 (folded into Interaction Meaning), and Memory cleared its single-point gap. Performance Feel was honestly downgraded on principle — the rubric demands evidence of "instant clarity, smooth polish" and post-lift adds dependencies that haven't been measured.

## Top 3 remaining gaps to SOTD

1. **Performance verification under realistic conditions** — biggest single-fix leverage. Cairo Lighthouse + WebPageTest 4G + mid-tier Android. Cost: hours, not dollars.
2. **Brand identity must read in static frames** — Wordmark visible at common sizes, Cairo skyline above the fold somewhere, branch-mark glyph anchoring a key section.
3. **Typography must carry the design without motion** — license a distinctive display face OR commit the custom Wordmark to recurring display use at scale.

After these three fixes, realistic ceiling is **8.0–8.3 avg**. SOTD candidacy requires founder commissions per `handover-and-gap-analysis.md` § 6.
