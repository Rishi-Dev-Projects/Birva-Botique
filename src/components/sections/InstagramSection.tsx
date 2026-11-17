'use client';

import Image from 'next/image';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import InstagramIcon from '@/components/icons/InstagramIcon';
import { BUSINESS_INFO, INSTAGRAM_HIGHLIGHTS } from '@/data/siteData';

export default function InstagramSection() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE0D2]">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-[#B59660]">
              <Sparkles className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
              Digital Journal
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#30251F] tracking-tight">
              Stay Connected With Birva
            </h2>
            <p className="text-sm sm:text-base text-[#817568] font-sans">
              Discover more of our jewellery collections, latest curations, and celebratory styling ideas on our official Instagram.
            </p>
          </div>

          <div>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#30251F] text-[#FCFAF6] hover:bg-[#B59660] text-xs font-sans uppercase tracking-widest font-medium transition-all duration-300 shadow-xs"
            >
              <InstagramIcon className="w-4 h-4 text-[#CDB384]" />
              <span>Follow {BUSINESS_INFO.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Instagram Grid (4 editorial posts) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_HIGHLIGHTS.map((item) => (
            <a
              key={item.id}
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-[2rem] p-2 bg-[#FCFAF6] border border-[#B59660]/25 shadow-xs hover:shadow-lg transition-all duration-500 hover:-translate-y-1 block"
            >
              <div className="relative aspect-square rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#211A16]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#211A16]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-[#FCFAF6]">
                  <div className="flex justify-end">
                    <span className="w-8 h-8 rounded-full bg-[#FCFAF6]/20 backdrop-blur-xs flex items-center justify-center text-[#FCFAF6]">
                      <InstagramIcon className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-medium text-[#CDB384]">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#FCFAF6]/90 line-clamp-3 mt-1 font-sans">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <span className="text-xs text-[#817568] tracking-wider uppercase font-sans">
            Tag <span className="text-[#30251F] font-semibold">{BUSINESS_INFO.instagramHandle}</span> to be featured in our style journal
          </span>
        </div>

      </div>
    </section>
  );
}
