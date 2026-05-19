export type Article = {
  slug: string
  title: string
  /** Display title styled with a terracotta emphasis word, in italics. */
  emphasis?: string
  excerpt: string
  byline: string
  /** Editorial issue number — matches the EDITION 047 / MAY 2026 lockup. */
  edition: string
  /** Approximate read-time minutes. */
  readMinutes: number
  /** Status banner — 'draft-pending-founder-review' or 'published'. */
  status: 'draft-pending-founder-review' | 'published'
  /** Hero image path (under /public). */
  hero?: { src: string; alt: string }
  /** Body as paragraphs. Each item renders as a <p>; double-newlines indicate breaks. */
  body: string[]
}

/*
 * Editorial drafts — Full Lift 2026-05-20.
 *
 * Voice rules (from docs/copy-system.md):
 *   - Plain. Operator-led. First person plural when speaking as Fitsole, never marketing first person.
 *   - Specifics ALWAYS. Never "many customers"; instead "the third bride this month".
 *   - No "seamless", "innovative", "next-generation", "powerful", "elevate".
 *   - Em-dashes generous. Exclamation marks zero.
 *   - Local idiom welcomed without translation (e.g. شقة العرايس, Mahta…).
 *
 * Every piece below is labeled DRAFT — these are templates the founder edits
 * before production. The conversation is real; the names + numbers are
 * scaffolded for replacement.
 */
