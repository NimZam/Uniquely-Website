"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

export function LumoraServices() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const services = [
    {
      id: "01",
      title: "Brand Direction",
      description: "Brand strategy and visual systems built with clarity. We define the visual and digital foundation for leading brands, taking product position into luxury and enterprise identity.",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=400&auto=format&fit=crop",
      ],
      tags: ["identity direction", "art direction", "visual language"],
    },
    {
      id: "02",
      title: "Digital Experience",
      description: "We create intuitive & scalable digital experiences across web & mobile platforms. Interactive webgl components and custom smooth scroll systems designed for high engagement.",
      images: [
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400&auto=format&fit=crop",
      ],
      tags: ["web architecture", "react & next.js", "three.js canvas"],
    },
    {
      id: "03",
      title: "Creative Systems",
      description: "Scalable component libraries, design system tokens, and multi-platform guidelines ensuring brand consistency across global engineering teams.",
      images: [
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
      ],
      tags: ["design tokens", "component libraries", "brand guidelines"],
    },
    {
      id: "04",
      title: "Motion & Atmosphere",
      description: "Sound design and high-end motion graphics for digital products. Interactive web animations, micro-interactions, and cinematic brand showreels.",
      images: [
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop",
      ],
      tags: ["gsap scrolltrigger", "lenis inertia", "webgl shaders"],
    },
  ];

  return (
    <section id="services" className="w-full px-4 sm:px-8 py-12 max-w-[1440px] mx-auto">
      {/* Dark Section Container */}
      <div className="bg-[#121316] text-white rounded-[36px] p-6 sm:p-12 border border-white/10 shadow-2xl">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 border-b border-white/10 pb-8 items-start">
          <div className="md:col-span-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-white/50">
              — SERVICES
            </span>
          </div>

          <div className="md:col-span-6">
            <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3 leading-tight">
              Crafting Experiences That Leave A Lasting Mark.
            </h2>
          </div>

          <div className="md:col-span-3 flex flex-col md:items-end justify-between h-full gap-4">
            <p className="text-xs text-white/60 leading-relaxed max-w-xs md:text-right">
              Custom-tailored for brands & scaleups looking for high-end digital presence.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {["STRATEGY", "EXPERIENCE", "MOTION"].map((pill) => (
                <span
                  key={pill}
                  className="text-[10px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services Accordion List */}
        <div className="divide-y divide-white/10">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.id} className="py-8 transition-colors">
                <div
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between cursor-pointer group"
                >
                  <div className="flex items-baseline gap-6 sm:gap-12">
                    <span className="text-xs font-mono text-white/40">{service.id}</span>
                    <h3 className="font-syne font-bold text-2xl sm:text-4xl text-white group-hover:text-white/80 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-all shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>

                {/* Expanded Details Content */}
                {isOpen && (
                  <div className="mt-6 pt-2 pl-10 sm:pl-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-6 space-y-6">
                      <p className="text-sm text-white/70 leading-relaxed font-light">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono bg-white/5 border border-white/10 text-white/70 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Previews */}
                    <div className="md:col-span-6 flex gap-4 overflow-hidden">
                      {service.images.map((imgUrl, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="relative h-44 w-44 sm:w-52 rounded-2xl overflow-hidden border border-white/10 shrink-0"
                        >
                          <Image
                            src={imgUrl}
                            alt={service.title}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Action Button */}
        <div className="pt-10 flex justify-center">
          <button className="px-8 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors shadow-lg">
            SEE ALL (4)
          </button>
        </div>
      </div>
    </section>
  );
}
