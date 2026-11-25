"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TrendingUp, ArrowLeft, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import mockLocalities from "@/mocks/localities.json";

export default function LocalitiesPage() {
  const [selectedCity, setSelectedCity] = useState("all");

  const filtered = mockLocalities.filter((loc) => {
    if (selectedCity !== "all" && loc.citySlug !== selectedCity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Localities & Price Trends</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <TrendingUp className="h-4 w-4" />
                <span>Price Trend Analytics</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Top Trending Localities in India
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Compare average rate per sq.ft, 1-year capital appreciation, and infrastructure developments across prime Indian metropolitan neighborhoods.
              </p>
            </div>

            <Button asChild variant="outline" size="sm" className="gap-2 shrink-0">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>

          {/* City Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-slate-100 mt-6 hide-scrollbar">
            {["all", "delhi-ncr", "mumbai", "bengaluru", "pune", "hyderabad", "chennai"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setSelectedCity(c)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCity === c
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {c === "all" ? "All Metros" : c.toUpperCase().replace("-", " ")}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((loc) => (
            <Link
              key={loc.id}
              href={`/buy?city=${loc.citySlug}&locality=${encodeURIComponent(loc.name)}`}
              className="group p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-primary transition-colors">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span>{loc.cityName}</span>
                    </p>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-3 line-clamp-2">
                  {loc.popularFor}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Avg Rate</span>
                  <span className="font-heading font-extrabold text-sm text-slate-900">
                    ₹{loc.avgPricePerSqFt.toLocaleString("en-IN")}/sq.ft
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">1-Yr Growth</span>
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <TrendingUp className="h-3.5 w-3.5" />
                    +{loc.priceGrowthPercent}%
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

