"use client";

import Image from "next/image";
import { Globe, Palette, TrendingUp, Share2, Smartphone } from "lucide-react";

export function UniquelyHero() {
  const tags = [
    { label: "Web Development", icon: Globe },
    { label: "Brand Identity", icon: Palette },
    { label: "Digital Marketing", icon: TrendingUp },
    { label: "Social Media", icon: Share2 },
    { label: "App Development", icon: Smartphone },
  ];

  return (
    <section className="w-full px-4 sm:px-8 pb-16 max-w-[1440px] mx-auto">
      {/* Hero Image Container Card */}
      <div className="relative w-full h-[540px] sm:h-[640px] rounded-[32px] overflow-hidden border border-black/10 shadow-xl group">
        {/* Main Background Image - Snow-capped Mountain Peak */}
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop"
          alt="Uniquely Technologies Snow Mountain Peak Hero"
          fill
          priority
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Bottom Bar overlay inside Hero */}
        <div className="absolute bottom-6 inset-x-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-10">
          {/* Left Text */}
          <div className="max-w-xs">
            <span className="text-[10px] font-mono uppercase font-semibold text-white/70 block tracking-wider mb-0.5">
              WEB DEVELOPMENT STUDIO
            </span>
            <p className="text-xs font-medium text-white/95 leading-relaxed drop-shadow-md">
              An exclusive studio for brands to build high-performance web experiences.
            </p>
          </div>

          {/* Bottom Tag Pills Strip */}
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => {
              const Icon = tag.icon;
              return (
                <div
                  key={tag.label}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium hover:bg-white hover:text-black transition-all cursor-pointer shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tag.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


