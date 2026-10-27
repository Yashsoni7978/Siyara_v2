# SIYARA INNOVATIONS — COMPLETE WEBSITE ROUTE INVENTORY

**Document Type:** Technical Routing & Page Inventory Audit  
**Date:** October 2026  
**Auditor:** Antigravity AI Engineering Studio  
**Status:** Complete Audit (Non-Destructive)  
**Framework:** Next.js 15.1.7 (React 19.0.0, Framer Motion 12.4.7, Tailwind CSS 4.0.7)  
**Routing Architecture:** Next.js App Router (`app/` directory)

---

## 1. Executive Summary & Routing Architecture

Siyara Innovations (`siyaradigitals.com`) is architected using the Next.js 15 App Router. The repository contains zero legacy Pages Router (`pages/`) directories. All static routes, dynamic segments, API handlers, metadata endpoints, and layout hierarchies reside inside `app/`.

### Architecture Breakdown:
- **Root Layout:** `app/layout.jsx` wraps all routes with global font loading (`Manrope` and `Cormorant Garamond`), root Schema.org Organization JSON-LD (`getRootOrganizationGraph`), desktop/mobile navigation (`Navbar`), shared footer (`Footer`), floating contact widget (`FloatingContact`), and cursor spotlight (`CursorSpotlight`).
- **Static Page Routes:** 22 physical `page.jsx` route files in `app/`.
- **Dynamic Route Templates:** 3 dynamic route templates:
  - `app/services/[slug]/page.jsx` (Serves 12 static service offerings via exported `SERVICES_DATA`).
  - `app/insights/[slug]/page.jsx` (Serves 31 static articles via `generateStaticParams()`).
  - `app/blog/[slug]/page.jsx` (Serves 0 static pages; returns `[]` in `generateStaticParams()` and acts as dynamic 301 redirect fallback to `/insights/[slug]`).
- **API Handlers:** 1 route handler at `app/api/contact/route.js`.
- **Special System Routes:**
  - `app/not-found.jsx` (Custom 404 handler)
  - `app/robots.js` (Generates `/robots.txt`)
  - `app/sitemap.js` (Generates `/sitemap.xml`)
  - `app/opengraph-image.jsx` (Dynamic OpenGraph social image)
- **Route Groups & Parallel Routes:** None implemented.
- **Server-Side Redirects:** 9 redirects configured in `next.config.js`.

---

## 2. Complete Page & Route Inventory Table

The table below catalogs every existing route, template, and dynamically generated page currently present in the codebase.

