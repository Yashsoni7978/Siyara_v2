import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'SERVICES', href: '/services', id: 'services' },
    { name: 'ABOUT', href: '/about', id: 'about' },
    { name: 'INSIGHTS', href: '/blog', id: 'blog' },
    { name: 'CONTACT', href: '/contact', id: 'contact' },
  ];

  const handleLinkClick = (e, link) => {
    if (link.id === 'contact' || link.href === '#contact') {
      e.preventDefault();
      if (onNavigate) onNavigate('contact');
      window.history.pushState({}, '', '/contact');
      setMobileMenuOpen(false);
    } else if (link.id === 'services') {
      e.preventDefault();
      if (onNavigate) onNavigate('services');
      window.history.pushState({}, '', '/services');
      setMobileMenuOpen(false);
    } else if (link.id === 'about') {
      e.preventDefault();
      if (onNavigate) onNavigate('about');
      window.history.pushState({}, '', '/about');
      setMobileMenuOpen(false);
    } else if (link.id === 'blog' || link.id === 'insights' || link.href === '/blog') {
      e.preventDefault();
      if (onNavigate) onNavigate('blog');
      window.history.pushState({}, '', '/blog');
      setMobileMenuOpen(false);
    } else if (link.id === 'home') {
      e.preventDefault();
      if (onNavigate) onNavigate('home');
      window.history.pushState({}, '', '/');
      setMobileMenuOpen(false);
    } else {
      if ((currentPage === 'about' || currentPage === 'services' || currentPage === 'contact' || currentPage === 'blog') && onNavigate) {
        e.preventDefault();
        onNavigate('home');
        window.history.pushState({}, '', '/');
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080B0A]/90 backdrop-blur-md border-b border-[#D4AF37]/15 py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, { id: 'home' })}
          className="flex flex-col group focus:outline-none"
        >
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors">
              SIYARA
            </span>
            <span className="text-[#D9B45F] text-xs font-bold group-hover:rotate-45 transition-transform duration-300">
              ✦
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#9D9B91] font-medium -mt-1 uppercase">
            Digital Architecture Studio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            const isActive = link.id === currentPage;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`relative text-[11px] lg:text-[12px] font-sans font-medium tracking-[0.2em] uppercase transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[#F3EFE3] font-semibold'
                    : 'text-[#9D9B91] hover:text-[#D9B45F]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#18A982] shadow-[0_0_8px_#18A982]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, { href: '#contact' })}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D9B45F] bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-[11px] font-sans font-bold tracking-[0.16em] uppercase transition-all duration-300 group shadow-lg shadow-[#D9B45F]/15 hover:-translate-y-0.5"
          >
            <span>BOOK STRATEGY SESSION</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
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
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`font-serif text-3xl transition-colors ${
                  link.id === currentPage ? 'text-[#19A878]' : 'text-[#F3EFE4] hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pb-10">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, { href: '#contact' })}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#D4AF37] bg-[#E5C378] text-[#080B0A] font-bold tracking-[0.16em] uppercase text-xs rounded-full shadow-lg"
            >
              <span>BOOK STRATEGY SESSION</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
