# SIYARA INNOVATIONS — TECHNICAL SEO, CRAWLABILITY & STRUCTURED DATA AUDIT
**Document ID:** AUDIT_TECHNICAL_SEO.md  
**Scope:** Search Engine Crawlability, Route Architecture, Redirects, Sitemaps, Metadata & Schema.org Graph  
**Repository:** `c:\Users\HP\Downloads\Siyara-v2`  
**Target Domain:** `https://www.siyaradigitals.com`  

---

## 1. Executive Summary

Search Console telemetry indicates Siyara Innovations generated only 54 impressions and 8 clicks over 28 days, ranking at position ~18.6 exclusively for branded variations of "siyara". Organic discovery for high-intent Jaipur search terms (*"digital marketing agency Jaipur"*, *"web design company Jaipur"*, *"SEO services Jaipur"*) is currently zero.

The technical SEO blockers causing this suppression are:
1. **7 Legacy 404 Leaks:** Googlebot repeatedly crawls deprecated URLs from a previous site version without encountering 301 redirects.
2. **Duplicate Route Indexation:** `/our-work` and `/work` coexist in the sitemap while `/our-work` specifies `/work` as its canonical URL.
3. **Missing Geo & Entity Signals:** `<html lang="en">` instead of `lang="en-IN"`, zero LocalBusiness / ProfessionalService schema, and deprecated `keywords` meta tags.
4. **Thin/Hidden Service Render:** 7 of 8 service disciplines on `/services` are invisible in the initial server-rendered HTML due to client-state tabs.
5. **DOM Spacing Bug in Primary H1:** Homepage H1 renders as `WE BUILD BRANDSTHATDOMINATE.`.

---

## 2. Route Inventory & Build Analysis

| Route | Pre-render Mode | Size (HTML) | First Load JS | Indexable Status | Issues / Findings |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | Static (SSG) | 12.2 kB | 166 kB | Indexable | H1 DOM spacing bug; initial `opacity: 0` inline style. |
| `/_not-found` | Static | 133 B | 103 kB | Noindex | Clean 404 template; robots correctly set to `noindex, follow`. |
| `/about` | Static | 7.99 kB | 159 kB | Indexable | Meta title > 60 chars; no named founder/team; Unsplash stock photos. |
| `/api/contact` | Dynamic (ƒ) | 133 B | 103 kB | Disallow | **P0:** Broken in `output: 'export'`; silent lead drop if webhook missing. |
| `/blog` | Static | 4.15 kB | 203 kB | Indexable | Meta title > 60 chars; loads all 25 posts into client memory bundle. |
| `/blog/[slug]` | SSG (25 paths) | 348 B | 199 kB | Indexable | Uses 5 fake author personas; stock Unsplash hero graphics. |
| `/contact` | Static | 6.15 kB | 154 kB | Indexable | Phone call links present; email domain mismatch; no embedded map. |
| `/services` | Static | 10.8 kB | 164 kB | Indexable | Disciplines 2–8 hidden behind React state; no individual canonical URLs. |
| `/work` | Static | 131 B | 177 kB | Indexable | Generic H1 ("Brands in Action."); client demos on Vercel subdomains. |
| `/our-work` | Static | 131 B | 177 kB | **Duplicate** | **P0:** Exact duplicate of `/work`. Present in sitemap; canonical is `/work`. |

---

## 3. Crawlability & Redirect Architecture

### 3.1 Legacy Google Search Console 404s
Google Search Console has recorded crawl attempts for 7 legacy URLs that returned 404:
- `/faq`
- `/portfolio`
- `/industries`
- `/industries/fitness`
- `/industries/hospitality`
- `/services/ui-ux-design`
- `/services/ai-agents`

When Googlebot encounters 404 errors on pages that previously held equity, it diminishes crawl budget allocation and drops previous keyword associations.

### 3.2 Required 301 Permanent Redirects
For deployment on **Vercel**, redirects must be declared in `next.config.js`. For static export or Cloudflare Pages, they must be declared in `public/_redirects`.

