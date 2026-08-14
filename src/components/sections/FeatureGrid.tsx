"use client";

import { FEATURES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { TextReveal } from "@/components/animations/TextReveal";
import { Zap, Box, MousePointer, Layers } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";

const iconMap = {
  Zap: Zap,
  Box: Box,
  MousePointer: MousePointer,
  Layers: Layers,
};

export function FeatureGrid() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="text-accent-light font-mono text-sm uppercase tracking-wider mb-2">
          02 / Architecture & Features
        </div>
        <TextReveal
          text="Engineered with Cutting-Edge Motion Tech"
          as="h2"
          className="text-3xl sm:text-5xl font-black text-white mb-4"
        />
        <p className="text-gray-400 text-base sm:text-lg">
          Every component is designed for performance, modular scalability, and fluid user engagement.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FEATURES.map((feature, idx) => {
          const IconComponent = iconMap[feature.iconName as keyof typeof iconMap] || Zap;
          return (
            <GlassCard key={feature.id} className="flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-light group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {feature.badge && (
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white mb-1 group-hover:text-accent-light transition-colors">
                  {feature.title}
                </h3>
                <h4 className="text-xs font-mono text-accent-light mb-3">{feature.subtitle}</h4>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {feature.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                <span className="text-xs text-gray-500 font-mono">MODULE 0{idx + 1}</span>
                <MagneticButton dataCursorText="Details">
                  <span className="text-xs font-semibold text-accent-light hover:underline">
                    View Docs →
                  </span>
                </MagneticButton>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
