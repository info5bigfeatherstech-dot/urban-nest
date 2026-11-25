"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CommercialPage() {
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
            <span className="text-slate-900 font-semibold">Commercial Real Estate</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Briefcase className="h-4 w-4" />
                <span>Grade-A Institutional Spaces</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Commercial Office Spaces, Shops & Land
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                High-yield pre-leased commercial assets, retail flagship showrooms, and corporate tech parks with 8% - 10% annual rental return.
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Ready & Bare-Shell Office Spaces",
              desc: "IT SEZs, Business Parks, and Private Corporate Suites across Cyber City, BKC, and Whitefield.",
              count: "3,400+ Spaces",
              yield: "8.5% Avg Yield",
            },
            {
              title: "High-Street Retail & Showrooms",
              desc: "Ground-floor prime frontage spaces in premier malls and commercial avenues with assured footfall.",
              count: "1,850+ Shops",
              yield: "9.2% Avg Yield",
            },
            {
              title: "Pre-Leased Commercial Assets",
              desc: "Tenanted by Fortune 500 companies with 9-year lease locks and registered security deposits.",
              count: "620+ Assets",
              yield: "9.8% High ROI",
            },
          ].map((cat, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-primary bg-blue-50 px-2.5 py-1 rounded-lg">
                  {cat.yield}
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900 mt-3">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {cat.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">{cat.count}</span>
                <Button size="sm" className="bg-primary text-white text-xs font-bold h-8 px-3">
                  Inquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
