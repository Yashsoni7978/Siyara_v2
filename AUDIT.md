# SIYARA INNOVATIONS (siyaradigitals.com) — TECHNICAL SEO & ARCHITECTURE AUDIT

## 1. Executive Summary

Siyara Innovations (Jaipur) possesses high aesthetic craft but suffers from critical technical SEO, crawlability, and conversion architecture flaws suppressing organic visibility in Google Search Console (54 impressions, 8 clicks, zero non-branded rankings). The primary root causes are: **(1)** Next.js static export (`output: 'export'`) completely breaks `/api/contact`, dropping all client intake inquiries with 404; **(2)** Seven previously Google-indexed URLs (`/faq`, `/portfolio`, `/industries`, `/industries/fitness`, `/industries/hospitality`, `/services/ui-ux-design`, `/services/ai-agents`) return hard 404s with zero 301 redirects; **(3)** Critical trust and E-E-A-T signals are compromised by 5 fake personas (Julian Vance, Elena Rostova, etc.) with Unsplash photos, and client case studies pointing to `*.vercel.app` demo subdomains; **(4)** The primary email domain `info@siyaradigital.com` is mismatched across metadata, JSON-LD, and UI (missing the "s" from `siyaradigitals.com`); **(5)** Homepage H1 renders without whitespace (`WE BUILD BRANDSTHATDOMINATE.`) and hides behind inline `opacity: 0` client animations; **(6)** Zero LocalBusiness / ProfessionalService schema for Jaipur geo-targeting, zero Google Analytics 4, and zero Search Console verification. Staying on Next.js 15 is strongly recommended, but its architecture must be configured properly.

---

## 2. Comprehensive Issue & Remediation Matrix

