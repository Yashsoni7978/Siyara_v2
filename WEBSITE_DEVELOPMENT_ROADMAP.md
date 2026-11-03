# SIYARA INNOVATIONS — WEBSITE DEVELOPMENT ROADMAP

**Document Type:** Phased Implementation Roadmap & Engineering Priorities  
**Date:** October 2026  
**Auditor:** Antigravity AI Engineering Studio  
**Status:** Strategic Roadmap (Awaiting User Approval Before Code Execution)

---

## 1. Executive Summary & Strategy

This roadmap details the sequential execution plan for expanding and restructuring the Siyara Innovations web architecture. The sequence is strictly prioritized by **commercial enquiry generation power**—starting with high-intent trust and conversion assets, followed by technical routing resolution, industry proof reinforcement, and brand design token refinement.

```
PHASE 1: Technical & Routing Remediation (Immediate Health)
   │
PHASE 2: High-Intent Business Generator Pages (Case Studies & Hubs)
   │
PHASE 3: Industry Proof & Portfolio Curation
   │
PHASE 4: Editorial Silos & Semantic Crawlability
   │
PHASE 5: Visual Brand Token Alignment (Emerald/Sage Refactor)
```

---

## 2. Phased Development Roadmap

### PHASE 1 — Technical & Routing Bug Remediation (Zero Risk / Immediate)
*Goal: Eliminate crawl errors, broken internal links, and redirect loops across existing pages.*

1. **Unblock Hospitality Industry Page (`next.config.js`):**
   - Delete the conflicting redirect on line 64: `{ source: '/industries/hospitality', destination: '/services', permanent: true }`.
   - Result: Instantly reactivates `app/industries/hospitality/page.jsx` (16.4 KB of existing code) for visitors and search crawlers.
2. **Fix Broken Anchor Links on Homepage (`src/components/home/SelectedWork.jsx`):**
   - Replace dead link `<a href={`#project-${currentProject.id}`}>` with a link to `/work` or the upcoming `/work/[slug]` route.
3. **Eliminate Redirect Hops in Not Found & Blog Client:**
   - Update `app/not-found.jsx` line 60: Change `<Link href="/blog">` to `<Link href="/insights">`.
   - Update `app/blog/BlogClient.jsx` line 11: Change `router.push('/blog/' + article.slug)` to `router.push('/insights/' + article.slug)`.
4. **Implement Build-Time Static Generation for Services:**
   - Add `generateStaticParams()` to `app/services/[slug]/page.jsx` so that all 12 service pages are pre-rendered statically during build time rather than rendered on-demand.
5. **Verify Form Delivery Provider:**
   - Verify `RESEND_API_KEY` or `CONTACT_WEBHOOK_URL` in the hosting environment to prevent `400` errors on contact form submissions.

---

### PHASE 2 — High-Intent Business Generator Pages (Direct Revenue Impact)
*Goal: Build the pages that convert browsing prospects into scheduled consultations and high-ticket inquiries.*

1. **Individual Project Case Study Engine (`/work/[slug]`):**
   - **Why this is #1:** Enterprise clients do not commit ₹1,00,000 to ₹5,00,000+ without examining an in-depth case study of past technical craft.
   - **Deliverable:** Create `app/work/[slug]/page.jsx` with:
     - Client background, sector, and commercial challenge.
     - System architecture, tech stack breakdown, and design tokens.
     - Interactive iframe / live preview or high-res multi-device device mockup.
     - Deliverables list and measurable outcome benchmarks (e.g. Sub-1.8s LCP, Core Web Vitals score, SEO rankings).
     - Direct "Book Scoping Call" consultation CTA.
   - **Initial 6 Flagship Case Studies to Launch:**
     1. `/work/shri-property` (Real Estate Platform)
     2. `/work/dr-rajeshwari-sharma` (Medical Clinic Portal)
     3. `/work/varena-hospital` (Hospital Healthcare System)
     4. `/work/ember-and-ivory` (Luxury Wedding & Event Planner)
     5. `/work/studio-mitti` (Architecture & Interior Design)
     6. `/work/nettle-and-clay` (Headless D2C E-Commerce)
2. **Dedicated Master Industries Hub Page (`/industries`):**
   - Create `app/industries/page.jsx` to replace the temporary redirect to `/services`.
   - Feature clear sector cards for all 9 industries, highlighting the specific architectural challenges Siyara solves for each.
3. **Dedicated Social Media Marketing Service Page (`/services/social-media-marketing`):**
   - Add a 13th service data object in `SERVICES_DATA`.
   - Establish dedicated search visibility for *"social media marketing agency jaipur"* and *"b2b social media management"*.

---

### PHASE 3 — Industry Proof & Portfolio Curation
*Goal: Connect genuine demonstration projects directly into industry landing pages and clean up placeholder clutter.*

