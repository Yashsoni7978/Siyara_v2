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
      {/* 01 â€” HERO (DARK) */}
      <ServicesHero />

      {/* CONNECTOR 01: DARK â†’ IVORY */}
      <SectionConnector fromDark={true} />

      {/* 02 â€” THE SIYARA SYSTEM & EIGHT DISCIPLINES (IVORY) */}
      <ServiceIndex onNavigate={onNavigate} />

      {/* CONNECTOR 02: IVORY â†’ DARK */}
      <SectionConnector fromDark={false} />

      {/* 03 â€” ALL THE PIECES. ONE POWERFUL SYSTEM. (DARK) */}
      <Ecosystem />

      {/* CONNECTOR 03: DARK â†’ IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 â€” FROM STRATEGY TO EXECUTION (IVORY) */}
      <ServicesProcess />

      {/* CONNECTOR 04: IVORY â†’ DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 â€” OUTCOMES OVER FEATURES (DARK) */}
      <WhySiyara />

      {/* CONNECTOR 05: DARK â†’ IVORY */}
      <SectionConnector fromDark={true} />

      {/* 06 â€” EIGHT DISCIPLINE SPECIALIST SYSTEM (IVORY) */}
      <ServicesIndustries />

      {/* CONNECTOR 06: IVORY â†’ DARK */}
      <SectionConnector fromDark={false} />

      {/* 07 â€” SPECIALIST APPLICATIONS & INDUSTRIES (DARK) */}
      <ServicesApplications />

      {/* CONNECTOR 07: DARK â†’ DARK */}
      <SectionConnector fromDark={true} />

      {/* 08 â€” FINAL CTA (DARK) */}
      <ServicesCTA />
    </div>
  );
}

