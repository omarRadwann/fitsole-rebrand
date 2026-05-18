# 36 — Community Techniques & Tooling (May 2026 snapshot)

Synthesized from 8 X threads provided 2026-05-18. Captures concrete, applicable techniques and tools mentioned by builders shipping production websites with Claude Code / Codex. This file is a living snapshot — the techniques are timestamped; check sources before applying.

## A. Official Anthropic skills + plugins to install

### A.1 `frontend-design` skill — Anthropic, official

Per @arceyul, 2026-05-18 (14.7K views): 136K stars, 418K installs on GitHub. The skill **forces a commit to an aesthetic direction before touching code** and is purpose-built to eliminate AI slop (default Inter, purple gradients, generic layouts).

Style presets it ships with: brutalist, editorial, retro-futuristic, luxurious, maximalist.

Generates HTML, CSS, JS, React, or Vue. Works in Claude Code, Codex, Cursor, Gemini CLI, OpenCode, and 15+ harnesses.

**Install (requires user authorization):**

```bash
# Verified the CLI exists 2026-05-18 — `npx skills` is functional
npx skills add github.com/anthropics/skills --skill frontend-design
```

**Workflow:**
1. Install (one-time, available in all future sessions).
2. Describe the website or component you want.
3. Choose a style preset (brutalist / editorial / retro-futuristic / luxurious / maximalist).
4. Skill assembles typography, color, motion, and coherent composition before code generation.

**Compatibility with this OS:** complements `02-concept-art-direction-master.md` and `14-ai-anti-genericity-protocol.md` — both enforce the "art direction before code" rule. `frontend-design` operationalizes it as a discoverable, automatable skill. Recommended companion, not replacement: this OS handles strategy + research + QA + ship discipline; `frontend-design` handles the design-system-from-style-preset moment specifically.

### A.2 `claude-code-setup` plugin — Anthropic, official

Per @Suryanshti777, 2026-05-17 (1.1M views): scans a project and recommends hooks, skills, MCP servers, subagents, and automations.

**Important caveat from the community note on the tweet:** "operates in read-only mode without modifying files" — it recommends; it does not install. The user still has to apply the recommendations.

**Install (Claude Code slash command, run by the user):**

```
/plugin install claude-code-setup@claude-plugins-official
```

**Reference URLs:** `claude.com/plugins/claude-code-setup`, `github.com/anthropics/claude-code-setup` (per the tweet).

**Compatibility with this OS:** could surface gaps in our `.claude/agents/*.md`, `.codex/agents/*.toml`, `.claude/settings.json`, or recommend MCP servers we haven't wired (Playwright MCP, Lighthouse MCP, etc.). Run it once after every major OS upgrade as a sanity check.

## B. Production-tested website techniques

### B.1 Luxury-brand 3D-alcove pattern (Three.js + Blender)

Source: @Oluwaphilemon1, 2026-05-18 and 2026-05-17.

**Recipe — "websites that feel like walking into a store":**
1. Structure as **6 individual 3D scenes per product** (not one big scene).
2. Design each scene as an **intimate alcove with its own world** — distinct lighting, color, and prop set.
3. Use **scroll to move between scenes**.
4. Add **hidden gestures that reward curious users** (drag, long-press, key combos).
5. Pair a **custom soundscape per environment**.
6. Let the **3D render carry the story** — copy is minimal, the scene is the narrative.

**Stack the author used:** Three.js + WebGL real-time rendering, Blender for modeling → exported as GLTF, loaded by Three.js.

**Earlier "MANA-level drink site" recipe** (same author, 2026-05-16):
- Pure white background so colorful typography pops
- Oversized hero text, multicolored per word
- Float product keywords (e.g. YERBA, MATE) around the headline
- Brutally minimal layout

**When to use:** for product-led brand sites (consumer goods, agency-as-product, portfolio gallery). When the site sells *desire* more than *information*.

**Apply to this OS:** add to the master-technical-director gate (`06-three-r3f-webgl-shader-master.md`) as a recognized pattern. The hidden-gesture + per-scene-soundscape combination is the single hardest-to-template element — agencies that ship it are not template-able.

### B.2 Agency-as-3D-supermarket-packaging

