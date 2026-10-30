import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Mail, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../src/config/business';

export const metadata = {
  title: 'Privacy Policy · Jaipur Studio',
  description: 'Privacy Policy for Siyara Innovations. Learn how our Jaipur digital studio protects your data, communications, and project information.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/privacy',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/privacy',
    siteName: 'Siyara Innovations',
    title: 'Privacy Policy · Jaipur Studio | Siyara Innovations',
    description: 'Privacy Policy for Siyara Innovations. Learn how our Jaipur digital studio protects your data, communications, and project information.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy · Siyara Innovations Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy · Jaipur Studio | Siyara Innovations',
    description: 'Privacy Policy for Siyara Innovations. Learn how our Jaipur digital studio protects your data, communications, and project information.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function PrivacyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.siyaradigitals.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Privacy Policy',
        'item': 'https://www.siyaradigitals.com/privacy',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#070A09] text-[#F3EFE3] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-[#D9B45F] uppercase hover:underline mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        {/* Header */}
        <div className="border-b border-[#0B5E49]/30 pb-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-5 h-5 text-[#D9B45F]" />
            <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#D9B45F] uppercase">
              LEGAL DOCUMENTATION
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-normal text-[#F3EFE3] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-lora text-[#9D9B91]">
            Effective Date: October 21, 2026 · Governing Location: Jaipur, Rajasthan, India
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base font-sans leading-relaxed text-[#D2CEC4]">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-roboto text-[#F3EFE3] font-normal">
              1. Overview & Commitment
            </h2>
            <p>
              Siyara Innovations (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a digital design, web development, SEO, and branding studio based in Jaipur, Rajasthan, India. We respect your privacy and are committed to safeguarding personal information collected through our official website (<span className="text-[#D9B45F]">https://www.siyaradigitals.com</span>).
            </p>
            <p>
              This Privacy Policy explains what information we collect, why we collect it, how it is processed, and your rights concerning your personal data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-roboto text-[#F3EFE3] font-normal">
              2. Information We Collect
            </h2>
            <p>We collect information only when voluntarily submitted by you or collected passively for performance diagnostics:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#B8B5AB]">
              <li>
                <strong className="text-[#F3EFE3]">Inquiry & Project Intake:</strong> When you submit our contact form, we collect your full name, email address, company/brand name, service requirements, and project scope details.
              </li>
              <li>
                <strong className="text-[#F3EFE3]">Direct Communication:</strong> If you connect via WhatsApp or direct email (<span className="text-[#D9B45F]">info@siyaradigitals.com</span>), we retain the communication records necessary to quote, contract, or execute your project.
              </li>
              <li>
                <strong className="text-[#F3EFE3]">Anonymous Technical Analytics:</strong> We may use aggregated performance tools (such as Google Analytics 4 and Microsoft Clarity) to monitor aggregate page views, device categories, browser versions, and interaction flows. These tools collect anonymized IP records and do not harvest personally identifiable information.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-roboto text-[#F3EFE3] font-normal">
              3. Purpose & Legal Basis for Processing
            </h2>
            <p>The information we collect is strictly utilized for:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#B8B5AB]">
              <li>Responding to your project inquiries and preparing commercial proposals.</li>
              <li>Executing contracted digital marketing, web engineering, SEO, and branding services.</li>
              <li>Preventing automated spam and abuse via server-side validation and honeypot filtering.</li>
              <li>Analyzing website usability and improving performance for visitors.</li>
            </ul>
            <p>We do not sell, rent, monetize, or disclose your contact information to third-party data brokers or marketing affiliates.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-roboto text-[#F3EFE3] font-normal">
              4. Service Providers & Third-Party Infrastructure
            </h2>
            <p>
              To deliver high-availability digital services, we use secure, enterprise infrastructure providers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#B8B5AB]">
              <li><strong className="text-[#F3EFE3]">Vercel Inc.:</strong> Application hosting, edge caching, and serverless runtime execution.</li>
              <li><strong className="text-[#F3EFE3]">Transactional Mail Delivery:</strong> Contact form submissions are processed via secure email dispatch services (e.g., Resend / Webhooks) directly to our verified company inbox.</li>
              <li><strong className="text-[#F3EFE3]">WhatsApp (Meta Platforms):</strong> When you click our WhatsApp links, conversations are governed by WhatsApp&rsquo;s end-to-end encryption and terms.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-roboto text-[#F3EFE3] font-normal">
              5. Data Retention & Security
            </h2>
            <p>
              We apply strict security measures to protect your information against unauthorized access, alteration, or disclosure. Contact form payloads are never logged in public logs or exposed in client bundles. We retain client records for the duration of our commercial relationship or as mandated by applicable Indian tax and corporate regulations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-roboto text-[#F3EFE3] font-normal">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or ask for the deletion of your contact records. To exercise these rights, please email us directly at <span className="text-[#D9B45F]">info@siyaradigitals.com</span>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-roboto text-[#F3EFE3] font-normal">
              7. Notice on Legal Review
            </h2>
            <p className="text-xs text-[#9D9B91] italic bg-[#0E1513] p-4 rounded border border-[#0B5E49]/20">
              Disclaimer: This privacy statement is provided for transparent operational disclosure of Siyara Innovations&rsquo; website data practices. Formal legal counsel should be consulted for statutory compliance updates under the Digital Personal Data Protection Act (DPDP), 2023.
            </p>
          </section>

          <section className="space-y-4 border-t border-[#0B5E49]/30 pt-8">
            <h2 className="text-xl sm:text-2xl font-roboto text-[#F3EFE3] font-normal">
              8. Contact Details
            </h2>
            <p>For any questions or data concerns regarding this policy, please reach out to:</p>
            <div className="bg-[#0E1513] p-6 rounded-lg border border-[#0B5E49]/30 space-y-3">
              <p className="font-semibold text-[#F3EFE3]">{BUSINESS_CONFIG.name}</p>
              <p className="text-sm text-[#B8B5AB]">Location: {BUSINESS_CONFIG.location.displayName}, India</p>
              <p className="text-sm text-[#B8B5AB]">
                Email:{' '}
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-[#D9B45F] hover:underline">
                  {BUSINESS_CONFIG.email}
                </a>
              </p>
              <p className="text-sm text-[#B8B5AB]">
                WhatsApp:{' '}
                <a href={BUSINESS_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#D9B45F] hover:underline">
                  {BUSINESS_CONFIG.whatsappFormatted} (Inquiries only)
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
