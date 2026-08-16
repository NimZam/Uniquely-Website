"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function UniquelyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      {/* Sticky / Fixed Top Navigation Bar */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo Header */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/ut_logo.png"
                alt="Uniquely Logo Mark"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-syne font-extrabold text-lg sm:text-xl tracking-tight text-black">
              Uniquely<span className="text-xs align-top font-normal font-sans">®</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold font-syne text-black/80">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-black transition-colors relative py-1 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop Contact CTA */}
            <a
              href="mailto:info@uniquelytechnologies.com"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-600 transition-all duration-300 shadow-sm"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Glass Slide-Over Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl px-6 pt-24 pb-8 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/40 block border-b border-black/10 pb-2">
                — NAVIGATION
              </span>
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-syne font-bold text-3xl text-black hover:text-emerald-600 transition-colors flex items-center justify-between py-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-black/30" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-4 pt-6 border-t border-black/10">
              <a
                href="mailto:info@uniquelytechnologies.com"
                className="w-full py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <span>CONTACT US</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] font-mono text-center text-black/50">
                © UNIQUELY TECHNOLOGIES (PVT) LTD
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Giant Display Title & Studio Bio Bar */}
      <div className="w-full px-4 sm:px-8 pt-24 sm:pt-28 pb-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-black/10 pb-8">
          {/* Giant Logo Display Title */}
          <div>
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-emerald-600 block mb-2">
              • DIGITAL INNOVATION STUDIO
            </span>
            <h1 className="font-syne font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-black leading-none break-words">
              Uniquely<span className="text-xl sm:text-3xl md:text-5xl align-top font-normal font-sans">®</span>
            </h1>
          </div>

          {/* Studio Bio Box (Right side) */}
          <div className="max-w-xs space-y-2.5 pb-1">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-white overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    alt="Team Member"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-black/60 font-semibold">
                ABOUT THE STUDIO
              </span>
            </div>

            <p className="text-xs text-black/70 leading-relaxed font-normal">
              We build digital products, brands, and interactive web experiences that scale and mean something.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


