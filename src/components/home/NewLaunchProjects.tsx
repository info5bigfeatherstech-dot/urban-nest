"use client";

import React from "react";
import { useNewLaunchProjects } from "@/hooks/queries/useProjects";
import { ProjectCard } from "@/components/cards/ProjectCard";
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

interface NewLaunchProjectsProps {
  title?: string;
  subtitle?: string;
  city?: string;
  onViewAll?: () => void;
}

export function NewLaunchProjects({
  title,
  subtitle,
  city,
  onViewAll,
}: NewLaunchProjectsProps) {
  const { selectedCity, selectedCitySlug } = useCityStore();
  const activeCity = city || selectedCitySlug;

  const { data: projects, isLoading, isError, refetch } = useNewLaunchProjects(activeCity);

  const displayTitle = title || `New Launch Projects in ${selectedCity}`;
  const displaySubtitle =
    subtitle ||
    "Be the first to explore pre-launch and newly launched developments from tier-1 developers with inaugural pricing.";

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Launches"
          title={displayTitle}
          subtitle={displaySubtitle}
          viewAllHref="/projects"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-border p-4 space-y-4">
                <Skeleton className="aspect-[16/10] w-full rounded-xl" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <div className="flex gap-2">
                  <Skeleton className="h-6 w-16 rounded-md" />
                  <Skeleton className="h-6 w-16 rounded-md" />
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-8 w-24 rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <ErrorState onRetry={() => refetch()} />
        ) : !projects || projects.length === 0 ? (
          <EmptyState
            title="No new launch projects found"
            description="We haven't found any new launches matching this city yet. Try checking all cities."
            actionLabel="View All Projects"
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
              {projects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <ProjectCard project={project} />
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

