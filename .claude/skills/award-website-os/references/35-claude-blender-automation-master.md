# Claude Code Blender Automation Master

Claude Code is strong at Blender when the work is scripted, repeatable, and validated.

## Use Claude Code for

- `bpy` script generation
- procedural geometry
- lighting/camera setup
- material systems
- GLB export
- poster render generation
- asset ledger updates
- R3F integration

## Do not use Claude Code for

- claiming visual quality without renders
- expensive handcrafted character art from imagination
- copyrighted asset recreation
- unbounded high-poly scenes

## Standard loop

1. Write `docs/blender-asset-brief.md`.
2. Create or update a Blender Python script.
3. Run Blender in background mode.
4. Export `.glb` and poster.
5. Update `docs/asset-ledger.csv`.
6. Wire GLB into R3F with poster/reduced-motion fallback.
7. Screenshot desktop/mobile/reduced motion.
8. Compress/optimize if over budget.

## Command pattern

```bash
blender -b --python tooling/blender/scripts/procedural_hero_asset.py -- --out public/models/hero-symbol.glb --poster public/posters/hero-symbol.png
```

## Production rule

Blender output is not accepted until it has:

- generated file path
- poster path
- license/rights note
- size budget
- fallback
- screenshot review
