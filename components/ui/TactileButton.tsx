"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import clsx from "clsx";

interface TactileButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
}

const TactileButton = forwardRef<HTMLButtonElement, TactileButtonProps>(
  (
    { children, variant = "primary", size = "md", className, ...props },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center rounded-full font-semibold tracking-tight select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed focus-visible:ring-offset-2";

    const sizes = {
      sm: "px-5 py-2 text-[13px]",
      md: "px-8 py-3.5 text-[14px]",
      lg: "px-10 py-5 text-lg",
    };

    const variants = {
      primary: "btn-primary text-white",
      outline:
        "border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300",
      glass:
        "glass text-primary dark:text-primary-fixed hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300",
    };

    return (
      <motion.button
        ref={ref}
        className={clsx(base, sizes[size], variants[variant], className)}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

TactileButton.displayName = "TactileButton";
export default TactileButton;
