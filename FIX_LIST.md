# SIYARA INNOVATIONS — REMEDIATION FIX LIST
**Audit Date:** October 21, 2026  
**Auditor:** Principal QA Engineer & Next.js Technical Reviewer  
**Classification System:**  
- **P0:** Critical Blocker (Broken core user flow, missing legal routes, or stale production release)  
- **P1:** High Priority (SEO invisibility, security omissions, or brand integrity violations)  
- **P2:** Optimization & Code Health (Refactoring, bundle cleanup, or distributed reliability)

---

## PRIORITY P0: CRITICAL BLOCKERS

### FIX-01: Create Missing Core Pages (`/privacy`, `/terms`, `/faq`)
- **Severity:** P0 — Broken Routes / Legal & Compliance Risk
- **Affected URLs:**
  - `https://www.siyaradigitals.com/privacy` (HTTP 404)
  - `https://www.siyaradigitals.com/terms` (HTTP 404)
  - `https://www.siyaradigitals.com/faq` (HTTP 404)
  - `src/components/home/Footer.jsx` (Lines 202–204 link to `href="#"` with TODO)
- **Exact Action Required:**
  1. Create `app/privacy/page.jsx` with authentic Privacy Policy text covering:
     - Data collected via contact form (name, email, project details).
     - Data transmission to email service provider (Resend/Webhook).
     - Analytics tracking disclosure (GA4, Microsoft Clarity cookies).
     - Contact email: `info@siyaradigitals.com`.
     - Governing jurisdiction: Jaipur, Rajasthan, India.
  2. Create `app/terms/page.jsx` with standard digital agency Terms of Service covering service agreements, intellectual property rights, and limitation of liability.
  3. Create `app/faq/page.jsx` rendering structured FAQ questions and answers, paired with `FAQPage` JSON-LD schema matching visible text.
  4. Update `src/components/home/Footer.jsx` lines 202–204 to replace `href="#"` with `<Link href="/privacy">Privacy Policy</Link>` and `<Link href="/terms">Terms of Service</Link>`.
  5. Add `/privacy`, `/terms`, and `/faq` to `app/sitemap.js`.
- **Verification Method:**
  - Run `npm run build` to confirm 3 new static routes prerender.
  - Test `GET /privacy`, `GET /terms`, and `GET /faq` on local server and live site to verify HTTP 200.
- **Effort Estimate:** 2.5 hours

---

### FIX-02: Deploy Latest Codebase to Live Production Domain
- **Severity:** P0 — Production Desynchronization
- **Affected Target:** Live Production (`https://www.siyaradigitals.com`)
- **Observed Defect:**
  - Live production serves outdated static export:
    - 4 industry landing pages (`/industries/healthcare`, etc.) return 404.
    - 2 new blog posts (`/blog/website-cost-jaipur`, `/blog/ecommerce-seo-jaipur-guide`) return 404.
    - Redirect rules from `next.config.js` (`/portfolio` -> `/work`) return 404.
    - `sitemap.xml` contains only 32 URLs instead of 37+.
- **Exact Action Required:**
  1. Ensure all git commits from recent sprints are merged into the production branch (`main` / `master`).
  2. Trigger a fresh production deployment in Vercel.
  3. Verify build completes cleanly on Vercel's Node.js runtime.
- **Verification Method:**
  - Execute `curl -I https://www.siyaradigitals.com/industries/healthcare` -> Expect HTTP 200.
  - Execute `curl -I https://www.siyaradigitals.com/portfolio` -> Expect HTTP 308/301 to `/work`.
  - Fetch `https://www.siyaradigitals.com/sitemap.xml` -> Expect 37+ URLs.
- **Effort Estimate:** 30 minutes

---

## PRIORITY P1: HIGH IMPACT ISSUES

### FIX-03: Remove Fictional Client "The Brew Chapter"
- **Severity:** P1 — Brand Integrity & Factual Truthfulness
- **Affected File:** `src/data/projectsData.js` (Lines 1237–1240)
- **Observed Defect:**
  ```javascript
  {
    id: '65',
    name: 'The Brew Chapter',
    title: 'THE BREW CHAPTER',
    // ...
  }
  ```
  *"The Brew Chapter"* is an unverified fictional brand explicitly designated for removal.
- **Exact Action Required:**
  - Delete project object id `'65'` completely from `src/data/projectsData.js`.
  - Ensure total project count in `featuredProjects` and `allProjects` references only verified client work with valid demo/live links.
- **Verification Method:**
  - Grep repository: `rg "The Brew Chapter"` -> Must return 0 hits.
  - Run `npm run build` to verify no import or key breakage.
- **Effort Estimate:** 15 minutes

---

### FIX-04: Fix Homepage H1 Server-Rendered Visibility (`opacity: 0`)
- **Severity:** P1 — Search Crawler Invisibility / SEO Impact
- **Affected File:** `src/components/home/Hero.jsx` (or animated H1 title component)
- **Observed Defect:**
  Framer Motion word-split animation applies initial inline styling `style="opacity:0;transform:translateY(20px)"` during Next.js SSR. In raw HTML (no JS), search crawlers inspect an invisible H1.
- **Exact Action Required:**
  - Configure the title component so that initial server-rendered markup defaults to standard visible CSS:
    ```jsx
    // Ensure SSR HTML renders without hiding opacity:
    <h1 className="text-display ...">
      WE BUILD BRANDS THAT DOMINATE.
    </h1>
    ```
  - Apply motion enhancement progressively using client-side hydration or CSS classes (`@media (scripting: enabled)`), ensuring base HTML remains `opacity: 1`.