| Page Name | Exact Route / URL | Page Type | Status | SEO Status | Content Status | Design Status | Recommendation |
|---|---|---|---|---|---|---|---|
| Homepage | `/` | Core / Home | Complete | Indexed | Strong | Complete | Keep & Polish |
| About Studio | `/about` | Core / About | Complete | Indexed | Strong | Complete | Keep |
| Contact Studio | `/contact` | Core / Contact | Complete | Indexed | Strong | Complete | Keep |
| Services Overview | `/services` | Core / Service Hub | Complete | Indexed | Strong | Complete | Keep & Refactor |
| Selected Work Portfolio | `/work` | Core / Portfolio Hub | Complete | Indexed | Needs Improvement | Complete | Improve (Add Case Studies) |
| Insights Listing | `/insights` | Core / Editorial Hub | Complete | Indexed | Strong | Complete | Keep |
| Blog Redirect Placeholder | `/blog` | Legacy / Redirect | Duplicate | Noindex / 301 | N/A (Redirect) | Minimal | Keep Redirect in Config |
| FAQ Knowledge Base | `/faq` | Support / FAQ | Complete | Indexed | Strong | Complete | Keep |
| Privacy Policy | `/privacy` | Legal / Compliance | Complete | Indexed | Strong | Complete | Keep |
| Terms of Service | `/terms` | Legal / Compliance | Complete | Indexed | Strong | Complete | Keep |
| Custom 404 Error Page | `/not-found` (Internal) | Error Handling | Complete | Noindex | Strong | Complete | Keep (Fix internal links) |
| Digital Architecture Studio Jaipur | `/digital-architecture-studio-jaipur` | Commercial Lander | Complete | Indexed | Strong | Complete | Keep |
| Next.js Web Development Jaipur | `/nextjs-web-development-jaipur` | Commercial Lander | Complete | Indexed | Strong | Complete | Keep |
| Generative Engine Optimization India | `/geo-agency-india` | Commercial Lander | Complete | Indexed | Strong | Complete | Keep |
| E-Commerce Industry Landing | `/industries/ecommerce` | Industry Landing | Complete | Indexed | Strong | Complete | Keep (Add live proof) |
| Education & Institute Landing | `/industries/education` | Industry Landing | Complete | Indexed | Strong | Complete | Keep (Add live proof) |
| Event Management & Wedding Planners | `/industries/event-management` | Industry Landing | Complete | Indexed | Strong | Complete | Keep (Has 2 live demos) |
| Healthcare & Clinics Landing | `/industries/healthcare` | Industry Landing | Complete | Indexed | Strong | Complete | Keep (Has 3 live demos) |
| Hospitality & Resorts Landing | `/industries/hospitality` | Industry Landing | Complete (Code exists) | **Conflicted (Redirected)** | Strong | Complete | **Fix Conflict (Remove 301)** |
| Interior Design & Architecture | `/industries/interior-design` | Industry Landing | Complete | Indexed | Strong | Complete | Keep (Has 1 live demo) |
| Luxury Jewellery & Gems Landing | `/industries/jewellery-luxury` | Industry Landing | Complete | Indexed | Strong | Complete | Keep (Add live proof) |
| Manufacturing & B2B Export Landing | `/industries/manufacturing` | Industry Landing | Complete | Indexed | Strong | Complete | Keep (Add live proof) |
| Real Estate Development Landing | `/industries/real-estate` | Industry Landing | Complete | Indexed | Strong | Complete | Keep (Has 2 live demos) |
| Service: Bespoke Web Design | `/services/web-design-development` | Dynamic Service Page | Complete | Indexed | Strong (1200+ words) | Complete | Keep |
| Service: Custom Web Applications | `/services/web-development` | Dynamic Service Page | Complete | Indexed | Strong (1100+ words) | Complete | Review / Differentiate |
| Service: SEO & GEO Optimization | `/services/seo-geo` | Dynamic Service Page | Complete | Indexed | Strong (1300+ words) | Complete | Keep |
| Service: Brand Strategy Architecture | `/services/brand-strategy` | Dynamic Service Page | Complete | Indexed | Strong (1100+ words) | Complete | Keep |
| Service: Headless E-Commerce | `/services/ecommerce-development` | Dynamic Service Page | Complete | Indexed | Strong (1050+ words) | Complete | Keep |
| Service: Mobile App Development | `/services/mobile-app-development` | Dynamic Service Page | Complete | Indexed | Strong (1150+ words) | Complete | Keep |
| Service: UI/UX Product Design | `/services/ui-ux-design` | Dynamic Service Page | Complete | Indexed | Strong (1000+ words) | Complete | Keep |
| Service: AI Business Automation | `/services/ai-automation` | Dynamic Service Page | Complete | Indexed | Strong (1250+ words) | Complete | Keep |
| Service: Growth Systems & CRO | `/services/growth-optimization` | Dynamic Service Page | Complete | Indexed | Strong (1100+ words) | Complete | Keep |
| Service: Creative Brand Identity | `/services/content-creative` | Dynamic Service Page | Complete | Indexed | Strong (1000+ words) | Complete | Review / Merge with Brand |
| Service: CRM & Lead Systems | `/services/crm-lead-systems` | Dynamic Service Page | Complete | Indexed | Strong (1150+ words) | Complete | Keep |
| Service: Performance Marketing | `/services/performance-marketing` | Dynamic Service Page | Complete | Indexed | Strong (1200+ words) | Complete | Keep |
| Dynamic Service Template | `app/services/[slug]/page.jsx` | Code Template | Dynamic Root | N/A (Template) | Template Code | Complete | Keep |
| Dynamic Insight Template | `app/insights/[slug]/page.jsx` | Code Template | Dynamic Root | N/A (Template) | Template Code | Complete | Keep |
| Dynamic Blog Template (Redirect) | `app/blog/[slug]/page.jsx` | Code Template | Redirect Dummy | Noindex / 301 | Redirect Code | N/A | Keep for legacy safety |
| Insight Article #01 | `/insights/new-digital-ecosystem-strategy-technology-growth` | Dynamic Article | Complete | Indexed | Strong (Featured) | Complete | Keep |
| Insight Article #02 | `/insights/website-cost-jaipur` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #03 | `/insights/custom-nextjs-website-price-india` | Dynamic Article | Complete | Indexed | Strong | Complete | Review (Overlap with #02/#26) |
| Insight Article #04 | `/insights/seo-services-cost-jaipur` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #05 | `/insights/ecommerce-website-development-cost-india` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #06 | `/insights/mobile-app-development-cost-jaipur` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #07 | `/insights/jewellery-website-design-jaipur-johari-bazaar` | Dynamic Article | Complete | Indexed | Strong (Playbook) | Complete | Keep |
| Insight Article #08 | `/insights/real-estate-website-development-jaipur-rera` | Dynamic Article | Complete | Indexed | Strong (Playbook) | Complete | Keep |
| Insight Article #09 | `/insights/clinic-hospital-website-design-jaipur` | Dynamic Article | Complete | Indexed | Strong (Playbook) | Complete | Keep |
| Insight Article #10 | `/insights/hotel-resort-website-design-rajasthan` | Dynamic Article | Complete | Indexed | Strong (Playbook) | Complete | Keep |
| Insight Article #11 | `/insights/coaching-institute-school-website-design-jaipur` | Dynamic Article | Complete | Indexed | Strong (Playbook) | Complete | Keep |
| Insight Article #12 | `/insights/b2b-manufacturing-website-sitapura-vki-jaipur` | Dynamic Article | Complete | Indexed | Strong (Playbook) | Complete | Keep |
| Insight Article #13 | `/insights/luxury-interior-designer-portfolio-website-jaipur` | Dynamic Article | Complete | Indexed | Strong (Playbook) | Complete | Keep |
| Insight Article #14 | `/insights/wedding-event-planner-website-design-jaipur` | Dynamic Article | Complete | Indexed | Strong (Playbook) | Complete | Keep |
| Insight Article #15 | `/insights/how-to-rank-chatgpt-perplexity-india` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #16 | `/insights/nextjs-vs-wordpress-seo-core-web-vitals` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #17 | `/insights/fix-crawled-currently-not-indexed-google-search-console` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #18 | `/insights/what-is-digital-architecture` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #19 | `/insights/best-web-design-company-jaipur` | Dynamic Article | Complete | Indexed | Strong | Complete | Review (Overlap with #25) |
| Insight Article #20 | `/insights/top-technical-seo-agency-jaipur` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #21 | `/insights/how-to-choose-digital-architecture-studio-rajasthan` | Dynamic Article | Complete | Indexed | Strong | Complete | Review (Overlap with #19/#25) |
| Insight Article #22 | `/insights/seo-geo-search-visibility-prepare-for-ai-search` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #23 | `/insights/local-seo-jaipur-checklist` | Dynamic Article | Complete | Indexed | Strong | Complete | Review (Overlap with #27) |
| Insight Article #24 | `/insights/why-your-jaipur-business-needs-a-professional-website-in-2026` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #25 | `/insights/how-to-choose-a-web-design-agency-in-jaipur` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #26 | `/insights/website-development-cost-in-india-business-guide` | Dynamic Article | Complete | Indexed | Strong | Complete | Review (Overlap with #02/#03) |
| Insight Article #27 | `/insights/local-seo-guide-jaipur-businesses` | Dynamic Article | Complete | Indexed | Strong | Complete | Review (Overlap with #23) |
| Insight Article #28 | `/insights/building-digital-strategy-drives-growth` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #29 | `/insights/what-is-brand-strategy-framework` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #30 | `/insights/what-makes-a-high-performing-website` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Insight Article #31 | `/insights/how-to-get-more-enquiries-from-your-website` | Dynamic Article | Complete | Indexed | Strong | Complete | Keep |
| Contact Intake API | `/api/contact` | API Endpoint | Complete | Noindex | JSON API | N/A | Keep & Verify Email Provider |
| Robots Configuration | `/robots.txt` | Metadata File | Complete | N/A | Dynamic Output | N/A | Keep |
| XML Sitemap | `/sitemap.xml` | Metadata File | Complete | N/A | Dynamic Output | N/A | Keep & Sync |
| Social OpenGraph Image | `/opengraph-image` | Metadata File | Complete | N/A | Dynamic Image | N/A | Keep |