| Severity | Area | File Path & Line Numbers | Issue Description | Exact Fix |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | Crawlability / 404s | `app/` (missing routes), `public/_headers`, `next.config.js` | Google has indexed 7 legacy URLs (`/faq`, `/portfolio`, `/industries`, `/industries/*`, `/services/*`) which now return hard 404s. | Implement 301 redirects in `public/_redirects` (for Cloudflare Pages) and `next.config.js` mapping old URLs to `/work`, `/services`, `/contact`. |
| **P0** | Conversion / API | `next.config.js:4`, `app/api/contact/route.js:1-56`, `src/components/contact/ContactIntake.jsx:58` | `output: 'export'` generates static HTML without serverless runtime. `POST /api/contact` fails with 404 in production, breaking all form submissions. | Either remove `output: 'export'` for full Node/Vercel runtime, or configure an external webhook endpoint / Formspree/Web3Forms endpoint. |
| **P0** | Trust / E-E-A-T | `app/layout.jsx:110`, `src/components/home/Footer.jsx:67,72`, `src/components/contact/ContactDetails.jsx:15,31`, `src/components/layout/FloatingContact.jsx:20` | Email domain mismatch: `info@siyaradigital.com` instead of `info@siyaradigitals.com`. Leads sending email will bounce. | Globally replace `info@siyaradigital.com` with `info@siyaradigitals.com` across code, schema, and UI. |
| **P0** | Crawlability / Duplication | `app/sitemap.js:9,13`, `app/our-work/page.jsx:1-37`, `app/work/page.jsx:1-37` | `/our-work` duplicates `/work` identically. Both are published in sitemap.xml, yet `/our-work` specifies canonical as `/work`. | Remove `app/our-work/`, 301 redirect `/our-work` -> `/work`, and remove `/our-work` from `app/sitemap.js`. |
| **P0** | Structured Data | `app/layout.jsx:82-134` | Missing `LocalBusiness` / `ProfessionalService` schema. Lacks physical address, Jaipur geo coordinates, priceRange, openingHours, telephone country code. | Add comprehensive `LocalBusiness` / `ProfessionalService` JSON-LD graph with exact Jaipur geo-coordinates and NAP data. |
| **P1** | Headings / Dom Spacing | `src/components/home/Hero.jsx:141-171` | H1 block spans lack whitespace, causing DOM text extractors and crawlers to read `WE BUILD BRANDSTHATDOMINATE.`. Initial animation sets inline `opacity: 0`. | Add explicit trailing spaces or CSS margin, and ensure SSR HTML has visible semantic content with progressive enhancement. |
| **P1** | Content / E-E-A-T | `src/data/blogArticles.js:32-37,89-94,131-136,172-177,212-217` | Fictional author personas (Julian Vance, Elena Rostova, Marcus Sterling, Dr. Aris Thorne, Sora Tanaka) with Unsplash avatars violate Google Quality Rater E-E-A-T guidelines. | Replace with real Siyara founder & team profiles (e.g. Yash Soni, Creative Director) or attribute to "Siyara Editorial Team". |
| **P1** | Content / Credibility | `src/data/projectsData.js:16,37,170,191,212` | Live case studies link to temporary `*.vercel.app` demo subdomains instead of real client production domains. | Replace Vercel staging URLs with actual live client URLs, or label explicitly as "Interactive Agency Prototype / Concept". |
| **P1** | Dead Links | `src/components/home/Footer.jsx:29-30,171-172` | Privacy Policy and Terms of Service links point to `href="#"`. Google flags dead legal boilerplate as untrusted. | Create `app/privacy/page.jsx` and `app/terms/page.jsx` with actual policies and update footer links. |
| **P1** | Navigation Architecture | `src/components/home/Footer.jsx:6-13,27` | All 6 Capabilities links in footer point to generic `/services`. FAQ links to `/#contact`. | Point capability links to deep anchors (`/services#web-design`, `/services#seo`, etc.) or dedicated service pages; create `/faq`. |
| **P1** | Metadata | `app/layout.jsx:24,25,26,72`, `app/services/page.jsx:4,5`, `app/blog/page.jsx:4` | Title tags > 60 chars, meta descriptions > 160 chars. Deprecated `keywords` meta tag present. `lang="en"` instead of `lang="en-IN"`. Missing page-level robots. | Shorten titles <= 60 chars, descriptions <= 160 chars, set `lang="en-IN"`, remove `keywords`, add `robots` with `max-image-preview:large`. |
| **P1** | Encoding / Mojibake | `src/components/blog/BlogHero.jsx:73`, `src/data/blogArticles.js:149,435,564,612,779,873` | Source text contains corrupted Windows-1252/UTF-8 mojibake (`PUB Â· VOL 04`, `â€™`, `â€”`, `â€“`). | Clean source files: replace `Â·` with `·`, `â€™` with `’`, `â€”` with `—`, `â€“` with `–`. |
| **P1** | Indexing / Rendering | `src/components/services/ServiceIndex.jsx:19-252` | 7 of 8 disciplines' detailed copy and sub-services are hidden behind client-only React state `activeDisciplineIdx`. Initial HTML only contains Discipline 01. | Render all 8 discipline descriptions and sub-service lists in semantic SSR markup (e.g., semantic grid/details/accordion), styling active state via CSS/JS. |
| **P2** | Performance / INP | `src/components/common/CursorSpotlight.jsx:11-27`, `src/components/home/Hero.jsx:38-51` | `CursorSpotlight` recalculates full-screen gradient on every unthrottled `mousemove`. `Hero.jsx` calls `getBoundingClientRect()` on every mouse move, forcing reflow. | Debounce/throttle mouse handlers with `requestAnimationFrame`, or implement purely in CSS variables (`--mouse-x`, `--mouse-y`). |
| **P2** | Performance / Assets | `next.config.js:5-13`, `public/images/`, `public/logo.png` | `images.unoptimized: true` disables WebP/AVIF compression. `public/` contains unused 2.13 MB `logo.png` and 25+ MB unreferenced raw PNGs. | Remove unused raw PNGs; configure Sharp or image optimization loader; specify explicit `width`, `height`, and `sizes`. |
| **P2** | Semantics & A11y | `src/components/home/Marquee.jsx:1-70`, `src/components/about/AboutHero.jsx:54`, `src/components/work/WorkHero.jsx:70` | Client name marquee repeats 4 times without `aria-hidden="true"`, causing text spam in screen readers and crawlers. Missing H1 keywords on About and Work. | Add `aria-hidden="true"` to duplicate marquee tracks; enrich H1 tags with Jaipur and service keywords. |
| **P2** | Analytics & Telemetry | `app/layout.jsx`, `src/components/layout/FloatingContact.jsx`, `src/components/contact/ContactIntake.jsx` | Zero Google Analytics 4 (GA4), zero Google Search Console verification, zero conversion event dispatchers for call, email, or form submit. | Integrate `@next/third-parties/google` for GA4, add `google-site-verification` metadata, and trigger conversion events. |
| **P2** | Local Trust Signals | `src/components/layout/FloatingContact.jsx:8-26`, `src/components/contact/ContactDetails.jsx` | Missing WhatsApp floating button (critical for Jaipur/India conversion). Missing embedded Google Map. Phone missing `+91` international code. | Add WhatsApp CTA (`https://wa.me/919587269209`), update `tel:+919587269209`, embed Google Maps iframe for Jaipur office. |

