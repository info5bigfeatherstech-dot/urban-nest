"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  CheckCircle,
  Phone,
  BedDouble,
  Bath,
  Maximize2,
  Calendar,
  User,
  ShieldCheck,
  ArrowUp,
  Compass,
  Building2,
  Sparkles,
  Share2,
  Camera,
  Waves,
  Dumbbell,
  Zap,
  Car,
  Trees,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PriceTag } from "@/components/common/PriceTag";
import { formatArea } from "@/lib/format";
import { useUiStore } from "@/store/useUiStore";
import { PropertyFloorPlansAndPricing } from "@/components/property/PropertyFloorPlansAndPricing";
import { PropertyCard } from "@/components/cards/PropertyCard";
import mockProperties from "@/mocks/properties.json";
import { cn } from "@/lib/utils";

interface PropertyDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const resolvedParams = use(params);
  const { openContactModal } = useUiStore();

  const property = mockProperties.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showPhotoLightbox, setShowPhotoLightbox] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const images = property.images && property.images.length > 0
    ? property.images
    : ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"];

  // Similar properties from same city or other ready-to-move homes
  const similarProperties = mockProperties
    .filter((p) => p.id !== property.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-white border-b border-slate-200/80 py-3 sm:py-3.5 sticky top-16 sm:top-[68px] z-30 shadow-2xs">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-slate-500 min-w-0 overflow-hidden">
            <Link href="/" className="hover:text-primary transition-colors shrink-0">
              Home
            </Link>
            <span>/</span>
            <Link href="/buy" className="hover:text-primary transition-colors shrink-0">
              Properties
            </Link>
            <span>/</span>
            <span className="text-slate-400 shrink-0">{property.city}</span>
            <span>/</span>
            <span className="text-slate-900 font-bold truncate max-w-[180px] sm:max-w-md">
              {property.title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="h-8 text-xs font-semibold gap-1.5 border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Share2 className="h-3.5 w-3.5 text-slate-500" />
              <span>{copiedLink ? "Copied!" : "Share"}</span>
            </Button>

            <Link
              href="/buy"
              className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline ml-2"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>All Homes</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Left Column (2 Cols): Gallery, Specifications, Floor Plans, Amenities, Location */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery Box with Interactive Thumbnails */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full bg-slate-900 group">
                <Image
                  src={images[activeImageIndex]}
                  alt={property.title}
                  fill
                  priority
                  className="object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 z-10">
                  {property.isVerified && (
                    <Badge variant="success" className="shadow-md flex items-center gap-1 font-bold text-xs py-1">
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>Verified Title</span>
                    </Badge>
                  )}
                  <Badge variant="secondary" className="shadow-md bg-white/95 text-slate-900 font-bold text-xs py-1">
                    Posted by {property.postedBy}
                  </Badge>
                  <Badge className="shadow-md bg-primary text-white font-bold text-xs py-1">
                    Ready to Move
                  </Badge>
                </div>

                {/* View Photos Button */}
                <button
                  type="button"
                  onClick={() => setShowPhotoLightbox(true)}
                  className="absolute right-4 bottom-4 z-10 bg-white/95 hover:bg-white text-slate-900 font-bold text-xs px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
                >
                  <Camera className="h-4 w-4 text-primary" />
                  <span>View All Photos ({images.length})</span>
                </button>

                {/* Overlay Title */}
                <div className="absolute left-4 bottom-4 right-36 text-white pointer-events-none">
                  <h1 className="text-lg sm:text-2xl lg:text-3xl font-heading font-extrabold text-white drop-shadow-sm leading-tight">
                    {property.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-white/90 flex items-center gap-1.5 mt-1 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{property.locality}, {property.city}</span>
                  </p>
                </div>
              </div>

              {/* Clickable Thumbnail Strip */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 p-3 bg-slate-100/80 border-t border-slate-200/60 overflow-x-auto hide-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={cn(
                        "relative h-16 w-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all cursor-pointer",
                        activeImageIndex === idx
                          ? "border-primary ring-2 ring-primary/30 scale-102 shadow-sm"
                          : "border-transparent opacity-70 hover:opacity-100"
                      )}
                    >
                      <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Key Specs Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                    Property Snapshot
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Verified configuration details and architectural metrics
                  </p>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  Occupancy Certificate Received
                </span>
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-primary shrink-0">
                    <BedDouble className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Bedrooms</span>
                    <span className="text-sm font-extrabold text-slate-900">{property.bhk} BHK</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-primary shrink-0">
                    <Bath className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Bathrooms</span>
                    <span className="text-sm font-extrabold text-slate-900">{property.baths} Baths</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-primary shrink-0">
                    <Maximize2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Super Built-up</span>
                    <span className="text-sm font-extrabold text-slate-900">{formatArea(property.areaSqFt)}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-primary shrink-0">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Possession</span>
                    <span className="text-sm font-extrabold text-slate-900">{property.possessionStatus}</span>
                  </div>
                </div>
              </div>

              {/* Detailed Specs Table */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 pt-4 border-t border-slate-100 text-xs">
                <div>
                  <span className="text-slate-500 block font-medium">Floor Position</span>
                  <span className="font-extrabold text-slate-800 text-sm">{property.floor}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-medium">Main Facing</span>
                  <span className="font-extrabold text-slate-800 text-sm flex items-center gap-1 mt-0.5">
                    <Compass className="h-3.5 w-3.5 text-primary" />
                    <span>{property.facing}</span>
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block font-medium">Furnishing Status</span>
                  <span className="font-extrabold text-slate-800 text-sm">{property.furnishingStatus}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-medium">Property Type</span>
                  <span className="font-extrabold text-slate-800 text-sm">{property.propertyType}</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-medium">Ownership Type</span>
                  <span className="font-extrabold text-slate-800 text-sm">Freehold Title</span>
                </div>
                <div>
                  <span className="text-slate-500 block font-medium">Age of Construction</span>
                  <span className="font-extrabold text-slate-800 text-sm">Brand New (0-1 Year)</span>
                </div>
              </div>
            </div>

            {/* =========================================================================
                THE 99ACRES USER SCREENSHOT SECTION:
                BHK Configurations Overview, Luxury Highlights, and 3D Isometric Floor Plans
               ========================================================================= */}
            <PropertyFloorPlansAndPricing
              propertyName={property.title}
              developerName={property.posterName || "Sky High Developers"}
              propertyType={property.propertyType || "Independent Floor"}
            />

            {/* Society & Lifestyle Amenities */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                  Society & Lifestyle Amenities
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Exclusive world-class facilities managed under resident association
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Waves className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Infinity Pool</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Dumbbell className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-800">State Gym</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Building2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Clubhouse</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <ShieldAlert className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-800">24x7 Security</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Zap className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-800">100% Power Backup</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Car className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-800">EV Charging Bays</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Trees className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Zen Garden & Track</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Sparkles className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Kids Play Haven</span>
                </div>
              </div>
            </div>

            {/* Locality & Connectivity Matrix */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
              <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                    Locality & Travel Distance
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Proximity from {property.locality}, {property.city}
                  </p>
                </div>
                <Link
                  href={`/localities`}
                  className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Locality Insights</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Transit</span>
                  <span className="text-xs font-extrabold text-slate-900 mt-1 block">Metro Station</span>
                  <span className="text-xs font-bold text-primary">500 m (5 mins walk)</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Education</span>
                  <span className="text-xs font-extrabold text-slate-900 mt-1 block">Top Schools</span>
                  <span className="text-xs font-bold text-primary">350 m away</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Healthcare</span>
                  <span className="text-xs font-extrabold text-slate-900 mt-1 block">Multi-Speciality Hospital</span>
                  <span className="text-xs font-bold text-primary">1.2 km (4 mins drive)</span>
                </div>
              </div>
            </div>

            {/* Poster Info Box */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-primary border border-blue-100 font-extrabold text-lg">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-extrabold text-slate-900">{property.posterName}</span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {property.postedBy}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Verified identity & official contact person</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <Button
                  onClick={() =>
                    openContactModal({
                      id: property.id,
                      name: property.title,
                      builderName: property.posterName,
                    })
                  }
                  className="flex-1 sm:flex-initial bg-primary hover:bg-primary-hover text-white font-extrabold text-xs h-10 px-5 rounded-xl gap-2 shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Contact {property.postedBy}</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Pricing & Action Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Total Asking Price
                </span>
                <div className="mt-1">
                  <PriceTag price={property.price} pricePerSqFt={property.pricePerSqFt} size="lg" />
                </div>
                <div className="mt-2 text-xs font-semibold text-slate-500 flex items-center justify-between">
                  <span>Price per sq.ft:</span>
                  <span className="font-extrabold text-slate-800">
                    ₹{property.pricePerSqFt.toLocaleString("en-IN")}/sq.ft
                  </span>
                </div>
              </div>

              {/* Monthly EMI Estimate */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Estimated EMI:</span>
                  <span className="font-extrabold text-primary">
                    ₹{Math.round((property.price * 0.08) / 12).toLocaleString("en-IN")}/mo*
                  </span>
                </div>
                <Link
                  href="/home-loans"
                  className="text-[11px] font-bold text-primary hover:underline block mt-1.5"
                >
                  Calculate exact loan EMI & rates ↗
                </Link>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 space-y-3">
                <Button
                  size="lg"
                  onClick={() =>
                    openContactModal({
                      id: property.id,
                      name: property.title,
                      builderName: property.posterName,
                    })
                  }
                  className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-extrabold text-sm rounded-xl gap-2 shadow-lg shadow-blue-500/20"
                >
                  <Phone className="h-4 w-4" />
                  <span>Get Contact Number</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    openContactModal({
                      id: property.id,
                      name: `${property.title} - Site Visit`,
                      builderName: property.posterName,
                    })
                  }
                  className="w-full h-11 border-slate-200 font-bold text-xs rounded-xl hover:bg-slate-50 text-slate-700"
                >
                  <Calendar className="h-4 w-4 text-primary mr-1.5" />
                  <span>Schedule Private Site Visit</span>
                </Button>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-500">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Physical on-site legal & structural verification completed by UrbanNest</span>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Verified Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
                  Similar Ready to Move Properties
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Handpicked homes with verified documents in nearby prime zones
                </p>
              </div>

              <Button variant="outline" asChild size="sm" className="rounded-xl font-bold text-xs self-start sm:self-auto">
                <Link href="/buy" className="flex items-center gap-1.5">
                  <span>Explore All Homes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarProperties.map((prop) => (
                <PropertyCard key={prop.id} property={prop} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Back to Top Button (from Screenshot) */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white shadow-xl shadow-blue-500/30 hover:bg-primary-hover hover:scale-110 active:scale-95 transition-all"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Full Screen Photo Lightbox */}
      {showPhotoLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-white">
            <div>
              <h4 className="font-heading font-bold text-sm sm:text-base">{property.title}</h4>
              <p className="text-xs text-white/70">
                Photo {activeImageIndex + 1} of {images.length}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowPhotoLightbox(false)}
              className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-lg font-bold"
            >
              ✕
            </button>
          </div>

          <div className="relative aspect-[16/10] max-h-[70vh] w-full max-w-4xl mx-auto my-auto rounded-2xl overflow-hidden">
            <Image
              src={images[activeImageIndex]}
              alt={property.title}
              fill
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center gap-3 overflow-x-auto py-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImageIndex(idx)}
                className={cn(
                  "relative h-14 w-20 rounded-lg overflow-hidden border-2 transition-all",
                  activeImageIndex === idx ? "border-primary scale-105" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
