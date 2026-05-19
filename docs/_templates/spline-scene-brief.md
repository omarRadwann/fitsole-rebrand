# Spline Scene Brief

Fill this only if Spline is the chosen 3D route in `tech-stack-decision.md`. See `.claude/skills/award-website-os/references/40-spline-vs-blender-claude-decision-matrix.md` and `41-spline-claude-collab-protocol.md`.

## Why Spline (not R3F, not Blender→GLB)

<FILL IN — must address: faster iteration, designer-led, no custom shaders required. If any of those is false, reconsider route.>

## Scene file

- Source URL or path: <FILL IN>
- Export path: <FILL IN — spline web embed / GLB export / runtime API>

## Scene description

<FILL IN — what's in the scene; cameras; lights; primary objects; interactions>

## Interactions

- Camera behavior on scroll / hover: <FILL IN>
- Object reactivity: <FILL IN>
- State the scene exposes to the page: <FILL IN>

## Optimization plan

- Polygon target: <FILL IN — under 100k visible tris>
- Texture compression: <FILL IN — KTX2 / Basis>
- Loading strategy: <FILL IN — Suspense / progressive>
- Mobile policy: <FILL IN — same / downgraded / poster only>

## Static poster

- Captured how: <FILL IN — screenshot in Spline editor / rendered frame / dedicated still>
- Path: <FILL IN>
- Weight: <FILL IN — ≤ 350 KB>

## Reduced-motion path

<FILL IN — when prefers-reduced-motion is true, show poster + accessible DOM hero>

## Rights and license

- Created in account: <FILL IN>
- Plan covers commercial use: <FILL IN — yes / no>
- Custom 3D objects: <FILL IN — sourced where; rights confirmed>

## Acceptance criteria

- [ ] Scene paints within 2s on mid-tier mobile.
- [ ] 60fps desktop, 30fps+ mobile (or downgraded).
- [ ] Poster fallback verified.
- [ ] Reduced-motion path verified.
- [ ] Real DOM content accessible behind / beside the scene.
- [ ] Memory stable over 60s idle.

## Known Spline-specific risks

- Hosted runtime fetch latency on first paint.
- Editor edits invalidating optimization choices.
- Spline runtime version drift between dev and prod.

Mitigations: <FILL IN>
