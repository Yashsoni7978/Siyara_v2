'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <section className="relative py-16 md:py-20 bg-[#080B0A] overflow-hidden border-t border-[#D4AF37]/20">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-radial from-[#063C2D]/40 via-[#080B0A]/95 to-[#080B0A] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#19A878]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center border border-[#D4AF37]/25 bg-[#063C2D]/20 p-8 sm:p-12 lg:p-16 backdrop-blur-md relative">
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#D4AF37]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D4AF37]" />

          {/* Eyebrow Icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#080B0A] text-[#D4AF37] mb-6">
            <Mail className="w-5 h-5 stroke-[1.5]" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EFE4] mb-4 leading-tight">
            Stay ahead of the <span className="text-gold-gradient">digital curve.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="font-sans text-xs sm:text-sm text-[#CFC9BB]/80 font-light leading-relaxed max-w-xl mx-auto mb-8">
            Get practical insights on strategy, technology, marketing and growth delivered directly to your inbox.
          </p>

          {/* Form / Submitted Message */}
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#19A878]/50 bg-[#063C2D]/50 text-[#F3EFE4] font-sans text-xs font-semibold tracking-wider uppercase"
            >
              <CheckCircle2 className="w-4 h-4 text-[#19A878]" />
              <span>Thank you. You've been subscribed to Siyara Insights.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
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
          )}

          <p className="font-sans text-[10px] text-[#CFC9BB]/50 tracking-wider uppercase mt-4">
            No spam. Unsubscribe at any time.
          </p>

        </div>
      </div>
    </section>
  );
}
