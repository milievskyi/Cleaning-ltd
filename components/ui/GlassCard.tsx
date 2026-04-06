import { ReactNode } from "react";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
  hover?: boolean;
  dark?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

export default function GlassCard({
  children,
  className,
  elevated = false,
  hover = true,
  dark = false,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={clsx(
        "rounded-[2rem]",
        elevated ? "glass-elevated" : "glass",
        hover && "card-hover",
        dark && "bg-neutral-900/85 border-white/5",
        className
      )}
    >
      {children}
    </Tag>
  );
}
