'use client'

import { useEffect, useRef, useState } from 'react'
import { CairoSkyline3DClient } from './CairoSkyline3DClient'

/*
 * CairoSkyline3DContainer — server-safe wrapper.
 *
 * - Static SVG poster (/brand/pattern-cairo.svg) paints always — even when
 *   the Canvas can't mount, the user sees the Cairo skyline silhouette.
 * - On capable surfaces (desktop + no reduce-motion), the R3F Canvas
 *   layers the Blender-baked 3D skyline on top.
 * - Direct import instead of next/dynamic because next/dynamic + ssr:false
 *   was unreliable under React 19 / Next 15 hot-reload paths — the wrapper
 *   would render but the client-side hydration of mountCanvas state never
 *   landed. Direct import costs a bit of bundle weight but the canvas
 *   reliably mounts.
 */

function decideShouldMount(): boolean {
  if (typeof window === 'undefined') return false
  const wide = window.matchMedia('(min-width: 768px)').matches
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return wide && !reduce
}

export function CairoSkyline3DContainer() {
  const hostRef = useRef<HTMLDivElement>(null)
  // Lazy initializer reads matchMedia synchronously on first client render —
  // the canvas mounts on the first paint without depending on a useEffect
  // turn that proved unreliable under React 19 / Next 15 hot-reload paths.
  const [mountCanvas, setMountCanvas] = useState<boolean>(decideShouldMount)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => setMountCanvas(decideShouldMount())
    // CRITICAL: re-evaluate on mount. The lazy useState initializer ran on
    // SSR (returned false because window is undefined). Without this, the
    // client never flips mountCanvas to true even on capable surfaces.
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

  useEffect(() => {
    if (!mountCanvas) return
    const el = hostRef.current
    if (!el) return
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        // 0 when section top hits the bottom of the viewport,
        // 1 when section bottom passes the top of the viewport.
        const denom = rect.height + vh
        const raw = (vh - rect.top) / denom
        setProgress(Math.min(1, Math.max(0, raw)))
      })
    }
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      cancelAnimationFrame(raf)
    }
  }, [mountCanvas])

  return (
    <div
      ref={hostRef}
      className="relative w-full h-[260px] md:h-[340px] overflow-hidden bg-bg-elevated"
      aria-hidden
    >
      {/* Static poster — same Cairo skyline silhouette as the 2D SVG ornament. */}
      <div
        className="absolute inset-0 pattern-cairo opacity-90"
        style={{ backgroundPosition: 'center 70%' }}
      />
      {mountCanvas && <CairoSkyline3DClient progress={progress} />}
      {/* Editorial caption + fade-to-paper at the bottom for type contrast */}
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, oklch(var(--bg)) 100%)',
        }}
      />
      <p className="absolute left-6 bottom-5 font-mono text-eyebrow tracking-[0.22em] text-fg-muted">
        CAIRO · GREATER METRO · 3 BRANCHES
      </p>
    </div>
  )
}
