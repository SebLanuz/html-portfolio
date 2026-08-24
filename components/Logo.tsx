import Link from "next/link";
import { assets } from "@/lib/assets";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Home" className={`relative block shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={assets.logo} alt="Sebastián Lara" className="h-full w-full object-contain" />
    </Link>
  );
}
