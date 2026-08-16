"use client";

import { useState } from "react";
import { Plus, Minus, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function UniquelyServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    {
      id: "01",
      title: "Website Development & Engineering",
      subtitle: "High-Performance Web Platforms",
      description: "Bespoke, lightning-fast web applications built with modern frameworks. Engineered for speed, security, SEO dominance, and high-conversion UX.",
      timeline: "2 – 4 Weeks",
      engagement: "Custom Design & Full-Stack Development",
      deliverables: [
        "Custom Next.js & React 19 Architecture",
        "Full-Stack Web App Development",
        "WordPress & Headless CMS Integration",
        "Speed & Core Web Vitals Optimization",
      ],
      tags: ["Next.js", "React 19", "WordPress", "TailwindCSS", "Framer Motion", "TypeScript"],
    },
    {
      id: "02",
      title: "Digital Marketing & Growth Strategy",
      subtitle: "Data-Driven Performance Campaigns",
      description: "Targeted campaigns and search architecture designed to scale reach, generate qualified leads, and maximize return on digital investment.",
      timeline: "Ongoing / Campaign Based",
      engagement: "Growth Architecture & Analytics",
      deliverables: [
        "SEO Strategy & Technical Audits",
        "High-Converting Landing Page Design",
        "Performance Analytics & Funnel Tracking",
        "Multi-Channel Campaign Strategy",
      ],
      tags: ["SEO Optimization", "Conversion Tracking", "Funnel Analytics", "Growth Strategy"],
    },
    {
      id: "03",
      title: "Brand Identity & Visual Architecture",
      subtitle: "Distinctive Digital Brands",
      description: "We craft unique visual identities, logo systems, and typography palettes that make your brand unmistakable in competitive markets.",
      timeline: "2 – 3 Weeks",
      engagement: "Brand Guidelines & System Architecture",
      deliverables: [
        "Logo Design & Monogram Architecture",
        "Design Systems & Component Libraries",
        "Typography, Color & Atmosphere Guidelines",
        "Brand Assets & Digital Style Guides",
      ],
      tags: ["Visual Identity", "Design Systems", "Typography", "Motion Graphics"],
    },
    {
      id: "04",
      title: "Social Media & Content Strategy",
      subtitle: "Community Building & Brand Reach",
      description: "Creative content strategy and brand storytelling that builds active communities and amplifies your voice across all digital platforms.",
      timeline: "Monthly Retainer",
      engagement: "Content Production & Community Growth",
      deliverables: [
        "Social Content Creation & Motion Design",
        "Audience Growth Strategy",
        "Brand Voice & Messaging Framework",
        "Cross-Platform Campaign Execution",
      ],
      tags: ["Content Creation", "Community Growth", "Brand Storytelling", "Social Motion"],
    },
    {
      id: "05",
      title: "Custom App & Software Engineering",
      subtitle: "Scalable Mobile & SaaS Applications",
      description: "Intuitive, high-performance mobile and web software solutions engineered to solve complex business workflows with effortless UX.",
      timeline: "4 – 8 Weeks",
      engagement: "Full Product Lifecycle",
      deliverables: [
        "Cross-Platform iOS & Android Apps",
        "Custom SaaS Platform Engineering",
        "REST & GraphQL API Architecture",
        "Cloud Infrastructure & Deployment",
      ],
      tags: ["React Native", "iOS / Android", "SaaS Architecture", "Cloud API"],
    },
  ];

  return (
    <section id="services" className="w-full px-4 sm:px-8 py-10 sm:py-12 max-w-[1440px] mx-auto">
      {/* Dark Section Container */}
      <div className="bg-[#121316] text-white rounded-[28px] sm:rounded-[36px] p-5 sm:p-12 border border-white/10 shadow-2xl">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mb-8 sm:mb-12 border-b border-white/10 pb-6 sm:pb-8 items-start">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-white/50">
              — OUR SERVICES
            </span>
          </div>

          <div className="md:col-span-6">
            <h2 className="font-syne text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-2 sm:mb-3 leading-tight">
              Comprehensive Digital Solutions For Growing Brands.
            </h2>
          </div>

          <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full gap-4">
            <p className="text-xs text-white/60 leading-relaxed max-w-xs md:text-right">
              We provide a complete suite of engineering and design solutions tailored to elevate your business.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {["DEVELOPMENT", "BRANDING", "STRATEGY"].map((pill) => (
                <span
                  key={pill}
                  className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services Accordion List (Text-Only, Modern & Clean) */}
        <div className="divide-y divide-white/10">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.id} className="py-6 sm:py-8 transition-colors">
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-start sm:items-center justify-between cursor-pointer group select-none gap-3"
                >
                  <div className="flex items-start sm:items-baseline gap-3 sm:gap-12 min-w-0 pr-2">
                    <span className="text-xs font-mono text-white/40 pt-1 sm:pt-0 shrink-0">{service.id}</span>
                    <div className="min-w-0">
                      <h3 className="font-syne font-bold text-lg sm:text-2xl md:text-4xl text-white group-hover:text-white/80 transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-[11px] sm:text-xs font-mono text-emerald-400/80 block mt-1">
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  <button
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 transition-all shrink-0 mt-0.5 sm:mt-0 ${
                      isOpen ? "bg-white text-black border-white" : "group-hover:border-white/50"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </button>
                </div>

                {/* Expanded Clean Text Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-8 pt-6 pl-0 sm:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/5">
                        {/* Left Column: Description & Deliverables */}
                        <div className="lg:col-span-7 space-y-6">
                          <p className="text-sm text-white/80 leading-relaxed font-normal">
                            {service.description}
                          </p>

                          {/* Deliverables Grid */}
                          <div>
                            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-3">
                              CORE DELIVERABLES & CAPABILITIES
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {service.deliverables.map((item, dIdx) => (
                                <div
                                  key={dIdx}
                                  className="flex items-center gap-2.5 text-xs text-white/90 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2.5"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-2 pt-1">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white/70 px-3 py-1 rounded-full border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right Column: Engagement & Inquiry Box */}
                        <div className="lg:col-span-5">
                          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-5">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                              <span className="text-[11px] font-mono uppercase text-white/50">
                                ESTIMATED TIMELINE
                              </span>
                              <span className="text-xs font-semibold font-syne text-emerald-400">
                                {service.timeline}
                              </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                              <span className="text-[11px] font-mono uppercase text-white/50">
                                ENGAGEMENT TYPE
                              </span>
                              <span className="text-xs font-medium text-white/90">
                                {service.engagement}
                              </span>
                            </div>

                            <a
                              href="mailto:info@uniquelytechnologies.com"
                              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white hover:text-black border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn"
                            >
                              <span>Inquire About This Service</span>
                              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Action Button */}
        <div className="pt-10 flex justify-center">
          <a
            href="mailto:info@uniquelytechnologies.com"
            className="px-8 py-3.5 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-lg flex items-center gap-2 group"
          >
            <span>Book A Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}


