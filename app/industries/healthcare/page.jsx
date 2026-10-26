import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, HeartPulse, CheckCircle2, ShieldCheck, Stethoscope, Clock, MapPin, ArrowRight, BookOpen } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Clinic & Doctor Web Design Jaipur',
  description: 'Custom Next.js clinic websites, appointment booking funnels, and local medical SEO for doctors and healthcare centers in Jaipur, Rajasthan.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries/healthcare',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries/healthcare',
    siteName: 'Siyara Innovations',
    title: 'Clinic & Doctor Web Design Jaipur | Siyara Innovations',
    description: 'Custom Next.js clinic websites, appointment booking funnels, and local medical SEO for doctors and healthcare centers in Jaipur, Rajasthan.',
    images: [
      {
        url: 'https://www.siyaradigitals.com/images/siyara_og_image.png',
        width: 1200,
        height: 630,
        alt: 'Healthcare & Clinic Website Design Jaipur · Siyara Innovations',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinic & Doctor Web Design Jaipur | Siyara Innovations',
    description: 'Custom Next.js clinic websites, appointment booking funnels, and local medical SEO for doctors and healthcare centers in Jaipur, Rajasthan.',
    images: ['https://www.siyaradigitals.com/images/siyara_og_image.png'],
  },
};

export default function HealthcareIndustryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
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
            'name': 'Industries',
            'item': 'https://www.siyaradigitals.com/services',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Healthcare & Clinics',
            'item': 'https://www.siyaradigitals.com/industries/healthcare',
          },
        ],
      },
      {
        '@type': 'Service',
        'name': 'Website Design & SEO for Doctors and Clinics in Jaipur',
        'serviceType': 'Healthcare Web Development',
        'provider': { '@id': 'https://www.siyaradigitals.com/#organization' },
        'areaServed': { '@type': 'City', 'name': 'Jaipur' },
        'description': 'Custom clinical web systems, patient appointment scheduling, Google Maps medical SEO, and doctor credibility profiles for healthcare practices in Jaipur.',
      },
    ],
  };

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    'Hello Siyara Innovations, I am interested in discussing a website and SEO solution for my clinic/medical practice in Jaipur.'
  )}`;

  const deliverables = [
    {
      title: 'Doctor Credibility & Profiles',
      desc: 'Showcase degrees, certifications, hospital affiliations, and procedural specializations with clean, high-trust typography.',
    },
    {
      title: 'Frictionless Appointment Funnel',
      desc: 'Direct WhatsApp and intake booking mechanisms that convert mobile patient searches into confirmed consultations.',
    },
    {
      title: 'Local Medical SEO & Google Maps',
      desc: 'Targeted local search optimization for "clinic near me" and specialized treatment searches across Mansarovar, Vaishali Nagar, and C-Scheme.',
    },
    {
      title: 'Treatment & Procedure Guides',
      desc: 'Structured procedure pages answering patient FAQs, recovery protocols, and consultation expectations.',
    },
    {
      title: 'Optimized Mobile Performance',
      desc: 'Minimal patient drop-off on mobile networks. Built on Next.js 15 for fast, responsive page transitions.',
    },
    {
      title: 'Patient Privacy & Ethical Compliance',
      desc: 'Strict adherence to medical advertising ethics with zero misleading claims, deceptive guarantees, or unauthorized data tracking.',
    },
  ];

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-24 sm:pt-28 md:pt-36 pb-20 sm:pb-24 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Atmospheric Glow */}
      <div className="absolute top-0 right-0 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[#0C6B52]/10 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="h-[1px] w-8 bg-[#D9B45F]" />
            <span className="text-[11px] sm:text-xs font-sans font-semibold tracking-[0.16em] sm:tracking-[0.24em] text-[#D9B45F] uppercase">
              HEALTHCARE & CLINICAL DIGITAL SYSTEMS · JAIPUR
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[1.12] sm:leading-[1.05] break-words mb-6 sm:mb-8">
            Website Design & SEO for <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
              Doctors & Clinics in Jaipur.
            </span>
          </h1>

          <p className="font-sans text-sm sm:text-lg text-[#9D9B91] font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
            Patients search with high urgency and need immediate reassurance. We build high-speed clinical portals, doctor credibility profiles, and local Google Maps search visibility that turn online searches into booked appointments.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-lg min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>DISCUSS YOUR CLINIC ON WHATSAPP</span>
            </a>

            <Link
              href="/work?industry=healthcare"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-[#D9B45F]/30 hover:border-[#D9B45F] text-[#F3EFE3] text-xs font-sans font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 min-h-[48px]"
            >
              <span>VIEW HEALTHCARE SHOWCASES</span>
              <ArrowRight className="w-4 h-4 text-[#D9B45F] shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY HEALTHCARE WEBSITES FAIL */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-3 uppercase">
              THE PATIENT EXPERIENCE GAP
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight break-words mb-4 sm:mb-6">
              Why Generic Website Templates Fail Medical Practices.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed mb-4 sm:mb-6 font-light">
              Most clinic websites in Jaipur are built on slow WordPress templates crowded with medical clip-art, complex contact forms, and broken mobile menus. When a patient in pain is looking for an emergency dentist or specialized physician, a 4-second loading delay causes them to hit the back button and call the next listing.
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#9D9B91] leading-relaxed font-light">
              Siyara Innovations replaces slow bloat with custom Next.js engineering: fast, responsive page loads, clear doctor credentials, transparent treatment overviews, and one-tap WhatsApp appointment booking.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Stethoscope className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Specialized Medical Credibility
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Clear presentation of surgical experience, patient care philosophy, and verified clinical qualifications.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Instant Appointment Routing
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Patients book or inquire via WhatsApp in one tap, directly connecting with your clinic reception desk.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Local Search Geo-Relevance
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Engineered for Google Maps 3-Pack rankings across your clinic's primary catchment neighborhoods in Jaipur.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9B45F] mb-3 sm:mb-4" />
              <h3 className="font-sans text-xs sm:text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Ethical & Compliant Code
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Safe, zero-spam architecture adhering strictly to healthcare advertising guidelines in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES MATRIX */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-2 sm:mb-3 uppercase">
            SPECIFICATION & ARCHITECTURE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-tight break-words">
            What Every Siyara Clinical Website Includes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-8 bg-[#071E18]/30 border border-[#D9B45F]/20 hover:border-[#D9B45F]/50 transition-colors rounded-xl"
            >
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#D9B45F] shrink-0" />
                <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-[#F3EFE3]">
                  {item.title}
                </h3>
              </div>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CLINICAL ARCHITECTURAL DEMONSTRATIONS */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 border-b border-[#D9B45F]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-2 uppercase">
              PROVEN CRAFT & DEMONSTRATIONS
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-[#F3EFE3] break-words">
              Clinical Web Architecture & Demonstration Prototypes.
            </h2>
          </div>
          <Link
            href="/work"
            className="text-xs font-sans tracking-widest uppercase text-[#D9B45F] hover:text-[#E8C979] flex items-center gap-2 self-start md:self-auto"
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#D9B45F] uppercase block mb-2">
                DENTAL SURGERY & ESTHETICS
              </span>
              <h3 className="font-serif text-xl text-[#F3EFE3] mb-3">
                Specialist Dental Portal Concept
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-6">
                Interactive prototype demonstrating multi-speciality dental clinic architecture: procedural guides, patient consultation booking flow, and local medical schema.
              </p>
            </div>
            <a
              href="https://smile-craft-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-semibold tracking-wider text-[#D9B45F] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Demonstration Prototype</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#D9B45F] uppercase block mb-2">
                CONSULTANT PHYSICIAN
              </span>
              <h3 className="font-serif text-xl text-[#F3EFE3] mb-3">
                Consultant Practice Portal Concept
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-6">
                Interactive prototype demonstrating solo physician practice architecture: verified credential trust presentation, OPD schedule displays, and patient orientation.
              </p>
            </div>
            <a
              href="https://dr-rajeshwari-sharma-medical-websit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-semibold tracking-wider text-[#D9B45F] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Demonstration Prototype</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-5 sm:p-6 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#D9B45F] uppercase block mb-2">
                MULTI-SPECIALITY HEALTHCARE
              </span>
              <h3 className="font-serif text-xl text-[#F3EFE3] mb-3">
                Multispecialty Hospital Portal Concept
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] font-light leading-relaxed mb-6">
                Interactive prototype demonstrating large hospital portal architecture: 16-department navigation, specialist consultant directory, and emergency orientation.
              </p>
            </div>
            <a
              href="https://varena-hospital.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans font-semibold tracking-wider text-[#D9B45F] hover:underline flex items-center gap-1.5"
            >
              <span>Explore Demonstration Prototype</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTEXTUAL INDUSTRY PLAYBOOK BANNER (TWO-WAY TOPICAL SILO) */}
      <section className="px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto my-12 sm:my-16">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B110F] via-[#071E18]/80 to-[#0B110F] border border-[#D9B45F]/30 hover:border-[#D9B45F]/60 transition-all shadow-xl group">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9B45F]/10 border border-[#D9B45F]/20 text-[#D9B45F] text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>EXECUTIVE INDUSTRY PLAYBOOK</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors leading-snug">
                Clinic & Hospital Website Design Jaipur: Patient Trust & Online Appointment Systems
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#9D9B91] mt-2 font-light leading-relaxed">
                Learn how private clinics, diagnostic centres, and specialty hospitals in Jaipur build HIPAA/NABH-aligned digital portals, doctor scheduling engines, and local medical SEO.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/insights/clinic-hospital-website-design-jaipur"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-lg shadow-[#D9B45F]/15 hover:scale-105 min-h-[44px] w-full md:w-auto"
              >
                <span>Read Full Playbook</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <HeartPulse className="w-9 h-9 sm:w-10 sm:h-10 text-[#D9B45F] mx-auto mb-5 sm:mb-6" />
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#F3EFE3] font-normal leading-tight break-words mb-4 sm:mb-6">
            Ready to Build a High-Trust Web Presence for Your Practice?
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-8 sm:mb-10">
            Reach out directly to discuss your clinic's specialty, target patient demographics, and local SEO goals in Jaipur.
          </p>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-xl min-h-[48px] w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>CONNECT WITH OUR STUDIO ON WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
}