---

## 3. Dynamic Routes vs Static Page Calculations

It is critical to distinguish between physical route templates, actual static pages, and generated dynamic pages:

1. **Route Templates (File System Units):** 
   - 22 static page templates (`page.jsx` files).
   - 3 dynamic route templates (`services/[slug]`, `insights/[slug]`, `blog/[slug]`).
   - 1 API route template (`api/contact/route.js`).
   - 4 Next.js special files (`layout.jsx`, `not-found.jsx`, `robots.js`, `sitemap.js`, `opengraph-image.jsx`).
   - **Total Route Templates:** 26 application routes (30 including special metadata/error files).

2. **Actual Static Pages Accessible to Users:**
   - Core Pages: 6 (`/`, `/about`, `/contact`, `/services`, `/work`, `/insights`).
   - Programmatic Commercial Landers: 3 (`/digital-architecture-studio-jaipur`, `/nextjs-web-development-jaipur`, `/geo-agency-india`).
   - Industry Landers: 8 fully reachable (`/industries/ecommerce`, `/industries/education`, `/industries/event-management`, `/industries/healthcare`, `/industries/interior-design`, `/industries/jewellery-luxury`, `/industries/manufacturing`, `/industries/real-estate`).
   - Support & Legal Pages: 3 (`/faq`, `/privacy`, `/terms`).
   - *Note on Exceptions:* 
     - `/industries/hospitality` has a physical file at `app/industries/hospitality/page.jsx`, but users and crawlers cannot access it directly because line 64 of `next.config.js` issues a permanent 301 redirect to `/services`.
     - `/blog` has a physical file at `app/blog/page.jsx`, but issues an immediate redirect to `/insights`.
   - **Total Reachable Physical Static Pages:** 20 pages.