---

## 3. Step-by-Step Technical Audit Findings

### Step 1: Build Output & Route Architecture
- **Build Status**: Compiles in 37.0s with Next.js 15.5.26 and React 19.
- **Route Table**:
  - `○ /` (Static, 12.2 kB, First Load: 166 kB)
  - `○ /_not-found` (Static, 133 B, First Load: 103 kB)
  - `○ /about` (Static, 7.99 kB, First Load: 159 kB)
  - `ƒ /api/contact` (Dynamic Server Route, 133 B) — **FATAL ARCHITECTURAL MISMATCH**: Because `next.config.js` specifies `output: 'export'`, dynamic server routes are not exported to `out/`. In static hosting, requests to `/api/contact` return a 404 error.
  - `○ /blog` (Static, 4.15 kB, First Load: 203 kB)
  - `● /blog/[slug]` (SSG Prerendered, 25 articles, 348 B, First Load: 199 kB)
  - `○ /contact` (Static, 6.15 kB, First Load: 154 kB)
  - `○ /services` (Static, 10.8 kB, First Load: 164 kB)
  - `○ /work` (Static, 131 B, First Load: 177 kB)
  - `○ /our-work` (Static, 131 B, First Load: 177 kB) — **DUPLICATE ROUTE**: Renders the identical component as `/work`.
- **Missing Routes**: Google Search Console has observed `/faq`, `/portfolio`, `/industries`, `/industries/fitness`, `/industries/hospitality`, `/services/ui-ux-design`, and `/services/ai-agents`. None of these exist in the codebase, leading to 404 crawl errors.

### Step 2: Rendering & Client Component Overuse
- **"use client" Assessment**: 50+ files use `'use client'`. Entire view layouts (`About.jsx`, `Work.jsx`, `Blog.jsx`, `Contact.jsx`) and nearly every section component are marked client-side.
- **Hidden Content Inspection**:
  - `src/components/services/ServiceIndex.jsx`: 7 of 8 disciplines' descriptions and specialized sub-services are wrapped in `<AnimatePresence>` conditioned on `activeDisciplineIdx`. Only Discipline 01 is present in the initial static HTML.
  - `src/components/home/Industries.jsx`: Industry preview details are conditioned on `hoveredIndex || 0`. Only the first industry's copy is rendered in the initial DOM.
  - `src/components/home/Hero.jsx`: All spans inside `<h1>` specify `initial="hidden"` with Framer Motion, which compiles to inline `style="opacity:0;transform:translateY(20px)"` in the prerendered HTML. If JavaScript fails or bots parse raw HTML without animation playback, the headline text is technically hidden.

### Step 3: Metadata, Canonical & Robots Audit
- **Language**: `app/layout.jsx:72` sets `<html lang="en">` instead of `<html lang="en-IN">`, forfeiting regional geo-targeting in Indian search indexes.
- **Meta Keywords**: `app/layout.jsx:26` includes `<meta name="keywords" content="...">`. Google has disregarded this tag since 2009; it leaks keyword strategy to competitors and should be removed.
- **Title Length Violations (>60 chars)**:
  - `app/layout.jsx`: 70 chars (*"Siyara Innovations | Digital Marketing & Web Design Agency in Jaipur"*)
  - `app/about/page.jsx`: 62 chars (*"About Siyara | Digital Architecture Studio · Jaipur, Rajasthan"*)
  - `app/services/page.jsx`: 68 chars (*"Services | Siyara · 8-Discipline Digital Architecture System · Jaipur"*)
  - `app/blog/page.jsx`: 72 chars (*"Studio Insights | Siyara · Digital Strategy, Brand & Growth Intelligence"*)
  - `app/contact/page.jsx`: 64 chars (*"Contact Siyara | Digital Architecture Studio · Jaipur, Rajasthan"*)
  - `app/blog/[slug]/page.jsx`: Generates `${metaTitle} · Siyara Insights` resulting in 80–95 character titles.
