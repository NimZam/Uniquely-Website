"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function LumoraHeader() {
  return (
    <header className="w-full px-4 sm:px-8 pt-6 pb-4 max-w-[1440px] mx-auto">
      {/* Top Navbar */}
      <div className="flex items-center justify-between py-4 border-b border-black/10">
        {/* Brand Logo */}
        <Link href="/" className="font-syne font-extrabold text-2xl tracking-tight text-black flex items-center gap-0.5">
          Uniquely<span className="text-xs align-top font-sans font-normal ml-0.5">®</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black/80">
          <Link href="#about" className="flex items-center gap-1 hover:text-black transition-colors">
            About <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </Link>
          <Link href="#services" className="flex items-center gap-1 hover:text-black transition-colors">
            Services <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </Link>
          <Link href="#projects" className="flex items-center gap-1 hover:text-black transition-colors">
            Projects <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </Link>
          <Link href="#process" className="flex items-center gap-1 hover:text-black transition-colors">
            Process <ChevronDown className="w-3.5 h-3.5 opacity-60" />
          </Link>
          <Link href="#testimonials" className="hover:text-black transition-colors">
            Testimonials
          </Link>
        </nav>

        {/* Action Button */}
        <div>
          <a
            href="mailto:info@uniquelytechnologies.com"
            className="px-6 py-2 rounded-full border border-black/20 text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300"
          >
            CONTACT US
          </a>
        </div>
      </div>

      {/* Hero Giant Title & Studio Bio Bar */}
      <div className="pt-10 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Giant Logo Title */}
        <h1 className="font-syne font-bold text-6xl sm:text-8xl md:text-9xl tracking-tight text-black leading-none">
          Uniquely<span className="text-2xl sm:text-4xl md:text-5xl align-top font-normal font-sans">®</span>
        </h1>

        {/* Studio Bio Box (Right side) */}
        <div className="max-w-xs space-y-3 pb-2">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <span className="text-[11px] font-mono tracking-wider uppercase text-black/60 font-semibold">
              ABOUT THE STUDIO
            </span>
          </div>

          <p className="text-xs text-black/70 leading-relaxed font-normal">
            We build digital products, brands, and interactive web experiences that scale and mean something.
          </p>
        </div>
      </div>
    </header>
  );
}
