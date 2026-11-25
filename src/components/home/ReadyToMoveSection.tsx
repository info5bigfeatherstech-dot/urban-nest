"use client";

import React from "react";
import { useReadyProperties } from "@/hooks/queries/useProperties";
import { PropertyCard } from "@/components/cards/PropertyCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ErrorState } from "@/components/common/ErrorState";
import { EmptyState } from "@/components/common/EmptyState";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useCityStore } from "@/store/useCityStore";

interface ReadyToMoveSectionProps {
  title?: string;
  subtitle?: string;
  city?: string;
  onViewAll?: () => void;
}

export function ReadyToMoveSection({
  title,
  subtitle,
  city,
  onViewAll,
}: ReadyToMoveSectionProps) {
  const { selectedCity, selectedCitySlug } = useCityStore();
  const activeCity = city || selectedCitySlug;

  const { data: properties, isLoading, isError, refetch } = useReadyProperties(activeCity);

  const displayTitle = title || `Verified Ready-to-Move Homes in ${selectedCity}`;
  const displaySubtitle =
    subtitle ||
    "Skip the construction wait. Handpicked completed apartments and villas with verified occupancy certificates and immediate possession.";

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Immediate Possession"
          title={displayTitle}
          subtitle={displaySubtitle}
          viewAllHref={`/buy?city=${selectedCitySlug}&status=ready`}
          viewAllText="View All Ready Homes"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-border p-4 space-y-4 bg-white">
                <Skeleton className="aspect-[16/10] w-full rounded-xl" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-5 w-3/4" />
                <div className="grid grid-cols-3 gap-2">
                  <Skeleton className="h-8 rounded-lg" />
                  <Skeleton className="h-8 rounded-lg" />
                  <Skeleton className="h-8 rounded-lg" />
                </div>
                <div className="pt-2 flex gap-2">
                  <Skeleton className="h-9 flex-1 rounded-lg" />
                  <Skeleton className="h-9 flex-1 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <ErrorState onRetry={() => refetch()} />
        ) : !properties || properties.length === 0 ? (
          <EmptyState
            title="No ready-to-move properties found"
            description="We didn't find ready homes matching this specific filter. Try looking across all cities."
            actionLabel="Reset to All"
            onAction={onViewAll}
          />
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {properties.map((property) => (
                <CarouselItem
                  key={property.id}
                  className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <PropertyCard property={property} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
}

