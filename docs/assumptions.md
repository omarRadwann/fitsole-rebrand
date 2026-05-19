# Assumptions - Fitsole Awwwards Commerce Rebrand Audit

## Evidence Rules

Every assumption below is labeled:

- Verified: observed in live site, rendered capture, or local repo inspection.
- Manual review required: inferred from observed evidence but not proven by owner materials.
- Unknown / requires owner confirmation: cannot be verified from current repo/site.
- Blocked: needs access, credentials, source files, analytics, or owner approval.
- Not run: possible check was not executed in this audit pass.

## Verified

- Fitsole live site is a Shopify storefront with Shopify CDN/storefront assets and Shopify checkout/cart/account patterns.
- The local repo does not contain the Fitsole Shopify theme source.
- The live store sells footwear, apparel, and accessories across Men, Women, Kids, Brands, Sale, and seasonal/product sections.
- The homepage and collection pages expose real ecommerce affordances: product images, price, sale price, regular price, labels, product grids, filters, sort, cart, search, account, footer support, legal links.
- PDP content is present for at least one product in web fetch: gallery, title, color, sale price, regular price, size guide, size selection, add to cart, description, material, shipping, return/exchange, and size chart.
- FAQ states authenticity, licensed retailer status, delivery timing, order steps, payment methods, BNPL/installment options, support hours, and physical stores.
- Footer exposes `info@fitsole.shop`, `+20 106 843 3440`, tax number `374-666-873`, legal links, and social links.
- Rendered mobile homepage shows a strong image-led hero with Fitsole logo centered and search/cart/menu visible.
- Rendered mobile collection page shows very large uppercase collection copy, filter/sort controls, grid toggle, product cards, prices, sale labels, and product images.
- A rendered desktop Playwright capture returned a temporary `502 Server Error` once, while other live fetches and mobile/collection captures loaded. This is a reliability signal, not a general downtime conclusion.

## Manual Review Required

- Fitsole's current brand impression is credible and retail-functional, but not yet premium or highly distinctive.
- The current visual system appears heavily product-grid/template-led, with the Fitsole brand mark less developed than the product catalog.
- Product photography quality varies by section and source; some product images are strong, some alt/image placeholders appear weak or inconsistent in text extraction.
- The store already has enough trust primitives to support conversion if rebrand work does not bury them.
- The most valuable creative move is likely an editorial commerce system around movement, fit, product detail, and local trust rather than a separate fantasy brand world.
- 3D/WebGL is not automatically justified; it becomes justified only if tied to product desire, fit confidence, material inspection, or a signature retail interaction that still works on mobile.

## Unknown / Requires Owner Confirmation

- Shopify theme repository or theme export.
- Store analytics: conversion rate, add-to-cart rate, checkout completion, search usage, filter usage, top landing pages, device split, Core Web Vitals field data.
- Brand strategy, brand book, typography licenses, tone-of-voice rules, photography standards, campaign calendar.
- Priority commercial goals: sale conversion, full-price drops, Fitsole private-label growth, brand partner launches, kids category growth, newsletter/community, branch footfall.
- Product-margin and inventory priorities.
- Legal permission to use Nike/adidas/Puma/ON/NBA/Wilson/Birkenstock/Converse brand assets in a redesigned campaign context.
- Source and commercial-use rights for current product photography, model/lifestyle photography, social images, payment logos, and promotional graphics.
- Whether the contact page placeholder content is visible to customers in normal rendering or only exposed in page markup/app blocks.
- Whether `checkout.fitsole.shop` is intentionally used for many category links and whether that host is fully owned/configured by Fitsole.
- Whether Fitsole has branch/store photography, staff imagery, warehouse/logistics imagery, or customer-generated content that can be used legally.
- Whether checkout customizations are available under the current Shopify plan.
- Whether third-party Shopify apps can be removed, consolidated, or deferred.

## Blocked

- Production implementation audit is blocked without Shopify theme source or admin/theme export.
- Checkout redesign is blocked without Shopify plan/admin access and explicit owner approval.
- Legal asset clearance is blocked without owner-provided license/partnership documentation.
- Full performance audit is blocked until Lighthouse/WebPageTest can be run consistently against the live theme or a local theme preview.
- Accessibility remediation planning is blocked at code level until theme source is available.

## Not Run

- Lighthouse performance audit.
- axe automated accessibility scan.
- Full keyboard walkthrough.
- Cart/checkout transaction test.
- Live competitor crawl.
- SEO crawler export.
- Analytics review.
- Heatmap/session replay review.
- Customer support transcript review.

## Working Rebrand Premise

Fitsole should become a premium Egyptian sneaker and sportswear commerce experience that feels curated, physical, and fast. The brand should not imitate global sportswear brands; it should act as the local discovery layer between shoppers and authentic movement products.

## Non-Negotiable Guardrails

- Preserve visible price, discount, size, filter, sort, search, cart, checkout, shipping, return, exchange, and authenticity signals.
- Do not make ecommerce users wait through cinematic scenes before seeing products.
- Do not use AI-generated or external brand assets without rights.
- Do not use 3D/WebGL unless it improves product desire, fit confidence, material understanding, or brand memory.
- Do not hide trust copy behind hover-only or scroll-only interactions.
- Do not weaken mobile browsing for desktop spectacle.

