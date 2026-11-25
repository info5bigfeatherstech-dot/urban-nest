export const queryKeys = {
  projects: {
    all: ["projects"] as const,
    newLaunches: (city?: string) => ["projects", "new-launches", city] as const,
    featured: () => ["projects", "featured"] as const,
    detail: (id: string) => ["projects", id] as const,
  },
  properties: {
    all: ["properties"] as const,
    readyToMove: (city?: string) => ["properties", "ready-to-move", city] as const,
    filtered: (filters: Record<string, unknown>) => ["properties", "list", filters] as const,
    detail: (id: string) => ["properties", id] as const,
  },
  cities: {
    all: ["cities"] as const,
    popular: () => ["cities", "popular"] as const,
  },
  localities: {
    all: ["localities"] as const,
    byCity: (citySlug: string) => ["localities", citySlug] as const,
    trending: () => ["localities", "trending"] as const,
  },
  content: {
    builders: () => ["content", "builders"] as const,
    articles: () => ["content", "articles"] as const,
    testimonials: () => ["content", "testimonials"] as const,
    stats: () => ["content", "stats"] as const,
    insights: () => ["content", "insights"] as const,
  },
};

