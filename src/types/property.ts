export type PropertyType =
  | "Apartment / Flat"
  | "Independent House / Villa"
  | "Builder Floor"
  | "Plot / Land"
  | "Commercial Space"
  | "Office Space"
  | "Shop / Showroom"
  | "Studio Apartment"
  | "Serviced Apartment"
  | string;

export type PostedByType = "Owner" | "Dealer" | "Builder" | string;

export type PossessionStatus = "Ready to Move" | "Under Construction" | string;

export type FurnishingStatus = "Furnished" | "Semi-Furnished" | "Unfurnished" | string;

export interface Property {
  id: string;
  title: string;
  price: number;
  pricePerSqFt: number;
  bhk: number; // e.g. 1, 2, 3, 4
  baths: number;
  areaSqFt: number;
  locality: string;
  city: string;
  state: string;
  propertyType: PropertyType;
  postedBy: PostedByType;
  posterName: string;
  isVerified: boolean;
  isFeatured?: boolean;
  possessionStatus: PossessionStatus;
  furnishingStatus: FurnishingStatus;
  images: string[];
  facing?: string;
  floor?: string;
  listingType: "buy" | "rent" | string;
  rentDeposit?: number;
  createdAgo: string;
}

