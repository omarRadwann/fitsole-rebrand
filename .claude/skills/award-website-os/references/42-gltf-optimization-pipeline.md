# 42 — GLB / glTF Optimization Pipeline

## Purpose

Every 3D asset used on the web should be treated like production code: source known, rights known, size budgeted, optimized, and tested.

## Preferred format

Use `.glb` for packaged binary assets. Use `.gltf` only when the project intentionally separates buffers/textures.

## Optimization checklist

1. Remove unused geometry, cameras, lights, and materials.
2. Reduce mesh complexity before compression.
3. Bake or resize textures for the target viewport.
4. Use Meshopt or Draco compression when compatible with the loader path.
5. Generate a poster fallback.
6. Lazy-load the model.
7. Test on mobile and reduced-motion.
8. Record final size in `docs/webgl-3d-budget.md`.

## Command pattern

```bash
gltf-transform inspect input.glb
gltf-transform optimize input.glb output.glb --compress meshopt
```

## Budget defaults

- Hero GLB target: under 2.5 MB when possible.
- Total critical asset payload target: under 5 MB when possible.
- Desktop target: 55-60 FPS.
- Mid mobile target: 30+ FPS or static fallback.

## No-ship conditions

- Asset rights unclear.
- No fallback.
- No documented size.
- Model blocks page content.
- Mobile performance is untested or visibly weak.
