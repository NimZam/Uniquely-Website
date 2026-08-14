import { NavItem, ProjectItem, FeatureItem, TestimonialItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "#work" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Aura Spatial OS",
    category: "3D & Spatial Design",
    description: "Next-gen spatial computing platform interface with custom shaders and fluid gesture responses.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    link: "#",
    tags: ["React 19", "Three.js", "GSAP", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "proj-2",
    title: "CyberPulse AI Studio",
    category: "Generative AI Suite",
    description: "Real-time audio visualizer & creative AI workspace with high-performance canvas rendering.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    year: "2025",
    link: "#",
    tags: ["Next.js 15", "WebGL", "Framer Motion"],
    featured: true,
  },
  {
    id: "proj-3",
    title: "Vortex Motion Systems",
    category: "Brand & Animation",
    description: "Immersive identity overhaul featuring interactive 3D hero physics and smooth scroll narratives.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    year: "2025",
    link: "#",
    tags: ["GSAP ScrollTrigger", "Lenis", "Tailwind 4"],
    featured: true,
  },
  {
    id: "proj-4",
    title: "Lumina Quantum Cloud",
    category: "Enterprise Fintech",
    description: "Glassmorphic analytics dashboard with real-time particle graph visualizers.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    year: "2026",
    link: "#",
    tags: ["TypeScript", "Three.js", "Canvas"],
    featured: false,
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "feat-1",
    title: "Smooth Scroll Engine",
    subtitle: "Lenis Integration",
    description: "Silky smooth inertia scrolling synchronized perfectly with GSAP ScrollTrigger timelines.",
    iconName: "Zap",
    badge: "60 FPS Smooth",
  },
  {
    id: "feat-2",
    title: "3D Immersive Hero",
    subtitle: "Three.js & R3F Canvas",
    description: "Interactive particle waves and responsive glass geometries reacting to cursor position.",
    iconName: "Box",
    badge: "WebGL / GPU",
  },
  {
    id: "feat-3",
    title: "Magnetic Micro-Interactions",
    subtitle: "Physics Hover Effects",
    description: "Custom physics-based magnetic buttons and smooth trailing spring cursor interaction.",
    iconName: "MousePointer",
    badge: "Framer Motion",
  },
  {
    id: "feat-4",
    title: "Glassmorphism Architecture",
    subtitle: "Tailwind CSS 4 System",
    description: "Curated multi-layered backdrop blurs, HSL color tokens, and responsive Bento Grid layouts.",
    iconName: "Layers",
    badge: "Design System",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "The combination of Lenis smooth scroll, GSAP ScrollTrigger reveals, and 3D webgl background created the most captivating web experience our brand has ever had.",
    author: "Elena Rostova",
    role: "Chief Design Officer",
    company: "Aura Dynamics",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "test-2",
    quote: "Performance is stellar. Next.js 15 App Router along with optimized Three.js canvas runs at a solid 60fps across desktop and mobile devices.",
    author: "Marcus Vance",
    role: "VP of Digital Engineering",
    company: "Vortex Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];
