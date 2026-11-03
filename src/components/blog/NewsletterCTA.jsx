'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, MessageSquare, Linkedin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#080B0A] overflow-hidden border-t border-[#D4AF37]/20">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-radial from-[#063C2D]/40 via-[#080B0A]/95 to-[#080B0A] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-[#19A878]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center border border-[#D4AF37]/25 bg-[#063C2D]/20 p-8 sm:p-12 lg:p-16 backdrop-blur-md relative rounded-2xl sm:rounded-none">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

          {/* Eyebrow Icon & Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#D4AF37]/35 bg-[#080B0A] text-[#D4AF37] font-sans text-[10px] tracking-widest uppercase rounded-full mb-6">
            <Mail className="w-3.5 h-3.5 text-[#19A878]" />
            <span>EDITORIAL PERSPECTIVES</span>
          </div>

          {/* Main Heading */}
          <h2 className="font-roboto text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EFE4] mb-4 leading-tight">
            Stay ahead of the <span className="text-gold-gradient">digital curve.</span>
          </h2>

          {/* Approved Subtitle Copy */}
          <p className="font-lora text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed max-w-xl mx-auto mb-8">
            Practical perspectives on brand strategy, web development, SEO, automation and business growth. No fluff, no spam.
          </p>

          {/* Honest Subscription Intake & Follow Alternatives */}
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 border border-[#19A878]/50 bg-[#063C2D]/40 text-[#F3EFE4] max-w-lg mx-auto rounded-xl"
            >
              <div className="flex items-center justify-center gap-2 mb-2 text-[#19A878] font-sans text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Inquiry Received</span>
              </div>
              <p className="font-lora text-xs text-[#CFC9BB]/90 leading-relaxed font-light mb-5">
                Our curated newsletter is launching soon. In the meantime, connect directly with our studio team on WhatsApp or follow our publication on LinkedIn.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href="https://wa.me/918000923769?text=Hello%20Siyara%20team,%20I'd%20like%20to%20receive%20your%20digital%20growth%20insights."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#19A878] text-[#080B0A] font-sans text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-[#19A878]/90 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Updates</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/siyaradigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#D4AF37]/50 bg-[#080B0A] text-[#D4AF37] font-sans text-xs font-semibold tracking-wider uppercase rounded-full hover:border-[#D4AF37] hover:text-[#F3EFE4] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6">
                <input 
                  type="email"
                  required
                  aria-label="Email address for insights subscription"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="w-full bg-[#080B0A] border border-[#D4AF37]/30 focus:border-[#D4AF37] text-[#F3EFE4] placeholder-[#CFC9BB]/50 text-xs font-sans px-4 py-3.5 outline-none transition-all duration-300 rounded-full"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#D4AF37] bg-[#D4AF37] hover:bg-[#E5C378] text-[#080B0A] font-semibold text-xs tracking-[0.16em] uppercase transition-all duration-300 shadow-lg rounded-full"
                >
                  <span>SUBSCRIBE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Direct Alternative Follow Channels */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-sans text-[#CFC9BB]/70">
                <span className="text-[11px] uppercase tracking-wider text-[#CFC9BB]/50">Or connect via:</span>
                <a
                  href="https://wa.me/918000923769?text=Hello%20Siyara%20team,%20I'd%20like%20to%20receive%20your%20digital%20growth%20insights."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#19A878] hover:text-[#F3EFE4] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Studio</span>
                </a>
                <span className="text-[#D4AF37]/40">•</span>
                <a
                  href="https://www.linkedin.com/company/siyaradigital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D4AF37] hover:text-[#F3EFE4] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn Publication</span>
                </a>
              </div>
            </div>
          )}

          <p className="font-lora text-[10px] text-[#CFC9BB]/50 tracking-wider uppercase mt-6">
            Curated dispatches launching soon. Zero spam. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
}
