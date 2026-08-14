"use client";

import { useState, useEffect } from "react";

export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  targetHovered: boolean;
  hoverText?: string;
}

export function useMousePosition() {
  const [mousePos, setMousePos] = useState<MousePosition>({
    x: -100,
    y: -100,
    normalizedX: 0,
    normalizedY: 0,
    targetHovered: false,
    hoverText: "",
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const target = e.target as HTMLElement | null;
      const hoverElement = target?.closest("[data-cursor]") as HTMLElement | null;

      const targetHovered = !!hoverElement;
      const hoverText = hoverElement?.getAttribute("data-cursor-text") || "";

      setMousePos({
        x: clientX,
        y: clientY,
        normalizedX: (clientX / innerWidth) * 2 - 1,
        normalizedY: -(clientY / innerHeight) * 2 + 1,
        targetHovered,
        hoverText,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return mousePos;
}