#### Configuration A: `next.config.js` (for Vercel)
```javascript
async redirects() {
  return [
    { source: '/faq', destination: '/contact', permanent: true },
    { source: '/portfolio', destination: '/work', permanent: true },
    { source: '/our-work', destination: '/work', permanent: true },
    { source: '/industries', destination: '/services', permanent: true },
    { source: '/industries/fitness', destination: '/services', permanent: true },
    { source: '/industries/hospitality', destination: '/services', permanent: true },
    { source: '/services/ui-ux-design', destination: '/services', permanent: true },
    { source: '/services/ai-agents', destination: '/services', permanent: true },
  ];
}
```

#### Configuration B: `public/_redirects` (for Static / Cloudflare fallback)
```text
/faq                         /contact                     301
/portfolio                   /work                        301
/our-work                    /work                        301
/industries                  /services                    301
/industries/fitness          /services                    301
/industries/hospitality      /services                    301
/services/ui-ux-design       /services                    301
/services/ai-agents          /services                    301
```

### 3.3 Sitemap Hygiene (`app/sitemap.js`)
Currently, `app/sitemap.js` lists both `/work` and `/our-work`:
```javascript
const routes = ['', '/about', '/services', '/work', '/our-work', '/contact', '/blog']
```
- **Action:** Remove `'/our-work'`. Ensure only canonical, self-referential 200 OK URLs exist in the sitemap.
- **Static Conflict:** Delete `public/sitemap.xml` so Next.js's dynamically generated `app/sitemap.js` has exclusive authority at `https://www.siyaradigitals.com/sitemap.xml`.

---

## 4. Metadata & Internationalization Audit

### 4.1 Document Language Tag
- **Current:** `<html lang="en">` (`app/layout.jsx:72`).
- **Correction:** `<html lang="en-IN">`.
- **Impact:** Communicates Indian English locale to Googlebot, signaling regional relevance for Jaipur, Rajasthan queries.

### 4.2 Deprecated Meta Keywords
- **Current:** `keywords: 'digital architecture studio, brand strategy, web design Jaipur, SEO Jaipur, ...'` (`app/layout.jsx:26`).
- **Correction:** Delete the `keywords` property completely. Google has officially ignored meta keywords since September 2009. Maintaining it exposes commercial keyword strategy to competitors without any ranking benefit.

### 4.3 Page-by-Page Title & Meta Description Audit

| Route | Current Title (Chars) | Proposed SEO Title (Chars) | Current Meta Desc (Chars) | Proposed Meta Desc (Chars) |
| :--- | :--- | :--- | :--- | :--- |
| **Home (`/`)** | Siyara Innovations \| Digital Marketing & Web Design Agency in Jaipur (70) | **Web Design Company & SEO Services Jaipur \| Siyara** (54) | 194 chars (Truncated by Google) | **Siyara Innovations is a Jaipur digital agency building high-speed websites, SEO, social media marketing, and branding for growing businesses.** (144) |
| **Services (`/services`)** | Services \| Siyara · 8-Discipline Digital Architecture System · Jaipur (68) | **Digital Marketing, Web & SEO Services Jaipur \| Siyara** (56) | 169 chars (Truncated) | **Explore Siyara’s core services: web development, search engine optimization (SEO), social media marketing, and brand identity in Jaipur, India.** (146) |
| **About (`/about`)** | About Siyara \| Digital Architecture Studio · Jaipur, Rajasthan (62) | **About Siyara Innovations \| Digital Agency Jaipur** (50) | 166 chars (Truncated) | **Siyara Innovations is a digital marketing, web design, and branding agency rooted in Jaipur, Rajasthan. We engineer connected growth systems.** (143) |
| **Work (`/work`)** | Our Work \| Siyara Innovations \| Digital Architecture Studio (60) | **Portfolio & Digital Projects \| Siyara Innovations** (52) | 144 chars | **View our web development, SEO, and digital branding projects across healthcare, interior design, event management, and small businesses.** (139) |
| **Contact (`/contact`)** | Contact Siyara \| Digital Architecture Studio · Jaipur, Rajasthan (64) | **Contact Siyara \| Web Design & SEO Studio Jaipur** (51) | 172 chars (Truncated) | **Connect with Siyara Innovations via WhatsApp or email. Start your web design, SEO, social media marketing, or branding project in Jaipur.** (140) |
| **Blog (`/blog`)** | Studio Insights \| Siyara · Digital Strategy, Brand & Growth Intelligence (72) | **Digital Insights: Web, SEO & Growth \| Siyara** (48) | 131 chars | **Strategic perspectives on web development, SEO algorithms, social media marketing, and brand positioning from the Siyara Innovations studio.** (143) |

