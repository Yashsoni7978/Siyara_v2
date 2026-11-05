import dynamic from 'next/dynamic';
import Hero from '../src/components/home/Hero';
import Marquee from '../src/components/home/Marquee';
import SectionConnector from '../src/components/common/SectionConnector';

const WhatWeDo = dynamic(() => import('../src/components/home/WhatWeDo'));
const WhySiyara = dynamic(() => import('../src/components/home/WhySiyara'));
const ClientExperiences = dynamic(() => import('../src/components/home/ClientExperiences'));
const Problem = dynamic(() => import('../src/components/home/Problem'));
const Process = dynamic(() => import('../src/components/home/Process'));
const Results = dynamic(() => import('../src/components/home/Results'));
const SelectedWork = dynamic(() => import('../src/components/home/SelectedWork'));
const Industries = dynamic(() => import('../src/components/home/Industries'));
const FinalCTA = dynamic(() => import('../src/components/home/FinalCTA'));

export default function HomePage() {
  return (
    <>
      {/* 01 HERO - 5-SLIDE SLIDER */}
      <Hero />

      {/* 02 MARQUEE */}
      <Marquee />

      {/* 03 WHAT WE DO - 6 LUXURY CARDS */}
      <div className="content-visibility-auto">
        <WhatWeDo />
      </div>

      {/* Connector 03: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 WHY SIYARA - EXPANDABLE PANELS */}
      <div className="content-visibility-auto">
        <WhySiyara />
      </div>

      {/* Connector 04: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 CLIENT EXPERIENCES */}
      <div className="content-visibility-auto">
        <ClientExperiences />
      </div>

      {/* Connector 05: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 06 THE PROBLEM - INTERACTIVE CHALLENGES */}
      <div className="content-visibility-auto">
        <Problem />
      </div>

      {/* Connector 06: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 07 HOW WE WORK */}
      <div className="content-visibility-auto">
        <Process />
      </div>

      {/* Connector 07: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 08 MEASURABLE STANDARDS */}
      <div className="content-visibility-auto">
        <Results />
      </div>

      {/* Connector 08: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 09 SELECTED PORTFOLIO CAROUSEL */}
      <div className="content-visibility-auto">
        <SelectedWork />
      </div>

      {/* 10 INDUSTRIES WE SERVE */}
      <div className="content-visibility-auto">
        <Industries />
      </div>

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 11 FINAL CTA */}
      <div className="content-visibility-auto">
        <FinalCTA />
      </div>
    </>
  );
}
