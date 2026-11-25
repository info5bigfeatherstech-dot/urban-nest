import { create } from "zustand";
import { SearchFilters, SearchTab, BudgetRange } from "@/types/search";
import { PropertyType } from "@/types/property";

interface SearchState extends SearchFilters {
  setTab: (tab: SearchTab) => void;
  setCity: (city: string) => void;
  setLocalities: (localities: string[]) => void;
  addLocality: (locality: string) => void;
  removeLocality: (locality: string) => void;
  setPropertyType: (type: PropertyType | "All Residential" | "All Commercial") => void;
  setBudget: (budget: BudgetRange) => void;
  toggleBhk: (bhk: string) => void;
  toggleQuickFilter: (filter: string) => void;
  resetFilters: () => void;
}

const initialFilters: SearchFilters = {
  tab: "buy",
  city: "delhi-ncr",
  localities: [],
  propertyType: "All Residential",
  budget: { min: null, max: null },
  bhk: [],
  quickFilters: [],
};

export const useSearchStore = create<SearchState>((set) => ({
  ...initialFilters,

  setTab: (tab) => set({ tab }),
  setCity: (city) => set({ city }),
  setLocalities: (localities) => set({ localities }),
  addLocality: (locality) =>
    set((state) => ({
      localities: state.localities.includes(locality)
        ? state.localities
        : [...state.localities, locality],
    })),
  removeLocality: (locality) =>
    set((state) => ({
      localities: state.localities.filter((l) => l !== locality),
    })),
  setPropertyType: (propertyType) => set({ propertyType }),
  setBudget: (budget) => set({ budget }),
  toggleBhk: (bhk) =>
    set((state) => ({
      bhk: state.bhk.includes(bhk)
        ? state.bhk.filter((b) => b !== bhk)
        : [...state.bhk, bhk],
    })),
  toggleQuickFilter: (filter) =>
    set((state) => ({
      quickFilters: state.quickFilters.includes(filter)
        ? state.quickFilters.filter((f) => f !== filter)
        : [...state.quickFilters, filter],
    })),
  resetFilters: () => set(initialFilters),
}));

