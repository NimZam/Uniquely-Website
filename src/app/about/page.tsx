"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Star, ShieldCheck, Sparkles, Cpu, Globe, Award, ExternalLink } from "lucide-react";
import { UniquelyHeader } from "@/components/uniquely/UniquelyHeader";
import { UniquelyFooter } from "@/components/uniquely/UniquelyFooter";

export default function AboutPage() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  ];

  const pillars = [
    {
      number: "01",
      title: "Strategy & Engineering",
      description: "We architect high-performance web applications built on Next.js 15, React 19, and cloud-native serverless systems engineered for instant loading and high conversion.",
      icon: Cpu,
    },
    {
      number: "02",
      title: "Visual Direction & Atmosphere",
      description: "We blend clean typography, modern glassmorphism, and subtle micro-animations to create distinctive digital identities that command attention in competitive markets.",
      icon: Sparkles,
    },
    {
      number: "03",
      title: "Scalable Growth Architecture",
      description: "From technical SEO audits to custom software ecosystems, every product we ship is designed to scale with your business without technical debt.",
      icon: Globe,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f2f3f5] text-black">
      {/* Navigation Header */}
      <UniquelyHeader />

      {/* Hero Header Section */}
      <section className="w-full px-4 sm:px-8 pt-32 pb-16 max-w-[1440px] mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/60 bg-black/5 px-3 py-1 rounded-full border border-black/10">
              — ABOUT UNIQUELY TECHNOLOGIES
            </span>
          </div>

          <h1 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-black leading-[1.05] max-w-5xl">
            We Craft Digital Experiences That Scale & Mean Something.
          </h1>

          <p className="text-lg sm:text-2xl text-black/80 font-light max-w-3xl leading-relaxed">
            Ayubowan & welcome — Uniquely Technologies is a boutique digital innovation studio based in Colombo, Sri Lanka. We fuse strategy, design, and high-performance software engineering to elevate ambitious brands worldwide.
          </p>
        </div>

        {/* Studio Hero Image Banner */}
        <div className="relative w-full h-[400px] sm:h-[540px] rounded-[32px] overflow-hidden border border-black/10 shadow-2xl mt-12 group">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Uniquely Technologies Studio Collaboration"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div className="max-w-md">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold tracking-wider block mb-1">
                DIGITAL INNOVATION STUDIO • COLOMBO
              </span>
              <p className="text-sm font-medium text-white/90">
                Building custom web systems, visual brand architecture, and cloud applications for global leaders.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>EST. 2022 • GLOBAL PRODUCTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Highlights Grid */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Years Experience */}
          <div className="relative rounded-3xl p-8 flex flex-col justify-between h-[280px] overflow-hidden bg-gradient-to-br from-neutral-900 to-black text-white shadow-2xl border border-white/10 group">
            <div className="relative z-10">
              <span className="text-xs font-mono uppercase text-white/60 font-medium">
                INDUSTRY EXPERIENCE
              </span>
              <h3 className="font-syne font-black text-6xl text-white mt-2">4+ Yrs</h3>
            </div>
            <div className="relative z-10">
              <p className="text-xs text-white/70 leading-relaxed">
                Delivering high-performance visual, web, and spatial architecture.
              </p>
            </div>
          </div>

          {/* Card 2: Projects Delivered */}
          <div className="lumora-card-light rounded-3xl p-8 flex flex-col justify-between h-[280px]">
            <div>
              <span className="text-xs font-mono uppercase text-black/50 font-medium">
                PROJECTS DELIVERED
              </span>
              <h3 className="font-syne font-black text-6xl text-black mt-2">150+</h3>
            </div>
            <p className="text-xs text-black/70 leading-relaxed">
              Successfully launched web platforms, mobile apps, and SaaS systems.
            </p>
          </div>

          {/* Card 3: Global Collaborations */}
          <div className="lumora-card-light rounded-3xl p-8 flex flex-col justify-between h-[280px]">
            <div>
              <div className="flex -space-x-2 overflow-hidden mb-4">
                {avatars.map((url, idx) => (
                  <div key={idx} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image src={url} alt="Collaborator" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-xs font-mono uppercase text-black/50 font-medium">
                GLOBAL COLLABORATIONS
              </span>
            </div>
            <div>
              <h3 className="font-syne font-black text-5xl text-black">48+</h3>
            </div>
          </div>

          {/* Card 4: Google Rating */}
          <div className="lumora-card-dark rounded-3xl p-8 flex flex-col justify-between h-[280px]">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase text-white/50">VERIFIED RATING</span>
                <span className="flex items-center gap-1 text-yellow-400 text-xs font-bold font-mono">
                  4.9 <Star className="w-3.5 h-3.5 fill-yellow-400" />
                </span>
              </div>
              <h3 className="font-syne font-extrabold text-4xl text-white">Google Profile</h3>
            </div>
            <a
              href="https://shorturl.at/g4dY5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-400 font-semibold flex items-center gap-1 hover:underline pt-2 border-t border-white/10"
            >
              <span>Read Client Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Core Studio Pillars Section */}
      <section className="w-full px-4 sm:px-8 py-16 max-w-[1440px] mx-auto">
        <div className="bg-[#121316] text-white rounded-[36px] p-8 sm:p-14 border border-white/10 shadow-2xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 block mb-2">
              — OUR PHILOSOPHY
            </span>
            <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Built On Engineering Excellence & Aesthetic Precision.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {pillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <div key={pIdx} className={`${pIdx > 0 ? "pt-8 md:pt-0 md:pl-8" : ""} space-y-4`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-white/40">{pillar.number}</span>
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="font-syne font-bold text-2xl text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Review Spotlight (Lasitha Kulasekara / KAID Architecture) */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto">
        <div className="lumora-card-light rounded-[36px] p-8 sm:p-14 border border-black/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Owner Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/lasitha.png"
                  alt="Lasitha Kulasekara - Owner of KAID Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
                <span className="text-xs font-mono font-bold text-black ml-2">VERIFIED GOOGLE REVIEW</span>
              </div>

              <blockquote className="font-syne text-xl sm:text-3xl font-medium text-black leading-snug">
                "Their team translated our vision into a clean, modern website that perfectly reflects the KAID brand. Communication was smooth, timelines respected, and revisions handled efficiently."
              </blockquote>

              <div>
                <h4 className="font-syne font-bold text-lg text-black">Lasitha Kulasekara</h4>
                <p className="text-xs font-mono text-black/60 uppercase">Owner, KAID Architecture</p>
              </div>

              <a
                href="https://shorturl.at/g4dY5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-black hover:text-emerald-600 transition-colors pt-2 border-t border-black/10"
              >
                <span>Read Full Review on Google Business Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Box */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto text-center">
        <div className="bg-black text-white rounded-[36px] p-10 sm:p-16 border border-white/10 shadow-2xl space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            START A PROJECT WITH US
          </span>
          <h2 className="font-syne font-bold text-3xl sm:text-6xl text-white max-w-3xl mx-auto leading-tight">
            Ready To Build Your Next Digital Product?
          </h2>
          <p className="text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
            Whether you need a bespoke web platform, custom software architecture, or a brand refresh — let's create something extraordinary.
          </p>

          <div className="pt-4 flex justify-center">
            <a
              href="mailto:info@uniquelytechnologies.com"
              className="px-8 py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-xl flex items-center gap-2 group"
            >
              <span>Book A Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UniquelyFooter />
    </main>
  );
}
