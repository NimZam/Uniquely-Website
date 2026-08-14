import { UniquelyHeader } from "@/components/uniquely/UniquelyHeader";
import { UniquelyProjects } from "@/components/uniquely/UniquelyProjects";
import { UniquelyFooter } from "@/components/uniquely/UniquelyFooter";

export default function WorkPage() {
  return (
    <div className="bg-[#f2f3f5] text-[#0d0e12] min-h-screen font-sans antialiased overflow-x-hidden pt-20">
      <UniquelyHeader />
      <main className="py-12">
        <UniquelyProjects />
      </main>
      <UniquelyFooter />
    </div>
  );
}
