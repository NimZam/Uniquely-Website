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
      setScrolled(window.scrollY > 80);
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
      {/* Mobile Top Navigation Dock */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 px-4 py-3 pointer-events-none flex justify-between items-center">
        <div className="pointer-events-auto bg-white/80 backdrop-blur-2xl border border-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-4 py-2 flex items-center justify-between w-full">
          <Link href="/" className="relative w-7 h-7 shrink-0 hover:scale-105 transition-transform">
            <Image
              src="/images/ut_logo.png"
              alt="Uniquely Logo Mark"
              fill
              className="object-contain"
            />
          </Link>

          {/* Live Studio Status Pill instead of duplicate title */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-mono font-semibold tracking-wider text-black/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>DIGITAL STUDIO</span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-black transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Slide-Over Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl px-6 pt-24 pb-8 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/40 block border-b border-black/10 pb-2">
                — NAVIGATION
              </span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-syne font-bold text-3xl text-black hover:text-emerald-600 transition-colors flex items-center justify-between"
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

      {/* Desktop Animated Floating Header Dock Container */}
      <div className="hidden md:flex fixed top-0 inset-x-0 z-50 pointer-events-none py-5 px-4 justify-center">
        <AnimatePresence mode="wait">
          {!scrolled ? (
            /* Full Width Top Header (Unscrolled State) */
            <motion.header
              key="full-header"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto border-b border-black/10 px-4 sm:px-8 py-3 text-black max-w-[1440px] w-full flex items-center justify-between bg-transparent"
            >
              {/* Navigation Links */}
              <nav className="flex items-center gap-10 text-sm font-medium text-black/80 font-syne">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Contact Action Button */}
              <div>
                <a
                  href="mailto:info@uniquelytechnologies.com"
                  className="px-6 py-2.5 rounded-full border border-black/20 text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  CONTACT US
                </a>
              </div>
            </motion.header>
          ) : (
            /* Animated Transparent Glass Floating Bubble Pill Dock (Scrolled State) */
            <motion.nav
              key="transparent-floating-bubble"
              initial={{ y: -50, scale: 0.85, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: -40, scale: 0.85, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                mass: 0.8,
              }}
              className="pointer-events-auto bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_16px_40px_rgba(0,0,0,0.12)] rounded-full pl-4 pr-8 py-2.5 flex items-center gap-6 sm:gap-8"
            >
              {/* Left Small UT Icon Mark */}
              <Link href="/" className="relative w-7 h-7 shrink-0 hover:scale-110 transition-transform">
                <Image
                  src="/images/ut_logo.png"
                  alt="Uniquely Logo Mark"
                  fill
                  className="object-contain"
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center gap-6 sm:gap-8">
                {navLinks.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.1, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm font-semibold text-black/90 hover:text-black transition-colors duration-200 tracking-wide font-syne"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Hero Giant Title & Studio Bio Bar */}
      <div className="w-full px-4 sm:px-8 pt-20 md:pt-28 pb-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          {/* Giant Logo Title */}
          <h1 className="font-syne font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-black leading-none break-words">
            Uniquely<span className="text-xl sm:text-3xl md:text-5xl align-top font-normal font-sans">®</span>
          </h1>

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


