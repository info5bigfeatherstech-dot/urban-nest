"use client";

import React from "react";
import { BHK_OPTIONS } from "@/constants/filters";
import { useSearchStore } from "@/store/useSearchStore";
import { cn } from "@/lib/utils";

export function BhkChips() {
  const { bhk, toggleBhk, tab } = useSearchStore();

  // Hide BHK chips for Plots and Commercial if not applicable
  if (tab === "plots" || tab === "commercial") {
    return null;
  }

  return (
    <div className="flex flex-col gap-1.5 min-w-[200px] flex-1">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
        Bedroom (BHK)
      </label>
      <div className="flex flex-wrap items-center gap-1.5 min-h-[44px]">
        {BHK_OPTIONS.map((opt) => {
          const isSelected = bhk.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggleBhk(opt)}
              className={cn(
                "h-9 px-3.5 rounded-lg text-xs font-semibold transition-all select-none border",
                isSelected
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-white hover:border-slate-300"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
