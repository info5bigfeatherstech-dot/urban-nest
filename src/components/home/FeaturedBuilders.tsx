"use client";

import React from "react";
import { useFeaturedBuilders } from "@/hooks/queries/useContent";
import { BuilderLogo } from "@/components/cards/BuilderLogo";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";

interface FeaturedBuildersProps {
  title?: string;
  subtitle?: string;
}

export function FeaturedBuilders({
  title = "India's Most Trusted Real Estate Developers",
  subtitle = "Partnering with nationally acclaimed developers known for architectural excellence, timely delivery, and RERA compliance.",
}: FeaturedBuildersProps) {
  const { data: builders, isLoading, isError, refetch } = useFeaturedBuilders();

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Top Developers"
          title={title}
          subtitle={subtitle}
          viewAllHref="/projects"
          viewAllText="View All Developers"
        />

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="p-4 rounded-2xl border border-border bg-white flex flex-col items-center space-y-2">
                <Skeleton className="h-12 w-12 rounded-xl" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-3 w-16" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <ErrorState onRetry={() => refetch()} />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {builders?.map((builder) => (
              <BuilderLogo key={builder.id} builder={builder} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

