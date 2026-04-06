"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function Testimonials() {
  return (
    <section className="relative py-48 px-6 md:px-8 bg-primary dark:bg-primary overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 mesh-texture opacity-20" />

      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPQ9r0Ur7JzJ5QRALoQ_9g6v15qYxJ0gFr9nS-xG5iHXngsVDbbSgIWDC4cN_2ld9maohq253dN4_bXRz1oCuK0EBWGUvZ4EvPLVO5b1smDtI6Wm2psW_Qdx-QqfRj9UtKdd_0yVuvpGRu0P_XQDvtjPlHaPOuCgEGuAS3ZgnwmgKRzgnOtJ0EYLu8gMr37VW84jmNxQYnzDbGOoHh_mBAC03aHw_GAjYH98Cr_AZwIpP0qv6D_mCnTB7HVAm7_MsPwk00ixsmI8A"
          alt="Clean glass surface — premium residential cleaning Edmonton"
          fill
          loading="lazy"
          className="object-cover mix-blend-overlay opacity-25"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <RevealWrapper>
          <motion.div
            className="glass-elevated p-14 md:p-20 rounded-[3rem] text-center border-white/15"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.3, 1] }}
          >
            {/* Quote icon */}
            <span
              className="material-symbols-outlined text-7xl text-primary-fixed mb-8 opacity-25 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>

            <blockquote className="text-3xl md:text-5xl font-extrabold tight-tracking text-primary leading-[1.08] mb-10 editorial-tracking">
              &ldquo;Came home to the cleanest my house has ever been. Worth every penny — and they were on time, professional, and friendly.&rdquo;
            </blockquote>

            <div className="w-14 h-1.5 bg-primary-fixed mx-auto mb-8 rounded-full" />

            <p className="text-[12px] font-bold uppercase tracking-[0.45em] text-primary/70">
              Sarah M. &mdash; Edmonton, AB
            </p>
          </motion.div>
        </RevealWrapper>
      </div>
    </section>
  );
}
