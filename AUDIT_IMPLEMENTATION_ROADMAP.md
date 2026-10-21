# SIYARA INNOVATIONS — IMPLEMENTATION ROADMAP & ACTION REGISTER
**Document ID:** AUDIT_IMPLEMENTATION_ROADMAP.md  
**Scope:** Actionable Sprint Breakdown, 2-Day Technical Plan, 20-Day SEO Execution, Owner Decisions & Verification Protocols  
**Repository:** `c:\Users\HP\Downloads\Siyara-v2`  
**Target Domain:** `https://www.siyaradigitals.com`  

---

## 1. Executive Implementation Strategy

To transform Siyara Innovations from a stalled website with 54 impressions into a high-ranking, high-converting digital agency in Jaipur, execution is structured into three distinct phases:
1. **Phase 1: The 48-Hour Technical Hotfix (P0 & P1 Fixes)** — Stabilize the conversion engine (form & WhatsApp), eliminate 404 leaks, fix email domain errors, remove deceptive client/author names, and restore SSR visibility to the H1 and services.
2. **Phase 2: The 20-Day SEO & Content Expansion** — Deploy schema graph, align copy with target verticals (Event Management, Doctors/Clinics, Interior Design, Small Business), publish legal pages, and establish Google Business Profile local signals.
3. **Phase 3: Ongoing Performance & Analytics Governance** — Monitor Search Console indexing, verify Core Web Vitals in real-world conditions, and measure lead conversion rates.

---

## 2. Two-Day Technical Implementation Plan (48-Hour Sprint)

### Day 1: Conversion Pipeline, Hygiene & Crawlability (P0)

| Time Window | Task ID | Area | Action Description | Exact Target File | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **09:00 - 10:30** | **P0-01** | Contact / Vercel | Remove `output: 'export'` from `next.config.js`. Update `app/api/contact/route.js` to strictly enforce email delivery via Resend free tier or Google Apps Script. Return HTTP 500 on failure; never return false success. | `next.config.js:4`, `app/api/contact/route.js:1–56` | Trigger test submission; verify email inbox arrival; verify error modal on failed network. |
| **10:30 - 11:30** | **P0-02** | WhatsApp Switch | Replace all 5 phone call links (`tel:9587269209`) with WhatsApp click-to-chat links (`https://wa.me/919587269209`). Remove all cellular call icons. | `WorkCTA.jsx`, `FinalCTA.jsx`, `Footer.jsx`, `FloatingContact.jsx`, `ContactDetails.jsx` | Click every button on mobile simulator; verify WhatsApp opens with pre-filled message. |
| **11:30 - 12:30** | **P0-03** | Email Hygiene | Globally replace `info@siyaradigital.com` with `info@siyaradigitals.com` across all metadata, schema, and UI files. | `layout.jsx`, `Footer.jsx`, `ContactDetails.jsx`, `FloatingContact.jsx` | Grep for `siyaradigital.com` returns 0 occurrences. |
| **13:30 - 14:30** | **P0-04** | Redirects | Add 301 redirects in `next.config.js` and `public/_redirects` for the 7 legacy GSC 404 URLs (`/faq`, `/portfolio`, `/industries`, etc.). | `next.config.js`, `public/_redirects` | `curl -I https://www.siyaradigitals.com/portfolio` returns 301 to `/work`. |
| **14:30 - 15:30** | **P0-05** | Route Duplication | Delete `app/our-work/` folder. Add 301 redirect `/our-work` -> `/work`. Remove `/our-work` from `app/sitemap.js`. Delete `public/sitemap.xml`. | `app/our-work/`, `app/sitemap.js`, `public/sitemap.xml` | Visiting `/our-work` redirects to `/work`; `/sitemap.xml` lists only 200 OK routes. |
| **15:30 - 17:30** | **P0-06** | False Clients | Replace 7 fictional client names in `Marquee.jsx` with 8 core capability and industry vertical terms. Add `aria-hidden="true"` to duplicate track. | `src/components/home/Marquee.jsx` | Inspect DOM; verify no fake client names; verify screen reader accessibility. |

