import React from "react";
import Link from "next/link";
import { PlusCircle, Landmark, Calculator, FileCheck, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ACTION_TILES = [
  {
    id: "post-property",
    title: "Post Property Free",
    desc: "Sell or rent out faster to 10M+ genuine homebuyers.",
    icon: PlusCircle,
    href: "/post-property",
    badge: "100% FREE",
    badgeVariant: "success" as const,
  },
  {
    id: "home-loans",
    title: "Home Loans",
    desc: "Instant pre-approval from 25+ top banks starting 8.35%* p.a.",
    icon: Landmark,
    href: "/home-loans",
    badge: "Lowest ROI",
    badgeVariant: "accent" as const,
  },
  {
    id: "property-valuation",
    title: "Property Valuation",
    desc: "Free AI-backed market valuation report for any Indian address.",
    icon: Calculator,
    href: "/property-valuation",
    badge: "Instant AI",
    badgeVariant: "secondary" as const,
  },
  {
    id: "rent-agreement",
    title: "Rental Agreement",
    desc: "Biometric e-stamping and doorstep police verification in 48 hrs.",
    icon: FileCheck,
    href: "/rent-agreement",
    badge: "Legal Safe",
    badgeVariant: "secondary" as const,
  },
];

export function QuickActionTiles() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ACTION_TILES.map((tile) => {
          const Icon = tile.icon;
          return (
            <Link
              key={tile.id}
              href={tile.href}
              className="group flex flex-col justify-between p-5 rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Badge variant={tile.badgeVariant} className="text-[11px] font-bold">
                    {tile.badge}
                  </Badge>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-ink group-hover:text-primary transition-colors">
                  {tile.title}
                </h3>
                <p className="text-xs text-muted mt-1 leading-relaxed">
                  {tile.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

