'use client'

import { useEffect, useState } from 'react'
import { HeroShaderClient } from './HeroShaderClient'

/*
 * HeroShader — server-safe wrapper for the Cairo Evening fragment shader.
 *
 *  1. Static gradient poster paints ALWAYS — guarantees the warm atmospheric
 *     background regardless of WebGL support, viewport, or motion settings.
 *  2. On the client, after hydration, if the surface is desktop-wide AND
 *     prefers-reduced-motion is OFF, mount the R3F Canvas on top of the
 *     poster. The canvas adds the animated sun-drift + heat-haze layer.
 *
 * Implementation history: we initially used next/dynamic + ssr:false on the
 * HeroShaderClient import. That kept three.js out of the initial bundle but
 * the client-side hydration of the wrapper proved unreliable in dev with
 * React 19 + Next 15 — useState/useEffect never fired and the canvas
 * never appeared. The fix is a direct import: HeroShaderClient stays a
 * client component, but it's imported synchronously. Three.js IS in the
 * initial chunk now (~50 KB GZ), but the Canvas reliably mounts on every
 * page load. We trade a bit of bundle weight for a working signature
 * moment — the right tradeoff for a non-essential WebGL layer that DOES
 * fall back to a perfectly-fine CSS gradient if anything else fails.
 */

function decideShouldMount(): boolean {
  if (typeof window === 'undefined') return false
  const wide = window.matchMedia('(min-width: 768px)').matches
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return wide && !reduce
}

export function HeroShader() {
  const [mountCanvas, setMountCanvas] = useState<boolean>(false)

  useEffect(() => {
    const update = () => setMountCanvas(decideShouldMount())
    update()
    const wideMQ = window.matchMedia('(min-width: 768px)')
    const motionMQ = window.matchMedia('(prefers-reduced-motion: reduce)')
    wideMQ.addEventListener('change', update)
    motionMQ.addEventListener('change', update)
    return () => {
      wideMQ.removeEventListener('change', update)
      motionMQ.removeEventListener('change', update)
    }
  }, [])

  return (
    <div className="hero-shader" aria-hidden>
      <div className="hero-shader__poster" />
      {mountCanvas && <HeroShaderClient />}
    </div>
  )
}
