'use client'

import { useEffect, useRef, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Translate distance in px. Default 28. */
  y?: number
  /** Delay in ms before motion starts after intersection. Default 0. */
  delay?: number
  /** Wrapper element tag. */
  as?: 'div' | 'section' | 'article' | 'header' | 'aside'
  className?: string
}

/*
 * IntersectionObserver-driven reveal — opacity + small Y-translate when the
 * element enters the viewport. Lighter than ScrollTrigger and works without
 * GSAP at all; the CSS rule in globals.css handles the keyframe.
 *
 * Reduce-motion: instant reveal (no transform).
 */
export function Reveal({ children, y = 28, delay = 0, as = 'div', className = '' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('reveal--in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            ;(e.target as HTMLElement).classList.add('reveal--in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const style: React.CSSProperties & Record<string, string | number> = {
    ['--reveal-y']: `${y}px`,
    ['--reveal-delay']: `${delay}ms`,
  }

  const cls = `reveal ${className}`

  switch (as) {
    case 'section':
      return <section ref={ref as React.RefObject<HTMLElement>} className={cls} style={style}>{children}</section>
    case 'article':
      return <article ref={ref as React.RefObject<HTMLElement>} className={cls} style={style}>{children}</article>
    case 'header':
      return <header ref={ref as React.RefObject<HTMLElement>} className={cls} style={style}>{children}</header>
    case 'aside':
      return <aside ref={ref as React.RefObject<HTMLElement>} className={cls} style={style}>{children}</aside>
    default:
      return <div ref={ref as React.RefObject<HTMLDivElement>} className={cls} style={style}>{children}</div>
  }
}
