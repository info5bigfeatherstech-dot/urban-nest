"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Map, Building2, TrendingUp } from "lucide-react";
import { RecommendedInsight } from "@/types/insight";
import { cn } from "@/lib/utils";

interface InsightCardProps {
  insight: RecommendedInsight;
  className?: string;
}

export function InsightCard({ insight, className }: InsightCardProps) {
  const isSociety = insight.type === "Society Insight";

  return (
    <Link
      href={`/buy?${isSociety ? "society" : "locality"}=${encodeURIComponent(insight.name)}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
    >
      {/* Visual Top Container */}
      {isSociety ? (
        /* Society Style: Architectural Photo Banner */
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-tint">
          <Image
            src={insight.image}
            alt={insight.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent" />

          {/* Top Right Icon */}
          <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-lg bg-black/55 text-white">
            <Building2 className="h-4 w-4" />
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-2.5 left-3 right-3 text-white">
            <h4 className="font-heading font-bold text-sm leading-snug line-clamp-1">
              {insight.name}
            </h4>
            <p className="text-[11px] text-white/80 line-clamp-1">
              {insight.location}, {insight.city}
            </p>
          </div>
        </div>
      ) : (
        /* Locality Style: Map Background + Circular Thumbnail Badge */
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4F7FA] flex flex-col items-center justify-center p-4 border-b border-border/60">
          {/* Subtle Abstract Map Grid Background Pattern */}
          <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:14px_14px]" />
          
          {/* Top Right Folded Map Icon */}
          <div className="absolute top-2.5 right-2.5 text-muted/60 group-hover:text-primary transition-colors">
            <Map className="h-4 w-4" />
          </div>

          {/* Circular Photography Badge */}
          <div className="relative h-16 w-16 sm:h-18 sm:w-18 overflow-hidden rounded-full border-2 border-white shadow-md mb-2 shrink-0 transition-transform duration-300 group-hover:scale-110">
            <Image
              src={insight.image}
              alt={insight.name}
              fill
              sizes="72px"
              className="object-cover"
            />
          </div>

          {/* Centered Name & City */}
          <div className="relative z-10 text-center">
            <h4 className="font-heading font-bold text-sm text-ink group-hover:text-primary transition-colors leading-tight">
              {insight.name}
            </h4>
            <p className="text-[11px] text-muted font-medium mt-0.5">
              {insight.city}
            </p>
          </div>
        </div>
      )}

      {/* Bottom Content Area */}
      <div className="p-3.5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <h3 className="font-heading text-sm font-bold text-ink line-clamp-1 group-hover:text-primary transition-colors">
            {insight.name} Insights
          </h3>
          <p className="text-xs text-muted font-medium mt-0.5">
            {insight.type}
          </p>
        </div>

        {/* Growth & Price Indicator */}
        <div className="pt-2.5 mt-2 border-t border-border/60 flex items-center justify-between text-[11px]">
          <span className="font-semibold text-ink">
            ₹{insight.avgPricePerSqFt.toLocaleString("en-IN")}/sq.ft
          </span>
          <span className="flex items-center gap-1 text-primary font-bold">
            <TrendingUp className="h-3 w-3" />
            <span>{insight.priceGrowth}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

