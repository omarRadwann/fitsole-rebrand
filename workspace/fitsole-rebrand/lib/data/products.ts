// Real product data sourced from fitsole.shop's Shopify CDN on 2026-05-19.
// Image URLs are first-party (we're rebranding their own site — see assumptions.md #8).
// Real Shopify Storefront API integration drops in here once founder confirms credentials.

import type { Branch } from './branches'

export type ProductStock = {
  branchId: Branch['id']
  sizes: string[]
}

export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  priceEgp: number
  wasPriceEgp?: number
  imagePrimary: string
  imageHover: string
  imageAlt: string
  inStock: ProductStock[]
  editorialNote?: string
}

const CDN = 'https://fitsole.shop/cdn/shop/files'

export const PRODUCTS: Product[] = [
  {
    id: 'p_campus_00s_w',
    slug: 'adidas-campus-00s-w',
    name: 'Campus 00s W',
    brand: 'Adidas',
    priceEgp: 10999,
    imagePrimary: `${CDN}/HP3540_1_FOOTWEAR_Photography_Side_Lateral_Center_View_transparent.png?v=1777457651&width=1200`,
    imageHover: `${CDN}/HP3540_3_FOOTWEAR_Photography_TopPortraitView_transparent_2.png?v=1777466166&width=1200`,
    imageAlt: 'Adidas Campus 00s W — side lateral center view',
    inStock: [
      { branchId: 'br_zamalek', sizes: ['38', '39', '40', '41'] },
      { branchId: 'br_maadi', sizes: ['40', '41'] },
    ],
    editorialNote: 'Most-asked-for women’s silhouette this week — sizes deep at Zamalek.',
  },
  {
    id: 'p_tokyo_w',
    slug: 'adidas-tokyo-w',
    name: 'Tokyo W',
    brand: 'Adidas',
    priceEgp: 9499,
    imagePrimary: `${CDN}/KI3584_1_FOOTWEAR_Photography_Side_Lateral_Center_View_transparent.png?v=1777457640&width=1200`,
    imageHover: `${CDN}/KI3584_3_FOOTWEAR_Photography_Top_Portrait_View_transparent.png?v=1777457628&width=1200`,
    imageAlt: 'Adidas Tokyo W — side lateral center view',
    inStock: [{ branchId: 'br_heliopolis', sizes: ['37', '38', '39'] }],
  },
  {
    id: 'p_handball_spezial',
    slug: 'adidas-handball-spezial',
    name: 'Handball Spezial',
    brand: 'Adidas',
    priceEgp: 10999,
    imagePrimary: `${CDN}/IH1499_1_FOOTWEAR_Photography_Side_Lateral_Center_View_transparent_24c6c4a2-1139-4c50-81ef-00a2c93892dd.png?v=1777457648&width=1200`,
    imageHover: `${CDN}/IH1499_3_FOOTWEAR_Photography_Top_Portrait_View_transparent_99215446-d611-451f-a7ac-5fa9c7ae4253.png?v=1777457642&width=1200`,
    imageAlt: 'Adidas Handball Spezial — side lateral center view',
    inStock: [
      { branchId: 'br_zamalek', sizes: ['41', '42', '43', '44'] },
      { branchId: 'br_maadi', sizes: ['42', '43'] },
    ],
    editorialNote: 'Front-shelf for the fourth month running. Maadi has the deepest 42–43 stock.',
  },
  {
    id: 'p_muenchen',
    slug: 'adidas-muenchen',
    name: 'München',
    brand: 'Adidas',
    priceEgp: 10999,
    imagePrimary: `${CDN}/IH4222_1_FOOTWEAR_Photography_Side_Lateral_Center_View_transparent.png?v=1777457645&width=1200`,
    imageHover: `${CDN}/IH4222_3_FOOTWEAR_Photography_Top_Portrait_View_transparent.png?v=1777457633&width=1200`,
    imageAlt: 'Adidas München — side lateral center view',
    inStock: [{ branchId: 'br_maadi', sizes: ['43', '44'] }],
  },
  {
    id: 'p_samba_jane_i',
    slug: 'adidas-samba-jane-i',
    name: 'Samba Jane I',
    brand: 'Adidas',
    priceEgp: 3599,
    imagePrimary: `${CDN}/JP9543_1_FOOTWEAR_Photography_Side_Lateral_Center_View_transparent.png?v=1777457642&width=1200`,
    imageHover: `${CDN}/JP9543_3_FOOTWEAR_Photography_Top_Portrait_View_transparent.png?v=1777457623&width=1200`,
    imageAlt: 'Adidas Samba Jane I — side lateral center view',
    inStock: [
      { branchId: 'br_zamalek', sizes: ['24', '25', '26', '27'] },
      { branchId: 'br_maadi', sizes: ['25', '26'] },
    ],
    editorialNote: 'Kids cut of the Samba — Zamalek staff’s most-asked-for under-12 shoe.',
  },
  {
    id: 'p_fitsole_brown_tee',
    slug: 'fitsole-brown-tee',
    name: 'Brown T-Shirt',
    brand: 'Fitsole',
    priceEgp: 999,
    imagePrimary: `${CDN}/CopyofDSC01356.png?v=1776256677&width=1200`,
    imageHover: `${CDN}/CopyofDSC01373.png?v=1776256705&width=1200`,
    imageAlt: 'Fitsole house brand brown T-shirt — front view',
    inStock: [
      { branchId: 'br_zamalek', sizes: ['S', 'M', 'L', 'XL'] },
      { branchId: 'br_maadi', sizes: ['M', 'L'] },
      { branchId: 'br_heliopolis', sizes: ['S', 'M', 'L', 'XL'] },
    ],
    editorialNote: 'Our house basics — same cotton weight as the Maadi-staff shirts.',
  },
  {
    id: 'p_nike_premium_essentials_tee',
    slug: 'nike-premium-essentials-tee',
    name: 'Premium Essentials T-Shirt',
    brand: 'Nike',
    priceEgp: 1959,
    wasPriceEgp: 2799,
    imagePrimary: `${CDN}/JD4763_3_APPAREL_On_Model_Standard_View_transparent_be3ab639-8067-4b35-b56a-0a7c86b78adc.webp?v=1757648377&width=1200`,
    imageHover: `${CDN}/JD4763_4_APPAREL_On_Model_Back_View_transparent.webp?v=1757642002&width=1200`,
    imageAlt: 'Nike Premium Essentials T-Shirt — on model standard view',
    inStock: [{ branchId: 'br_zamalek', sizes: ['M', 'L'] }],
  },
  {
    id: 'p_nike_premium_essentials_jogger',
    slug: 'nike-premium-essentials-jogger',
    name: 'Premium Essentials Jogger',
    brand: 'Nike',
    priceEgp: 5249,
    wasPriceEgp: 7499,
    imagePrimary: `${CDN}/JC5185_3_APPAREL_On_Model_Standard_View_transparent_95e4b092-e1bc-45a4-89b5-6b6a11c35713.webp?v=1757647756&width=1200`,
    imageHover: `${CDN}/JC5185_3_APPAREL_On_Model_Standard_View_transparent_95e4b092-e1bc-45a4-89b5-6b6a11c35713.webp?v=1757647756&width=1200`,
    imageAlt: 'Nike Premium Essentials Jogger — on model standard view',
    inStock: [{ branchId: 'br_maadi', sizes: ['M', 'L'] }],
  },
  {
    id: 'p_adidas_tensaur_switch_j',
    slug: 'adidas-tensaur-switch-j',
    name: 'Tensaur Switch J',
    brand: 'Adidas',
    priceEgp: 3059,
    wasPriceEgp: 3599,
    imagePrimary: `${CDN}/JH9251_1_FOOTWEAR_Photography_Side_Lateral_Center_View_transparent_36ad6c37-5094-43d3-a4bd-1bc118e91927.png?v=1768993572&width=1200`,
    imageHover: `${CDN}/JH9251_3_FOOTWEAR_Photography_Top_Portrait_View_transparent.png?v=1768991178&width=1200`,
    imageAlt: 'Adidas Tensaur Switch J — side lateral center view',
    inStock: [{ branchId: 'br_heliopolis', sizes: ['32', '33', '34', '35'] }],
  },
  {
    id: 'p_adidas_handball_spezial_kids',
    slug: 'adidas-handball-spezial-kids',
    name: 'Handball Spezial Kids',
    brand: 'Adidas',
    priceEgp: 11999,
    imagePrimary: `${CDN}/KK1152_1_FOOTWEAR_Photography_Side_Lateral_Center_View_transparent.png?v=1773406855&width=1200`,
    imageHover: `${CDN}/KK1152_3_FOOTWEAR_Photography_Top_Portrait_View_transparent.png?v=1773406856&width=1200`,
    imageAlt: 'Adidas Handball Spezial — kids size',
    inStock: [{ branchId: 'br_zamalek', sizes: ['28', '29', '30'] }],
  },
  {
    id: 'p_fitsole_brown_shorts',
    slug: 'fitsole-brown-shorts',
    name: 'Brown Shorts',
    brand: 'Fitsole',
    priceEgp: 1099,
    imagePrimary: `${CDN}/CopyofDSC01338.png?v=1776256715&width=1200`,
    imageHover: `${CDN}/CopyofDSC01345.png?v=1776256731&width=1200`,
    imageAlt: 'Fitsole house brand brown shorts — front view',
    inStock: [
      { branchId: 'br_maadi', sizes: ['M', 'L'] },
      { branchId: 'br_zamalek', sizes: ['L', 'XL'] },
    ],
  },
  {
    id: 'p_adidas_tee',
    slug: 'adidas-tee',
    name: 'Adidas TEE',
    brand: 'Adidas',
    priceEgp: 1999,
    imagePrimary: `${CDN}/KE0399_2_APPAREL_On_Model_Standard_View_transparent.png?v=1777466638&width=1200`,
    imageHover: `${CDN}/KE0399_3_APPAREL_On_Model_Back_View_transparent.png?v=1777466647&width=1200`,
    imageAlt: 'Adidas tee — on model standard view',
    inStock: [{ branchId: 'br_zamalek', sizes: ['M', 'L', 'XL'] }],
  },
]

export const BRANDS = [
  { slug: 'nike', name: 'Nike', note: 'Court, running, lifestyle. We carry the Dunk Low and Air Force runs honestly — not the inflated reseller prices.' },
  { slug: 'adidas', name: 'Adidas', note: 'The deepest range we carry. Samba OG, Spezial, Campus, München — each in the sizes that actually leave the shelf.' },
  { slug: 'puma', name: 'Puma', note: 'Selected silhouettes only. We don’t carry every Puma; we carry the ones we wear.' },
  { slug: 'on', name: 'ON', note: 'Cloudmonster and the technical running line. The Swiss engineering is real.' },
  { slug: 'nba', name: 'NBA', note: 'Team apparel — basics that fit the actual climate of a Cairo summer.' },
  { slug: 'wilson', name: 'Wilson', note: 'Court hardware for the small but real Cairo tennis scene.' },
] as const
