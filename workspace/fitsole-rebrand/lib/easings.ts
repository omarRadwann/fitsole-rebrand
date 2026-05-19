// Motion tokens — locked in docs/motion-language-system.md.
// Authored for this project; not GSAP defaults.
export const easings = {
  smooth: 'cubic-bezier(0.45, 0, 0.15, 1)',
  dramatic: 'cubic-bezier(0.85, 0, 0.15, 1)',
  snap: 'cubic-bezier(0.32, 0.72, 0, 1)',
} as const

export const durations = {
  micro: 100,
  fast: 200,
  base: 350,
  slow: 600,
  hero: 8000,
} as const

export type EaseToken = keyof typeof easings
export type DurationToken = keyof typeof durations
