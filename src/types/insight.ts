export type InsightType = "Locality Insight" | "Society Insight" | string;

export interface RecommendedInsight {
  id: string;
  name: string;
  location: string;
  city: string;
  type: InsightType;
  image: string;
  avgPricePerSqFt: number;
  priceGrowth: string;
  rating: number;
  totalReviews: number;
  overview: string;
  slug: string;
}

