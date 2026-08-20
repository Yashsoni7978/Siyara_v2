import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import CursorSpotlight from './components/common/CursorSpotlight.jsx';
import SectionConnector from './components/common/SectionConnector.jsx';
import Hero from './components/home/Hero.jsx';
import Marquee from './components/home/Marquee.jsx';
import SelectedWork from './components/home/SelectedWork.jsx';
import WhatWeDo from './components/home/WhatWeDo.jsx';
import WhySiyara from './components/home/WhySiyara.jsx';
import Philosophy from './components/home/Philosophy.jsx';
import Problem from './components/home/Problem.jsx';
import Process from './components/home/Process.jsx';
import Results from './components/home/Results.jsx';
import Industries from './components/home/Industries.jsx';
import Insights from './components/home/Insights.jsx';
import FinalCTA from './components/home/FinalCTA.jsx';
import Footer from './components/home/Footer.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (window.location.pathname === '/about') return 'about';
    if (window.location.pathname === '/services') return 'services';
    if (window.location.pathname === '/contact') return 'contact';
    if (window.location.pathname === '/blog' || window.location.hash === '#insights') return 'blog';
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/about') {
        setCurrentPage('about');
      } else if (path === '/services') {
        setCurrentPage('services');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/blog' || window.location.hash === '#insights') {
        setCurrentPage('blog');
      } else {
        setCurrentPage('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (currentPage === 'blog') {
      document.title = 'Siyara Insights | Digital Strategy, Technology, Marketing & Growth';
    } else if (currentPage === 'about') {
      document.title = 'About Us — SIYARA INNOVATIONS';
    } else if (currentPage === 'services') {
      document.title = 'Our Services — SIYARA INNOVATIONS';
    } else if (currentPage === 'contact') {
      document.title = 'Contact Us — SIYARA INNOVATIONS';
    } else {
      document.title = 'SIYARA INNOVATIONS — Digital Agency | We Build Brands That Dominate';
    }
  }, [currentPage]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#070A09] text-[#F3EFE3] selection:bg-[#071E18] selection:text-[#D9B45F]">
      {/* Interactive Cursor Glow */}
      <CursorSpotlight />

      {/* Header Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'services' ? (
        <Services onNavigate={handleNavigate} />
      ) : currentPage === 'about' ? (
        <About onNavigate={handleNavigate} />
      ) : currentPage === 'contact' ? (
        <Contact onNavigate={handleNavigate} />
      ) : currentPage === 'blog' ? (
        <Blog onNavigate={handleNavigate} />
      ) : (
        <main>
          {/* 01 HERO — DARK */}
          <Hero />

          {/* MARQUEE — DARK (Hero Sequence) */}
          <Marquee />

          {/* Connector 01: DARK → IVORY */}
          <SectionConnector fromDark={true} />

          {/* 02 SELECTED WORK — IVORY */}
          <SelectedWork />

          {/* Connector 02: IVORY → DARK */}
          <SectionConnector fromDark={false} />

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

          {/* Connector 09: DARK → IVORY */}
          <SectionConnector fromDark={true} />

          {/* 10 INSIGHTS — IVORY */}
          <Insights onNavigate={handleNavigate} />

          {/* Connector 10: IVORY → DARK */}
          <SectionConnector fromDark={false} />

          {/* 11 FINAL CTA — DARK */}
          <FinalCTA />
        </main>
      )}

      {/* FOOTER — DARK */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