3. **Generated Dynamic Pages:**
   - Services (`/services/[slug]`): 12 distinct URLs defined in `SERVICES_DATA`.
   - Insights (`/insights/[slug]`): 31 distinct URLs defined in `FEATURED_ARTICLE` and `BLOG_ARTICLES`.
   - Blog (`/blog/[slug]`): 0 static pages generated (prevented via empty array return).
   - Work (`/work/[slug]`): 0 pages generated (no dynamic route template exists).
   - **Total Generated Dynamic Pages:** 43 pages.

4. **Total Reachable Web Pages on Siyara Innovations:**
   - 20 static pages + 43 dynamic pages = **63 crawlable, indexable pages**.
   - With `/industries/hospitality` conflict resolved = **64 pages** (matching the 64 entries in `app/sitemap.js`).

---

## 4. Redirects Audit (`next.config.js`)

The file `next.config.js` currently defines 9 permanent redirects:

```javascript
async redirects() {
  return [
    { source: '/portfolio', destination: '/work', permanent: true },
    { source: '/our-work', destination: '/work', permanent: true },
    { source: '/industries', destination: '/services', permanent: true },
    { source: '/industries/fitness', destination: '/services', permanent: true },
    { source: '/industries/hospitality', destination: '/services', permanent: true },
    { source: '/services/app-development', destination: '/services/mobile-app-development', permanent: true },
    { source: '/services/ai-agents', destination: '/services/ai-automation', permanent: true },
    { source: '/blog', destination: '/insights', permanent: true },
    { source: '/blog/:slug*', destination: '/insights/:slug*', permanent: true },
  ];
}
```

