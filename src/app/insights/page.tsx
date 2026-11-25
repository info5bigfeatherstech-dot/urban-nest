"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowLeft,
  Search,
  CheckCircle2,
} from "lucide-react";
import { InsightCard } from "@/components/cards/InsightCard";
import { Button } from "@/components/ui/button";
import { RecommendedInsight } from "@/types/insight";
import mockInsights from "@/mocks/insights.json";

export default function InsightsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "locality" | "society">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const insightsList = mockInsights as RecommendedInsight[];

  const filteredInsights = insightsList.filter((item) => {
    if (activeTab === "locality" && item.type !== "Locality Insight") return false;
    if (activeTab === "society" && item.type !== "Society Insight") return false;
    if (
      searchQuery &&
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.city.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Top Header Banner */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">UrbanNest Insights</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Compass className="h-4 w-4" />
                <span>Hyper-Local Real Estate Intelligence</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Locality & Society Insights
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Make confident property decisions with verified resident reviews, capital appreciation histories, average rate per sq.ft, and commute scorecards.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button asChild variant="outline" size="sm" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Search & Tabs Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-6 pt-6 border-t border-slate-100">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl self-start">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "all" ? "bg-white text-primary shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All Insights ({mockInsights.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("locality")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "locality" ? "bg-white text-primary shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Locality Insights
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("society")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "society" ? "bg-white text-primary shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Society Insights
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Dwarka, Bandra, Whitefield..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-900"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Value Props Strip */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
          {[
            { title: "Understand Localities", desc: "Safety, livability & connectivity ratings" },
            { title: "Read Resident Reviews", desc: "100% genuine opinions from verified occupants" },
            { title: "Check Price Trends", desc: "Historical CAGR & quarterly sq.ft index" },
            { title: "Tools & Utilities", desc: "Commute calculators, stamp duty & EMI maps" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights Cards Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-bold text-slate-700">
            Showing <span className="text-primary">{filteredInsights.length}</span> Intelligence Reports
          </span>
        </div>

        {filteredInsights.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 p-8">
            <Compass className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No insights found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try searching for a different locality, society or city.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredInsights.map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

