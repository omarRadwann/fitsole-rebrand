'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import { CairoSkyline3D } from './CairoSkyline3D'

/*
 * Client-only Canvas for the Cairo skyline 3D.
 * - Reads its own scroll-progress against the host section (passed via prop).
 * - Lights are warm tungsten — matches the rebrand's Edison-bulb language.
 * - No postprocessing (single context, low-power).
 */
export function CairoSkyline3DClient({ progress }: { progress: number }) {
  return (
    <Canvas
      orthographic={false}
      camera={{ position: [0, 1.8, 9], fov: 36, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: 'low-power' }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden
    >
      <ambientLight intensity={0.45} color="#f4e1bf" />
      <directionalLight position={[6, 8, 6]} intensity={1.05} color="#ffd9a8" />
      <directionalLight position={[-6, 4, 4]} intensity={0.3} color="#c4754a" />
      <Suspense fallback={null}>
        <CairoSkyline3D progress={progress} />
      </Suspense>
    </Canvas>
  )
}
