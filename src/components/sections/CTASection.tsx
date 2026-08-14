"use client";

import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Send, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="relative rounded-3xl glass-card p-8 sm:p-16 overflow-hidden text-center flex flex-col items-center border border-accent/30 shadow-2xl shadow-purple-950/40">
        {/* Glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-glow rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-accent-light mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START A CONVERSATION</span>
        </div>

        <TextReveal
          text="Ready to build your next flagship experience?"
          as="h2"
          className="text-3xl sm:text-6xl font-black text-white max-w-3xl mb-6"
        />

        <p className="text-gray-300 text-base sm:text-lg max-w-xl font-light mb-10 leading-relaxed">
          Let’s collaborate to build an interactive site that stands out with smooth motion, WebGL 3D elements, and clean architecture.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email address..."
            className="flex-1 px-5 py-4 rounded-full glass-panel border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent text-sm"
          />

          <MagneticButton dataCursorText="Submit">
            <button className="px-7 py-4 rounded-full font-bold text-white bg-gradient-to-r from-accent to-accent-light shadow-lg shadow-accent/40 hover:shadow-accent/60 transition-all flex items-center gap-2">
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
