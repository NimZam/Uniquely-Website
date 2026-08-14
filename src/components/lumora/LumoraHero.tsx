"use client";

import Image from "next/image";
import { Sparkles, Compass, Layers, MousePointer, Cpu, Activity } from "lucide-react";

export function LumoraHero() {
  const tags = [
    { label: "Case Studies", icon: Sparkles },
    { label: "Brand Design", icon: Compass },
    { label: "3D & Visuals", icon: Layers },
    { label: "System Design", icon: Cpu },
    { label: "Digital Products", icon: MousePointer },
    { label: "Motion", icon: Activity },
  ];

  return (
    <section className="w-full px-4 sm:px-8 pb-16 max-w-[1440px] mx-auto">
      {/* Hero Image Container Card */}
      <div className="relative w-full h-[540px] sm:h-[640px] rounded-[32px] overflow-hidden border border-black/10 shadow-xl group">
        {/* Main Background Image - Green Meadow & Pond */}
        <Image
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2000&auto=format&fit=crop"
          alt="Uniquely Lush Meadow & Pond"
          fill
          priority
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Floating Bottom-Right Preview Widget */}
        <div className="absolute bottom-24 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-white/50 shadow-2xl flex items-center gap-4 max-w-xs transition-transform duration-500 hover:scale-105 z-10">
          <div className="w-14 h-14 rounded-xl bg-gray-100 relative overflow-hidden shrink-0 border border-black/5">
            <Image
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=300&auto=format&fit=crop"
              alt="Mouse Magnet 3D Widget"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center justify-between gap-2">
              <h4 className="font-syne font-bold text-sm text-black">Mouse Magnet™</h4>
              <span className="text-[10px] font-mono bg-black text-white px-2 py-0.5 rounded-full">
                HOT
              </span>
            </div>
            <p className="text-xs text-black/60 font-medium mt-0.5">Scroll Control</p>
          </div>
        </div>

        {/* Bottom Bar overlay inside Hero */}
        <div className="absolute bottom-6 inset-x-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 z-10">
          {/* Left Text */}
          <p className="text-xs font-medium text-white/95 max-w-xs drop-shadow-md">
            Pure, high-fidelity visual design for forward-thinking brands.
          </p>

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
