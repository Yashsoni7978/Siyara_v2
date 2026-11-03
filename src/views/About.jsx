'use client';

import React, { useEffect } from 'react';
import SectionConnector from '../components/common/SectionConnector.jsx';
import AboutHero from '../components/about/AboutHero.jsx';
import OurStory from '../components/about/OurStory.jsx';
import MissionVision from '../components/about/MissionVision.jsx';
import WhySiyara from '../components/about/WhySiyara.jsx';
import Journey from '../components/about/Journey.jsx';
import Values from '../components/about/Values.jsx';
import WhatWeBringTogether from '../components/about/WhatWeBringTogether.jsx';
import WhoWeWorkWith from '../components/about/WhoWeWorkWith.jsx';
import Process from '../components/about/Process.jsx';
import SelectedWork from '../components/about/SelectedWork.jsx';
import FAQ from '../components/about/FAQ.jsx';
import AboutCTA from '../components/about/AboutCTA.jsx';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#D4AF37]">
      {/* 01. HERO — ABOUT SIYARA (DARK EMERALD) */}
      <AboutHero />

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 02. OUR STORY (WARM IVORY) */}
      <OurStory />

      {/* CONNECTOR: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 03. MISSION, VISION & PURPOSE (DEEP EMERALD) */}
      <MissionVision />

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04. WHAT MAKES SIYARA DIFFERENT (WARM IVORY — 4 Clear Differentiators) */}
      <WhySiyara />

      {/* 05. OUR JOURNEY (WARM IVORY — 5-Stage Evolution) */}
      <Journey />

      {/* 06. OUR VALUES (WARM IVORY — Operational Principles) */}
      <Values />

      {/* 07. WHAT WE BRING TOGETHER (WARM IVORY — 6 Connected Disciplines Diagram) */}
      <WhatWeBringTogether />

      {/* CONNECTOR: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 08. INDUSTRIES WE CREATE FOR (DEEP EMERALD — Interactive Industry Showcase) */}
      <WhoWeWorkWith />

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 09. OUR WORKING PROCESS (WARM IVORY — 5-Stage Client Collaboration) */}
      <Process />

      {/* 10. SELECTED WORK (WARM IVORY — Genuine Siyara Case Studies) */}
      <SelectedWork />

      {/* 11. FREQUENTLY ASKED QUESTIONS (WARM IVORY — Interactive Accordion) */}
      <FAQ />

      {/* CONNECTOR: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 12. FINAL CTA: LET'S BUILD TOGETHER (DEEP EMERALD) */}
      <AboutCTA />
    </div>
  );
}
