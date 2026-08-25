import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

export default function Location() {
  const easeCustom = [0.16, 1, 0.3, 1];

  return (
    <section className="relative py-24 sm:py-32 bg-[#080B0A] border-t border-[#D4AF37]/15 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Main Card Container (Matching Reference Composition) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCustom }}
          className="rounded-2xl border border-[#D4AF37]/25 bg-[#0A0D0C] overflow-hidden shadow-2xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-14">
            
            {/* LEFT COLUMN: Editorial Location Description */}
            <div className="lg:col-span-6 z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.22em] text-[#D4AF37] uppercase">
                  OUR LOCATION
                </span>
                <span className="h-[1px] w-8 bg-[#D4AF37]/50" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F3EFE4] font-normal leading-[1.08] mb-4">
                Jaipur, Rajasthan, <br />
                <span className="text-[#19A878] ">India</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#CFC9BB]/80 font-light leading-relaxed mb-8 max-w-md">
                We work with ambitious businesses across India and beyond, combining strategic vision with high-impact digital craftsmanship.
              </p>

              <a
                href="https://maps.google.com/?q=Jaipur+Rajasthan+India"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-[#D4AF37]/40 bg-[#063C2D]/30 hover:bg-[#D4AF37] text-[#F3EFE4] hover:text-[#080B0A] text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 group"
              >
                <span>VIEW ON GOOGLE MAPS</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:text-[#080B0A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* RIGHT COLUMN: Premium Deep Emerald Map Visual (Reference Direction) */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden border border-[#19A878]/30 bg-[#063C2D]/30 aspect-[16/10] flex items-center justify-center p-6 shadow-inner">
                
                {/* Emerald & Dark Base Background Atmosphere */}
                <div className="absolute inset-0 bg-radial from-[#063C2D] via-[#080B0A] to-[#080B0A] opacity-90" />

                {/* Stylized Vector Grid & Road/Network Lines */}
                <svg
                  className="absolute inset-0 w-full h-full stroke-[#19A878]/25 fill-none opacity-40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid Lines */}
                  <line x1="0" y1="20%" x2="100%" y2="20%" strokeWidth="0.5" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" strokeWidth="0.5" />
                  <line x1="0" y1="80%" x2="100%" y2="80%" strokeWidth="0.5" />
                  <line x1="30%" y1="0" x2="30%" y2="100%" strokeWidth="0.5" />
                  <line x1="70%" y1="0" x2="70%" y2="100%" strokeWidth="0.5" />
                  
                  {/* Curved Network Roads */}
                  <path d="M 0 100 Q 200 40, 500 200 T 1000 100" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 6" opacity="0.6" />
                  <path d="M 100 0 Q 350 250, 700 400" stroke="#19A878" strokeWidth="1.5" opacity="0.7" />
                </svg>

                {/* Glowing Gold Pin Drop Marker (Reference Style) */}
                <div className="relative z-10 flex flex-col items-center">
                  
                  {/* Outer Pulsing Gold Radar Rings */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-[#D4AF37]/60 animate-ping absolute" />
                    <div className="w-10 h-10 rounded-full border border-[#19A878]/50 animate-pulse absolute" />
                    
                    {/* Glowing Marker Pin */}
                    <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] bg-[#080B0A] flex items-center justify-center text-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.6)] z-20">
                      <MapPin className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                  </div>

                  {/* Marker Pin Base Shadow */}
                  <div className="w-8 h-2 rounded-full bg-[#D4AF37]/40 blur-sm mt-1" />

                  {/* Coordinates & Location Badge */}
                  <div className="mt-4 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#080B0A]/90 backdrop-blur-md text-[10px] font-sans tracking-widest text-[#E5C378] uppercase shadow-lg">
                    26.9124° N, 75.7873° E · JAIPUR HUB
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
