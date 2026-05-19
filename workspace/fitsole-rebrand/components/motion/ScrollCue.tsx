'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Hero' },
  { id: 'picked', label: 'Picked' },
  { id: 'looks', label: 'Looks' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'brands', label: 'Brands' },
  { id: 'sale', label: 'Sale' },
  { id: 'branches', label: 'Branches' },
  { id: 'founder', label: 'Founder' },
  { id: 'newsletter', label: 'Newsletter' },
]

/*
 * Sticky right-edge scroll cue — 01/09 indicator + label of the active section.
 * Pattern carried from the previous moon-level work (Halo's signature element)
 * but tuned editorial instead of luxury: terracotta tick, mono caption, no chrome.
 *
 * Disabled when prefers-reduced-motion (presence intact, scroll trigger removed).
 */
export function ScrollCue() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight
        const total = (document.documentElement.scrollHeight - vh) || 1
        setProgress(Math.min(1, Math.max(0, window.scrollY / total)))

        if (reduce) return
        // Active section = nearest section whose top is at or above the reading line.
        let best = 0
        const readingY = vh * 0.4
        for (let i = 0; i < SECTIONS.length; i++) {
          const sec = document.getElementById(SECTIONS[i].id)
          if (!sec) continue
          const r = sec.getBoundingClientRect()
          if (r.top <= readingY) best = i
        }
        setActiveIdx(best)
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
  }, [])

  const label = SECTIONS[activeIdx]?.label ?? 'Hero'

  return (
    <aside
      className="scroll-cue"
      aria-hidden
      style={{ ['--cue-progress' as never]: progress }}
    >
      <span className="scroll-cue__index font-mono">
        {String(activeIdx + 1).padStart(2, '0')} / {String(SECTIONS.length).padStart(2, '0')}
      </span>
      <span className="scroll-cue__rule" />
      <span className="scroll-cue__label font-mono">{label}</span>
    </aside>
  )
}
