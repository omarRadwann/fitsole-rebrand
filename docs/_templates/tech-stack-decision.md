# Tech Stack Decision

The decision is binding for the project. Changes after this point require re-running build / typecheck / lint / screenshots gates.

See `.claude/skills/award-website-os/references/29-smart-dependency-stack-decisions.md` and `.claude/skills/award-website-os/references/40-spline-vs-blender-claude-decision-matrix.md`.

## Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | <FILL IN — Next.js / Astro / SvelteKit / vanilla> |  |
| Language | <FILL IN — TypeScript> |  |
| Styling | <FILL IN — Tailwind / CSS modules / vanilla extract> |  |
| Component primitives | <FILL IN — shadcn / custom / Radix> |  |
| Forms | <FILL IN> |  |
| Analytics | <FILL IN — privacy-respecting choice> |  |
| Hosting | <FILL IN> |  |
| CMS (if any) | <FILL IN — Sanity / Contentful / file-based> |  |

## Motion stack

| Layer | Choice | Reason |
|---|---|---|
| CSS / Framer Motion | <FILL IN> |  |
| GSAP | <FILL IN — only if timeline / scroll choreography is needed> |  |
| Theatre.js | <FILL IN — only if non-trivial scene animation> |  |

## 3D route

Pick exactly one:

- [ ] None (static / 2D illustration only)
- [ ] CSS / SVG illusion of 3D
- [ ] Lightweight shader (OGL / Pixi)
- [ ] R3F scene with GLB
- [ ] Vanilla Three.js (isolated scene)
- [ ] Spline scene
- [ ] Blender procedural → GLB
- [ ] Hybrid (specify)

Justification (must answer all three):
1. Why is 3D necessary for this site's concept?
2. What does 3D do that 2D / video / illustration could not?
3. What is the cost (KB, GPU, mobile risk) and is it earned?

If any of the three is weak, return to "None".

Fallback: see `web-native-3d-pipeline.md` and `webgl-3d-budget.md`.

## Build / QA commands the starter must support

- `npm run dev`
- `npm run build`
- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run screenshots`
- `npm run analyze:assets`
- `npm run design:readiness`

## Hosting and deploy

- Provider: <FILL IN>
- Domain: <FILL IN — registrar, DNS plan>
- Preview deploy strategy: <FILL IN>
- Production deploy: requires user approval (see `SOURCE_OF_TRUTH.md`)

## Risk register

| # | Risk | Mitigation | Owner |
|---|---|---|---|
| 1 | <FILL IN — e.g. WebGL fps on mid-tier mobile> | <FILL IN> | <FILL IN> |
| 2 |  |  |  |

## Rejected options

What was considered but not chosen, and why:

- <FILL IN>
- <FILL IN>

## Decision freeze date

<FILL IN — date after which any stack change triggers a re-run of build / typecheck / lint gates>
