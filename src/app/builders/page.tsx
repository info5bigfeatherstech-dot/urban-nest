"use client";

import React from "react";
import Link from "next/link";
import { Building, ArrowLeft, ArrowUpRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import mockBuilders from "@/mocks/builders.json";

export default function BuildersPage() {
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
            <span className="text-slate-900 font-semibold">Real Estate Developers</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Award className="h-4 w-4" />
                <span>Tier-1 Construction Conglomerates</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Featured Real Estate Developers
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Partnering exclusively with reputable Indian builders with zero litigation track records, documented RERA compliance, and proven delivery milestones.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockBuilders.map((builder) => (
            <Link
              key={builder.id}
              href={`/projects?builder=${encodeURIComponent(builder.shortName)}`}
              className="group p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-card-hover hover:border-primary/40 transition-all text-center flex flex-col items-center justify-between"
            >
              <div className="flex flex-col items-center">
                <div className="h-16 w-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors mb-4 shadow-sm">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-primary transition-colors">
                  {builder.name}
                </h3>
                <span className="text-xs text-slate-500 mt-1">
                  {builder.experienceYears} Years Track Record
                </span>
              </div>

              <div className="w-full pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  {builder.projectsCount}+ Projects
                </span>
                <span className="text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

