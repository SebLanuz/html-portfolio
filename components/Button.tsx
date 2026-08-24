import Link from "next/link";
import type { ReactNode } from "react";

type Size = "small" | "medium" | "huge";
type Variant = "fill" | "stroke";

const sizeClasses: Record<Size, string> = {
  small: "h-12 px-6 text-sm w-fit",
  medium: "h-12 px-6 text-base w-fit",
  huge: "h-14 px-8 text-lg w-full sm:w-[411px]",
};

const variantClasses: Record<Variant, string> = {
  fill: "bg-accent text-[#001855] shadow-[0_4px_2px_rgba(0,0,0,0.25)] hover:brightness-95",
  stroke: "border border-white text-white hover:bg-white/10",
};

export function Button({
  href,
  children,
  size = "medium",
  variant = "fill",
  className = "",
  external = false,
  download,
}: {
  href: string;
  children: ReactNode;
  size?: Size;
  variant?: Variant;
  className?: string;
  external?: boolean;
  download?: string | boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl font-medium font-body transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (download) {
    return (
      <a href={href} download={download === true ? "" : download} className={classes}>
        {children}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
