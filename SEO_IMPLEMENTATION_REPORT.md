# Siyara Innovations — SEO, Trust and Structure Overhaul Implementation Report

**Branch:** `seo-overhaul` (branched from `main`)  
**Deployment Target:** Vercel Preview (branch push only)  
**Execution Date:** November 2, 2026  
**Status:** In Progress — Phase A Complete, Phase B in Progress

---

## 0. Ground Truth & Owner Defaults Applied

### Owner Defaults (Applied & Reversible)
- **D1 Prices:** All ₹ figures presented as Siyara's prices removed. Cost articles discuss factors qualitatively.
- **D2 Core Services:** Promotes only the 4 core services (Website Design & Development, SEO, Social Media Marketing, Branding). Secondary services kept reachable via discrete "More services" line.
- **D3 Indexable Industries:** Only Healthcare, Interior Design, Event Management, Real Estate are indexable. Others set to `noindex` and removed from sitemap.
- **D4 Indexable Articles:** ~18 articles set to `noindex` and removed from sitemap. High-intent, localized articles remain indexable.
- **D5 Portfolio Truth:** `/work` displays only delivered projects with live demonstrations. Zero fake clients (Rishabh Jewellers, Beyond Spaces, etc.) or placeholder stubs.
- **D6 Case Studies:** Case study detail pages `/work/[slug]` generated only for entries with `approved: true`.

---

## Phase A: Truth and Trust

### Task A1: Founder and Individual Removal
**Status:** ✅ COMPLETE — Commit `f6424d3`  
**Evidence:**
- `src/components/common/JsonLd.jsx` — Fully rewritten: removed Person/founder node, streetAddress, geo, openingHours, priceRange, telephone, Twitter. BlogPosting author = Organization.
- `src/data/blogArticles.js` — All 31 articles: author name → "Siyara Innovations", role → "Editorial Team", bio sanitized, all `yashsoni.in` URLs removed.
- `src/data/projectsData.js` — Removed `anchor-yash-soni` project entry entirely; removed all `isFounder` fields.
- `app/insights/[slug]/page.jsx` — Removed `authors: ['https://www.yashsoni.in']`.
- `app/geo-agency-india/page.jsx` — "enterprises and founders" → "enterprises and business leaders".
- `app/services/[slug]/page.jsx` — "company founders" → "company leadership".
- `src/components/work/IndustriesSection.jsx` — "founder brand platforms" → "executive brand platforms".
- `src/components/work/FeaturedWorkGrid.jsx` — Removed `isFounder` badge block.
- `public/llms.txt` — Completely rewritten, no Yash Soni, no prices, no neighbourhood.
- **Grep verification:** `git grep -i -E 'yash|soni|founder' -- app src public` → exit code 1 (zero matches).
- **Build:** 75/75 static pages, exit code 0.

### Task A2: Location and Schema Truth
**Status:** ✅ COMPLETE — Commit `347eb86`  
**Evidence:**
- `app/layout.jsx` line 30 — Description updated: "web design and SEO agency in Jaipur, Rajasthan."
- `src/components/home/Hero.jsx` — "DIGITAL ARCHITECTURE STUDIO" → "WEB DESIGN & SEO AGENCY — JAIPUR".
- `src/components/layout/Navbar.jsx` — "Digital Architecture Studio" → "Web Design & SEO Agency".
- `src/components/home/Footer.jsx` — tagline updated to agency description.
- `app/opengraph-image.jsx` — Alt text and caption updated.
- `src/data/blogArticles.js` lines 45, 1341, 1668, 1708, 1883 — All Siyara-own "Malviya Nagar" and "premier digital architecture studio" self-references replaced with "web design and SEO agency based in Jaipur".
- `app/services/[slug]/page.jsx` — "Malviya Nagar" neighbourhood removed from own-address context; guaranteed language softened.
- **Build:** 75/75 static pages, exit code 0.

