export interface BuilderInfo {
  id: string;
  name: string;
  logo?: string;
  experienceYears?: number;
  totalProjects?: number;
}

export interface Project {
  id: string;
  name: string;
  builder: BuilderInfo;
  locality: string;
  city: string;
  state: string;
  bhkConfigs: string[]; // e.g. ["2 BHK", "3 BHK", "4 BHK"]
  minPrice: number;
  maxPrice: number;
  possessionDate: string; // e.g. "Dec 2026" or "Ready to Move"
  reraId: string;
  isReraApproved: boolean;
  images: string[];
  bannerBadge?: string; // e.g. "Exclusive Launch", "Pre-Launch Offer"
  totalUnits?: number;
  openAreaPercent?: number;
}

