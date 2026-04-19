import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Pricing from "@/components/sections/Pricing";

export const metadata: Metadata = {
  title: "Pricing & Service Plans",
  description: "Flexible residential cleaning plans in Edmonton, Alberta. Get a free quote for regular, deep, or move-in/out cleaning.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tight-tracking text-on-surface dark:text-white mb-4">
            Pricing
          </h1>
          <p className="text-on-surface-variant dark:text-white/55 text-xl font-light max-w-md mx-auto editorial-tracking">
            Transparent service plans — every home gets a custom quote.
          </p>
        </div>
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
