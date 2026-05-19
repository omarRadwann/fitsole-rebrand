export function FounderNote() {
  return (
    <section className="max-w-editorial mx-auto px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <p className="font-mono text-eyebrow tracking-[0.18em] mb-4">From the founder</p>
          <h2 className="font-display text-h2 font-semibold leading-[0.98]">
            Why we built <em className="not-italic text-accent">Fitsole</em>
          </h2>
          <div className="mt-8 flex items-center gap-3">
            <span className="block h-px w-12 bg-fg" />
            <span className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted">
              Cairo · founded 2021
            </span>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <blockquote>
            <p className="font-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-semibold leading-[1.15] tracking-[-0.01em] max-w-[28ch]">
              <span className="text-accent">&ldquo;</span>
              We started Fitsole because shopping for sneakers in Cairo meant choosing between fake sites and overpriced resellers. Neither one knew what was in stock.
              <span className="text-accent">&rdquo;</span>
            </p>
          </blockquote>
          <div className="mt-10 grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-content text-fg-muted leading-relaxed text-sm">
            <p>
              Three years later we have three branches, six brands we picked carefully, and a return policy our staff actually honors at the counter.
            </p>
            <p>
              We don&apos;t carry the loudest releases. We carry the ones we&apos;d wear. The website is the same shop — just open at 3am.
            </p>
          </div>
          <p className="mt-10 font-mono text-eyebrow tracking-[0.18em]">
            — Founder name pending · signed handoff at ship
          </p>
        </div>
      </div>
    </section>
  )
}
