"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowUp, Github, Twitter, Linkedin, Dribbble } from "lucide-react";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Footer() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString("en-US", { timeZone: "UTC", hour: "2-digit", minute: "2-digit", second: "2-digit" }) + " UTC");
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/80 backdrop-blur-xl pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tight text-white">
                AURA<span className="text-accent-light">STUDIO</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-6">
              Engineering spatial computing platforms, high-performance WebGL 3D canvas experiences, and fluid digital craftsmanship.
            </p>
            <div className="flex items-center gap-3">
              {[Github, Twitter, Linkedin, Dribbble].map((Icon, idx) => (
                <MagneticButton key={idx} dataCursorText="Follow">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-300 hover:text-white hover:bg-accent/40 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-accent-light transition-colors">Home</Link></li>
              <li><Link href="#work" className="hover:text-accent-light transition-colors">Selected Work</Link></li>
              <li><Link href="#features" className="hover:text-accent-light transition-colors">Core Stack</Link></li>
              <li><Link href="#about" className="hover:text-accent-light transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Live Time & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                Studio Specs
              </h4>
              <div className="text-xs text-mono text-gray-400 space-y-1">
                <p>Status: <span className="text-emerald-400">Available for Q3/Q4</span></p>
                <p>Time: <span className="text-accent-light">{timeStr || "12:00:00 UTC"}</span></p>
              </div>
            </div>

            <div className="mt-8">
              <MagneticButton dataCursorText="Top" onClick={scrollToTop}>
                <button className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white glass-panel px-4 py-2 rounded-full">
                  <span>Back to top</span>
                  <ArrowUp className="w-3.5 h-3.5 text-accent-light" />
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} AURA STUDIO. Built with Next.js 15, React 19 & GSAP.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
