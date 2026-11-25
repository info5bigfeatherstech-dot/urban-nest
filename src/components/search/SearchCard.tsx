"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building } from "lucide-react";
import { SearchTabs } from "./SearchTabs";
import { LocalityAutocomplete } from "./LocalityAutocomplete";
import { BudgetSelect } from "./BudgetSelect";
import { BhkChips } from "./BhkChips";
import { QuickFilterChips } from "./QuickFilterChips";
import { Button } from "@/components/ui/button";
import { CustomSelect } from "@/components/ui/custom-select";
import { PROPERTY_TYPE_OPTIONS } from "@/constants/filters";
import { useSearchStore } from "@/store/useSearchStore";
import { useCityStore } from "@/store/useCityStore";
import mockCities from "@/mocks/cities.json";

const CITY_OPTIONS = mockCities.map((c) => ({
  label: c.name,
  value: c.slug,
  sublabel: `${c.propertyCount.toLocaleString("en-IN")}+ listings`,
}));

const PROPERTY_TYPE_SELECT_OPTIONS = PROPERTY_TYPE_OPTIONS.map((item) => ({
  label: item.label,
  value: item.value,
}));

export function SearchCard() {
  const router = useRouter();
  const tab = useSearchStore((s) => s.tab);
  const city = useSearchStore((s) => s.city);
  const setCity = useSearchStore((s) => s.setCity);
  const localities = useSearchStore((s) => s.localities);
  const propertyType = useSearchStore((s) => s.propertyType);
  const setPropertyType = useSearchStore((s) => s.setPropertyType);
  const budget = useSearchStore((s) => s.budget);
  const bhk = useSearchStore((s) => s.bhk);
  const quickFilters = useSearchStore((s) => s.quickFilters);

  const setSelectedCity = useCityStore((s) => s.setSelectedCity);

  const handleCitySelect = (selectedSlug: string) => {
    setCity(selectedSlug);
    const found = mockCities.find((c) => c.slug === selectedSlug);
    if (found) {
      setSelectedCity(found.name, found.slug);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.set("tab", tab);
    if (city) params.set("city", city);
    if (localities.length > 0) params.set("localities", localities.join(","));
    if (propertyType) params.set("type", propertyType);
    if (budget.min) params.set("minBudget", budget.min.toString());
    if (budget.max) params.set("maxBudget", budget.max.toString());
    if (bhk.length > 0) params.set("bhk", bhk.join(","));
    if (quickFilters.length > 0) params.set("filters", quickFilters.join(","));

    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border border-slate-200/90 relative z-30">
      {/* Category Tabs */}
      <SearchTabs />

      {/* Main Search Controls Form */}
      <form onSubmit={handleSearchSubmit} className="pt-4 space-y-4">
        {/* Row 1: City, Locality, Property Type, Budget */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5">
          {/* Smooth City Dropdown */}
          <div className="flex flex-col gap-1.5 lg:col-span-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              City
            </label>
            <CustomSelect
              options={CITY_OPTIONS}
              value={city}
              onChange={(val) => handleCitySelect(String(val))}
              placeholder="Select City"
              icon={<MapPin className="h-4 w-4 text-primary" />}
              className="h-12 bg-slate-50 hover:bg-white border-slate-200 rounded-xl"
            />
          </div>

          {/* Locality Autocomplete (Smooth chip input + dropdown) */}
          <LocalityAutocomplete />

          {/* Smooth Property Type Dropdown */}
          <div className="flex flex-col gap-1.5 lg:col-span-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Property Type
            </label>
            <CustomSelect
              options={PROPERTY_TYPE_SELECT_OPTIONS}
              value={propertyType}
              onChange={(val) =>
                setPropertyType(val as Parameters<typeof setPropertyType>[0])
              }
              placeholder="All Residential"
              icon={<Building className="h-4 w-4 text-primary" />}
              className="h-12 bg-slate-50 hover:bg-white border-slate-200 rounded-xl"
            />
          </div>

          {/* Smooth Budget Presets */}
          <BudgetSelect />
        </div>

        {/* Row 2: BHK Chips & Search CTA Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-3 border-t border-slate-100">
          <BhkChips />

          <Button
            type="submit"
            className="h-12 px-8 gap-2.5 w-full sm:w-auto shrink-0 font-extrabold text-sm tracking-wide bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg shadow-amber-500/25 rounded-xl transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Search className="h-4 w-4 stroke-[2.5]" />
            <span>Search Properties</span>
          </Button>
        </div>

        {/* Row 3: Quick Filter Chips */}
        <div className="border-t border-slate-100 pt-2.5">
          <QuickFilterChips />
        </div>
      </form>
    </div>
  );
}
