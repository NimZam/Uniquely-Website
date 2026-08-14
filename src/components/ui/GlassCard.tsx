"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden",
        hoverEffect && "glass-card-hover",
        className
      )}
    >
      {/* Glow highlight corner */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-glow rounded-full blur-3xl pointer-events-none" />
      {children}
    </div>
  );
}
