// Tokens to be replaced per project from docs/motion-language-system.md.
export const easings = {
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  dramatic: 'cubic-bezier(0.16, 1, 0.3, 1)',
  snap: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const

export const durations = {
  micro: 100,
  fast: 200,
  base: 350,
  slow: 600,
  hero: 900,
} as const
