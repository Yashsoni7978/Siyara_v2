import React from 'react';
import AboutHero from '../components/about/AboutHero.jsx';
import OurStory from '../components/about/OurStory.jsx';
import Beliefs from '../components/about/Beliefs.jsx';
import Numbers from '../components/about/Numbers.jsx';
import Approach from '../components/about/Approach.jsx';
import Studio from '../components/about/Studio.jsx';
import AboutCTA from '../components/about/AboutCTA.jsx';

export default function About() {
  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#E5C378]">
      {/* 01 ABOUT HERO */}
      <AboutHero />

      {/* 02 OUR STORY */}
      <OurStory />

      {/* 03 OUR BELIEFS / PURPOSE */}
      <Beliefs />

      {/* 04 SIYARA IN NUMBERS */}
      <Numbers />

      {/* 05 OUR APPROACH */}
      <Approach />

      {/* 06 THE STUDIO / THE PEOPLE */}
      <Studio />

      {/* 07 FINAL CTA */}
      <AboutCTA />
    </div>
  );
}
