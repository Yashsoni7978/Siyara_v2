import React from 'react';
import Link from 'next/link';
import { ArrowLeft, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../src/config/business';

export const metadata = {
  title: 'Web Development & SEO FAQ Jaipur',
  description: 'Answers to common questions regarding Next.js web development, local SEO timelines, pricing, and project onboarding with Siyara in Jaipur.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/faq',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/faq',
    siteName: 'Siyara Innovations',
    title: 'Web Development & SEO FAQ Jaipur | Siyara Innovations',
    description: 'Answers to common questions regarding Next.js web development, local SEO timelines, pricing, and project onboarding with Siyara in Jaipur.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Frequently Asked Questions · Siyara Innovations Jaipur',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & SEO FAQ Jaipur | Siyara Innovations',
    description: 'Answers to common questions regarding Next.js web development, local SEO timelines, pricing, and project onboarding with Siyara in Jaipur.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

const FAQS = [
  {
    q: 'What digital services does Siyara Innovations provide in Jaipur?',
    a: 'Siyara Innovations provides four core digital disciplines: custom web development (Next.js, React, Tailwind CSS), search engine optimization (local SEO, technical audits, content architecture), social media marketing (growth strategy, aesthetic content production), and strategic branding (visual identity, logos, brand guidelines).',
  },
  {
    q: 'Which industries and niches do you specialize in?',
    a: 'We specialize in tailored growth systems for four primary sectors in Jaipur and Rajasthan: Healthcare & Medical Clinics (doctors, dermatologists, dental centers), Luxury Real Estate & Builders, High-End Interior Designers & Architects, and Wedding & Corporate Event Management companies.',
  },
  {
    q: 'How does your project onboarding and discovery process work?',
    a: 'Every engagement begins with an intake review where we analyze your current digital presence, competitors, and target audience. Following a tailored proposal and scope alignment, we execute projects through design prototyping, modern Next.js development, rigorous SEO audits, and post-launch performance monitoring.',
  },
  {
    q: 'How long does a custom Next.js website take to build?',
    a: 'Standard custom business websites typically require 3 to 5 weeks from initial wireframes to production deployment. More complex multi-page web applications with custom booking funnels or deep industry resource hubs require 6 to 8 weeks depending on scope and asset delivery.',
  },
  {
    q: 'What is the expected timeline for seeing SEO results in Jaipur?',
    a: 'Local SEO results—such as Google Maps optimization and local intent keyword ranking improvements—frequently materialize within 60 to 90 days. Competitive organic search terms and comprehensive site authority development require continuous 4 to 6-month optimization cycles.',
  },
  {
    q: 'How can I contact Siyara Innovations to start a project?',
    a: 'You can reach us through our verified WhatsApp channel at +91 95872 69209 for fast project intake, submit the contact form on our website, or send an email to info@siyaradigitals.com. We operate as a dedicated digital studio and handle all client inquiries via chat and email.',
  },
];

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map((faq) => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a,
      },
    })),
  };

  const breadcrumbJsonLd = {
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
        'name': 'FAQ',
        'item': 'https://www.siyaradigitals.com/faq',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#070A09] text-[#F3EFE3] pt-32 pb-24 px-6 sm:px-8 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            <HelpCircle className="w-5 h-5 text-[#D9B45F]" />
            <span className="text-xs font-sans font-bold tracking-[0.24em] text-[#D9B45F] uppercase">
              CLIENT RESOURCE
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-normal text-[#F3EFE3] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base font-lora text-[#9D9B91]">
            Clear, transparent answers about working with our digital marketing and web engineering studio in Jaipur.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#0E1513] border border-[#0B5E49]/25 hover:border-[#D9B45F]/40 transition-colors p-6 sm:p-8 rounded-lg"
            >
              <h2 className="text-lg sm:text-xl font-roboto text-[#F3EFE3] font-normal mb-3">
                {faq.q}
              </h2>
              <p className="text-sm sm:text-base font-lora text-[#B8B5AB] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 bg-gradient-to-br from-[#0B5E49]/20 to-[#071E18]/40 border border-[#0B5E49]/40 p-8 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-roboto text-[#F3EFE3] mb-2">Have a question not listed here?</h3>
            <p className="text-sm text-[#9D9B91]">
              Reach out directly on WhatsApp or submit a brief inquiry. We respond within 24 business hours.
            </p>
          </div>
          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] font-sans font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" /> Message on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
