"use client";

import React from "react";
import { useSearchStore } from "@/store/useSearchStore";
import {
  BUY_BUDGET_MIN_OPTIONS,
  BUY_BUDGET_MAX_OPTIONS,
  RENT_BUDGET_MIN_OPTIONS,
  RENT_BUDGET_MAX_OPTIONS,
} from "@/constants/filters";
import { CustomSelect } from "@/components/ui/custom-select";

export function BudgetSelect() {
  const tab = useSearchStore((s) => s.tab);
  const budget = useSearchStore((s) => s.budget);
  const setBudget = useSearchStore((s) => s.setBudget);
  const isRent = tab === "rent";

  const minOptions = isRent ? RENT_BUDGET_MIN_OPTIONS : BUY_BUDGET_MIN_OPTIONS;
  const maxOptions = isRent ? RENT_BUDGET_MAX_OPTIONS : BUY_BUDGET_MAX_OPTIONS;

  return (
    <div className="flex flex-col gap-1.5 min-w-[210px] flex-1">
      <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
        Budget {isRent ? "(Per Month)" : "(Total Price)"}
      </label>
      <div className="flex items-center gap-2">
        <CustomSelect<number | null>
          options={minOptions}
          value={budget.min}
          placeholder="Min Budget"
          onChange={(val) =>
            setBudget({
              ...budget,
              min: val ?? null,
            })
          }
          className="text-xs sm:text-xs h-12 bg-slate-50 hover:bg-white border-slate-200 rounded-xl"
        />

        <span className="text-slate-400 text-xs font-bold shrink-0">to</span>

        <CustomSelect<number | null>
          options={maxOptions}
          value={budget.max}
          placeholder="Max Budget"
          onChange={(val) =>
            setBudget({
              ...budget,
              max: val ?? null,
            })
          }
          className="text-xs sm:text-xs h-12 bg-slate-50 hover:bg-white border-slate-200 rounded-xl"
        />
      </div>
    </div>
  );
}
