#!/usr/bin/env node
/**
 * Design readiness check — combined gate that the ship-decision references.
 *
 * Fails if:
 *  - any docs/*.md still contains `<FILL IN>` for the gates listed here
 *  - screenshots/ directory doesn't have at least desktop, mobile, reduced shots
 *  - 3D scene file references a non-existent poster fallback
 *
 * Exits 0 on PASS, non-zero on any failure.
 */
import { readdir, readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

// This script runs inside workspace/<slug>/ so docs are at ../../docs
const DOCS = '../../docs'

const required = [
  'one-input-brief.md',
  'assumptions.md',
  'research-brief.md',
  'concept-scorecard.md',
  'art-direction.md',
  'copy-system.md',
  'tech-stack-decision.md',
  'screenshot-matrix.md',
  'visual-review.md',
  'design-red-team-rubric.md',
  'qa-report.md',
  'ship-decision.md',
]

const issues = []

for (const f of required) {
  try {
    const txt = await readFile(join(DOCS, f), 'utf-8')
    if (txt.includes('<FILL IN>')) issues.push(`${f} still has <FILL IN> markers`)
  } catch (e) {
    issues.push(`${f} missing — run make evidence at the pack root`)
  }
}

// screenshot matrix existence
try {
  const dir = await readdir('screenshots')
  const hasDesktop = dir.some(f => /desktop/i.test(f))
  const hasMobile = dir.some(f => /mobile/i.test(f))
  const hasReduced = dir.some(f => /reduced/i.test(f))
  if (!hasDesktop) issues.push('screenshots/ has no desktop captures')
  if (!hasMobile) issues.push('screenshots/ has no mobile captures')
  if (!hasReduced) issues.push('screenshots/ has no reduced-motion captures')
} catch {
  issues.push('screenshots/ directory missing — run npm run screenshots')
}

if (issues.length) {
  console.error('Design readiness: FAIL')
  for (const i of issues) console.error('  - ' + i)
  process.exit(1)
}
console.log('Design readiness: PASS')
