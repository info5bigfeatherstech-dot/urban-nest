"use client";

import React from "react";
import { SearchTab } from "@/types/search";
import { useSearchStore } from "@/store/useSearchStore";
import { cn } from "@/lib/utils";

const TABS: Array<{ id: SearchTab; label: string; badge?: string }> = [
  { id: "buy", label: "Buy" },
  { id: "rent", label: "Rent" },
];

export function SearchTabs() {
  const activeTab = useSearchStore((s) => s.tab);
  const setTab = useSearchStore((s) => s.setTab);

  return (
    <div className="flex items-center overflow-x-auto border-b border-slate-200/80 hide-scrollbar -mx-4 sm:-mx-6 px-4 sm:px-6 mb-2">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => setTab(tab.id)}
            className={cn(
              "relative flex items-center gap-1.5 px-4 sm:px-6 py-3.5 text-sm sm:text-[15px] font-semibold whitespace-nowrap transition-colors focus:outline-none",
              isActive
                ? "text-primary font-bold"
                : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
            )}
          >
            <span>{tab.label}</span>
            {tab.badge && (
              <span className="text-[10px] font-extrabold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 tracking-wider">
                {tab.badge}
              </span>
            )}
            {isActive && (
              <span className="absolute bottom-0 left-3 right-3 h-[3px] bg-primary rounded-t-full shadow-sm" />
            )}
          </button>
        );
      })}
    </div>
  );
}
