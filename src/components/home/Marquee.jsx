import React from 'react';

export default function Marquee() {
  const items = [
    'RISHABH JEWELLERS',
    'BEYOND SPACES',
    'DR. NEHA SHARMA',
    'THE BREW CHAPTER',
    'LUXE HABITAT',
    'AURA RESIDENCES',
    'CRAFT COFFEE CO',
  ];

  // Repeat items to ensure seamless 100% loop
  const list = [...items, ...items, ...items, ...items];

  return (
    <div className="relative py-6 bg-[#070A09] border-y border-[#D9B45F]/15 overflow-hidden z-20">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#070A09] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#070A09] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-12 items-center">
        {list.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-12 whitespace-nowrap">
            <span className="font-sans text-[11px] sm:text-[12px] font-medium tracking-[0.26em] text-[#ECE7D8]/80 uppercase hover:text-[#D9B45F] transition-colors cursor-default">
              {item}
            </span>
            <span className="text-[#D9B45F] text-[10px] opacity-80">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
