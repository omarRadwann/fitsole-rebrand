'use client'

import { Canvas } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { CairoEvening } from './CairoEvening'

/*
 * Client-only WebGL Canvas — mounted by HeroShader only when:
 *  - SSR has completed (useState gate)
 *  - prefers-reduced-motion is OFF
 *  - viewport is desktop-ish (>= 768px)
 * Otherwise the parent renders the static poster image fallback.
 *
 * The Canvas reads --p from the closest .hero-act ancestor so its progress
 * stays in lock-step with the existing hero scroll cinematography.
 */
export function HeroShaderClient() {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    let raf = 0
    const tick = () => {
      // Read --p set by Hero.tsx on its closest hero-act root.
      const root = document.querySelector('.hero-act') as HTMLElement | null
      if (root) {
        const v = parseFloat(root.style.getPropertyValue('--p') || '0') || 0
        setProgress(v)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    rafRef.current = raf
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <Canvas
      orthographic
      dpr={[1, 1.5]}
      gl={{
        antialias: false,
        powerPreference: 'low-power',
        preserveDrawingBuffer: false,
      }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      aria-hidden
    >
      <CairoEvening progress={progress} />
    </Canvas>
  )
}
