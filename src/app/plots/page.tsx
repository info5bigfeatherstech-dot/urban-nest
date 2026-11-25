"use client";

import React from "react";
import Link from "next/link";
import { Trees, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PlotsPage() {
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
            <span className="text-slate-900 font-semibold">Residential Plots & Land</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Trees className="h-4 w-4" />
                <span>100% Clear Title Land</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Residential Plots, Gated Enclaves & Farmhouses
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Explore government-approved layouts, expressway growth corridors, and DTCP/BMRDA-approved plots with immediate registry and bank loan pre-approvals.
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Yamuna Expressway Growth Corridor",
              city: "Greater Noida, Delhi NCR",
              rates: "₹38,000 - ₹55,000 / sq.yd",
              growth: "+32% 1-Yr Growth",
              desc: "Near Upcoming Noida International Airport & Film City. RERA-approved plots with underground power cables.",
            },
            {
              title: "Devanahalli Aerospace Park Belts",
              city: "Bengaluru, Karnataka",
              rates: "₹4,200 - ₹7,500 / sq.ft",
              growth: "+28% 1-Yr Growth",
              desc: "Close to Kempegowda International Airport and BIAL IT Investment Region with 60ft wide arterial roads.",
            },
            {
              title: "Shankarpalli & Mokila Green Enclaves",
              city: "Hyderabad, Telangana",
              rates: "₹25,000 - ₹42,000 / sq.yd",
              growth: "+22% 1-Yr Growth",
              desc: "Direct access to Neopolis & Financial District. Gated villa layouts with active clubhouse & security.",
            },
          ].map((plot, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mb-2">
                  {plot.growth}
                </span>
                <h3 className="font-heading font-bold text-lg text-slate-900">{plot.title}</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span>{plot.city}</span>
                </p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{plot.desc}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Price</span>
                  <span className="text-xs font-extrabold text-slate-900">{plot.rates}</span>
                </div>
                <Button size="sm" className="bg-primary text-white text-xs font-bold h-8 px-3">
                  Request Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
