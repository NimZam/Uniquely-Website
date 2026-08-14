"use client";

import { ProjectItem } from "@/types";
import { ParallaxImage } from "@/components/animations/ParallaxImage";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col h-full rounded-2xl glass-card p-4 transition-all duration-500 hover:border-accent/40">
      {/* Image Banner */}
      <div className="relative h-72 w-full mb-5 rounded-xl overflow-hidden">
        <ParallaxImage
          src={project.image}
          alt={project.title}
          className="h-full w-full"
        />
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-accent-light">
          {project.category}
        </div>
      </div>

      {/* Info Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="font-heading font-bold text-xl text-white group-hover:text-accent-light transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-gray-400 font-mono">{project.year}</span>
          </div>

          <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tags & Action Link */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <MagneticButton dataCursorText="View">
            <a
              href={project.link}
              aria-label={`View ${project.title}`}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent hover:text-white transition-colors flex items-center justify-center text-gray-300"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
