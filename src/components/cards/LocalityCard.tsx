import React from "react";
import Link from "next/link";
import { TrendingUp, ArrowUpRight } from "lucide-react";
import { Locality } from "@/types/locality";
import { cn } from "@/lib/utils";

interface LocalityCardProps {
  locality: Locality;
  className?: string;
}

export function LocalityCard({ locality, className }: LocalityCardProps) {
  return (
    <Link
      href={`/buy?locality=${encodeURIComponent(locality.name)}`}
      className={cn(
        "group flex flex-col justify-between p-4 rounded-xl border border-border bg-white shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-tint/30 hover:shadow-card hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h4 className="font-heading font-semibold text-ink group-hover:text-primary transition-colors text-base line-clamp-1">
            {locality.name}
          </h4>
          <p className="text-xs text-muted line-clamp-1">{locality.popularFor}</p>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-tint text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="flex items-baseline justify-between pt-2 border-t border-border/60">
        <div>
          <span className="text-xs text-muted">Avg. Price: </span>
          <span className="font-bold text-ink text-sm">
            ₹{locality.avgPricePerSqFt.toLocaleString("en-IN")}/sq.ft
          </span>
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-primary">
          <TrendingUp className="h-3.5 w-3.5" />
          <span>+{locality.priceGrowthPercent}% YoY</span>
        </div>
      </div>
    </Link>
  );
}

