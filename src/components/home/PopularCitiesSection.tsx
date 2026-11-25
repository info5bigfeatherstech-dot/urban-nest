"use client";

import React from "react";
import { usePopularCities } from "@/hooks/queries/useCities";
import { CityCard } from "@/components/cards/CityCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";

interface PopularCitiesSectionProps {
  title?: string;
  subtitle?: string;
}

export function PopularCitiesSection({
  title = "Explore Properties in Top Indian Metros",
  subtitle = "Discover high-appreciation micro-markets, prime commercial central business districts, and tranquil residential suburbs across India.",
}: PopularCitiesSectionProps) {
  const { data: cities, isLoading, isError, refetch } = usePopularCities();

  return (
    <section className="py-14 sm:py-20 bg-tint/60 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Popular Destinations"
          title={title}
          subtitle={subtitle}
          viewAllHref="/buy"
          viewAllText="View All Cities"
        />

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="flex flex-col space-y-2">
                <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-3 w-32" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <ErrorState onRetry={() => refetch()} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {cities?.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

