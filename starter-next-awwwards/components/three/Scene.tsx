'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'

/**
 * Replace this stub with the concept-tied 3D scene defined in:
 *   docs/web-native-3d-pipeline.md
 *   docs/webgl-3d-budget.md
 *   docs/signature-interaction-spec.md
 *
 * Hard rules from the OS:
 *  - Reduced-motion → render poster image only (no canvas).
 *  - Mobile policy per webgl-3d-budget.md (same / downgraded / poster-only).
 *  - Total payload ≤ 2 MB, scene paint ≤ 2s on 4G fast.
 */
export function Scene() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(m.matches)
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    m.addEventListener('change', h)
    return () => m.removeEventListener('change', h)
  }, [])

  if (reducedMotion) {
    return (
      <div className="w-full h-[60vh] grid place-items-center">
        {/* TODO: replace with real poster from public/images/hero-poster.webp */}
        <p className="text-muted text-sm">[3D poster fallback — see web-native-3d-pipeline.md]</p>
      </div>
    )
  }

  return (
    <div className="w-full h-[60vh]">
      <Canvas dpr={[1, 1.5]} frameloop="demand" camera={{ position: [0, 0, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 96, 32]} />
            <meshStandardMaterial color="#888" roughness={0.4} metalness={0.6} />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  )
}
