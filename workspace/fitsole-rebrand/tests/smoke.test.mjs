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

test('package.json has no 3D dependencies (3D route = None per tech-stack-decision.md)', () => {
  const banned = ['three', '@react-three/fiber', '@react-three/drei', 'gsap']
  for (const dep of banned) {
    assert.ok(!pkg.dependencies?.[dep], `unexpected 3D dep: ${dep}`)
  }
})

test('package.json declares the actually-used motion + a11y deps', () => {
  assert.ok(pkg.dependencies['framer-motion'], 'missing framer-motion')
  assert.ok(pkg.dependencies['@radix-ui/react-popover'], 'missing @radix-ui/react-popover (BranchPin uses it)')
})

test('Hero ships and exports a named function with the signature H1', () => {
  const hero = readFileSync(join(ROOT, 'components', 'Hero.tsx'), 'utf-8')
  assert.ok(hero.includes('export function Hero'), 'Hero must export named function')
  // The H1 is JSX-split across <br /> + <em> for the Cairo terracotta accent on "walk into" —
  // the rendered DOM reads "The shop you can walk into." but the source isn't a single string.
  // Check the constituent words instead.
  for (const phrase of ['The shop you', 'can ', 'walk into.']) {
    assert.ok(hero.includes(phrase), `Hero must contain "${phrase}" as part of the signature H1`)
  }
})

test('Hero respects prefers-reduced-motion', () => {
  const hero = readFileSync(join(ROOT, 'components', 'Hero.tsx'), 'utf-8')
  assert.ok(hero.includes('prefers-reduced-motion'), 'Hero must check prefers-reduced-motion for the slow-pan')
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

test('BranchPin signature interaction component exists and uses Radix Popover', () => {
  const bp = readFileSync(join(ROOT, 'components', 'BranchPin.tsx'), 'utf-8')
  assert.ok(bp.includes("from '@radix-ui/react-popover'"), 'BranchPin must use Radix Popover for accessibility')
  assert.ok(bp.includes('Reserve at'), 'BranchPin must include the Reserve-at-branch CTA')
})

test('no 3D scaffolding remains in the workspace', () => {
  assert.ok(!existsSync(join(ROOT, 'components', 'three')), 'components/three/ must be deleted (3D route = None)')
  assert.ok(!existsSync(join(ROOT, 'public', '3d')), 'public/3d/ must be deleted (no 3D assets)')
})

test('homepage composes all locked sections', () => {
  const page = readFileSync(join(ROOT, 'app', 'page.tsx'), 'utf-8')
  for (const section of ['Hero', 'PickedThisWeek', 'EditorialFeature', 'BrandsIndex', 'Sale', 'Branches', 'FounderNote', 'Newsletter']) {
    assert.ok(page.includes(`<${section}`), `page.tsx must render <${section}>`)
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