- **Verification Method:**
  - Run `curl -s http://localhost:3000 | grep -C 2 "WE BUILD BRANDS"` -> Must NOT contain `opacity:0`.
- **Effort Estimate:** 45 minutes

---

### FIX-05: Implement Production HTTP Security Headers
- **Severity:** P1 — Security Best Practice & Scanner Compliance
- **Affected File:** `next.config.js`
- **Observed Defect:**
  Live domain is missing `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and CSP headers.
- **Exact Action Required:**
  Add a `headers()` configuration block to `next.config.js`:
  ```javascript
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  ```
- **Verification Method:**
  - Run `npm run build` and launch local server.
  - Execute `curl -I http://localhost:3000/` and inspect response headers.
- **Effort Estimate:** 30 minutes

---

### FIX-06: Wire Up Analytics Scripts (`NEXT_PUBLIC_GA_ID` & `NEXT_PUBLIC_CLARITY_ID`)
- **Severity:** P1 — Measurement & Conversion Blindness
- **Affected File:** `app/layout.jsx`
- **Observed Defect:**
  Google Analytics 4 and Microsoft Clarity are not imported, initialized, or rendered anywhere in the application.
- **Exact Action Required:**
  1. In `app/layout.jsx`, conditionally render Google Analytics and Microsoft Clarity when the corresponding environment variables exist:
     ```jsx
     import Script from 'next/script';

     {process.env.NEXT_PUBLIC_GA_ID && (
       <Script
         strategy="afterInteractive"
         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
       />
     )}
     ```
  2. Implement Clarity initialization script conditioned on `process.env.NEXT_PUBLIC_CLARITY_ID`.
- **Verification Method:**
  - Populate `.env.local` with dummy test IDs; inspect DOM to confirm scripts load.
  - Verify zero console errors when IDs are omitted.
- **Effort Estimate:** 45 minutes

---

## PRIORITY P2: OPTIMIZATION & CODE HYGIENE

### FIX-07: Centralize Business Data into `src/config/business.js`
- **Severity:** P2 — Maintainability & Single Source of Truth
- **Affected Files:**
  - `src/config/business.js` (Needs creation)
  - `app/layout.jsx`
  - `src/components/home/Footer.jsx`
  - `src/components/contact/ContactDetails.jsx`
  - `src/components/contact/ContactIntake.jsx`
- **Exact Action Required:**
  1. Create `src/config/business.js` exporting:
     ```javascript
     export const businessConfig = {
       name: 'Siyara Innovations',
       legalName: 'Siyara Innovations',
       city: 'Jaipur',
       region: 'Rajasthan',
       country: 'IN',
       email: 'info@siyaradigitals.com',
       whatsappNumber: '919587269209',
       whatsappFormatted: '+91 95872 69209',
       whatsappLink: 'https://wa.me/919587269209',
       socials: {
         linkedin: 'https://www.linkedin.com/company/siyarainnovations/',
         instagram: 'https://www.instagram.com/siyarainnovations/',
       },
     };
     ```
  2. Refactor all consumer components to import from `src/config/business.js`.
- **Verification Method:**
  - Grep for hardcoded phone or email literals across `src/components/` -> Must return 0 hits outside `business.js`.
- **Effort Estimate:** 1 hour

---

### FIX-08: Clean Up Dead Files, Export Directories & Oversized Assets
- **Severity:** P2 — Repository Bloat & Deployment Overhead
- **Affected Paths:**
  - `dist/` (4.9 MB legacy Vite build)
  - `out/` (8.1 MB legacy export)
  - `images/` (root duplicate folder)
  - `public/_headers` (unsupported Netlify file)
  - `public/logo.png` (2.13 MB uncompressed PNG)
  - `public/Siyara services hero.mp4` (2.55 MB duplicate)
  - `public/images/Gemini_Generated_Image_*.png` (>25 MB raw files)
- **Exact Action Required:**
  1. Add `dist/`, `out/`, and `images/` to `.gitignore` and delete them from the workspace.
  2. Remove `public/_headers`.
  3. Compress `public/logo.png` into optimized WebP/PNG (< 80 kB).
  4. Remove duplicate MP4 video file and unused raw image generations.
- **Verification Method:**
  - Check repository size: `du -sh .` -> Payload should decrease by >45 MB.
- **Effort Estimate:** 45 minutes

---

### FIX-09: Upgrade Vulnerable NPM Packages
- **Severity:** P2 — Dependency Security Hygiene
- **Affected Packages:** `source-map-js`, `next`
- **Exact Action Required:**
  - Run `npm update source-map-js` to patch CVE-2024-52317.
  - Review Next.js patch release update (`15.1.x` or latest stable patch).
  - Run `npm audit` to confirm vulnerability count drops to 0.
- **Verification Method:**
  - Run `npm audit` -> "found 0 vulnerabilities".
- **Effort Estimate:** 30 minutes

---

### FIX-10: Add Accessibility Skip Link to Root Layout
- **Severity:** P2 — WCAG 2.2 AA Accessibility Compliance
- **Affected File:** `app/layout.jsx`
- **Observed Defect:**
  Keyboard users must tab through the entire navigation bar before reaching main page content.
- **Exact Action Required:**
  Add a skip link at the top of `<body>`:
  ```jsx
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-black"
  >
    Skip to main content
  </a>
  ```
  Ensure primary container has `id="main-content"`.
- **Verification Method:**
  - Open page, press `Tab` key -> Skip link appears with visible focus ring.
- **Effort Estimate:** 15 minutes
