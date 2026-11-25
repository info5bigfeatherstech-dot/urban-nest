"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto space-y-6">
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
              <span className="font-bold text-muted block">City:</span>
              <span className="text-ink font-semibold text-sm capitalize">{city}</span>
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
