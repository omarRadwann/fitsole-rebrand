#!/usr/bin/env node
/**
 * Playwright screenshot capture for every viewport × state combination
 * required by docs/screenshot-matrix.md.
 *
 * Usage:
 *   npm run dev   # in another terminal
 *   npm run screenshots
 *
 * Outputs to ./screenshots/ — referenced from docs/screenshot-matrix.md.
 */
import { chromium, devices } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

const BASE = process.env.PREVIEW_URL || 'http://localhost:3000'
const OUT = './screenshots'
await mkdir(OUT, { recursive: true })

const matrix = [
  { name: 'desktop-1920', viewport: { width: 1920, height: 1080 }, reducedMotion: 'no-preference' },
  { name: 'desktop-1440', viewport: { width: 1440, height: 900 }, reducedMotion: 'no-preference' },
  { name: 'tablet-1024', viewport: { width: 1024, height: 768 }, reducedMotion: 'no-preference' },
  { name: 'mobile-390', ...devices['iPhone 14'], reducedMotion: 'no-preference' },
  { name: 'mobile-360', viewport: { width: 360, height: 740 }, reducedMotion: 'no-preference' },
  { name: 'reduced-desktop', viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' },
  { name: 'reduced-mobile', ...devices['iPhone 14'], reducedMotion: 'reduce' },
]

const pages = ['/', '/404', '/products/adidas-handball-spezial']

const browser = await chromium.launch()
for (const m of matrix) {
  const context = await browser.newContext({
    viewport: m.viewport,
    userAgent: m.userAgent,
    deviceScaleFactor: m.deviceScaleFactor,
    isMobile: m.isMobile,
    hasTouch: m.hasTouch,
    reducedMotion: m.reducedMotion,
  })
  const page = await context.newPage()
  for (const p of pages) {
    const url = BASE + p
    try {
      await page.goto(url, { waitUntil: 'load', timeout: 30000 })
      await page.waitForLoadState('domcontentloaded')
      try {
        await page.waitForLoadState('networkidle', { timeout: 4000 })
      } catch {
        /* fall through */
      }
      // Wait for all images to fully decode/render before capture
      await page.evaluate(async () => {
        await Promise.all(
          Array.from(document.images).map((img) =>
            img.complete && img.naturalWidth > 0
              ? Promise.resolve()
              : new Promise((res) => {
                  img.addEventListener('load', res, { once: true })
                  img.addEventListener('error', res, { once: true })
                  setTimeout(res, 5000)
                })
          )
        )
      })
      // Hold for entrance animations to settle (max delay 520ms + 900ms duration = 1420ms)
      await page.waitForTimeout(1800)
      const slug = (p === '/' ? 'home' : p.replace(/\//g, '-')).replace(/^-+/, '')
      const fname = `${OUT}/${slug}__${m.name}.png`
      await page.screenshot({ path: fname, fullPage: true })
      console.log(`✓ ${fname}`)
    } catch (e) {
      console.error(`✗ ${url} on ${m.name}: ${e.message}`)
      process.exitCode = 1
    }
  }
  await context.close()
}
await browser.close()
