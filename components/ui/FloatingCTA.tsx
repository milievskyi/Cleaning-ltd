"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      scrollRef.current = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Add a simple threshold logic — only appears decisively after 400px
          setVisible(scrollRef.current > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-28 right-6 z-50"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 32 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 25,
            mass: 0.8
          }}
        >
          <Link href="/contact" className="block outline-none">
            <motion.button
              className="btn-primary text-white px-5 py-3.5 rounded-full text-[13px] font-bold tracking-tight flex items-center gap-2 shadow-[0_8px_24px_rgba(0,53,39,0.3)] dark:shadow-[0_8px_24px_rgba(0,255,150,0.15)] outline-none"
              whileHover={{
                scale: 1.04,
                y: -2,
                transition: { type: "spring", stiffness: 400, damping: 20 }
              }}
              whileTap={{ scale: 0.94 }}
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
