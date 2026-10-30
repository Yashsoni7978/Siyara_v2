'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Determine active route
  let currentPage = 'home';
  if (pathname === '/about' || pathname.startsWith('/about')) currentPage = 'about';
  else if (pathname === '/services' || pathname.startsWith('/services')) currentPage = 'services';
  else if (pathname === '/work' || pathname.startsWith('/work')) currentPage = 'work';
  else if (pathname === '/contact' || pathname.startsWith('/contact')) currentPage = 'contact';
  else if (pathname.startsWith('/insights') || pathname.startsWith('/blog')) currentPage = 'insights';

  const isScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPast = window.scrollY > 20;
      if (isPast !== isScrolledRef.current) {
        isScrolledRef.current = isPast;
        setScrolled(isPast);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/', id: 'home' },
    { name: 'SERVICES', href: '/services', id: 'services' },
    { name: 'ABOUT', href: '/about', id: 'about' },
    { name: 'OUR WORK', href: '/work', id: 'work' },
    { name: 'INSIGHTS', href: '/insights', id: 'insights' },
    { name: 'CONTACT', href: '/contact', id: 'contact' },
  ];

  const handleLinkClick = (e, link) => {
    setMobileMenuOpen(false);
    
    // Smooth scroll for hash links on home page
    if (link.href && link.href.startsWith('/#')) {
      const hash = link.href.split('#')[1];
      if (pathname === '/') {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Lock body scroll when mobile drawer is open & handle Escape key
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pointer-events-none">
      
      {/* ── DESKTOP FLOATING CAPSULE (lg and above) ──────────────────── */}
      <div className="hidden lg:block max-w-[1440px] mx-auto pointer-events-auto">
        <div
          className={`relative flex items-center justify-between px-6 xl:px-8 py-3 rounded-2xl transition-all duration-300 border ${
            scrolled
              ? 'bg-[#080B0A]/95 backdrop-blur-2xl border-[#19A878]/30 shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_24px_rgba(11,90,67,0.25)]'
              : 'bg-[#080B0A]/85 backdrop-blur-xl border-[#0B5A43]/40 shadow-[0_10px_35px_rgba(0,0,0,0.65),0_0_18px_rgba(6,60,45,0.15)]'
          }`}
        >
          {/* Subtle internal emerald ambient lighting */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#063C2D]/20 via-transparent to-[#063C2D]/20 pointer-events-none" />

          {/* LEFT: Official Siyara Logo & SIYARA INNOVATIONS Wordmark */}
          <Link
            href="/"
            onClick={(e) => handleLinkClick(e, { id: 'home', href: '/' })}
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878] rounded-md relative z-10"
            aria-label="Siyara Innovations Home"
          >
            {/* Official Gold S Emblem */}
            <div className="relative w-9 h-9 xl:w-10 xl:h-10 flex-shrink-0">
              <Image
                src="/siyara-emblem.webp"
                alt="Siyara Innovations Emblem"
                width={80}
                height={80}
                priority
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Thin Vertical Divider Line */}
            <span className="h-6 xl:h-7 w-[1px] bg-[#19A878]/30 mx-3 xl:mx-3.5" />

            {/* Elegant Wordmark */}
            <div className="flex flex-col justify-center">
              <span className="font-roboto text-lg xl:text-[19px] font-normal tracking-[0.18em] text-[#F3EFE4] group-hover:text-[#FFFFFF] transition-colors uppercase leading-none">
                SIYARA
              </span>
              <span className="font-sans text-[7.5px] xl:text-[8px] font-semibold tracking-[0.32em] text-[#A5B8AA] group-hover:text-[#ECE7D8] transition-colors uppercase leading-none mt-1">
                INNOVATIONS
              </span>
            </div>
          </Link>

          {/* CENTRE: Horizontal Navigation Links with Emerald Active Indicator */}
          <nav aria-label="Main Navigation" className="flex items-center gap-6 xl:gap-8 relative z-10">
            {navLinks.map((link) => {
              const isActive = link.id === currentPage;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`relative text-[11px] xl:text-[11.5px] font-sans font-medium tracking-[0.2em] uppercase transition-colors duration-200 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878] rounded-sm ${
                    isActive
                      ? 'text-[#FFFFFF] font-semibold'
                      : 'text-[#F3EFE4]/80 hover:text-[#FFFFFF]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-dot"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#19A878] shadow-[0_0_8px_rgba(25,168,120,0.9)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT: Outlined Deep-Emerald CTA Button */}
          <div className="relative z-10">
            <Link
              href="/contact"
              onClick={(e) => handleLinkClick(e, { id: 'contact', href: '/contact' })}
              className="inline-flex items-center justify-center gap-2 px-4.5 xl:px-5 py-2.5 rounded-lg border border-[#0B5A43] hover:border-[#19A878] bg-[#063C2D]/35 hover:bg-[#063C2D]/70 text-[#F3EFE4] hover:text-[#FFFFFF] text-[10.5px] xl:text-[11px] font-sans font-semibold tracking-[0.14em] uppercase transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878] group"
            >
              <span>BOOK STRATEGY SESSION</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] text-[#F3EFE4] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

        </div>
      </div>

      {/* ── MOBILE & TABLET FLOATING CAPSULE (< lg) ────────────────── */}
      <div className="lg:hidden max-w-full mx-auto pointer-events-auto">
        <div
          className={`relative flex items-center justify-between px-4 py-2.5 rounded-xl sm:rounded-2xl transition-all duration-300 border ${
            scrolled
              ? 'bg-[#080B0A]/95 backdrop-blur-2xl border-[#19A878]/30 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
              : 'bg-[#080B0A]/85 backdrop-blur-xl border-[#0B5A43]/40 shadow-[0_8px_30px_rgba(0,0,0,0.65)]'
          }`}
        >
          {/* Subtle internal emerald ambient lighting */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#063C2D]/20 via-transparent to-[#063C2D]/20 pointer-events-none" />

          {/* Left: Logo & Wordmark */}
          <Link
            href="/"
            onClick={(e) => handleLinkClick(e, { id: 'home', href: '/' })}
            className="flex items-center relative z-10 focus:outline-none"
            aria-label="Siyara Innovations Home"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
              <Image
                src="/siyara-emblem.webp"
                alt="Siyara Innovations Emblem"
                width={72}
                height={72}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <span className="h-5 sm:h-6 w-[1px] bg-[#19A878]/30 mx-2.5" />
            <div className="flex flex-col justify-center">
              <span className="font-roboto text-[15px] sm:text-[17px] font-normal tracking-[0.16em] text-[#F3EFE4] uppercase leading-none">
                SIYARA
              </span>
              <span className="font-sans text-[7px] sm:text-[7.5px] font-semibold tracking-[0.28em] text-[#A5B8AA] uppercase leading-none mt-0.5">
                INNOVATIONS
              </span>
            </div>
          </Link>

          {/* Right: Tablet CTA & Minimal Hamburger */}
          <div className="flex items-center gap-3 relative z-10">
            <Link
              href="/contact"
              onClick={(e) => handleLinkClick(e, { id: 'contact', href: '/contact' })}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#0B5A43] hover:border-[#19A878] bg-[#063C2D]/35 text-[#F3EFE4] text-[10px] font-sans font-semibold tracking-[0.14em] uppercase transition-colors"
            >
              <span>BOOK SESSION</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F3EFE4] hover:text-[#19A878] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878] rounded flex items-center justify-center min-w-[42px] min-h-[42px] transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#19A878]" />
              ) : (
                <div className="w-5 flex flex-col gap-1 items-end">
                  <span className="w-5 h-[1.5px] bg-[#F3EFE4] rounded-full" />
                  <span className="w-3.5 h-[1.5px] bg-[#F3EFE4] rounded-full" />
                  <span className="w-5 h-[1.5px] bg-[#F3EFE4] rounded-full" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE NAVIGATION DRAWER OVERLAY ───────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-2 pointer-events-auto rounded-2xl bg-[#080B0A]/95 backdrop-blur-2xl border border-[#0B5A43]/50 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(6,60,45,0.25)] p-6 sm:p-8 flex flex-col justify-between max-h-[calc(100vh-100px)] overflow-y-auto"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1 pt-1">
              {navLinks.map((link) => {
                const isActive = link.id === currentPage;

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`py-3 px-3 rounded-lg flex items-center justify-between transition-colors min-h-[48px] active:bg-[#063C2D]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19A878] ${
                      isActive
                        ? 'text-[#FFFFFF] bg-[#063C2D]/40 font-semibold'
                        : 'text-[#F3EFE4]/80 hover:text-[#FFFFFF]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#19A878] shadow-[0_0_8px_rgba(25,168,120,0.9)]" />
                      )}
                      <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
                        {link.name}
                      </span>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#19A878]' : 'text-[#A5B8AA]/50'}`} />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 mt-6 border-t border-[#0B5A43]/40">
              <Link
                href="/contact"
                onClick={(e) => handleLinkClick(e, { id: 'contact', href: '/contact' })}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#0B5A43] hover:border-[#19A878] bg-[#063C2D]/40 hover:bg-[#063C2D]/70 text-[#F3EFE4] text-xs font-sans font-semibold tracking-[0.16em] uppercase transition-all duration-300 min-h-[48px] shadow-sm"
              >
                <span>BOOK STRATEGY SESSION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
