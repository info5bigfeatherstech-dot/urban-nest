"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import { QUICK_FILTERS } from "@/constants/filters";
import { useSearchStore } from "@/store/useSearchStore";
import { cn } from "@/lib/utils";

export function QuickFilterChips() {
  const { quickFilters, toggleQuickFilter } = useSearchStore();

  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">
        <Sparkles className="h-3.5 w-3.5 text-amber-500" />
        Quick Filters:
      </span>
      {QUICK_FILTERS.map((filter) => {
        const isSelected = quickFilters.includes(filter);
        return (
          <button
            key={filter}
            type="button"
            onClick={() => toggleQuickFilter(filter)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs transition-all border",
              isSelected
                ? "bg-blue-50 text-primary border-primary/50 font-bold shadow-xs"
                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300 font-medium"
            )}
          >
            {isSelected && <Check className="h-3 w-3 text-primary stroke-[3]" />}
            <span>{filter}</span>
          </button>
        );
      })}
    </div>
  );
}
