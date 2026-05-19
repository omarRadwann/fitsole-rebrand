import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ARTICLES, findArticle } from '@/lib/data/articles'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const a = findArticle(slug)
  if (!a) return { title: 'Not found · Fitsole' }
  return {
    title: `${a.title} — Inside Fitsole`,
    description: a.excerpt,
    openGraph: {
      title: a.title,
      description: a.excerpt,
      type: 'article',
    },
  }
}

export default async function JournalArticle({ params }: Params) {
  const { slug } = await params
  const article = findArticle(slug)
  if (!article) notFound()

  // Render emphasis word in italics + terracotta in the H1 if specified.
  let title: React.ReactNode = article.title
  if (article.emphasis && article.title.includes(article.emphasis)) {
    const parts = article.title.split(article.emphasis)
    title = (
      <>
        {parts[0]}
        <em className="not-italic text-accent">{article.emphasis}</em>
        {parts[1]}
      </>
    )
  }

  const idx = ARTICLES.findIndex((a) => a.slug === slug)
  const next = ARTICLES[idx + 1]
  const prev = ARTICLES[idx - 1]

  return (
    <main>
      {/* Draft banner — never silently ship without this. */}
      {article.status === 'draft-pending-founder-review' && (
        <aside
          role="note"
          aria-label="Editorial draft"
          className="bg-accent text-[oklch(98%_0_0)] py-3"
        >
          <div className="max-w-editorial mx-auto px-6 font-mono text-eyebrow tracking-[0.18em] flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <span>DRAFT — pending Fitsole founder review</span>
            <span aria-hidden>·</span>
            <span>Replace with the founder&apos;s own piece before publishing publicly.</span>
          </div>
        </aside>
      )}

      <article className="max-w-editorial mx-auto px-6 py-16 md:py-24">
        <header className="max-w-3xl mb-12 md:mb-16">
          <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mb-5">{article.edition}</p>
          <h1 className="font-display font-bold text-[clamp(2.25rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.025em]">
            {title}
          </h1>
          <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mt-8">
            {article.readMinutes} min · by {article.byline}
          </p>
        </header>

        {article.hero && (
          <figure className="mb-12 md:mb-16 relative aspect-[16/9] overflow-hidden">
            <Image
              src={article.hero.src}
              alt={article.hero.alt}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
            />
          </figure>
        )}

        <div className="prose-fitsole max-w-2xl mx-auto">
          {article.body.map((para, i) => (
            <p
              key={i}
              className={`leading-[1.75] text-[1.05rem] md:text-[1.125rem] ${i === 0 ? 'text-fg-muted italic' : 'text-fg'} mb-6 md:mb-7`}
            >
              {para}
            </p>
          ))}
        </div>

        <nav aria-label="More from Inside Fitsole" className="mt-20 md:mt-28 pt-10 border-t border-rule grid grid-cols-2 gap-6">
          <div>
            {prev && (
              <Link href={`/journal/${prev.slug}`} className="block hover:opacity-70 transition-opacity">
                <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mb-2">← Previous</p>
                <p className="font-display text-lg md:text-xl font-semibold leading-tight">{prev.title}</p>
              </Link>
            )}
          </div>
          <div className="text-right">
            {next && (
              <Link href={`/journal/${next.slug}`} className="block hover:opacity-70 transition-opacity">
                <p className="font-mono text-eyebrow tracking-[0.18em] text-fg-muted mb-2">Next →</p>
                <p className="font-display text-lg md:text-xl font-semibold leading-tight">{next.title}</p>
              </Link>
            )}
          </div>
        </nav>

        <p className="mt-16 text-center">
          <Link href="/journal" className="font-mono text-eyebrow tracking-[0.18em] hover:opacity-70 transition-opacity">
            ← All journal pieces
          </Link>
        </p>
      </article>
    </main>
  )
}
