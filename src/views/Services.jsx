'use client';

import React, { useEffect } from 'react';
import SectionConnector from '../components/common/SectionConnector.jsx';
import ServicesHero from '../components/services/ServicesHero.jsx';
import ServicesDisciplines from '../components/services/ServicesDisciplines.jsx';
import ServicesGrid from '../components/services/ServicesGrid.jsx';
import ServicesProcess from '../components/services/ServicesProcess.jsx';
import ServicesImpact from '../components/services/ServicesImpact.jsx';
import ServicesCTA from '../components/services/ServicesCTA.jsx';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#D4AF37]">
      {/* 01. HERO (DARK EMERALD / OBSIDIAN) */}
      <ServicesHero />

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 02. EIGHT DISCIPLINES & FEATURED SERVICE (WARM IVORY) */}
      <ServicesDisciplines />

      {/* 03. EXPLORE ALL SERVICES (WARM IVORY) */}
      <ServicesGrid />

      {/* CONNECTOR: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 04. OUR PROCESS (DEEP EMERALD) */}
      <ServicesProcess />

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 05. IMPACT / REAL RESULTS (WARM IVORY) */}
      <ServicesImpact />

      {/* CONNECTOR: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 06. FINAL CTA: READY TO ELEVATE YOUR BRAND? (DEEP EMERALD) */}
      <ServicesCTA />
    </div>
  );
}
