'use client';

import Image from 'next/image';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/siteData';

export default function FeaturedEditorialSection() {
  return (
    <section className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#211A16] text-[#FCFAF6] relative overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B59660]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#B59660]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Editorial Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.28em] font-sans font-medium text-[#CDB384] bg-[#30251F] border border-[#B59660]/30">
            <Sparkles className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
            Editorial Campaign &bull; Autumn / Festive
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#FCFAF6] leading-tight">
            Made to Be Remembered.
          </h2>
          <div className="w-20 h-[1.5px] bg-[#B59660] mx-auto opacity-70" />
          <p className="text-sm sm:text-base text-[#EAE0D2]/80 font-sans max-w-2xl mx-auto leading-relaxed">
            Every piece is an homage to timeless Indian aesthetics. From delicate everyday elegance
            to awe-inspiring bridal heirlooms, discover silhouettes created to endure across generations.
          </p>
        </div>

        {/* Asymmetrical High-Fashion Campaign Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual: Flat-lay Masterpiece (7 Cols) */}
          <div className="lg:col-span-7 group">
            <div className="p-2 sm:p-3 rounded-[2.5rem] bg-gradient-to-tr from-[#30251F] via-[#2A201A] to-[#B59660]/20 border border-[#B59660]/30 shadow-2xl">
              <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-[calc(2.5rem-0.75rem)] overflow-hidden">
                <Image
                  src="/images/editorial/jewellery-flatlay.jpg"
                  alt="Editorial still-life of Birva Boutique gold jewellery and raw silk textures"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/90 via-transparent to-black/20" />
                
                {/* Floating Micro-Caption */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-widest text-[#CDB384] font-medium block">
                      Plate 01 &mdash; The Art of Setting
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FCFAF6] font-normal">
                      Harmony in Gold &amp; Silk
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#EAE0D2]/70 uppercase tracking-widest hidden sm:inline">
                    Bardoli Atelier
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Editorial Column: Statement Focus & Poetic Narrative (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            {/* Statement Visual Card */}
            <div className="group p-2 rounded-[2rem] bg-gradient-to-b from-[#30251F] to-[#211A16] border border-[#B59660]/25">
              <div className="relative aspect-[4/3] rounded-[calc(2rem-0.5rem)] overflow-hidden">
                <Image
                  src="/images/collections/statement-cuff.jpg"
                  alt="Sculptural Indian gold kada cuff and ring"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17120F]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#CDB384] font-medium block">
                    Plate 02 &mdash; Sculptural Kada
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Poetic Text Block */}
            <div className="space-y-4 px-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FCFAF6]">
                &ldquo;Where tradition embraces grace.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-[#EAE0D2]/80 leading-relaxed font-sans font-light">
                Our philosophy honors the balance between the weight of heritage and the lightness of modern living.
                Each piece in our boutique is chosen to feel effortless, dignified, and uniquely yours.
              </p>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Hello Birva Boutique! I was captivated by your 'Made to Be Remembered' editorial pieces. Could you guide me on available designs?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] font-sans font-medium text-[#CDB384] hover:text-[#FCFAF6] transition-colors group"
                >
                  <span>Connect With Our Stylist</span>
                  <ArrowRight className="w-4 h-4 text-[#B59660] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
