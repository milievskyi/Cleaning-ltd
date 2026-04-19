import RevealWrapper from "@/components/ui/RevealWrapper";

const badges = [
  {
    icon: "verified_user",
    title: "Insured & Bonded",
    subtitle: "Full liability coverage",
  },
  {
    icon: "eco",
    title: "Eco-Friendly Products",
    subtitle: "Safe for kids & pets",
  },
  {
    icon: "thumb_up",
    title: "Satisfaction Guaranteed",
    subtitle: "We re-clean if needed",
  },
  {
    icon: "location_on",
    title: "Edmonton & Area",
    subtitle: "All major neighbourhoods",
  },
  {
    icon: "schedule",
    title: "Flexible Scheduling",
    subtitle: "Weekdays & Saturdays",
  },
];

export default function TrustStrip() {
  return (
    <section className="py-10 px-6 md:px-8 bg-surface-container-lowest dark:bg-[#0d1f17]">
      <div className="max-w-7xl mx-auto">
        <RevealWrapper>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {badges.map((badge) => (
              <div
                key={badge.title}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 py-4 px-2"
              >
                <span
                  className="material-symbols-outlined text-[22px] text-primary dark:text-primary-fixed shrink-0 mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {badge.icon}
                </span>
                <div className="text-center sm:text-left">
                  <p className="text-[13px] font-semibold text-on-surface dark:text-white leading-tight">
                    {badge.title}
                  </p>
                  <p className="text-[11px] text-on-surface-variant dark:text-white/50 mt-0.5 font-light">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