### Critical Findings on Existing Redirects:
1. **The Hospitality Conflict:** `/industries/hospitality` is redirected to `/services`, BUT `app/industries/hospitality/page.jsx` contains 16.4 KB of fully developed custom content, Schema.org metadata, and custom FAQs. It is also actively linked in `Footer.jsx` ("Boutique Hotels & Resorts") and listed in `app/sitemap.js`! Any visitor clicking the footer link gets bounced to `/services`.
2. **The Missing Industries Hub:** `/industries` redirects to `/services`. Siyara does not have an `/industries` index page, creating user confusion when trying to browse industry verticals.
3. **Fitness Orphan Redirect:** `/industries/fitness` redirects to `/services`. This was likely an older planned vertical that was retired.
4. **Blog Canonicalization:** The `/blog` and `/blog/:slug*` redirects cleanly point legacy traffic to `/insights`. However, internal components (`app/not-found.jsx`, `app/blog/BlogClient.jsx`) still push or link to `/blog`, triggering self-inflicted redirect hops.

---

## 5. SEO, Sitemap & Robots Technical Implementation

### Canonical URL Strategy:
- `metadataBase` is set to `https://www.siyaradigitals.com` in `app/layout.jsx`.
- Individual static and dynamic pages specify strict `alternates.canonical` URLs.
- OpenGraph tags correctly mirror canonical links.

### Sitemap Configuration (`app/sitemap.js`):
The sitemap dynamically generates 64 URLs:
- 6 core routes (`/`, `/about`, `/services`, `/work`, `/contact`, `/insights`)
- 3 commercial landers (`/digital-architecture-studio-jaipur`, `/nextjs-web-development-jaipur`, `/geo-agency-india`)
- 12 service disciplines (`/services/*`)
- 9 industry verticals (`/industries/*`)
- 3 legal/support routes (`/faq`, `/privacy`, `/terms`)
- 31 insight articles (`/insights/*`)

*Warning:* `sitemap.js` includes `/industries/hospitality`, but search crawlers hitting that URL will receive a 301 redirect to `/services`, which triggers a "Redirect error" or "Page with redirect" warning in Google Search Console.

### Robots Configuration (`app/robots.js`):
- Allows root `/` to all crawlers (`*`).
- Explicitly welcomes high-intent AI search bots (`Googlebot`, `Bingbot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Applebot`).
- Disallows `/api/` and `/private/`.
- Declares sitemap at `https://www.siyaradigitals.com/sitemap.xml`.

---

## 6. Navigation and Internal Link Audit

### Primary Header Navigation (`src/components/layout/Navbar.jsx`):
- `HOME` → `/`
- `SERVICES` → `/services`
- `ABOUT` → `/about`
- `OUR WORK` → `/work`
- `INSIGHTS` → `/insights`
- `CONTACT` → `/contact`
- Header CTA → `/contact` ("BOOK STRATEGY SESSION")
- *Status:* Clean, direct, no redirect hops.

### Footer Navigation (`src/components/home/Footer.jsx`):
- **Capabilities:** Links to 6 services (`web-design-development`, `brand-strategy`, `seo-geo`, `performance-marketing`, `ai-automation`, `growth-optimization`).
- **Industries:** Links to 7 industry verticals (`healthcare`, `real-estate`, `jewellery-luxury`, `interior-design`, `hospitality`, `event-management`, `ecommerce`). Note that `/industries/hospitality` triggers a 301 redirect.
- **Company:** Links to `/about`, `/work`, `/insights`, `/contact`.
- **Resources:** Links to 4 specific high-performing articles.
- **Legal:** Links to `/privacy`, `/terms`, `/faq`, `/sitemap.xml`.

### Internal Cross-Linking Bottlenecks:
1. `src/components/home/SelectedWork.jsx`: The "VIEW CASE STUDY" CTA links to an in-page anchor `#project-${currentProject.id}` which does not exist anywhere on the page.
2. `app/not-found.jsx`: Contains `<Link href="/blog"><span>INSIGHTS</span></Link>`, which forces users through a 301 redirect to `/insights`.
3. `app/blog/BlogClient.jsx`: When selecting an article, calls `router.push('/blog/' + article.slug)`, requiring an unnecessary 301 redirect hop to `/insights/[slug]`.
4. `src/components/blog/ArticleCard.jsx` & `FeaturedArticle.jsx`: Use client-side `onClick` instead of native semantic `<Link>` / `<a href>` tags, preventing search engine crawlers from discovering article links directly in the DOM.
