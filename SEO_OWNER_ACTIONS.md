# Siyara Innovations — Owner Action Plan & Post-Deployment Roadmap

**Document:** `SEO_OWNER_ACTIONS.md`  
**Target Recipient:** Business Owner / Executive Leadership  
**Effective Period:** Pre-Deployment Verification, 20-Day Absence & Post-Return Follow-up  
**Prepared by:** Technical SEO & Engineering Sprint Team  

---

## 1. Executive Status Overview

All core code changes, technical SEO architecture, structured data markup, internal link graph corrections, four industry landing pages, and published blog articles have been compiled and validated locally (`npm run build` completed with exit code 0 across all 46 prerendered static pages and the serverless contact endpoint).

The table below summarizes the status of each system component according to the standard audit categories:

| System Component | Verification Status | Notes / Limitations |
|:---|:---:|:---|
| **Next.js Production Build** | **Verified locally** | Compiles with 0 lint and 0 type errors. 46 static pages generated. |
| **Sitemap Generation (`sitemap.xml`)** | **Verified locally** | Dynamic feed emits exactly 37 canonical, indexable URLs. |
| **Robots Directives (`robots.txt`)** | **Verified locally** | Allows `/`, blocks `/api/` and `/private/`, references canonical sitemap. |
| **Internal Link Graph & Assets** | **Verified locally** | 0 broken page links, 0 links to redirects, 100% referenced static images exist. |
| **Serverless Contact Validation & Fallback** | **Verified locally** | Input sanitization, honeypot, in-memory rate limiting, and WhatsApp fallback tested via local HTTP requests. |
| **Vercel Production Deployment** | **Implemented but not independently verified** | Local build is ready; live deployment on Vercel is pending repository push. |
| **Live Domain & SSL Verification** | **Implemented but not independently verified** | Requires live production inspection after DNS/Vercel deployment. |
| **Google Search Console Verification** | **Blocked by owner or external account access** | Requires owner login to GSC to verify domain ownership and submit sitemap. |
| **Google Business Profile Alignment** | **Blocked by owner or external account access** | Requires owner login to GBP to align categories and set Service Area Business boundaries. |
| **Resend Email API Credentials** | **Blocked by owner or external account access** | Native email dispatch requires adding `RESEND_API_KEY` to Vercel environment variables. |

---

## 2. Immediate Pre-Departure Actions (Takes ~15 Minutes)

These actions require owner credentials and cannot be executed by automated tooling:

