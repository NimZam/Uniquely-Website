"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Globe, Cpu, Award } from "lucide-react";

export function UniquelyAbout() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  ];

  return (
    <section id="about" className="w-full px-4 sm:px-8 py-20 max-w-[1440px] mx-auto">
      {/* Section Tag & Headline */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
        {/* Left Section Tag */}
        <div className="md:col-span-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/70">
              ABOUT UNIQUELY
            </span>
          </div>
        </div>

        {/* Headline & Description */}
        <div className="md:col-span-9 space-y-4">
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-snug">
            Ayubowan & welcome —{" "}
            <span className="font-normal text-black/90">
              Uniquely Technologies is a boutique digital innovation studio.
            </span>{" "}
            <span className="font-light text-black/60 block mt-3 text-lg sm:text-2xl leading-relaxed">
              We fuse strategy, visual direction, and cloud-native software engineering to elevate ambitious brands worldwide.
            </span>
          </h2>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-emerald-600 transition-colors group"
            >
              <span>Explore Our Full Story & Studio Principles</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Global Collaborations */}
        <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[290px] border border-black/5 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md">
          <div>
            <div className="flex -space-x-2 overflow-hidden mb-4">
              {avatars.map((url, idx) => (
                <div key={idx} className="inline-block h-8 w-8 rounded-full ring-2 ring-white overflow-hidden relative shadow-sm">
                  <Image src={url} alt="Collaborator" fill className="object-cover" />
                </div>
              ))}
            </div>
            <span className="text-xs font-mono uppercase text-black/50 font-medium">
              GLOBAL COLLABORATIONS
            </span>
            <h3 className="font-syne font-black text-5xl text-black mt-2">48+</h3>
          </div>

          <p className="text-xs text-black/60 leading-relaxed border-t border-black/5 pt-3">
            Partnering with visionary founders across North America, Europe & Asia.
          </p>
        </div>

        {/* Card 2: Industry Recognition (Dark Card) */}
        <div className="lumora-card-dark rounded-3xl p-6 flex flex-col justify-between h-[290px] hover:border-white/20 transition-all duration-300 shadow-lg">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-white/50 font-medium">INDUSTRY RECOGNITION</span>
              <div className="relative w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <div className="w-5 h-5 rounded-full border border-dashed border-white/40 animate-spin-slow" />
                <div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
            <h3 className="font-syne font-black text-5xl text-white mt-2">12+</h3>
          </div>

          <p className="text-xs text-white/60 leading-relaxed border-t border-white/10 pt-3">
            Featured on Awwwards & FWA for design system & visual direction.
          </p>
        </div>

        {/* Card 3: Projects Delivered */}
        <div className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[290px] border border-black/5 hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-md group">
          <div>
            <span className="text-xs font-mono uppercase text-black/50 font-medium block mb-2">
              PROJECTS DELIVERED
            </span>
            <div className="h-16 w-full rounded-xl overflow-hidden relative border border-black/5">
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 1.12, rotate: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
                  alt="Project Showcase"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <h3 className="font-syne font-black text-5xl text-black mt-3">150+</h3>
          </div>

          <p className="text-xs text-black/60 leading-relaxed border-t border-black/5 pt-3">
            Web platforms, custom SaaS apps, and scalable digital ecosystems.
          </p>
        </div>

        {/* Card 4: Years of Experience */}
        <div className="relative rounded-3xl p-6 flex flex-col justify-between h-[290px] overflow-hidden group shadow-lg border border-white/10">
          <motion.div
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.1, rotate: 0.5 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop"
              alt="Years of Experience"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 group-hover:opacity-90 transition-opacity duration-500" />

          <div className="relative z-10">
            <span className="text-xs font-mono uppercase text-white/70 font-medium">
              YEARS OF EXPERIENCE
            </span>
            <h3 className="font-syne font-black text-5xl text-white mt-2">4+ Yrs</h3>
          </div>

          <div className="relative z-10 border-t border-white/15 pt-3">
            <p className="text-xs text-white/80 leading-relaxed">
              Delivering bespoke visual, web, and spatial atmosphere architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

