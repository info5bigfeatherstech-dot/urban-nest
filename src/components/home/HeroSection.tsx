"use client";

import React from "react";
import Image from "next/image";
import { SearchCard } from "@/components/search/SearchCard";
import { Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 overflow-x-clip bg-tint/60">
      {/* Background Architectural Photo with Subtle Editorial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&auto=format&fit=crop&q=85"
          alt="Modern luxury Indian residence"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft, refined gradient overlay that ensures WCAG AA contrast for text and search card */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/85 via-[#0A192F]/70 to-[#0A192F]/92" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Headline and Trust Accents */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-8 sm:mb-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white border border-white/20 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span>India&apos;s Most Trusted Property Discovery Network</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15]">
            Find a home that <br className="hidden sm:inline" />
            <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-8">
              feels like yours.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-normal">
            Explore 250,000+ verified owner listings, premier RERA-registered new developments,
            and high-growth investment plots across India&apos;s leading cities.
          </p>
        </div>

        {/* Floating Search Card */}
        <div className="relative z-20">
          <SearchCard />
        </div>
      </div>
    </section>
  );
}

