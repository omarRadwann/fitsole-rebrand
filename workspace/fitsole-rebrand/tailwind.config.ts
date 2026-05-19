import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'oklch(var(--bg))',
        'bg-elevated': 'oklch(var(--bg-elevated))',
        fg: 'oklch(var(--fg))',
        'fg-muted': 'oklch(var(--fg-muted))',
        rule: 'oklch(var(--rule))',
        accent: 'oklch(var(--accent))',
        sale: 'oklch(var(--sale))',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        h1: 'var(--type-h1)',
        'h1-m': 'var(--type-h1-mobile)',
        h2: 'var(--type-h2)',
        h3: 'var(--type-h3)',
        'body-lg': 'var(--type-body-lg)',
        eyebrow: 'var(--type-eyebrow)',
      },
      maxWidth: {
        content: '60ch',
        editorial: '74rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.45, 0, 0.15, 1)',
        dramatic: 'cubic-bezier(0.85, 0, 0.15, 1)',
        snap: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
    },
  },
  plugins: [],
}
export default config
