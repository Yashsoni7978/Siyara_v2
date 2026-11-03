'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Globe, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { trackEvent, AnalyticsEvents } from '@/utils/analytics';

export default function ContactDetails() {
  const handleEmailClick = (label) => {
    trackEvent(AnalyticsEvents.CONTACT_EMAIL_CLICKED, { channel: label });
  };

  const handleWhatsAppClick = () => {
    trackEvent(AnalyticsEvents.CONTACT_WHATSAPP_CLICKED, { source: 'pathway_card' });
  };

  const pathways = [
    {
      id: '01',
      title: 'NEW PROJECT INQUIRIES',
      description: 'For brands looking to build high-performance Next.js web applications, e-commerce stores, or strategic brand architecture.',
      contactText: siteConfig.email,
      href: `mailto:${siteConfig.email}?subject=${encodeURIComponent('New Project Inquiry — Siyara Innovations')}`,
      icon: Mail,
      isExternal: false,
      onClick: () => handleEmailClick('new_project'),
    },
    {
      id: '02',
      title: 'WHATSAPP DIRECT',
      description: 'Connect directly with our studio directors on WhatsApp for real-time project scoping, brief discussions, and technical questions.',
      contactText: siteConfig.whatsappDisplay,
      href: siteConfig.whatsappUrl,
      icon: MessageCircle,
      isExternal: true,
      onClick: handleWhatsAppClick,
    },
    {
      id: '03',
      title: 'STUDIO COLLABORATIONS',
      description: 'For creative partnerships, enterprise consultations, specialized digital talent, and media inquiries.',
      contactText: siteConfig.email,
      href: `mailto:${siteConfig.email}?subject=${encodeURIComponent('Studio Collaboration Inquiry — Siyara Innovations')}`,
      icon: Globe,
      isExternal: false,
      onClick: () => handleEmailClick('collaboration'),
    },
  ];

  return (
    <section
      id="contact-channels"
      aria-label="Direct Contact Pathways"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#080B0A] text-[#F3EFE4] overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080B0A] via-[#05261C] to-[#041710] pointer-events-none" />
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(circle at center, rgba(25, 168, 120, 0.3) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Eyebrow & Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-16 mb-14 sm:mb-18">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="text-xs sm:text-sm font-roboto font-semibold tracking-[0.24em] text-[#D4AF37] uppercase">
                — VERIFIED STUDIO CHANNELS —
              </span>
            </div>

            <h2 className="font-roboto text-3xl sm:text-4xl lg:text-[46px] font-normal text-[#F3EFE4] leading-[1.12] tracking-tight">
              Direct Pathways to{' '}
              <span className="font-lora italic text-[#E5C378]">
                Our Studio.
              </span>
            </h2>
          </div>

          <div className="lg:border-l lg:border-white/15 lg:pl-8 max-w-md">
            <p className="font-lora text-xs sm:text-sm text-[#C5D2CE] leading-relaxed">
              We operate transparently with no call centers or third-party intermediaries. Every channel connects you directly with our studio directors.
            </p>
          </div>
        </div>

        {/* 3 Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-18">
          {pathways.map((path) => {
            const Icon = path.icon;

            return (
              <div
                key={path.id}
                className="p-7 sm:p-8 rounded-2xl bg-[#0B1410]/80 border border-white/10 hover:border-[#E5C378]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#E5C378] tracking-widest px-2.5 py-1 rounded-sm bg-white/5 border border-white/10">
                      {path.id}
                    </span>
                    <Icon className="w-4 h-4 text-[#19A878]" />
                  </div>

                  <h3 className="font-roboto text-base font-bold tracking-wider uppercase text-[#F3EFE4] group-hover:text-[#E5C378] transition-colors mb-3">
                    {path.title}
                  </h3>

                  <p className="font-lora text-xs sm:text-[13px] text-[#C5D2CE] font-light leading-relaxed mb-6">
                    {path.description}
                  </p>
                </div>

                <a
                  href={path.href}
                  onClick={path.onClick}
                  {...(path.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-flex items-center justify-between pt-4 border-t border-white/10 text-xs font-roboto font-bold tracking-wider text-[#E5C378] hover:text-[#F3EFE4] uppercase transition-colors"
                >
                  <span className="truncate">{path.contactText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Studio Location & Global Delivery Notice */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#063C2D]/30 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-roboto text-[#C5D2CE]">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold uppercase tracking-wider text-[#F3EFE4] block mb-1">
                Studio Location
              </span>
              <p className="font-lora font-light text-[#C5D2CE]/80 leading-relaxed">
                Jaipur, Rajasthan, India.<br />
                Available for in-person briefings by appointment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="w-4 h-4 text-[#19A878] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold uppercase tracking-wider text-[#F3EFE4] block mb-1">
                Global Delivery Radius
              </span>
              <p className="font-lora font-light text-[#C5D2CE]/80 leading-relaxed">
                Serving visionary brands across India, UAE, UK, and North America with seamless remote collaboration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold uppercase tracking-wider text-[#F3EFE4] block mb-1">
                Communication Policy
              </span>
              <p className="font-lora font-light text-[#C5D2CE]/80 leading-relaxed">
                WhatsApp click-to-chat and email only. No telemarketing, cold outreach, or third-party call centers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
