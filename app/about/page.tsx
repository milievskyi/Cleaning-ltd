import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Lume Cleaning — Edmonton's trusted residential cleaning team.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-32 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary/60 dark:text-primary-fixed/60 mb-3">Coming Soon</p>
          <h1 className="text-5xl md:text-7xl font-extrabold tight-tracking text-on-surface dark:text-white mb-6">About Us</h1>
          <p className="text-on-surface-variant dark:text-white/55 text-xl font-light max-w-md mx-auto mb-10">
            Our story is coming soon. Want to know more? Reach out directly.
          </p>
          <Link href="/contact" className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-[15px] inline-block">
            Contact Us
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
