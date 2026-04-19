import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactCTA from "@/components/sections/ContactCTA";
import FloatingCTA from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  title: "Get a Free Cleaning Quote",
  description:
    "Request a free residential cleaning quote in Edmonton, Alberta. Regular cleaning, deep cleaning, move-in/out service. Insured & bonded.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60 dark:text-primary-fixed/60 mb-3">
            Contact Us
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tight-tracking text-on-surface dark:text-white mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-on-surface-variant dark:text-white/55 text-xl font-light max-w-md mx-auto editorial-tracking">
            Fill out the form below and we&apos;ll get back to you within a few hours.
          </p>
        </div>
        <ContactCTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
