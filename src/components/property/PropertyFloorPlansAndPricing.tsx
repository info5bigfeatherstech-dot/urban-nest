"use client";

import React, { useState } from "react";
import {
  Phone,
  ChevronDown,
  ArrowRight,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { IsometricFloorPlan } from "./IsometricFloorPlan";
import { useUiStore } from "@/store/useUiStore";
import { cn } from "@/lib/utils";

interface FloorPlanItem {
  id: string;
  bhk: string;
  areaSqFt: number;
  areaSqM: number;
  price: string;
  possession: string;
  isometricType: "2bhk-compact" | "2bhk-large" | "3bhk" | "4bhk";
}

interface PropertyFloorPlansAndPricingProps {
  propertyName?: string;
  developerName?: string;
  propertyType?: string;
}

const FLOOR_PLANS_BY_BHK: Record<string, FloorPlanItem[]> = {
  "2 BHK": [
    {
      id: "fp-2bhk-1",
      bhk: "2 BHK",
      areaSqFt: 650,
      areaSqM: 60.39,
      price: "₹ 1 Cr",
      possession: "Ready To Move\nAug '24 possession",
      isometricType: "2bhk-compact",
    },
    {
      id: "fp-2bhk-2",
      bhk: "2 BHK",
      areaSqFt: 648,
      areaSqM: 60.2,
      price: "Price on request",
      possession: "Ready To Move\nImmediate possession",
      isometricType: "2bhk-large",
    },
    {
      id: "fp-2bhk-3",
      bhk: "2 BHK",
      areaSqFt: 900,
      areaSqM: 83.61,
      price: "₹ 1.25 Cr",
      possession: "Ready To Move\nImmediate possession",
      isometricType: "2bhk-large",
    },
  ],
  "3 BHK": [
    {
      id: "fp-3bhk-1",
      bhk: "3 BHK",
      areaSqFt: 1100,
      areaSqM: 102.19,
      price: "₹ 2.25 Cr",
      possession: "Ready To Move\nImmediate possession",
      isometricType: "3bhk",
    },
    {
      id: "fp-3bhk-2",
      bhk: "3 BHK",
      areaSqFt: 1450,
      areaSqM: 134.7,
      price: "₹ 2.85 Cr",
      possession: "Ready To Move\nDec '24 possession",
      isometricType: "3bhk",
    },
    {
      id: "fp-3bhk-3",
      bhk: "3 BHK",
      areaSqFt: 1900,
      areaSqM: 176.52,
      price: "₹ 3.6 Cr",
      possession: "Ready To Move\nImmediate possession",
      isometricType: "3bhk",
    },
  ],
  "4 BHK": [
    {
      id: "fp-4bhk-1",
      bhk: "4 BHK",
      areaSqFt: 1900,
      areaSqM: 176.52,
      price: "₹ 3.45 Cr",
      possession: "Ready To Move\nImmediate possession",
      isometricType: "4bhk",
    },
    {
      id: "fp-4bhk-2",
      bhk: "4 BHK",
      areaSqFt: 2400,
      areaSqM: 222.96,
      price: "Price on request",
      possession: "Ready To Move\nDec '25 possession",
      isometricType: "4bhk",
    },
    {
      id: "fp-4bhk-3",
      bhk: "4 BHK",
      areaSqFt: 2700,
      areaSqM: 250.84,
      price: "₹ 4.5 Cr",
      possession: "Ready To Move\nImmediate possession",
      isometricType: "4bhk",
    },
  ],
};

const CONFIG_CARDS = [
  {
    bhk: "2 BHK",
    title: "2 BHK Independent Floor",
    areaRange: "650 - 900 sqft (60.39 - 83.61 sqm)",
    priceRange: "₹ 1 - 1.25 Cr + Charges",
  },
  {
    bhk: "3 BHK",
    title: "3 BHK Independent Floor",
    areaRange: "1100 - 1900 sqft (102.19 - 176.52 sqm)",
    priceRange: "₹ 2.25 - 3.6 Cr + Charges",
  },
  {
    bhk: "4 BHK",
    title: "4 BHK Independent Floor",
    areaRange: "1900 - 2700 sqft (176.52 - 250.84 sqm)",
    priceRange: "₹ 3.45 - 4.5 Cr + Charges",
  },
];

export function PropertyFloorPlansAndPricing({
  propertyName = "Sky High Luxury Homes",
  developerName = "Sky High Developers",
  propertyType = "Independent Floor",
}: PropertyFloorPlansAndPricingProps) {
  const [activeBhk, setActiveBhk] = useState<string>("2 BHK");
  const [showMoreHighlights, setShowMoreHighlights] = useState(false);
  const [selectedFloorPlan3D, setSelectedFloorPlan3D] = useState<FloorPlanItem | null>(null);
  const { openContactModal } = useUiStore();

  const currentFloorPlans = FLOOR_PLANS_BY_BHK[activeBhk] || FLOOR_PLANS_BY_BHK["2 BHK"];

  return (
    <div className="space-y-8 my-8">
      {/* =========================================================================
          SECTION 1: CONFIGURATION CARDS & WHY CHOOSE US (TOP PART OF SCREENSHOT)
         ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left 2 Cols: BHK Configuration Overview Cards */}
        <div className="lg:col-span-2 space-y-3">
          <h2 className="font-heading font-extrabold text-xl text-slate-900 tracking-tight">
            2, 3, 4 BHK {propertyType}
          </h2>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {CONFIG_CARDS.map((cfg) => {
                const isSelected = activeBhk === cfg.bhk;
                return (
                  <div
                    key={cfg.bhk}
                    onClick={() => setActiveBhk(cfg.bhk)}
                    className={cn(
                      "p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between select-none relative group",
                      isSelected
                        ? "bg-blue-50/40 border-primary ring-2 ring-primary/20 shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-xs"
                    )}
                  >
                    <div>
                      <h3 className="font-heading font-bold text-sm text-slate-900 mb-2">
                        {cfg.bhk} {propertyType}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase block tracking-wider">
                        Super Built-up Area
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-800 mt-0.5">
                        <span className="line-clamp-1">{cfg.areaRange}</span>
                        <ChevronDown className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 font-heading font-extrabold text-sm text-slate-900">
                      <span>{cfg.priceRange}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Blue Round Carousel Navigation Arrow Button (as shown in user screenshot) */}
            <button
              type="button"
              onClick={() => {
                const keys = ["2 BHK", "3 BHK", "4 BHK"];
                const nextIdx = (keys.indexOf(activeBhk) + 1) % keys.length;
                setActiveBhk(keys[nextIdx]);
              }}
              aria-label="Next configuration"
              className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-blue-500/25 hover:bg-primary-hover hover:scale-110 active:scale-95 transition-all"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right 1 Col: "— High Luxury Homes?" Box (Top Right of Screenshot) */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
          <div>
            <div className="flex items-center gap-1.5 text-amber-600 font-extrabold text-sm mb-2">
              <span className="text-lg leading-none">—</span>
              <span>High Luxury Homes?</span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                <span>Dedicated &quot;Theater Home&quot; amenity for entertainment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                <span>Located just 350m from Global Pratibha International School</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                <span>Homes are well-ventilated, with ample natural light</span>
              </li>

              {showMoreHighlights && (
                <>
                  <li className="flex items-start gap-2 animate-in fade-in duration-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span>Italian marble flooring across all living and dining zones</span>
                  </li>
                  <li className="flex items-start gap-2 animate-in fade-in duration-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span>3-tier automated biometric security and EV charging bays</span>
                  </li>
                </>
              )}
            </ul>

            <button
              type="button"
              onClick={() => setShowMoreHighlights(!showMoreHighlights)}
              className="text-xs font-bold text-primary hover:underline mt-2 inline-flex items-center gap-1"
            >
              <span>{showMoreHighlights ? "View less" : "View 4 more"}</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          {/* DEVELOPED BY section at bottom */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
                DEVELOPED BY
              </span>
              <h4 className="font-heading font-extrabold text-sm text-slate-900 mt-0.5">
                {developerName}
              </h4>
            </div>

            {/* Developer Logo Badge */}
            <div className="h-9 px-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-xs font-extrabold text-red-600 shadow-2xs">
              <span className="font-heading tracking-tighter">SKY HIGH</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: FLOOR PLANS & PRICING (LOWER PART OF SCREENSHOT)
         ========================================================================= */}
      <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
        {/* Title & 3D Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-heading font-extrabold text-xl text-slate-900 tracking-tight">
              Floor Plans & Pricing
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Architectural 3D floor layouts and built-up area breakdowns.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setSelectedFloorPlan3D(currentFloorPlans[0])}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline self-start sm:self-auto bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100 transition-colors"
          >
            <Box className="h-4 w-4" />
            <span>View Homes in 3D</span>
          </button>
        </div>

        {/* Configuration Pills & Count Indicator */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 hide-scrollbar">
            {["2 BHK", "3 BHK", "4 BHK"].map((bhk) => {
              const isActive = activeBhk === bhk;
              return (
                <button
                  key={bhk}
                  type="button"
                  onClick={() => setActiveBhk(bhk)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
                    isActive
                      ? "border-primary bg-blue-50/70 text-primary shadow-xs ring-1 ring-primary/30"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                  )}
                >
                  {bhk} {propertyType}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-bold text-slate-500">
            {currentFloorPlans.length} Floor Plans Available
          </div>
        </div>

        {/* 3D Isometric Floor Plan Cards Grid (Matching user screenshot) */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentFloorPlans.map((fp) => (
              <div
                key={fp.id}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-card-hover transition-all duration-200 hover:border-primary/40"
              >
                {/* Header: Area with bullet */}
                <div className="mb-2">
                  <div className="flex items-center gap-1.5 font-heading font-extrabold text-sm text-slate-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>
                      {fp.areaSqFt} sqft ({fp.areaSqM} sqm)
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                    Super Built-up Area | {fp.bhk}
                  </p>
                </div>

                {/* 3D Isometric Architectural Cutaway Graphic */}
                <div
                  onClick={() => setSelectedFloorPlan3D(fp)}
                  className="cursor-pointer my-2 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-200"
                >
                  <IsometricFloorPlan type={fp.isometricType} />
                </div>

                {/* Price & Possession Details */}
                <div className="mt-auto pt-3 border-t border-slate-100">
                  <div className="font-heading font-extrabold text-base text-slate-900">
                    {fp.price}
                  </div>

                  <div className="min-h-[34px] mt-1">
                    {fp.possession && (
                      <div className="inline-block p-1.5 rounded-lg bg-slate-50 text-[10px] font-semibold text-slate-600 whitespace-pre-line leading-tight">
                        {fp.possession}
                      </div>
                    )}
                  </div>

                  {/* Request Callback with Phone Icon */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() =>
                        openContactModal({
                          id: fp.id,
                          name: `${propertyName} (${fp.bhk} - ${fp.areaSqFt} sqft)`,
                          builderName: developerName,
                        })
                      }
                      className="flex items-center justify-between w-full text-xs font-bold text-primary hover:text-primary-hover group/btn"
                    >
                      <span>Request Callback</span>
                      <div className="h-7 w-7 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-colors">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Blue Round Carousel Navigation Arrow Button (as shown in user screenshot) */}
          <button
            type="button"
            onClick={() => {
              const keys = ["2 BHK", "3 BHK", "4 BHK"];
              const nextIdx = (keys.indexOf(activeBhk) + 1) % keys.length;
              setActiveBhk(keys[nextIdx]);
            }}
            aria-label="Next floor plan"
            className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-blue-500/25 hover:bg-primary-hover hover:scale-110 active:scale-95 transition-all"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 3D Interactive Virtual Tour Modal */}
      {selectedFloorPlan3D && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="font-heading font-extrabold text-base text-slate-900">
                  3D Architectural Layout: {selectedFloorPlan3D.bhk} ({selectedFloorPlan3D.areaSqFt} sqft)
                </h4>
                <p className="text-xs text-slate-500">
                  {selectedFloorPlan3D.price} • Super Built-up Area
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedFloorPlan3D(null)}
                className="h-8 w-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>
            </div>

            <IsometricFloorPlan type={selectedFloorPlan3D.isometricType} className="aspect-[16/10]" />

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500 font-medium">
                Verified Architectural Blueprint compliant with municipal guidelines.
              </span>
              <Button
                size="sm"
                onClick={() => {
                  setSelectedFloorPlan3D(null);
                  openContactModal({
                    id: selectedFloorPlan3D.id,
                    name: `${propertyName} - ${selectedFloorPlan3D.bhk} 3D Tour`,
                    builderName: developerName,
                  });
                }}
                className="bg-primary hover:bg-primary-hover text-white text-xs font-bold h-9 px-4 gap-1.5"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Request Site Visit</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
