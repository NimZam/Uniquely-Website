"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Lock, ExternalLink, Globe, Sparkles } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  domain: string;
  image: string;
  client: string;
  url: string;
  category: "all" | "web" | "travel" | "enterprise";
  tags: string[];
  year: string;
  highlights: string[];
}

export function UniquelyProjects() {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "travel" | "enterprise">("all");

  const projects: Project[] = [
    {
      id: "kaid",
      title: "KAID Studio — Immersive Digital Platform",
      subtitle: "High-performance web architecture & dynamic brand showcase",
      domain: "kaid.lk",
      image: "/kaid_showcase_v2.png",
      client: "KAID",
      url: "https://kaid.lk",
      category: "web",
      tags: ["Web Architecture", "UI/UX Engineering", "Next.js", "GSAP"],
      year: "2024",
      highlights: ["Ultra-fast SSG Rendering", "Custom Motion System"],
    },
    {
      id: "theji-tours",
      title: "Theji Tours — Majestic Sri Lanka Experience",
      subtitle: "Premium travel & custom tour booking ecosystem",
      domain: "thejitours.com",
      image: "/theji_tours_showcase.png",
      client: "Theji Tours (Pvt) Ltd",
      url: "https://thejitours.com",
      category: "travel",
      tags: ["Travel & Tourism", "Web Architecture", "Custom Booking", "Tailwind"],
      year: "2024",
      highlights: ["Interactive Itinerary Explorer", "Multilingual Support"],
    },
    {
      id: "icms",
      title: "ICMS Compliance — Corporate Governance Portal",
      subtitle: "Enterprise compliance monitoring & data analytics engine",
      domain: "icmscompliance.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      client: "ICMS (Pvt) Ltd",
      url: "https://icmscompliance.com",
      category: "enterprise",
      tags: ["Enterprise Web", "Compliance Portal", "Dashboard Analytics"],
      year: "2023",
      highlights: ["Real-time Reporting", "Secure Audit Trail"],
    },
  ];

  const categories = [
    { id: "all", label: "All Productions" },
    { id: "web", label: "Web Architecture" },
    { id: "travel", label: "Travel & Tourism" },
    { id: "enterprise", label: "Enterprise" },
  ] as const;

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="w-full px-4 sm:px-8 py-20 max-w-[1440px] mx-auto space-y-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-black/60">
              FEATURED PRODUCTIONS
            </span>
          </div>
          <h2 className="font-syne font-bold text-3xl sm:text-5xl text-[#0d0e12] tracking-tight">
            Crafted with Precision.
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`text-xs font-mono px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#0d0e12] text-white shadow-lg shadow-black/10 font-semibold scale-105"
                  : "bg-white text-black/70 hover:bg-black/5 hover:text-black border border-black/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Showcase Container */}
      <div className="space-y-16">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.96 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="group relative w-full bg-[#0d0e12] text-white rounded-[32px] overflow-hidden border border-black/10 shadow-2xl transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]"
            >
              {/* Sleek macOS Browser Mockup Chrome Header */}
              <div className="w-full bg-[#18191e] px-4 py-3 border-b border-white/10 flex items-center justify-between z-20 relative">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]" />
                </div>

                {/* macOS Address Bar */}
                <div className="flex items-center gap-2 bg-black/50 border border-white/10 px-4 py-1.5 rounded-lg text-xs font-mono text-white/70 max-w-sm sm:max-w-md w-full justify-center shadow-inner">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">https://{project.domain}</span>
                </div>

                {/* Live Indicator */}
                <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-white/50">
                  <Globe className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '10s' }} />
                  <span>PRODUCTION</span>
                </div>
              </div>

              {/* Main Card Viewport */}
              <div className="relative w-full h-[460px] sm:h-[580px] overflow-hidden">
                {/* Project Showcase Background Image with Smooth Parallax Zoom */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1440px"
                    priority={index === 0}
                    className="object-cover object-top transition-all duration-700 brightness-[0.92] group-hover:brightness-100"
                  />
                </motion.div>

                {/* Gradient Overlays for Dynamic Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12]/70 via-transparent to-transparent hidden sm:block" />

                {/* Top Badge Metadata */}
                <div className="absolute top-6 inset-x-6 sm:inset-x-8 flex items-center justify-between text-xs font-mono z-10">
                  <div className="flex items-center gap-2">
                    <span className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white font-medium shadow-md">
                      {project.client}
                    </span>
                    <span className="bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 px-3 py-1.5 rounded-full font-semibold">
                      {project.year}
                    </span>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-white text-black hover:bg-emerald-400 hover:text-black font-semibold px-4 py-1.5 rounded-full transition-all duration-300 shadow-lg text-xs"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Bottom Content Area */}
                <div className="absolute bottom-6 sm:bottom-8 inset-x-6 sm:inset-x-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6 z-10">
                  <div className="max-w-2xl space-y-3">
                    <h3 className="font-syne font-bold text-2xl sm:text-4xl text-white group-hover:text-emerald-300 transition-colors duration-300 drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/80 font-sans max-w-xl line-clamp-2">
                      {project.subtitle}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono bg-white/15 backdrop-blur-md text-white/90 border border-white/20 px-3 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Circular Hover Action Arrow */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-emerald-400 group-hover:scale-110 group-hover:rotate-45 transition-all duration-500 shadow-2xl shrink-0 self-end sm:self-auto"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
