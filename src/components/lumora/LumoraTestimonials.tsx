"use client";

import Image from "next/image";
import { Star, ArrowRight, Quote } from "lucide-react";

export function LumoraTestimonials() {
  const logos = [
    "CloudMatch",
    "BuildShift",
    "Interlock",
    "SalesFlow",
    "ShareFrom",
    "WebPulse",
    "Quantix",
  ];

  return (
    <section id="testimonials" className="w-full py-16">
      <div className="px-4 sm:px-8 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start border-b border-black/10 pb-8">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/60">
              — TESTIMONIALS
            </span>
          </div>

          <div className="md:col-span-5">
            <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
              Voices Between Frames
            </h2>
          </div>

          <div className="md:col-span-4 flex items-end">
            <p className="text-xs text-black/70 leading-relaxed">
              Direct reviews from founders and product leads we’ve partnered with on visual strategy and engineering.
            </p>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Rating Gauge (Dark Card) */}
          <div className="lumora-card-dark rounded-3xl p-6 flex flex-col justify-between h-[360px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-syne font-black text-5xl text-white">4.9</h3>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-yellow-400">
                  <Star className="w-6 h-6 fill-yellow-400" />
                </div>
              </div>
              <span className="text-xs font-mono uppercase text-white/50 block">
                OVERALL RATING ACROSS 50+ REVIEWS
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-black overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" alt="Reviewer" fill className="object-cover" />
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-black overflow-hidden relative">
                  <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Reviewer" fill className="object-cover" />
                </div>
              </div>

              <button className="w-full py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
                <span>Read The Reviews</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Sarah Chen Quote */}
          <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[360px]">
            <div>
              <Quote className="w-6 h-6 text-black/30 mb-4" />
              <p className="text-sm font-semibold text-black leading-relaxed mb-4">
                "They didn't just redesign our website. They changed how people perceive our entire company."
              </p>
            </div>

            <div className="space-y-3">
              <div className="h-20 w-full rounded-xl overflow-hidden relative border border-black/5">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
                  alt="Review Work Attachment"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="font-syne font-bold text-sm text-black">Sarah Chen</h4>
                <p className="text-xs text-black/50">VP Design, Aura Labs</p>
              </div>
            </div>
          </div>

          {/* Card 3: Tyler Richardson Quote */}
          <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[360px]">
            <div>
              <Quote className="w-6 h-6 text-black/30 mb-4" />
              <p className="text-sm font-semibold text-black leading-relaxed">
                "Working with them felt less like hiring an agency and more like directing a visual film together."
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-black/10 pt-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative border border-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Tyler Richardson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-syne font-bold text-sm text-black">Tyler Richardson</h4>
                <p className="text-xs text-black/50">Founder, Vortex Motion</p>
              </div>
            </div>
          </div>

          {/* Card 4: Rebecca Cole Quote */}
          <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[360px]">
            <div>
              <Quote className="w-6 h-6 text-black/30 mb-4" />
              <p className="text-sm font-semibold text-black leading-relaxed">
                "The experience feels atmospheric, cinematic, and strangely emotional. Clients mention it constantly."
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-black/10 pt-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative border border-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Rebecca Cole"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-syne font-bold text-sm text-black">Rebecca Cole</h4>
                <p className="text-xs text-black/50">CDO, Lumina Systems</p>
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
