'use client'

import { useEffect, useState } from 'react'

type BurstProps = {
  /** When this changes (and is truthy), trigger a burst. */
  trigger: number | string
  /** Origin in viewport coordinates (centerX, centerY). */
  origin: { x: number; y: number } | null
  /** Number of particles. Default 18. */
  count?: number
  /** Max radius particles travel in px. Default 90. */
  radius?: number
  /** Duration in ms. Default 720. */
  duration?: number
  /** Optional ARIA label. Decorative by default. */
  label?: string
}

/*
 * Pure-DOM radial particle burst.
 *
 * - Triggered on `trigger` change.
 * - 18 small terracotta dots radiate from `origin`, quadratic decay.
 * - Fixed-positioned in the viewport so it overlays any layout.
 * - pointer-events: none — never blocks the underlying UI.
 * - Reduce-motion: no burst (we render nothing).
 * - Cleanup: self-removes after `duration` so the DOM doesn't accumulate.
 *
 * Concept tie: when the cart opens, a soft terracotta starburst issues from
 * the cart icon — the same accent that lives in the wordmark's i-dot. The
 * brand "blooms" briefly when a customer takes a buying action.
 */
export function ParticleBurst({
  trigger,
  origin,
  count = 18,
  radius = 90,
  duration = 720,
  label,
}: BurstProps) {
  const [seed, setSeed] = useState<number | null>(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (!trigger || !origin) return
    if (reduceMotion) return
    const s = Date.now()
    setSeed(s)
    const t = setTimeout(() => setSeed(null), duration + 60)
    return () => clearTimeout(t)
  }, [trigger, origin, duration, reduceMotion])

  if (!origin || !seed) return null

  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + (seed % 6.28) * 0.05
    const r = radius * (0.55 + Math.random() * 0.45)
    const dx = Math.cos(angle) * r
    const dy = Math.sin(angle) * r
    const size = 4 + Math.random() * 6
    return { id: `${seed}-${i}`, angle, dx, dy, size }
  })

  return (
    <div
      key={seed}
      aria-label={label}
      aria-hidden={!label}
      style={{
        position: 'fixed',
        left: origin.x,
        top: origin.y,
        width: 0,
        height: 0,
        pointerEvents: 'none',
        zIndex: 60,
      }}
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle-burst__dot"
          style={{
            ['--dx' as never]: `${p.dx.toFixed(1)}px`,
            ['--dy' as never]: `${p.dy.toFixed(1)}px`,
            ['--size' as never]: `${p.size}px`,
            ['--dur' as never]: `${duration}ms`,
          }}
        />
      ))}
    </div>
  )
}