- **Meta Description Violations (>160 chars)**:
  - `app/layout.jsx`: 194 chars
  - `app/about/page.jsx`: 166 chars
  - `app/services/page.jsx`: 169 chars
  - `app/contact/page.jsx`: 172 chars
- **Canonical Inconsistencies**:
  - `app/layout.jsx` specifies `https://www.siyaradigitals.com/` (with trailing slash).
  - Child pages (`/about`, `/services`, `/contact`, `/work`) omit trailing slashes (e.g. `https://www.siyaradigitals.com/about`).
  - `app/our-work/page.jsx` sets canonical to `https://www.siyaradigitals.com/work`, yet both pages are present in `sitemap.xml`.
- **Twitter Handle / Domain Mismatch**:
  - `app/layout.jsx:48`, `app/about/page.jsx:27`, `app/services/page.jsx:27`, etc. configure `site: '@siyaradigital'` (missing "s").

### Step 4: Crawlability, Sitemaps & Redirects
- **Dual Sitemap Collision**:
  - `app/sitemap.js` generates `/sitemap.xml` dynamically at build time.
  - A static `public/sitemap.xml` also exists in the repository with hardcoded August 2026 dates and missing `/work`.
  - In `app/sitemap.js`, `/our-work` is listed alongside `/work`.
- **Redirects Absent**:
  - No `_redirects` file exists in `public/`.
  - No redirects are configured in `next.config.js`.
  - Old URLs from the previous Vite application (`/portfolio`, `/faq`, `/industries`, `/industries/fitness`, `/industries/hospitality`, `/services/ui-ux-design`, `/services/ai-agents`) yield immediate 404 HTTP status codes.

### Step 5: Structured Data (JSON-LD) Validation
- **Existing Schema**:
  1. `app/layout.jsx`: Contains `Organization` and `WebSite`.
     - *Error 1*: `email` is set to `info@siyaradigital.com` (mismatch with `siyaradigitals.com`).
     - *Error 2*: Missing `LocalBusiness` / `ProfessionalService` type, telephone country code, street address, postalCode, geo-coordinates (`latitude: 26.9124`, `longitude: 75.7873`), and opening hours.
  2. `app/blog/[slug]/page.jsx`: Contains `BlogPosting`.
     - *Error 1*: Uses placeholder authors ("Julian Vance", "Elena Rostova") with Unsplash avatars.
- **Missing Schemas**:
  - Zero `Service` schemas on `/services`.
  - Zero `FAQPage` schema on `/` or `/services`.
  - Zero `BreadcrumbList` schema on any page.

### Step 6: Headings & DOM Semantics
- **DOM Word Spacing Bug in Homepage H1**:
  - `src/components/home/Hero.jsx:141-171` outputs:
    ```html
    <h1><span>WE BUILD BRANDS</span><span>THAT</span><span>DOMINATE.</span></h1>
    ```
  - Without inter-element whitespace, text extraction tools, screen readers, and certain search crawlers extract the string as:
    `WE BUILD BRANDSTHATDOMINATE.`
- **Missing Keywords in Main H1s**:
  - `/`: "WE BUILD BRANDS THAT DOMINATE." (no local intent or service keywords).
  - `/about`: "We build digital systems for Jaipur businesses - strategy, design, and technology, connected." (acceptable, but lacks core target phrases).
  - `/work`: "Brands in Action." (generic, zero SEO value).
  - `/blog`: "Ideas that shape the digital future." (generic editorial).
- **Marquee Duplication**:
  - `src/components/home/Marquee.jsx` renders client names 4 times in parallel flex containers without `aria-hidden="true"`, causing repeated spam reading for accessibility tools and text scrapers.

### Step 7: Links & Navigation Hierarchy
- **Dead Links (`href="#"`)**:
  - `src/components/home/Footer.jsx:29, 30, 171, 172`: Privacy Policy and Terms of Service point to `#`.
