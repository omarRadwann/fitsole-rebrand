'use client'

import { useEffect, useRef } from 'react'

type SplitTextProps = {
  children: string
  /** Per-character stagger. Default 22ms. */
  stagger?: number
  /** Initial delay before the cascade starts. Default 120ms. */
  delay?: number
  /** Word break preservation: split into words first, then chars per word. */
  preserveWords?: boolean
  /** Class on the rendered span tree. */
  className?: string
}

/*
 * Per-character (word-aware) reveal — pure CSS animation driven by inline
 * --i variables, so it works even without GSAP and respects reduce-motion
 * via globals.css (which neutralizes the rule).
 *
 * Renders as a single <span>. Wrap in whatever heading/paragraph element the
 * caller wants — that keeps TS unions simple and avoids dynamic-tag pitfalls.
 */
export function SplitText({
  children,
  stagger = 22,
  delay = 120,
  preserveWords = true,
  className = '',
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('split-text--instant')
    }
  }, [])

  const text = children ?? ''
  const tokens = preserveWords ? text.split(/(\s+)/) : [text]

  let counter = 0
  return (
    <span ref={ref} className={`split-text ${className}`} aria-label={text}>
      {tokens.map((tok, ti) => {
        if (/^\s+$/.test(tok)) {
          return (
            <span key={`s-${ti}`} aria-hidden className="split-text__space">
              {tok}
            </span>
          )
        }
        const chars = Array.from(tok)
        return (
          <span key={`w-${ti}`} aria-hidden className="split-text__word">
            {chars.map((ch, ci) => {
              const i = counter++
              const style: React.CSSProperties & Record<string, string | number> = {
                ['--i']: i,
                ['--stagger']: `${stagger}ms`,
                ['--delay']: `${delay}ms`,
              }
              return (
                <span key={`c-${ti}-${ci}`} className="split-text__char" style={style}>
                  {ch}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}