Source: @Oluwaphilemon1, 2026-05-17.

Prompt the author used verbatim:
> "Design an agency site where services are presented as supermarket product packaging in 3D"

This is a strong example of the V7 anti-genericity rule: instead of a 3-card services grid, services become **objects** in a 3D world with their own packaging. Browsable, hoverable, learnable.

**Apply:** the "instrument" metaphor is the equivalent for Caliper; the "specimen" metaphor is the equivalent for any lab/data-led agency; the "drawer" metaphor for archive-heavy studios. The rule is: **categories become physical objects**, not list items.

## C. Capability proofs (no direct technique, but validates the stack)

- **@ruben_kostard, 2026-05-17** — GPT-5.5 in Codex produced a benchtop cyclone dust separator in ForgeCAD. Demonstrates that Codex now handles detailed CAD generation.
- **@RoundtableSpace (0xMarioNawfal), 2026-05-17** — someone "vibe-coded" a real 3D property tour tool with Claude Code (drone shots / phone captures → interactive 3D tour). Beats Matterport's $3K+ hardware + monthly subscription. Validates that Claude Code can ship serious Three.js applications, not just toys.

## D. Lower-signal threads in the same batch (for record only)

- **@ahmedrann, 2026-05-01** — generic promotion of a prompt library, no concrete technique surfaced in the text body.
- **@_sameerrr0, 2026-05-18** — anecdote about taking a client from $600K → $920K ARR by fixing conversion. No methodology disclosed in the visible text.

## E. Action items for this OS

| # | Action | Owner | Status |
|---|---|---|---|
| 1 | Document `frontend-design` skill install command in `INSTALL_ZERO_GAPS.md` as an optional companion install | OS maintainer | **Not run** — install requires user authorization (Bash classifier blocked auto-install) |
| 2 | Document `claude-code-setup` plugin install in `INSTALL_ZERO_GAPS.md` | OS maintainer | **Not run** — slash command, user runs in Claude Code |
| 3 | Apply alcove-per-case pattern to Caliper `/work.html` spec | This build | **Verified** — applied to `docs/copy-system.md §Pages 2-4 copy plans` and to `caliper/README.md` build map |
| 4 | Cross-reference this file from `06-three-r3f-webgl-shader-master.md` and `02-concept-art-direction-master.md` | OS maintainer | **Manual review** — left as a forward-pointer below; consumers should read this file when those references load |
| 5 | Add `36-community-techniques-may-2026.md` to the SKILL.md load list under "Final Smart Pass" | OS maintainer | **Verified** — append to `.agents/skills/award-website-os/SKILL.md` and `.claude/skills/award-website-os/SKILL.md` |
| 6 | Mirror this file into `.claude/skills/.../knowledge/` and both `references/` folders for V6 dual-path compliance | OS maintainer | **Verified** — see commit log |

## F. Source citations

| # | Author | URL | Posted | Views (as of fetch) |
|---|---|---|---|---|
| 1 | @arceyul | x.com/arceyul/status/2056119779463733316 | 2026-05-18 00:08 | 14.7K |
| 2 | @Oluwaphilemon1 | x.com/Oluwaphilemon1/status/2056257571904762319 | 2026-05-18 09:16 | 4.3K |
| 3 | @ruben_kostard | x.com/ruben_kostard/status/2056066010982072453 | 2026-05-17 20:35 | 13.5K |
| 4 | @Oluwaphilemon1 | x.com/Oluwaphilemon1/status/2056282839683907680 | 2026-05-18 10:56 | 1.2K |
| 5 | @ahmedrann | x.com/ahmedrann/status/2050155064589947011 | 2026-05-01 13:07 | 5.6K |
| 6 | @RoundtableSpace | x.com/RoundtableSpace/status/2056068480399757739 | 2026-05-17 20:45 | 54.4K |
| 7 | @_sameerrr0 | x.com/_sameerrr0/status/2056215702043029825 | 2026-05-18 06:30 | 0.7K |
| 8 | @Suryanshti777 | x.com/Suryanshti777/status/2056022182560665602 | 2026-05-17 17:41 | 1.1M |

Captured 2026-05-18 via the authenticated Chrome MCP. Snapshots will go stale — re-verify before quoting numbers.
