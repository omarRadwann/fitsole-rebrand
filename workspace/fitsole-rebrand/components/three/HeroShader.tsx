'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

/*
 * HeroShader — server-safe wrapper.
 *
 * Logic:
 *  1. SSR + first paint: render only the static poster image background.
 *     This guarantees LCP is unaffected by WebGL.
 *  2. After mount: check viewport (>=768px) + reduce-motion.
 *     If OK → mount the WebGL Canvas overlay.
 *     If not → keep the poster.
 *  3. The Canvas sits behind the hero photograph (.hero-photo). As Hero's
 *     4-act scroll cinematography reduces the photo brightness in acts 3-4,
 *     the warm terracotta shader becomes visible through the photo and
 *     around its edges (mix-blend with the existing vignette).
 *
 * Dynamic import keeps three.js out of the initial bundle (code-split chunk).
 */
const HeroShaderClient = dynamic(
  () => import('./HeroShaderClient').then((m) => m.HeroShaderClient),
  { ssr: false },
)

export function HeroShader() {
  const [mountCanvas, setMountCanvas] = useState(false)

  useEffect(() => {
    const decide = () => {
      const wide = window.matchMedia('(min-width: 768px)').matches
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      setMountCanvas(wide && !reduce)
    }
    decide()
    const wideMQ = window.matchMedia('(min-width: 768px)')
    const motionMQ = window.matchMedia('(prefers-reduced-motion: reduce)')
    wideMQ.addEventListener('change', decide)
    motionMQ.addEventListener('change', decide)
    return () => {
      wideMQ.removeEventListener('change', decide)
      motionMQ.removeEventListener('change', decide)
    }
  }, [])

  return (
    <div className="hero-shader" aria-hidden>
      {/* Poster — always present; covered by Canvas on capable surfaces. */}
      <div className="hero-shader__poster" />
      {mountCanvas && <HeroShaderClient />}
    </div>
  )
}
