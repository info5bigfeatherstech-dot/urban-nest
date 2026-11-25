"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { X, MapPin, Plus, Search, Check } from "lucide-react";
import { useSearchStore } from "@/store/useSearchStore";
import mockLocalities from "@/mocks/localities.json";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function LocalityAutocomplete() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const localities = useSearchStore((s) => s.localities);
  const addLocality = useSearchStore((s) => s.addLocality);
  const removeLocality = useSearchStore((s) => s.removeLocality);
  const city = useSearchStore((s) => s.city);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close when clicked outside
  useEffect(() => {
    if (!open) return;
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
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

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  // Filter localities by selected city if possible, otherwise offer all
  const displayPool = useMemo(() => {
    if (!city) return mockLocalities;
    const cityLower = city.toLowerCase();
    const filtered = mockLocalities.filter(
      (loc) =>
        loc.citySlug.toLowerCase().includes(cityLower) ||
        loc.cityName.toLowerCase().includes(cityLower)
    );
    return filtered.length > 0 ? filtered : mockLocalities;
  }, [city]);

  const matches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return displayPool;
    return displayPool.filter(
      (loc) =>
        loc.name.toLowerCase().includes(q) ||
        loc.popularFor.toLowerCase().includes(q)
    );
  }, [displayPool, searchQuery]);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-1.5 flex-1 min-w-[210px]">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
        Locality / Landmark
      </label>

      {/* Input / Chip Container */}
      <div
        onClick={() => setOpen(true)}
        className={cn(
          "flex flex-wrap items-center gap-1.5 min-h-[48px] h-12 rounded-xl border bg-slate-50 px-3 py-1.5 transition-colors cursor-pointer overflow-hidden",
          open
            ? "bg-white border-primary ring-2 ring-primary/20"
            : "border-slate-200 hover:bg-white hover:border-slate-300"
        )}
      >
        {/* Selected Locality Chips */}
        {localities.map((loc) => (
          <Badge
            key={loc}
            variant="secondary"
            className="flex items-center gap-1 bg-blue-50 text-primary border border-blue-200 hover:bg-blue-100 px-2 py-0.5 text-xs font-semibold shrink-0"
          >
            <span>{loc}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeLocality(loc);
              }}
              className="rounded-full hover:bg-primary/20 p-0.5 text-primary"
              aria-label={`Remove ${loc}`}
            >
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}

        {/* Trigger Button text */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 py-1 px-1">
          {localities.length === 0 ? (
            <>
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span className="text-slate-500 font-medium">Search locality or landmark...</span>
            </>
          ) : (
            <>
              <Plus className="h-3.5 w-3.5 text-primary shrink-0" />
              <span className="font-medium text-primary">Add more</span>
            </>
          )}
        </div>
      </div>

      {/* Instant, Butter-Smooth Dropdown Panel */}
      {open && (
        <div
          style={{ backgroundColor: "#ffffff" }}
          className="smooth-dropdown absolute left-0 right-0 top-full mt-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg z-50 min-w-[300px]"
        >
          {/* Search bar inside dropdown */}
          <div className="relative mb-2.5">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type locality name or project..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-slate-900 placeholder:text-slate-400 font-medium transition-all"
            />
          </div>

          <div className="px-2 py-1 text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between border-b border-slate-100 pb-2 mb-1.5">
            <span>Trending Localities</span>
            <span className="text-[10px] text-primary lowercase font-semibold">
              {matches.length} found
            </span>
          </div>

          <div className="max-h-56 overflow-y-auto space-y-0.5 custom-scrollbar">
            {matches.length === 0 ? (
              <div className="py-4 text-center text-xs text-slate-500">
                No matching locality found.
              </div>
            ) : (
              matches.map((item) => {
                const isSelected = localities.includes(item.name);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (isSelected) {
                        removeLocality(item.name);
                      } else {
                        addLocality(item.name);
                      }
                    }}
                    className={cn(
                      "flex w-full items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors text-left",
                      isSelected
                        ? "bg-blue-50 text-primary font-bold"
                        : "text-slate-800 hover:bg-slate-50 hover:text-primary"
                    )}
                  >
                    <div className="flex flex-col pr-2">
                      <span className="font-semibold text-slate-900">{item.name}</span>
                      <span className="text-[11px] text-slate-500 line-clamp-1">
                        {item.cityName} • {item.popularFor}
                      </span>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <span className="text-[11px] text-slate-600 font-medium">
                        ₹{item.avgPricePerSqFt.toLocaleString("en-IN")}/sq.ft
                      </span>
                      {isSelected ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <div className="h-4 w-4 rounded-full border border-slate-300" />
                      )}
                    </div>
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
