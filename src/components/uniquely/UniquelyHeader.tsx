"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function UniquelyHeader() {
  const [scrolled, setScrolled] = useState(false);

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
      {/* Animated Floating Transparent Header Dock Container */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none py-5 px-4 flex justify-center">
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
      <div className="w-full px-4 sm:px-8 pt-28 pb-6 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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
      </div>
    </>
  );
}


