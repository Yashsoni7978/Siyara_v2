# SIYARA INNOVATIONS — CONTACT FORM, WHATSAPP & SECURITY AUDIT
**Document ID:** AUDIT_CONTACT_AND_SECURITY.md  
**Scope:** Lead Intake Pipeline, Communication Channels, Security Posture, Data Privacy & Spam Defense  
**Repository:** `c:\Users\HP\Downloads\Siyara-v2`  
**Target Domain:** `https://www.siyaradigitals.com`  

---

## 1. Executive Overview

A digital agency's website exists primarily to convert qualified commercial intent into live conversations. For Siyara Innovations, this conversion pipeline currently suffers from a **catastrophic silent failure**:
1. Next.js is configured with `output: 'export'`, which strips the serverless route `app/api/contact/route.js` from production output on static hosts.
2. Even when deployed in serverless mode on Vercel, if `CONTACT_WEBHOOK_URL` is omitted, the endpoint silently returns `{ success: true, message: 'Brief received successfully.' }` without delivering the email, causing **100% lead abandonment with zero error notification**.
3. Five components route users to direct cellular phone calls (`tel:9587269209`) rather than the business's mandated channel: **WhatsApp click-to-chat only** (`+91 95872 69209`).
4. The primary email domain is misspelled as `info@siyaradigital.com` (missing `"s"`), ensuring outbound emails and copy-pasted addresses fail to deliver.

This document details verified code evidence, architectural root causes, and zero-cost, privacy-compliant solutions.

---

## 2. Contact Form Deep-Dive & Root-Cause Investigation

### 2.1 Code Evidence: The Serverless Route
**File:** `app/api/contact/route.js` (Lines 1–56)
```javascript
1: import { NextResponse } from 'next/server';
2: 
3: export async function POST(request) {
4:   try {
5:     const data = await request.json();
6:     const { name, email, company, selectedCapability, details, budget, timeline } = data;
...
19:     const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
20: 
21:     if (webhookUrl) {
22:       const response = await fetch(webhookUrl, { ... });
...
48:     }
49: 
50:     return NextResponse.json({ success: true, message: 'Brief received successfully.' });
51:   } catch (error) { ... }
52: }
```

### 2.2 Code Evidence: The Next.js Configuration
**File:** `next.config.js` (Lines 1–17)
```javascript
1: /** @type {import('next').NextConfig} */
2: const nextConfig = {
3:   reactStrictMode: true,
4:   output: 'export',
5:   images: {
6:     unoptimized: true,
...
17: };
18: export default nextConfig;
```

### 2.3 The Three Failure Modes Identified

| Failure Mode | Environment | Trigger / Root Cause | Observable Behavior | Business Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Failure Mode 1: 404 Route Not Found** | Static Export / Cloudflare Pages / S3 | `output: 'export'` in `next.config.js` causes Next.js to ignore `app/api/`. `out/api/` is not generated. | Form displays: *"An unexpected error occurred. Please try again later."* (Catch block triggered by HTML 404 response). | Prospective client abandons submission; assumes website is broken. |
| **Failure Mode 2: Silent Lead Drop (False Success)** | Vercel (without env var) | If `output: 'export'` is removed but `CONTACT_WEBHOOK_URL` is undefined, lines 21–48 are skipped entirely. | Form displays: *"Brief received successfully."* Lead data is garbage-collected in memory. | **Critical P0:** Owner never receives the lead; prospect expects a reply and receives silence, ruining brand reputation. |
| **Failure Mode 3: Webhook Delivery Timeout** | Vercel (with slow webhook) | External webhook (e.g., Zapier/Make free tier) throttles or takes >10s. | Form displays: *"Submission delivery failed. Please try again later."* Status 502 returned. | High-value lead lost due to third-party rate limits. |

### 2.4 Recommended Free Production Solution: Resend or Web3Forms
To maintain high reliability without paid software or complex backend maintenance, two 100% free architectures are available:

