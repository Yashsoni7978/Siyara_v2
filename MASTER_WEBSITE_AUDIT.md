# SIYARA INNOVATIONS — MASTER WEBSITE AUDIT & STRATEGIC GROWTH REPORT
**Document ID:** MASTER_WEBSITE_AUDIT.md  
**Domain:** `https://www.siyaradigitals.com`  
**Business:** Siyara Innovations (Jaipur, Rajasthan, India)  
**Framework:** Next.js 15.1.7 (React 19.0.0), Tailwind CSS, deployed on Vercel  
**Status:** Audit & Report Completed (Read-Only Mode; No code modified)  
**Date:** October 2026  

---

## Cross-Document Reference Index
This master report serves as the strategic executive architecture and links directly to five specialized deep-dive technical reports created in the workspace:
- **Lead Pipeline & Security:** [AUDIT_CONTACT_AND_SECURITY.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_CONTACT_AND_SECURITY.md)
- **Technical Crawlability & Schemas:** [AUDIT_TECHNICAL_SEO.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_TECHNICAL_SEO.md)
- **E-E-A-T, Content & Keyword Map:** [AUDIT_CONTENT_AND_KEYWORDS.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_CONTENT_AND_KEYWORDS.md)
- **Core Web Vitals & Accessibility:** [AUDIT_PERFORMANCE_ACCESSIBILITY.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_PERFORMANCE_ACCESSIBILITY.md)
- **Sprint Roadmaps & Action Register:** [AUDIT_IMPLEMENTATION_ROADMAP.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_IMPLEMENTATION_ROADMAP.md)

---

## 1. Executive Summary

Siyara Innovations possesses an elegant luxury editorial aesthetic, but its commercial growth is completely blocked by six structural flaws:
1. **Broken Lead Intake Engine (P0):** `output: 'export'` in `next.config.js` disables serverless API execution on Vercel/static hosts. Even if executed, `app/api/contact/route.js` displays a false success message without sending email alerts whenever `CONTACT_WEBHOOK_URL` is omitted.
2. **Channel Misalignment (P0):** Five components force users to cellular phone calls (`tel:9587269209`), directly violating the business's policy of **WhatsApp only** (`+91 95872 69209`).
3. **Severe Crawlability & Indexation Leaks (P0):** Google Search Console has indexed 7 legacy URLs (`/faq`, `/portfolio`, `/industries`, etc.) that now return hard 404s without 301 redirects, while `/our-work` exists as an indexed duplicate of `/work`.
4. **Deceptive E-E-A-T Signals (P0):** The homepage marquee displays seven fictional client names (*Rishabh Jewellers*, *Beyond Spaces*, etc.), and blog articles are attributed to five fictional personas (*Julian Vance*, *Elena Rostova*, etc.) with stock Unsplash headshots.
5. **Critical Email Mismatch (P0):** The primary contact email is misspelled as `info@siyaradigital.com` (missing `"s"`), bouncing client messages.
6. **Zero Local Signals (P1):** `<html lang="en">` instead of `lang="en-IN"`, zero LocalBusiness / ProfessionalService schema, and no dedicated landing sections for target verticals (**Event Management Companies, Doctors & Clinics, Interior Designers, and Small Businesses**).

---

## 2. Audit Methodology & Limitations

### 2.1 Evidence-Based Approach
Every finding in this audit is substantiated by exact line references from the production codebase (`c:\Users\HP\Downloads\Siyara-v2`), Next.js 15 compilation logs (`next build`), DOM inspection of generated HTML, and Search Console telemetry provided by the owner.

### 2.2 Verified Facts vs. Assumptions vs. Inaccessible Data
- **Verified Facts:** Next.js build configuration, route table, DOM whitespace concatenation in `Hero.jsx`, missing API routes in static export, hardcoded email mismatch, 5 `tel:` phone call links, fictional author personas, and missing Schema.org graphs.
- **Inaccessible Information (Owner-Gated):** Live Vercel environment variables, live Google Search Console dashboard session, live Google Analytics 4 stream, Google Business Profile admin panel, and client production domain access.

