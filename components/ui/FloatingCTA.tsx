"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-28 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.3, 1] }}
        >
          <Link href="/contact">
            <motion.button
              className="btn-primary text-white px-5 py-3.5 rounded-full text-[13px] font-bold tracking-tight flex items-center gap-2 shadow-xl shadow-primary/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                chat_bubble
              </span>
              Get Free Quote
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