export const ARTICLES: Article[] = [
  {
    slug: 'samba-fourth-month',
    title: 'Why we kept the Samba in the front shelf for the fourth month running',
    emphasis: 'Samba',
    excerpt:
      'The Adidas Samba is not the year\'s loudest release, but since February it has been the most-asked-for shoe in our Maadi branch. Three notes from the floor.',
    byline: 'Maadi staff',
    edition: 'EDITION 047 · MAY 2026',
    readMinutes: 5,
    status: 'draft-pending-founder-review',
    hero: {
      src: '/images/branch/detail-bench.webp',
      alt: 'A single Adidas Samba on the fitting bench at the Maadi branch.',
    },
    body: [
      'A note for the founder: this is the first piece in the Inside Fitsole editorial layer. Read it as a template — the structure, voice, and length are locked. The specifics (names of staff, real customer moments, the actual Samba returns rate) are placeholders for you to replace before the page goes live to the public.',
      'The Samba is not a new shoe. It is older than several of our staff. Adidas has been quietly putting it out, in one form or another, since the early 1950s. What changed in February of this year is not the shoe. It is the people walking through the front door asking for it.',
      'The first week of February, the third bride of the month walked into Maadi asking for "the Samba" — not by model code, not by colorway, just the name. She did not want black; she wanted "the white one with the green tab". She wanted size 38. She wanted to wear it to the henna night before the wedding, then to the Sahel beach trip the following weekend, then to her job in Heliopolis the following Sunday.',
      'We did not have her size that day. We held it. She picked it up on Thursday. She came back the following month with a friend. The friend bought a pair. So did the friend\'s sister.',
      'In our experience, a single shoe holds the front shelf when three things line up: the shoe is genuinely good (the Samba is); the shoe is affordable enough that the customer\'s mother does not flinch at the price tag (the Samba is); and the shoe survives the first month of Cairo summer commuting without losing its shape (the Samba does — we have tested with the staff). The Samba checks all three.',
      'The reason the shoe is in the front shelf for the fourth month is more specific than that. It is in the front shelf because the staff at Maadi have noticed that when the bride walks in for it, she does not walk in alone. She brings her mother. She brings the groom. She sometimes brings the groom\'s mother. We have stopped trying to predict who in the family will make the final pick. We have started, instead, to put four chairs along the back wall and offer water.',
      'A note on returns. Across the four months we have moved the Samba from the second shelf to the front, our return rate on it has been 4 per 100 — the same as our store-wide return rate. Most returns are size, not fit. The pair goes home, the bride tries it with her actual wedding pants, and three days later we are exchanging size 38 for 38.5.',
      'This is the kind of pattern we are watching. If you are a brand that wants to sit on our front shelf, you do not need to be loud. You need to be the shoe the mother does not flinch at and the bride does not return.',
      'Next week: what three Cairo customers taught us about Adidas vs Nike sizing in Egyptian summer.',
    ],
  },
  {
    slug: 'cairo-summer-sizing',
    title: 'What three Cairo customers taught us about Adidas vs Nike sizing in Egyptian summer',
    emphasis: 'sizing',
    excerpt:
      'The sizing chart and the foot are not the same thing. Three exchanges this April, the same two brands, the same conclusion.',
    byline: 'Heliopolis floor',
    edition: 'EDITION 048 · MAY 2026',
    readMinutes: 6,
    status: 'draft-pending-founder-review',
    body: [
      'Founder note: this piece is the second in the Inside Fitsole editorial. Real customer exchanges are the engine — three short stories from the floor this April, with permission to publish under first names only. Replace these with your actual notes before launch.',
      'On April 8, a customer named Mohamed bought an Adidas Forum Low in his Adidas size — 43.5. He returned it on April 11. He wore it for one commute from Maadi to downtown in 38°C heat, took it off at his desk, and the leather had taken the shape of his sock. He exchanged it for a 43 in the same model. He has not returned the 43.',
      'On April 14, a customer named Marwa bought a Nike Pegasus 41 in her Nike size — 39. She returned it on April 18. She wore it for one beach trip and a single 4km run on Cairo summer pavement; the toe-box pinched after kilometer two. She exchanged it for a 39.5. She also has not returned it.',
      'On April 22, a customer named Yousef came in trying to buy a New Balance 990 v6 because his cousin has them. He left in a pair of Adidas Sambas in 44.5 — half a size up from his Adidas norm. He texted us a week later that they were the most comfortable pair he had owned in three years.',
      'These are not three identical stories. They are three different customers, three different brands, three different sizing systems. But they share a pattern that we, the floor, see every week and that the international sizing charts will not tell you: in Cairo summer, your foot is one half-size larger than the brand thinks it is.',
      'Why. Heat causes the soft tissues of the foot to swell. The leather of a new shoe stretches in two stages — the first hour, when it gives by about two percent; and the first two weeks, when it gives by about another four percent. In Cairo summer, the first hour is enough to disqualify a perfect-fit measurement made at 9am in an air-conditioned showroom.',
      'Our floor advice — informal, refined over the last 18 months: try the shoe at 4pm if you can. If you cannot, ask us for a half-size up in any leather sneaker, and your normal size in any mesh runner. We will exchange either, no questions, for fourteen days.',
      'A note on brands. Adidas runs about a quarter-size large by our floor tally; Nike runs about a quarter-size small for sizes under 40, true to size above. New Balance is the closest to its own chart of the three. Asics depends entirely on the model. We will publish a full brand sizing crib in the next edition.',
      'Most floors will not tell you that the chart is wrong. We will. Our return rate on size exchanges (4 per 100) is the lowest in our category in Greater Cairo, and our customers can come back fourteen days later for any reason. We earn that rate by being honest about the chart, on the floor, before the customer even tries them on.',
      'Next week: the Maadi-Zamalek-Heliopolis triangle — why our three branches feel different.',
    ],
  },
  {
    slug: 'triangle-maadi-zamalek-heliopolis',
    title: 'The Maadi–Zamalek–Heliopolis triangle: why our three branches feel different',
    emphasis: 'three branches',
    excerpt:
      'One catalog, one team, three buildings. They do not sell the same shoes to the same customers. The reason is geography, not branding.',
    byline: 'Owner\'s note',
    edition: 'EDITION 049 · JUNE 2026',
    readMinutes: 7,
    status: 'draft-pending-founder-review',
    body: [
      'A founder note: this is the third Inside Fitsole piece. The structure is set; you supply the actual numbers (top-3 sellers per branch, average basket sizes, the names of the local cafés we send customers to while we hold their size). Replace the placeholders before this goes live.',
      'Our three branches sit at three corners of a triangle, none more than a 25-minute drive from each other in good traffic. Maadi is the oldest. Zamalek opened thirteen months ago. Heliopolis is fourteen months old. On paper, they sell the same catalog. On the floor, the catalog they actually move is three different catalogs.',
      'Maadi customers buy walking shoes. The Adidas Samba and the Nike Killshot are the two best sellers, with the Asics Gel-Lyte III a steady third. Maadi is one of the few neighborhoods in Cairo where customers walk to the shop, walk away with their pair, and walk home. Cars are common but optional. The corner café two doors down keeps holding sizes for us — they call us when a customer is on their second tea.',
      'Zamalek customers buy running shoes. The Nike Pegasus and the Asics Gel-Nimbus are the top two. The Hoba Clifton 9 sits in third. The reason is the Nile corniche — half a kilometer from the branch, three kilometers of paved running surface along the river. Eight in the morning, six in the evening, every weekday, you can see Zamalek customers running by in pairs we sold them three weeks earlier.',
      'Heliopolis customers buy court shoes. The Nike Court Vision, the Adidas Stan Smith, and the New Balance 327. Heliopolis is the only one of the three branches with a tennis-and-padel club within five hundred meters of the front door. We did not plan this when we leased the space. The pattern emerged on its own.',
      'We resisted, for a long time, the urge to differentiate the inventory. We thought of ourselves as one shop in three buildings. The first six months in Heliopolis taught us otherwise. We were sending Heliopolis customers home in Sambas they would not wear, and stocking out of Stan Smiths that Maadi did not move. We changed the buy.',
      'Today, each branch has a "front shelf" that responds to its neighborhood, and a "back stock" that mirrors the other two. If you ask for a shoe we do not have on the Maadi front shelf, we can have it from Zamalek by Sunday or Heliopolis by Tuesday. We do not pretend the three are the same. We do not pretend you have to choose one and stay there. The same warranty, the same return policy, the same staff training applies across the triangle.',
      'A note on staff. The Maadi floor is six staff, all between 22 and 31, all with under five years on a retail floor. Zamalek is four, all with at least eight years. Heliopolis is five, the youngest team — the average age is 24. Each team has the latitude to set its own front shelf, within a quarterly buy budget the head office (one person, the founder) approves.',
      'The triangle works because each branch has a real neighborhood, not a target audience. A target audience is a slide. A real neighborhood is the corner café and the corniche and the padel court at five-thirty pm on a Tuesday. The shoes we sell are not the same shoes. The Fitsole standard is the same standard.',
      'Next week: a note on the AC vs the customer — the actual Egyptian sneaker-shop trade-off.',
    ],
  },
  {
    slug: 'ac-vs-the-customer',
    title: 'A note on the AC vs the customer: the actual Egyptian sneaker-shop trade-off',
    emphasis: 'AC',
    excerpt:
      'Three Cairo summers in, we have stopped pretending the air conditioning is a hospitality choice. It is a margin call. Here is the math.',
    byline: 'Founder',
    edition: 'EDITION 050 · JUNE 2026',
    readMinutes: 5,
    status: 'draft-pending-founder-review',
    body: [
      'A founder note: this is the fourth and last Inside Fitsole piece in the launch batch. The voice should sound like you when this goes live — operator-led, plain about the trade-off, transparent about the numbers. Replace the placeholder figures with your actual electricity bill before the page is public.',
      'Cairo summer is hot. That is not a metaphor. From the second week of May through the third week of September, the daytime temperature inside an un-cooled retail space at street level on Road 9 in Maadi hits 38°C by 2pm and stays there until 7pm. The shoes warp. The leather sweats. The customer leaves.',
      'Our first summer in 2024, we paid 11,400 EGP in our heaviest month for the Maadi branch electricity bill. The AC ran from 10am to 11pm at 22°C set point, every day, for four months. We made the decision because the customer who walks into a hot store does not stay long enough to try on the shoe, and a customer who does not try on the shoe does not buy the shoe. The math is that the cooling cost per square meter per month was less than the lost margin from one walk-out per day.',
      'There is a quieter version of the trade-off that nobody in our category talks about. The shoe itself does not survive the heat. Glue softens. Leather warps. The toe-box of an unsold pair that has been sitting in a 38°C window display for six weeks is permanently misshaped. We pulled three pairs of Stan Smiths from the Maadi window in July of 2024 because the toe-box had bowed outward. We could not return them to Adidas. They were our loss.',
      'Our 2025 summer we changed the policy. Window-display shoes rotate every fourteen days, regardless of whether they sold. Display pairs that have aged in the window go to the staff lounge as fitter pairs (they are still wearable, just not new-condition). New stock goes into the window for fourteen days. The cost is the labor of rotating; the saving is the four to six pairs per month that no longer become end-of-summer write-offs.',
      'The math, summed: AC at 11,400 EGP/month per branch × 4 months × 3 branches = 136,800 EGP per summer. Window rotation labor = the cost of one extra two-hour staff shift every fortnight, per branch = 14,400 EGP per summer. End-of-summer write-offs we no longer take = approximately 28,000 EGP per branch per summer = 84,000 EGP across the three. The trade-off is positive: 84,000 in saved write-offs against 14,400 in extra labor, plus the AC was paying for itself in walk-out prevention to begin with.',
      'This is the actual trade-off. Nobody in our category writes about it because it does not sound like marketing. It sounds like an operator who is doing the math on a spreadsheet at 9pm on a Sunday. That is exactly what it is.',
      'We tell you this not because we want a medal for running the AC. We tell you because the price you see on the tag at Fitsole — the same price you would see in Dubai for the same shoe — includes the AC, the window rotation, the warranty, and the wage of a staff member who would rather be home in Heliopolis on a Friday afternoon. We do not hide any of that in the markup, and we do not subsidize it from your wallet. We just run the place.',
      'That is the end of the Inside Fitsole launch batch. Next month: a longer piece on what we have learned about returns from one year of fourteen-day exchange policy in a category that usually offers seven.',
    ],
  },
]

export function findArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}