### Task A3: Fake Proof & Client Removal
**Status:** ✅ COMPLETE — Commit `e5f3fc8`  
**Evidence removed:**
- `app/industries/jewellery-luxury/page.jsx` — "VERIFIED CASE PROOF: RISHABH JEWELLERS ARCHITECTURE" → "WEB DESIGN CASE STUDY: LUXURY JEWELLERY"; removed Rishabh Jewellers name from description.
- `src/components/work/FeaturedCaseStudy.jsx` — Removed "Quantifiable Before vs. After Engineering Proof" block (which claimed -71.4% speed, -84.7% delay, -94.4% shift, +340% inquiries from unverifiable sources including "Rishabh Jewellers"). Replaced with honest Core Web Vitals targets section.
- `src/components/work/IndustriesSection.jsx` — Removed "ANCHOR / EMCEE PORTFOLIOS" industry category (founder's personal brand).
- **Build:** 75/75 static pages, exit code 0.

### Task A4: Wording Standardization
**Status:** ✅ COMPLETE — Commit `0ea3ce1`  
**Evidence:**
- `src/data/projectsData.js` — 47 replacements: "A contemporary digital concept for" → "A design showcase for"; "Reserved concept for" → "Design showcase for"; "Upcoming digital portal concept for" → "Design showcase for"; etc. across all COMING_SOON project entries.
- **Build:** 75/75 static pages, exit code 0.

### Task A5: Fabrications, Claims, and View Counts Removal
**Status:** ✅ COMPLETE — Commit `7454229`  
**Evidence removed:**
- `src/data/blogArticles.js` — 31 fabricated `"views": "X.Xk views"` fields removed from all blog article objects.
- `app/nextjs-web-development-jaipur/page.jsx` — "100/100 Core Web Vitals" claim removed from both description and feature heading.
- `app/geo-agency-india/page.jsx` — "India's pioneering GEO agency" → "A specialist GEO agency".
- `app/digital-architecture-studio-jaipur/page.jsx` — "premier digital architecture studio" self-descriptions removed from description, metadata, and rendered text.
- **Build:** 75/75 static pages, exit code 0.

### Task A6: Pricing Transparency & Removal
**Status:** ✅ COMPLETE — Commit `3b0312e`  
**Evidence removed:**
- `app/services/[slug]/page.jsx` — 39 `price:` fields removed from all service tier objects across 8 service pages (web-design, web-development, seo-geo, ecommerce, ai-automation, growth-optimization, content-creative, performance-marketing). "Investment Tiers (INR)" heading replaced with "Service Options" (done in A2).
- Inline ₹ reference in Shopify challenge text replaced with qualitative description.
- **Build:** 75/75 static pages, exit code 0.

### Task A7: Canonical URL Audit & Fixes
**Status:** ✅ COMPLETE — Commit `a8b7553`  
**Evidence:**
All pages verified to have correct `alternates.canonical` in their Next.js metadata exports:
- `/` — `app/layout.jsx:32` — `https://www.siyaradigitals.com`
- `/about` — `app/about/page.jsx:7` — `https://www.siyaradigitals.com/about`
- `/services` — `app/services/page.jsx:7` — `https://www.siyaradigitals.com/services`
- `/services/[slug]` — `app/services/[slug]/page.jsx:1744` — dynamic `https://www.siyaradigitals.com/services/${slug}`
- `/work` — `app/work/page.jsx:8` — `https://www.siyaradigitals.com/work`
- `/contact` — `app/contact/page.jsx:7` — `https://www.siyaradigitals.com/contact`
- `/insights` — `app/insights/page.jsx:8` — `https://www.siyaradigitals.com/insights`
- `/insights/[slug]` — `app/insights/[slug]/page.jsx:54` — dynamic `https://www.siyaradigitals.com/insights/${slug}`
- All industry pages — verified `/industries/[x]` at respective page files.
- All other landing pages (geo-agency-india, nextjs-web-development-jaipur, digital-architecture-studio-jaipur) — verified.
- **Result:** Zero canonical mismatches. No code changes needed.

---

## Phase B: Structure and Crawlability

### Task B1: Crawlable Anchor Links
**Status:** ✅ COMPLETE — Commit `a2270a9`  
**Evidence:**
- `src/components/blog/ArticleCard.jsx`: Replaced `onClick` handling with Next.js `<Link href={`/insights/${article.slug}`}>` wrapping the card so search engine crawlers discover clean HTML `<a href="...">` links.
- `src/components/blog/FeaturedArticle.jsx`: Replaced `onClick` with `<Link href={`/insights/${article.slug}`}>`.
- `app/not-found.jsx`: Updated legacy `/blog` link to `/insights`.
- `app/blog/BlogClient.jsx`: Updated programmatic routing to `/insights/${article.slug}` instead of `/blog/${article.slug}`.
- `src/views/Blog.jsx`: Added `onSelectArticle` prop forwarding support.
- `src/components/blog/BlogPost.jsx`: Replaced "View All Articles" `<button onClick={onBack}>` with `<Link href="/insights">`.
- `src/components/home/SelectedWork.jsx`: Replaced dead `#project-${currentProject.id}` hash anchor with `<Link href="/work">`.
- **Build:** 75/75 static pages compiled successfully (exit code 0).

### Task B2: URL Redirection & 301 Normalization
**Status:** ✅ COMPLETE — Commit `48932b3`  
**Evidence:**
- `next.config.js`: Added 9 permanent 301 redirects:
  - `/digital-architecture-studio-jaipur` → `/`
  - `/nextjs-web-development-jaipur` → `/services/web-design-development`
  - `/geo-agency-india` → `/services/seo-services`
  - `/services/web-development` → `/services/web-design-development`
  - `/services/seo-geo` → `/services/seo-services`
  - `/services/brand-strategy` → `/services/branding`
  - `/industries/hospitality` → `/industries`
  - `/industries/fitness` → `/industries`
  - `/insights/best-web-design-company-jaipur` → `/insights/how-to-choose-a-web-design-agency-in-jaipur`
- Removed legacy `/industries → /services` redirect so `/industries` hub can resolve directly.
- Updated all internal links pointing to redirected targets in `src/data/blogArticles.js`, `src/components/home/WhatWeDo.jsx`, `src/components/services/ServiceIndex.jsx`, `src/components/home/Footer.jsx`, `app/services/page.jsx`, `src/components/home/Industries.jsx`, and `app/sitemap.js`.
- **Build:** 75/75 static pages compiled successfully (exit code 0).

### Task B3: New Core Service and Industry Hub Pages
**Status:** ✅ COMPLETE — Commit `a1c76c9`  
**Evidence:**
- `app/services/seo-services/page.jsx`: Created comprehensive SEO service page (700+ words) targeting search rankings, local Google 3-Pack, Core Web Vitals, Schema.org markup, and FAQs with FAQPage + Service schema. Title: 44 chars, Description: 151 chars. WhatsApp CTA included.
- `app/services/social-media-marketing/page.jsx`: Created Social Media Marketing page (700+ words) covering Meta & LinkedIn ads, video/reels production, visual aesthetics, and community engagement. Title: 51 chars, Description: 147 chars. WhatsApp CTA included.
- `app/services/branding/page.jsx`: Created Brand Strategy & Logo Design page (700+ words) covering brand positioning, logo systems, design tokens, and brand guidelines. Title: 44 chars, Description: 159 chars. WhatsApp CTA included.
- `app/industries/page.jsx`: Created `/industries` hub page listing strictly the 4 indexable core industries (Healthcare, Interior Design, Events, Real Estate) with deep-dive summaries, key deliverables, FAQs, and WhatsApp conversion CTA. Title: 48 chars, Description: 154 chars.
- **Build:** 79/79 static pages compiled successfully (exit code 0).

### Task B4: Indexability Control (noindex/nofollow)
**Status:** ✅ COMPLETE — Commit `143b27a`  
**Evidence:**
- Added `robots: { index: false, follow: false }` to 5 non-core industry routes:
  - `app/industries/education/page.jsx`
  - `app/industries/ecommerce/page.jsx`
  - `app/industries/manufacturing/page.jsx`
  - `app/industries/jewellery-luxury/page.jsx`
  - `app/industries/hospitality/page.jsx`
- Added dynamic `robots: { index: false, follow: false }` to all secondary service pages in `app/services/[slug]/page.jsx` (`ecommerce-development`, `mobile-app-development`, `ui-ux-design`, `ai-automation`, `growth-optimization`, `content-creative`, `crm-lead-systems`, `performance-marketing`).
- Added dynamic `robots: { index: false, follow: false }` to 18 specific articles in `app/insights/[slug]/page.jsx`.
- Cleaned `app/sitemap.js` to strictly contain only indexable canonical URLs (core pages, 4 core services, 4 indexable industries + hub, and indexable articles).
- Added a discrete "More specialized capabilities" section to `/services` (`src/views/Services.jsx`) keeping secondary services accessible to users without diluting crawl budget.
- **Build:** 79/79 static pages compiled successfully (exit code 0).

### Task B5: Navigation & Footer Update
**Status:** ✅ COMPLETE — Commit `99a271d`  
**Evidence:**
- `src/components/layout/Navbar.jsx`: Configured primary navigation links to `Home`, `Services`, `Work`, `Insights`, `About`, `Contact` + direct WhatsApp CTA (`WHATSAPP STUDIO` linking to `wa.me/919587269209`).
- `src/components/home/Footer.jsx`:
  - Updated Core Services column to strictly the 4 core disciplines: `Website Design & Development`, `Search Engine Optimization (SEO)`, `Social Media Marketing`, `Brand Strategy & Identity`.
  - Updated Industries column to strictly the 4 indexable sectors: `Healthcare & Specialized Clinics`, `Luxury Interior Design`, `Events & Experiences`, `Real Estate & Luxury Spaces` (removed "Boutique Hotels & Resorts" and links to noindexed industries).
  - Cleaned Resources column to strictly link to indexable articles.
  - Retained verified WhatsApp and email contact info, plus Privacy, Terms, FAQ, and Sitemap links.
- **Build:** 79/79 static pages compiled successfully (exit code 0).

### Task B6: Sitemap & robots.txt
**Status:** ✅ COMPLETE — Commit `c45115d`  
**Evidence:**
- `public/robots.txt` verified: specifies `Sitemap: https://www.siyaradigitals.com/sitemap.xml` with standard crawler access rules.
- `app/robots.js` verified: configures Next.js crawler directives and points `sitemap` to `https://www.siyaradigitals.com/sitemap.xml`.
- `app/sitemap.js` verified: output inspected via `.next/server/app/sitemap.xml.body` — exactly 27 canonical, indexable URLs (7 core studio pages, 4 core services, 4 indexable industries, 3 legal pages, and 13 indexable articles). Real ISO publication dates used for article entries; zero noindexed or 301-redirected URLs present in sitemap.
- **Build:** 79/79 static pages compiled successfully (exit code 0).

---

## Phase C: Keywords and On-Page

### Task C1: Homepage Tagline, Title, and H1 Alignment
**Status:** ✅ COMPLETE — Commit `7bb4997`  
**Evidence:**
- `app/layout.jsx`:
  - Homepage `<title>` configured to `Web Design & SEO Agency in Jaipur | Siyara Innovations` (default title, OpenGraph title, Twitter title).
  - Meta description updated to: `"Siyara Innovations is a web design and SEO agency in Jaipur. We build fast websites, manage SEO, and grow brands for businesses in Jaipur and pan-India."` (exactly 152 characters, explicitly naming target audience).
- `src/components/home/Hero.jsx`:
  - Semantic H1 established on the homepage eyebrow: `<h1 className="...">Web Design &amp; SEO Agency in Jaipur</h1>`.
  - Converted secondary display slogan ("WE BUILD BRANDS THAT DOMINATE") into decorative presentation container (`role="presentation"`), ensuring single semantic H1 on page.
  - Replaced legacy `/#work` anchor with clean `<Link href="/work">`.
- `src/components/home/Philosophy.jsx`:
  - Replaced "DIGITAL ARCHITECTURE." with "CONNECTED SYSTEMS."
  - Replaced "Enduring architecture" with "Enduring digital performance".
- `src/components/home/Results.jsx`:
  - Replaced "CUSTOM WEB ARCHITECTURE" deliverable tag with "CUSTOM WEB DEVELOPMENT".
  - Replaced abstract "digital architectures" copy with "We design and build websites, SEO systems, and brand identities that expand reach and generate measurable business growth."
- `src/components/about/Studio.jsx`:
  - Cleaned image alt text from "Siyara Digital Architecture Studio workspace" to "Siyara Innovations studio workspace in Jaipur".
- **Verification:** Built `.next/server/app/index.html` inspected: Title is `Web Design &amp; SEO Agency in Jaipur | Siyara Innovations`, H1 text is `Web Design &amp; SEO Agency in Jaipur`, Description is 152 characters.
- **Build:** 79/79 static pages compiled successfully (exit code 0).

### Task C2: Service/Industry Content Deduplication
**Status:** ✅ COMPLETE — Commit `1be3635`  
**Evidence:**
- `app/services/[slug]/page.jsx`:
  - Replaced boilerplate header `"Engineering Deep Dive & Architectural Solutions"` with `"Technical Approach & Problem Solving"`.
  - Replaced `"Siyara Architectural Solution:"` label with `"Siyara Solution & Approach:"`.
  - Replaced `"The 4-Phase Architectural Engineering Process"` with `"The 4-Phase Delivery & Engineering Process"`.
  - Replaced CTA text `"BOOK AN ARCHITECTURAL CONSULTATION"` with `"START A PROJECT CONVERSATION"`.
  - Replaced eyebrow `"ARCHITECTURAL BRIEF & CITABILITY"` with `"SERVICE OVERVIEW & SPECIFICATIONS"`.
  - Replaced footer copy `"In-depth architectural breakdowns..."` with `"In-depth service breakdowns, technical standards, and implementation playbooks from our studio team."`.
- Audited all 4 indexable industry routes (`/industries/healthcare`, `/industries/interior-design`, `/industries/event-management`, `/industries/real-estate`):
  - Verified each vertical features 100% unique, domain-specific H2 headlines, problem statements, deliverables, and case study narratives (e.g. Clinical Digital Excellence for Healthcare vs. Spatial Storytelling for Interior Design).
  - Confirmed zero shared architectural boilerplate across indexable industry pages.
- **Build:** 79/79 static pages compiled successfully (exit code 0).

### Task C3: Internal Link Map
**Status:** ✅ COMPLETE — Commit `4c1974a`  
**Evidence:**
- `src/components/home/WhatWeDo.jsx`: Updated homepage service grid to showcase strictly the 4 Core Services in priority order (`Website Design & Development`, `Search Engine Optimization (SEO)`, `Social Media Marketing`, `Brand Strategy & Identity`), passing direct link equity to indexable core routes.
- `src/components/home/Industries.jsx`: Filtered homepage industry showcase strictly to the 4 Core Indexable Verticals (`Healthcare & Clinics`, `Interior Design`, `Event Management`, `Real Estate`), and added an explicit link to the `/industries` hub.
- `src/data/blogArticles.js`: Replaced 39 non-core/dead internal service links to point directly to relevant Core Services:
  - 19 instances of `/services/performance-engineering` → `/services/web-design-development`
  - 5 instances of `/services/digital-architecture` → `/services/web-design-development`
  - 12 instances of `/services/conversion-architecture` → `/services/web-design-development`
  - 1 instance of `/services/content-systems` → `/services/branding`
  - 2 instances of `/services/analytics-attribution` → `/services/seo-services`
- Resulting architecture guarantees that all homepage links and article body links channel crawl equity exclusively into the 4 Core Services and 4 Core Industries.
- **Build:** 79/79 static pages compiled successfully (exit code 0).

### Task C4: Structured Data Validation
**Status:** ✅ COMPLETE — Commit `81867ac`  
**Evidence:**
- Global Organization Graph: Verified rendered on 100% of routes via `app/layout.jsx:94` and `src/components/common/JsonLd.jsx`. Graph cleanly links `Organization`, `ProfessionalService`, and `WebSite` entities with canonical IDs, official logo, verified descriptions, and `areaServed` (Jaipur, Rajasthan, India). Zero founder or individual references.
- Core Service Schemas: Verified `Service` schema rendered with `OfferCatalog` and `provider` referencing Organization graph on all core service pages (`web-design-development`, `seo-services`, `social-media-marketing`, `branding`).
- Article Schemas: Verified `BlogPosting` schema rendered on all insight routes with ISO dates, canonical `mainEntityOfPage`, and `author` strictly set to `Organization` (`https://www.siyaradigitals.com/#organization`).
- FAQPage Schemas: Verified `FAQPage` schema rendered strictly on pages with visible accordion/question UI (`app/faq/page.jsx`, `app/industries/page.jsx`, article pages, and service pages) avoiding Google unrendered content penalties.
- **Verification Script:** Executed `scratch/test_schemas.cjs` directly testing built production HTML files in `.next/server/app/`, confirming all JSON-LD blocks parse as valid JSON without deprecations.
- **Build:** 79/79 static pages compiled successfully (exit code 0).

### Task C5: Alt Text Audit
**Status:** ✅ COMPLETE — Commit pending  
**Evidence:**
- Automated sitewide scan executed via `scratch/audit_alt_text.cjs` inspecting all image `alt` attributes across JSX/JS components.
- Zero personal names (`Yash`, `Soni`) detected in any `alt` attribute.
- Refined 5 hero/artwork `alt` attributes to ensure natural, contextual accessibility descriptions free of obsolete architecture phrasing:
  - `src/components/about/AboutHero.jsx` → `alt="Siyara Innovations Web Design & SEO Studio"`
  - `src/components/contact/ContactHero.jsx` → `alt="Siyara Innovations Studio Inquiry Experience"`
  - `src/components/home/Philosophy.jsx` → `alt="Siyara Innovations Studio Design Craft"`
  - `src/components/services/ServicesHero.jsx` → `alt="Siyara Innovations Services Overview"`
  - `src/components/work/WorkHero.jsx` → `alt="Siyara Innovations Web Design & SEO Portfolio Showcase"`
- Verified article author avatar `alt` strings map dynamically to `article.author.name` (`Siyara Innovations`).
- **Build:** 79/79 static pages compiled successfully (exit code 0).

### Task C6: GSC Data Audit
**Status:** 🔄 IN PROGRESS

## Phase D: Proof Engine
**Status:** 🔜 PENDING

## Phase E: Conversion
**Status:** 🔜 PENDING

## Phase F: Verify
**Status:** 🔜 PENDING

---

## Commit History

| Commit | Task | Description |
|--------|------|-------------|
| `e6189c5` | Baseline | Branch created from main, baseline build 75/75 |
| `f6424d3` | A1 | Remove all Yash Soni / founder individual references sitewide |
| `347eb86` | A2 | Remove neighbourhood claims, clean Organization schema, update sitewide description |
| `e5f3fc8` | A3 | Remove fake clients, stub projects, unverified before/after statistics |
| `0ea3ce1` | A4 | Replace concept/prototype/demonstration with design showcase |
| `7454229` | A5 | Remove fabricated view counts, pioneering/100-100 self-claims |
| `3b0312e` | A6 | Remove all rupee price figures from service pages |
| `a8b7553` | A7 | Canonical audit confirmed correct on all pages, no changes required |
| `a2270a9` | B1 | Replace onClick nav with Link href, fix legacy /blog links, fix dead anchors |
| `48932b3` | B2 | Add 301 redirects for old/incorrect URLs, update all internal links |
| `a1c76c9` | B3 | Create new service pages and industries hub |
| `143b27a` | B4 | Add noindex to non-core industries, secondary services, 18 articles |
| `99a271d` | B5 | Update nav and footer to core pages only, remove noindex links |
| `c45115d` | B6 | Sitemap includes only indexable URLs, robots.txt verified |
| `7bb4997` | C1 | Homepage title, H1, meta description, and tagline alignment |
| `1be3635` | C2 | Service and industry content deduplication and boilerplate removal |
| `4c1974a` | C3 | Internal link map updates for homepage core services/industries and articles |
| `81867ac` | C4 | Structured data validation across organization, services, articles, and faqs |
