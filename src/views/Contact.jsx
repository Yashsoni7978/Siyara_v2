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
    <div className="bg-[#070A09] text-[#F3EFE3] selection:bg-[#071E18] selection:text-[#D9B45F]">
      {/* 01 — HERO / INVITATION (DARK) */}
      <ContactHero />

      {/* CONNECTOR 01: DARK → IVORY */}
      <SectionConnector fromDark={true} />

      {/* 02 — PROJECT INTAKE (IVORY) */}
      <ContactIntake />

      {/* CONNECTOR 02: IVORY → DARK */}
      <SectionConnector fromDark={false} />

      {/* 03 — DIRECT PATHWAYS & CONVERSATION (DARK) */}
      <ContactDetails />

      {/* CONNECTOR 03: DARK → DARK */}
      <SectionConnector fromDark={true} />

      {/* 04 — FINAL CTA (DARK) */}
      <ContactCTA />
    </div>
  );
}
