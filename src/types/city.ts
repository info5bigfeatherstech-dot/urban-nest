export interface City {
  id: string;
  name: string;
  slug: string;
  state: string;
  propertyCount: number;
  image: string;
  isPopular: boolean;
  popularLocalities?: string[];
}

