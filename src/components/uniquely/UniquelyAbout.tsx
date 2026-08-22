"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Globe, Cpu, Star, ExternalLink } from "lucide-react";

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
    <section id="about" className="w-full px-4 sm:px-8 py-20 max-w-[1440px] mx-auto text-white">
      {/* Section Tag & Headline */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start">
        {/* Left Section Tag */}
        <div className="md:col-span-3">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-white/80">
              ABOUT UNIQUELY
            </span>
          </div>
        </div>

        {/* Headline & Description */}
        <div className="md:col-span-9 space-y-4">
          <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-snug">
            Ayubowan & welcome —{" "}
            <span className="font-normal text-white/90">
              Uniquely Technologies is a boutique digital innovation studio based in Colombo.
            </span>{" "}
            <span className="font-light text-white/60 block mt-3 text-lg sm:text-2xl leading-relaxed">
              We fuse strategic design, 3D web environments, and cloud-native software architecture to elevate ambitious brands worldwide.
            </span>
          </h2>

          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors group"
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
        <div className="rounded-3xl p-6 flex flex-col justify-between min-h-[220px] md:h-[280px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-400/40 transition-all duration-300 shadow-xl group">
          <div>
            <div className="flex -space-x-2 overflow-hidden mb-4">
              {avatars.map((url, idx) => (
                <div key={idx} className="inline-block h-8 w-8 rounded-full ring-2 ring-black overflow-hidden relative shadow-sm">
                  <Image src={url} alt="Collaborator" fill className="object-cover" />
                </div>
              ))}
            </div>
            <span className="text-xs font-mono uppercase text-white/50 font-medium">
              GLOBAL PARTNERSHIPS
            </span>
            <h3 className="font-syne font-black text-5xl text-white mt-2">48+</h3>
          </div>

          <p className="text-xs text-white/60 leading-relaxed border-t border-white/10 pt-3">
            Partnering with visionary founders across North America, Europe & Asia.
          </p>
        </div>

        {/* Card 2: Industry Recognition */}
        <div className="rounded-3xl p-6 flex flex-col justify-between min-h-[220px] md:h-[280px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-400/40 transition-all duration-300 shadow-xl">
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
            Featured on global design platforms for visual direction & architecture.
          </p>
        </div>

        {/* Card 3: Projects Delivered */}
        <div className="rounded-3xl p-6 flex flex-col justify-between min-h-[220px] md:h-[280px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-400/40 transition-all duration-300 shadow-xl group">
          <div>
            <span className="text-xs font-mono uppercase text-white/50 font-medium block mb-2">
              PROJECTS DELIVERED
            </span>
            <div className="h-16 w-full rounded-xl overflow-hidden relative border border-white/10">
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
            <h3 className="font-syne font-black text-5xl text-white mt-3">150+</h3>
          </div>

          <p className="text-xs text-white/60 leading-relaxed border-t border-white/10 pt-3">
            Web platforms, custom SaaS apps, and scalable digital ecosystems.
          </p>
        </div>

        {/* Card 4: Verified Google Rating */}
        <div className="rounded-3xl p-6 flex flex-col justify-between min-h-[220px] md:h-[280px] bg-gradient-to-br from-neutral-900 to-black border border-white/15 hover:border-emerald-400/50 transition-all duration-300 shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase text-white/50 font-medium">VERIFIED RATING</span>
              <span className="flex items-center gap-1 text-yellow-400 text-xs font-bold font-mono bg-yellow-400/10 px-2 py-0.5 rounded-full border border-yellow-400/20">
                4.9 <Star className="w-3.5 h-3.5 fill-yellow-400" />
              </span>
            </div>
            <h3 className="font-syne font-extrabold text-3xl text-white mt-3">Google Profile</h3>
          </div>

          <div className="border-t border-white/15 pt-3">
            <a
              href="https://share.google/2RQyGGvM61RGyC2EJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 hover:underline"
            >
              <span>Read Verified Client Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

