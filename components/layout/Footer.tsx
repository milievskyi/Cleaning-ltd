import Link from "next/link";

// TODO: Replace "Lume" with final brand name
const BRAND_NAME = "Lume";
const PHONE = "+1 (780) 555-0100"; // TODO: Replace with real phone
const PHONE_HREF = "tel:+17805550100";

const footerLinks = {
  Services: [
    { label: "Regular Cleaning", href: "/services" },
    { label: "Deep Cleaning", href: "/services" },
    { label: "Move-In / Move-Out", href: "/services" },
    { label: "Post-Construction", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-emerald-950 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center">
                <span className="text-primary-fixed text-sm font-black">L</span>
              </span>
              <span className="text-2xl font-extrabold tracking-[-0.05em]">
                {BRAND_NAME}
              </span>
            </div>
            <p className="text-[13px] text-emerald-400/70 leading-relaxed mb-6">
              Precision cleaning for your home — Edmonton&apos;s trusted service since day one.
            </p>
            <a
              href={PHONE_HREF}
              className="text-[13px] font-semibold text-primary-fixed hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">call</span>
              {PHONE}
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-500/60 mb-5">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-emerald-300/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-emerald-900/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-emerald-500/50 tracking-[0.15em] uppercase">
            © {new Date().getFullYear()} {BRAND_NAME} Cleaning Ltd. · Edmonton, Alberta
          </p>
          <p className="text-[11px] text-emerald-500/40 tracking-[0.1em] uppercase">
            Insured · Bonded · Satisfaction Guaranteed
          </p>
        </div>
      </div>
    </footer>
  );
}
