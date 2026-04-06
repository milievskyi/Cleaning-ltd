import RevealWrapper from "@/components/ui/RevealWrapper";
import TactileButton from "@/components/ui/TactileButton";
import Link from "next/link";

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
    variant: "outline" as const,
    dark: true,
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
              <div className="relative h-full">
                {/* Glow behind highlighted card */}
                {tier.highlight && (
                  <div className="absolute inset-0 bg-primary-container rounded-[2rem] blur-3xl opacity-15 -z-10" />
                )}

                <div
                  className={`relative flex flex-col h-full rounded-[2rem] p-10 transition-transform duration-350 hover:-translate-y-[3px] hover:shadow-[0_20px_48px_rgba(0,53,39,0.1)] ${
                    tier.dark
                      ? "bg-neutral-900/90 dark:bg-black/60 text-white border border-white/5 backdrop-blur-2xl"
                      : tier.highlight
                      ? "glass-elevated border border-primary-container/20 ring-2 ring-primary-container/10"
                      : "glass border border-outline-variant/10 dark:border-white/5"
                  }`}
                >
                  {/* Most popular badge */}
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white text-[10px] font-bold uppercase tracking-[0.25em] px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8 mt-2">
                    <h3
                      className={`text-2xl font-extrabold tight-tracking mb-1 ${
                        tier.dark ? "text-white" : "text-on-surface dark:text-white"
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-sm font-light ${
                        tier.dark ? "text-neutral-400" : "text-on-surface-variant dark:text-white/50"
                      }`}
                    >
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Price placeholder */}
                  <div className="mb-8">
                    <p
                      className={`text-[13px] font-semibold ${
                        tier.dark ? "text-neutral-400" : "text-on-surface-variant dark:text-white/50"
                      }`}
                    >
                      Starting from
                    </p>
                    <p
                      className={`text-3xl font-extrabold tight-tracking mt-1 ${
                        tier.dark
                          ? "text-primary-fixed"
                          : "text-primary dark:text-primary-fixed"
                      }`}
                    >
                      Custom Quote
                    </p>
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start text-sm font-light ${
                          tier.dark
                            ? "text-neutral-300"
                            : "text-on-surface-variant dark:text-white/60"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[16px] mr-3 mt-0.5 shrink-0 ${
                            tier.dark ? "text-primary-fixed" : "text-primary dark:text-primary-fixed"
                          }`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/contact" className="block">
                    <TactileButton
                      variant={
                        tier.dark
                          ? "outline"
                          : tier.highlight
                          ? "primary"
                          : "outline"
                      }
                      className={`w-full justify-center ${
                        tier.dark
                          ? "border-primary-fixed text-primary-fixed hover:bg-primary-fixed hover:text-primary"
                          : ""
                      }`}
                    >
                      {tier.cta}
                    </TactileButton>
                  </Link>
                </div>
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
