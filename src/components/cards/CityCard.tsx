"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { City } from "@/types/city";
import { formatNumber } from "@/lib/format";
import { useCityStore } from "@/store/useCityStore";
import { cn } from "@/lib/utils";

interface CityCardProps {
  city: City;
  className?: string;
}

export function CityCard({ city, className }: CityCardProps) {
  const { setSelectedCity } = useCityStore();

  return (
    <Link
      href={`/buy?city=${city.slug}`}
      onClick={() => setSelectedCity(city.name, city.slug)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover focus:outline-none focus:ring-2 focus:ring-primary",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-tint">
        <Image
          src={city.image}
          alt={city.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent transition-opacity group-hover:from-dark/95" />

        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="font-heading text-lg font-bold tracking-tight text-white group-hover:text-accent transition-colors">
            {city.name}
          </h3>
          <p className="text-xs text-white/80 font-medium">
            {formatNumber(city.propertyCount)}+ properties
          </p>
        </div>
      </div>
    </Link>
  );
}

