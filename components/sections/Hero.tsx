"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TactileButton from "@/components/ui/TactileButton";
import GlassCard from "@/components/ui/GlassCard";

const PHONE_HREF = "tel:+17805550100"; // TODO: Replace with real phone

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const router = useRouter();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves up slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Fade out hero content on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  // Fade out scroll indicator
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-8 overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHt2TBkpfT9gjyT3zs1cZsaugZkjXJRxZUZ4hLaqwbd9rZfytIo9XLfUS5VpjxsTP720JCy7hIqUQu_ASNv6eYWGwAJgSCycPI8JLe6aDodAB9_l_UsUXzt3jdnz3roAqRxr86iF7VjvXkwavVN_Whw00BhjqUJ2b9uIwifZl2DKGMILG4jruhuhbQUSHYMj6h09r4QCEMWBZAB2h1ro5Pw74qoAFHMnMdsnG943GcH1sl0iHtb1G92DkYUffylnQpsfkk1TMjT7I"
          alt="Ultra-modern minimalist white home interior"
          fill
          priority
          className="object-cover grayscale-[0.15] contrast-[1.05] scale-110 origin-top"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 dark:from-[#0a1510]/95 via-background/65 dark:via-[#0a1510]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 dark:from-[#0a1510]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        className="relative z-10 max-w-3xl w-full"
        style={{ opacity: contentOpacity }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center px-4 py-1.5 rounded-full glass"
        >
          <span
            className="material-symbols-outlined text-[14px] mr-2 text-primary dark:text-primary-fixed"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary dark:text-primary-fixed">
            Serving Edmonton, Alberta
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.25, 1, 0.3, 1] }}
          className="text-[clamp(3.5rem,10vw,7rem)] font-extrabold tight-tracking leading-[0.85] mb-8 text-on-surface dark:text-white"
        >
          A Cleaner{" "}
          <br />
          <span className="text-primary-container dark:text-primary-fixed">
            Sanctuary.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.25, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-on-surface-variant dark:text-white/65 max-w-lg leading-relaxed mb-4 font-light editorial-tracking"
        >
          Professional residential cleaning in Edmonton — deep cleaning,
          regular maintenance, and move-in/out service done right.
        </motion.p>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 1, 0.3, 1] }}
          className="text-[12px] font-semibold uppercase tracking-[0.2em] text-primary/60 dark:text-primary-fixed/60 mb-10"
        >
          Insured &amp; Bonded · Eco-Friendly · Satisfaction Guaranteed
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.42, ease: [0.25, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <TactileButton
            size="lg"
            onClick={() => router.push("/contact")}
          >
            Get Free Quote
          </TactileButton>
          <TactileButton
            size="lg"
            variant="glass"
            onClick={() => (window.location.href = PHONE_HREF)}
          >
            <span className="material-symbols-outlined text-[18px] mr-2">
              call
            </span>
            Call Us Now
          </TactileButton>
        </motion.div>
      </motion.div>

      {/* Floating air quality card */}
      <motion.div
        className="absolute bottom-20 right-8 lg:right-16 hidden lg:block"
        initial={{ opacity: 0, x: 32, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.65, ease: [0.25, 1, 0.3, 1] }}
        style={{ opacity: contentOpacity }}
      >
        <GlassCard elevated className="p-6 max-w-[260px] animate-float">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-11 w-11 rounded-full bg-primary-fixed/30 dark:bg-primary-fixed/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary dark:text-primary-fixed text-[20px]">
                air
              </span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary dark:text-primary-fixed/80">
                Air Quality
              </p>
              <p className="text-xl font-extrabold tight-tracking text-on-surface dark:text-white">
                99.98% Pure
              </p>
            </div>
          </div>
          <p className="text-[11px] text-on-surface-variant dark:text-white/50 leading-relaxed font-light">
            HEPA filtration verified to Canadian residential standards.
          </p>
        </GlassCard>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface-variant/40 dark:text-white/30">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="material-symbols-outlined text-[20px] text-on-surface-variant/30 dark:text-white/25">
            keyboard_arrow_down
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