### Action 1: Google Search Console (GSC) Verification & Sitemap Submission
- **Status:** **Blocked by owner or external account access**
- **Purpose:** Inform Google of your verified canonical URLs and monitor indexation status.
- **Steps:**
  1. Open [Google Search Console](https://search.google.com/search-console).
  2. If the property `https://www.siyaradigitals.com` is not verified, select **URL prefix** and enter `https://www.siyaradigitals.com`.
  3. Verify ownership via DNS TXT record or HTML verification tag. (If using HTML tag, copy the verification token for placement in `app/layout.jsx`).
  4. Navigate to **Sitemaps** on the left menu.
  5. In "Add a new sitemap", enter:
     ```
     sitemap.xml
     ```
  6. Click **Submit**.
  > [!IMPORTANT]
  > **Evidence-Based Indexing Notice:** Submitting a sitemap provides search engines with a clean inventory of canonical URLs, but **does not guarantee crawling, discovery, or indexation**. Google allocates crawl budget and indexes URLs based on perceived content quality, relevance, and algorithmic evaluation.

---

### Action 2: Vercel Environment Variable for Email Delivery (`RESEND_API_KEY`)
- **Status:** **Blocked by owner or external account access**
- **Purpose:** Enable native server-side email dispatch to `info@siyaradigitals.com`.
- **Steps:**
  1. Log in to [Vercel Dashboard](https://vercel.com).
  2. Navigate to project: `Siyara-v2` -> **Settings** -> **Environment Variables**.
  3. Add the following environment variable:
     - **Key:** `RESEND_API_KEY`
     - **Value:** Your active Resend API key (from [resend.com](https://resend.com))
     - **Environments:** Production, Preview, Development
  4. Click **Save** and trigger a redeploy of the production branch.
  > [!NOTE]
  > **Delivery State:** While `RESEND_API_KEY` remains unconfigured, the contact API returns an explicit HTTP 503 response and prompts the visitor to contact Siyara directly on WhatsApp (`+91 95872 69209`). The form will **never falsely claim** that an email was sent when credentials are missing.

---

### Action 3: Review Google Business Profile (GBP) Primary Category
- **Status:** **Blocked by owner or external account access**
- **Purpose:** Establish local relevance for Jaipur search queries without violating Service Area Business guidelines.
- **Steps:**
  1. Open [Google Business Profile Manager](https://business.google.com).
  2. Set **Primary Category** to:
     - `Website Designer`
  3. Add **Secondary Categories**:
     - `Internet Marketing Service`
     - `Marketing Agency`
  4. Configure **Service Area**:
     - Set to `Jaipur, Rajasthan, India`.
  5. Website URL:
     - `https://www.siyaradigitals.com`
  > [!CAUTION]
  > **Zero Physical Storefront Rule:** Siyara does not operate a verified public walk-in commercial office. Ensure the profile is designated as a **Service Area Business (SAB)** where the physical address is hidden. Do not invent a public street address or postal code.

---

## 3. Autonomous State & Operational Safeguards

While the owner is away, the website operates under specific code-level protections:

| Operational Area | Local Architecture & Protections | Limitations & Realities |
|:---|:---|:---|
| **Lead Intake** | Server-side validation, anti-spam honeypot, and in-memory rate limiting (max 5 requests per 10 min window per IP). | In-memory rate limiting is per-serverless-instance; distributed protection across multiple concurrent serverless containers requires a persistent store (e.g., Upstash Redis). WhatsApp fallback minimizes dropped inquiries, but cannot prevent user abandonment if a user chooses not to open WhatsApp. |
| **Search Engine Directives** | Clean `robots.txt` disallowing `/api/` and `/private/`, dynamic sitemap with 37 canonical URLs, and 9 permanent 301 redirects for legacy URLs. | Crawling and indexation cadence remain entirely at the discretion of search engine algorithms. |
| **Truth in Claims** | All interactive portfolio links are explicitly framed as architectural demonstration concepts and prototypes. No fake client testimonials, reviews, or unverified physical addresses exist. | Any future real client case study should be published only with explicit client consent. |
| **Performance** | Next.js Server Components with static generation (SSG) produce lightweight HTML/JS (~102 kB shared bundle). | Production latency, Core Web Vitals, and server uptime have not yet been empirically measured on the live domain and must be audited post-deployment. |

---

## 4. Recommended Monitoring Cadence During Absence

If an assistant or team member monitors operations during the 20-day window:

- **Days 3–5:**
  - Check Google Search Console -> **Pages** report. Confirm Googlebot has processed `sitemap.xml` and identify which URLs are discovered.
- **Days 10–12:**
  - Check GSC -> **Performance** report. Track impressions for target Jaipur queries (*"web development company jaipur"*, *"seo services in jaipur"*, *"website design for doctors jaipur"*).
- **Days 18–20:**
  - Monitor WhatsApp (`+91 95872 69209`) and official inbox (`info@siyaradigitals.com`) for inbound project inquiries.

---

## 5. Post-Return Strategic Growth Roadmap (Day 21+)

### Priority 1: Empirical Performance & Core Web Vitals Audit
- **Status:** **Implemented but not independently verified** (Pending live deployment)
- Run Google PageSpeed Insights and Lighthouse on `https://www.siyaradigitals.com` and all four `/industries/*` landing pages once live on Vercel production edge servers.
- Document real-world Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).

### Priority 2: Authentic Local Directory Citations
- **Status:** **Blocked by owner or external account access**
- Create consistent, verified NAP (Name, Area Served, Phone) citations:
  - **IndiaMART:** Create free verified listing under Web Design & SEO Services, Jaipur.
  - **Justdial:** Register Siyara Innovations under Web Designers in Jaipur.
  - **Sulekha Jaipur:** Register under Digital Marketing & SEO Agencies.

### Priority 3: Policy-Compliant Review Gathering
- **Status:** **Blocked by owner or external account access**
- Reach out to genuine past business contacts or clients via WhatsApp with a direct Google review link. Never offer incentives or compensation for reviews.

### Priority 4: Commercial Client Case Studies
- **Status:** **Blocked by owner or external account access**
- For any commercial client engagement completed by Siyara, obtain written authorization to publish their company name, verified deliverables, and client quote to supplement the architectural demonstration concepts.

---

## 6. Official Reference Details

- **Official Email:** `info@siyaradigitals.com`
- **Official WhatsApp:** `+91 95872 69209` (`https://wa.me/919587269209`)
- **Canonical Domain:** `https://www.siyaradigitals.com`
- **Canonical Sitemap:** `https://www.siyaradigitals.com/sitemap.xml`
- **Sitemap Canonical URL Count:** 37 URLs (6 core + 4 industry landing pages + 27 blog articles)
- **Active Production Redirects:** 9 permanent 301 redirects in `next.config.js`
