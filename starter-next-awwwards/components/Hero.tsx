export function Hero() {
  // Real hero copy comes from docs/copy-system.md. Replace before ship.
  return (
    <section className="min-h-screen grid place-items-center px-6">
      <div className="max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl leading-tight tracking-tight">
          [H1 from copy-system.md]
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl">
          [Sub from copy-system.md]
        </p>
        <a
          href="#cta"
          className="inline-block mt-10 px-6 py-3 rounded-full bg-accent text-bg font-medium hover:opacity-90 transition"
        >
          [Primary CTA text]
        </a>
      </div>
    </section>
  )
}
