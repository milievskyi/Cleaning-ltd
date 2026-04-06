import RevealWrapper from "@/components/ui/RevealWrapper";
import TactileButton from "@/components/ui/TactileButton";
import Link from "next/link";

const neighbourhoods = [
  "Downtown", "Glenora", "Westmount", "Oliver", "Strathcona",
  "Riverbend", "Windermere", "Terwillegar", "Rutherford", "South Edmonton",
  "St. Albert", "Sherwood Park", "Leduc", "Spruce Grove",
];

export default function CoverageArea() {
  return (
    <section className="py-32 px-6 md:px-8 bg-surface dark:bg-[#0a1510] mesh-texture">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <RevealWrapper>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60 dark:text-primary-fixed/60 mb-3">
              Service Area
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking mb-6 text-on-surface dark:text-white">
              Serving Edmonton
              <br />
              & Surrounding Area
            </h2>
            <p className="text-on-surface-variant dark:text-white/55 text-lg font-light leading-relaxed mb-8 max-w-md editorial-tracking">
              We cover all major Edmonton neighbourhoods and nearby communities. Not sure if we service your area? Give us a call — we&apos;ll make it work.
            </p>

            {/* Neighbourhood chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {neighbourhoods.map((n) => (
                <span
                  key={n}
                  className="px-3.5 py-1.5 glass text-[12px] font-semibold text-on-surface dark:text-white/80 rounded-full"
                >
                  {n}
                </span>
              ))}
            </div>

            <Link href="/contact">
              <TactileButton size="md">
                Check Your Area
              </TactileButton>
            </Link>
          </RevealWrapper>

          {/* Right — map placeholder */}
          <RevealWrapper delay={0.15}>
            <div className="glass-elevated rounded-[2rem] overflow-hidden aspect-[4/3] flex items-center justify-center relative">
              {/* TODO: Replace with actual Google Maps embed */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-primary-fixed/5" />
              <div className="text-center relative z-10 px-8">
                <span
                  className="material-symbols-outlined text-6xl text-primary/30 dark:text-primary-fixed/30 mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
                <p className="text-on-surface-variant dark:text-white/40 text-sm font-light">
                  Edmonton, Alberta
                </p>
                <p className="text-[11px] text-on-surface-variant/50 dark:text-white/25 mt-2 font-light">
                  {/* TODO: Embed Google Maps iframe here */}
                  Map coming soon
                </p>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
