# Sample Golden Run — Luxury Dental Clinic

A worked example of one full pack execution from a single-line input to ship decision. Copy patterns from this when running similar projects; do not copy the content (every project earns its own answers).

---

## User input

```
/award-start luxury dental clinic in Madrid
```

## Phase 1 — Intake

`make validate-everything` → PASS (with the expected warning about starter, but starter is present in V6).

`make evidence` → 40 templates copied into `docs/`.

**`docs/one-input-brief.md`** filled with the verbatim user input plus:
- Category: local service / healthcare
- Geography: Madrid, Spain (Spanish primary, English secondary)
- Conversion: book appointment (online + phone)
- Budget signals: paid tools approved up to mid-tier
- Project mode: greenfield (no existing site provided)

**`docs/assumptions.md`** opens with 14 rows including:
- "Audience is high-income Madrid residents seeking aesthetic + restorative dentistry, not insurance-driven volume." — confidence M.
- "Conversion mechanic primarily book-online; phone is secondary fallback." — confidence M.
- "Tone is quiet-confident, not warm-friendly." — confidence L (worth confirming).

## Phase 2 — Research (parallel)

`market-researcher` and `reference-mining` skill run in parallel.

**`docs/research-brief.md`** filled:
- **Buyer fears** (in user-style language): "I don't want to look obviously done." "I've had a dentist push expensive work I didn't need." "I don't trust deep-cleaning gimmicks." "I'm scared of pain even with sedation."
- **Required beliefs**: "This clinic understands aesthetic dentistry as a long-term system, not a one-off procedure." "The staff have real qualifications, not just nice furniture." "The pricing is transparent, not surprise-bill."
- **Competitors**: 6 Madrid clinics studied, common pattern is white-blue gradients + smiling stock photo couples + "21st century technology" copy. Trust signals are mostly logo soup + ISO certificates.
- **Trust signals needed**: real before/afters with patient consent OR honest quiet proof (process detail, named clinicians with credentials, technology pieces visible, treatment protocol explained).
- **Recommended sections**: hero / treatments / approach (process) / clinician / facility / pricing transparency / consultation booking / FAQ / footer.

**`docs/benchmark-reference-board.md`** curated:
- 3 in-category: 2 international award-winning dental sites + 1 Madrid aesthetic clinic that gets the tone right.
- 3 out-of-category: an editorial fashion site (for type discipline), an architecture practice (for restraint), a watchmaker (for material language).
- 3 anti-references: the white-blue-gradient cliché, the stock-smiling-couple cliché, the "21st century dentistry" copy cliché.

## Phase 3 — Concept

`creative-director` runs. Three concepts produced and scored:

| Concept | Avg score | Status |
|---|---|---|
| A — "Quiet Restoration" (medical-editorial, stone-and-paper material, no faces) | 8.2 | Selected |
| B — "The Long View" (photo-essay of one patient's 6-month journey, dramatic typography) | 7.6 | Rejected (requires real patient consent we don't have) |
| C — "Atelier of the Smile" (extreme luxury, 3D anatomical scenes, dramatic motion) | 7.8 | Rejected (3D unjustified, mobile risk high, would alienate the audience) |

**Selected: A — Quiet Restoration.**

Brave decision: **no patient faces anywhere on the site.** This rejects the entire category's cliché (smiling people) and replaces it with detail photography — instruments, fabric, stone, hands. A bet that the audience reads this as serious craft, not coldness.

`docs/creative-brief.md` locks the signature triple:
- Signature idea: "Aesthetic dentistry as restoration craft, not cosmetic upgrade."
- Signature visual: full-bleed close-up of a single piece of dental equipment on warm stone, soft side-light.
- Signature interaction: scroll-driven horizontal reveal of the treatment journey, each step a captured detail (not a smiling photo).

## Phase 4 — Direction (parallel)

`art-director`, `ux-copy-strategist`, `asset-pipeline-master`, `master-technical-director` run in parallel.