1. **Embed Real Demos on All Industry Landing Pages:**
   - Update `app/industries/jewellery-luxury/page.jsx` to feature fine jewellery prototypes (*Tarini* / *Rivaara*).
   - Update `app/industries/ecommerce/page.jsx` to embed *Nettle & Clay* (`https://nettle-and-clay.vercel.app/`).
   - Update `app/industries/hospitality/page.jsx` to feature *Aranya Resort* (`https://aranya-website-woad.vercel.app/`).
   - Update `app/industries/real-estate/page.jsx` to feature *Shri Property* and *Meridian Properties*.
2. **Curate Portfolio Archive (`src/data/projectsData.js`):**
   - Separate the 85 items into:
     - **Active Case Studies (12–16 high-fidelity projects):** Directly clickable to `/work/[slug]`.
     - **Interactive Demos (5–10 projects):** Tagged with live preview badges.
     - **Conceptual Stubs (Remaining 50+ placeholders):** Hide from the primary public grid or organize into a distinct "Exploratory Concepts / R&D" toggle to prevent diluting client trust.

---

### PHASE 4 — Editorial Silos & Semantic Crawlability
*Goal: Ensure 100% of internal article PageRank is passed to search crawlers without JavaScript dependencies.*

1. **Semantic Link Wrapper for Blog Cards:**
   - Refactor `src/components/blog/ArticleCard.jsx` and `FeaturedArticle.jsx` to wrap titles and cards in native `<Link href={`/insights/${article.slug}`}>` elements.
2. **Partition Cannibalizing Keyword Clusters:**
   - Clearly delineate the 3 pricing guides:
     - `/insights/website-cost-jaipur` (Jaipur local business pricing focus).
     - `/insights/custom-nextjs-website-price-india` (Custom React/Next.js engineering focus).
     - `/insights/website-development-cost-in-india-business-guide` (National SME cost overview).
   - Differentiate the 3 agency selection guides (`best-web-design-company-jaipur`, `how-to-choose-a-web-design-agency-in-jaipur`, `how-to-choose-digital-architecture-studio-rajasthan`).
3. **Two-Way Cross-Linking:**
   - Ensure every industry page links to its corresponding executive playbook (e.g. `/industries/healthcare` ↔ `/insights/clinic-hospital-website-design-jaipur`).

---

### PHASE 5 — Visual Brand Token Alignment (Emerald & Sage System)
*Goal: Refine the design system to adhere strictly to the client's visual direction.*

1. **Gold Token Deprecation:**
   - Audit and refactor CSS variables in `src/index.css`:
     - Deprecate `--siyara-champagne-gold: #D9B45F;` and `--siyara-light-gold: #E8C979;`.
     - Transition to a refined palette of deep obsidian black (`#070A09`), dark forest emerald (`#071E18`), luminous mint/emerald accent (`#18A982`, `#10B981`), sage muted accents, and warm ivory/off-white (`#F3EFE3`, `#ECE7D8`) sections.
2. **Asset Sanitization:**
   - Eliminate unnecessary stock photography of plants, stones, and generic concrete architecture.
   - Replace with bespoke digital architecture diagrams, mathematical grid tokens, and authentic studio interface viewports.

---

## 3. Recommended Development Sequence (First 10 Actions)

For maximum return on investment and immediate inquiry velocity:

| Step | Action | Impact |
|---|---|---|
| **1** | Delete line 64 redirect in `next.config.js` (`/industries/hospitality`) | Instantly restores 1 complete, fully authored industry page and clears GSC sitemap error. |
| **2** | Create `app/work/[slug]/page.jsx` dynamic route template | Provides the foundational architecture for all individual project case studies. |
| **3** | Author the first 3 core case studies: `/work/shri-property`, `/work/varena-hospital`, `/work/ember-and-ivory` | Gives high-ticket real estate, medical, and event prospects undeniable proof of craft. |
| **4** | Build `app/industries/page.jsx` (Industries Hub) and retire `/industries` redirect in `next.config.js` | Unifies all 9 industry verticals into a coherent, navigable sector gateway. |
| **5** | Add `generateStaticParams()` to `app/services/[slug]/page.jsx` | Converts 12 dynamic service pages to pre-rendered static HTML, boosting TTFB and Core Web Vitals. |
| **6** | Fix `SelectedWork.jsx` broken CTA anchor and update `not-found.jsx` / `BlogClient.jsx` legacy `/blog` links | Resolves all internal 301 hops and dead clicks for live users. |
| **7** | Add semantic `<Link>` wrappers to `ArticleCard.jsx` and `FeaturedArticle.jsx` | Allows Googlebot to crawl and index all 31 insight articles directly from the DOM without JS reliance. |
| **8** | Create `/services/social-media-marketing` dynamic service entry in `SERVICES_DATA` | Captures high-volume organic search queries for social media marketing services. |
| **9** | Author next 3 core case studies: `/work/studio-mitti`, `/work/dr-rajeshwari-sharma`, `/work/nettle-and-clay` | Establishes proof across interior design, physician practices, and e-commerce retail. |
| **10** | Refactor portfolio grid in `FeaturedWorkGrid.jsx` to prioritize real case studies over coming-soon stubs | Elevates perceived agency stature and removes barrier to conversion. |
