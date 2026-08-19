import React, { useEffect } from 'react';
import ContactHero from '../components/contact/ContactHero.jsx';
import ContactDetails from '../components/contact/ContactDetails.jsx';
import WhyContact from '../components/contact/WhyContact.jsx';
import Location from '../components/contact/Location.jsx';
import ContactCTA from '../components/contact/ContactCTA.jsx';

export default function Contact({ onNavigate }) {
  useEffect(() => {
    document.title = "Contact Us | Siyara Innovations — Digital Agency";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#080B0A] text-[#F3EFE4] selection:bg-[#063C2D] selection:text-[#E5C378]">
      {/* SECTION 01 — HERO */}
      <ContactHero />

      {/* SECTION 02 — CONTACT DETAILS & INQUIRY FORM */}
      <ContactDetails />

      {/* SECTION 03 — WHY WORK WITH SIYARA */}
      <WhyContact />

      {/* SECTION 04 — OUR LOCATION */}
      <Location />

      {/* SECTION 05 — FINAL CTA */}
      <ContactCTA />
    </div>
  );
}
