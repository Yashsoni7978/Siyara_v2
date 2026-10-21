import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../src/config/business';

export const metadata = {
  title: 'Terms of Service | Siyara Innovations Jaipur',
  description: 'Terms of Service for Siyara Innovations. Guidelines, intellectual property rights, and terms governing our digital agency client engagements.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/terms',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/terms',
    siteName: 'Siyara Innovations',
    title: 'Terms of Service | Siyara Innovations Jaipur',
    description: 'Terms of Service for Siyara Innovations. Guidelines, intellectual property rights, and terms governing our digital agency client engagements.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Terms of Service · Siyara Innovations Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Siyara Innovations Jaipur',
    description: 'Terms of Service for Siyara Innovations.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function TermsPage() {
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
        'name': 'Terms of Service',
        'item': 'https://www.siyaradigitals.com/terms',
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
            <FileText className="w-5 h-5 text-[#D9B45F]" />
            <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#D9B45F] uppercase">
              LEGAL DOCUMENTATION
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F3EFE3] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm font-sans text-[#9D9B91]">
            Effective Date: October 21, 2026 · Jurisdiction: Jaipur, Rajasthan, India
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-sm sm:text-base font-sans leading-relaxed text-[#D2CEC4]">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F3EFE3] font-normal">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the website of Siyara Innovations (<span className="text-[#D9B45F]">https://www.siyaradigitals.com</span>) or engaging our agency for digital services, you agree to comply with and be bound by these Terms of Service. If you disagree with any portion of these terms, you must discontinue the use of our website immediately.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F3EFE3] font-normal">
              2. Scope of Services
            </h2>
            <p>
              Siyara Innovations provides professional digital solutions, including custom web application development, search engine optimization (SEO), social media marketing strategy, visual identity design, and digital consulting.
            </p>
            <p>
              Each client project is executed under a distinct, mutually agreed Statement of Work (SOW) or formal commercial agreement that specifies deliverables, technical milestones, review cycles, and payment schedules.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F3EFE3] font-normal">
              3. Intellectual Property Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#B8B5AB]">
              <li>
                <strong className="text-[#F3EFE3]">Client Deliverables:</strong> Upon receipt of full and final milestone payments, all bespoke code, custom graphic assets, brand guidelines, and copy crafted specifically for the client transfer to the client as defined in the project SOW.
              </li>
              <li>
                <strong className="text-[#F3EFE3]">Agency Proprietary Assets:</strong> Pre-existing software frameworks, starter components, optimization scripts, and internal workflow tools remain the exclusive intellectual property of Siyara Innovations.
              </li>
              <li>
                <strong className="text-[#F3EFE3]">Website Content:</strong> All branding, design layouts, copywriting, and visual assets published on <span className="text-[#D9B45F]">siyaradigitals.com</span> are copyrighted by Siyara Innovations and may not be reproduced without written consent.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F3EFE3] font-normal">
              4. Client Responsibilities
            </h2>
            <p>
              Clients are responsible for providing authentic brand collateral, licensed media, copy direction, and timely technical feedback. Siyara Innovations is not liable for project delivery delays resulting from withheld client feedback, unapproved assets, or unfulfilled third-party credential requests.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F3EFE3] font-normal">
              5. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Siyara Innovations shall not be liable for indirect, consequential, incidental, or special damages, including lost revenue, lost profits, or data loss arising from website downtime, search engine ranking volatility resulting from third-party algorithmic updates (e.g., Google core updates), or third-party infrastructure failures.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F3EFE3] font-normal">
              6. Communication & Inquiries
            </h2>
            <p>
              Official business communications are conducted exclusively through verified electronic channels: email at <span className="text-[#D9B45F]">{BUSINESS_CONFIG.email}</span> and WhatsApp at <span className="text-[#D9B45F]">{BUSINESS_CONFIG.whatsappFormatted}</span>. Siyara Innovations does not accept unsolicited telemarketing or inbound voice phone calls.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F3EFE3] font-normal">
              7. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms of Service and any contractual relationships formed shall be governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Jaipur, Rajasthan.
            </p>
          </section>

          <section className="space-y-4 border-t border-[#0B5E49]/30 pt-8">
            <h2 className="text-xl sm:text-2xl font-serif text-[#F3EFE3] font-normal">
              8. Contact Information
            </h2>
            <p>
              For legal notices, contract inquiries, or clarifications, please contact:
            </p>
            <div className="bg-[#0E1513] p-6 rounded-lg border border-[#0B5E49]/30 space-y-2">
              <p className="font-semibold text-[#F3EFE3]">{BUSINESS_CONFIG.name}</p>
              <p className="text-sm text-[#B8B5AB]">Location: {BUSINESS_CONFIG.location.displayName}, India</p>
              <p className="text-sm text-[#B8B5AB]">
                Email:{' '}
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-[#D9B45F] hover:underline">
                  {BUSINESS_CONFIG.email}
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
