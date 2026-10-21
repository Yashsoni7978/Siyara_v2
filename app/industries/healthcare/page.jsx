import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, HeartPulse, CheckCircle2, ShieldCheck, Stethoscope, Clock, MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: 'Website Design & SEO for Doctors & Clinics in Jaipur | Siyara Innovations',
  description: 'Custom Next.js website design, patient appointment funnels, and local SEO for doctors, dental clinics, and healthcare practices in Jaipur, Rajasthan.',
  alternates: {
    canonical: 'https://www.siyaradigitals.com/industries/healthcare',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.siyaradigitals.com/industries/healthcare',
    siteName: 'Siyara Innovations',
    title: 'Website Design & SEO for Doctors & Clinics in Jaipur | Siyara Innovations',
    description: 'Custom Next.js website design, patient appointment funnels, and local SEO for doctors, dental clinics, and healthcare practices in Jaipur, Rajasthan.',
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
    title: 'Website Design & SEO for Doctors & Clinics in Jaipur | Siyara Innovations',
    description: 'Custom Next.js website design, patient appointment funnels, and local SEO for doctors, dental clinics, and healthcare practices in Jaipur, Rajasthan.',
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
    <div className="bg-[#070A09] text-[#F3EFE3] min-h-screen pt-28 pb-20 selection:bg-[#071E18] selection:text-[#D9B45F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Atmospheric Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0C6B52]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 border-b border-[#D9B45F]/15">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#D9B45F]" />
            <span className="text-xs font-sans font-semibold tracking-[0.24em] text-[#D9B45F] uppercase">
              HEALTHCARE & CLINICAL DIGITAL SYSTEMS · JAIPUR
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F3EFE3] font-normal leading-[1.05] mb-8">
            Website Design & SEO for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
              Doctors & Clinics in Jaipur.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed max-w-2xl mb-10">
            Patients search with high urgency and need immediate reassurance. We build high-speed clinical portals, doctor credibility profiles, and local Google Maps search visibility that turn online searches into booked appointments.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>DISCUSS YOUR CLINIC ON WHATSAPP</span>
            </a>

            <Link
              href="/work?industry=healthcare"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#D9B45F]/30 hover:border-[#D9B45F] text-[#F3EFE3] text-xs font-sans font-semibold tracking-[0.2em] uppercase rounded-full transition-all duration-300"
            >
              <span>VIEW HEALTHCARE SHOWCASES</span>
              <ArrowRight className="w-4 h-4 text-[#D9B45F]" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY HEALTHCARE WEBSITES FAIL */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#D9B45F]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-3 uppercase">
              THE PATIENT EXPERIENCE GAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EFE3] font-normal leading-tight mb-6">
              Why Generic Website Templates Fail Medical Practices.
            </h2>
            <p className="font-sans text-sm text-[#9D9B91] leading-relaxed mb-6 font-light">
              Most clinic websites in Jaipur are built on slow WordPress templates crowded with medical clip-art, complex contact forms, and broken mobile menus. When a patient in pain is looking for an emergency dentist or specialized physician, a 4-second loading delay causes them to hit the back button and call the next listing.
            </p>
            <p className="font-sans text-sm text-[#9D9B91] leading-relaxed font-light">
              Siyara Innovations replaces slow bloat with custom Next.js engineering: fast, responsive page loads, clear doctor credentials, transparent treatment overviews, and one-tap WhatsApp appointment booking.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Stethoscope className="w-8 h-8 text-[#D9B45F] mb-4" />
              <h3 className="font-sans text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Specialized Medical Credibility
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Clear presentation of surgical experience, patient care philosophy, and verified clinical qualifications.
              </p>
            </div>

            <div className="p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <Clock className="w-8 h-8 text-[#D9B45F] mb-4" />
              <h3 className="font-sans text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Instant Appointment Routing
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Patients book or inquire via WhatsApp in one tap, directly connecting with your clinic reception desk.
              </p>
            </div>

            <div className="p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <MapPin className="w-8 h-8 text-[#D9B45F] mb-4" />
              <h3 className="font-sans text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
                Local Search Geo-Relevance
              </h3>
              <p className="font-sans text-xs text-[#9D9B91] leading-relaxed">
                Engineered for Google Maps 3-Pack rankings across your clinic's primary catchment neighborhoods in Jaipur.
              </p>
            </div>

            <div className="p-6 bg-[#071E18]/40 border border-[#D9B45F]/20 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-[#D9B45F] mb-4" />
              <h3 className="font-sans text-sm font-bold uppercase text-[#F3EFE3] mb-2 tracking-wider">
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
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#D9B45F]/15">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-3 uppercase">
            SPECIFICATION & ARCHITECTURE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F3EFE3] font-normal leading-tight">
            What Every Siyara Clinical Website Includes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#071E18]/30 border border-[#D9B45F]/20 hover:border-[#D9B45F]/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#D9B45F]" />
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
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 border-b border-[#D9B45F]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-sans font-bold tracking-widest text-[#D9B45F] block mb-2 uppercase">
              PROVEN CRAFT & DEMONSTRATIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EFE3]">
              Clinical Web Architecture & Demonstration Prototypes.
            </h2>
          </div>
          <Link
            href="/work"
            className="text-xs font-sans tracking-widest uppercase text-[#D9B45F] hover:text-[#E8C979] flex items-center gap-2"
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-lg flex flex-col justify-between">
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

          <div className="p-6 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-lg flex flex-col justify-between">
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

          <div className="p-6 bg-[#071E18]/40 border border-[#D9B45F]/25 rounded-lg flex flex-col justify-between">
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

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <HeartPulse className="w-10 h-10 text-[#D9B45F] mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F3EFE3] font-normal leading-tight mb-6">
            Ready to Build a High-Trust Web Presence for Your Practice?
          </h2>
          <p className="font-sans text-sm text-[#9D9B91] font-light leading-relaxed mb-10">
            Reach out directly to discuss your clinic's specialty, target patient demographics, and local SEO goals in Jaipur.
          </p>
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-full shadow-xl"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONNECT WITH OUR STUDIO ON WHATSAPP</span>
          </a>
        </div>
      </section>
    </div>
  );
}
