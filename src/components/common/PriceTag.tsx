import React from "react";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

interface PriceTagProps {
  price: number;
  pricePerSqFt?: number;
  isRent?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PriceTag({
  price,
  pricePerSqFt,
  isRent = false,
  size = "md",
  className,
}: PriceTagProps) {
  const formatted = formatPrice(price, { isRent });

  return (
    <div className={cn("flex items-baseline gap-1.5 flex-wrap", className)}>
      <span
        className={cn(
          "font-heading font-bold text-ink tracking-tight",
          size === "sm" && "text-base",
          size === "md" && "text-lg sm:text-xl text-primary",
          size === "lg" && "text-2xl sm:text-3xl text-primary"
        )}
      >
        {formatted}
      </span>
      {pricePerSqFt ? (
        <span className="text-xs text-muted font-normal">
          (₹{pricePerSqFt.toLocaleString("en-IN")}/sq.ft)
        </span>
      ) : null}
    </div>
  );
}

