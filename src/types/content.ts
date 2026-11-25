export interface Builder {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  projectsCount: number;
  experienceYears: number;
  cityPresence: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: "Market Watch" | "Buying Guide" | "Tax & Legal" | "Interior & Living" | string;
  readTime: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  role: string; // e.g. "Bought 3 BHK in Gurugram"
  avatar: string;
  quote: string;
  rating: number; // 1-5
  location: string;
  verifiedBadge: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  targetNumber: number;
  suffix: string; // e.g. "K+", "%", "L+"
  description: string;
  iconName: string;
}

