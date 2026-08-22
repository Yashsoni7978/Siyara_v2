import React from 'react';
import SectionConnector from '../components/common/SectionConnector.jsx';
import ServicesHero from '../components/services/ServicesHero.jsx';
import ServiceIndex from '../components/services/ServiceIndex.jsx';
import Ecosystem from '../components/services/Ecosystem.jsx';
import ServicesProcess from '../components/services/ServicesProcess.jsx';
import WhySiyara from '../components/services/WhySiyara.jsx';
import ServicesIndustries from '../components/services/ServicesIndustries.jsx';
import ServicesApplications from '../components/services/ServicesApplications.jsx';
import ServicesCTA from '../components/services/ServicesCTA.jsx';

export default function Services({ onNavigate }) {
  return (
    <div className="bg-[#070A09] text-[#F3EFE3] selection:bg-[#071E18] selection:text-[#D9B45F]">
      {/* 01 — HERO (DARK) */}
      <ServicesHero />

      {/* CONNECTOR 01: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 02 — THE SIYARA SYSTEM & EIGHT DISCIPLINES (IVORY) */}
      <ServiceIndex onNavigate={onNavigate} />

      {/* CONNECTOR 02: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 03 — ALL THE PIECES. ONE POWERFUL SYSTEM. (DARK) */}
      <Ecosystem />

      {/* CONNECTOR 03: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 — FROM STRATEGY TO EXECUTION (IVORY) */}
      <ServicesProcess />

      {/* CONNECTOR 04: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 — OUTCOMES OVER FEATURES (DARK) */}
      <WhySiyara />

      {/* CONNECTOR 05: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 06 — EIGHT DISCIPLINE SPECIALIST SYSTEM (IVORY) */}
      <ServicesIndustries />

      {/* CONNECTOR 06: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 07 — SPECIALIST APPLICATIONS & INDUSTRIES (DARK) */}
      <ServicesApplications />

      {/* CONNECTOR 07: DARK → DARK */}
      <SectionConnector fromDark={true} />

      {/* 08 — FINAL CTA (DARK) */}
      <ServicesCTA />
    </div>
  );
}

