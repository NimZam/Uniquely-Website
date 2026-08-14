"use client";

import { HeroCanvas } from "@/components/3d/HeroCanvas";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { ArrowDownRight, Sparkles, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Interactive 3D WebGL Background */}
      <HeroCanvas />

      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-glow rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-accent/30 text-xs font-semibold text-accent-light mb-8 shadow-lg shadow-purple-950/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>NEXT.JS 15 & THREE.JS 3D CANVAS</span>
        </div>

        {/* Hero Title */}
        <TextReveal
          text="Crafting Immersive Digital Experiences"
          as="h1"
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl"
        />

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-xl max-w-2xl font-light mb-10 leading-relaxed">
          High-performance web architecture combining Lenis smooth scrolling, GSAP ScrollTrigger animations, and custom 3D webgl graphics.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MagneticButton dataCursorText="Explore">
            <a
              href="#work"
              className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-accent via-purple-600 to-accent-light shadow-xl shadow-accent/40 hover:shadow-accent/60 transition-all flex items-center gap-2 group"
            >
              <span>Explore Selected Work</span>
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
          </MagneticButton>

          <MagneticButton dataCursorText="Showreel">
            <button className="px-7 py-4 rounded-full font-semibold text-gray-200 glass-card hover:bg-white/10 transition-colors flex items-center gap-2 border border-white/15">
              <Play className="w-4 h-4 text-accent-light fill-accent-light" />
              <span>Watch Reel 2026</span>
            </button>
          </MagneticButton>
        </div>

        {/* Metric Specs */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 pt-8 border-t border-white/10 max-w-xl w-full">
          <div>
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">60 FPS</div>
            <div className="text-xs text-gray-400 font-medium">Lenis Smooth Engine</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-accent-light">100%</div>
            <div className="text-xs text-gray-400 font-medium">TypeScript Strict</div>
          </div>
          <div>
            <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">Next.js 15</div>
            <div className="text-xs text-gray-400 font-medium">App Router React 19</div>
          </div>
        </div>
      </div>
    </section>
  );
}
