# Halo — Project State

**Last updated:** 2026-05-18
**Repo:** https://github.com/omarRadwann/halo
**Live:** https://omarradwann.github.io/halo/
**Local working dir:** `C:\Users\acer\Desktop\test1\`

## What this project is

A four-page editorial site for a fictional Lisbon + New York growth-marketing practice (Halo). Built to the *Ultimate Moon-Level Website Agent OS* standard. Single signature 3D moment per page (Blender-baked), cross-document View Transitions between pages, story-mode hero on the home page.

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

## Agent OS

This repo ships with the **Ultimate Moon-Level Website Agent OS** wired up for both Claude Code and Codex:

- `ULTIMATE_WEBSITE_AGENT_OS.md` — source of truth (38 sections, single document)
- `CLAUDE.md` — Claude Code loader pointing at the OS
- `AGENTS.md` — Codex loader pointing at the OS
- `.claude/agents/` — 19 specialist subagents for Claude Code (creative-director, art-director, frontend-engineer, blender-production-master, gpu-performance-master, screenshot-critic, etc.)
- `.claude/settings.json` — Claude Code project settings
- `.codex/agents/` — same 19 specialists for Codex
- `.codex/hooks.json` — Codex hook configuration
- `.agents/skills/award-website-os/` — codex-style skill with 31 knowledge masters, scripts, and templates

## Open work / next directions

These were on the table when the last session ended:

- Persistent canvas across navigations (per moon-level §11.3) — requires a SPA shim or service worker; right now each page mounts its own canvas
- Per-case detail pages (`/work/halcyon.html` etc.) — currently cases route to the home drawer
- Shared `halo-core.css` + `halo-core.js` extraction — currently each page inlines its CSS/JS for portability
- Page-transition shader pass — custom radial wipe for the View Transition pseudo-elements
- 5th Blender variant for a future `/now.html` or 404 page
- Mobile-specific 3D treatment — currently dimmed at 0.35 on narrow viewports; could be replaced with still SVG silhouettes
- Build pipeline graduation to Next.js + R3F (per HANDOVER §9 sketch) — only if the project grows beyond editorial multi-page

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
