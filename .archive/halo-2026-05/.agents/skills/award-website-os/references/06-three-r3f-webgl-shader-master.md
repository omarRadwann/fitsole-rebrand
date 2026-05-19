# 06 — Three.js / R3F / WebGL / Shader Master

## Mission

Implement 3D and GPU effects that support the concept without ruining performance or accessibility.

## Renderer Decision

### Use R3F if:
- app is React/Next.js
- scene is componentized
- state sync with DOM matters
- model loading and UI integration matter

### Use vanilla Three.js if:
- custom engine/timeline dominates
- React overhead is unnecessary
- scene is isolated

### Use OGL/Pixi/Canvas if:
- lightweight image distortion
- 2D particles
- sprite/filter effects
- no complex scene graph

## R3F Scene Structure

```txt
components/three/
  SceneCanvas.tsx
  Experience.tsx
  CameraRig.tsx
  Lights.tsx
  Model.tsx
  Materials.ts
  useSceneStore.ts
  performance.ts
```

## Canvas Rules

- Do not block LCP text.
- Lazy-load heavy scenes.
- Cap DPR: `[1, 1.5]`.
- Pause when tab hidden.
- Reduce quality on low-power devices.
- Dispose resources.
- Provide fallback.
- Keep DOM content accessible.

## R3F Starter Pattern

```tsx
"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

export function SceneCanvas() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </Canvas>
  )
}
```

## Shader Use Cases

Use shaders for:
- flow field
- reveal masks
- material identity
- data fields
- image distortion
- particles
- liquid/metal/glass
- one hero moment

Avoid:
- unreadable text
- heavy full-screen raymarching on mobile
- random glitch
- overdone RGB split
- effects CSS can do

## Shader Uniform Plan

Every shader needs:
- `uTime`
- `uProgress`
- `uPointer`
- `uResolution`
- `uTexture` if image-based
- `uReducedMotion` if applicable

## Fragment Shader Caution

- Full-screen shaders are expensive.
- Texture lookups multiply cost.
- Transparency is costly.
- Postprocessing stacks can kill mobile.
- Test Safari/iOS.

## DOM/WebGL Sync Pattern

1. Render real DOM image/content.
2. Measure rect.
3. Create WebGL plane.
4. Sync scroll/resize.
5. Apply shader effect.
6. Keep accessible fallback.

Use only when signature interaction requires it.

## Performance Checklist

- file size checked
- draw calls reasonable
- textures <= 1024/2048 as appropriate
- no infinite unbounded particles
- no unnecessary shadows
- no huge postprocessing
- adaptive DPR
- offscreen pause
- mobile fallback
