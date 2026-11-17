'use client';

import { motion } from 'motion/react';
import { Sparkles, Gem, Compass } from 'lucide-react';

export default function BrandIntroSection() {
  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#FCFAF6] border-y border-[#EAE0D2]/70 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        {/* Eyebrow Pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-[#817568] bg-[#F8F5EF] border border-[#B59660]/30">
            <Sparkles className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
            The Boutique Philosophy
          </span>
        </div>

        {/* Editorial Heading */}
        <div className="space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#30251F] tracking-tight">
            A World of Beauty in Every Detail.
          </h2>
          <div className="w-16 h-[1.5px] bg-[#B59660] mx-auto" />
          <p className="text-base sm:text-lg text-[#817568] leading-relaxed font-sans font-normal">
            At Birva Boutique, jewellery is more than an accessory &mdash; it is a profound celebration
            of individuality, cultural pride, and life&apos;s most memorable milestones. Located in the heart
            of Bardoli, we offer an intimate boutique ambiance where traditional aesthetics harmonize with
            contemporary elegance.
          </p>
        </div>

        {/* Three Editorial Pillar Accents (No generic card boxes - clean typographic columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#EAE0D2]/80">
          <div className="space-y-3 px-4">
            <div className="w-10 h-10 rounded-full mx-auto bg-[#F8F5EF] border border-[#B59660]/30 flex items-center justify-center text-[#B59660]">
              <Sparkles className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-[#30251F] font-medium">Bespoke Aesthetics</h3>
            <p className="text-xs text-[#817568] leading-relaxed">
              Curated styles reflecting time-honored Indian motifs, delicate filigree, and distinctive silhouettes.
            </p>
          </div>

          <div className="space-y-3 px-4 border-t md:border-t-0 md:border-x border-[#EAE0D2]/80 pt-6 md:pt-0">
            <div className="w-10 h-10 rounded-full mx-auto bg-[#F8F5EF] border border-[#B59660]/30 flex items-center justify-center text-[#B59660]">
              <Gem className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-[#30251F] font-medium">Bridal Splendor</h3>
            <p className="text-xs text-[#817568] leading-relaxed">
              Grand jewelry ensembles composed specifically for wedding functions, sangeet celebrations, and festive gatherings.
            </p>
          </div>

          <div className="space-y-3 px-4 border-t md:border-t-0 border-[#EAE0D2]/80 pt-6 md:pt-0">
            <div className="w-10 h-10 rounded-full mx-auto bg-[#F8F5EF] border border-[#B59660]/30 flex items-center justify-center text-[#B59660]">
              <Compass className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-[#30251F] font-medium">Personal Styling</h3>
            <p className="text-xs text-[#817568] leading-relaxed">
              Dedicated in-boutique consultations in Bardoli to assist you in selecting the perfect piece for your attire.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
