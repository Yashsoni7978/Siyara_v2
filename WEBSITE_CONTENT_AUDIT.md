# SIYARA INNOVATIONS — COMPREHENSIVE CONTENT AUDIT

**Document Type:** Detailed Content, Services, Industries, Portfolio & Editorial Audit  
**Date:** October 2026  
**Auditor:** Antigravity AI Engineering Studio  
**Status:** Complete Audit (Non-Destructive)  
**Strict Rule:** No invented clients, projects, metrics, or assumed unverified services.

---

## 1. Service Pages Audit (Candidate & Existing Services)

The codebase houses a central service catalog at `/services` (`app/services/page.jsx`) and a dynamic route template at `app/services/[slug]/page.jsx`. The data powering the dynamic service pages is defined in `SERVICES_DATA`, comprising **12 distinct service discipline slugs**.

Below is the verified audit of the candidate service categories requested:

| Candidate Service Category | Status in Codebase | Exact URL | Content Depth & Quality | Distinct Design? | Duplicate / Overlap Analysis | Recommendation |
|---|---|---|---|---|---|---|
| **Web Design & Development** | Exists (Split into two offerings) | `/services/web-design-development` | Strong (1,200+ words, deep dive, tech stack, deliverables, FAQ) | Shared Dynamic System Template | High overlap with `/services/web-development` and `/nextjs-web-development-jaipur` | **Keep as Flagship Design & Corporate Studio Page** |
| **Custom Web Development / Engineering** | Exists | `/services/web-development` | Strong (1,100+ words, focus on React 19, serverless, Postgres) | Shared Dynamic System Template | Overlaps with `web-design-development`. Focuses on software/engineering vs branding/design. | **Keep but Differentiate** as "Custom Web Apps & Software Engineering" |
| **SEO & Search Visibility** | Exists | `/services/seo-geo` | Strong (1,300+ words, GEO, AI search, local SEO, schema) | Shared Dynamic System Template | Positioned as "GEO & Technical SEO". Distinct, high authority. | **Keep as Strategic Flagship** |
| **Social Media Marketing** | Sub-service only (No dedicated page) | Mentioned on `/services` schema & `performance-marketing` | Missing dedicated landing page | N/A | Bundled inside Performance Marketing and Content & Creative. | **Needs Dedicated Landing Page** (`/services/social-media-marketing`) |
| **Branding & Brand Identity** | Exists (Two distinct pages) | `/services/brand-strategy` & `/services/content-creative` | Strong (1,100+ words each) | Shared Dynamic System Template | Significant thematic overlap between `brand-strategy` (positioning) and `content-creative` (visual identity). | **Merge or Clearly Delineate:** Retain `brand-strategy` as Core; repurpose `content-creative` as Content & Production. |
| **Performance Marketing** | Exists | `/services/performance-marketing` | Strong (1,200+ words, Meta/Google Ads, ROAS, tracking) | Shared Dynamic System Template | Standalone, distinct commercial offering. | **Keep & Expand** with paid media case studies. |
| **Content & Creative** | Exists | `/services/content-creative` | Strong (1,000+ words, editorial assets, guidelines) | Shared Dynamic System Template | Overlaps heavily with `brand-strategy`. | **Reposition** toward Content Production, Video & Copywriting. |
| **UI/UX Design** | Exists | `/services/ui-ux-design` | Strong (1,000+ words, Figma design systems, tokens, UX research) | Shared Dynamic System Template | Highly distinct, valuable for product & SaaS founders. | **Keep & Showcase Figma Systems** |
| **E-commerce Development** | Exists | `/services/ecommerce-development` | Strong (1,050+ words, headless Shopify/Next.js, Razorpay) | Shared Dynamic System Template | Standalone, distinct commercial offering. | **Keep** |
| **AI & Automation** | Exists | `/services/ai-automation` | Strong (1,250+ words, AI agents, RAG, workflow orchestration) | Shared Dynamic System Template | Standalone, forward-looking offering. Note: `/services/ai-agents` 301s here. | **Keep** |
| **CRM & Lead Systems** | Exists | `/services/crm-lead-systems` | Strong (1,150+ words, WhatsApp API routing, lead capture) | Shared Dynamic System Template | Standalone, high-conversion focus. | **Keep** |
| **Mobile App Development** | Exists | `/services/mobile-app-development` | Strong (1,150+ words, React Native, PWA, 60fps performance) | Shared Dynamic System Template | Standalone. Note: `/services/app-development` 301s here. | **Keep** |
| **Growth Optimization** | Exists | `/services/growth-optimization` | Strong (1,100+ words, CRO experiments, telemetry, GA4) | Shared Dynamic System Template | Standalone, complements Performance Marketing. | **Keep** |

