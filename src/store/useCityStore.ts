import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { safeLocalStorage } from "./safeStorage";

interface CityState {
  selectedCity: string; // e.g. "Delhi NCR"
  selectedCitySlug: string; // e.g. "delhi-ncr"
  setSelectedCity: (city: string, slug: string) => void;
}

export const useCityStore = create<CityState>()(
  persist(
    (set) => ({
      selectedCity: "Delhi NCR",
      selectedCitySlug: "delhi-ncr",
      setSelectedCity: (city, slug) =>
        set({ selectedCity: city, selectedCitySlug: slug }),
    }),
    {
      name: "urbannest-selected-city",
      storage: createJSONStorage(() => safeLocalStorage),
    }
  )
);

