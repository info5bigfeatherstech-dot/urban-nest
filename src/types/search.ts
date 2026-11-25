import { PropertyType } from "./property";

export type SearchTab = "buy" | "rent" | "new-launch" | "commercial" | "plots" | "projects";

export interface BudgetRange {
  min: number | null;
  max: number | null;
}

export interface SearchFilters {
  tab: SearchTab;
  city: string; // city slug e.g. "delhi-ncr"
  localities: string[]; // locality names
  propertyType: PropertyType | "All Residential" | "All Commercial";
  budget: BudgetRange;
  bhk: string[]; // ["1 BHK", "2 BHK", "3 BHK", "4+ BHK"]
  quickFilters: string[]; // ["Ready to Move", "Under ₹50 L", "RERA Approved", "Owner Properties"]
}

