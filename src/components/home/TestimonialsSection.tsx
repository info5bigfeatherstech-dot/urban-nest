"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { useTestimonials } from "@/hooks/queries/useContent";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
}

export function TestimonialsSection({
  title = "Stories from Homeowners Who Found Their Nest",
  subtitle = "Read honest reviews from real homebuyers, sellers, and tenants who navigated their property journey with UrbanNest.",
}: TestimonialsSectionProps) {
  const { data: testimonials, isLoading, isError, refetch } = useTestimonials();

  return (
    <section className="py-14 sm:py-20 bg-tint/70 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Customer Reviews"
          title={title}
          subtitle={subtitle}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-white space-y-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-16 w-full" />
                <div className="flex items-center gap-3 pt-2">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-36" />
                  </div>
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
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {testimonials?.map((t) => (
                <CarouselItem
                  key={t.id}
                  className="pl-4 sm:pl-6 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="flex flex-col justify-between h-full p-6 sm:p-7 rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:shadow-card-hover">
                    <div>
                      {/* Rating Stars & Quote Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1 text-accent">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-accent text-accent"
                            />
                          ))}
                        </div>
                        <Quote className="h-7 w-7 text-primary/20" />
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm text-ink/90 leading-relaxed italic mb-6">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-border/80">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full border border-primary/20 shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.author}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-heading font-bold text-sm text-ink truncate">
                            {t.author}
                          </h4>
                          {t.verifiedBadge && (
                            <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-muted truncate">{t.role}</p>
                        <p className="text-[11px] text-primary/80 font-medium">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
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

