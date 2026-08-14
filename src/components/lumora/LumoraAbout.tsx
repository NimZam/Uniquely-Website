"use client";

import Image from "next/image";

export function LumoraAbout() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  ];

  return (
    <section id="about" className="w-full px-4 sm:px-8 py-16 max-w-[1440px] mx-auto">
      {/* Section Tag & Giant Typography Headline */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
        {/* Left Section Tag */}
        <div className="md:col-span-3">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/60">
            — ABOUT UNIQUELY
          </span>
        </div>

        {/* Headline */}
        <div className="md:col-span-9">
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black leading-snug">
            We believe the most memorable brands are not built through decoration, but{" "}
            <span className="font-serif italic font-normal text-black/40">/</span> through atmosphere{" "}
            <span className="font-light text-black/60">
              — quietly captures attention, and leaves a lasting impression after the experience ends.
            </span>
          </h2>
        </div>
      </div>

      {/* 4 Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Global Collaborations */}
        <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[280px]">
          <div>
            <div className="flex -space-x-2 overflow-hidden mb-6">
              {avatars.map((url, idx) => (
                <div key={idx} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                  <Image src={url} alt="Collaborator" fill className="object-cover" />
                </div>
              ))}
            </div>
            <span className="text-xs font-mono uppercase text-black/50 font-medium">
              Global Collaborations
            </span>
          </div>

          <div>
            <h3 className="font-syne font-black text-5xl text-black">48+</h3>
          </div>
        </div>

        {/* Card 2: Industry Recognition (Dark Card) */}
        <div className="lumora-card-dark rounded-3xl p-6 flex flex-col justify-between h-[280px]">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase text-white/50 block">Industry Recognition</span>
              <h3 className="font-syne font-extrabold text-4xl text-white mt-1">12+</h3>
            </div>

            {/* Circular Gauge Graphic */}
            <div className="relative w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full border border-dashed border-white/40 animate-spin-slow" />
              <div className="absolute w-2 h-2 rounded-full bg-white" />
            </div>
          </div>

          <p className="text-xs text-white/60 leading-relaxed border-t border-white/10 pt-4">
            Featured on Awwwards & FWA for design system & visual direction.
          </p>
        </div>

        {/* Card 3: Projects Delivered */}
        <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[280px] group">
          <div>
            <span className="text-xs font-mono uppercase text-black/50 font-medium block mb-3">
              Projects Delivered
            </span>
            <div className="h-20 w-full rounded-xl overflow-hidden relative border border-black/5">
              <Image
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
                alt="Project Thumbnail"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <div>
            <h3 className="font-syne font-black text-5xl text-black">150+</h3>
          </div>
        </div>

        {/* Card 4: Years of Experience (Image Background) */}
        <div className="relative rounded-3xl p-6 flex flex-col justify-between h-[280px] overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1511497584788-8767611136f6?q=80&w=600&auto=format&fit=crop"
            alt="Years of Experience"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase text-white/70 font-medium">
              Years of Experience
            </span>
          </div>

          <div className="relative z-10 text-white">
            <h3 className="font-syne font-black text-5xl mb-1">14+</h3>
            <p className="text-xs text-white/80 line-clamp-2">
              Delivering visual, web, and spatial architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