#### Option A: Native Next.js on Vercel with Resend (Recommended)
- **Cost:** $0/month (Resend Free Tier allows **3,000 emails/month**; 100/day).
- **Architecture:** Remove `output: 'export'` from `next.config.js`. Vercel natively deploys `app/api/contact/route.js` as an Edge or Node.js Serverless Function.
- **Delivery Mechanism:** Direct API call to Resend using verified domain `siyaradigitals.com` or Google Apps Script.
- **Guarantee:** Strict validation. If email delivery fails, the endpoint returns an explicit HTTP 500/502 error; **success is NEVER returned unless the email service returns HTTP 200/201**.

#### Option B: Web3Forms or Formspree Free Webhook (Zero Backend)
- **Cost:** $0/month.
- **Architecture:** If the owner wishes to retain static hosting, `ContactIntake.jsx` submits directly to `https://api.web3forms.com/submit` using a public access key.
- **Delivery:** Delivered straight to `info@siyaradigitals.com` with anti-spam honeypot included.

---

## 3. Communication Channels: WhatsApp-Only Transition

### 3.1 Business Requirement
- **Channel:** WhatsApp Click-to-Chat only (`+91 95872 69209`).
- **Constraint:** **Strictly no phone call links.** The business operates exclusively via WhatsApp and email. Cellular phone links (`tel:`) must be eliminated across the entire site.

### 3.2 Audit of All Existing Call Links (`tel:`)

| Finding ID | Component | File Path & Line | Current Behavior | Required Action |
| :--- | :--- | :--- | :--- | :--- |
| **COM-01** | Work Page CTA | `src/components/work/WorkCTA.jsx:67` | `<a href="tel:9587269209">CALL US DIRECTLY</a>` | Replace with WhatsApp link: `https://wa.me/919587269209?text=Hi%20Siyara%20Innovations%2C%20I%20would%20like%20to%20discuss%20a%20project.` |
| **COM-02** | Home Final CTA | `src/components/home/FinalCTA.jsx:77` | `<a href="tel:9587269209">DIRECT PHONE</a>` | Replace with WhatsApp link with label *"MESSAGE ON WHATSAPP"*. |
| **COM-03** | Footer Direct Contact | `src/components/home/Footer.jsx:76` | `<a href="tel:9587269209"><span>9587269209</span></a>` | Replace with WhatsApp icon, text *"WhatsApp: +91 95872 69209"*, pointing to WhatsApp URL. |
| **COM-04** | Footer Location Column | `src/components/home/Footer.jsx:154` | `<a href="tel:9587269209">9587269209</a>` | Replace with *"Chat on WhatsApp"*, linked to `wa.me/919587269209`. |
| **COM-05** | Mobile Floating CTA | `src/components/layout/FloatingContact.jsx:11` | `<a href="tel:9587269209"><Phone /></a>` | Replace phone icon with WhatsApp icon (`MessageSquare` or WhatsApp SVG), linked to `https://wa.me/919587269209`. |
| **COM-06** | Contact Pathways | `src/components/contact/ContactDetails.jsx:24` | `title: 'DIRECT PHONE', href: 'tel:9587269209'` | Change title to `'WHATSAPP DIRECT'`, icon to WhatsApp, description to *"Direct messaging for project inquiries."* |
| **COM-07** | Contact Footer Node | `src/components/contact/ContactDetails.jsx:149` | `<a href="tel:9587269209">9587269209</a>` | Change to WhatsApp format with link `https://wa.me/919587269209`. |

### 3.3 Ideal WhatsApp Click-to-Chat URI Scheme
```text
https://wa.me/919587269209?text=Hello%20Siyara%20Innovations%2C%20I%20am%20interested%20in%20your%20digital%20services%20(Web%20%2F%20SEO%20%2F%20Social%20Media%20%2F%20Branding).
```
- Includes international country code `91` without leading `+` or spaces (required by WhatsApp API).
- Includes URL-encoded introductory greeting to reduce friction for prospects.

---

## 4. Email Domain Mismatch Remediation

### 4.1 Root Cause & Impact
The agency's legal and web domain is `siyaradigitals.com` (with an `"s"`). Across 6 key components, the contact address is written as `info@siyaradigital.com` (without `"s"`).
- **Business Impact:** Any prospect copying the email address or clicking `mailto:` sends their project brief to an unmonitored or non-existent inbox, resulting in bounced messages and lost high-ticket client relationships.

