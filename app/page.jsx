import Hero from '../src/components/home/Hero';
import Marquee from '../src/components/home/Marquee';
import SectionConnector from '../src/components/common/SectionConnector';
import WhatWeDo from '../src/components/home/WhatWeDo';
import WhySiyara from '../src/components/home/WhySiyara';
import ClientExperiences from '../src/components/home/ClientExperiences';
import Problem from '../src/components/home/Problem';
import Process from '../src/components/home/Process';
import Results from '../src/components/home/Results';
import SelectedWork from '../src/components/home/SelectedWork';
import Industries from '../src/components/home/Industries';
import FinalCTA from '../src/components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      {/* 01 HERO - 5-SLIDE SLIDER */}
      <Hero />

      {/* 02 MARQUEE */}
      <Marquee />

      {/* 03 WHAT WE DO - 6 LUXURY CARDS */}
      <WhatWeDo />

      {/* Connector 03: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 04 WHY SIYARA - EXPANDABLE PANELS */}
      <WhySiyara />

      {/* Connector 04: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 05 CLIENT EXPERIENCES */}
      <ClientExperiences />

      {/* Connector 05: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 06 THE PROBLEM - INTERACTIVE CHALLENGES */}
      <Problem />

      {/* Connector 06: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 07 HOW WE WORK */}
      <Process />

      {/* Connector 07: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 08 MEASURABLE STANDARDS */}
      <Results />

      {/* Connector 08: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 09 SELECTED PORTFOLIO CAROUSEL */}
      <SelectedWork />

      {/* 10 INDUSTRIES WE SERVE */}
      <Industries />

      {/* CONNECTOR: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 11 FINAL CTA */}
      <FinalCTA />
    </>
  );
}
