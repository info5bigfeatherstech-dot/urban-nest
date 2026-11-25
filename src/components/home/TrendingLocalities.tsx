"use client";

import React, { useState } from "react";
import { useTrendingLocalities } from "@/hooks/queries/useLocalities";
import { LocalityCard } from "@/components/cards/LocalityCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const CITY_TABS = [
  { slug: "delhi-ncr", name: "Delhi NCR" },
  { slug: "mumbai", name: "Mumbai" },
  { slug: "bengaluru", name: "Bengaluru" },
  { slug: "pune", name: "Pune" },
  { slug: "hyderabad", name: "Hyderabad" },
  { slug: "chennai", name: "Chennai" },
];

interface TrendingLocalitiesProps {
  title?: string;
  subtitle?: string;
}

export function TrendingLocalities({
  title = "Trending Localities & Price Trends",
  subtitle = "Track capital value appreciation, average rate per sq.ft, and growth hotspots vetted by real transaction analytics.",
}: TrendingLocalitiesProps) {
  const [activeTab, setActiveTab] = useState("delhi-ncr");

  const { data: localities, isLoading, isError, refetch } = useTrendingLocalities(activeTab);

  return (
    <section className="py-14 sm:py-20 bg-tint/60 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Market Intelligence"
          title={title}
          subtitle={subtitle}
          viewAllHref={`/buy?city=${activeTab}`}
          viewAllText="Explore City Trends"
        />

        {/* City Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 hide-scrollbar">
          {CITY_TABS.map((tab) => {
            const isActive = activeTab === tab.slug;
            return (
              <button
                key={tab.slug}
                onClick={() => setActiveTab(tab.slug)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all select-none whitespace-nowrap border",
                  isActive
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-white text-ink border-border hover:bg-tint hover:border-primary/40"
                )}
              >
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Localities Pills Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-border space-y-2">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <div className="flex justify-between pt-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <ErrorState onRetry={() => refetch()} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {localities?.map((locality) => (
              <LocalityCard key={locality.id} locality={locality} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

