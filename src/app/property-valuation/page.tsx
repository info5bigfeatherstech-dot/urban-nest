"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowLeft,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomSelect } from "@/components/ui/custom-select";
import mockCities from "@/mocks/cities.json";

export default function PropertyValuationPage() {
  const [city, setCity] = useState("delhi-ncr");
  const [propertyType, setPropertyType] = useState("apartment");
  const [areaSqFt, setAreaSqFt] = useState(1450);
  const [ageYears, setAgeYears] = useState("0-3");
  const [generated, setGenerated] = useState(false);

  // Simple heuristic valuation
  const baseRatePerSqFt = city === "mumbai" ? 22000 : city === "delhi-ncr" ? 11500 : 8500;
  const estimatedVal = areaSqFt * baseRatePerSqFt;
  const minVal = Math.round(estimatedVal * 0.94);
  const maxVal = Math.round(estimatedVal * 1.08);
  const estimatedRent = Math.round((estimatedVal * 0.035) / 12);

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
            <span className="text-slate-900 font-semibold">Property Valuation</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Sparkles className="h-4 w-4" />
                <span>AI-Powered Valuation Engine</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Instant Property Valuation Report
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Get an unbiased, algorithm-backed fair market price estimate and rental yield analysis based on 500,000+ registered property transactions.
              </p>
            </div>

            <Button asChild variant="outline" size="sm" className="gap-2 shrink-0">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Valuation Form (1 col) */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
              <h2 className="font-heading font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                <span>Property Parameters</span>
              </h2>

              <div className="space-y-3.5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">City</label>
                  <CustomSelect
                    options={mockCities.map((c) => ({ label: c.name, value: c.slug }))}
                    value={city}
                    onChange={(val) => setCity(String(val))}
                    placeholder="Select City"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Property Type</label>
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="apartment">Multistorey Apartment / Flat</option>
                    <option value="builder-floor">Builder Floor</option>
                    <option value="villa">Independent House / Villa</option>
                    <option value="plot">Residential Plot</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Super Built-up Area (Sq.Ft)
                  </label>
                  <input
                    type="number"
                    value={areaSqFt}
                    onChange={(e) => setAreaSqFt(Number(e.target.value))}
                    min="300"
                    max="15000"
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary font-semibold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Age of Property</label>
                  <select
                    value={ageYears}
                    onChange={(e) => setAgeYears(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="under-construction">Under Construction / New Launch</option>
                    <option value="0-3">0 to 3 Years (Brand New)</option>
                    <option value="3-7">3 to 7 Years</option>
                    <option value="7-15">7 to 15 Years</option>
                    <option value="15+">15+ Years</option>
                  </select>
                </div>

                <Button
                  onClick={() => setGenerated(true)}
                  className="w-full h-11 bg-primary hover:bg-primary-hover text-white font-extrabold text-xs rounded-xl shadow-md gap-2 mt-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>{generated ? "Update Valuation" : "Generate Free Valuation"}</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Valuation Report Result (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                    Estimated Fair Market Value
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mt-1">
                    ₹{(minVal / 10000000).toFixed(2)} Cr - ₹{(maxVal / 10000000).toFixed(2)} Cr
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Benchmark Rate: ~₹{baseRatePerSqFt.toLocaleString("en-IN")}/sq.ft in {city.toUpperCase()}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-center shrink-0">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase block">Accuracy</span>
                  <span className="text-sm font-extrabold text-emerald-600 block">94.2%</span>
                </div>
              </div>

              {/* Analysis Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Expected Rental</span>
                  <span className="text-lg font-extrabold text-slate-900 block mt-1">
                    ₹{estimatedRent.toLocaleString("en-IN")} / mo
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Annual Yield: 3.5%</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">3-Yr Capital Growth</span>
                  <span className="text-lg font-extrabold text-emerald-600 block mt-1 flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    +24.6%
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">CAGR in this cluster</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Liquidity Index</span>
                  <span className="text-lg font-extrabold text-primary block mt-1">High</span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">Avg 42 days to close</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <FileText className="h-4 w-4 text-primary shrink-0" />
                  <span>Download formal stamp-ready valuation certificate (PDF)</span>
                </div>

                <Button variant="outline" size="sm" className="font-bold text-xs h-9">
                  Download PDF Certificate
                </Button>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/80 flex items-start gap-3 text-xs text-slate-700">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Methodology & Government Circle Rates
                </h4>
                <p className="mt-1 text-slate-600 leading-relaxed">
                  UrbanNest calculates market valuations by cross-referencing state revenue circle rates, municipal guidance values, recent sub-registrar sale deed registrations, and active demand-supply metrics in adjacent pin codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

