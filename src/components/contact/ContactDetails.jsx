'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe } from 'lucide-react';

export default function ContactDetails() {
  const easeCustom = [0.16, 1, 0.3, 1];

  const pathways = [
    {
      id: '01',
      title: 'NEW PROJECTS',
      description: 'For brands looking to build, redesign or scale.',
      email: 'hello@siyarainnovations.com',
    },
    {
      id: '02',
      title: 'GENERAL ENQUIRIES',
      description: 'For questions, introductions and everything in between.',
      email: 'connect@siyarainnovations.com',
    },
    {
      id: '03',
      title: 'PARTNERSHIPS',
      description: 'For collaborations and strategic partnerships.',
      email: 'partners@siyarainnovations.com',
    },
  ];

  return (
    <section id="contact-direct" className="relative py-16 sm:py-20 bg-[#070A09] text-[#F3EFE3] overflow-hidden">
      {/* Deep Emerald Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A09] via-[#071E18]/40 to-[#070A09] opacity-90 pointer-events-none" />
      <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easeCustom }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-sans font-medium tracking-[0.24em] text-[#D9B45F]">
              03
            </span>
            <span className="h-[1px] w-8 bg-[#D9B45F]/50" />
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D9B45F] uppercase">
              DIRECT PATHWAYS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeCustom }}
            className="font-serif text-4xl sm:text-5xl lg:text-7xl text-[#F3EFE3] font-normal leading-[0.98] mb-6"
          >
            GOOD WORK <br />
            STARTS WITH A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26] font-normal">
              GOOD CONVERSATION.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeCustom }}
            className="font-sans text-base sm:text-lg text-[#9D9B91] font-light leading-relaxed max-w-xl"
          >
            Not every project needs the same answer. The first step is understanding where you are, where you want to go, and what needs to change.
          </motion.p>
        </div>

        {/* 3 Vertical Editorial Contact Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pathways.map((path, idx) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: easeCustom }}
              className="p-8 bg-[#071E18]/40 border border-[#D9B45F]/25 hover:border-[#D9B45F]/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-sans font-bold text-[#D9B45F] tracking-widest block mb-4">
                  {path.id}
                </span>

                <h3 className="font-sans text-sm font-bold tracking-[0.18em] uppercase text-[#F3EFE3] group-hover:text-[#D9B45F] transition-colors mb-3">
                  {path.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#9D9B91] font-light leading-relaxed mb-8">
                  {path.description}
                </p>
              </div>

              <a
                href={`mailto:${path.email}`}
                className="inline-flex items-center gap-2 font-sans text-xs text-[#D9B45F] hover:text-[#E8C979] transition-colors pt-4 border-t border-[#D9B45F]/15"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{path.email}</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Understated Location & Working Radius */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-[#D9B45F]/15 grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-sans text-[#9D9B91]"
        >
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#D9B45F] shrink-0 mt-0.5" />
            <div>
              <span className="font-sans text-[10px] tracking-widest text-[#D9B45F] uppercase block mb-1">
                BASED IN
              </span>
              <p className="text-[#F3EFE3] font-light">
                Jaipur, Rajasthan & Global Digital Studio Architecture.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe className="w-4 h-4 text-[#D9B45F] shrink-0 mt-0.5" />
            <div>
              <span className="font-sans text-[10px] tracking-widest text-[#D9B45F] uppercase block mb-1">
                WORKING WITH
              </span>
              <p className="text-[#F3EFE3] font-light">
                Ambitious businesses worldwide.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
