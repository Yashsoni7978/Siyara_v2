'use client';

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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#070A09] text-[#F3EFE3] selection:bg-[#071E18] selection:text-[#D9B45F]">
      {/* 01 â€” HERO / WHY SIYARA EXISTS (DARK) */}
      <AboutHero />

      {/* CONNECTOR 01: DARK â†’ IVORY */}
      <SectionConnector fromDark={true} />

      {/* 02 â€” THE ORIGIN (IVORY) */}
      <OurStory />

      {/* CONNECTOR 02: IVORY â†’ DARK */}
      <SectionConnector fromDark={false} />

      {/* 03 â€” THE BELIEF / PHILOSOPHY (DARK) */}
      <Beliefs />

      {/* CONNECTOR 03: DARK â†’ IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 â€” PROOF & METRICS (IVORY) */}
      <Numbers />

      {/* CONNECTOR 04: IVORY â†’ DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 â€” METHODOLOGY (DARK) */}
      <Approach />

      {/* CONNECTOR 05: DARK -> IVORY */}
      <SectionConnector fromDark={true} />

      {/* 06 â€” ROOTED IN JAIPUR (IVORY) */}
      <Studio />

      {/* CONNECTOR 06: IVORY -> DARK */}
      <SectionConnector fromDark={false} />

      {/* 07 â€” FINAL PHILOSOPHY & CTA (DARK) */}
      <AboutCTA />
    </div>
  );
}
