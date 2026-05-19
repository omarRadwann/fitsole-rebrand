'use client'

import { useEffect, useRef } from 'react'

/*
 * Custom cursor — lerping dot + ring with contextual labels.
 * Concept tie: the cursor adopts shop-floor verbs ("Reserve", "Open", "Add")
 * when over a shoppable target. Targets opt in via data-cursor="<label>".
 *
 * Discipline:
 *  - Hidden on touch / coarse pointers.
 *  - Hidden when prefers-reduced-motion.
 *  - Never blocks pointer events on the page (pointer-events: none).
 *  - SSR-safe (no window access at module scope).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const coarse = window.matchMedia('(pointer: coarse)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (coarse || reduce) return

    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    let mx = -100
    let my = -100
    let dx = -100
    let dy = -100
    let rx = -100
    let ry = -100
    let raf = 0
    let visible = false

    const show = () => {
      if (visible) return
      visible = true
      dot.style.opacity = '1'
      ring.style.opacity = '1'
    }

    const onMove = (e: PointerEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!visible) show()
    }
    const onLeave = () => {
      visible = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }
    const onOver = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]')
      if (t) {
        const text = t.dataset.cursor || ''
        label.textContent = text
        ring.classList.add('cursor-ring--big')
        if (text) ring.classList.add('cursor-ring--labeled')
        else ring.classList.remove('cursor-ring--labeled')
      } else {
        ring.classList.remove('cursor-ring--big')
        ring.classList.remove('cursor-ring--labeled')
        label.textContent = ''
      }
    }
    const onDown = () => ring.classList.add('cursor-ring--press')
    const onUp = () => ring.classList.remove('cursor-ring--press')

    const tick = () => {
      // Dot follows quickly; ring lerps for the "drag behind" feel.
      dx += (mx - dx) * 0.5
      dy += (my - dy) * 0.5
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.documentElement.classList.add('has-custom-cursor')

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="cursor-ring"
        style={{ opacity: 0 }}
      >
        <span ref={labelRef} className="cursor-ring__label" />
      </div>
      <div
        ref={dotRef}
        aria-hidden
        className="cursor-dot"
        style={{ opacity: 0 }}
      />
    </>
  )
}