**`docs/art-direction.md`** locks:
- Mood: "operating-theatre quiet", "warm-stone material", "draftsman precision".
- Type: display = Söhne Breit (licensed), body = Söhne Buch, mono = JetBrains Mono for prices/numbers only.
- Color: OKLCH — bg warm-off-white, fg near-black, muted warm-grey, accent burnt-amber (used ONLY for the primary CTA and the H1's last word).
- Composition: editorial single-column hero; sections alternate full-bleed image / centered text. Mobile is a separate composition, not a stack.
- Anti-patterns banned: white/blue gradients, stock photos with faces, "21st century" copy, ISO logo soup.

**`docs/copy-system.md`** locks (excerpt):
- H1: "Dentistry that thinks in decades."
- Sub: "Aesthetic and restorative work for patients who plan to keep their teeth as long as the rest of them."
- Primary CTA: "Reserve a consultation"
- Proof type: quiet — process detail + named clinicians + facility detail. No stock testimonials.

**`docs/asset-ledger.csv`** seeded with the imagery the project will need: 12 detail photos (commissioned), 4 facility photos (commissioned), 0 patient photos, 1 hero poster (rendered from a Blender scene of dental instrument + stone surface).

**`docs/tech-stack-decision.md`** locks:
- Next.js 15, TypeScript, Tailwind, R3F NOT used, GSAP used for the horizontal-reveal interaction.
- 3D route: **None.** Justification: the metaphor is craft/stone/detail; 2D photography serves it better than 3D would. The signature interaction is GSAP-driven horizontal scroll, not WebGL.
- Risk register: top risk is "audience reads no-faces-anywhere as cold". Mitigation: warmth via material (stone, fabric, hands) + voice (specific, calm, never sterile).
- Hosting: Vercel.

## Phase 5 — Specialist deepening

`typography-layout-master` locks the scale (clamp() values), tracking per family, mobile composition (single column, larger leading).

Skipped: `web-native-3d-master`, `threejs-r3f-master`, `shader-webgl-master`, `image-generation-director` (no AI imagery), `blender-production-master`.

`gsap-animation-master` produces the horizontal-reveal timeline spec.

## Phase 6 — Scaffold + build

`make scaffold NAME=clinica-restauradora` → creates `workspace/clinica-restauradora/` from the starter.

`frontend-engineer` implements in slices:
1. Tokens (OKLCH, Söhne via `next/font/local`, easings).
2. Hero (real H1, real sub, real CTA).
3. Sections (treatments, approach, clinician, facility, pricing, booking, FAQ, footer).
4. Signature interaction (GSAP horizontal-reveal of the treatment-journey strip).
5. Reduced-motion path (the reveal becomes a vertical stack with the same imagery, no horizontal motion).
6. 404 page (designed, reuses the stone material).

Build results:
- `npm run typecheck` → PASS, label `Verified`.
- `npm run lint` → PASS, label `Verified`.
- `npm run build` → PASS, label `Verified`. JS gzipped 178 KB (under 200 KB award budget).
- `npm run test` → PASS, label `Verified`.

## Phase 7 — Visual QA loop

`npm run screenshots` → 28 captures (desktop 1920/1440/1024, mobile 390/360, reduced-motion ×2).

`screenshot-critic` scores `docs/design-red-team-rubric.md`:

| Category | Loop 1 | Loop 2 | Loop 3 |
|---|---|---|---|
| Idea clarity | 8.5 | 8.5 | 8.5 |
| Typography | 8.0 | 8.5 | 8.7 |
| Composition | 7.8 | 8.4 | 8.6 |
| Color | 8.2 | 8.5 | 8.5 |
| Imagery | 7.5 | 8.0 | 8.6 |
| Signature moment | 8.0 | 8.5 | 8.8 |
| Motion | 7.0 | 8.0 | 8.4 |
| Mobile | 6.8 | 7.6 | 8.3 |
| Detail consistency | 7.4 | 8.2 | 8.5 |
| Restraint / bravery | 8.5 | 8.5 | 8.5 |
| **Average** | **7.77** | **8.27** | **8.54** |
| **Lowest** | **6.8** | **7.6** | **8.3** |

Loop 1 → fix list: mobile composition was a stack (rebuild), motion easing felt generic (replace with custom cubic-bezier), imagery weak in 3 sections (recommission), composition rhythm broken between sections 4–5.

Loop 2 → fix list: detail consistency on focus states, typography tracking on display at narrow widths.

Loop 3 → PASS. Anti-genericity: 6/6 boxes checked.

## Phase 8 — Verification

`accessibility-ux-master` fills `docs/qa-report.md` § Accessibility:
- Keyboard nav reaches everything: `Verified`.
- Focus visible: `Verified` (custom focus ring uses the warm-amber accent).
- Contrast WCAG 2.2 AA: `Verified` (axe report at `docs/audits/axe-2026-05-19.json`).
- Heading hierarchy: `Verified`.
- Alt text: `Verified`.
- Reduced-motion verified: `Verified` (separate screenshot set passes).
- Forms have labels: `Verified`.
- Screen reader can complete primary action: `Verified` (VoiceOver tested end-to-end).

`gpu-performance-master`: skipped (no WebGL/3D).

Performance section of `qa-report.md`:
- LCP mobile: 1.8s → `Verified` (lighthouse trace at `docs/audits/lh-2026-05-19.json`).
- CLS: 0.04 → `Verified`.
- INP: 134ms → `Verified`.
- JS gz: 178 KB → `Verified`.

## Phase 9 — Ship gate

`release-qa-master` fills `docs/ship-decision.md`.

Label totals: Verified 41, Manual review 6, Not run 0, Blocked 0.

The 6 `Manual review` items:
- The H1 ("Dentistry that thinks in decades.") — strategic claim, user should confirm tone.
- The brave-decision rationale (no patient faces) — user must own this decision before launch.
- Pricing transparency section — content is correct per user-supplied data, but user must verify amounts.
- Clinician name and credentials — placeholder names; user must replace with real ones before launch.
- The 16 commissioned photographs — user must verify they were actually shot and licensed.
- Domain / DNS — pack does not deploy.

**Recommendation: `Disclose limitations and ship`**.

The disclosed limitation list is the 6 `Manual review` items above. User accepts → ship is allowed.

`make project-ship-check` → PASS.

## Final handoff to user

> Your site is built and ready to deploy at `workspace/clinica-restauradora/`.
>
> The concept is **Quiet Restoration**: aesthetic dentistry as restoration craft. The brave decision is **no patient faces anywhere** — this rejects the category cliché. Verify you're aligned with this before launch.
>
> Before launching:
> 1. Replace placeholder clinician names with real ones (3 occurrences in `components/Clinician.tsx`).
> 2. Verify the 16 commissioned photographs are in `public/images/` with rights confirmed in `asset-ledger.csv`.
> 3. Verify the pricing numbers in `components/Pricing.tsx` reflect current rates.
> 4. Deploy via `vercel --prod` (or your preferred provider). The pack does not deploy.
>
> Post-launch:
> - Monitor consultation-booking conversion via Plausible (already wired).
> - Rollback trigger: if bookings drop below baseline within 14 days, revert hero copy first (smallest lever).
> - Re-run `make project-ship-check` if you make changes — the truth labels must stay accurate.
>
> One-week memory anchor: the full-bleed close-up of dental instrument on warm stone with the H1 "Dentistry that thinks in decades." This is the founder-share frame; verify it renders correctly across the three OG-preview tools (Twitter, LinkedIn, Slack) before announcing.

## What this run demonstrates

- The orchestrator made one call per phase, never asked the user 14 questions, and only requested approval for the 6 hard categories.
- The creative-director rejected two concepts in writing (B and C) with named reasons.
- The signature triple was locked in Phase 3 and not changed in later phases.
- 3D was rejected even though the OS supports it — because the concept did not earn it.
- The visual QA loop ran 3 cycles before crossing the 8.5 threshold. This is normal.
- The ship recommendation was `Disclose limitations and ship`, not bare `Ship` — because real human verification of clinician names / photo rights / pricing was outstanding.
- No fake proof was produced. No AI-generated person was presented as real. No stock photo of a smiling couple was used.

Use this run as a structural reference, not a content template.