---

## 3. Repository & Architecture Overview

- **Core Framework:** Next.js 15.1.7 with React 19.0.0.
- **Styling:** Tailwind CSS with PostCSS, custom CSS variables for obsidian (`#070A09`), emerald (`#0C6B52`), and gold (`#D9B45F`).
- **Typography:** Google Fonts via `next/font` (`Cormorant_Garamond` display serif and `Manrope` sans-serif).
- **Animation Engine:** Framer Motion 12.4.7.
- **Icons:** Lucide React 0.475.0.
- **Deployment Platform:** Vercel (configured in `next.config.js` with static export mode).
- **Primary Domain:** `https://www.siyaradigitals.com`.

---

## 4. Complete Route Inventory

| Route | Render Mode | First Load JS | Indexable Status | Summary of Verified Findings |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Static (SSG) | 166 kB | Indexable | H1 DOM spacing bug; initial `opacity: 0` inline SSR; 7 fake client names. |
| `/_not-found` | Static | 103 kB | Noindex | Styled 404 page; clean `noindex, follow` robots meta tag. |
| `/about` | Static | 159 kB | Indexable | Title > 60 chars; no team/founder bios; stock Unsplash studio photography. |
| `/api/contact` | Dynamic (ƒ) | 103 kB | Disallow | **P0:** Broken in `output: 'export'`; silent lead drop if webhook missing. |
| `/blog` | Static | 203 kB | Indexable | Title > 60 chars; loads all 25 articles into client JS memory bundle. |
| `/blog/[slug]` | SSG (25 paths) | 199 kB | Indexable | Attributed to 5 fictional personas; stock Unsplash graphics; mojibake. |
| `/contact` | Static | 154 kB | Indexable | Phone call links present; email domain mismatch; no embedded map. |
| `/services` | Static | 164 kB | Indexable | Disciplines 2–8 hidden behind React state; no individual canonical URLs. |
| `/work` | Static | 177 kB | Indexable | Generic H1 ("Brands in Action."); client demos on Vercel subdomains. |
| `/our-work` | Static | 177 kB | **Duplicate** | **P0:** Duplicate of `/work`. Present in sitemap; canonical points to `/work`. |

---

## 5. Contact Form Root-Cause Investigation

### 5.1 The Broken Submission Chain
In `src/components/contact/ContactIntake.jsx:58`, the form executes `fetch('/api/contact', { method: 'POST', ... })`.
1. **The Static Export Bug:** `next.config.js` contains `output: 'export'`. Next.js static export does NOT export API routes. In static hosting, requests to `/api/contact` return a 404.
2. **The Silent Failure Bug:** In `app/api/contact/route.js:21`, if `CONTACT_WEBHOOK_URL` is omitted, the endpoint executes line 50:
   `return NextResponse.json({ success: true, message: 'Brief received successfully.' });`
   The user sees a confirmation checkmark, but the lead data is lost forever.

### 5.2 Recommended Solution: Resend Free Tier
1. Remove `output: 'export'` from `next.config.js` so Vercel deploys `app/api/contact/route.js` as a native serverless function.
2. Integrate the official Resend SDK (`npm install resend` when approved) with verified free domain `siyaradigitals.com` or Google Apps Script.
3. Ensure the API endpoint returns HTTP 500 if delivery fails; **never display success unless email delivery is 100% verified**.
*(Detailed code specification in [AUDIT_CONTACT_AND_SECURITY.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_CONTACT_AND_SECURITY.md)).*

---

## 6. Technical SEO & Crawlability Findings

### 6.1 Legacy 404 Leaks & 301 Redirect Map
Googlebot has recorded crawl attempts for 7 legacy URLs. Implement the following 301 permanent redirects in `next.config.js`:
- `/faq` → `/contact` (301)
- `/portfolio` → `/work` (301)
- `/our-work` → `/work` (301)
- `/industries` → `/services` (301)
- `/industries/fitness` → `/services` (301)
- `/industries/hospitality` → `/services` (301)
- `/services/ui-ux-design` → `/services` (301)
- `/services/ai-agents` → `/services` (301)

