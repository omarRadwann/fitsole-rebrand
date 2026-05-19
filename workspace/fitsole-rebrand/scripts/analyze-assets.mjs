#!/usr/bin/env node
/**
 * Asset budget audit.
 *
 * Reads .next/app-build-manifest.json (the truth source for what ships per route)
 * and sums gzipped sizes — matching Next.js' "First Load JS" display.
 *
 * Also walks public/ for user-supplied assets (3D, images, posters).
 *
 * Exits non-zero if any category exceeds budget.
 * Budgets in docs/webgl-3d-budget.md.
 */
import { readdir, stat, readFile, access } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import { gzipSync } from 'node:zlib'

const BUDGETS_KB_GZIPPED = {
  '3d-glb': 1200,      // 3D models are already compressed (Draco)
  '3d-textures': 800,  // KTX2 / Basis already compressed
  'poster': 350,       // image, already compressed
  'hero-images': 800,  // image, already compressed
  'js-bundle': 250,    // First-Load JS gzipped
  'css': 50,           // CSS gzipped
}

async function walk(dir) {
  const out = []
  try {
    for (const e of await readdir(dir, { withFileTypes: true })) {
      const p = join(dir, e.name)
      if (e.isDirectory()) out.push(...await walk(p))
      else out.push(p)
    }
  } catch { /* dir missing is OK */ }
  return out
}

async function rawSize(file) {
  try { return (await stat(file)).size } catch { return 0 }
}

async function gzippedSize(file) {
  try {
    const buf = await readFile(file)
    return gzipSync(buf).length
  } catch { return 0 }
}

// --- 1. Walk public/ for user-supplied assets (raw — already compressed formats) ---
const publicFiles = await walk('public')
const buckets = { '3d-glb': 0, '3d-textures': 0, 'poster': 0, 'hero-images': 0, 'js-bundle': 0, 'css': 0, 'other': 0 }

for (const f of publicFiles) {
  const sz = await rawSize(f)
  const ext = extname(f).toLowerCase()
  const b = basename(f).toLowerCase()
  if (ext === '.glb' || ext === '.gltf') buckets['3d-glb'] += sz
  else if (f.includes('public/3d') && ['.ktx2', '.basis', '.webp', '.avif'].includes(ext)) buckets['3d-textures'] += sz
  else if (b.includes('poster') && ['.webp', '.avif', '.png', '.jpg'].includes(ext)) buckets['poster'] += sz
  else if ((f.includes('public/images') || b.includes('hero')) && ['.webp', '.avif', '.jpg', '.png'].includes(ext)) buckets['hero-images'] += sz
  else buckets['other'] += sz
}

// --- 2. Parse Next.js app-build-manifest.json for the home page route, gzip-measure ---
let manifestRead = false
try {
  await access('.next/app-build-manifest.json')
  const appManifest = JSON.parse(await readFile('.next/app-build-manifest.json', 'utf-8'))
  const homeFiles = appManifest.pages?.['/page'] || []
  let jsTotal = 0, cssTotal = 0
  for (const rel of homeFiles) {
    const abs = join('.next', rel)
    const sz = await gzippedSize(abs)
    if (rel.endsWith('.js')) jsTotal += sz
    else if (rel.endsWith('.css')) cssTotal += sz
  }
  buckets['js-bundle'] = jsTotal
  buckets['css'] = cssTotal
  manifestRead = true
} catch {
  // No manifest yet → can't measure. Report 0 and warn.
}

console.log(`Asset weights (KB)${manifestRead ? ' — gzipped, from app-build-manifest.json' : ''}:`)
let fail = false
for (const [k, bytes] of Object.entries(buckets)) {
  const kb = Math.round(bytes / 1024)
  const budget = BUDGETS_KB_GZIPPED[k]
  if (budget !== undefined) {
    const ok = kb <= budget
    console.log(`  ${ok ? '✓' : '✗'} ${k}: ${kb} KB (budget ${budget})`)
    if (!ok) fail = true
  } else if (k === 'other' && kb > 0) {
    console.log(`    ${k}: ${kb} KB`)
  }
}

if (!manifestRead) {
  console.log('\n  WARN: run `npm run build` first for accurate js-bundle / css measurement.')
}

if (fail) {
  console.error('\nAsset budget exceeded. See docs/webgl-3d-budget.md.')
  process.exit(1)
}
console.log('\nAll asset budgets within target.')