### 4.2 Verified Occurrences for Replacement
1. `app/layout.jsx:110`: `contactPoint.email = 'info@siyaradigitals.com'`
2. `src/components/home/Footer.jsx:67`: `href="mailto:info@siyaradigitals.com"`
3. `src/components/home/Footer.jsx:72`: `<span>info@siyaradigitals.com</span>`
4. `src/components/layout/FloatingContact.jsx:20`: `href="mailto:info@siyaradigitals.com"`
5. `src/components/layout/FloatingContact.jsx:22`: `aria-label="Email info@siyaradigitals.com"`
6. `src/components/contact/ContactDetails.jsx:15, 16`: `contactText: 'info@siyaradigitals.com'`, `href: 'mailto:info@siyaradigitals.com'`
7. `src/components/contact/ContactDetails.jsx:31, 32`: `contactText: 'info@siyaradigitals.com'`, `href: 'mailto:info@siyaradigitals.com'`

---

## 5. Security, Headers & Spam Defense

### 5.1 Security Headers Assessment
Current configuration in `public/_headers`:
```http
/*
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```
- **Limitation:** `public/_headers` is only respected by Cloudflare Pages. When deployed on Vercel, headers must be declared in `next.config.js` via the `headers()` async function.
- **Missing Header:** `Content-Security-Policy` (CSP) is missing. While strict CSP can break dynamic scripts, a sensible baseline policy prevents XSS attacks and unauthorized iframe embeds.

#### Proposed `next.config.js` Headers for Vercel:
```javascript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-DNS-Prefetch-Control', value: 'on' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
      ],
    },
  ];
}
```

### 5.2 Zero-Cost Spam Prevention (Honeypot Technique)
To prevent automated spam bots without paying for CAPTCHA services (or annoying users with Google reCAPTCHA image puzzles):
1. **Honeypot Field:** Add a hidden input field named `b_website` in `ContactIntake.jsx`:
   ```jsx
   <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
     <input
       type="text"
       name="b_website"
       tabIndex={-1}
       autoComplete="off"
       value={formData.b_website || ''}
       onChange={handleChange}
     />
   </div>
   ```
2. **Server/API Evaluation:** If `formData.b_website` contains any text, the submission is from an automated bot. The API immediately returns HTTP 200 (to fool the bot) without forwarding the email.

---

## 6. Privacy & Legal Compliance

### 6.1 Address Privacy (Jaipur Studio)
- **Requirement:** Keep the founder's residential street address strictly private.
- **Implementation Rule:** No street name, plot number, or apartment number shall be added to the website or Schema.org markup.
- **Allowed NAP:**
  - **Business Name:** Siyara Innovations
  - **Locality:** Jaipur
  - **Region:** Rajasthan
  - **Country:** India (IN)
  - **PIN Code:** 302001 (Jaipur Central postal district)
  - **Geo Coordinates:** `latitude: 26.9124, longitude: 75.7873` (City centroid).

### 6.2 Missing Privacy Policy & Terms of Service Pages
- Currently, `Footer.jsx:171-172` points to `href="#"`.
- **Requirement:** Search engines and ad platforms (Meta Ads, Google Ads) require valid legal pages before granting domain trust.
- **Solution:** Create simple, compliant Markdown/static routes at `app/privacy/page.jsx` and `app/terms/page.jsx` explaining data retention for lead inquiries and copyright terms.

---

## 7. Verification & Acceptance Criteria

1. **Contact Intake Verification:** Submitting the form with valid details delivers an email to `info@siyaradigitals.com` within 10 seconds.
2. **Failure Verification:** If delivery fails (simulated by invalid API key), the UI clearly displays: *"Submission could not be delivered. Please message us directly on WhatsApp."*
3. **WhatsApp Link Verification:** Clicking any contact button opens WhatsApp Web or the WhatsApp mobile app directed to `+91 95872 69209` with a pre-filled message. Zero `tel:` links exist in the DOM.
4. **Email Consistency:** Search for `siyaradigital.com` across the codebase returns zero results (all updated to `siyaradigitals.com`).
