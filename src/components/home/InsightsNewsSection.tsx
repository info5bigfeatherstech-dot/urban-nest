"use client";

import React from "react";
import { useLatestArticles } from "@/hooks/queries/useContent";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ErrorState } from "@/components/common/ErrorState";
import { Skeleton } from "@/components/ui/skeleton";

interface InsightsNewsSectionProps {
  title?: string;
  subtitle?: string;
}

export function InsightsNewsSection({
  title = "Real Estate Insights, Research & Tax Guides",
  subtitle = "Stay ahead of property market movements, legal compliance changes, and smart home-buying strategies written by seasoned industry leaders.",
}: InsightsNewsSectionProps) {
  const { data: articles, isLoading, isError, refetch } = useLatestArticles();

  // Take the first 3 articles for the 3-card grid requirement
  const topArticles = articles ? articles.slice(0, 3) : [];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="UrbanNest Editorial"
          title={title}
          subtitle={subtitle}
          viewAllHref="#all-articles"
          viewAllText="Read All Articles"
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col rounded-2xl border border-border p-4 space-y-3">
                <Skeleton className="aspect-[16/10] w-full rounded-xl" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <div className="pt-3 border-t border-border flex justify-between">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            ))}
          </div>
        ) : isError ? (
          <ErrorState onRetry={() => refetch()} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

