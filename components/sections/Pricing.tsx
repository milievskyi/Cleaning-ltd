"use client";

import RevealWrapper from "@/components/ui/RevealWrapper";
import TactileButton from "@/components/ui/TactileButton";
import Link from "next/link";
import { motion } from "framer-motion";

const tiers = [
  {
    id: "essential",
    name: "Essential Clean",
    subtitle: "Perfect for regular upkeep",
    price: null, // Placeholder — real pricing TBD
    features: [
      "HEPA vacuum all floors",
      "Eco-friendly surface sanitization",
      "Kitchen & bathroom deep clean",
      "Dusting all surfaces",
    ],
    cta: "Get Free Quote",
    variant: "outline" as const,
  },
  {
    id: "signature",
    name: "Signature Clean",
    subtitle: "Our most popular service",
    price: null,
    features: [
      "Everything in Essential",
      "Inside appliances (oven, fridge)",
      "Air quality treatment",
      "Upholstery allergen removal",
      "Detailed surface audit",
    ],
    cta: "Get Free Quote",
    variant: "primary" as const,
    highlight: true,
  },
  {
    id: "prestige",
    name: "Prestige Clean",
    subtitle: "White-glove full service",
    price: null,
    features: [
      "Everything in Signature",
      "Steam sterilization treatment",
      "Window interior cleaning",
      "24/7 priority re-service",
      "Airborne quality monitoring",
    ],
    cta: "Book a Consultation",
    variant: "primary" as const,
    dark: false,
    prestige: true,
  },
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 md:px-8 bg-surface-container-lowest dark:bg-[#0d1f17]">
      <div className="max-w-7xl mx-auto">
        <RevealWrapper className="text-center mb-20">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60 dark:text-primary-fixed/60 mb-3">
            Service Plans
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tight-tracking mb-5 text-on-surface dark:text-white">
            Find Your Plan
          </h2>
          <p className="text-on-surface-variant dark:text-white/55 text-lg font-light editorial-tracking max-w-lg mx-auto">
            Every home is different. Get a free quote and we&apos;ll recommend the right service for you.
          </p>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <RevealWrapper key={tier.id} delay={i * 0.1}>
              <div className="relative h-full perspective-1000">
                {/* Glow behind highlighted card */}
                {tier.highlight && (
                  <div className="absolute inset-0 bg-primary-fixed/30 rounded-[2rem] blur-3xl opacity-30 -z-10" />
                )}

                {/* Glow behind dark or prestige card */}
                {tier.prestige && (
                  <div className="absolute inset-0 bg-primary-container/20 rounded-[2rem] blur-3xl -z-10" />
                )}

                <motion.div
                  className={`relative flex flex-col h-full rounded-[2rem] p-10 border ${
                    tier.prestige
                      ? "bg-emerald-50 dark:bg-[#07130e] border-primary/20 backdrop-blur-3xl"
                      : tier.highlight
                      ? "glass-elevated border-primary/40 ring-1 ring-primary/20"
                      : "glass bg-white/60 dark:bg-white/5 border-outline-variant/10 dark:border-white/5"
                  }`}
                  whileHover={{ 
                    y: -6, 
                    scale: 1.01,
                    // Slightly increase shadow on hover based on theme
                    boxShadow: tier.dark 
                      ? "0 24px 48px rgba(255,255,255,0.03)" 
                      : "0 24px 48px rgba(0,53,39,0.08)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 24,
                    mass: 0.8
                  }}
                >
                  {/* Most popular badge */}
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-container text-white text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap z-10">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 mt-2 relative z-10">
                    <h3 className="text-2xl font-extrabold tight-tracking mb-1 text-emerald-950 dark:text-white">
                      {tier.name}
                    </h3>
                    <p className="text-sm font-light text-emerald-900/60 dark:text-white/50">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price placeholder */}
                  <div className="mb-8 relative z-10">
                    <p className="text-[13px] font-semibold text-emerald-900/50 dark:text-white/50">
                      Starting from
                    </p>
                    <p className="text-3xl font-extrabold tight-tracking mt-1 text-primary dark:text-primary-fixed">
                      Custom Quote
                    </p>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-4 mb-10 flex-grow relative z-10">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start text-sm font-light text-emerald-900/80 dark:text-white/60"
                      >
                        <span
                          className="material-symbols-outlined text-[16px] mr-3 mt-0.5 shrink-0 text-primary dark:text-primary-fixed"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="relative z-10">
                    <Link href="/contact" className="block outline-none">
                      <TactileButton
                        variant={tier.variant}
                        className="w-full justify-center"
                      >
                        {tier.cta}
                      </TactileButton>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Bottom note */}
        <RevealWrapper delay={0.35} className="text-center mt-12">
          <p className="text-[13px] text-on-surface-variant/60 dark:text-white/35 font-light">
            Not sure which plan is right for you?{" "}
            <Link
              href="/contact"
              className="text-primary dark:text-primary-fixed font-semibold hover:underline"
            >
              Talk to us — it&apos;s free.
            </Link>
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