### Service Template Architecture Note:
All 12 dynamic service pages share a common component tree inside `app/services/[slug]/page.jsx`:
1. Hero Section with contextual keyword H1 and dual WhatsApp/Portfolio CTAs.
2. Topical Authority / Citability Answer Box (engineered for AI search engines like Perplexity and ChatGPT).
3. 3-Point Case Analysis / Bottleneck Deep-Dive.
4. Technical Stack Badges & Deliverables Matrix.
5. 4-Phase Architectural Engineering Process.
6. Transparent Investment Tiers (INR price brackets).
7. Contextual Topical Silo (links to 4 related engineering guides).
8. 4-5 Validated FAQ items with `FAQPage` schema.
9. High-contrast conversion CTA.

---

## 2. Industry Pages Audit

The codebase contains 9 dedicated industry pages under `app/industries/`. Below is the forensic audit of each page:

| Industry Route | Meta Title | Content Depth & Quality | SEO Status | Genuine Supporting Projects in Code | Recommended Action |
|---|---|---|---|---|---|
| `/industries/healthcare` | Clinic & Doctor Web Design Jaipur | Strong (396 lines, 20.9 KB). Addresses doctor credibility, appointment funnels, local medical SEO, ethical compliance. | Indexed | **3 Demonstration Prototypes:**<br>1. *Smile Craft* (Dental) → `https://smile-craft-six.vercel.app/`<br>2. *Dr. Rajeshwari Sharma* (Physician) → `https://dr-rajeshwari-sharma-medical-websit.vercel.app/`<br>3. *Varena Hospital* (Multi-speciality) → `https://varena-hospital.vercel.app/` | **Keep as Tier-1 Flagship.** Has genuine interactive demo backing. |
| `/industries/real-estate` | Real Estate Web Development Jaipur | Strong (19.7 KB). Focuses on RERA compliance, high-intent lead funnels, virtual showcases, multi-project portfolios. | Indexed | **2 Demonstration Prototypes:**<br>1. *Shri Property* → `https://shri-properties.vercel.app/`<br>2. *Meridian Properties* → `https://meridian-properties-nine.vercel.app/` | **Keep as Tier-1 Flagship.** Has live interactive demo backing. |
| `/industries/event-management` | Event Management Web Design Jaipur | Strong (19.8 KB). Tailored for luxury destination wedding planners, corporate conferences, and high-ticket event portfolios. | Indexed | **2 Demonstration Prototypes:**<br>1. *Ember & Ivory Events* → `https://ember-ivory-events.vercel.app/`<br>2. *Aranya Events / Retreat* → `https://aranya-website-woad.vercel.app/` | **Keep as Tier-1 Flagship.** Strong local Jaipur market relevance. |
| `/industries/interior-design` | Interior Design Web Studio Jaipur | Strong (17.6 KB). High-aesthetic layout, spatial project galleries, architect credibility, high-ticket residential inquiries. | Indexed | **1 Demonstration Prototype:**<br>1. *Studio Mitti* → `https://studio-mitti-nu.vercel.app/` | **Keep as Tier-1 Flagship.** Highly relevant to Jaipur architectural firms. |
| `/industries/hospitality` | Hospitality & Resort Web Design Jaipur | Strong (16.4 KB). Heritage hotel direct bookings, tariff calendars, guest trust funnels. | **Conflicted (Blocked by 301 in next.config.js)** | **1 Demonstration Prototype in data:**<br>1. *Aranya Resort & Retreat* → `https://aranya-website-woad.vercel.app/` | **Fix Immediately:** Remove line 64 redirect in `next.config.js` to unblock this page. |
| `/industries/jewellery-luxury` | Luxury Jewellery Web Design Jaipur | Strong (16.6 KB). Johari Bazaar B2B export, gemstone catalog architecture, CAD rendering showcases, luxury typography. | Indexed | **0 Live Demo URLs linked on page.** (Projects in data: *Tarini*, *Rivaara* in Fashion). | **Keep & Add Proof:** Link genuine luxury/jewellery demo prototypes. |
| `/industries/ecommerce` | E-Commerce Website Development Jaipur | Strong (16.2 KB). Headless Next.js, sub-second checkout, Razorpay, organic shopping SEO. | Indexed | **0 Live Demo URLs linked on page.** (Project in data: *Nettle & Clay* → `https://nettle-and-clay.vercel.app/`). | **Keep & Link Nettle & Clay** demo on page. |
| `/industries/manufacturing` | Manufacturing & Export Web Design Jaipur | Strong (16.4 KB). Sitapura & VKI industrial focus, B2B procurement, international export SEO, RFQ inquiry forms. | Indexed | **0 Live Demo URLs linked on page.** All 8 manufacturing projects in data are reserved concepts. | **Review / Improve:** Retain for B2B industrial SEO, but build 1 live industrial catalog prototype to establish authority. |
| `/industries/education` | Education & Institute Web Design Jaipur | Strong (16.3 KB). Admission funnels, coaching centers, fee structures, local education SEO. | Indexed | **0 Live Demo URLs linked on page.** (Projects in data are reserved concepts). | **Review / Improve:** Add live demonstration prototype for a Jaipur coaching institute. |