- **Misdirected Links**:
  - `src/components/home/Footer.jsx:6-13`: All 6 capability links point to the root `/services` URL.
  - `src/components/home/Footer.jsx:27`: "FAQ" links to `/#contact`.
- **Duplicate Pages**:
  - `/work` and `/our-work` are identical.
- **Internal Link Gaps**:
  - The 8 specialized capabilities defined in `ServiceIndex.jsx` (`/services/brand-strategy`, `/services/web-design-development`, `/services/seo-geo`, etc.) have no individual landing pages or anchors.

### Step 8: Content Integrity & E-E-A-T
- **Fictional Blog Authors**:
  - `Julian Vance` (Head of Brand Strategy) — Unsplash photo `photo-1534528741775-53994a69daeb`
  - `Elena Rostova` (Strategy Director) — Unsplash photo `photo-1573496359142-b8d87734a5a2`
  - `Marcus Sterling` (Growth Lead) — Unsplash photo `photo-1507003211169-0a1dd7228f2d`
  - `Dr. Aris Thorne` (AI Infrastructure Architect) — Unsplash photo `photo-1500648767791-00dcc994a43e`
  - `Sora Tanaka` (Creative Director) — Unsplash photo `photo-1580489944761-15a19d654956`
- **Unverifiable Claims & Stats in Content**:
  - "reducing operational overhead by 40%" (`blogArticles.js:168`)
  - "lost conversion momentum by up to 35%" (`blogArticles.js:42`)
  - "out-convert off-the-shelf platforms by 3.2x" (`blogArticles.js:44`)
  - "70% report no measurable increase" (`blogArticles.js:107`)
- **Staging / Vercel Client URLs**:
  - Case studies in `src/data/projectsData.js` link to Vercel free subdomains:
    - `https://shri-properties.vercel.app/`
    - `https://meridian-properties-nine.vercel.app/`
    - `https://dr-rajeshwari-sharma-medical-websit.vercel.app/`
    - `https://varena-hospital.vercel.app/`
    - `https://smile-craft-six.vercel.app/`
  - 10+ projects are marked `status: 'COMING_SOON'` with stock imagery.

### Step 9: Programmatic Pages (/industries & /services)
- The previous site or design document planned programmatic templates for `/industries/[slug]` and `/services/[slug]`.
- Neither exists in `app/`.
- If created without deep unique data, programmatic industry pages typically result in thin, near-duplicate content (85%+ shared boilerplate), leading to Google "Crawled - currently not indexed" status.
- **Recommendation**: Do not generate thin programmatic pages. Create 301 redirects from old URLs to `/services` and `/work`, and structure `/services` with distinct anchor sections or comprehensive pillar pages.

### Step 10: Images & Fonts
- **Next.js Image Optimization Disabled**: `next.config.js` sets `unoptimized: true`. All images serve at uncompressed raw dimensions.
- **Unused Heavy Assets**:
  - `public/logo.png` is 2.13 MB and completely unused (the site uses `logo.webp` at 11 kB).
  - 5 unreferenced Gemini PNG images totaling ~25 MB reside in `public/images/`.
- **Font Loading**: `app/layout.jsx` loads 5 weights of `Cormorant_Garamond` and 5 weights of `Manrope` with `display: 'swap'`. Limiting to used weights (400, 600, 700) will reduce font payload by ~40%.

### Step 11: Performance & Core Web Vitals Simulation
- **First Load JS**: 166 kB on `/`, 203 kB on `/blog`.
- **LCP Risk**:
  - Homepage: `Hero.jsx` renders with `opacity: 0` inline, delaying text paint until client hydration.
  - Video and poster loading deferred via `isDesktop` React state.
- **INP Risk**:
  - `CursorSpotlight.jsx` attaches an unthrottled `mousemove` event listener on `window`, triggering continuous React state updates and Framer Motion re-renders.
  - `Hero.jsx:38-51` triggers `getBoundingClientRect()` on every cursor movement.
- **CLS Risk**:
  - Height transitions on interactive panels in `WhatWeDo.jsx` and `ServiceIndex.jsx`.

### Step 12: Mojibake Character Encoding
- In `src/components/blog/BlogHero.jsx:73`:
  `<span className="...">PUB Â· VOL 04</span>`
  The source code literally contains the raw characters `Â·`.
