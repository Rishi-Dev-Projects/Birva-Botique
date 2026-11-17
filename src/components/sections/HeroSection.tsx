'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { MessageCircle, Compass, Star, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/siteData';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92dvh] flex items-center justify-center overflow-hidden py-12 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF]"
    >
      {/* Background Architectural Watermark Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-[#EAE0D2]/50" />
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B59660]/15 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10"
          >
            {/* Eyebrow Label */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] uppercase tracking-[0.24em] font-sans font-medium text-[#817568] bg-[#FCFAF6] border border-[#B59660]/30 shadow-xs">
                <Sparkles className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
                Haute Jewellery Boutique &bull; Bardoli
              </span>
              <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#817568] tracking-widest uppercase">
                <div className="flex text-[#B59660]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#B59660]" strokeWidth={1} />
                  ))}
                </div>
                <span className="font-sans font-medium text-[#30251F] ml-1">5.0</span>
                <span className="text-[#817568]">(Google Verified)</span>
              </div>
            </div>

            {/* Editorial Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[#30251F] tracking-tight">
                Elegance That Speaks{' '}
                <span className="italic font-light text-[#B59660] block sm:inline">
                  Without Words.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#817568] leading-relaxed max-w-[58ch] font-sans font-normal pt-2">
                Discover beautiful jewellery styles that bring together timeless charm,
                intricate details and the beauty of every celebration. Crafted with devotion
                at our Bardoli salon.
              </p>
            </div>

            {/* CTAs & Micro-Info */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Explore Collections Button */}
              <a
                href="#collections"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#30251F] text-[#FCFAF6] hover:bg-[#211A16] transition-all duration-300 shadow-[0_4px_20px_rgba(48,37,31,0.12)] active:scale-[0.98]"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium">
                  Explore Collections
                </span>
                <span className="w-7 h-7 rounded-full bg-[#FCFAF6]/10 flex items-center justify-center text-[#CDB384] group-hover:translate-x-0.5 transition-transform">
                  <Compass className="w-4 h-4" strokeWidth={1.5} />
                </span>
              </a>

              {/* WhatsApp Enquiry Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#FCFAF6] text-[#30251F] border border-[#B59660]/40 hover:border-[#B59660] hover:bg-[#FAF6F0] transition-all duration-300 shadow-xs active:scale-[0.98]"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-medium">
                  Enquire on WhatsApp
                </span>
                <span className="w-7 h-7 rounded-full bg-[#B59660]/15 flex items-center justify-center text-[#B59660] group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
                </span>
              </a>
            </div>

            {/* Editorial Heritage Footnote */}
            <div className="pt-6 border-t border-[#EAE0D2]/80 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-[#817568]">
              <div>
                <span className="block font-serif text-lg text-[#30251F] font-medium">Bardoli, Gujarat</span>
                <span className="text-[10px] uppercase tracking-widest text-[#817568]">Opp. Green Apple Hospital</span>
              </div>
              <div className="w-[1px] h-8 bg-[#B59660]/30 hidden sm:block" />
              <div>
                <span className="block font-serif text-lg text-[#30251F] font-medium">Bespoke Curation</span>
                <span className="text-[10px] uppercase tracking-widest text-[#817568]">Bridal &amp; Occasion Wear</span>
              </div>
            </div>
          </motion.div>

          {/* Asset Column (5 cols) with Double-Bezel Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Bezel (Doppelrand) */}
            <div className="relative p-2 sm:p-3 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#B59660]/25 via-[#EAE0D2]/40 to-[#B59660]/15 border border-[#B59660]/30 shadow-[0_24px_50px_-15px_rgba(48,37,31,0.15)]">
              {/* Inner Core Container */}
              <div className="relative aspect-[4/5] rounded-[calc(2rem-0.5rem)] sm:rounded-[calc(2.5rem-0.75rem)] overflow-hidden bg-[#211A16]">
                <Image
                  src="/images/hero/hero-necklace.jpg"
                  alt="Birva Boutique Masterpiece Filigree Necklace"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-center transform transition-transform duration-1000 hover:scale-105"
                />

                {/* Subtle Gradient Overlay for editorial depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211A16]/80 via-transparent to-black/10 pointer-events-none" />

                {/* Floating Corner Editorial Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#FCFAF6]/90 backdrop-blur-md border border-[#B59660]/30 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.24em] font-sans font-semibold text-[#B59660] block">
                      Curated Masterwork
                    </span>
                    <h3 className="font-serif text-base text-[#30251F] font-medium leading-tight">
                      Royal Heritage Choker
                    </h3>
                  </div>
                  <a
                    href="#collections"
                    className="shrink-0 px-3 py-1.5 rounded-full bg-[#30251F] text-[#FCFAF6] text-[10px] uppercase tracking-wider font-sans hover:bg-[#B59660] transition-colors"
                  >
                    View Detail
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Gold Accent Disc Behind Card */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border border-[#B59660]/20 pointer-events-none -z-10" />
            <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full border border-[#B59660]/15 pointer-events-none -z-10" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