---

## 3. Work and Portfolio Audit

### Architecture of `/work` (`src/views/Work.jsx` & `src/data/projectsData.js`):
- `/work` is currently a single-page portfolio showcase featuring an industry filter bar (`IndustryIndex.jsx`), a project grid (`FeaturedWorkGrid.jsx`), an industries overview (`IndustriesSection.jsx`), a featured case study (`FeaturedCaseStudy.jsx`), and a conversion CTA (`WorkCTA.jsx`).
- **Critical Finding: Zero Dedicated Detail Pages.** There is no `/work/[slug]` route. Clicking any project card either opens an external link in a new tab or triggers a "Coming Soon" popup modal (`ComingSoonModal.jsx`).
- **Data File Inventory:** `src/data/projectsData.js` contains exactly **85 project entries**.
  - **17 entries have active live demo URLs** (mostly deployed on Vercel as architectural concept prototypes or founder-owned platforms).
  - **68 entries are reserved placeholder concepts** with generic Unsplash stock photography and descriptions starting with *"Reserved concept for..."* or *"Upcoming platform concept for..."*.

### Complete Table of Real Projects & Functional Demos (17 Items):

| Project Name | Existing Detail Page? | Live Demo URL | Screenshot / Visual Asset | Industry Category | Nature of Project | Recommended Action |
|---|---|---|---|---|---|---|
| **Shri Property** | No (External Link Only) | `https://shri-properties.vercel.app/` | Unsplash Stock Image | Real Estate | Architecture Prototype / Demo | **Create dedicated `/work/shri-property` case study**; capture real screenshots of the live demo. |
| **Meridian Properties** | No (External Link Only) | `https://meridian-properties-nine.vercel.app/` | Unsplash Stock Image | Real Estate | Architecture Prototype / Demo | **Create dedicated `/work/meridian-properties` case study.** |
| **Dr. Rajeshwari Sharma** | No (External Link Only) | `https://dr-rajeshwari-sharma-medical-websit.vercel.app/` | Unsplash Stock Image | Healthcare | Solo Medical Practice Prototype | **Create dedicated `/work/dr-rajeshwari-sharma` case study.** |
| **Varena Hospital** | No (External Link Only) | `https://varena-hospital.vercel.app/` | Unsplash Stock Image | Healthcare | Multi-speciality Hospital Prototype | **Create dedicated `/work/varena-hospital` case study.** |
| **SmileCraft Dental Clinic** | No (External Link Only) | `https://smile-craft-six.vercel.app/` | Unsplash Stock Image | Healthcare | Specialist Dental Clinic Prototype | **Create dedicated `/work/smilecraft-dental` case study.** |
| **Aranya Resort & Retreat** | No (External Link Only) | `https://aranya-website-woad.vercel.app/` | Unsplash Stock Image | Hospitality | Boutique Resort Prototype | **Create dedicated `/work/aranya-resort` case study.** |
| **Bloom Event Design Studio** | No (External Link Only) | `https://ember-ivory-events.vercel.app/` | Unsplash Stock Image | Events | Wedding & Event Prototype | Merge with Ember & Ivory (shares same demo URL). |
| **Ember & Ivory Events** | No (External Link Only) | `https://ember-ivory-events.vercel.app/` | Unsplash Stock Image | Events | Luxury Wedding Planner Prototype | **Create dedicated `/work/ember-and-ivory` case study.** |
| **Anchor Yash Soni** | No (External Link Only) | `https://yashsoni.in/` | Unsplash Stock Image | Anchor / Emcee | Live Client / Founder Portfolio | **Create dedicated `/work/yash-soni` case study** with real live screenshots. |
| **Anchor Ritvika Solanki** | No (External Link Only) | `https://anchor-ritika.vercel.app/` | Unsplash Stock Image | Anchor / Emcee | Live Artist Portfolio Prototype | **Create dedicated `/work/ritvika-solanki` case study.** |
| **Tarini** | No (External Link Only) | `https://tarini-bridal.vercel.app/` | Unsplash Stock Image | Fashion | Bridal Fashion Prototype | **Create dedicated `/work/tarini-bridal` case study.** |
| **Rivaara** | No (External Link Only) | `https://rivaara.vercel.app/` | Unsplash Stock Image | Fashion | Luxury Pret / Festive Wear Prototype | **Create dedicated `/work/rivaara` case study.** |
| **Nettle & Clay** | No (External Link Only) | `https://nettle-and-clay.vercel.app/` | Unsplash Stock Image | E-Commerce | Artisanal D2C Storefront Prototype | **Create dedicated `/work/nettle-and-clay` case study.** |
| **Studio Mitti** | No (External Link Only) | `https://studio-mitti-nu.vercel.app/` | Unsplash Stock Image | Architecture & Interiors | Spatial Design Studio Prototype | **Create dedicated `/work/studio-mitti` case study.** |
| **Noor** | No (External Link Only) | `https://noor-nine-beta.vercel.app/` | Unsplash Stock Image | Food & Beverage | Fine Dining / Patisserie Prototype | **Create dedicated `/work/noor-dining` case study.** |
| **Pravaah AI** | No (External Link Only) | `https://parvaah-ai.vercel.app/` | Unsplash Stock Image | AI / Automation | AI Workflow SaaS Prototype | **Create dedicated `/work/pravaah-ai` case study.** |
| **Folio** | No (External Link Only) | `https://folio-beta-flax-17.vercel.app/` | Unsplash Stock Image | Fintech | Personal Wealth App Prototype | **Create dedicated `/work/folio-fintech` case study.** |

