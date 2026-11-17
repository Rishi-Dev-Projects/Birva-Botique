'use client';

import Image from 'next/image';
import { MapPin, Phone, MessageCircle, Navigation, Star, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '@/data/siteData';

export default function VisitBoutiqueSection() {
  return (
    <section id="visit-us" className="py-24 lg:py-36 px-4 sm:px-6 lg:px-8 bg-[#FCFAF6] border-t border-[#EAE0D2]/70 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-[#817568] bg-[#F8F5EF] border border-[#B59660]/30">
            <Sparkles className="w-3 h-3 text-[#B59660]" strokeWidth={1.5} />
            Boutique Salon &bull; Bardoli
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#30251F] tracking-tight">
            Visit Our Boutique
          </h2>
          <div className="w-16 h-[1.5px] bg-[#B59660] mx-auto" />
          <p className="text-sm sm:text-base text-[#817568] font-sans">
            We welcome you to experience our jewellery collections in person. Immerse yourself in an intimate,
            luxurious setting where our stylists assist you in finding or customising your signature look.
          </p>
        </div>

        {/* 2-Column Split: Boutique Details & Interactive Map / Salon Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Business Details (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-[2.5rem] bg-[#F8F5EF] border border-[#B59660]/30 shadow-md flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Rating Pill */}
              <div className="flex items-center gap-2.5 pb-4 border-b border-[#EAE0D2]">
                <div className="flex text-[#B59660]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B59660]" strokeWidth={1} />
                  ))}
                </div>
                <span className="text-xs font-sans font-semibold text-[#30251F]">
                  5.0 Rating
                </span>
                <span className="text-xs text-[#817568]">(2 Google Reviews)</span>
              </div>

              {/* Address */}
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B59660] font-sans font-semibold block">
                  Location &amp; Address
                </span>
                <div className="flex items-start gap-3 text-sm text-[#30251F] font-sans">
                  <MapPin className="w-5 h-5 text-[#B59660] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="space-y-1">
                    <p className="font-serif text-xl font-medium text-[#30251F]">
                      Birva Boutique
                    </p>
                    <p className="text-[#817568] leading-relaxed">
                      Sunrise Complex, 4, Mahatma Gandhi Road,<br />
                      Opposite Green Apple Hospital, Ramnagar,<br />
                      Bardoli, Gujarat 394601, India.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Phone */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B59660] font-sans font-semibold block">
                  Direct Inquiries &amp; Appointments
                </span>
                <div className="flex items-center gap-3 text-sm text-[#30251F] font-sans">
                  <Phone className="w-4 h-4 text-[#B59660] shrink-0" strokeWidth={1.5} />
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="font-sans text-base font-medium hover:text-[#B59660] transition-colors"
                  >
                    {BUSINESS_INFO.displayPhone}
                  </a>
                </div>
              </div>

              {/* Visit Note */}
              <div className="p-4 rounded-xl bg-[#FCFAF6] border border-[#EAE0D2] text-xs text-[#817568] space-y-1">
                <div className="flex items-center gap-2 text-[#30251F] font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#B59660]" />
                  <span>Personal Consultation</span>
                </div>
                <p>
                  To confirm today&apos;s salon schedule or reserve a bridal viewing consultation, kindly connect with us prior to your visit.
                </p>
              </div>

            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#EAE0D2]">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full bg-[#30251F] text-[#FCFAF6] hover:bg-[#211A16] text-xs font-sans uppercase tracking-widest font-medium transition-all duration-300 shadow-sm"
              >
                <Navigation className="w-4 h-4 text-[#CDB384]" />
                <span>Get Directions on Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#FCFAF6] border border-[#B59660]/40 text-[#30251F] hover:border-[#B59660] text-xs font-sans uppercase tracking-wider font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B59660]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getWhatsAppUrl("Hello Birva Boutique! I would like to visit your boutique at Sunrise Complex, Bardoli. Could you please share the best time to visit?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#B59660] text-[#FCFAF6] hover:bg-[#CDB384] text-xs font-sans uppercase tracking-wider font-medium transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Boutique Showcase & Location Card (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Visual Salon Presentation */}
            <div className="p-2 sm:p-2.5 rounded-[2.5rem] bg-gradient-to-tr from-[#B59660]/20 to-[#EAE0D2]/30 border border-[#B59660]/30 shadow-md">
              <div className="relative aspect-[16/10] rounded-[calc(2.5rem-0.625rem)] overflow-hidden bg-[#211A16]">
                <Image
                  src="/images/boutique/boutique-interior.jpg"
                  alt="Conceptual luxury interior of Birva Boutique salon in Bardoli"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211A16]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#FCFAF6]">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#CDB384] block font-sans font-semibold">
                      Boutique Atmosphere
                    </span>
                    <h3 className="font-serif text-2xl font-normal">
                      Curated Elegance in Bardoli
                    </h3>
                  </div>
                  <span className="text-xs text-[#EAE0D2]/80 font-sans hidden sm:inline">
                    Sunrise Complex, M.G. Road
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map Preview Banner Card */}
            <div className="p-6 rounded-[2rem] bg-[#F8F5EF] border border-[#B59660]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FCFAF6] border border-[#B59660]/30 flex items-center justify-center text-[#B59660] shrink-0">
                  <Navigation className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-[#30251F] font-medium">
                    Opposite Green Apple Hospital
                  </h4>
                  <p className="text-xs text-[#817568]">
                    Easy parking and central access on Mahatma Gandhi Road, Ramnagar.
                  </p>
                </div>
              </div>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-5 py-2.5 rounded-full border border-[#B59660] text-xs uppercase tracking-widest text-[#30251F] hover:bg-[#30251F] hover:text-[#FCFAF6] font-sans font-medium transition-all duration-300"
              >
                Open in Maps
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
