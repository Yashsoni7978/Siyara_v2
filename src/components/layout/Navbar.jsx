'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
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
  else if (pathname === '/contact') currentPage = 'contact';
  else if (pathname.startsWith('/blog')) currentPage = 'blog';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/', id: 'home' },
    { name: 'SERVICES', href: '/services', id: 'services' },
    { name: 'ABOUT', href: '/about', id: 'about' },
    { name: 'INSIGHTS', href: '/blog', id: 'blog' },
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

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B0A]/90 backdrop-blur-md border-b border-[#D4AF37]/15 py-3 shadow-2xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={(e) => handleLinkClick(e, { id: 'home', href: '/' })}
          className="flex items-center gap-3 group focus:outline-none -ml-2 sm:-ml-6"
        >
          <img 
            src="/logo.png" 
            alt="Siyara Innovations Emblem" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            style={{ mixBlendMode: 'screen', filter: 'brightness(1.1)' }}
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.15em] text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors uppercase">
              SIYARA INNOVATIONS
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-[#9D9B91] font-medium mt-0.5 uppercase">
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

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F3EFE4] hover:text-[#D4AF37] p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[70px] bg-[#080B0A]/95 backdrop-blur-xl z-40 flex flex-col justify-between p-8 border-t border-[#D4AF37]/15">
          <div className="flex flex-col gap-6 pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`font-serif text-3xl transition-colors ${
                  link.id === currentPage ? 'text-[#19A878]' : 'text-[#F3EFE4] hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pb-10">
            <Link
              href="/contact"
              onClick={(e) => handleLinkClick(e, { id: 'contact', href: '/contact' })}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#D4AF37] bg-[#E5C378] text-[#080B0A] font-bold tracking-[0.16em] uppercase text-xs rounded-full shadow-lg"
            >
              <span>BOOK STRATEGY SESSION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
