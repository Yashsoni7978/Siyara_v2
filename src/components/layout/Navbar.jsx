'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Determine currentPage based on active route
  let currentPage = 'home';
  if (pathname === '/about') currentPage = 'about';
  else if (pathname === '/services') currentPage = 'services';
  else if (pathname === '/work' || pathname.startsWith('/work')) currentPage = 'work';
  else if (pathname === '/contact') currentPage = 'contact';
  else if (pathname.startsWith('/insights') || pathname.startsWith('/blog')) currentPage = 'insights';

  const isScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPast = window.scrollY > 40;
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
    if (link.href.startsWith('/#')) {
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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-3 sm:py-3.5 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-[#080B0A]/95 backdrop-blur-md border-b border-[#D4AF37]/15 shadow-2xl'
          : 'bg-[#080B0A]/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b border-transparent'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => handleLinkClick(e, { id: 'home', href: '/' })}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
        >
          <Image 
            src="/logo.webp" 
            alt="Siyara Innovations Emblem" 
            width={120}
            height={48}
            priority
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            style={{ mixBlendMode: 'screen', filter: 'brightness(1.1)' }}
          />
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-xl font-normal tracking-[0.12em] sm:tracking-[0.15em] text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors uppercase whitespace-nowrap">
              SIYARA INNOVATIONS
            </span>
            <span className="text-[7.5px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.25em] text-[#9D9B91] font-medium uppercase whitespace-nowrap">
              Digital Architecture Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = link.id === currentPage;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative text-[11px] lg:text-[12px] font-sans font-medium tracking-[0.2em] uppercase transition-colors duration-250 py-1 ${
                  isActive
                    ? 'text-[#F3EFE3] font-semibold'
                    : 'text-[#9D9B91] hover:text-[#D9B45F]'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#18A982] shadow-[0_0_8px_#18A982]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            onClick={(e) => handleLinkClick(e, { id: 'contact', href: '/contact' })}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D9B45F] bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-[11px] font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 group shadow-lg shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>BOOK STRATEGY SESSION</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle with 44px+ touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F3EFE4] hover:text-[#D4AF37] p-2.5 -mr-1.5 focus:outline-none flex items-center justify-center min-w-[44px] min-h-[44px] active:scale-95 transition-transform"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-[#080B0A]/98 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 sm:p-8 border-t border-[#D4AF37]/20 overflow-y-auto">
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => {
              const isActive = link.id === currentPage;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`font-serif text-2xl sm:text-3xl py-3 px-2 flex items-center justify-between border-b border-white/5 transition-colors min-h-[48px] active:bg-white/5 ${
                    isActive ? 'text-[#18A982] font-medium' : 'text-[#F3EFE4] hover:text-[#D4AF37]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-[#18A982]' : 'text-[#D4AF37]/40'}`} />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 pb-4">
            <Link
              href="/contact"
              onClick={(e) => handleLinkClick(e, { id: 'contact', href: '/contact' })}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#D4AF37] bg-[#D9B45F] hover:bg-[#E8C979] text-[#080B0A] font-bold tracking-[0.16em] uppercase text-xs rounded-full shadow-lg min-h-[48px] active:scale-[0.99] transition-transform"
            >
              <span>BOOK STRATEGY SESSION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
