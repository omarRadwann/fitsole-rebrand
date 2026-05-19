import type { Metadata } from 'next'
import { Manrope, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/motion/CustomCursor'
import { PageTransition } from '@/components/motion/PageTransition'
import { ScrollCue } from '@/components/motion/ScrollCue'

const display = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Fitsole — authorized sportswear, in stock at our Cairo branches',
  description:
    'A Cairo sneaker and sportswear shop with branches you can walk into. Authorized retailer for Nike, Adidas, Puma, and more. Returns at any branch within 14 days.',
  openGraph: {
    title: 'Fitsole — the shop you can walk into.',
    description: 'Sportswear picked by us, in stock at our Cairo branches today.',
    type: 'website',
    locale: 'en_EG',
  },
  metadataBase: new URL('https://fitsole.shop'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
     * suppressHydrationWarning on <html> and <body>:
     * Browser extensions (ColorZilla 'cz-shortcut-listen', Grammarly
     * 'data-gr-*', dark-reader 'data-darkreader-*', etc.) inject DOM
     * attributes before React hydrates. These attributes are user-side noise,
     * not application state, and the hydration warning they trigger is a
     * false positive that drowns out real ones. Per Next.js docs, scoping
     * the suppression to the root html/body is the standard remediation.
     * See: https://nextjs.org/docs/messages/react-hydration-error
     */
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg text-fg antialiased font-body" suppressHydrationWarning>
        <PageTransition />
        <Header />
        {children}
        <Footer />
        <ScrollCue />
        <CustomCursor />
      </body>
    </html>
  )
}
