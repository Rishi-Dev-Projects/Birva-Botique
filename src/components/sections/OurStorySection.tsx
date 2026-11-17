'use client';

import Image from 'next/image';
import { Sparkles, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/siteData';

export default function OurStorySection() {
  return (
    <section id="our-story" className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (5 cols) with Double-Bezel Framing */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="p-2 sm:p-3 rounded-[2.5rem] bg-gradient-to-tr from-[#B59660]/25 via-[#EAE0D2]/40 to-[#B59660]/15 border border-[#B59660]/30 shadow-xl">
              <div className="relative aspect-[4/5] rounded-[calc(2.5rem-0.75rem)] overflow-hidden bg-[#211A16]">
                <Image
                  src="/images/editorial/craftsmanship-artisan.jpg"
                  alt="Master craftsman hand-setting polki gemstone in gold filigree"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211A16]/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FCFAF6]/90 backdrop-blur-xs border border-[#B59660]/30">
                  <span className="text-[9px] uppercase tracking-widest font-sans font-semibold text-[#B59660] block">
                    Artistry &amp; Heritage
                  </span>
                  <p className="font-serif text-sm text-[#30251F] font-medium leading-snug">
                    Handcrafted finesse honoring Gujarat&apos;s centuries of jewellery traditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Geometry */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full border border-[#B59660]/20 pointer-events-none -z-10" />
          </div>

          {/* Text Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-[#817568] bg-[#FCFAF6] border border-[#B59660]/30">
                <Sparkles className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
                About Birva Boutique
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#30251F] tracking-tight">
                Where Every Detail{' '}
                <span className="italic font-light text-[#B59660] block sm:inline">
                  Tells a Story.
                </span>
              </h2>
              <div className="w-16 h-[1.5px] bg-[#B59660]" />
            </div>

            {/* Editorial Copy (Preserving verified business information strictly) */}
            <div className="space-y-4 text-base text-[#817568] font-sans font-normal leading-relaxed">
              <p>
                At Birva Boutique, jewellery is more than an accessory. It is an expression of individuality,
                beauty, and celebration. Discover thoughtfully presented jewellery styles for moments worth
                remembering.
              </p>
              <p>
                Nestled at Sunrise Complex on Mahatma Gandhi Road in Bardoli, our boutique was envisioned as a
                sanctuary of calm elegance. We invite clients to explore curated pieces at their own rhythm,
                guided by genuine warmth, attentive listening, and aesthetic discernment.
              </p>
            </div>

            {/* Value Signposts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#EAE0D2]">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FCFAF6] border border-[#B59660]/30 flex items-center justify-center text-[#B59660] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#30251F] font-medium">Devotion to Grace</h3>
                  <p className="text-xs text-[#817568] leading-relaxed">
                    Every design is selected to complement the wearer, enhancing your natural presence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#FCFAF6] border border-[#B59660]/30 flex items-center justify-center text-[#B59660] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#B59660]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#30251F] font-medium">Bardoli Destination</h3>
                  <p className="text-xs text-[#817568] leading-relaxed">
                    Conveniently located opposite Green Apple Hospital, welcoming clients across South Gujarat.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
