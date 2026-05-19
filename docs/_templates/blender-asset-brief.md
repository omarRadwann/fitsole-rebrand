# Blender Asset Brief

Fill this only if Blender is part of the asset pipeline (procedural GLB, baked lighting, poster renders). See `.claude/skills/award-website-os/references/05-blender-claude-production-master.md` and `42-gltf-optimization-pipeline.md`.

## Asset list

For each Blender-produced asset:

| Asset name | Type | Used for | Output format | Target weight |
|---|---|---|---|---|
| <FILL IN> | hero GLB / poster render / baked texture | <FILL IN> | <FILL IN — GLB / WebP / KTX2> | <FILL IN — KB> |

## Source files

- Blend file path: <FILL IN>
- Git LFS / external storage: <FILL IN>
- Camera presets named: <FILL IN>
- Render layers / collections used: <FILL IN>

## Modeling decisions

- Topology budget: <FILL IN — under 50k tris hero / under 10k tris mobile-runtime>
- LODs needed: <FILL IN — yes / no; if yes, which thresholds>
- Modifiers applied vs preserved: <FILL IN>

## Materials

- Renderer used for poster: <FILL IN — Cycles / Eevee>
- PBR maps baked for runtime: <FILL IN — basecolor / normal / orm>
- Texture sizes: <FILL IN — 2k hero / 1k tablet / 512 mobile>
- Compression: <FILL IN — KTX2 / Basis / WebP>

## Lighting

- Lighting setup (HDRI / 3-point / spot / area): <FILL IN>
- Baked vs runtime: <FILL IN>
- HDRI source and rights: <FILL IN>

## Export pipeline

```
Blender → glTF/GLB exporter
       → gltf-transform (Draco/Meshopt + KTX2)
       → final asset in /public/3d/
```

- Draco compression level: <FILL IN — 7 typical>
- KTX2 mode: <FILL IN — UASTC / ETC1S>
- Final GLB size: <FILL IN — KB>

## Poster renders

- Camera frame used: <FILL IN>
- Resolution: <FILL IN — 2x hero size>
- Output format: <FILL IN — WebP / AVIF>
- Final weight: <FILL IN — ≤ 350 KB>

## Rights

- Custom-modeled: <FILL IN — yes/no>
- Source meshes / kits used: <FILL IN — with licenses>
- HDRI license: <FILL IN>
- Texture sources: <FILL IN — with licenses>

All of the above must also appear in `asset-ledger.csv`.

## Acceptance criteria

- [ ] Final GLB ≤ target weight in `webgl-3d-budget.md`.
- [ ] Visual parity between Cycles poster and runtime appearance is acceptable.
- [ ] No source files committed without LFS or external link.
- [ ] All textures / HDRIs are licensed for commercial use.
- [ ] Poster fallback exists and is referenced from `web-native-3d-pipeline.md`.

## Risks

<FILL IN>
