import apiClient from "@/lib/axios";
import { Builder, Article, Testimonial, StatItem } from "@/types/content";
import { RecommendedInsight } from "@/types/insight";
import mockBuilders from "@/mocks/builders.json";
import mockArticles from "@/mocks/articles.json";
import mockTestimonials from "@/mocks/testimonials.json";
import mockStats from "@/mocks/stats.json";
import mockInsights from "@/mocks/insights.json";
import { isMockEnabled, delayMock } from "./mockHelper";

export const contentService = {
  async getFeaturedBuilders(): Promise<Builder[]> {
    if (isMockEnabled()) {
      return delayMock(mockBuilders as Builder[]);
    }
    const response = await apiClient.get<Builder[]>("/content/builders");
    return response.data;
  },

  async getLatestArticles(): Promise<Article[]> {
    if (isMockEnabled()) {
      return delayMock(mockArticles as Article[]);
    }
    const response = await apiClient.get<Article[]>("/content/articles");
    return response.data;
  },

  async getTestimonials(): Promise<Testimonial[]> {
    if (isMockEnabled()) {
      return delayMock(mockTestimonials as Testimonial[]);
    }
    const response = await apiClient.get<Testimonial[]>("/content/testimonials");
    return response.data;
  },

  async getWhyUsStats(): Promise<StatItem[]> {
    if (isMockEnabled()) {
      return delayMock(mockStats as StatItem[]);
    }
    const response = await apiClient.get<StatItem[]>("/content/stats");
    return response.data;
  },

  async getRecommendedInsights(): Promise<RecommendedInsight[]> {
    if (isMockEnabled()) {
      return delayMock(mockInsights as RecommendedInsight[]);
    }
    const response = await apiClient.get<RecommendedInsight[]>("/content/insights");
    return response.data;
  },
};
