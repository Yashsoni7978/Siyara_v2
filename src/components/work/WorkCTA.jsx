'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function WorkCTA() {
  return (
    <section id="work-cta" className="relative py-20 sm:py-24 bg-[#070A09] text-[#F3EFE3] overflow-hidden border-t border-[#D9B45F]/15">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-80 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0C6B52]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Text */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
                05
              </span>
              <span className="h-[1px] w-8 bg-[#D9B45F]/40" />
              <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.26em] text-[#F3EFE3] uppercase">
                READY TO BUILD TOGETHER?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl text-[#F3EFE3] font-normal leading-tight"
            >
              Let's Build Your Next <br />
              <span className="italic text-gold-gradient font-serif">
                Success Story.
              </span>
            </motion.h2>
          </div>

          {/* Right Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D9B45F] hover:bg-[#E8C979] text-[#070A09] text-xs font-sans font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl group"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 text-[#070A09] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <a
              href="tel:9587269209"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#071E18] hover:bg-[#0C6B52] border border-[#D9B45F]/30 text-[#F3EFE3] text-xs font-sans font-semibold tracking-[0.2em] uppercase transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9B45F]" />
              <span>TALK TO OUR TEAM</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
