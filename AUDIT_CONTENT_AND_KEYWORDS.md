# SIYARA INNOVATIONS — CONTENT, KEYWORDS, PORTFOLIO & E-E-A-T AUDIT
**Document ID:** AUDIT_CONTENT_AND_KEYWORDS.md  
**Scope:** Brand Voice, Editorial Integrity, E-E-A-T Compliance, Portfolio Hygiene, Keyword Mapping & Competitor Landscape  
**Repository:** `c:\Users\HP\Downloads\Siyara-v2`  
**Target Domain:** `https://www.siyaradigitals.com`  

---

## 1. Executive Summary

Search engine evaluation guidelines (Google E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness) aggressively penalize websites presenting fabricated trust signals. Siyara Innovations currently exhibits several critical content vulnerabilities:
1. **Seven False Client Names:** A repeated marquee banner scrolls fictional brand names (*Rishabh Jewellers*, *Beyond Spaces*, *Dr. Neha Sharma*, *The Brew Chapter*, *Luxe Habitat*, *Aura Residences*, *Craft Coffee Co*) without verified engagements.
2. **Five Fictional Blog Authors:** Blog posts cite imaginary personas (*Julian Vance*, *Elena Rostova*, *Marcus Sterling*, *Dr. Aris Thorne*, *Sora Tanaka*) with stock Unsplash headshots and fabricated job titles.
3. **Unsourced / Pseudoscientific Statistics:** Articles and marketing copy claim unverifiable metrics (e.g., *"autonomous pipelines reduce overhead by 40%"*, *"cost brands up to 35% in lost conversion"*, *"out-convert off-the-shelf platforms by 3.2x"*).
4. **Encoding Mojibake:** The blog section displays raw UTF-8 corruptions (`PUB Â· VOL 04`, `â€”`, `â€™`, `â€“`).
5. **Portfolio Clarification:** Real client deliverables hosted on `*.vercel.app` (due to client non-disclosure or unlinked production domains) are uncontextualized, mixed with 10+ filler "Coming Soon" placeholder concepts.
6. **Audience & Service Misalignment:** The website text speaks in abstract, theoretical jargon (*"8-discipline digital architecture ecosystem"*) instead of directly addressing the actual target clientele: **Event Management Companies, Doctors & Clinics, Interior Designers, and Small Businesses**.

---

## 2. Removal of the Seven False Client Names

### 2.1 Code Evidence
**File:** `src/components/home/Marquee.jsx` (Lines 5–13)
```javascript
5:   const items = [
6:     'RISHABH JEWELLERS',
7:     'BEYOND SPACES',
8:     'DR. NEHA SHARMA',
9:     'THE BREW CHAPTER',
10:     'LUXE HABITAT',
11:     'AURA RESIDENCES',
12:     'CRAFT COFFEE CO',
13:   ];
```

### 2.2 Why This Must Be Replaced
- **Deceptive Trust Signal:** Presenting invented business entities as clients violates Google Search Essentials guidelines against deceptive practices and misleading metadata.
- **Legal & Commercial Risk:** If local Jaipur businesses share similar names, this constitutes trademark infringement or false commercial representation.

### 2.3 Proposed Replacement: Core Capabilities & Target Verticals Marquee
Instead of scrolling fictional clients, the marquee will showcase the agency’s **core competencies** and **target industry verticals**, reinforcing topical authority and keyword density:

```javascript
export default function Marquee() {
  const items = [
    'WEB DESIGN & DEVELOPMENT',
    'LOCAL & TECHNICAL SEO',
    'SOCIAL MEDIA MARKETING',
    'BRAND IDENTITY & POSITIONING',
    'EVENT MANAGEMENT PLATFORMS',
    'CLINIC & HEALTHCARE WEBSITES',
    'INTERIOR DESIGN SHOWCASES',
    'JAIPUR DIGITAL STUDIO',
  ];
  const list = [...items, ...items];
  return (
    <div className="relative py-6 bg-[#070A09] border-y border-[#D9B45F]/15 overflow-hidden z-20" aria-hidden="true">
      ...
    </div>
  );
}
```

---

## 3. Blog & Editorial E-E-A-T Overhaul

### 3.1 Eradication of Fictional Authors
Google's March 2024 Core Update specifically targets sites with AI-generated or fictionalized author personas.

