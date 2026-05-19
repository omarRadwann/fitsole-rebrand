export function Newsletter() {
  return (
    <section className="border-t border-rule">
      <div className="max-w-editorial mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <p className="eyebrow mb-4">Sunday letter</p>
          <h2 className="font-display text-h2 font-semibold leading-[1.02]">Get the weekly pick.</h2>
        </div>
        <div>
          <p className="text-fg-muted text-sm leading-relaxed mb-7 max-w-content">
            One email each Sunday. The week&apos;s picks, the next branch event, the one piece we&apos;re most excited about. No discount-spam, no abandoned-cart guilt.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md" action="/api/subscribe" method="post">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-rule bg-bg focus:border-accent focus:outline-none transition-colors duration-[--dur-micro] ease-smooth"
            />
            <button
              type="submit"
              className="px-7 py-3 bg-fg text-bg font-medium hover:opacity-90 transition-opacity duration-[--dur-micro] ease-smooth"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
