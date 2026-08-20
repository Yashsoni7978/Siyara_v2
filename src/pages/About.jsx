import React, { useEffect } from 'react';
import SectionConnector from '../components/common/SectionConnector.jsx';
import AboutHero from '../components/about/AboutHero.jsx';
import OurStory from '../components/about/OurStory.jsx';
import Beliefs from '../components/about/Beliefs.jsx';
import Numbers from '../components/about/Numbers.jsx';
import Approach from '../components/about/Approach.jsx';
import Studio from '../components/about/Studio.jsx';
import AboutCTA from '../components/about/AboutCTA.jsx';

export default function About() {
  useEffect(() => {
    document.title = "About | SIYARA Digital Architecture Studio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] selection:bg-[#071E18] selection:text-[#D9B45F]">
      {/* 01 — HERO / WHY SIYARA EXISTS (DARK) */}
      <AboutHero />

      {/* CONNECTOR 01: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 02 — THE ORIGIN (IVORY) */}
      <OurStory />

      {/* CONNECTOR 02: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 03 — THE BELIEF / PHILOSOPHY (DARK) */}
      <Beliefs />

      {/* CONNECTOR 03: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 — PROOF & METRICS (IVORY) */}
      <Numbers />

      {/* CONNECTOR 04: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 — METHODOLOGY (DARK) */}
      <Approach />

      {/* CONNECTOR 05: DARK → DARK */}
      <SectionConnector fromDark={true} />

      {/* 06 — ROOTED IN JAIPUR (DARK) */}
      <Studio />

      {/* CONNECTOR 06: DARK → DARK */}
      <SectionConnector fromDark={true} />

      {/* 07 — FINAL PHILOSOPHY & CTA (DARK) */}
      <AboutCTA />
    </div>
  );
}