### Day 2: Rendering, Metadata & E-E-A-T Stabilization (P1)

| Time Window | Task ID | Area | Action Description | Exact Target File | Verification Method |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **09:00 - 10:30** | **P1-01** | H1 DOM Spacing | Add inter-element spacing between block spans in `Hero.jsx`. Remove inline `opacity: 0` from initial SSR render. | `src/components/home/Hero.jsx:141–171` | `document.querySelector('h1').textContent` outputs `"WE BUILD BRANDS THAT DOMINATE."` with correct spaces. |
| **10:30 - 11:30** | **P1-02** | Mojibake Encoding | Replace `PUB Â· VOL 04` with `PUB · VOL 04` in `BlogHero.jsx:73`. Batch-clean `â€”`, `â€™`, and `â€“` across `src/data/blogArticles.js`. | `BlogHero.jsx`, `blogArticles.js` | Grep for `Â` returns 0 results. Blog header displays clean middle dot. |
| **11:30 - 13:00** | **P1-03** | Fictional Authors | Remove Julian Vance, Elena Rostova, Marcus Sterling, Dr. Aris Thorne, Sora Tanaka. Re-attribute all articles to "Siyara Innovations Editorial Team". | `src/data/blogArticles.js`, `app/blog/[slug]/page.jsx` | Blog cards and JSON-LD schema display institutional organization authorship. |
| **14:00 - 15:30** | **P1-04** | Metadata Overhaul | Update `<html lang="en-IN">`. Delete meta `keywords`. Truncate all page titles to <= 60 chars and descriptions to <= 160 chars. | `app/layout.jsx`, `app/about/page.jsx`, `app/services/page.jsx`, `app/blog/page.jsx` | Inspect `<head>` tags in browser; verify character limits and geo-locale. |
| **15:30 - 17:30** | **P1-05** | Service SSR Render | Ensure all 8 service disciplines in `ServiceIndex.jsx` are rendered in semantic SSR HTML rather than hidden behind client React state. | `src/components/services/ServiceIndex.jsx` | Disable JavaScript; verify all 8 discipline descriptions and sub-services appear in page source. |

---

## 3. Twenty-Day Local SEO & Content Execution Plan

