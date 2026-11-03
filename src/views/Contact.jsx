'use client';

import React, { useEffect } from 'react';
import SectionConnector from '../components/common/SectionConnector.jsx';
import ContactHero from '../components/contact/ContactHero.jsx';
import ContactIntake from '../components/contact/ContactIntake.jsx';
import ContactDetails from '../components/contact/ContactDetails.jsx';
import ContactCTA from '../components/contact/ContactCTA.jsx';

export default function Contact({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#D4AF37]">
      {/* 01 — HERO / INVITATION (DARK OBSIDIAN / EMERALD) */}
      <ContactHero />

      {/* CONNECTOR 01: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 02 — PROJECT INTAKE & INQUIRY FORM (WARM IVORY) */}
      <ContactIntake />

      {/* CONNECTOR 02: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 03 — VERIFIED DIRECT CHANNELS (DARK EMERALD / OBSIDIAN) */}
      <ContactDetails />

      {/* CONNECTOR 03: DARK -> DARK */}
      <SectionConnector fromDark={true} toDark={true} />

      {/* 04 — CLOSING CONVERSATION CTA (DARK OBSIDIAN) */}
      <ContactCTA />
    </div>
  );
}
