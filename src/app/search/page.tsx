"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PropertyCard } from "@/components/cards/PropertyCard";
import { Property } from "@/types/property";
import mockProperties from "@/mocks/properties.json";

function SearchResultsContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "buy";
  const city = searchParams.get("city") || "delhi-ncr";
  const localities = searchParams.get("localities");
  const propertyType = searchParams.get("type");
  const minBudget = searchParams.get("minBudget");
  const maxBudget = searchParams.get("maxBudget");
  const bhk = searchParams.get("bhk");
  const filters = searchParams.get("filters");

  const normalizedCityOrState = city.replace(/-/g, " ").toLowerCase();
  const matchingProperties = (mockProperties as Property[]).filter((p) => {
    if (
      city &&
      !p.state.toLowerCase().includes(normalizedCityOrState) &&
      !p.city.toLowerCase().includes(normalizedCityOrState)
    ) {
      return false;
    }
    if (minBudget && p.price < Number(minBudget)) return false;
    if (maxBudget && p.price > Number(maxBudget)) return false;
    if (bhk) {
      const bhkList = bhk.split(",");
      const matchesBhk = bhkList.some((b) =>
        b.includes("5+") ? p.bhk >= 5 : b.includes(String(p.bhk))
      );
      if (!matchesBhk) return false;
    }
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" size="sm" className="gap-1.5">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>
          <Badge variant="secondary" className="uppercase font-bold">
            Search Results ({tab.toUpperCase()})
          </Badge>
        </div>

        <div className="p-6 rounded-2xl border border-border bg-white shadow-card space-y-4">
          <div className="flex items-center gap-2 text-primary font-bold text-lg">
            <Search className="h-5 w-5" />
            <span>Search Query Received</span>
          </div>
          <p className="text-sm text-muted">
            The floating SearchCard successfully captured all user criteria and redirected to this search handler with structured URL query parameters:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-lg bg-tint border border-border">
              <span className="font-bold text-muted block">Category / Tab:</span>
              <span className="text-ink font-semibold text-sm capitalize">{tab}</span>
            </div>
            <div className="p-3 rounded-lg bg-tint border border-border">
              <span className="font-bold text-muted block">State / Region:</span>
              <span className="text-ink font-semibold text-sm capitalize">{city.replace(/-/g, " ")}</span>
            </div>
            {localities && (
              <div className="p-3 rounded-lg bg-tint border border-border">
                <span className="font-bold text-muted block">Localities:</span>
                <span className="text-ink font-semibold text-sm">{localities}</span>
              </div>
            )}
            {propertyType && (
              <div className="p-3 rounded-lg bg-tint border border-border">
                <span className="font-bold text-muted block">Property Type:</span>
                <span className="text-ink font-semibold text-sm">{propertyType}</span>
              </div>
            )}
            {(minBudget || maxBudget) && (
              <div className="p-3 rounded-lg bg-tint border border-border">
                <span className="font-bold text-muted block">Budget:</span>
                <span className="text-ink font-semibold text-sm">
                  {minBudget ? `₹${minBudget}` : "Min"} to {maxBudget ? `₹${maxBudget}` : "Max"}
                </span>
              </div>
            )}
            {bhk && (
              <div className="p-3 rounded-lg bg-tint border border-border">
                <span className="font-bold text-muted block">BHK Preference:</span>
                <span className="text-ink font-semibold text-sm">{bhk}</span>
              </div>
            )}
            {filters && (
              <div className="p-3 rounded-lg bg-tint border border-border sm:col-span-2">
                <span className="font-bold text-muted block">Applied Quick Filters:</span>
                <span className="text-ink font-semibold text-sm">{filters}</span>
              </div>
            )}
          </div>
        </div>

        {/* Matching Properties Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink">
              Properties in{" "}
              <span className="text-primary capitalize">{city.replace(/-/g, " ")}</span>{" "}
              <span className="text-sm font-semibold text-muted">
                ({matchingProperties.length} found)
              </span>
            </h2>
          </div>

          {matchingProperties.length === 0 ? (
            <div className="p-10 rounded-2xl border border-border bg-white text-center space-y-2">
              <p className="text-sm font-semibold text-ink">
                No properties matched the exact budget/BHK filter in this state.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href={`/buy?state=${encodeURIComponent(city.replace(/-/g, " "))}`}>
                  View All Properties in {city.replace(/-/g, " ")}
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {matchingProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container p-12 text-center">Loading search results...</div>}>
      <SearchResultsContent />
    </Suspense>
  );
}
