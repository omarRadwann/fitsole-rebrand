# 18 — WebGL / 3D Performance Tricks

## Biggest Smart Rule

The fastest 3D is the 3D you do not load until it earns attention.

## Load Strategy

### Critical Hero Text First
Render:
1. semantic hero text
2. CTA
3. layout shell
4. poster image
5. then lazy-load 3D

### Use Poster-to-Canvas Upgrade
Show static poster first. When canvas is ready, fade in.

Benefits:
- protects LCP
- avoids blank hero
- fallback is already designed

## DPR Strategy

Default:
```tsx
<Canvas dpr={[1, 1.5]} />
```

On weak/mobile:
- cap at 1
- disable shadows
- disable postprocessing
- reduce particles
- use poster fallback

## Texture Tricks

- 1024px textures are often enough.
- Use normal maps carefully.
- Avoid 4K unless close-up product inspection requires it.
- Prefer KTX2/Basis where pipeline supports it.
- Remove unused channels.
- Use JPEG/WebP for non-alpha textures.
- Use PNG only when alpha/lossless needed.

## Geometry Tricks

- Use instancing for repeated pieces.
- Bake repeated details into normal maps if possible.
- Remove hidden faces.
- Merge static meshes.
- Keep bevels modest.
- Avoid high-poly imported assets.
- Use LOD only if scene needs distance variation.

## Lighting Tricks

- Bake lighting when possible.
- Avoid too many real-time shadow casters.
- Use contact shadows sparingly.
- Use environment maps for material richness.
- Disable expensive lights on mobile.

## Postprocessing Tricks

Use at most one or two:
- subtle bloom
- subtle vignette
- mild film grain
- depth of field only if controlled

Avoid:
- heavy chromatic aberration
- massive bloom
- stacked effects
- full-screen expensive passes on mobile

## Animation Tricks

- Animate parent groups instead of many children.
- Use shader uniforms for many tiny effects.
- Avoid per-frame React state updates.
- Use refs and imperative loops.
- Pause when document.hidden.
- Use IntersectionObserver to pause offscreen.

## R3F Anti-Patterns

Avoid:
- creating materials/geometries inside render without memoization
- setState in useFrame
- too many canvases
- huge drei dependency usage without need
- shadows everywhere
- loading GLB before text
- no fallback
- no dispose/cleanup
- canvas over important clickable DOM

## Debug Checklist

If FPS drops:
1. disable postprocessing
2. disable shadows
3. lower DPR
4. reduce textures
5. inspect draw calls
6. reduce particles
7. check per-frame JS work
8. check memory leak
9. test mobile Safari
10. replace with poster if not worth it