### Days 3–5: Legal & Trust Foundation
- **Day 3:** Create `app/privacy/page.jsx` and `app/terms/page.jsx`. Link them from `Footer.jsx` (replacing `href="#"`).
- **Day 4:** Deploy LocalBusiness / ProfessionalService Schema.org JSON-LD graph in `app/layout.jsx` and Core Services schema in `app/services/page.jsx`.
- **Day 5:** Validate complete schema graph on [Google Rich Results Test](https://search.google.com/test/rich-results). Confirm zero errors.

### Days 6–10: Commercial Vertical Alignment
- **Day 6:** Update `src/components/home/Industries.jsx` to feature the 4 actual target verticals: Event Management, Doctors & Clinics, Interior Design, Small Businesses.
- **Day 7:** Re-label `*.vercel.app` links in `projectsData.js` as *"Interactive Client Showcase (Confidential Delivery)"*.
- **Day 8:** Enrich `/services` copy with specific commercial packages for Jaipur businesses (e.g. Clinic Patient Funnels, Interior Designer Portfolios).
- **Day 9:** Clean unsourced statistics across blog posts (`40%`, `35%`, `3.2x`, `70%`).
- **Day 10:** Create an FAQ component on `/services` and `/contact` with corresponding `FAQPage` JSON-LD schema.

### Days 11–15: Local SEO & Google Business Profile (GBP) Synchronization
- **Day 11:** Verify Siyara Innovations Google Business Profile (GBP). Ensure Name, Category (*"Website Designer"*, *"Internet Marketing Service"*), and City (*Jaipur, Rajasthan*) match website NAP.
- **Day 12:** Add WhatsApp business chat link and website link (`https://www.siyaradigitals.com`) to Google Business Profile.
- **Day 13:** Interlink blog articles to commercial service anchors (e.g., link *"Local SEO Checklist"* to `/services#seo`).
- **Day 14:** Implement Google Search Console verification token in `app/layout.jsx`.
- **Day 15:** Submit updated `https://www.siyaradigitals.com/sitemap.xml` directly inside Google Search Console.

### Days 16–20: Core Web Vitals & Free Analytics Telemetry
- **Day 16:** Implement CSS-variable cursor spotlight in `CursorSpotlight.jsx` to eliminate React re-renders on mousemove.
- **Day 17:** Cache `getBoundingClientRect()` in `Hero.jsx` to prevent forced layout reflows.
- **Day 18:** Set up Google Analytics 4 (GA4) via `@next/third-parties/google` (100% free).
- **Day 19:** Add conversion event dispatchers for WhatsApp button clicks (`event: 'whatsapp_click'`) and lead form submissions (`event: 'generate_lead'`).
- **Day 20:** Run complete production crawl and Core Web Vitals audit. Request re-indexing of `/`, `/services`, `/about`, `/work`, and `/contact` in Google Search Console.

---

## 4. Owner Decisions Requiring Input

The following items cannot be determined unilaterally and require confirmation from the business owner:

| Decision # | Area | Question / Decision Required | Recommendation |
| :--- | :--- | :--- | :--- |
| **DEC-01** | Contact Form Email Service | Which free email delivery service do you prefer for form alerts? | **Resend Free Tier** (3,000 emails/month free, clean Next.js SDK, sends directly to `info@siyaradigitals.com`). |
| **DEC-02** | WhatsApp Greeting Text | What default message should pre-populate when a prospect clicks WhatsApp? | *"Hello Siyara Innovations, I would like to discuss a project for my business in Jaipur (Web / SEO / Social / Branding)."* |
| **DEC-03** | Portfolio Client Confidentiality | For Vercel demo URLs (`shri-properties.vercel.app`, etc.), should we display real project titles or anonymize client brand names? | Display real industry categories with label: *"Confidential Client Delivery — Interactive Prototype"*. |
| **DEC-04** | Google Analytics 4 ID | Do you have an existing GA4 Measurement ID (`G-XXXXXXXXXX`)? | If yes, provide it; if not, create a free property under your Google account. |
| **DEC-05** | Google Search Console Token | Do you have your HTML verification meta tag string from GSC? | Provide the string `google-site-verification=...` so we can include it in `layout.jsx`. |

---

## 5. Master Action Register

| Finding ID | Priority | Category | File Path | Short Description | Effort | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **CONV-01** | **P0** | Conversion / API | `next.config.js:4`, `app/api/contact/route.js` | Remove `output: 'export'`, fix silent drop, enforce Resend delivery | 2h | Ready |
| **COM-01** | **P0** | Conversion / UX | All 5 CTA / contact components | Replace all `tel:` call links with WhatsApp click-to-chat | 1h | Ready |
| **SEC-01** | **P0** | Trust / Email | `layout.jsx`, `Footer.jsx`, `ContactDetails.jsx` | Fix email domain spelling (`siyaradigital` -> `siyaradigitals`) | 30m | Ready |
| **SEO-01** | **P0** | Crawlability | `next.config.js`, `public/_redirects` | Implement 301 redirects for 7 legacy GSC 404 URLs | 45m | Ready |
| **SEO-02** | **P0** | Crawlability | `app/our-work/`, `app/sitemap.js` | Delete `/our-work`, redirect to `/work`, clean sitemap | 30m | Ready |
| **TRUST-01** | **P0** | E-E-A-T / Trust | `src/components/home/Marquee.jsx:5–13` | Remove 7 fake client names, replace with capabilities/verticals | 30m | Ready |
| **SEO-03** | **P1** | Headings / DOM | `src/components/home/Hero.jsx:141–171` | Fix H1 word spacing bug (`BRANDSTHATDOMINATE`) and SSR opacity | 45m | Ready |
| **CONT-01** | **P1** | Content / Encoding | `BlogHero.jsx:73`, `src/data/blogArticles.js` | Fix `PUB Â· VOL 04` and batch-clean UTF-8 mojibake | 45m | Ready |
| **EAT-01** | **P1** | E-E-A-T / Content | `src/data/blogArticles.js` | Remove 5 fake authors; attribute to "Siyara Innovations" | 1h | Ready |
| **SEO-04** | **P1** | Metadata / i18n | `app/layout.jsx:72`, `app/*` | Set `lang="en-IN"`, remove `keywords`, optimize title/desc lengths | 1h | Ready |
| **SEO-05** | **P1** | Rendering | `src/components/services/ServiceIndex.jsx` | Ensure all 8 disciplines are server-rendered in initial HTML | 1.5h | Ready |
| **SEO-06** | **P1** | Structured Data | `app/layout.jsx`, `app/services/page.jsx` | Add LocalBusiness, Service array, and BreadcrumbList schemas | 2h | Ready |
| **LEGAL-01** | **P1** | Trust / Legal | `app/privacy/page.jsx`, `app/terms/page.jsx` | Create Privacy Policy and Terms of Service, fix footer `#` links | 1.5h | Ready |
| **PERF-01** | **P2** | Performance / INP | `src/components/common/CursorSpotlight.jsx` | Replace unthrottled React state mousemove with CSS variables | 1h | Ready |
| **PERF-02** | **P2** | Performance / INP | `src/components/home/Hero.jsx:38–51` | Cache `getBoundingClientRect()` to prevent forced reflows | 45m | Ready |
| **ASSET-01** | **P2** | Performance / Assets | `next.config.js:5–13`, `public/images/` | Enable Vercel image optimization; archive 27MB unused PNGs | 1h | Ready |
| **ASSET-02** | **P2** | Performance / Fonts | `app/layout.jsx:8–20` | Trim Cormorant and Manrope fonts to used weights (400, 600, 700) | 30m | Ready |
| **A11Y-01** | **P2** | Accessibility | `src/components/home/Marquee.jsx` | Add `aria-hidden="true"` to duplicate marquee tracks | 15m | Ready |
| **ANLYT-01** | **P2** | Telemetry | `app/layout.jsx`, contact components | Add free GA4 and conversion event tracking for WhatsApp & form | 1h | Ready |

---

## 6. Production Verification Checklist (Pre-Launch & Post-Launch)

- [ ] `POST /api/contact` receives payload and delivers verified email alert.
- [ ] Submitting contact form with network offline displays clear WhatsApp fallback message; never displays false success.
- [ ] Every phone number link (`tel:`) is deleted. Every contact button launches WhatsApp with `+91 95872 69209`.
- [ ] Search for `siyaradigital.com` returns 0 occurrences across all source files.
- [ ] `curl -I https://www.siyaradigitals.com/faq` returns `HTTP/2 301` to `/contact`.
- [ ] `curl -I https://www.siyaradigitals.com/portfolio` returns `HTTP/2 301` to `/work`.
- [ ] `curl -I https://www.siyaradigitals.com/our-work` returns `HTTP/2 301` to `/work`.
- [ ] `sitemap.xml` loads cleanly without `/our-work`, with valid `<loc>` and `<lastmod>` tags.
- [ ] Marquee displays core services/verticals; zero fake client names.
- [ ] Document title for `/` is under 60 characters and contains `"Web Design"`, `"SEO"`, and `"Jaipur"`.
- [ ] Blog author displays as `"Siyara Innovations Editorial Team"`; zero Unsplash author headshots.
- [ ] Grep for `Â` returns 0 results across repository.
- [ ] Schema validation at `search.google.com/test/rich-results` passes with zero errors.
- [ ] Google Search Console sitemap submitted and indexing requested for core pages.
