import React from 'react';
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

      {/* 01 — THE SIYARA SYSTEM & EIGHT DISCIPLINES (IVORY) */}
      <ServiceIndex onNavigate={onNavigate} />

      {/* CONNECTOR 02: IVORY → IVORY */}
      <SectionConnector fromDark={false} toDark={false} />

      {/* 02 — FROM STRATEGY TO EXECUTION (IVORY) */}
      <ServicesProcess />

      {/* CONNECTOR 03: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 03 — OUTCOMES OVER FEATURES (DARK) */}
      <WhySiyara />

      {/* CONNECTOR 04: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 — EIGHT DISCIPLINE SPECIALIST SYSTEM (IVORY) */}
      <ServicesIndustries />

      {/* CONNECTOR 05: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 — SPECIALIST APPLICATIONS & INDUSTRIES (DARK) */}
      <ServicesApplications />

      {/* CONNECTOR 06: DARK -> DARK */}
      <SectionConnector fromDark={true} toDark={true} />

      {/* 06 — FINAL CTA (DARK) */}
      <ServicesCTA />
    </div>
  );
}

