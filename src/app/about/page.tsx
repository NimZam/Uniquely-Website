"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Star, 
  Sparkles, 
  Cpu, 
  Globe, 
  Zap,
  ExternalLink,
  ChevronDown,
  Layers,
  Code,
  Terminal,
  ShieldCheck,
  Award,
  Users,
  Compass,
  CheckCircle2
} from "lucide-react";
import { UniquelyHeader } from "@/components/uniquely/UniquelyHeader";
import { UniquelyFooter } from "@/components/uniquely/UniquelyFooter";

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStackCategory, setActiveStackCategory] = useState<"frontend" | "backend" | "design">("frontend");

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  ];

  const timeline = [
    {
      year: "2022",
      title: "Lab Foundation",
      description: "Founded in Colombo, Sri Lanka as a high-end web & software engineering laboratory.",
      tag: "ORIGIN",
    },
    {
      year: "2023",
      title: "3D & Motion Engine",
      description: "Pioneered Three.js WebGL, GSAP physics micro-interactions, and custom design tokens.",
      tag: "EVOLUTION",
    },
    {
      year: "2024",
      title: "Global Scale",
      description: "Expanded production across North America, Europe & Asia, deploying 150+ client systems.",
      tag: "SCALE",
    },
    {
      year: "2025–2026",
      title: "Next.js 15 Standalone",
      description: "Architecting Next 15 standalone servers, React 19 server components & automated Docker VPS pipelines.",
      tag: "PRESENT",
    },
  ];

  const stackCategories = {
    frontend: [
      { name: "Next.js 15", desc: "App Router, Standalone Server & Edge Cache", level: "CORE ENGINE" },
      { name: "React 19", desc: "Server Components & Concurrent Suspense", level: "UI CORE" },
      { name: "Three.js & R3F", desc: "Interactive 3D WebGL Canvas Environments", level: "SPATIAL WEB" },
      { name: "Framer Motion & GSAP", desc: "Fluid Physics-Based Micro-Interactions", level: "ANIMATION" },
      { name: "TailwindCSS & Syne", desc: "Bespoke Tokens & High-Contrast Typography", level: "DESIGN TOKENS" },
    ],
    backend: [
      { name: "TypeScript", desc: "Strict End-to-End Type Safety across Stack", level: "LANGUAGE" },
      { name: "Docker & Compose", desc: "Containerized VPS Deployments & Production Builds", level: "DEVOPS" },
      { name: "GitHub Actions", desc: "Automated CI/CD Pipelines & Self-Healing Workflows", level: "CI/CD" },
      { name: "Node.js & REST APIs", desc: "High-Throughput Microservice Architecture", level: "SERVER" },
      { name: "PostgreSQL & Supabase", desc: "Scalable Relational Databases & Edge Auth", level: "DATABASE" },
    ],
    design: [
      { name: "Figma Design Systems", desc: "Bespoke UI Token Architecture & Component Libraries", level: "UI/UX" },
      { name: "Aesthetic Direction", desc: "Non-Generic Visual Identity & Minimalist Polish", level: "BRANDING" },
      { name: "Adaptive Fluidity", desc: "Flawless Multi-Device Responsiveness (Mobile to 4K)", level: "LAYOUT" },
      { name: "Performance Auditing", desc: "Lighthouse 100 & Core Web Vitals Optimization", level: "SEO ARCHITECTURE" },
    ],
  };

  const pillars = [
    {
      number: "01",
      title: "Bespoke Engineering",
      description: "Zero generic templates. Every line of code, typography ratio, and animation curves are custom-built for your brand.",
      icon: Cpu,
    },
    {
      number: "02",
      title: "Sub-Second Speed",
      description: "Built on Next.js 15 standalone architecture for instant page loads, sub-second TTFB, and top-tier Lighthouse scores.",
      icon: Zap,
    },
    {
      number: "03",
      title: "High-Conversion UX",
      description: "We merge visual aesthetics with strategic user psychology, transforming visitors into high-ticket clients and partners.",
      icon: Sparkles,
    },
    {
      number: "04",
      title: "Direct Founder Access",
      description: "You work directly with lead engineers and creative directors — zero corporate middle-management bloat.",
      icon: Globe,
    },
  ];

  const faqs = [
    {
      question: "What digital services does Uniquely Technologies provide?",
      answer: "We specialize in custom web platform development, high-end visual brand architecture, cloud application engineering, e-commerce solutions, and technical SEO optimization tailored for scaling businesses.",
    },
    {
      question: "Where is Uniquely Technologies located, and do you work globally?",
      answer: "Our core studio is based in Colombo, Sri Lanka, but we operate as a global production studio serving clients across North America, Europe, Australia, and Asia with flexible communication channels.",
    },
    {
      question: "How long does a typical web architecture project take?",
      answer: "Bespoke marketing platforms and corporate web systems typically take 3 to 6 weeks from initial strategy to launch. Complex web applications and SaaS platforms range between 6 to 12 weeks depending on feature scope.",
    },
    {
      question: "What tech stack do you build with?",
      answer: "Our modern stack includes Next.js 15, React 19, TypeScript, TailwindCSS, Framer Motion, Three.js, Node.js, and containerized Docker VPS CI/CD pipelines.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0b0d] text-white selection:bg-emerald-500 selection:text-black">
      {/* Navigation Header */}
      <UniquelyHeader />

      {/* Hero Section */}
      <section className="w-full px-4 sm:px-8 pt-28 sm:pt-36 pb-16 max-w-[1440px] mx-auto relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="space-y-6 relative z-10">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-white/90">
              COLOMBO, SRI LANKA • GLOBAL DIGITAL INNOVATION STUDIO
            </span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] max-w-5xl"
          >
            We Engineer Digital Products That Command Attention & Scale.
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-2xl text-white/70 font-light max-w-3xl leading-relaxed"
          >
            Uniquely Technologies is a boutique digital innovation studio. We combine strategic visual direction, 3D spatial web design, and cloud-native software engineering to elevate ambitious brands worldwide.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="mailto:info@uniquelytechnologies.com"
              className="px-8 py-4 rounded-full bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center gap-2.5 group"
            >
              <span>Book A Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/work"
              className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all duration-300 shadow-sm flex items-center gap-2"
            >
              <span>Explore Selected Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Hero Studio Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="relative w-full min-h-[380px] sm:h-[560px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 shadow-2xl mt-12 group"
        >
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt="Uniquely Technologies Studio Architecture"
            fill
            priority
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-black/40 to-transparent" />

          {/* Floating Metadata */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white z-10">
            <div className="max-w-md space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-wider uppercase text-emerald-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>STUDIO HEADQUARTERS • COLOMBO</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-white/90 leading-relaxed">
                Building Next.js 15 platforms, custom brand architecture, and cloud systems for forward-thinking clients worldwide.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full text-xs font-mono shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>EST. 2022 • GLOBAL PRODUCTION</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Metrics */}
      <section className="w-full px-4 sm:px-8 py-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:h-[280px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group">
            <div>
              <span className="text-[11px] font-mono uppercase text-white/50 font-medium tracking-wider">
                INDUSTRY EXPERIENCE
              </span>
              <h3 className="font-syne font-black text-5xl sm:text-6xl text-white mt-2">4+ Yrs</h3>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-white/70 leading-relaxed">
                Delivering high-performance visual, web, and spatial software architecture.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:h-[280px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl">
            <div>
              <span className="text-[11px] font-mono uppercase text-white/50 font-medium tracking-wider">
                PROJECTS DELIVERED
              </span>
              <h3 className="font-syne font-black text-5xl sm:text-6xl text-white mt-2">150+</h3>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-white/70 leading-relaxed">
                Successfully shipped custom web platforms, e-commerce, and SaaS tools.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:h-[280px] bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl">
            <div>
              <div className="flex -space-x-2 overflow-hidden mb-3">
                {avatars.map((url, idx) => (
                  <div key={idx} className="inline-block h-7 w-7 rounded-full ring-2 ring-black overflow-hidden relative shadow-sm">
                    <Image src={url} alt="Collaborator" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-mono uppercase text-white/50 font-medium tracking-wider">
                GLOBAL PARTNERSHIPS
              </span>
              <h3 className="font-syne font-black text-4xl sm:text-5xl text-white mt-1">48+</h3>
            </div>
            <div className="border-t border-white/10 pt-4">
              <p className="text-xs text-white/70 leading-relaxed">
                Partnering with founders across North America, Europe, Australia & Asia.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:h-[280px] bg-gradient-to-br from-neutral-900 to-black border border-white/15 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase text-white/50 tracking-wider">VERIFIED RATING</span>
                <span className="flex items-center gap-1 text-yellow-400 text-xs font-bold font-mono bg-yellow-400/10 px-2 py-0.5 rounded-full border border-yellow-400/20">
                  4.9 <Star className="w-3.5 h-3.5 fill-yellow-400" />
                </span>
              </div>
              <h3 className="font-syne font-extrabold text-3xl text-white mt-2">Google Profile</h3>
            </div>
            <div className="border-t border-white/10 pt-4">
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

      {/* Core Studio Pillars */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto">
        <div className="bg-white/[0.02] backdrop-blur-2xl text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-14 border border-white/10 shadow-2xl">
          <div className="max-w-2xl mb-10 sm:mb-12 space-y-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 block">
              — OUR CORE PILLARS
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Engineering Precision Meets Aesthetic Distinction.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pIdx}
                  className="space-y-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400 font-bold">{pillar.number}</span>
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
                      <Icon className="w-4 h-4 text-white group-hover:text-black transition-colors" />
                    </div>
                  </div>
                  <h3 className="font-syne font-bold text-xl text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Tech Engine Showcase */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto">
        <div className="bg-white/[0.02] backdrop-blur-2xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 border border-white/10 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 block">
                — OUR ENGINEERING STACK
              </span>
              <h2 className="font-syne text-2xl sm:text-4xl font-bold text-white">
                Modern Tools For High-Performance Web Architecture.
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-white/[0.05] border border-white/10 shrink-0">
              <button
                onClick={() => setActiveStackCategory("frontend")}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  activeStackCategory === "frontend"
                    ? "bg-emerald-400 text-black shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                FRONTEND & 3D
              </button>
              <button
                onClick={() => setActiveStackCategory("backend")}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  activeStackCategory === "backend"
                    ? "bg-emerald-400 text-black shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                BACKEND & DEVOPS
              </button>
              <button
                onClick={() => setActiveStackCategory("design")}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all ${
                  activeStackCategory === "design"
                    ? "bg-emerald-400 text-black shadow-md"
                    : "text-white/60 hover:text-white"
                }`}
              >
                DESIGN & UX
              </button>
            </div>
          </div>

          {/* Stack Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stackCategories[activeStackCategory].map((item, sIdx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/40 hover:bg-white/[0.06] transition-all shadow-xs group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-syne font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-emerald-400 font-semibold border border-white/10">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-mono">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Timeline */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto">
        <div className="bg-white/[0.02] backdrop-blur-2xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 border border-white/10 shadow-xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 block">
              — STUDIO TIMELINE & EVOLUTION
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl font-bold text-white">
              From Local Innovation Lab To Global Production Studio.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4">
            {timeline.map((step, tIdx) => (
              <div
                key={step.year}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 shadow-sm relative flex flex-col justify-between space-y-4 hover:border-emerald-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-syne font-black text-3xl text-white">{step.year}</span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="font-syne font-bold text-base text-white mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Google Client Spotlight (KAID Architecture) */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto">
        <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-14 border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Owner Image */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-emerald-400/40 shadow-2xl ring-4 ring-white/10 shrink-0">
                <Image
                  src="/images/lasitha.png"
                  alt="Lasitha Kulasekara - Owner of KAID Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-yellow-400">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  VERIFIED GOOGLE BUSINESS REVIEW
                </span>
              </div>

              <blockquote className="font-syne text-lg sm:text-2xl md:text-3xl font-medium text-white leading-snug">
                "Uniquely Technologies brought our vision to life with a clean, user-friendly, modern website for KAID Architecture. Professional, creative, and highly responsive throughout."
              </blockquote>

              <div>
                <h4 className="font-syne font-bold text-lg text-white">Lasitha Kulasekara</h4>
                <p className="text-xs font-mono text-white/60 uppercase">Owner, KAID Architecture</p>
              </div>

              <a
                href="https://share.google/2RQyGGvM61RGyC2EJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors pt-3 border-t border-white/10"
              >
                <span>Read Full Review on Google Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto">
        <div className="bg-white/[0.02] backdrop-blur-2xl rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 border border-white/10 shadow-xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-emerald-400 block">
              — FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-syne text-2xl sm:text-4xl font-bold text-white">
              Everything You Need To Know About Partnering With Us.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 overflow-hidden transition-colors bg-white/[0.03]"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-syne font-bold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-emerald-400 text-black border-emerald-400" : "bg-white/10 text-white"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/10 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call To Action Box */}
      <section className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto text-center">
        <div className="bg-gradient-to-b from-neutral-900 to-black text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-16 border border-white/15 shadow-2xl space-y-6">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            START A PROJECT WITH US
          </span>
          <h2 className="font-syne font-bold text-3xl sm:text-6xl text-white max-w-3xl mx-auto leading-tight">
            Ready To Build Your Next Digital Product?
          </h2>
          <p className="text-xs sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed">
            Whether you need a bespoke web platform, custom software architecture, or a brand refresh — let's create something extraordinary.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@uniquelytechnologies.com"
              className="px-8 py-4 rounded-full bg-emerald-400 text-black text-xs font-bold uppercase tracking-wider hover:bg-emerald-300 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center gap-2 group"
            >
              <span>Book A Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/work"
              className="px-8 py-4 rounded-full bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-all shadow-xl flex items-center gap-2"
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <UniquelyFooter />
    </main>
  );
}