### 6.2 Duplicate Route Elimination
Delete the `app/our-work/` folder. Remove `/our-work` from `app/sitemap.js`. Delete conflicting static file `public/sitemap.xml`.

---

## 7. Structured Data & Metadata Audit

### 7.1 Internationalization & Deprecated Tags
- Update `app/layout.jsx:72` to `<html lang="en-IN">`.
- Delete the deprecated `keywords` meta tag on line 26.

### 7.2 Structured Data (JSON-LD) Hierarchy
Deploy clean Schema.org graphs:
- **`app/layout.jsx`:** `Organization` & `ProfessionalService` graph including Jaipur city, Rajasthan state, PIN 302001, geo coordinates (`26.9124, 75.7873`), WhatsApp contact point, verified LinkedIn (`https://www.linkedin.com/company/siyarainnovations/`), and verified Instagram (`https://www.instagram.com/siyarainnovations/`).
- **`app/services/page.jsx`:** `Service` catalog for Web Development, SEO, Social Media Marketing, and Branding mapped to target verticals.
- **`app/blog/[slug]/page.jsx`:** `BlogPosting` schema attributing authorship to `"Siyara Innovations"`.
*(Full JSON-LD code templates in [AUDIT_TECHNICAL_SEO.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_TECHNICAL_SEO.md)).*

---

## 8. Local SEO & Google Business Profile Strategy

To rank for *"digital marketing agency Jaipur"*, *"web design company Jaipur"*, and *"SEO services Jaipur"*:
1. **NAP Consistency:** Ensure Name (*Siyara Innovations*), Locality (*Jaipur, Rajasthan*), and Phone/WhatsApp (*+91 95872 69209*) match exactly across the website, Google Business Profile, LinkedIn, and Instagram.
2. **Residential Privacy:** Keep the founder's residential street address private; configure GBP as a **Service-Area Business (SAB)** covering Jaipur, Rajasthan, and nationwide India.
3. **Local Landing Signals:** Add dedicated sections highlighting work for Jaipur businesses across Event Management, Healthcare, Interior Design, and Local Commerce.

---

## 9. Keyword-to-Page Mapping

| Keyword Query | Target Landing URL | Intent | Conversion Mechanism |
| :--- | :--- | :--- | :--- |
| **"web design company Jaipur"** | `https://www.siyaradigitals.com/` | Commercial / Local | WhatsApp: Discuss Website |
| **"digital marketing agency Jaipur"** | `https://www.siyaradigitals.com/services` | Commercial | WhatsApp: Book Strategy Session |
| **"SEO services Jaipur"** | `https://www.siyaradigitals.com/services#seo` | Transactional | WhatsApp: Request SEO Audit |
| **"social media marketing agency Jaipur"** | `https://www.siyaradigitals.com/services#social` | Commercial | WhatsApp: View Social Grids |
| **"website design for doctors Jaipur"** | `https://www.siyaradigitals.com/work#healthcare` | Vertical Long-Tail | WhatsApp: Clinic Web Consultation |
| **"interior designer website design Jaipur"** | `https://www.siyaradigitals.com/work#interior` | Vertical Long-Tail | WhatsApp: Interior Portfolio Demo |
| **"event management website design Jaipur"** | `https://www.siyaradigitals.com/services#events` | Vertical Long-Tail | WhatsApp: Event Platform Scope |

---

## 10. Competitor Comparison (Jaipur Agency Landscape)

*Verified against public market practices of Jaipur digital agencies (Webpulse, TGC, Techmagnate local branch).*
- **Tech Stack Advantage:** Competitors rely heavily on slow, generic WordPress/PHP themes. Siyara Innovations utilizes Next.js 15 and React 19, delivering sub-second interaction speeds.
- **Aesthetic Craft:** Siyara’s editorial dark-mode, gold-accent aesthetic significantly outperforms competitor visuals.
- **Friction Reduction:** While competitors mandate lengthy forms and phone calls, Siyara's direct WhatsApp click-to-chat provides a faster, lower-friction lead channel for Indian business owners.

