"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Facebook, Instagram, Linkedin, Phone } from "lucide-react";

export function UniquelyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: Facebook,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com",
      // Custom SVG icon for TikTok
      svg: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.894 2.894 2.894 0 0 1-2.894-2.894 2.894 2.894 0 0 1 2.894-2.894c.244 0 .478.033.7.091V9.439a6.326 6.326 0 0 0-.7-.042 6.333 6.333 0 0 0-6.333 6.333 6.333 6.333 0 0 0 6.333 6.333 6.333 6.333 0 0 0 6.333-6.333V8.847a8.214 8.214 0 0 0 4.788 1.516V6.918a4.832 4.832 0 0 1-1.009-.232z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full px-4 sm:px-8 pb-12 max-w-[1440px] mx-auto">
      {/* Dark Footer Container */}
      <div className="bg-[#121316] text-white rounded-[36px] p-6 sm:p-12 border border-white/10 shadow-2xl">
        {/* Giant Logo Title Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-white/10 pb-6 sm:pb-8 mb-8 sm:mb-12 gap-4">
          <h2 className="font-syne font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none break-words">
            Uniquely<span className="text-xl sm:text-3xl md:text-5xl align-top font-normal font-sans">®</span>
          </h2>
          <span className="font-mono text-xs text-white/50 pb-1 sm:pb-2">
            © 20 — 26'
          </span>
        </div>

        {/* Middle Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 mb-8 sm:mb-12">
          {/* Left Contact & Phone Section */}
          <div className="md:col-span-6 space-y-6">
            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              Digital technology & software engineering studio producing web platforms, visual identities, and custom software architecture.
            </p>

            {/* Email Contact */}
            <div>
              <span className="block font-mono text-xs text-white/40 uppercase tracking-wider mb-1">EMAIL US</span>
              <a
                href="mailto:info@uniquelytechnologies.com"
                className="font-syne font-bold text-lg sm:text-2xl text-white hover:text-emerald-400 transition-colors underline underline-offset-8 decoration-white/30 break-all"
              >
                info@uniquelytechnologies.com
              </a>
            </div>

            {/* Phone Numbers from User Image */}
            <div className="pt-2">
              <span className="block font-mono text-xs text-white/40 uppercase tracking-wider mb-1">CALL US</span>
              <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-mono text-white/90">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Call:</span>
                <a href="tel:+94773225214" className="hover:text-emerald-400 transition-colors font-semibold">
                  +94 77 322 5214
                </a>
                <span className="text-white/40">/</span>
                <a href="tel:+94757989562" className="hover:text-emerald-400 transition-colors font-semibold">
                  +94 75 798 9562
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-sm text-white/80 font-medium">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/work" className="hover:text-emerald-400 transition-colors">Work</Link></li>
              <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Services Links & Social Icons */}
          <div className="md:col-span-3 space-y-6">
            {/* Services List */}
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                SERVICES
              </h4>
              <ul className="space-y-2 text-sm text-white/80 font-medium">
                <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Digital Products & Platforms</Link></li>
                <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Brand & Visual Architecture</Link></li>
                <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">Custom Software & Cloud</Link></li>
                <li><Link href="/#services" className="hover:text-emerald-400 transition-colors">UI/UX & Atmosphere Design</Link></li>
              </ul>
            </div>

            {/* Social Media Links (FB, Insta, LinkedIn, TikTok) */}
            <div>
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                FOLLOW US
              </h4>
              <div className="flex gap-2">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${item.name}`}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/90 hover:bg-emerald-400 hover:text-black hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    {item.icon ? <item.icon className="w-4 h-4" /> : item.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Studio Specs Bar (Replaced duplicate phone numbers with Methodology & Production status) */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/50">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <span className="text-white/40 uppercase">METHODOLOGY: </span>
              <span className="text-white/90 font-semibold">END-TO-END DIGITAL ARCHITECTURE</span>
            </div>
            <div>
              <span className="text-white/40 uppercase">LOCATION: </span>
              <span className="text-white/90 font-semibold">COLOMBO, SRI LANKA</span>
            </div>
            <div>
              <span className="text-white/40 uppercase">PRODUCTION: </span>
              <span className="text-emerald-400 font-semibold">GLOBAL & SCALABLE</span>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-emerald-400 hover:text-black hover:scale-110 transition-all duration-300 shrink-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
