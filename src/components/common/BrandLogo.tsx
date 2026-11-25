import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function BrandLogo({ className, variant = "dark", showTagline = false }: BrandLogoProps) {
  const isDark = variant === "light"; // 'light' means rendered on dark background

  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 select-none focus:outline-none shrink-0 whitespace-nowrap", className)}
      aria-label="UrbanNest Realty Home"
    >
      {/* Custom Architectural Nest / Roof SVG Icon */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          {/* Stylized roof arch */}
          <path
            d="M5 15L16 6L27 15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Nested modern layers */}
          <path
            d="M9 13.5V23C9 24.1046 9.89543 25 11 25H21C22.1046 25 23 24.1046 23 23V13.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cozy nest weave / amber accent hearth */}
          <circle cx="16" cy="18" r="3.2" fill="#F2A33A" />
          <path
            d="M13 22H19"
            stroke="#F2A33A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline">
          <span
            className={cn(
              "font-heading text-xl font-bold tracking-tight",
              isDark ? "text-white" : "text-ink"
            )}
          >
            Urban<span className="text-primary">Nest</span>
          </span>
          <span className="ml-1 text-[11px] font-bold uppercase tracking-widest text-accent">
            Realty
          </span>
        </div>
        {showTagline && (
          <span
            className={cn(
              "text-[10px] tracking-wide",
              isDark ? "text-white/60" : "text-muted"
            )}
          >
            Find a home that feels like yours
          </span>
        )}
      </div>
    </Link>
  );
}

