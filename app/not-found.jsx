import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Compass, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found · Siyara Innovations',
  description: 'The requested page could not be found. Return to Siyara Innovations home or explore our digital architecture capabilities.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-[#070A09] text-[#F3EFE3] px-6 sm:px-8 overflow-hidden py-32">
      {/* Atmosphere Glow */}
      <div className="absolute inset-0 bg-emerald-atmosphere opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0C6B52]/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D9B45F]/30 bg-[#071E18]/60 text-[#D9B45F] text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-8">
          <Compass className="w-3.5 h-3.5" />
          <span>404 — PAGE NOT FOUND</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] text-[#F3EFE3] mb-6">
          LOST IN THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8C979] via-[#D9B45F] to-[#B38F26]">
            ARCHITECTURE.
          </span>
        </h1>

        {/* Subcopy */}
        <p className="font-sans text-sm sm:text-base text-[#9D9B91] font-light leading-relaxed max-w-md mx-auto mb-10">
          The page or system resource you are looking for has been moved, archived, or does not exist on this domain.
        </p>

        {/* Direct Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D9B45F] hover:bg-[#E8C979] text-[#101613] text-xs font-bold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-xl shadow-[#D9B45F]/15 hover:shadow-[#D9B45F]/30"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN HOME</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#D9B45F]/30 hover:border-[#D9B45F]/70 text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#071E18]/40"
          >
            <span>SERVICES</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#D9B45F]/30 hover:border-[#D9B45F]/70 text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#071E18]/40"
          >
            <span>INSIGHTS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#D9B45F]/30 hover:border-[#D9B45F]/70 text-[#F3EFE3] hover:text-[#D9B45F] text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 bg-[#071E18]/40"
          >
            <span>CONTACT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
