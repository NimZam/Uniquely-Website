"use client";

import Image from "next/image";
import { Star, ArrowRight, Quote } from "lucide-react";

export function UniquelyTestimonials() {
  const logos = [
    "KAID Architecture",
    "Theji Tours",
    "Askmi Foods",
    "IW Labs",
    "WTV",
    "Fresh Lanka",
    "ICMS",
    "CJ Holdings",
    "ISLSG",
  ];

  const googleProfileUrl = "https://share.google/2RQyGGvM61RGyC2EJ";

  return (
    <section id="testimonials" className="w-full py-16">
      <div className="px-4 sm:px-8 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start border-b border-black/10 pb-8">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/60">
              — GOOGLE REVIEWS
            </span>
          </div>

          <div className="md:col-span-5">
            <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
              Client Feedback
            </h2>
          </div>

          <div className="md:col-span-4 flex items-end">
            <p className="text-xs text-black/70 leading-relaxed">
              Verified reviews directly from business owners and leadership on our Google Business Profile.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Rating Gauge (Dark Card) */}
          <div className="lumora-card-dark rounded-3xl p-6 flex flex-col justify-between h-[380px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-syne font-black text-5xl text-white">4.9</h3>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-yellow-400">
                  <Star className="w-6 h-6 fill-yellow-400" />
                </div>
              </div>
              <span className="text-xs font-mono uppercase text-white/60 block leading-relaxed">
                OVERALL RATING ON GOOGLE BUSINESS PROFILE
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex -space-x-2 overflow-hidden items-center">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black overflow-hidden relative bg-neutral-800">
                  <Image src="/images/lasitha.png" alt="Lasitha Kulasekara" fill className="object-cover" />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black overflow-hidden relative bg-white p-0.5">
                  <Image src="/images/icms_logo.png" alt="ICMS Compliance" fill className="object-contain" />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-black overflow-hidden relative bg-white p-0.5">
                  <Image src="/images/theji_tours_logo.png" alt="Theji Tours" fill className="object-contain" />
                </div>
              </div>

              <a
                href={googleProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all shadow-md group"
              >
                <span>Read The Reviews</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Card 2: KAID Architecture - Lasitha Kulasekara */}
          <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[380px]">
            <div>
              <Quote className="w-6 h-6 text-black/30 mb-3" />
              <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
                "Uniquely Technologies brought our vision to life with a clean, user-friendly, modern website for KAID. Professional, creative, and highly responsive throughout."
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-black/10 pt-4">
              <div className="w-11 h-11 rounded-full overflow-hidden relative border border-black/10 shrink-0 bg-neutral-100">
                <Image
                  src="/images/lasitha.png"
                  alt="Lasitha Kulasekara"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-syne font-bold text-sm text-black truncate">Lasitha Kulasekara</h4>
                <p className="text-xs text-black/60 truncate">Owner, KAID Architecture</p>
              </div>
            </div>
          </div>

          {/* Card 3: ICMS Compliance */}
          <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[380px]">
            <div>
              <Quote className="w-6 h-6 text-black/30 mb-3" />
              <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
                "Outstanding digital strategy and web architecture. Uniquely Technologies delivered our compliance platform with exceptional precision, quality, and speed."
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-black/10 pt-4">
              <div className="w-11 h-11 rounded-full overflow-hidden relative border border-black/10 shrink-0 bg-white p-1">
                <Image
                  src="/images/icms_logo.png"
                  alt="ICMS Compliance"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-syne font-bold text-sm text-black truncate">ICMS Compliance</h4>
                <p className="text-xs text-black/60 truncate">Compliance & Advisory</p>
              </div>
            </div>
          </div>

          {/* Card 4: Theji Tours */}
          <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[380px]">
            <div>
              <Quote className="w-6 h-6 text-black/30 mb-3" />
              <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
                "Transformed our travel booking platform into a seamless, high-converting digital experience. Their attention to detail and user experience is top-tier."
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-black/10 pt-4">
              <div className="w-11 h-11 rounded-full overflow-hidden relative border border-black/10 shrink-0 bg-white p-1">
                <Image
                  src="/images/theji_tours_logo.png"
                  alt="Theji Tours (Pvt) Ltd"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-syne font-bold text-sm text-black truncate">Theji Tours (Pvt) Ltd</h4>
                <p className="text-xs text-black/60 truncate">Travel & Tourism Ecosystem</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Marquee Ticker */}
      <div className="w-full bg-black/5 border-y border-black/10 py-6 overflow-hidden">
        <div className="animate-marquee flex items-center gap-16 text-black/60 font-syne font-bold text-lg uppercase tracking-wider whitespace-nowrap">
          {[...logos, ...logos].map((logoName, idx) => (
            <span key={idx} className="flex items-center gap-4 hover:text-black transition-colors cursor-pointer">
              <span>★</span>
              <span>{logoName}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

