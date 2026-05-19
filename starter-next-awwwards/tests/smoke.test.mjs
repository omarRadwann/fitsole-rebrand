import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkgPath = join(__dirname, '..', 'package.json')

test('package.json has all required scripts', () => {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
  const required = ['dev', 'build', 'typecheck', 'lint', 'test', 'screenshots', 'analyze:assets', 'design:readiness']
  for (const s of required) {
    assert.ok(pkg.scripts[s], `missing script: ${s}`)
  }
})

test('package.json has 3D and motion deps', () => {
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
  assert.ok(pkg.dependencies['@react-three/fiber'], 'missing @react-three/fiber')
  assert.ok(pkg.dependencies['gsap'], 'missing gsap')
  assert.ok(pkg.dependencies['three'], 'missing three')
})

test('starter ships a hero component', () => {
  const heroPath = join(__dirname, '..', 'components', 'Hero.tsx')
  const hero = readFileSync(heroPath, 'utf-8')
  assert.ok(hero.includes('export function Hero'), 'Hero component must export named function')
})

test('scene has reduced-motion fallback', () => {
  const scenePath = join(__dirname, '..', 'components', 'three', 'Scene.tsx')
  const scene = readFileSync(scenePath, 'utf-8')
  assert.ok(scene.includes('prefers-reduced-motion'), 'Scene must check prefers-reduced-motion')
})