- In `src/data/blogArticles.js`, `src/views/About.jsx`, and `src/views/Contact.jsx`:
  UTF-8 symbols were corrupted during copy-paste or editor save:
  - `â€”` (corrupted em dash `—`)
  - `â€™` (corrupted apostrophe `’`)
  - `â€“` (corrupted en dash `–`)
  - `â†’` (corrupted right arrow `→`)

### Step 13: Local & Trust Signals
- **NAP Incompleteness**:
  - Footer and Contact page list only "Jaipur, Rajasthan · India" with no office locality, building name, or PIN code (e.g., 302001).
  - Phone is displayed as `9587269209` without standard international format (`+91 95872 69209`).
  - No embedded Google Map on `/contact`.
  - No named founder or leadership profile on `/about`.
  - Privacy Policy and Terms of Service do not exist.
  - Cookie consent banner is absent.

### Step 14: Analytics & Conversion Tracking
- **Zero Measurement**:
  - No Google Analytics 4 tracking script (`gtag.js` or `GoogleAnalytics`).
  - No Google Tag Manager container.
  - No `google-site-verification` token in `app/layout.jsx`.
  - No conversion tracking events on form submission, click-to-call, or email clicks.

### Step 15: Security & Hygiene
- **Headers**: `public/_headers` includes HSTS, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy, but lacks `Content-Security-Policy`. If deployed outside Cloudflare Pages, these headers are ignored because Next.js `output: 'export'` disables `headers()` in `next.config.js`.
- **Error Pages**: Custom `not-found.jsx` exists and is well-styled. However, `app/error.jsx` and `app/global-error.jsx` are missing, resulting in default Next.js error overlays on runtime failures.

### Step 16: Technology Stack Evaluation (Next.js 15)
- **Verdict**: **STAY ON NEXT.JS 15.**
- Next.js 15 App Router is the right framework for this project. Its server components, metadata API, and fast SSG export capabilities are well-suited for high-ranking agency websites.
- The issues identified are implementation errors (misconfigured export mode, client component abuse, placeholder data, missing redirects), not architectural limitations of Next.js.
- **Hosting Recommendation**: Deploy either to **Vercel** or **Cloudflare Pages with Next-on-Pages** (removing `output: 'export'`) so API routes and redirects execute natively.

---

## 4. Quick Wins (Under 1 Hour)

1. **Delete Dead Duplicate Route**: Delete `app/our-work/` and remove `/our-work` from `app/sitemap.js`.
2. **Correct Primary Email**: Globally replace `info@siyaradigital.com` with `info@siyaradigitals.com` in `app/layout.jsx`, `Footer.jsx`, `ContactDetails.jsx`, and `FloatingContact.jsx`.
3. **Fix Mojibake Characters**: Replace `PUB Â· VOL 04` with `PUB · VOL 04` in `BlogHero.jsx`, and batch-clean `â€”` and `â€™` in `blogArticles.js`.
4. **Fix H1 DOM Spacing**: In `src/components/home/Hero.jsx`, add inter-element spaces between spans to resolve `BRANDSTHATDOMINATE`.
5. **Add Redirects File**: Create `public/_redirects` to resolve the 7 GSC 404 errors with 301 redirects.
6. **Set Language & Remove Meta Keywords**: Update `<html lang="en-IN">` and delete the `keywords` property in `app/layout.jsx`.
7. **Add International Phone Format**: Update all phone links to `href="tel:+919587269209"`.
8. **Add aria-hidden to Marquee**: Add `aria-hidden="true"` to duplicate track nodes in `Marquee.jsx`.

---

## 5. Needs Content, Not Code (Client / Founder Deliverables)

1. **Physical Office Address & PIN Code**: Exact registered or studio address in Jaipur (e.g., Office/Floor, Commercial Complex, Area/Locality, Jaipur, Rajasthan 3020xx).
2. **Founder & Leadership Bios**: Real names, professional headshots, titles, and LinkedIn profiles for the founder (e.g. Yash Soni) to replace Julian Vance, Elena Rostova, and other stock personas.
3. **Live Client Domain URLs**: Real client production websites to replace `*.vercel.app` demo links in `projectsData.js`.
4. **Privacy Policy & Terms of Service Text**: Standard legal policies for data privacy, lead collection, and service engagement to publish on `/privacy` and `/terms`.
5. **Google Search Console Verification Token**: Verification meta tag string (`google-site-verification=...`) from GSC.
6. **Google Analytics 4 Measurement ID**: GA4 Measurement ID (`G-XXXXXXXXXX`).
7. **Verified Social Profiles**: Live Twitter/X, Instagram, and LinkedIn profile URLs.