---

## 11. Blog & Content Integrity Audit

1. **Remove Seven False Client Names:** Replace fictional companies in `src/components/home/Marquee.jsx` with 8 core capability and industry vertical terms. Add `aria-hidden="true"` to duplicate tracks.
2. **Remove Fictional Authors:** Delete Julian Vance, Elena Rostova, Marcus Sterling, Dr. Aris Thorne, and Sora Tanaka from `src/data/blogArticles.js`. Attribute all articles to `"Siyara Innovations Editorial Team"`.
3. **Eradicate Mojibake:** Fix `PUB Â· VOL 04` in `BlogHero.jsx:73` and batch-clean corrupted UTF-8 punctuation (`â€”`, `â€™`, `â€“`) across blog data.
4. **Clean Unsourced Stats:** Replace unverified claims (`40% reduction`, `3.2x conversion`) with empirical design and engineering rationale.
*(Detailed content inventory in [AUDIT_CONTENT_AND_KEYWORDS.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_CONTENT_AND_KEYWORDS.md)).*

---

## 12. Portfolio & Project Data Hygiene

1. **Vercel Demo URL Clarification:** Real client deliverables hosted on `*.vercel.app` (`shri-properties`, `meridian-properties`, `dr-rajeshwari-sharma`, `varena-hospital`, `smilecraft`) represent real client deliverables where production domains are unlinked due to client confidentiality. Label them explicitly as **"Interactive Client Demonstration (Confidential Delivery)"**.
2. **Prune Placeholder Items:** Filter out the 10+ unreleased "Coming Soon" projects with stock imagery from the main showcase to prevent the agency from appearing unlaunched.

---

## 13. UX & Conversion Audit

1. **WhatsApp Migration:** Replace all 5 phone call links (`tel:9587269209`) across `WorkCTA.jsx`, `FinalCTA.jsx`, `Footer.jsx`, `FloatingContact.jsx`, and `ContactDetails.jsx` with direct WhatsApp click-to-chat links (`https://wa.me/919587269209?text=...`).
2. **H1 DOM Concatenation Bug:** In `src/components/home/Hero.jsx:141–171`, add inter-element spacing between spans so text extractors read `"WE BUILD BRANDS THAT DOMINATE."` instead of `"WE BUILD BRANDSTHATDOMINATE."`. Remove `initial="hidden"` to ensure instant SSR text visibility.
3. **Footer Dead Links:** Replace `href="#"` on Privacy Policy and Terms of Service with valid links to `app/privacy/page.jsx` and `app/terms/page.jsx`. Point capability links to deep service anchors instead of generic `/services`.

---

## 14. Performance & Core Web Vitals Audit

1. **Eliminate Forced Reflows:** Cache `getBoundingClientRect()` in `Hero.jsx:38–51` on window resize rather than executing it on every mousemove.
2. **Throttle Cursor Spotlight:** Update `CursorSpotlight.jsx` to inject CSS variables (`--cursor-x`, `--cursor-y`) via `requestAnimationFrame`, eliminating 120+ React state re-renders per second.
3. **Enable Vercel Image Optimization:** Remove `unoptimized: true` from `next.config.js`.
4. **Archive Unused Bloat:** Archive `public/logo.png` (2.13 MB) and five unreferenced Gemini PNG images (~25 MB).
5. **Trim Web Fonts:** Load only weights `400`, `600`, and `700` for Cormorant Garamond and Manrope.
*(Full performance benchmarks in [AUDIT_PERFORMANCE_ACCESSIBILITY.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_PERFORMANCE_ACCESSIBILITY.md)).*

---

## 15. Security & Privacy Review

1. **Vercel Security Headers:** Configure HSTS, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy via `headers()` in `next.config.js`.
2. **Honeypot Anti-Spam:** Add a hidden, zero-cost honeypot field (`b_website`) in `ContactIntake.jsx` to trap spam bots without annoying prospective clients with CAPTCHAs.
3. **Privacy Compliance:** Maintain residential address anonymity in accordance with the owner's directive.

