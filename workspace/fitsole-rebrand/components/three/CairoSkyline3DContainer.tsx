'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

/*
 * CairoSkyline3DContainer — server-safe wrapper.
 *
 * - Wraps the Canvas in next/dynamic + ssr:false (keeps three.js in its own chunk).
 * - Falls back to a static SVG poster on mobile (≤768px) or prefers-reduced-motion.
 *   Poster image is the same /brand/pattern-cairo.svg already in the footer —
 *   so the 3D and 2D versions read as the same scene at the same moment.
 * - IntersectionObserver computes "section progress" (0..1) as the user scrolls
 *   through the host element, and passes it to the 3D scene as the rotation bias.
 */
const CairoSkyline3DClient = dynamic(
  () => import('./CairoSkyline3DClient').then((m) => m.CairoSkyline3DClient),
  { ssr: false },
)

export function CairoSkyline3DContainer() {
  const hostRef = useRef<HTMLDivElement>(null)
  const [mountCanvas, setMountCanvas] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 768px)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setMountCanvas(wide && !reduce)
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
