"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function LumoraProjects() {
  const projects = [
    {
      id: "vortex",
      title: "Vortex — Brand Transformation",
      description: "Full-scale brand identity overhaul for Next-gen AI fashion platform.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop",
      tags: ["Brand Identity", "Motion Design", "3D Canvas"],
      client: "Vortex",
      year: "2026",
      logo: "Vortex",
    },
    {
      id: "storefront",
      title: "Storefront Sales Analytics",
      description: "A synchronized e-commerce sales and operations suite built for high volume brand scale.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
      tags: ["UI/UX Design", "Website Design", "Dashboard"],
      client: "Storefront",
      year: "2025",
      logo: "Storefront",
    },
    {
      id: "novaflow",
      title: "NovaFlow Design System",
      description: "A composable design system and UI ecosystem across cloud products.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
      tags: ["Design System", "Product Design", "Interactive Web"],
      client: "NovaFlow",
      year: "2026",
      logo: "NovaFlow",
    },
  ];

  return (
    <section id="projects" className="w-full px-4 sm:px-8 py-16 max-w-[1440px] mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-4">
        <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/60">
          — FEATURED PROJECTS
        </span>
        <span className="text-xs font-mono text-black/40">
          (03 CASE STUDIES)
        </span>
      </div>

      {/* Projects List */}
      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full h-[480px] sm:h-[560px] rounded-[32px] overflow-hidden border border-black/10 shadow-2xl group cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

            {/* Top Bar Metadata Inside Card */}
            <div className="absolute top-6 inset-x-8 flex items-center justify-between text-white text-xs font-mono">
              <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                CLIENT: {project.client}
              </span>
              <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                YEAR: {project.year}
              </span>
            </div>

            {/* Center Logo Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3 className="font-syne font-black text-4xl sm:text-6xl text-white/90 drop-shadow-xl tracking-tight">
                {project.logo}
              </h3>
            </div>

            {/* Bottom Content Bar Inside Card */}
            <div className="absolute bottom-6 inset-x-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-syne font-bold text-2xl sm:text-4xl text-white mb-3 group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Circle Button */}
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-accent-light group-hover:text-white transition-all shadow-xl shrink-0">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