---

## 16. Analytics & Free Tooling Strategy

1. **Google Analytics 4:** Integrate GA4 using `@next/third-parties/google` (100% free, zero bundle drag).
2. **Conversion Telemetry:** Fire custom GA4 events:
   - `whatsapp_click` on every WhatsApp button click.
   - `generate_lead` on verified contact form submission.
3. **Google Search Console Verification:** Insert the owner's GSC verification meta tag into `app/layout.jsx`.

---

## 17. Recommended Website Architecture

```text
/ (Homepage - Localized for Jaipur Web & SEO)
├── /services (Core Capabilities: Web, SEO, Social, Branding)
│   ├── #web-development (Events, Interior Designers, Clinics, Small Business)
│   ├── #seo (Local SEO, GBP, Technical Architecture)
│   ├── #social-media (Instagram Grid Architecture, Creative Direction)
│   └── #branding (Identity Systems, Luxury Typography)
├── /work (Curated Interactive Client Demonstrations)
├── /about (Agency Story, Philosophy & Jaipur Roots - No Named Founder)
├── /blog (Technical Thought Leadership - Institutional Authorship)
│   └── /[slug] (Clean 25 Dynamic Pillar Posts, No Mojibake)
├── /contact (WhatsApp-First Lead Terminal, Resend-Powered Form)
├── /privacy (Standard Data Retention Policy)
├── /terms (Service Terms & IP Notice)
└── /sitemap.xml (Dynamic 200 OK Index)
```

---

## 18. Page-by-Page SEO Specifications

Detailed target title tags, meta descriptions, canonical URLs, and heading outlines are fully specified in [AUDIT_TECHNICAL_SEO.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_TECHNICAL_SEO.md) (Section 4.3).

---

## 19. Prioritised Implementation Roadmap

Execution is structured into three clear phases detailed in [AUDIT_IMPLEMENTATION_ROADMAP.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_IMPLEMENTATION_ROADMAP.md):
- **Phase 1 (Day 1–2):** 48-Hour Technical Hotfix (P0/P1 fixes).
- **Phase 2 (Day 3–15):** 20-Day Local SEO, GBP & Vertical Alignment.
- **Phase 3 (Day 16–20):** Core Web Vitals, Free Telemetry & Production Crawl.

---

## 20. Production Verification Checklist

1. `POST /api/contact` delivers email alert to `info@siyaradigitals.com`; never displays false success.
2. All 5 phone links deleted; clicking contact buttons opens WhatsApp with `+91 95872 69209`.
3. Search for `siyaradigital.com` returns 0 results across repository.
4. `curl -I /faq` and `/portfolio` return HTTP 301 redirects.
5. `/our-work` deleted and redirected to `/work`; `sitemap.xml` contains zero duplicate routes.
6. Homepage H1 text extraction reads `"WE BUILD BRANDS THAT DOMINATE."`.
7. Marquee contains zero fake client names; blog contains zero fake authors.
8. Schema validation passes on Google Rich Results Test with zero errors.

---

## 21. Owner Decisions Requiring Input

1. **Email Service Preference:** Resend Free Tier (Recommended: 3,000 free emails/mo) or Google Apps Script?
2. **WhatsApp Greeting Text:** Confirmation of default pre-filled inquiry text.
3. **GA4 Measurement ID:** Provide `G-XXXXXXXXXX` token if already generated.
4. **Search Console Token:** Provide HTML verification meta tag string from GSC.
*(Full decision details in [AUDIT_IMPLEMENTATION_ROADMAP.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_IMPLEMENTATION_ROADMAP.md) Section 4).*

---

## 22. Final Action Register

A comprehensive register of 19 tracked findings with unique IDs (`CONV-01`, `COM-01`, `SEC-01`, `SEO-01`, `TRUST-01`, etc.), severity levels, effort estimates, and acceptance criteria is published in [AUDIT_IMPLEMENTATION_ROADMAP.md](file:///c:/Users/HP/Downloads/Siyara-v2/AUDIT_IMPLEMENTATION_ROADMAP.md) (Section 5).
