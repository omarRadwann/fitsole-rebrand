# test1 — Project State (Halo + Caliper workbench)

**Last updated:** 2026-05-18
**Repo:** https://github.com/omarRadwann/halo (Halo's remote — Caliper has NOT been pushed)
**Halo Live:** https://omarradwann.github.io/halo/
**Local working dir:** `C:\Users\acer\Desktop\test1\`

## What this project is

`test1/` now hosts **two fictional marketing-agency portfolio sites** built on the **Moon-Level Website Agent OS V7** (upgraded from V3 on 2026-05-18). The two sites are deliberately opposite-pole studies in the same category:

| Site | Path | Status | Aesthetic | Metaphor |
|---|---|---|---|---|
| **Halo** | `/` (root) | Shipped, deployed at `omarradwann.github.io/halo/` | Editorial dark · warm amber accent · Instrument Serif italic · cinematic motion | Gravity field · dispersion-glass sculpture · "presence not noise" |
| **Caliper** | `/caliper/` | Stage 1 — strategy locked, hero shipped, sections 3–9 + Three.js GLB pending | Cool ink on cream paper · single fluorescent magenta · Inter signage + Times serif + JetBrains Mono · mechanical motion | Precision instrument · static caliper SVG (Three.js next) · "spread test"

Halo is the meditative brand-led practice; Caliper is the mechanical operator-led studio. Together they're a deliberate pair — two answers to the same brief from opposite directions.

## Halo (the original) — four-page editorial site

A four-page editorial site for a fictional Lisbon + New York growth-marketing practice. Built to the *Ultimate Moon-Level Website Agent OS* standard. Single signature 3D moment per page (Blender-baked), cross-document View Transitions between pages, story-mode hero on the home page.

## Pages live

| Path | Role | Sculpture | Notes |
|---|---|---|---|
| `/` | Home — flagship interactive | sculpture + halo ring (211 KB) | 10 sections, story-mode hero, gravity field, reactive particles, per-act audio chord, cursor halo |
| `/work.html` | Casework — 12 engagements | elaborate p=3,q=7 knot (210 KB) | Editorial detail rows, filter strip (Brand/DTC/B2B/Finance/Cultural) |
| `/studio.html` | The practice — depth | calm icosphere + Musgrave (171 KB) | 9 partners, 2 studios, 6 criteria, 4 refusals, 5 expanded principles |
| `/journal.html` | Field notes — editorial | twisted Mobius ribbon (7.8 KB) | Featured essay + 8-entry archive + monthly-letter signup |

## Stack

- Plain HTML / CSS / JS — no build step, no framework
- Three.js via importmap CDN — used on all pages for the per-page 3D moment
- GSAP + ScrollTrigger + Lenis — only on the home page for the scroll cinematography
- Web Audio API — ambient pad + per-act chord progression + entry swell + completion chime + drawer cues
- Cross-document View Transitions (Chromium 126+) with JS opacity-fade fallback on internal pages
- Each page is self-contained (inlined CSS + JS); the home's `apogee.html` was renamed to `index.html` for Pages

## Blender pipeline

- `blender/apogee_sculpture.py` — bakes **four** Draco-compressed GLBs in one headless run via `& 'E:\blender.exe' -b -P blender/apogee_sculpture.py`
- Variants: full sculpture + halo ring (home); elaborate knot (work); calm icosphere (studio); twisted ribbon (journal)
- Idempotent — re-running clears the scene between bakes

## Agent OS — upgraded V3 → V7 on 2026-05-18

This repo ships the **Moon-Level Website Agent OS V7** wired up for both Claude Code and Codex. The upgrade is on branch `os-upgrade-v7`; tag `pre-v7-upgrade` anchors the V3 state on `main`. Halo `main` is **untouched** by the upgrade.

- `MASTER_DOCUMENT.md` — V7 source of truth (supersedes the archived `ARCHIVE_ULTIMATE_WEBSITE_AGENT_OS_V3.md` which built Halo)
- `START_HERE.md`, `INSTALL_ZERO_GAPS.md`, `README_AGENT_OS.md` — V5/V7 entry points
- `CLAUDE.md` — Claude Code loader (V4/V5/V6/V7 patches included)
- `AGENTS.md` — Codex loader
- `.claude/agents/*.md` (19) + `.claude/skills/award-website-os/` — Claude Code subagents and skill (V6 added the parallel skill mirror)
- `.codex/agents/*.toml` (19 — V4 added these) + `.codex/agents/*.md` + `.codex/config.toml` + `.codex/hooks.json` + `.codex/rules/`
- `.agents/skills/award-website-os/` — skill with 34 knowledge masters + 36 references + 12 scripts + 8 asset-templates + `agents/openai.yaml`
- `docs/` — V7 evidence framework (assumptions.md, research-brief.md, concept-scorecard.md, art-direction.md, copy-system.md, asset-ledger.csv, visual-review.md, qa-report.md, ship-decision.md, agent-manifest.{md,csv}, agent-court-report.md). Currently populated for the Caliper build.
- `ops/` — V5 operational layer (validate_pack.py, integrity manifest, install scripts)
- `tooling/` — security/secrets policy, paid-tools approval template, MCP setup; plus local `LOCAL_TOOL_STATUS.md` (gitignored)
- `examples/GOLDEN_PROMPTS.md` — prompt templates for the V7 workflow

Halo evidence (`DESIGN_BRIEF.md`, `ASSET_MANIFEST.md`, `QA_REPORT.md`, `HANDOVER.md`) sits at the repo root unchanged — that's Halo's post-hoc handover. The V7 `docs/*` is forward-build evidence for the next site (currently Caliper).

## Open work / next directions

### Caliper (next-up — actively under construction)

Stage-1 evidence locked in `docs/`. Stage-1 hero shipped at `/caliper/index.html`. Remaining stages:

- **Stage 2 — Blender caliper instrument.** Author `caliper/blender/caliper_instrument.py` (idempotent Blender script). Export Draco-compressed GLB ≤80KB. Four animation clips: idle, measuring, seeking, disengaged. Reference: `docs/art-direction.md §The caliper instrument`.
- **Stage 3 — Three.js scene.** Mount in `#instrument-canvas`; couple scroll progress to the `measuring` clip; wire ArrowLeft/Right keyboard control to discrete jaw positions; emit `measurement-announce` updates to the aria-live region.
- **Stage 4 — Home sections 3–9.** § 03 the diagnostic (12 measurements), § 04 three engagements with pricing, § 05 what we don't do (4 refusals), § 06 recent work (3 specimens), § 07 studio (4 operators), § 08 run-a-diagnostic CTA + form, § 09 footer.
- **Stage 5 — method.html, work.html, studio.html.** Three additional pages per `docs/copy-system.md §Pages 2-4 copy plans`.
- **Stage 6 — QA.** Playwright screenshot critique, Lighthouse perf budget enforcement (LCP ≤1.8s, JS ≤60KB), axe a11y scan. Tools installed; see `tooling/LOCAL_TOOL_STATUS.md`.
- **Stage 7 — Ship decision.** Populate `docs/ship-decision.md` with Verified / Manual review / Not run / Blocked labels per V7 truthfulness gate.

### Halo (paused — already shipped at omarradwann.github.io/halo/)

These were on the table when the Halo session ended (now paused while Caliper builds out):

- Persistent canvas across navigations (per moon-level §11.3) — requires a SPA shim or service worker; right now each page mounts its own canvas
- Per-case detail pages (`/work/halcyon.html` etc.) — currently cases route to the home drawer
- Shared `halo-core.css` + `halo-core.js` extraction — currently each page inlines its CSS/JS for portability
- Page-transition shader pass — custom radial wipe for the View Transition pseudo-elements
- 5th Blender variant for a future `/now.html` or 404 page
- Mobile-specific 3D treatment — currently dimmed at 0.35 on narrow viewports; could be replaced with still SVG silhouettes
- Build pipeline graduation to Next.js + R3F (per HANDOVER §9 sketch) — only if the project grows beyond editorial multi-page

### Repo-level open decision

`os-upgrade-v7` branch is local-only. Remote handling not yet decided (merge to Halo main / detach / new remote / stay local). See [`HANDOVER.md` §Agent OS V7 upgrade](HANDOVER.md).

## Where to look first if returning to this project

1. **`HANDOVER.md`** — full feature catalogue + architecture decisions in TL;DR form
2. **`ULTIMATE_WEBSITE_AGENT_OS.md`** — agent operating doctrine
3. **`memory.md`** — project-specific lessons + decisions + gotchas (what *not* to redo)
4. **`index.html`** — the flagship; 3000+ lines, all interactions live here
5. **`blender/apogee_sculpture.py`** — sculpture pipeline; idempotent

## Known good runs

- Blender 5.1.1 (portable, `E:\blender.exe`) — bakes all 4 GLBs in ~1 second
- GitHub Pages build — first build 32.8s; subsequent ~30s
- Live URL responds HTTP 200 for `/`, `/work.html`, `/studio.html`, `/journal.html`, `/blender/apogee_sculpture.glb`

## Known not-yet-done

- The 6 case studies on the home drawer have deep copy; the 6 *new* cases added on `/work.html` (Bay Mineral, Atelier Forge, Praxis Health, Sea Beam, Northern Index, Tilden & Co.) do **not** open a drawer with deep copy
- Per-card WebGL planes (one shader per case) — attempted, reverted because 6 additional WebGL contexts evicted the main scene's context (Chromium 16-context limit). The CSS gradient fallbacks remain. Future: shared single-canvas approach with scissor regions per card
- The `addon.py` for `blender-mcp` is in `.gitignore` — third-party redistribution avoided

## Conventions

- **Editorial dark** — OKLCH palette, warm amber accent `oklch(76% 0.18 70)`, near-black `oklch(10% 0.014 260)` paper
- **Type** — Instrument Serif italic for display, Inter Variable for body, JetBrains Mono for labels
- **Voice** — editorial, opinionated, evidence-led, slightly contrarian. No "seamless," "powerful," "innovative." Heavy on specifics.
- **Reduce-motion safe** — every animated path has a static fallback
- **No build step** — keep it that way unless the project graduates to a framework
