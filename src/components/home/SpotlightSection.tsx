import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Key, Trees, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const SPOTLIGHTS = [
  {
    id: "rent-spotlight",
    title: "Rental Living",
    heading: "Curated Furnished Homes with Zero Hassle",
    desc: "Discover verified rental flats, serviced apartments, and shared homes with digital agreements.",
    cta: "Find Rental Homes",
    href: "/rent",
    icon: Key,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=80",
    badge: "For Renters & Landlords",
  },
  {
    id: "plots-spotlight",
    title: "Plots & Land",
    heading: "Gated Land Parcels & High-Appreciation Plots",
    desc: "Invest in approved residential plots along upcoming expressway corridors with clear land titles.",
    cta: "Explore Land & Plots",
    href: "/plots",
    icon: Trees,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80",
    badge: "Long-term Wealth",
  },
  {
    id: "commercial-spotlight",
    title: "Commercial Spaces",
    heading: "Grade-A Tech Parks & High-Street Retail",
    desc: "Pre-leased commercial offices with 8-10% rental yields and premium showroom spaces in central districts.",
    cta: "Explore Commercial",
    href: "/commercial",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    badge: "Institutional Yield",
  },
];

export function SpotlightSection() {
  return (
    <section className="py-14 sm:py-20 bg-tint/60 border-y border-border/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {SPOTLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border p-6 sm:p-8 min-h-[360px] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Background Image with Deep Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/85 to-dark/60" />
                </div>

                {/* Content Top */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm border border-white/10">
                      <Icon className="h-3.5 w-3.5 text-accent" />
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {item.heading}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* CTA Button Bottom */}
                <div className="relative z-10 pt-6">
                  <Button
                    asChild
                    variant="accent"
                    size="sm"
                    className="h-10 px-5 font-bold shadow-md gap-2"
                  >
                    <Link href={item.href}>
                      <span>{item.cta}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

