'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type MagneticProps = {
  children: ReactNode
  /** Magnetism strength (0..1). Default 0.32. */
  strength?: number
  /** Active radius in px. Default 120. */
  radius?: number
  /** Wrapper class. */
  className?: string
}

/*
 * Lightweight pointer-magnetism wrapper.
 * - Active only on fine pointers and outside reduce-motion.
 * - Pure RAF + translate3d on a single child wrapper — no GSAP dependency.
 * - Cleans up on unmount.
 */
export function MagneticCTA({
  children,
  strength = 0.32,
  radius = 120,
  className = '',
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (coarse || reduce) return

    let raf = 0
    let tx = 0
    let ty = 0
    let dx = 0
    let dy = 0

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const x = e.clientX - cx
      const y = e.clientY - cy
      const dist = Math.hypot(x, y)
      if (dist < radius) {
        const k = (1 - dist / radius) * strength
        tx = x * k
        ty = y * k
      } else {
        tx = 0
        ty = 0
      }
    }

    const onLeave = () => {
      tx = 0
      ty = 0
    }

    const tick = () => {
      dx += (tx - dx) * 0.18
      dy += (ty - dy) * 0.18
      el.style.transform = `translate3d(${dx.toFixed(2)}px, ${dy.toFixed(2)}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
    }
  }, [strength, radius])

  return (
    <span ref={ref} className={`magnetic ${className}`} style={{ display: 'inline-block', willChange: 'transform' }}>
      {children}
    </span>
  )
}
