"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-500">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full px-6 py-3 transition-all duration-500 flex items-center justify-between",
          scrolled ? "glass-panel shadow-2xl shadow-purple-950/20 py-2.5" : "bg-transparent"
        )}
      >
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/40 group-hover:rotate-12 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-black text-xl tracking-tight text-white">
            AURA<span className="text-accent-light">STUDIO</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-panel rounded-full px-4 py-1.5 border border-white/10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-sm font-medium text-gray-300 hover:text-white transition-colors hover:bg-white/5 rounded-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <MagneticButton dataCursorText="Let's Talk">
            <Link
              href="#contact"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-accent to-accent-light shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all block"
            >
              Start Project
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 glass-card rounded-2xl p-6 flex flex-col gap-4 border border-white/10 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium text-gray-200 hover:text-accent-light transition-colors py-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="w-full text-center py-3 rounded-xl font-semibold text-white bg-accent mt-2"
          >
            Start Project
          </Link>
        </div>
      )}
    </header>
  );
}
