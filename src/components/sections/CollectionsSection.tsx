'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { COLLECTIONS_DATA, getCollectionWhatsAppUrl } from '@/data/siteData';

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#EAE0D2]">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] font-sans font-medium text-[#B59660]">
              <Sparkles className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
              Curation &amp; Artistry
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#30251F] tracking-tight">
              Curated With Elegance
            </h2>
            <p className="text-sm sm:text-base text-[#817568] font-sans">
              Explore jewellery styles for your most special moments. Each design is a dialogue between
              heritage ornamentation and contemporary luxury.
            </p>
          </div>

          <div className="text-xs text-[#817568] max-w-xs">
            <p className="italic font-serif text-[#30251F]">
              &ldquo;Jewellery that complements your grace on every auspicious day.&rdquo;
            </p>
            <span className="text-[10px] uppercase tracking-wider block mt-1 text-[#B59660]">
              In-Boutique Consultations Available
            </span>
          </div>
        </div>

        {/* Asymmetrical Editorial Collection Layout (Varied Dimensions, No Cloned Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Item 1: Bridal & Occasion Wear (Featured Large 7 Cols) */}
          <div className="lg:col-span-7 group">
            <div className="p-2 sm:p-2.5 rounded-[2rem] bg-gradient-to-b from-[#B59660]/20 to-[#EAE0D2]/30 border border-[#B59660]/30 shadow-sm transition-all duration-500 hover:shadow-md">
              <div className="relative aspect-[16/11] sm:aspect-[16/10] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#211A16]">
                <Image
                  src={COLLECTIONS_DATA[1].image}
                  alt={COLLECTIONS_DATA[1].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211A16]/90 via-transparent to-black/20" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-sans font-semibold bg-[#FCFAF6]/90 text-[#30251F] backdrop-blur-xs">
                    Featured Collection
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-[#FCFAF6]">
                  <div className="space-y-1.5 max-w-md">
                    <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight">
                      {COLLECTIONS_DATA[1].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#EAE0D2]/90 line-clamp-2">
                      {COLLECTIONS_DATA[1].description}
                    </p>
                  </div>
                  <a
                    href={getCollectionWhatsAppUrl(COLLECTIONS_DATA[1].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B59660] text-[#FCFAF6] hover:bg-[#CDB384] text-xs font-sans uppercase tracking-wider transition-colors shadow-sm active:scale-95"
                  >
                    <span>Enquire</span>
                    <MessageCircle className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Necklace Sets (5 Cols Staggered) */}
          <div className="lg:col-span-5 group">
            <div className="p-2 sm:p-2.5 rounded-[2rem] bg-gradient-to-b from-[#B59660]/20 to-[#EAE0D2]/30 border border-[#B59660]/30 shadow-sm transition-all duration-500 hover:shadow-md h-full flex flex-col justify-between">
              <div className="relative aspect-[4/3] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#211A16]">
                <Image
                  src={COLLECTIONS_DATA[0].image}
                  alt={COLLECTIONS_DATA[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211A16]/80 via-transparent to-transparent" />
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-[#30251F] font-medium">
                    {COLLECTIONS_DATA[0].title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#B59660]">Heirloom</span>
                </div>
                <p className="text-xs text-[#817568] leading-relaxed">
                  {COLLECTIONS_DATA[0].description}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[#EAE0D2]">
                  <span className="text-[11px] text-[#817568] tracking-wider uppercase">Custom Styling</span>
                  <a
                    href={getCollectionWhatsAppUrl(COLLECTIONS_DATA[0].title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#B59660] hover:text-[#8E7243] font-medium transition-colors"
                  >
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: 3 Items (Earrings 4 cols, Traditional 4 cols, Statement 4 cols) */}
          {COLLECTIONS_DATA.slice(2).map((item) => (
            <div key={item.id} className="lg:col-span-4 group">
              <div className="p-2 sm:p-2.5 rounded-[2rem] bg-gradient-to-b from-[#B59660]/15 to-[#EAE0D2]/25 border border-[#B59660]/25 shadow-sm transition-all duration-500 hover:shadow-md flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] rounded-[calc(2rem-0.375rem)] overflow-hidden bg-[#211A16]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211A16]/75 via-transparent to-transparent" />
                </div>

                <div className="p-4 space-y-2.5">
                  <h3 className="font-serif text-xl text-[#30251F] font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#817568] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-[#EAE0D2]">
                    <span className="text-[10px] uppercase tracking-wider text-[#817568]">Bardoli Salon</span>
                    <a
                      href={getCollectionWhatsAppUrl(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#B59660] hover:text-[#8E7243] font-medium transition-colors"
                    >
                      <span>Enquire</span>
                      <MessageCircle className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* In-Boutique Viewing Notice */}
        <div className="p-6 rounded-2xl bg-[#FCFAF6] border border-[#B59660]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-[#30251F] font-medium">
              Looking for a custom design or bridal consultation?
            </h4>
            <p className="text-xs text-[#817568]">
              Visit Birva Boutique at Sunrise Complex, Bardoli, or send us your references on WhatsApp.
            </p>
          </div>
          <a
            href={getCollectionWhatsAppUrl('Custom Bridal Consultation')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-[#30251F] text-[#FCFAF6] hover:bg-[#B59660] text-xs uppercase tracking-widest font-sans font-medium transition-colors shadow-xs"
          >
            Request Consultation
          </a>
        </div>

      </div>
    </section>
  );
}
