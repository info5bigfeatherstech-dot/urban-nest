export interface Locality {
  id: string;
  name: string;
  citySlug: string;
  cityName: string;
  avgPricePerSqFt: number;
  priceGrowthPercent: number; // e.g. +7.4
  trend: "up" | "down" | "stable";
  propertyCount: number;
  popularFor: string; // e.g. "Tech parks & Metro connectivity"
}

