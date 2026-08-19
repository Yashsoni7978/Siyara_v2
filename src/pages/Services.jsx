import React from 'react';
import ServicesHero from '../components/services/ServicesHero.jsx';
import ServiceIndex from '../components/services/ServiceIndex.jsx';
import Ecosystem from '../components/services/Ecosystem.jsx';
import ServicesIndustries from '../components/services/ServicesIndustries.jsx';
import ServicesProcess from '../components/services/ServicesProcess.jsx';
import WhySiyara from '../components/services/WhySiyara.jsx';
import ServicesCTA from '../components/services/ServicesCTA.jsx';

export default function Services({ onNavigate }) {
  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#E5C378]">
      {/* SECTION 01 — HERO */}
      <ServicesHero />

      {/* SECTION 02 — WHAT WE DO (2-COLUMN EDITORIAL INDEX) */}
      <ServiceIndex onNavigate={onNavigate} />

      {/* SECTION 03 — THE SIYARA ECOSYSTEM */}
      <Ecosystem />

      {/* SECTION 04 — INDUSTRIES STRIP */}
      <ServicesIndustries />

      {/* SECTION 05 — OUR PROCESS */}
      <ServicesProcess />

      {/* SECTION 06 — WHY SIYARA */}
      <WhySiyara />

      {/* SECTION 07 — FINAL CTA */}
      <ServicesCTA />
    </div>
  );
}
