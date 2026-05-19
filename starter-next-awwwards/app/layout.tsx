import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Site title — fill from copy-system.md',
  description: 'Meta description — fill from copy-system.md (< 160 chars).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg antialiased font-body">{children}</body>
    </html>
  )
}
