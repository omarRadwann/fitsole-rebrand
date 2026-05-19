import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf-8'))

test('package.json has all required scripts', () => {
  const required = ['dev', 'build', 'typecheck', 'lint', 'test', 'screenshots', 'analyze:assets', 'design:readiness']
  for (const s of required) {
    assert.ok(pkg.scripts[s], `missing script: ${s}`)
  }
})

test('package.json declares Full-Lift motion deps', () => {
  // Full Lift 2026-05-20: motion language deepened via gsap + framer-motion.
  // Documented in docs/tech-stack-decision.md and docs/motion-language-system.md.
  assert.ok(pkg.dependencies['framer-motion'], 'missing framer-motion (used by Radix slide animations)')
  assert.ok(pkg.dependencies['gsap'], 'missing gsap (Full Lift motion library)')
})

test('package.json declares the a11y deps', () => {
  assert.ok(pkg.dependencies['@radix-ui/react-popover'], 'missing @radix-ui/react-popover (BranchPin uses it)')
  assert.ok(pkg.dependencies['@radix-ui/react-dialog'], 'missing @radix-ui/react-dialog (CartDrawer uses it)')
})

test('Hero ships and exports a named function with the signature H1', () => {
  const hero = readFileSync(join(ROOT, 'components', 'Hero.tsx'), 'utf-8')
  assert.ok(hero.includes('export function Hero'), 'Hero must export named function')
  // The H1 is JSX-split with <SplitText> across multiple spans for the kinetic typography reveal.
  // Check the constituent words instead.
  for (const phrase of ['The shop you', 'can ', 'walk into.']) {
    assert.ok(hero.includes(phrase), `Hero must contain "${phrase}" as part of the signature H1`)
  }
})

test('Hero respects prefers-reduced-motion', () => {
  const hero = readFileSync(join(ROOT, 'components', 'Hero.tsx'), 'utf-8')
  assert.ok(hero.includes('prefers-reduced-motion'), 'Hero must check prefers-reduced-motion for the scroll-act effect')
})

test('Hero uses 4-act scroll cinematography (hero-act + --p progress)', () => {
  const hero = readFileSync(join(ROOT, 'components', 'Hero.tsx'), 'utf-8')
  assert.ok(hero.includes('hero-act'), 'Hero must declare the hero-act class for scroll-tied transforms')
  assert.ok(hero.match(/setProperty\(['"]--p['"]/), 'Hero must drive the --p progress token (4-act)')
})

test('Hero kinetic typography uses SplitText', () => {
  const hero = readFileSync(join(ROOT, 'components', 'Hero.tsx'), 'utf-8')
  assert.ok(hero.includes('SplitText'), 'Hero H1 must use SplitText for the kinetic reveal')
})

test('globals.css declares the Cairo terracotta accent token', () => {
  const css = readFileSync(join(ROOT, 'app', 'globals.css'), 'utf-8')
  assert.ok(css.includes('--accent:'), 'must declare --accent token')
  assert.ok(css.match(/--accent:\s*54%/), 'accent must be the locked Cairo terracotta lightness (54%)')
})

test('globals.css has a global reduced-motion block', () => {
  const css = readFileSync(join(ROOT, 'app', 'globals.css'), 'utf-8')
  assert.ok(css.includes('prefers-reduced-motion'), 'globals.css must include reduced-motion rule')
})

test('globals.css ships the Full-Lift motion layer', () => {
  const css = readFileSync(join(ROOT, 'app', 'globals.css'), 'utf-8')
  for (const cls of ['.cursor-dot', '.cursor-ring', '.split-text', '.reveal', '.scroll-cue', '.hero-act', '.marquee']) {
    assert.ok(css.includes(cls), `globals.css must include ${cls} (Full Lift motion layer)`)
  }
  assert.ok(css.includes('@view-transition'), 'globals.css must declare @view-transition for cross-page morphs')
})

test('BranchPin signature interaction component exists and uses Radix Popover', () => {
  const bp = readFileSync(join(ROOT, 'components', 'BranchPin.tsx'), 'utf-8')
  assert.ok(bp.includes("from '@radix-ui/react-popover'"), 'BranchPin must use Radix Popover for accessibility')
  assert.ok(bp.includes('Reserve at'), 'BranchPin must include the Reserve-at-branch CTA')
})

test('motion components exist (CustomCursor, SplitText, Reveal, ScrollCue, MagneticCTA, PageTransition, Marquee)', () => {
  for (const f of ['CustomCursor.tsx', 'SplitText.tsx', 'Reveal.tsx', 'ScrollCue.tsx', 'MagneticCTA.tsx', 'PageTransition.tsx', 'Marquee.tsx']) {
    assert.ok(existsSync(join(ROOT, 'components', 'motion', f)), `missing motion component: ${f}`)
  }
})

test('layout wires the Full-Lift motion shell', () => {
  const layout = readFileSync(join(ROOT, 'app', 'layout.tsx'), 'utf-8')
  for (const sym of ['CustomCursor', 'PageTransition', 'ScrollCue']) {
    assert.ok(layout.includes(sym), `layout.tsx must mount <${sym}>`)
  }
})

test('homepage composes all locked sections', () => {
  const page = readFileSync(join(ROOT, 'app', 'page.tsx'), 'utf-8')
  for (const section of ['Hero', 'PickedThisWeek', 'EditorialFeature', 'BrandsIndex', 'Sale', 'Branches', 'FounderNote', 'Newsletter']) {
    assert.ok(page.includes(`<${section}`) || page.includes(`<${section}/>`), `page.tsx must render <${section}>`)
  }
})

test('homepage section IDs match ScrollCue contract', () => {
  const page = readFileSync(join(ROOT, 'app', 'page.tsx'), 'utf-8')
  for (const id of ['picked', 'looks', 'editorial', 'brands', 'sale', 'branches', 'founder', 'newsletter']) {
    assert.ok(page.includes(`id="${id}"`), `page.tsx must include id="${id}" for ScrollCue tracking`)
  }
})

test('Footer includes the locked voice line', () => {
  const footer = readFileSync(join(ROOT, 'components', 'Footer.tsx'), 'utf-8')
  assert.ok(footer.includes('A real shop with a website. Cairo, Egypt.'), 'Footer must include the locked voice line')
})

test('404 page uses the concept-tied copy', () => {
  const nf = readFileSync(join(ROOT, 'app', 'not-found.tsx'), 'utf-8')
  assert.ok(nf.includes("This shelf"), '404 must use the locked "This shelf\'s empty." headline')
})
