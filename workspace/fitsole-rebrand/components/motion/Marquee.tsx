'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type MarqueeProps = {
  children: ReactNode
  /** Pixels per second baseline. Default 40. */
  speed?: number
  /** Pause on hover. Default true. */
  pauseOnHover?: boolean
  /** Aria label for the visually-decorative strip. */
  label?: string
  className?: string
}

/*
 * Editorial marquee with scroll-velocity reactive duration.
 * - Two duplicate tracks for seamless loop.
 * - Speed multiplied by recent scroll velocity (light effect, never above 3×).
 * - Reduce-motion: marquee is static (centered single track).
 */
export function Marquee({ children, speed = 40, pauseOnHover = true, label, className = '' }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      wrap.style.setProperty('--m-duration', '0s')
      return
    }
    // Compute duration from track width to keep px/s constant across viewports.
    const fit = () => {
      const w = track.offsetWidth
      const sec = Math.max(8, Math.min(120, w / speed))
      wrap.style.setProperty('--m-duration', `${sec}s`)
    }
    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(track)

    let lastY = window.scrollY
    let lastT = performance.now()
    let raf = 0
    let mult = 1
    const tick = (t: number) => {
      const dy = window.scrollY - lastY
      const dt = Math.max(16, t - lastT)
      const v = Math.min(3, 1 + Math.abs(dy) / dt * 0.25)
      mult += (v - mult) * 0.12
      wrap.style.setProperty('--m-mult', mult.toFixed(2))
      lastY = window.scrollY
      lastT = t
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [speed])

  return (
    <div
      ref={wrapRef}
      className={`marquee ${pauseOnHover ? 'marquee--pause-on-hover' : ''} ${className}`}
      aria-label={label}
      role={label ? 'marquee' : undefined}
    >
      <div className="marquee__viewport">
        <div ref={trackRef} className="marquee__track">{children}</div>
        <div className="marquee__track marquee__track--copy" aria-hidden>{children}</div>
      </div>
    </div>
  )
}
