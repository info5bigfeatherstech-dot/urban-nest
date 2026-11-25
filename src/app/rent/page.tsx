"use client";

import React, { useState } from "react";
import Link from "next/link";
import { KeyRound, Search, FileCheck } from "lucide-react";
import { PropertyCard } from "@/components/cards/PropertyCard";
import { Button } from "@/components/ui/button";
import { CustomSelect } from "@/components/ui/custom-select";
import { Property } from "@/types/property";
import mockProperties from "@/mocks/properties.json";
import mockCities from "@/mocks/cities.json";

export default function RentPage() {
  const [selectedCity, setSelectedCity] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const cityOptions = [
    { label: "All Metros", value: "all" },
    ...mockCities.map((c) => ({ label: c.name, value: c.slug })),
  ];

  // Adjust properties to display as rentals
  const rentalProperties: Property[] = (mockProperties as Property[]).map((p) => ({
    ...p,
    price: Math.round(p.price * 0.002), // ~₹35k - ₹65k/mo
    pricePerSqFt: Math.round(p.pricePerSqFt * 0.002),
    listingType: "rent" as const,
  }));

  const filtered = rentalProperties.filter((p) => {
    if (selectedCity !== "all" && !p.city.toLowerCase().includes(selectedCity.toLowerCase())) return false;
    if (
      searchQuery &&
      !p.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.locality.toLowerCase().includes(searchQuery.toLowerCase())
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
            <span className="text-slate-900 font-semibold">Rent Homes & Apartments</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <KeyRound className="h-4 w-4" />
                <span>Zero Brokerage Options Available</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Rental Homes, Flats & Co-Living
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Browse verified furnished and semi-furnished apartments for rent directly from verified landlords.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild variant="outline" size="sm" className="gap-2 shrink-0">
                <Link href="/rental-agreement">
                  <FileCheck className="h-4 w-4 text-primary" />
                  <span>Rental Agreement Service</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search locality or landmark..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary text-slate-900"
              />
            </div>

            <CustomSelect
              options={cityOptions}
              value={selectedCity}
              onChange={(val) => setSelectedCity(String(val))}
              placeholder="City"
              className="h-10 text-xs sm:text-sm"
            />

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCity("all");
                setSearchQuery("");
              }}
              className="h-10 text-xs font-semibold text-slate-600"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-bold text-slate-700">
            Showing <span className="text-primary">{filtered.length}</span> Rental Homes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))}
        </div>
      </div>
    </div>
  );
}
