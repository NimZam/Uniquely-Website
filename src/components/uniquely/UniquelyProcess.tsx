"use client";

export function UniquelyProcess() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      text: "We study the core business needs of your brand before touch.",
    },
    {
      num: "02",
      title: "Construct",
      text: "We wireframe, build interactive prototypes, and design scalable architecture.",
    },
    {
      num: "03",
      title: "Direct",
      text: "Every animation and scroll frame is fine-tuned to perfection.",
    },
    {
      num: "04",
      title: "Release",
      text: "A seamless deployment prepared for scale.",
    },
  ];

  return (
    <section id="process" className="w-full px-4 sm:px-8 py-16 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-start border-b border-black/10 pb-8">
        <div className="md:col-span-3">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-black/60">
            — OUR PROCESS
          </span>
        </div>

        <div className="md:col-span-5">
          <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Our Process Moves Like Production.
          </h2>
        </div>

        <div className="md:col-span-4 flex items-end">
          <p className="text-xs text-black/70 leading-relaxed">
            Every successful project begins with a clear scope, high-fidelity visual exploration, and continuous testing throughout execution.
          </p>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.num}
            className="lumora-card-light rounded-3xl p-6 flex flex-col justify-between h-[300px] border border-black/10 hover:border-black/30 transition-all duration-300 group"
          >
            {/* Top Black Header Pill Strip */}
            <div className="space-y-4">
              <div className="w-full bg-black text-white px-4 py-2 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider flex justify-between items-center">
                <span>{step.title}</span>
              </div>
            </div>

            {/* Bottom Content */}
            <div>
              <span className="text-xs font-mono text-black/40 block mb-2">{step.num}</span>
              <h3 className="font-syne font-bold text-xl text-black mb-2 group-hover:text-accent-light transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-black/70 leading-relaxed font-normal">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
