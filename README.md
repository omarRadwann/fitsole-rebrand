# Halo — A growth practice for brands that prefer presence to noise

**Live:** https://omarradwann.github.io/halo/

A four-page editorial site for a fictional Lisbon + New York growth-marketing practice, built to the *award-level master reference* moon-level standard. Single-page-app feel via cross-document View Transitions; a Blender-driven sculptural identity per page; a real story-mode hero with scroll-driven cinematography.

## What's inside

| Path | Page | Sculpture (Blender-baked) |
|---|---|---|
| `/` (`index.html`) | Home — 10 sections, story-mode hero, gravity field, reactive particles | `apogee_sculpture.glb` (full torus knot + halo ring) |
| `/work.html` | Casework — 12 engagements with editorial detail rows | `apogee_work.glb` (elaborate p=3,q=7 knot) |
| `/studio.html` | The practice — 9 partners, 2 studios, criteria, refusals, principles | `apogee_studio.glb` (calm icosphere with Musgrave displacement) |
| `/journal.html` | Field notes — featured essay + 8-entry archive + newsletter | `apogee_journal.glb` (twisted Mobius-style ribbon) |

## Stack

- Plain HTML / CSS / JS — no build step, no framework
- Three.js (ES module via importmap, CDN) for the per-page 3D moments
- GSAP + ScrollTrigger + Lenis on the home for scroll cinematography
- Web Audio API for ambient pad + per-act chord progression
- Cross-document View Transitions (Chromium 126+) with JS fade fallback
- All sculptures baked from `blender/apogee_sculpture.py` in one headless run

## Build the sculptures

If you change `blender/apogee_sculpture.py`, re-bake the four GLBs:

```bash
blender -b -P blender/apogee_sculpture.py
```

This writes:
- `blender/apogee_sculpture.glb` (sculpture + halo ring)
- `blender/apogee_work.glb`
- `blender/apogee_studio.glb`
- `blender/apogee_journal.glb`

## Local preview

ES modules don't load from `file://` — start any static server in the project root:

```bash
python -m http.server 8765
```

Then open `http://localhost:8765/`.

## Design language

Editorial dark mode, OKLCH palette with warm amber accent (`oklch(76% 0.18 70)`), Instrument Serif italic display + Inter Variable body + JetBrains Mono labels. Reduce-motion safe paths throughout; full keyboard navigation; WCAG 2.2 AA contrast floor.

See `HANDOVER.md` for the full feature catalogue and architecture notes.
