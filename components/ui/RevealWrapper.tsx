"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealWrapper({ children, className = "", delay = 0 }: RevealWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: delay > 0 ? 0.7 : 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1] // Apple-style 'buttery' curve
      }}
    >
      {children}
    </motion.div>
  );
}
