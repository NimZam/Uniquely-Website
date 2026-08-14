import { UniquelyHeader } from "@/components/uniquely/UniquelyHeader";
import { UniquelyHero } from "@/components/uniquely/UniquelyHero";
import { UniquelyAbout } from "@/components/uniquely/UniquelyAbout";
import { UniquelyServices } from "@/components/uniquely/UniquelyServices";
import { UniquelyTestimonials } from "@/components/uniquely/UniquelyTestimonials";
import { UniquelyFooter } from "@/components/uniquely/UniquelyFooter";

export default function Home() {
  return (
    <div className="bg-[#f2f3f5] text-[#0d0e12] min-h-screen font-sans antialiased overflow-x-hidden">
      <UniquelyHeader />
      <UniquelyHero />
      <UniquelyAbout />
      <UniquelyServices />
      <UniquelyTestimonials />
      <UniquelyFooter />
    </div>
  );
}
