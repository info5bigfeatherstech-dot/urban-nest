"use client";

import React, { use } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ArrowLeft,
  MapPin,
  Train,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Property } from "@/types/property";
import mockLocalities from "@/mocks/localities.json";
import mockProperties from "@/mocks/properties.json";
import { PropertyCard } from "@/components/cards/PropertyCard";

interface LocalityDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default function LocalityDetailPage({ params }: LocalityDetailPageProps) {
  const resolvedParams = use(params);

  // Match by slug or partial name
  const locality = mockLocalities.find(
    (l) =>
      l.id.toLowerCase() === resolvedParams.slug.toLowerCase() ||
      l.name.toLowerCase().replace(/[^a-z0-9]/g, "-").includes(resolvedParams.slug.toLowerCase()) ||
      resolvedParams.slug.toLowerCase().includes(l.citySlug.toLowerCase())
  ) || mockLocalities[0];

  const nearbyProperties = (mockProperties as Property[]).slice(0, 3);

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
            <Link href="/localities" className="hover:text-primary transition-colors">
              Localities
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{locality.name}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <MapPin className="h-4 w-4" />
                <span>Locality Intelligence Report</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                {locality.name}, {locality.cityName}
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                {locality.popularFor}. A thriving residential micro-market with top tier schools, retail high-streets, and robust metro connectivity.
              </p>
            </div>

            <Button asChild variant="outline" size="sm" className="gap-2 shrink-0">
              <Link href="/localities">
                <ArrowLeft className="h-4 w-4" />
                <span>All Localities</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Average Rate</span>
            <span className="text-2xl font-heading font-extrabold text-slate-900 block mt-1">
              ₹{locality.avgPricePerSqFt.toLocaleString("en-IN")}
            </span>
            <span className="text-[10px] text-slate-400">per sq.ft capital value</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">1-Year Appreciation</span>
            <span className="text-2xl font-heading font-extrabold text-emerald-600 block mt-1 flex items-center gap-1">
              <TrendingUp className="h-5 w-5" />
              +{locality.priceGrowthPercent}%
            </span>
            <span className="text-[10px] text-slate-400">Year-over-Year price surge</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Livability Score</span>
            <span className="text-2xl font-heading font-extrabold text-primary block mt-1 flex items-center gap-1">
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
              4.6 / 5.0
            </span>
            <span className="text-[10px] text-slate-400">Based on 350+ resident ratings</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <span className="text-[11px] font-bold text-slate-500 uppercase block">Connectivity</span>
            <span className="text-2xl font-heading font-extrabold text-slate-900 block mt-1 flex items-center gap-1">
              <Train className="h-5 w-5 text-primary" />
              High
            </span>
            <span className="text-[10px] text-slate-400">Metro station within 1.2 km</span>
          </div>
        </div>

        {/* Available Properties in this locality */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-heading font-extrabold text-slate-900">
              Properties Available in {locality.name}
            </h2>
            <Link
              href={`/buy?city=${locality.citySlug}&locality=${encodeURIComponent(locality.name)}`}
              className="text-xs font-bold text-primary hover:underline"
            >
              View all listings &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nearbyProperties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

