// Placeholder branch data — structured for Shopify Multi-Locations integration.
// Replace with real Storefront API fetch once founder confirms Multi-Locations enabled.
// See docs/assumptions.md #21, docs/creative-brief.md § No-ship blockers.

export type Branch = {
  id: string
  slug: string
  name: string
  address: string
  city: string
  hours: string
  phone: string
  whatsapp?: string
  /** Coordinates for any future "nearest branch" feature. */
  lat?: number
  lng?: number
}

/** Founder must confirm: branch names, addresses, hours, contact. */
export const BRANCHES: Branch[] = [
  {
    id: 'br_zamalek',
    slug: 'zamalek',
    name: 'Zamalek',
    address: '— address pending founder confirmation —',
    city: 'Cairo',
    hours: 'Sun–Fri · 11:00–22:00',
    phone: '— pending —',
    whatsapp: '— pending —',
  },
  {
    id: 'br_maadi',
    slug: 'maadi',
    name: 'Maadi',
    address: '— address pending founder confirmation —',
    city: 'Cairo',
    hours: 'Sun–Fri · 11:00–22:00',
    phone: '— pending —',
    whatsapp: '— pending —',
  },
  {
    id: 'br_heliopolis',
    slug: 'heliopolis',
    name: 'Heliopolis',
    address: '— address pending founder confirmation —',
    city: 'Cairo',
    hours: 'Sun–Fri · 11:00–22:00',
    phone: '— pending —',
    whatsapp: '— pending —',
  },
]

export function getBranch(slug: string): Branch | undefined {
  return BRANCHES.find((b) => b.slug === slug)
}