---

## 6. Proposed Structured Data (JSON-LD) Implementations

### Proposal A: Organization & LocalBusiness (for `app/layout.jsx`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.siyaradigitals.com/#organization",
      "name": "Siyara Innovations",
      "alternateName": ["Siyara", "Siyara Digital Architecture Studio"],
      "url": "https://www.siyaradigitals.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.siyaradigitals.com/#logo",
        "url": "https://www.siyaradigitals.com/logo.webp",
        "caption": "Siyara Innovations"
      },
      "image": "https://www.siyaradigitals.com/images/siyara_og_image.png",
      "description": "Jaipur-based digital marketing and web design agency engineering brand strategy, custom websites, SEO/GEO optimization, and automated growth systems.",
      "telephone": "+91-9587269209",
      "email": "info@siyaradigitals.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.9124,
        "longitude": 75.7873
      },
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:30",
          "closes": "19:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Jaipur"
        },
        {
          "@type": "State",
          "name": "Rajasthan"
        },
        {
          "@type": "Country",
          "name": "India"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/siyara-innovations",
        "https://www.instagram.com/siyaradigitals",
        "https://twitter.com/siyaradigitals"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.siyaradigitals.com/#website",
      "url": "https://www.siyaradigitals.com",
      "name": "Siyara Innovations",
      "publisher": {
        "@id": "https://www.siyaradigitals.com/#organization"
      }
    }
  ]
}
```

### Proposal B: Core Services Schema (for `app/services/page.jsx`)
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Web Design & Development Jaipur",
      "serviceType": "Web Development",
      "provider": { "@id": "https://www.siyaradigitals.com/#organization" },
      "areaServed": { "@type": "City", "name": "Jaipur" },
      "description": "High-performance bespoke web application design, UI/UX architecture, and Next.js development engineered for conversion and speed."
    },
    {
      "@type": "Service",
      "name": "SEO & GEO Services Jaipur",
      "serviceType": "Search Engine Optimization",
      "provider": { "@id": "https://www.siyaradigitals.com/#organization" },
      "areaServed": { "@type": "City", "name": "Jaipur" },
      "description": "Local SEO, technical search architecture, and Generative Engine Optimization for visibility across Google, ChatGPT, and Perplexity."
    },
    {
      "@type": "Service",
      "name": "Digital Marketing & Brand Strategy Jaipur",
      "serviceType": "Digital Marketing",
      "provider": { "@id": "https://www.siyaradigitals.com/#organization" },
      "areaServed": { "@type": "City", "name": "Jaipur" },
      "description": "Connected brand positioning, performance media, and growth automation for ambitious businesses."
    }
  ]
}
```

---

## 7. Proposed Code Changes (Diffs Grouped by Commit)

> [!NOTE]
> These diffs are proposals for review. In accordance with read-only audit instructions, **no files have been modified**.

### Commit 1: Fix Email Domain Mismatch & Global Hygiene
```diff
--- a/app/layout.jsx
+++ b/app/layout.jsx
@@ -48,3 +48,3 @@ export const metadata = {
-    site: '@siyaradigital',
+    site: '@siyaradigitals',
@@ -72,1 +72,1 @@ export default function RootLayout({ children }) {
-    <html lang="en" className="dark scroll-smooth">
+    <html lang="en-IN" className="dark scroll-smooth">
@@ -110,1 +110,1 @@ export default function RootLayout({ children }) {
-                    'email': 'info@siyaradigital.com',
+                    'email': 'info@siyaradigitals.com',
--- a/src/components/home/Footer.jsx
+++ b/src/components/home/Footer.jsx
@@ -67,5 +67,4 @@ export default function Footer() {
-                href="mailto:info@siyaradigital.com"
+                href="mailto:info@siyaradigitals.com"
                 className="font-sans text-xs font-semibold text-[#F3EFE3] hover:text-[#D9B45F] transition-colors flex items-center gap-2"
               >
                 <Mail className="w-3.5 h-3.5 text-[#D9B45F]" />
-              {/* TODO: confirm correct domain - currently info@siyaradigital.com, site is siyaradigitals.com (missing "s"). Fix once correct address is confirmed. */}
-                <span>info@siyaradigital.com</span>
+                <span>info@siyaradigitals.com</span>
--- a/src/components/layout/FloatingContact.jsx
+++ b/src/components/layout/FloatingContact.jsx
@@ -20,4 +20,4 @@ export default function FloatingContact() {
-        href="mailto:info@siyaradigital.com"
+        href="mailto:info@siyaradigitals.com"
-        aria-label="Email info@siyaradigital.com"
+        aria-label="Email info@siyaradigitals.com"
```

