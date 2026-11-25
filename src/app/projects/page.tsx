"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Search, CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/button";
import { CustomSelect } from "@/components/ui/custom-select";
import mockProjects from "@/mocks/projects.json";
import mockCities from "@/mocks/cities.json";

export default function ProjectsPage() {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedBhk, setSelectedBhk] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const cityOptions = [
    { label: "All Metros", value: "all" },
    ...mockCities.map((c) => ({ label: c.name, value: c.slug })),
  ];

  const bhkOptions = [
    { label: "All BHKs", value: "all" },
    { label: "2 BHK", value: "2 BHK" },
    { label: "3 BHK", value: "3 BHK" },
    { label: "4 BHK", value: "4 BHK" },
  ];

  const filteredProjects = mockProjects.filter((p) => {
    if (selectedCity !== "all" && !p.city.toLowerCase().includes(selectedCity.toLowerCase())) {
      return false;
    }
    if (selectedBhk !== "all" && !p.bhkConfigs.includes(selectedBhk)) {
      return false;
    }
    if (
      searchQuery &&
      !p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.locality.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !p.builder.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Top Breadcrumb & Header */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">New Launch Projects</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Building2 className="h-3.5 w-3.5" />
                <span>Tier-1 Developer Enclaves</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                New Launch & Pre-Launch Developments
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Explore RERA-registered upcoming residential communities, luxury gated townships, and inaugural price offerings across India.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl shrink-0">
              <CheckCircle2 className="h-4 w-4" />
              <span>100% RERA Authenticated</span>
            </div>
          </div>

          {/* Quick Filters Toolbar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search builder, project, locality..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-900"
              />
            </div>

            {/* City Selector */}
            <CustomSelect
              options={cityOptions}
              value={selectedCity}
              onChange={(val) => setSelectedCity(String(val))}
              placeholder="Select City"
              className="h-10 text-xs sm:text-sm"
            />

            {/* BHK Filter */}
            <CustomSelect
              options={bhkOptions}
              value={selectedBhk}
              onChange={(val) => setSelectedBhk(String(val))}
              placeholder="Select Configuration"
              className="h-10 text-xs sm:text-sm"
            />

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCity("all");
                setSelectedBhk("all");
                setSearchQuery("");
              }}
              className="h-10 text-xs font-semibold text-slate-600"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-bold text-slate-700">
            Showing <span className="text-primary">{filteredProjects.length}</span> Verified Projects
          </span>
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
            <Building2 className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No projects found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your city or BHK filters to see more developments.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
