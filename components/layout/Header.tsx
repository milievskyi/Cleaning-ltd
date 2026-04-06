"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import TactileButton from "@/components/ui/TactileButton";

// TODO: Replace "Lume" with final brand name
const BRAND_NAME = "Lume";
const PHONE = "+1 (780) 555-0100"; // TODO: Replace with real phone
const PHONE_HREF = "tel:+17805550100"; // TODO: Replace with real phone

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fixed wrapper — centering is on this div, animation is on the inner nav */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 pointer-events-none">
        <motion.header
          className="pointer-events-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.3, 1] }}
        >
          <div
            className={`glass rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500 ${
              scrolled ? "shadow-[0_8px_32px_rgba(0,53,39,0.12)]" : ""
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="text-xl font-bold tracking-[-0.05em] text-emerald-950 dark:text-white flex items-center gap-2"
            >
              {/* TODO: Replace span with <Image src="/logo.svg" /> when logo is ready */}
              <span className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center">
                <span className="text-white text-xs font-black">L</span>
              </span>
              {BRAND_NAME}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium text-on-surface-variant hover:text-on-surface dark:text-white/60 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Phone — visible on scroll or md+ */}
              <AnimatePresence>
                {scrolled && (
                  <motion.a
                    href={PHONE_HREF}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.3 }}
                    className="hidden md:flex items-center gap-1.5 text-[13px] font-semibold text-primary dark:text-primary-fixed hover:underline"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    {PHONE}
                  </motion.a>
                )}
              </AnimatePresence>

              {/* Dark mode toggle */}
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-on-surface dark:text-white"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
              </button>

              <TactileButton
                size="sm"
                className="hidden md:inline-flex"
                onClick={() => (window.location.href = "/contact")}
              >
                Get Free Quote
              </TactileButton>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <span className="material-symbols-outlined text-[22px] text-on-surface dark:text-white">
                  {mobileOpen ? "close" : "menu"}
                </span>
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-elevated flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-4xl font-extrabold tracking-[-0.05em] text-on-surface dark:text-white"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="flex flex-col items-center gap-4 mt-4"
            >
              <TactileButton
                size="lg"
                onClick={() => {
                  setMobileOpen(false);
                  window.location.href = "/contact";
                }}
              >
                Get Free Quote
              </TactileButton>
              <a
                href={PHONE_HREF}
                className="text-[15px] font-semibold text-primary dark:text-primary-fixed"
              >
                {PHONE}
              </a>
              <button
                onClick={toggle}
                className="text-[13px] text-on-surface-variant dark:text-white/60 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
