"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealWrapper from "@/components/ui/RevealWrapper";

const services = [
  {
    id: "hepa",
    icon: "pets",
    title: "Pet-Safe Cleaning",
    description:
      "Specialized HEPA filtration and enzyme-based cleaning designed for homes with pets. Removes allergens, dander, and odors without harsh chemicals — safe for your animals and your family.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVWZvY6f4F-alJxgimDawctrt-8nbyorin7RaP-3k9QEuT3HOv2yqZGuMm8odiVZ-Vky6NnoCCDF5q-mg0A7GNXTREhGAHQP2UgHwg4b79VMOCAPY1tItjiQkjegn-fSuVXpr1D1DZFgkjBVWWwPfGENLTnK1au-IatPfN_N1UUXcyUfBlNpKSfgoHLUma2TIa0cftfSfGBPqYEFNXfhMeRFwthPbLT6CTQFH8EOBUAVBlR_V_rvuPkIfHk6PHBkJFmdkey7GV2qw",
    imageAlt: "Clean minimalist living room with dog",
    span: "lg:col-span-8",
  },
  {
    id: "air",
    icon: "airwave",
    title: "Air Quality Treatment",
    description:
      "Professional-grade air purification that captures 99.97% of airborne particles — dust, pollen, mold spores — using medical-grade HEPA systems.",
    badge: "HEPA 13",
    span: "lg:col-span-4",
    dark: true,
  },
  {
    id: "botanical",
    icon: "spa",
    title: "Eco-Friendly Disinfection",
    description:
      "Non-toxic botanical disinfectants that neutralize bacteria and viruses without harmful residues. Safe for children, pets, and the Canadian environment.",
    tags: ["Medical-Grade", "Biodegradable"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoDmm9xuIcpdSef4Jktl5aYfLX-mFyriUL73Tpz2jJrlxPuATLUqN2OiVWb3fHGJGZjI1ejG7IRTWiwRvqIGO5f2BJ56iXEaEyxWaC6FR5plv71etaurcv5UY517oKcRN-ufRygqw7H0ky1FK_C20YiEa_aU5Q-7L_M5VmfWtmjX_Opwh-LJAemjuRklKJL97kSUlJ3DhNGKu3DN-Ud7_i9tRF-0OkyVKVve7xJs4U2QqDDSgJ4RsWb0XbHqtmagjYbadI3Ao-gKg",
    imageAlt: "Abstract Canadian pine forest",
    span: "lg:col-span-12",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-8 bg-surface dark:bg-[#0a1510]">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <RevealWrapper className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60 dark:text-primary-fixed/60 mb-3">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tight-tracking text-on-surface dark:text-white mb-4">
              Deep Residential Cleaning
            </h2>
            <p className="text-on-surface-variant dark:text-white/55 text-lg max-w-xl font-light leading-relaxed editorial-tracking">
              Professional-grade equipment and eco-friendly products — every surface, every corner, every time.
            </p>
          </div>
          <div className="hidden md:block h-px flex-grow bg-outline-variant/20 dark:bg-white/8 ml-12" />
        </RevealWrapper>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Card 1 — Pet-Safe, wide */}
          <RevealWrapper delay={0.05} className={services[0].span}>
            <motion.div
              className="group relative overflow-hidden rounded-[2rem] bg-surface-container-low dark:bg-white/5 p-10 md:p-12 h-full cursor-pointer"
              whileHover={{ 
                y: -6, 
                backgroundColor: "rgba(236,238,240,1)",
                boxShadow: "0 24px 48px rgba(0,53,39,0.08)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary dark:text-primary-fixed mb-6 block transition-transform duration-500 group-hover:scale-110">
                  {services[0].icon}
                </span>
                <h3 className="text-3xl font-extrabold tight-tracking mb-4 text-on-surface dark:text-white">
                  {services[0].title}
                </h3>
                <p className="text-on-surface-variant dark:text-white/55 text-base leading-relaxed max-w-md font-light">
                  {services[0].description}
                </p>
              </div>
              <div className="absolute right-0 bottom-0 h-full w-2/5 overflow-hidden">
                <Image
                  src={services[0].image!}
                  alt={services[0].imageAlt!}
                  fill
                  loading="lazy"
                  className="object-cover opacity-15 group-hover:opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </motion.div>
          </RevealWrapper>

          {/* Card 2 — Air Quality, dark */}
          <RevealWrapper delay={0.1} className={services[1].span}>
            <motion.div 
              className="group relative overflow-hidden rounded-[2rem] bg-primary-container dark:bg-primary/80 p-10 md:p-12 h-full flex flex-col justify-between cursor-pointer"
              whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(6,78,59,0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary-fixed mb-6 block transition-transform duration-500 group-hover:-rotate-12">
                  {services[1].icon}
                </span>
                <h3 className="text-3xl font-extrabold tight-tracking mb-4 text-white">
                  {services[1].title}
                </h3>
                <p className="text-primary-fixed/75 text-base leading-relaxed font-light">
                  {services[1].description}
                </p>
              </div>
              <div className="relative z-10 mt-8 text-7xl font-extrabold tight-tracking text-white/10 group-hover:text-white/20 transition-colors duration-500 select-none">
                {services[1].badge}
              </div>
            </motion.div>
          </RevealWrapper>

          {/* Card 3 — Eco Disinfection, full width */}
          <RevealWrapper delay={0.15} className={services[2].span}>
            <motion.div 
              className="group glass rounded-[2rem] p-10 md:p-12 flex flex-col md:flex-row items-center gap-10 cursor-pointer"
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 24px 48px rgba(0,53,39,0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
            >
              <div className="w-full md:w-1/3 overflow-hidden rounded-2xl shrink-0">
                <Image
                  src={services[2].image!}
                  alt={services[2].imageAlt!}
                  width={400}
                  height={288}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div>
                <span className="material-symbols-outlined text-3xl text-primary dark:text-primary-fixed mb-5 block">
                  {services[2].icon}
                </span>
                <h3 className="text-3xl font-extrabold tight-tracking mb-4 text-on-surface dark:text-white">
                  {services[2].title}
                </h3>
                <p className="text-on-surface-variant dark:text-white/55 text-lg leading-relaxed mb-7 font-light editorial-tracking">
                  {services[2].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {services[2].tags!.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-emerald-50 dark:bg-primary-fixed/10 text-emerald-800 dark:text-primary-fixed text-[11px] font-bold uppercase tracking-[0.25em] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
