"use client";

import React from "react";
import { useWhyUsStats } from "@/hooks/queries/useContent";
import { CountUp } from "@/components/common/CountUp";
import { ShieldCheck, BadgePercent, FileCheck2, Headphones } from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  BadgePercent,
  FileCheck2,
  Headphones,
};

export function WhyUrbanNestSection() {
  const { data: stats } = useWhyUsStats();

  return (
    <section className="py-16 sm:py-24 bg-dark text-white relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-white/10 px-3 py-1 rounded-full border border-white/10">
            The UrbanNest Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold tracking-tight text-white">
            Built on Rigorous Verification, Not Just Listings
          </h2>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Finding a home is the biggest financial transaction most families ever make.
            We eliminate deceitful duplicate postings, obsolete pricing, and unregistered projects.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats?.map((stat) => {
            const Icon = ICON_MAP[stat.iconName] || ShieldCheck;
            return (
              <div
                key={stat.id}
                className="group relative flex flex-col p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-accent group-hover:scale-110 transition-transform mb-5 shadow-inner">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="font-heading text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
                  <CountUp
                    end={stat.targetNumber}
                    suffix={stat.suffix}
                    duration={1800}
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">
                  {stat.label}
                </h3>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