**Audit of Fictional Personas in `src/data/blogArticles.js`:**
1. `Julian Vance` (*Head of Brand Strategy*) — Avatar: Unsplash photo `1534528741775-53994a69daeb`
2. `Elena Rostova` (*Strategy Director*) — Avatar: Unsplash photo `1573496359142-b8d87734a5a2`
3. `Marcus Sterling` (*Growth Lead*) — Avatar: Unsplash photo `1507003211169-0a1dd7228f2d`
4. `Dr. Aris Thorne` (*AI Infrastructure Architect*) — Avatar: Unsplash photo `1500648767791-00dcc994a43e`
5. `Sora Tanaka` (*Creative Director*) — Avatar: Unsplash photo `1580489944761-15a19d654956`

### 3.2 Owner Constraint & Approved Solution
- **Owner Directive:** *No founder or named team members should appear on the website.*
- **Approved E-E-A-T Strategy:** Attribute all articles, insights, and case studies to **"Siyara Innovations Editorial Team"** or **"Siyara Studio"**.
- **Schema Mapping:** Map the `author` field in `BlogPosting` schema to `{"@type": "Organization", "name": "Siyara Innovations", "url": "https://www.siyaradigitals.com"}`. This is 100% compliant with Schema.org and Google Search guidelines for institutional thought leadership.

### 3.3 Cleanup of Unsourced Statistical Claims
The following assertions must be revised or replaced with verifiable engineering rationale:
- **`blogArticles.js:168,181`:** Replace *"reducing operational overhead by 40%"* with *"eliminating repetitive manual data entry and accelerating client communication workflows"*.
- **`blogArticles.js:42`:** Replace *"cost top-tier brands up to 35% in lost conversion momentum"* with *"create user friction points that degrade conversion performance"*.
- **`blogArticles.js:44`:** Replace *"out-convert off-the-shelf template platforms by an average of 3.2x"* with *"consistently achieve higher engagement and lower bounce rates than generic website templates"*.

### 3.4 Eradication of Mojibake Encoding Corruptions
- **`src/components/blog/BlogHero.jsx:73`:** Change `PUB Â· VOL 04` to `PUB · VOL 04`.
- **`src/data/blogArticles.js`:** Global regex pass to replace:
  - `â€”` → `—` (em dash)
  - `â€™` → `’` (typographic apostrophe)
  - `â€“` → `–` (en dash)
  - `â†’` → `→` (arrow)

---

## 4. Real Portfolio Project Hygiene

### 4.1 Clarification on Vercel Demo Subdomains
- **Context:** Several projects in `src/data/projectsData.js` link to `*.vercel.app` URLs:
  - `https://shri-properties.vercel.app/`
  - `https://meridian-properties-nine.vercel.app/`
  - `https://dr-rajeshwari-sharma-medical-websit.vercel.app/`
  - `https://varena-hospital.vercel.app/`
  - `https://smile-craft-six.vercel.app/`
- **Owner Clarification:** These represent **real client projects** where production domains cannot be linked publicly due to client confidentiality or NDA requirements.
- **Hygiene Requirement:** Do not label these as public live client domains or "fictional concepts". Instead, explicitly label them as **"Interactive Client Demonstration"** or **"Confidential Client Showcase (Interactive Preview)"**. This maintains complete transparency with prospective clients while demonstrating genuine craft.

