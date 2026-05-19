import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="text-center max-w-md">
        <h1 className="font-display text-6xl mb-4">404</h1>
        <p className="text-muted">This page didn&apos;t make it through the ship gate. Fill in real copy from <code>docs/copy-system.md</code>.</p>
        <Link href="/" className="inline-block mt-6 underline">Back home</Link>
      </div>
    </main>
  )
}
