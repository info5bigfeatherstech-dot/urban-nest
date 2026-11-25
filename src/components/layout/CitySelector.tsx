"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { MapPin, ChevronDown, Check, Search } from "lucide-react";
import { useCityStore } from "@/store/useCityStore";
import { useSearchStore } from "@/store/useSearchStore";
import mockCities from "@/mocks/cities.json";
import { cn } from "@/lib/utils";

export function CitySelector() {
  const [open, setOpen] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const { selectedCity, selectedCitySlug, setSelectedCity } = useCityStore();
  const { setCity } = useSearchStore();
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Handle escape key only when open
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const handleSelectCity = (city: { name: string; slug: string }) => {
    setSelectedCity(city.name, city.slug);
    setCity(city.slug);
    setOpen(false);
    setSearchFilter("");
  };

  const filteredCities = useMemo(() => {
    const q = searchFilter.trim().toLowerCase();
    if (!q) return mockCities;
    return mockCities.filter((c) => c.name.toLowerCase().includes(q));
  }, [searchFilter]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-white text-xs font-semibold text-ink transition-all focus:outline-none",
          open
            ? "border-primary ring-2 ring-primary/20 bg-tint/40 text-primary"
            : "border-border hover:bg-tint hover:border-primary/40"
        )}
      >
        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
        <span className="truncate max-w-[100px]">{selectedCity}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-muted shrink-0 transition-transform duration-200",
            open && "rotate-180 text-primary"
          )}
        />
      </button>

      {/* Smooth, Instant Dropdown Panel */}
      {open && (
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="smooth-dropdown absolute right-0 top-full mt-2 w-64 rounded-2xl border border-border bg-white p-2.5 shadow-lg z-50"
        >
          <div className="px-2 pb-2 mb-2 border-b border-border/70">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-bold text-muted uppercase tracking-wider">
                Select City
              </span>
              <span className="text-[10px] text-primary font-medium">
                8 Metros
              </span>
            </div>

            {/* Quick Filter Search Input */}
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted" />
              <input
                type="text"
                autoFocus
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search city..."
                className="w-full pl-8 pr-2.5 py-1.5 text-xs rounded-lg border border-border bg-tint/40 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-ink placeholder:text-muted/70 transition-all"
              />
            </div>
          </div>

          <div className="space-y-0.5 max-h-56 overflow-y-auto custom-scrollbar">
            {filteredCities.length === 0 ? (
              <div className="py-4 text-center text-xs text-muted">
                No city matching &quot;{searchFilter}&quot;
              </div>
            ) : (
              filteredCities.map((city) => {
                const isSelected = selectedCitySlug === city.slug;
                return (
                  <button
                    key={city.slug}
                    type="button"
                    onClick={() => handleSelectCity(city)}
                    className={cn(
                      "flex w-full items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium transition-colors text-left",
                      isSelected
                        ? "bg-tint text-primary font-bold"
                        : "text-ink hover:bg-tint/60 hover:text-primary"
                    )}
                  >
                    <div className="flex flex-col">
                      <span>{city.name}</span>
                      <span className="text-[10px] text-muted font-normal">
                        {city.propertyCount.toLocaleString("en-IN")}+ listings
                      </span>
                    </div>
                    {isSelected && <Check className="h-4 w-4 text-primary shrink-0" />}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
