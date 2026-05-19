import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="max-w-editorial mx-auto px-6 py-24 md:py-32 min-h-[60vh] grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="eyebrow mb-4">404</p>
        <h1 className="font-display text-h1 font-bold leading-[0.95] tracking-[-0.025em]">
          This shelf&apos;s <em className="not-italic text-accent">empty.</em>
        </h1>
        <p className="mt-8 text-fg-muted leading-relaxed max-w-content">
          The page you were looking for isn&apos;t here. It might have been moved, sold out, or never existed. Try the homepage, or come visit a branch — we&apos;ll find what you wanted.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[oklch(98%_0_0)] font-medium hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
          >
            Back to homepage
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/#branches"
            className="inline-flex items-center gap-2 px-6 py-3 border border-rule font-medium hover:bg-bg-elevated transition-colors duration-[--dur-micro] ease-smooth"
          >
            Find a branch
          </Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src="/images/branch/detail-empty-shelf.webp"
          alt="An empty shelf with a paper price tag still hanging — a real moment from a Fitsole branch interior."
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 60%, oklch(0% 0 0 / 0.15) 100%)',
          }}
          aria-hidden
        />
        <div className="absolute bottom-4 right-4 font-mono text-eyebrow tracking-[0.18em] text-[oklch(98%_0_0_/_0.85)] bg-[oklch(0%_0_0_/_0.4)] px-3 py-1.5 backdrop-blur-sm">
          ZAMALEK · SHELF 04 · EMPTY
        </div>
      </div>
    </main>
  )
}
