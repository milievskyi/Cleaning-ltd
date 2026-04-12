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
    // Adds a slight throttle/debounce by letting the browser paint first
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 72);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 pointer-events-none">
        <motion.header
          className="pointer-events-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Using layout prop on the container allows descendants to animate width changes smoothly */}
          <motion.div
            layout
            className={`glass rounded-full px-5 md:px-6 py-3 flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              scrolled ? "bg-surface/80 dark:bg-black/80 shadow-[0_4px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_32px_rgba(0,0,0,0.4)] backdrop-blur-lg border border-outline-variant/20 dark:border-white/10" : "bg-transparent border-transparent"
            }`}
          >
            {/* Logo */}
            <div className="flex-shrink-0 relative z-10 w-32">
              <Link
                href="/"
                className="text-xl font-bold tracking-[-0.05em] text-emerald-950 dark:text-white flex items-center gap-2"
              >
                <span className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center">
                  <span className="text-white text-xs font-black">L</span>
                </span>
                {BRAND_NAME}
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center justify-center gap-7 absolute left-1/2 -translate-x-1/2 w-max">
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
            <div className="flex items-center justify-end gap-2 relative z-10 min-w-[150px]">
              {/* Phone — wrapper absolute positioned so it never pushes the flex items */}
              <AnimatePresence mode="wait">
                {scrolled && (
                  <motion.div
                    key="phone-wrapper"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute right-full mr-4 hidden lg:flex items-center h-full whitespace-nowrap"
                  >
                    <a
                      href={PHONE_HREF}
                      className="flex items-center gap-1.5 text-[13px] font-semibold text-primary dark:text-primary-fixed hover:opacity-80 transition-opacity mr-2"
                    >
                      <span className="material-symbols-outlined text-[16px] pr-1">call</span>
                      {PHONE}
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dark mode toggle */}
              <button
                onClick={toggle}
                aria-label="Toggle dark mode"
                className="hidden md:flex w-9 h-9 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-on-surface dark:text-white"
              >
                <span className="material-symbols-outlined text-[20px] transition-transform active:scale-90">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
              </button>

              <div className="hidden md:block">
                <TactileButton
                  size="sm"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Free Quote
                </TactileButton>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <motion.span 
                  className="material-symbols-outlined text-[24px] text-on-surface dark:text-white"
                  animate={{ rotate: mobileOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "backOut" }}
                >
                  {mobileOpen ? "close" : "menu"}
                </motion.span>
              </button>
            </div>
          </motion.div>
        </motion.header>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass-elevated flex flex-col items-center justify-center gap-8 backdrop-blur-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ 
                  delay: i * 0.05,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ delay: navLinks.length * 0.05, duration: 0.4 }}
              className="flex flex-col items-center gap-5 mt-6"
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
                className="text-[15px] font-semibold text-primary dark:text-primary-fixed mt-2 active:scale-95 transition-transform"
              >
                {PHONE}
              </a>
              <button
                onClick={toggle}
                className="text-[13px] text-on-surface-variant dark:text-white/60 flex items-center gap-2 active:scale-95 transition-transform mt-2"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {theme === "dark" ? "light_mode" : "dark_mode"}
                </span>
                {theme === "dark" ? "Light Form" : "Dark Form"}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