### Analysis of the 68 Placeholder Entries:
The remaining 68 items in `projectsData.js` represent conceptual stubs (e.g. *Aura Living*, *Kavya*, *Celesta*, *Equinox Capital*, *Nova Operations*, etc.). Each has an ID (`03` through `86`), a slug, tags, an Unsplash stock image, and a description indicating it is an "upcoming concept" or "reserved concept".
- **Problem:** Having 68 placeholder cards mixed into the portfolio dilutes authority and can frustrate potential clients clicking through expecting real project breakdowns.
- **Strategic Recommendation:** Curate the public portfolio down to the top **12–15 high-fidelity case studies** (built on real detail pages with actual device mockups, performance metrics, and client deliverables). Archive or hide the unbuilt placeholder stubs from primary search navigation.

---

## 4. Insights and Articles Audit

The repository contains **31 comprehensive articles** defined in `src/data/blogArticles.js` (1 Featured Article + 30 Blog Articles). All 31 articles are rendered dynamically at `/insights/[slug]` with structured `BlogPosting`, `BreadcrumbList`, and `FAQPage` schemas.

### Complete Articles Inventory:

| # | Article Slug | Title | Date | Category | FAQs | Word Count / Quality | Assessment & Recommendation |
|---|---|---|---|---|---|---|---|
| 01 | `new-digital-ecosystem-strategy-technology-growth` | GEO & Digital Architecture: The 2026 B2B Growth Playbook for India | Aug 14, 2026 | SEO & GEO | 4 | Strong (1,500+ w) | **Keep as Flagship Pillar Guide.** |
| 02 | `website-cost-jaipur` | Website Development Cost in Jaipur (2026): An Honest Breakdown for Business Owners | Sep 19, 2026 | Web Dev | 5 | Strong (1,800+ w) | **Keep as Primary Local Pricing Guide.** High commercial search intent. |
| 03 | `custom-nextjs-website-price-india` | Custom Next.js Website Price in India (2026): What B2B Brands Actually Pay | Sep 22, 2026 | Web Dev | 4 | Strong (1,400+ w) | **Review / Consolidate:** Highly overlaps with #02 and #26. Differentiate toward national enterprise Next.js pricing. |
| 04 | `seo-services-cost-jaipur` | SEO Services Cost in Jaipur (2026): What Businesses Actually Pay and What They Should | Sep 24, 2026 | SEO & GEO | 4 | Strong (1,600+ w) | **Keep:** High commercial search intent for local SEO inquiries. |
| 05 | `ecommerce-website-development-cost-india` | E-Commerce Website Development Cost in India (2026): The Complete Business Guide | Sep 26, 2026 | E-commerce | 5 | Strong (1,700+ w) | **Keep:** High intent for retail/D2C store owners. |
| 06 | `mobile-app-development-cost-jaipur` | Mobile App Development Cost in Jaipur (2026): Native, React Native & PWA Compared | Sep 28, 2026 | Technology | 4 | Strong (1,500+ w) | **Keep:** Excellent breakdown of tech stacks and costs. |
| 07 | `jewellery-website-design-jaipur-johari-bazaar` | Jewellery Website Design in Jaipur: Johari Bazaar & Sitapura B2B Export Playbook | Oct 1, 2026 | Strategy | 5 | Strong (1,900+ w) | **Keep as Industry Playbook:** Directly supports `/industries/jewellery-luxury`. |
| 08 | `real-estate-website-development-jaipur-rera` | Real Estate Website Development in Jaipur: RERA Builder Portals & Lead Generation Architecture | Oct 3, 2026 | Strategy | 5 | Strong (2,000+ w) | **Keep as Industry Playbook:** Directly supports `/industries/real-estate`. |
| 09 | `clinic-hospital-website-design-jaipur` | Clinic & Hospital Website Design in Jaipur: Appointment Booking & Local SEO Playbook | Oct 5, 2026 | Strategy | 5 | Strong (2,100+ w) | **Keep as Industry Playbook:** Directly supports `/industries/healthcare`. |
| 10 | `hotel-resort-website-design-rajasthan` | Hotel & Resort Website Design in Rajasthan: Direct Booking Engine Architecture for Heritage Properties | Oct 7, 2026 | Strategy | 5 | Strong (1,850+ w) | **Keep as Industry Playbook:** Directly supports `/industries/hospitality`. |
| 11 | `coaching-institute-school-website-design-jaipur` | Coaching Institute & School Website Design in Jaipur: Admission Portal & Student Lead Playbook | Oct 9, 2026 | Strategy | 5 | Strong (1,750+ w) | **Keep as Industry Playbook:** Directly supports `/industries/education`. |
| 12 | `b2b-manufacturing-website-sitapura-vki-jaipur` | B2B Manufacturing Website Design: Sitapura & VKI Industrial Zone Jaipur Export Playbook | Oct 11, 2026 | Strategy | 5 | Strong (1,900+ w) | **Keep as Industry Playbook:** Directly supports `/industries/manufacturing`. |
| 13 | `luxury-interior-designer-portfolio-website-jaipur` | Luxury Interior Designer Portfolio Website in Jaipur: Gallery Architecture & Lead Generation Guide | Oct 13, 2026 | Design | 5 | Strong (1,800+ w) | **Keep as Industry Playbook:** Directly supports `/industries/interior-design`. |
| 14 | `wedding-event-planner-website-design-jaipur` | Wedding & Event Planner Website Design in Jaipur: Destination Wedding Lead Generation Playbook | Oct 15, 2026 | Strategy | 5 | Strong (1,850+ w) | **Keep as Industry Playbook:** Directly supports `/industries/event-management`. |
| 15 | `how-to-rank-chatgpt-perplexity-india` | How to Rank in Perplexity, ChatGPT & Google AI Overviews for Indian Businesses | Oct 17, 2026 | SEO & GEO | 4 | Strong (1,650+ w) | **Keep:** Cutting-edge GEO guide with strong citability factors. |
| 16 | `nextjs-vs-wordpress-seo-core-web-vitals` | Next.js vs WordPress for SEO & Core Web Vitals in 2026: Real Indian Business Benchmark Data | Oct 19, 2026 | Technology | 5 | Strong (1,700+ w) | **Keep:** High technical authority comparison guide. |
| 17 | `fix-crawled-currently-not-indexed-google-search-console` | Fix "Crawled Currently Not Indexed" in Google Search Console: Indian Website Remediation Guide | Oct 21, 2026 | SEO & GEO | 4 | Strong (1,550+ w) | **Keep:** Practical technical troubleshooting guide. |
| 18 | `what-is-digital-architecture` | What Is Digital Architecture? The Integrated Framework for Indian B2B Brands | Oct 23, 2026 | Strategy | 4 | Strong (1,400+ w) | **Keep:** Foundational agency positioning piece. |
| 19 | `best-web-design-company-jaipur` | Best Web Design Company in Jaipur (2026): Tech Stack, Speed & Agency Comparison | Nov 2, 2026 | Web Dev | 4 | Strong (1,600+ w) | **Review / Improve:** High commercial ranking keyword; ensure comparison remains balanced and objective. |
| 20 | `top-technical-seo-agency-jaipur` | How to Choose the Top Technical SEO Agency in Jaipur (2026): 7 Non-Negotiable Criteria | Nov 4, 2026 | SEO & GEO | 4 | Strong (1,500+ w) | **Keep:** Good conversion funnel piece for technical SEO. |
| 21 | `how-to-choose-digital-architecture-studio-rajasthan` | How to Choose a Digital Architecture Studio in Rajasthan: The B2B Founder's Evaluation Guide | Nov 6, 2026 | Strategy | 4 | Strong (1,450+ w) | **Review:** Overlaps with #19 and #25. Consider consolidating. |
| 22 | `seo-geo-search-visibility-prepare-for-ai-search` | Traditional SEO vs GEO: The 2026 Comparison & Technical Migration Guide | Oct 25, 2026 | SEO & GEO | 4 | Strong (1,600+ w) | **Keep:** Technical migration focus differentiates it from #15. |
| 23 | `local-seo-jaipur-checklist` | Local SEO for Jaipur Businesses: Single-Location GBP & Google Maps 3-Pack Checklist | Oct 27, 2026 | SEO | 4 | Strong (1,500+ w) | **Review:** Overlaps with #27. #23 focuses on Single-location GBP checklist; #27 focuses on multi-branch. Retain both with clear cross-links. |
| 24 | `why-your-jaipur-business-needs-a-professional-website-in-2026` | Why Your Jaipur Business Needs a Professional Website in 2026: 5 Commercial Realities | Nov 8, 2026 | Web Dev | 4 | Strong (1,350+ w) | **Keep:** Top-of-funnel awareness piece. |
| 25 | `how-to-choose-a-web-design-agency-in-jaipur` | Website RFP & Contract Red Flags: 8 Questions Before Hiring a Jaipur Web Agency | Nov 10, 2026 | Web Dev | 4 | Strong (1,500+ w) | **Keep:** Strong commercial trust-building piece. |
| 26 | `website-development-cost-in-india-business-guide` | Website Development Cost in India (2026): The Honest Business Guide | Oct 29, 2026 | Web Dev | 4 | Strong (1,600+ w) | **Review:** Overlaps with #02 and #03. Focus #26 on Pan-India / SME, #02 on Jaipur, #03 on Custom Next.js. |
| 27 | `local-seo-guide-jaipur-businesses` | Hyper-Local & Multi-Branch SEO Guide for Jaipur Businesses | Oct 31, 2026 | SEO | 5 | Strong (1,650+ w) | **Keep:** Focuses on multi-location / franchise SEO in Jaipur. |
| 28 | `building-digital-strategy-drives-growth` | Building a Digital Strategy That Actually Drives B2B Growth in India | Nov 12, 2026 | Strategy | 5 | Strong (1,450+ w) | **Keep:** Executive strategy piece. |
| 29 | `what-is-brand-strategy-framework` | What Is Brand Strategy? The Complete Framework for Indian B2B Brands | Nov 14, 2026 | Brand | 5 | Strong (1,550+ w) | **Keep:** Supports `/services/brand-strategy`. |
| 30 | `what-makes-a-high-performing-website` | What Makes a High-Performing Website? 7 Technical & Commercial Factors in 2026 | Nov 16, 2026 | Web Dev | 5 | Strong (1,600+ w) | **Keep:** Educational piece on web performance. |
| 31 | `how-to-get-more-enquiries-from-your-website` | How to Get More Enquiries from Your Website in India: Conversion Architecture Playbook | Nov 18, 2026 | Conversion | 4 | Strong (1,500+ w) | **Keep:** Supports `/services/crm-lead-systems` & CRO. |

