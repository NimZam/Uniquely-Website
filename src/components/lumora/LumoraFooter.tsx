"use client";

import Link from "next/link";
import { ArrowUp, Twitter, Dribbble, Linkedin, Instagram } from "lucide-react";

export function LumoraFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full px-4 sm:px-8 pb-12 max-w-[1440px] mx-auto">
      {/* Dark Footer Container */}
      <div className="bg-[#121316] text-white rounded-[36px] p-6 sm:p-12 border border-white/10 shadow-2xl">
        {/* Giant Logo Title Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-4">
          <h2 className="font-syne font-black text-6xl sm:text-8xl md:text-9xl tracking-tight text-white leading-none">
            Uniquely<span className="text-2xl sm:text-4xl md:text-5xl align-top font-normal font-sans">®</span>
          </h2>
          <span className="font-mono text-xs text-white/50 pb-2">
            © 20 — 26'
          </span>
        </div>

        {/* Middle Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Left Email Box */}
          <div className="md:col-span-6 space-y-6">
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Full-service studio producing digital products, visual identities, and spatial web architecture for ambitious companies.
            </p>

            <a
              href="mailto:info@uniquelytechnologies.com"
              className="inline-block font-syne font-bold text-xl sm:text-3xl text-white hover:text-white/70 transition-colors underline underline-offset-8 decoration-white/30"
            >
              info@uniquelytechnologies.com
            </a>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Services Plans & Social Icons */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                SERVICES
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Basic Plan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pro Plan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Custom Plan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                JOIN US ON
              </h4>
              <div className="flex gap-2">
                {[Twitter, Dribbble, Linkedin, Instagram].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:bg-white hover:text-black transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Studio Specs Bar */}
        <div className="border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-[11px] font-mono text-white/50 items-center">
          <div>
            <span className="block text-white/30 uppercase">STUDIO NUMBER</span>
            <span className="text-white/80">+12 34 56 78 90</span>
          </div>

          <div>
            <span className="block text-white/30 uppercase">END-TO-END METHODOLOGY</span>
            <span className="text-white/80">FOR ALL PLATFORMS</span>
          </div>

          <div>
            <span className="block text-white/30 uppercase">AVAILABILITY</span>
            <span className="text-emerald-400">IN STOCK / ACTIVE</span>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-4">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
