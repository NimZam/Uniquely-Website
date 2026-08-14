"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const { x, y, targetHovered, hoverText } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (x > 0 && y > 0) {
      cursorX.set(x);
      cursorY.set(y);
      if (!isVisible) setIsVisible(true);
    }
  }, [x, y, cursorX, cursorY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer Glow Ring */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        animate={{
          scale: targetHovered ? 2.4 : 1,
          backgroundColor: targetHovered ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.05)",
          borderColor: targetHovered ? "rgba(192, 132, 252, 0.8)" : "rgba(255, 255, 255, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="-translate-x-1/2 -translate-y-1/2 absolute w-8 h-8 rounded-full border border-white/20 backdrop-blur-xs flex items-center justify-center transition-colors"
      >
        {hoverText && (
          <span className="text-[9px] font-bold tracking-wider uppercase text-white px-1 text-center">
            {hoverText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
        }}
        animate={{
          scale: targetHovered ? 0 : 1,
          opacity: targetHovered ? 0 : 1,
        }}
        className="-translate-x-1/2 -translate-y-1/2 absolute w-2 h-2 rounded-full bg-accent-light"
      />
    </div>
  );
}
