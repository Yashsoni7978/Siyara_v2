import React from 'react';
import Link from 'next/link';
import SectionConnector from '../components/common/SectionConnector.jsx';
import ServicesHero from '../components/services/ServicesHero.jsx';
import ServiceIndex from '../components/services/ServiceIndex.jsx';
import ServicesProcess from '../components/services/ServicesProcess.jsx';
import WhySiyara from '../components/services/WhySiyara.jsx';
import ServicesIndustries from '../components/services/ServicesIndustries.jsx';
import ServicesApplications from '../components/services/ServicesApplications.jsx';
import ServicesCTA from '../components/services/ServicesCTA.jsx';

export default function Services({ onNavigate }) {
  return (
    <div className="bg-[#070A09] text-[#F3EFE3] selection:bg-[#071E18] selection:text-[#D9B45F]">
      {/* HERO (DARK) */}
      <ServicesHero />

      {/* CONNECTOR 01: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 01 - THE SIYARA SYSTEM & EIGHT DISCIPLINES (IVORY) */}
      <ServiceIndex onNavigate={onNavigate} />

      {/* CONNECTOR 02: IVORY → IVORY */}
      <SectionConnector fromDark={false} toDark={false} />

      {/* 02 - FROM STRATEGY TO EXECUTION (IVORY) */}
      <ServicesProcess />

      {/* CONNECTOR 03: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 03 - OUTCOMES OVER FEATURES (DARK) */}
      <WhySiyara />

      {/* CONNECTOR 04: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 - EIGHT DISCIPLINE SPECIALIST SYSTEM (IVORY) */}
      <ServicesIndustries />

      {/* CONNECTOR 05: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 - SPECIALIST APPLICATIONS & INDUSTRIES (DARK) */}
      <ServicesApplications />

      {/* MORE SPECIALIZED SERVICES */}
      <section className="py-12 bg-[#080B0A] border-t border-[#D9B45F]/15">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] text-[#D9B45F] uppercase block mb-3">
            MORE SPECIALIZED CAPABILITIES
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-sans text-[#9D9B91]">
            <span>E-Commerce</span>
            <span className="text-[#D9B45F]/30">·</span>
            <span>Mobile Apps</span>
            <span className="text-[#D9B45F]/30">·</span>
            <span>UI/UX Design</span>
            <span className="text-[#D9B45F]/30">·</span>
            <span>AI &amp; Automation</span>
            <span className="text-[#D9B45F]/30">·</span>
            <span>Growth &amp; CRO</span>
            <span className="text-[#D9B45F]/30">·</span>
            <span>Content &amp; Creative</span>
            <span className="text-[#D9B45F]/30">·</span>
            <span>CRM Systems</span>
            <span className="text-[#D9B45F]/30">·</span>
            <span>Performance Marketing</span>
          </div>
        </div>
      </section>

      {/* CONNECTOR 06: DARK -> DARK */}
      <SectionConnector fromDark={true} toDark={true} />

      {/* 06 - FINAL CTA (DARK) */}
      <ServicesCTA />
    </div>
  );
}
