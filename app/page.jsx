import Hero from '../src/components/home/Hero';
import Marquee from '../src/components/home/Marquee';
import SectionConnector from '../src/components/common/SectionConnector';
import WhatWeDo from '../src/components/home/WhatWeDo';
import WhySiyara from '../src/components/home/WhySiyara';
import Philosophy from '../src/components/home/Philosophy';
import Problem from '../src/components/home/Problem';
import Process from '../src/components/home/Process';
import Results from '../src/components/home/Results';
import Industries from '../src/components/home/Industries';
import FinalCTA from '../src/components/home/FinalCTA';

export default function HomePage() {
  return (
    <main>
      {/* 01 HERO — DARK */}
      <Hero />

      {/* MARQUEE — DARK (Hero Sequence) */}
      <Marquee />

      {/* 03 WHAT WE DO — DARK */}
      <WhatWeDo />

      {/* Connector 03: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 WHY SIYARA — IVORY */}
      <WhySiyara />

      {/* Connector 04: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 OUR PHILOSOPHY — DARK */}
      <Philosophy />

      {/* Connector 05: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 06 THE PROBLEM — IVORY */}
      <Problem />

      {/* Connector 06: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 07 HOW WE WORK — DARK */}
      <Process />

      {/* Connector 07: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 08 PROOF & DELIVERABLES — IVORY */}
      <Results />

      {/* Connector 08: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 09 INDUSTRIES — DARK */}
      <Industries />

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 11 FINAL CTA — IVORY */}
      <FinalCTA />
    </main>
  );
}
