"use client";

import React from "react";
import Link from "next/link";
import { useRecommendedInsights } from "@/hooks/queries/useContent";
import { InsightCard } from "@/components/cards/InsightCard";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Sparkles, ArrowRight } from "lucide-react";

interface RecommendedInsightsProps {
  title?: string;
  subtitle?: string;
  onViewAll?: () => void;
}

export function RecommendedInsights({
  title = "Recommended Insights",
  subtitle = "based on your search results & history",
}: RecommendedInsightsProps) {
  const { data: insights, isLoading, isError, refetch } = useRecommendedInsights();

  return (
    <section className="py-12 sm:py-16 bg-tint/60 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Custom Header Matching 99acres Insights Design */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span>Personalized Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-ink tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              {subtitle}
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            size="sm"
            className="self-start sm:self-auto border-primary text-primary hover:bg-primary hover:text-white font-semibold text-xs h-9 px-4 gap-1.5 transition-all"
          >
            <Link href="/buy?view=insights">
              <span>View all Insights</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        {/* Carousel / Cards List */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-border p-3.5 space-y-3 bg-white"
              >
                <Skeleton className="aspect-[4/3] w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
                <div className="pt-2 border-t border-border flex justify-between">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <ErrorState onRetry={() => refetch()} />
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {insights?.map((insight) => (
                <CarouselItem
                  key={insight.id}
                  className="pl-3 sm:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <InsightCard insight={insight} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-4 bg-white shadow-lg text-primary hover:bg-primary hover:text-white border-border" />
              <CarouselNext className="-right-4 bg-white shadow-lg text-primary hover:bg-primary hover:text-white border-border" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
}
