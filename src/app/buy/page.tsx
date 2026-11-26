"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Home, Search, X } from "lucide-react";
import { PropertyCard } from "@/components/cards/PropertyCard";
import { Button } from "@/components/ui/button";
import { CustomSelect } from "@/components/ui/custom-select";
import { Property } from "@/types/property";
import mockProperties from "@/mocks/properties.json";

function BuyPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stateParam = searchParams.get("state") || "";

  const [selectedState, setSelectedState] = useState(stateParam);
  const [bhk, setBhk] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSelectedState(stateParam);
  }, [stateParam]);

  const bhkOptions = [
    { label: "All Configurations", value: "all" },
    { label: "1 BHK", value: "1" },
    { label: "2 BHK", value: "2" },
    { label: "3 BHK", value: "3" },
    { label: "4 BHK", value: "4" },
  ];

  const propertiesList = mockProperties as Property[];

  const filtered = propertiesList.filter((p) => {
    if (selectedState && !p.state.toLowerCase().includes(selectedState.toLowerCase())) return false;
    if (bhk !== "all" && p.bhk.toString() !== bhk) return false;
    if (
      searchQuery &&
      !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.locality.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.state.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
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
            <span className="text-slate-900 font-semibold">Buy Residential Properties</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Home className="h-4 w-4" />
                <span>Verified Residential Properties</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Residential Homes & Flats for Sale
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Discover verified builder floors, luxury apartments, and ready-to-move homes with direct owner options and verified title deeds.
              </p>
            </div>

            <Button asChild variant="outline" size="sm" className="gap-2 shrink-0">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>

          {/* Filters Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by locality, project..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary text-slate-900"
              />
            </div>

            <CustomSelect
              options={bhkOptions}
              value={bhk}
              onChange={(val) => setBhk(String(val))}
              placeholder="BHK"
              className="h-10 text-xs sm:text-sm"
            />

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedState("");
                setBhk("all");
                setSearchQuery("");
                if (stateParam) router.replace("/buy");
              }}
              className="h-10 text-xs font-semibold text-slate-600"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <span className="text-sm font-bold text-slate-700">
            Showing <span className="text-primary">{filtered.length}</span> Ready Properties
          </span>
          {selectedState && (
            <button
              type="button"
              onClick={() => {
                setSelectedState("");
                router.replace("/buy");
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-200 text-xs font-semibold hover:bg-blue-100 transition-colors"
            >
              <span>State: {selectedState}</span>
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
            <Home className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No properties match your filter</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try resetting your city or BHK configuration filter.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((prop) => (
              <PropertyCard key={prop.id} property={prop} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BuyPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-16 text-center text-sm text-slate-500">Loading properties...</div>}>
      <BuyPageContent />
    </Suspense>
  );
}