### Commit 2: Crawlability 301 Redirects for Legacy GSC URLs
Create `public/_redirects`:
```
/faq                         /contact                     301
/portfolio                   /work                        301
/our-work                    /work                        301
/industries                  /services                    301
/industries/fitness          /services                    301
/industries/hospitality      /services                    301
/services/ui-ux-design       /services                    301
/services/ai-agents          /services                    301
```

### Commit 3: Fix Homepage H1 Spacing & Accessibility
```diff
--- a/src/components/home/Hero.jsx
+++ b/src/components/home/Hero.jsx
@@ -147,3 +147,3 @@ export default function Hero() {
                   className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal text-[#F3EFE3]"
                 >
-                  WE BUILD BRANDS
+                  WE BUILD BRANDS{' '}
                 </motion.span>
@@ -157,3 +157,3 @@ export default function Hero() {
                   className="block font-sans text-sm sm:text-base lg:text-lg font-semibold tracking-[0.3em] text-[#D9B45F] uppercase my-2"
                 >
-                  THAT
+                  THAT{' '}
                 </motion.span>
--- a/src/components/home/Marquee.jsx
+++ b/src/components/home/Marquee.jsx
@@ -35,3 +35,3 @@ export default function Marquee() {
-        <div className="flex w-max animate-marquee space-x-12 items-center">
+        <div className="flex w-max animate-marquee space-x-12 items-center" aria-hidden="true">
```

### Commit 4: Fix Blog Mojibake & Encoding
```diff
--- a/src/components/blog/BlogHero.jsx
+++ b/src/components/blog/BlogHero.jsx
@@ -73,1 +73,1 @@ export default function BlogHero() {
-            <span className="text-[#D4AF37] font-sans uppercase tracking-widest text-[10px]">PUB Â· VOL 04</span>
+            <span className="text-[#D4AF37] font-sans uppercase tracking-widest text-[10px]">PUB · VOL 04</span>
```

### Commit 5: Metadata Length & Tag Optimization
```diff
--- a/app/layout.jsx
+++ b/app/layout.jsx
@@ -24,4 +24,3 @@ export const metadata = {
-  title: 'Siyara Innovations | Digital Marketing & Web Design Agency in Jaipur',
-  description: 'Siyara Innovations is a Jaipur-based digital agency building brand strategy, websites, SEO/GEO, and automation as one connected system, not six disconnected vendors. Book a strategy session.',
-  keywords: 'digital architecture studio, brand strategy, web design Jaipur, SEO Jaipur, digital marketing Rajasthan, web development India, AI automation, conversion optimisation, Siyara',
+  title: 'Digital Marketing & Web Design Agency in Jaipur | Siyara',
+  description: 'Siyara Innovations is Jaipur’s digital architecture agency. We build brand strategy, high-speed websites, SEO/GEO, and automation systems.',
   alternates: {
@@ -29,0 +28,4 @@ export const metadata = {
+  robots: {
+    index: true,
+    follow: true,
+    'max-image-preview': 'large',
+  },
```

---

## 8. Next Steps & Approval Gate

Audit completed in **READ-ONLY** mode. No code or asset files have been modified. 

Please review this report and indicate if you would like me to proceed with implementing:
1. Quick Wins (email mismatch, mojibake, H1 spacing, redirects, meta cleanup).
2. Structured Data (LocalBusiness + Service schemas).
3. Contact Form & API routing architecture.
