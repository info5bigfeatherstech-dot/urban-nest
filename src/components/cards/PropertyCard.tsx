"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, BedDouble, Bath, Maximize2, ArrowUpRight } from "lucide-react";
import { Property } from "@/types/property";
import { formatArea } from "@/lib/format";
import { PriceTag } from "@/components/common/PriceTag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUiStore } from "@/store/useUiStore";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { openContactModal } = useUiStore();

  const images = property.images && property.images.length > 0
    ? property.images
    : ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"];

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {/* Image Gallery with Interactive Dots */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-tint">
        <Link
          href={`/properties/${property.id}`}
          className="absolute inset-0 block cursor-pointer z-0"
          aria-label={`View details of ${property.title}`}
        >
          <Image
            src={images[activeImageIndex]}
            alt={property.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        </Link>

        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5 pointer-events-none z-10">
          {property.isVerified && (
            <Badge variant="success" className="shadow-sm flex items-center gap-1 py-0.5">
              <CheckCircle className="h-3 w-3" />
              <span>Verified</span>
            </Badge>
          )}
          <Badge
            variant={property.postedBy === "Owner" ? "secondary" : "outline"}
            className="shadow-sm text-[11px] bg-white/95"
          >
            By {property.postedBy}
          </Badge>
        </div>

        {/* Photo Gallery Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/55 px-2.5 py-1 rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  activeImageIndex === idx ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                )}
                aria-label={`View photo ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Property Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Price & Price per sq.ft */}
        <div className="mb-2">
          <PriceTag
            price={property.price}
            pricePerSqFt={property.pricePerSqFt}
            size="md"
          />
        </div>

        {/* Title */}
        <Link href={`/properties/${property.id}`}>
          <h3 className="font-heading text-base font-semibold text-ink line-clamp-1 mb-2 hover:text-primary transition-colors flex items-center justify-between">
            <span>{property.title}</span>
            <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-primary transition-opacity shrink-0" />
          </h3>
        </Link>

        {/* Locality */}
        <div className="flex items-center gap-1.5 text-xs text-muted mb-3.5">
          <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="line-clamp-1">{property.locality}, {property.city}</span>
        </div>

        {/* Specs Grid: BHK, Bath, Area */}
        <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-tint/60 text-xs text-ink font-medium mb-4">
          <div className="flex items-center gap-1.5">
            <BedDouble className="h-4 w-4 text-primary shrink-0" />
            <span>{property.bhk} BHK</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="h-4 w-4 text-primary shrink-0" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize2 className="h-4 w-4 text-primary shrink-0" />
            <span className="truncate">{formatArea(property.areaSqFt)}</span>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-2">
          <Button
            size="sm"
            variant="default"
            onClick={() =>
              openContactModal({
                id: property.id,
                name: property.title,
                builderName: property.posterName,
              })
            }
            className="w-full text-xs h-9 gap-1.5 bg-primary hover:bg-primary-hover text-white"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>Contact</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