### 4.2 Pruning Placeholder "Coming Soon" Concepts
In `projectsData.js`, over 10 items (e.g. *Aaranya Estates*, *Casa Verde*, *The Courtyard*, *Terraform*, *Varuna Health*, *Aurora Women's Clinic*) are marked `status: 'COMING_SOON'` with stock imagery and placeholder text.
- **Problem:** Having more "Coming Soon" items than live projects dilutes perceived experience and makes the agency look unlaunched.
- **Fix:** Filter the default portfolio view to only show completed/interactive showcases. Group unreleased work into a single curated section: *"Select Explorations & Concept Prototypes"*.

---

## 5. Commercial Alignment & Keyword-to-Page Mapping

### 5.1 Business Core Services
1. **Web Development** (Custom Next.js, responsive layouts, high-conversion design)
2. **SEO** (Local SEO, Google Business Profile ranking, technical on-page optimization)
3. **Social Media Marketing** (Instagram grid curation, brand content, organic engagement)
4. **Branding** (Visual identity, logo systems, typography, positioning)

### 5.2 Target Customer Verticals
1. **Event Management Companies** (Wedding planners, corporate events, venue organizers in Rajasthan)
2. **Doctors and Clinics** (Dental clinics, physician practices, aesthetic centers, specialized hospitals)
3. **Interior Designers** (High-end architectural firms, luxury residential designers, commercial studios)
4. **Small Businesses** (Local manufacturers, boutiques, retail stores, professional services in Jaipur)

### 5.3 Keyword-to-Page Mapping Matrix (Jaipur Target)

| Target Search Query | Primary Target URL | Supporting Content / Section | User Intent | Primary CTA |
| :--- | :--- | :--- | :--- | :--- |
| **"web design company Jaipur"** | `https://www.siyaradigitals.com/` | Homepage Hero + WhatWeDo section | Commercial / Navigational | WhatsApp: Discuss Project |
| **"digital marketing agency Jaipur"** | `https://www.siyaradigitals.com/services` | `/services#digital-marketing` | High-Intent Commercial | WhatsApp: Request Strategy Session |
| **"SEO services Jaipur"** | `https://www.siyaradigitals.com/services` | `/services#seo` | Commercial / Transactional | WhatsApp: Free SEO Consultation |
| **"social media marketing agency Jaipur"** | `https://www.siyaradigitals.com/services` | `/services#social-media` | Commercial | WhatsApp: View Social Portfolios |
| **"website design for doctors Jaipur"** | `https://www.siyaradigitals.com/work` | Healthcare Showcase (`dr-rajeshwari-sharma`, `smilecraft`) | Vertical Long-Tail | WhatsApp: Clinic Web Consultation |
| **"interior designer website design Jaipur"** | `https://www.siyaradigitals.com/work` | Architecture Showcase (`shri-property`, `meridian`) | Vertical Long-Tail | WhatsApp: Interior Portfolio Demo |
| **"event management website design Jaipur"** | `https://www.siyaradigitals.com/services` | Event Industry Solutions Section | Vertical Long-Tail | WhatsApp: Event System Brief |
| **"local SEO Jaipur checklist"** | `https://www.siyaradigitals.com/blog/local-seo-jaipur-checklist` | Blog Article 01 (Informational Pillar) | Informational | WhatsApp: Audit My Local Ranking |
| **"website cost in Jaipur"** | `https://www.siyaradigitals.com/blog/website-cost-jaipur` | Blog Article 02 (Commercial Pillar) | Informational / Evaluation | WhatsApp: Get Custom Estimate |

---

## 6. Verifiable Competitor Comparison (Jaipur Digital Agency Landscape)

*Note: Competitor observations are drawn from established public market data for digital marketing agencies in Jaipur (e.g., Techmagnate Jaipur branch, TGC Jaipur, Webpulse, local boutique studios).*

| Feature / Dimension | Typical Jaipur Agency Competitors | Siyara Innovations (Current) | Siyara Innovations (Target Post-Audit) |
| :--- | :--- | :--- | :--- |
| **Tech Stack** | WordPress / Elementor, PHP, generic templates | Next.js 15, React 19, Tailwind CSS | Next.js 15 Server Components, sub-second loads |
| **Design Aesthetic** | Cluttered, stock graphics, generic corporate templates | High-craft dark mode, gold/emerald luxury palette | Premium editorial aesthetic, custom branding, high-trust craft |
| **Primary CTA** | Phone calls, lengthy 15-field quote forms | Phone calls & non-functional email form | Instant WhatsApp Click-to-Chat + 3-field intake |
| **SEO Strategy** | Keyword stuffing, generic directory backlinks | Theoretical "digital architecture" articles | Dedicated local landing sections for Clinics, Event Managers, Interior Designers |
| **Transparency** | Low (promises #1 Google ranking in 30 days) | Mixed (fictional authors, stock client names) | 100% transparent: verified capabilities, institutional authorship, interactive prototypes |

---

## 7. Verification & Acceptance Criteria

1. **Marquee Inspection:** Marquee contains zero fictional company names. Inspecting DOM reveals 8 capability and vertical terms with `aria-hidden="true"` on duplicate loop tracks.
2. **Author Removal:** Zero instances of Julian Vance, Elena Rostova, Marcus Sterling, Dr. Aris Thorne, or Sora Tanaka remain in `src/data/blogArticles.js`. Author property displays as `"Siyara Innovations Editorial Team"`.
3. **Mojibake Cleanliness:** Grep for `Â` across the entire workspace returns 0 results.
4. **Target Vertical Visibility:** The homepage and services pages explicitly name Event Management, Healthcare & Clinics, Interior Design, and Small Businesses.
