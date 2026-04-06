"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function RevealWrapper({
  children,
  delay = 0,
  className = "",
  once = true,
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.98 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.25, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
