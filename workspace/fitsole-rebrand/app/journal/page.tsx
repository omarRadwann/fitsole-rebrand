import Link from 'next/link'
import type { Metadata } from 'next'
import { ARTICLES } from '@/lib/data/articles'

export const metadata: Metadata = {
  title: 'Inside Fitsole — editorial from the floor',
  description: 'Notes from our staff on the shoes, the customers, and the city. Plain operator-led writing.',
  openGraph: {
    title: 'Inside Fitsole',
    description: 'Editorial from the Maadi, Zamalek, and Heliopolis branches.',
    type: 'website',
  },
}

export default function JournalIndex() {
  return (
    <main>
      <header className="border-b border-rule">
        <div className="max-w-editorial mx-auto px-6 py-16 md:py-24 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-eyebrow tracking-[0.18em] mb-5">Inside Fitsole · the journal</p>
            <h1 className="font-display font-bold text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.025em]">
              Notes from the floor.<br />
              <em className="not-italic text-accent">Plain. Operator-led.</em>
            </h1>
          </div>
          <p className="md:col-span-4 text-fg-muted leading-relaxed text-sm">
            Editorial from our Maadi, Zamalek, and Heliopolis branches. Specifics over slogans — the shoes the brides ask for, the sizes Cairo summer changes, the math behind the AC. Written by the staff who sell them.
          </p>
        </div>
      </header>

      <section className="max-w-editorial mx-auto px-6 py-16 md:py-20">
        <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mb-8">
          Launch batch · {ARTICLES.length} pieces · all marked DRAFT pending founder review
        </p>
        <ul className="divide-y divide-rule">
          {ARTICLES.map((a, i) => (
            <li key={a.slug}>
              <Link
                href={`/journal/${a.slug}`}
                data-cursor="Read"
                className="group grid md:grid-cols-12 gap-4 md:gap-10 py-10 md:py-12 hover:bg-bg-elevated transition-colors duration-[--dur-base] ease-smooth"
              >
                <div className="md:col-span-1 font-mono text-eyebrow text-fg-muted tracking-[0.18em] flex md:flex-col items-baseline md:items-start gap-2 md:gap-1">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="md:col-span-8">
                  <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mb-3">{a.edition}</p>
                  <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.018em] group-hover:text-accent transition-colors duration-[--dur-base] ease-smooth">
                    {a.title}
                  </h2>
                  <p className="text-fg-muted mt-4 leading-relaxed max-w-content text-sm md:text-base">{a.excerpt}</p>
                </div>
                <div className="md:col-span-3 flex md:flex-col md:items-end justify-between md:justify-start gap-2 md:gap-4 font-mono text-eyebrow tracking-[0.18em] text-fg-muted">
                  <span>{a.readMinutes} min</span>
                  <span>by {a.byline}</span>
                  <span aria-hidden className="hidden md:inline mt-2 text-fg group-hover:text-accent transition-colors duration-[--dur-base] ease-smooth">→</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 md:mt-20 border-t border-rule pt-10 max-w-2xl">
          <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mb-3">Monthly letter</p>
          <p className="text-fg-muted leading-relaxed text-sm">
            One editorial in your inbox the last Friday of every month. Operator notes, the shoes that moved, the numbers we are watching. No marketing copy; we don&apos;t know how to write that.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <label className="sr-only" htmlFor="journal-email">Email</label>
            <input
              id="journal-email"
              type="email"
              placeholder="your@email"
              className="flex-1 px-4 py-3 bg-bg-elevated border border-rule font-mono text-sm focus:outline-none focus-visible:border-accent transition-colors duration-[--dur-micro] ease-smooth"
            />
            <button type="submit" className="px-6 py-3 bg-accent text-[oklch(98%_0_0)] font-medium text-sm hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
