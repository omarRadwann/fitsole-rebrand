import { Wordmark } from '@/components/brand/Wordmark'

/*
 * Orchestrated loading sequence — Next.js App Router renders this during
 * server-component data fetching and route segment loading. It's not the
 * first-paint preloader (that lives in layout.tsx via metadata + SSR), but
 * a graceful in-route fallback when /products/[slug] or /journal/[slug] are
 * still resolving.
 *
 * Visual: terracotta dot pulse + wordmark per-letter cascade + caption.
 * Concept tie: "we're walking to the back to grab your size" — reading the
 * shop floor, not a generic spinner.
 */
export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center px-6 py-24">
      <div className="text-center max-w-md">
        <div className="loading-pulse-wrap mx-auto mb-8 h-14 w-14 grid place-items-center">
          <span className="loading-pulse" />
        </div>
        <div className="text-fg">
          <Wordmark className="h-9 mx-auto" animated pulse />
        </div>
        <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mt-6">
          WALKING TO THE BACK TO GRAB YOUR SIZE…
        </p>
      </div>
    </div>
  )
}