### Keyword Cannibalization & Overlap Clusters:
1. **The Cost Guide Cluster (3 articles):**
   - `/insights/website-cost-jaipur`
   - `/insights/custom-nextjs-website-price-india`
   - `/insights/website-development-cost-in-india-business-guide`
   *Risk:* Google may alternate rankings or cannibalize impressions between these 3 pages for queries like "website development cost in India" or "website price Jaipur".
   *Recommendation:* Add explicit canonical cross-linking and clearly partition target search intent:
     - #02: Target exclusively `website cost in jaipur`, `web design price jaipur`.
     - #03: Target exclusively `custom nextjs website cost india`, `react website development price`.
     - #26: Target broader national SME queries `website development cost in india`.
2. **The Agency Selection Cluster (3 articles):**
   - `/insights/best-web-design-company-jaipur`
   - `/insights/how-to-choose-a-web-design-agency-in-jaipur`
   - `/insights/how-to-choose-digital-architecture-studio-rajasthan`
   *Risk:* High semantic overlap in search engine eyes.
   *Recommendation:* Refactor #19 as the objective agency landscape comparison; keep #25 as the tactical RFP contract vetting checklist; merge #21 into #18/19 or repurpose for Rajasthan-wide enterprise procurement.
3. **The Local SEO Cluster (2 articles):**
   - `/insights/local-seo-jaipur-checklist` (Single-location focus)
   - `/insights/local-seo-guide-jaipur-businesses` (Multi-location & franchise focus)
   *Recommendation:* Maintain both, but add prominent introductory notices clarifying: *"Looking for single-location Google Maps ranking? See our Single-Location Checklist."* vs *"Managing multiple branches across Jaipur? Read below."*