---

## 5. Structured Data (JSON-LD) Complete Specifications

### 5.1 Root Layout Schema: Organization & ProfessionalService
**Target Location:** `app/layout.jsx`  
**Privacy Constraint:** Keep residential street address private; include Jaipur city, Rajasthan state, IN country, PIN 302001, geo centroid, verified social profiles, and WhatsApp contact point.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.siyaradigitals.com/#organization",
      "name": "Siyara Innovations",
      "alternateName": ["Siyara", "Siyara Digital Agency"],
      "url": "https://www.siyaradigitals.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.siyaradigitals.com/#logo",
        "url": "https://www.siyaradigitals.com/logo.webp",
        "caption": "Siyara Innovations Logo"
      },
      "image": "https://www.siyaradigitals.com/images/siyara_og_image.png",
      "description": "Siyara Innovations is a Jaipur-based digital agency providing web development, search engine optimization (SEO), social media marketing, and brand strategy for event management companies, clinics, interior designers, and small businesses.",
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
      "areaServed": [
        { "@type": "City", "name": "Jaipur" },
        { "@type": "State", "name": "Rajasthan" },
        { "@type": "Country", "name": "India" }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/siyarainnovations/",
        "https://www.instagram.com/siyarainnovations/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9587269209",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "contactOption": "WhatsApp"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.siyaradigitals.com/#website",
      "url": "https://www.siyaradigitals.com",
      "name": "Siyara Innovations",
      "description": "Web design, SEO, and digital marketing agency in Jaipur, India.",
      "publisher": {
        "@id": "https://www.siyaradigitals.com/#organization"
      }
    }
  ]
}
```

### 5.2 Services Page Schema: Core Services Array
**Target Location:** `app/services/page.jsx`  
Defines the 4 core business offerings mapped to the target customer verticals:

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
      "description": "Custom Next.js website design and web development for interior designers, event managers, medical clinics, and small businesses.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Solutions",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Clinic & Doctor Websites" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Design Portfolios" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Management Platforms" } }
        ]
      }
    },
    {
      "@type": "Service",
      "name": "Search Engine Optimization (SEO) Jaipur",
      "serviceType": "Search Engine Optimization",
      "provider": { "@id": "https://www.siyaradigitals.com/#organization" },
      "areaServed": { "@type": "City", "name": "Jaipur" },
      "description": "Local SEO, Google Business Profile ranking, and on-page search visibility for Jaipur businesses."
    },
    {
      "@type": "Service",
      "name": "Social Media Marketing Jaipur",
      "serviceType": "Social Media Marketing",
      "provider": { "@id": "https://www.siyaradigitals.com/#organization" },
      "areaServed": { "@type": "City", "name": "Jaipur" },
      "description": "Organic social strategy, Instagram grid architecture, content production, and community engagement for lifestyle and professional brands."
    },
    {
      "@type": "Service",
      "name": "Brand Strategy & Visual Identity Jaipur",
      "serviceType": "Branding",
      "provider": { "@id": "https://www.siyaradigitals.com/#organization" },
      "areaServed": { "@type": "City", "name": "Jaipur" },
      "description": "Brand naming, visual language, typography systems, and high-trust positioning designed to command premium pricing."
    }
  ]
}
```

### 5.3 BreadcrumbList Schema Specification
**Target Location:** Standardized helper component for all interior pages (`/about`, `/services`, `/work`, `/blog`, `/contact`).

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.siyaradigitals.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.siyaradigitals.com/services"
    }
  ]
}
```

---

## 6. Verification & Acceptance Criteria

1. **Schema Validation:** Test homepage and services page structured data against the official [Google Rich Results Test](https://search.google.com/test/rich-results) and Schema.org Validator. Zero errors, zero warnings.
2. **Redirect Status:** Running `curl -I https://www.siyaradigitals.com/portfolio` returns HTTP 301 pointing to `https://www.siyaradigitals.com/work`.
3. **Canonical Verification:** Inspecting DOM on `/our-work` (or following redirect) resolves strictly to `/work` with no duplicate indexation.
4. **Sitemap Cleanliness:** Fetching `/sitemap.xml` returns valid XML containing only 200 OK routes, excluding `/our-work`, with lastModified matching build dates.
