"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// TODO: Replace with real next booking date from CMS or backend
const NEXT_OPENING = "Coming Soon";

export default function BookingBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Hide when FloatingCTA becomes visible (> 400px)
          setVisible(window.scrollY <= 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[calc(100%-2.5rem)] max-w-sm z-50 pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            className="pointer-events-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.3, 1] }}
          >
            <div className="glass rounded-full px-5 py-3 flex items-center justify-between shadow-xl shadow-primary/10 border-white/40">
              <div className="pl-2">
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-on-surface-variant/50 dark:text-white/35">
                  Next Opening
                </p>
                <p className="text-[14px] font-extrabold tight-tracking text-on-surface dark:text-white">
                  {NEXT_OPENING}
                </p>
              </div>
              <Link href="/contact">
                <motion.span
                  className="btn-primary text-white text-[12px] font-bold px-5 py-2.5 rounded-full cursor-pointer inline-block"
                  whileTap={{ scale: 0.96 }}
                >
                  Book Now
                </motion.span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
