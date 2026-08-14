"use client";

import { useEffect, useRef } from "react";
import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TextReveal } from "@/components/animations/TextReveal";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function ShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const totalWidth = containerRef.current!.scrollWidth - window.innerWidth + 120;

      gsap.to(containerRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-background overflow-hidden flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 w-full">
        <div className="flex items-center gap-2 text-accent-light font-mono text-sm uppercase tracking-wider mb-2">
          <span>01 / Portfolio</span>
        </div>
        <TextReveal
          text="Selected Case Studies & Works"
          as="h2"
          className="text-3xl sm:text-5xl font-black text-white"
        />
      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8 px-6 sm:px-12 w-max"
        >
          {PROJECTS.map((project) => (
            <div key={project.id} className="w-[320px] sm:w-[420px] shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
