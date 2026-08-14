import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { CustomCursor } from "@/components/animations/CustomCursor";

export const metadata: Metadata = {
  title: "Uniquely® — Digital Products, Brands & Atmosphere Architecture",
  description: "Uniquely® is a full-service studio producing digital products, visual identity systems, and spatial web architecture.",
  keywords: ["Uniquely", "Next.js 15", "React 19", "Brand Direction", "Digital Products", "Motion Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#f2f3f5] text-[#0d0e12] antialiased min-h-screen flex flex-col">
        <SmoothScroll>
          <CustomCursor />
          <main className="flex-1">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
