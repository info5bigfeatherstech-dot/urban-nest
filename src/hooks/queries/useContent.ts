import { useQuery } from "@tanstack/react-query";
import { contentService } from "@/services/content.service";
import { queryKeys } from "@/constants/queryKeys";

export function useFeaturedBuilders() {
  return useQuery({
    queryKey: queryKeys.content.builders(),
    queryFn: () => contentService.getFeaturedBuilders(),
  });
}

export function useLatestArticles() {
  return useQuery({
    queryKey: queryKeys.content.articles(),
    queryFn: () => contentService.getLatestArticles(),
  });
}

export function useTestimonials() {
  return useQuery({
    queryKey: queryKeys.content.testimonials(),
    queryFn: () => contentService.getTestimonials(),
  });
}

export function useWhyUsStats() {
  return useQuery({
    queryKey: queryKeys.content.stats(),
    queryFn: () => contentService.getWhyUsStats(),
  });
}

export function useRecommendedInsights() {
  return useQuery({
    queryKey: queryKeys.content.insights(),
    queryFn: () => contentService.getRecommendedInsights(),
  });
}
