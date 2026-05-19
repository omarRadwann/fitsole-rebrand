# 63 — Webapp Experience Patterns

For projects that are not marketing sites but **app-shaped experiences** — dashboards, configurators, design tools, viewers, planners, calculators. The taste rubric still applies, but the patterns are different.

## Webapp vs marketing site

| Dimension | Marketing site | Webapp |
|---|---|---|
| Primary goal | Conversion | Throughput / task success |
| Time-to-value | < 5 seconds | Inside the first task |
| Visual ambition | Above-the-fold | First useful state |
| Motion | Storytelling | Confirmation + spatial continuity |
| Content density | Sparse, editorial | Dense, scannable |
| Above-the-fold | Hero | Empty/seeded state |
| Failure mode | Looks generic | Feels slow or unclear |

If the project is webapp-shaped, swap "hero" for "first useful state" everywhere in the workflow.

## The first-useful-state principle

A webapp's "hero" is its **first useful state**. Open the app cold and ask:

1. Is it immediately clear what this thing does?
2. Is there a non-empty default state that demonstrates value without forcing setup?
3. Is the next action obvious from where the eye lands?

If any answer is no, the first state needs work before any other section.

## Seeded vs empty vs onboarded

| Strategy | When to use | Risk |
|---|---|---|
| Seeded sample data | Demos, configurators, viewers | User mistakes sample for their own work |
| Smart empty state | When the user must commit data | Looks dead on first load |
| Guided onboarding | Genuinely complex tools | Adds friction before value |

Default to **seeded sample** with a clear "this is example data" affordance, plus a single primary action to start their own.

## Spatial continuity

A webapp lives or dies on whether the user keeps their mental map between states. The strongest webapps preserve **position, scale, and identity** across transitions:

- An item the user just clicked should appear to *be* the next view, not be replaced by it. Use shared-element or FLIP transitions for primary navigations.
- Modal/drawer overlays should slide from where the trigger was, not from a default edge.
- Loading states should occupy the same shape as the loaded content (skeletons over spinners).
- Errors should appear near their cause, not in a global toast (unless they apply globally).

When position/scale/identity are preserved, motion does the work of explanation. When they aren't, every transition costs the user a re-orientation.

## Density without clutter

Senior webapps run high density without feeling cluttered. The patterns:

- **One dominant scale** per surface. Most of the type lives at one size; everything else is hierarchy.
- **Rules over decoration**. Hairlines and whitespace separate groups; cards/shadows/borders are reserved for objects the user can act on.
- **Affordance through state, not chrome**. Hover/focus/active reveal interactivity; resting state stays quiet.
- **Aligned to a small column grid** (often 12 cols on desktop, 4 on mobile), but with type aligned to a finer baseline (4px or 8px).

## Webapp-specific motion

| Job | Pattern | Duration |
|---|---|---|
| Confirm input | Subtle color/scale on commit | 100–200ms |
| Reveal new object | Slide+fade from origin | 250–400ms |
| Reposition existing object | FLIP / spring | 300–500ms |
| Heavy state change (route, mode) | Shared-element + dimming | 400–600ms |
| Background data updates | Opacity-only crossfade | 150ms |

Webapp motion is shorter than marketing motion. Long dramatic eases that work on a hero feel sluggish in a tool.

## Performance budget for webapps

| Metric | Target |
|---|---|
| First useful state visible | < 1.5s on 3G fast |
| Input → visible response | < 100ms |
| Heavy view transition | < 500ms |
| Frame budget during interaction | 16ms (60fps) or 8ms (120fps) |
| Memory ceiling on mobile | < 250MB JS heap |

Webapps fail performance gates marketing sites get away with. Lazy-load aggressively, virtualize lists past ~200 items, and defer non-critical workers.

## When 3D belongs in a webapp

3D in a webapp earns its place only when **the data is genuinely spatial** (architecture, products, terrain, networks, molecules) or **the interaction model is genuinely spatial** (configurator, viewer). 3D as decoration in a tool is worse than in a marketing site — it slows the user's actual work.

## The webapp ship test

Before calling a webapp done, run the **fresh-user task test**:

1. Open the app in an incognito window.
2. Without reading any documentation, attempt the primary task.
3. Time it.

If a non-trivial percentage of users would fail or take more than 2× your target time, the design is not done — even if the visual taste is high. For a webapp, task success **is** the taste rubric.

## Doc additions when project is webapp-shaped

Add to `docs/`:

- `webapp-first-state.md` — what the seeded/empty/onboarded default is.
- `webapp-task-flows.md` — the 3–5 primary tasks and their target times.
- `webapp-state-map.md` — the views and transitions, with spatial-continuity decisions.
- `webapp-density-system.md` — type scale, grid, hairline rules, affordance rules.

These supplement (not replace) the marketing-site evidence docs.
