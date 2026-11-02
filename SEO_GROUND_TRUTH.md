# SIYARA INNOVATIONS — SEO GROUND TRUTH

**Document ID:** `SEO_GROUND_TRUTH.md`  
**Status:** Permanent Source of Truth for all SEO, Content, and Architecture Decisions  
**Effective Date:** November 2, 2026  
**Governing Rule:** If any prompt, audit report, external tool recommendation, or legacy file conflicts with this document, **this document strictly overrides and governs**.

---

## 1. Domain
The confirmed primary domain is:  
**`https://www.siyaradigitals.com`**

Use this domain consistently for:
- Canonical URLs
- XML Sitemap (`sitemap.xml`)
- Metadata (`metadataBase`, OpenGraph, Twitter cards)
- Structured Data (JSON-LD `@id`, `url`, `publisher`)
- Internal absolute URLs
- Redirect destinations
- Robots directives (`robots.txt`)

*Rule:* Ignore `siyarainnovations.com`. It was introduced by an incorrect earlier prompt and is **not** the approved primary domain.

---

## 2. Business Positioning
Siyara Innovations is a **Jaipur-based digital agency serving businesses across India**.
- **Target Audience:**
  - Small businesses
  - Growing businesses
  - Businesses with approximately 0–50 employees
- **Scope & Location Boundaries:**
  - Do not position Siyara as exclusively serving Jaipur.
  - Do not make unsupported neighbourhood (e.g. Malviya Nagar claims as Siyara's exclusive physical base), office-location, or unverified physical-address claims.

---

## 3. Four Core Services
Only these four services are core promoted services:
1. **Website Design & Development** (`/services/web-design-development`)
2. **SEO** (`/services/seo-services`)
3. **Social Media Marketing** (`/services/social-media-marketing`)
4. **Branding** (`/services/branding`)

*Rule:* All other services (e-commerce development, mobile app development, UI/UX design, AI automation, growth optimization, content creative, CRM lead systems, performance marketing) are **secondary, unpromoted services and must remain `noindex, follow`** and **excluded from the sitemap** until the owner supplies supporting proof.

---

## 4. Four Core Industries
Only these four industries are approved for promoted industry pages:
1. **Healthcare** (`/industries/healthcare`)
2. **Interior Design** (`/industries/interior-design`)
3. **Event Management** (`/industries/event-management`)
4. **Real Estate** (`/industries/real-estate`)

*Rule:* All other industry pages (`/industries/jewellery-luxury`, `/industries/hospitality`, `/industries/manufacturing`, `/industries/ecommerce`, `/industries/education`) **must remain `noindex, follow`** and **excluded from the sitemap** until the owner supplies evidence and approves their promotion. `/industries/hospitality` permanently redirects (301) to `/industries`.

---

## 5. Contact and Social Details
- **Approved Contact Methods:**
  - **WhatsApp:** `+91 95872 69209` (`https://wa.me/919587269209`)
  - **Email:** `info@siyaradigitals.com`
- *Strict Rule:* Use WhatsApp and email only. **Do not use telephone links (`tel:`).**
- **Approved Social Platforms:**
  - LinkedIn: `https://www.linkedin.com/company/siyarainnovations/`
  - Instagram: `https://www.instagram.com/siyarainnovations/`
- *Strict Rule:* **Do not add Twitter/X links.**

---

## 6. Identity and Claims
- **Founder & Individual Names:** Do not mention any founder or individual by name (`Yash`, `Soni`, `Rishabh`, or personal titles).
- **Prohibited Content:** Do not publish:
  - Fake clients (e.g. Rishabh Jewellers, Beyond Spaces)
  - Fake testimonials
  - Fake project results or fabricated before/after metrics
  - Fake view counts
  - Unsupported awards
  - Unsupported rankings
  - Unsupported performance guarantees
  - Unsourced statistics
- **Banned Self-Promotional Superlatives:**
  - "Best"
  - "Top"
  - "Guaranteed"
  - "Premier"
  - "Pioneering"
  - "#1" / "Number one"
  - "Leading" (when used as an unsupported superiority claim)

---

## 7. Pricing
- **Zero Rupee Figures:** No rupee-denominated prices (`₹`, `INR`, `Rs.`) or price ranges on indexable pages. This includes both Siyara's own prices and market estimates.
- **Allowed Pricing Discussion:** Cost-related informational articles may discuss:
  - Cost factors
  - Project scope
  - Features
  - Technical complexity
  - Qualitative pricing tiers
- *Strict Rule:* Do not include numerical rupee figures or numerical ranges anywhere on indexable canonical pages.

---

## 8. Content and Terminology
- **Prohibited Terms on Indexable Pages:**
  - `Digital architecture`
  - `Ecosystem`
  - `Conversion architecture`
  - `Connected system`
  - `Growth intelligence`
- **Technical Framework Mentions (Strict Limits):**
  - `Next.js` and `React` may appear **only in one short factual technical line** on the web design and development page (`/services/web-design-development`).
  - `GEO` (Generative Engine Optimization) may appear **only in one short section** on the SEO page (`/services/seo-services`).
  - Do not add technical framework jargon throughout customer-facing articles.
  - **Write for business owners, not developers.**

---

## 9. Dates
- **Cut-off Reference Date:** November 2, 2026.
- No article may have a publication date after 2 November 2026.
- No sitemap `lastModified` value may be in the future.
- Do not invent publication histories.

---

## 10. Portfolio
- **Prohibited Portfolio Items:** Do not display:
  - Coming-soon projects
  - Stub projects
  - Fake projects
  - Unsplash placeholders
  - Unapproved concepts or prototypes
  - Projects without genuine evidence of delivery
- **Case Studies Policy:** Case studies remain **unpublished (`approved: false`)** returning 404 until explicitly approved by the owner using `approved: true`.

---

## 11. Design
- Do not redesign the existing website.
- Preserve the current colours, typography, design system, layout, and responsive behaviour.
- Only make changes required for the approved SEO and content corrections.
