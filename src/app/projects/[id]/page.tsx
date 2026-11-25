"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Building,
  Calendar,
  Layers,
  Sparkles,
  TreePine,
  Car,
  Dumbbell,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatPriceRange } from "@/lib/format";
import { useUiStore } from "@/store/useUiStore";
import { PropertyFloorPlansAndPricing } from "@/components/property/PropertyFloorPlansAndPricing";
import mockProjects from "@/mocks/projects.json";
import { ArrowUp } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const resolvedParams = use(params);
  const { openContactModal } = useUiStore();

  const project = mockProjects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Top Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200/80 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">{project.name}</span>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Projects</span>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* Main Grid: Left Details & Right Sticky Inquiry Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2 Cols): Project Overview, Gallery, Specs */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery Strip */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute left-5 bottom-5 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="accent" className="bg-[#FEF3C7] text-[#92400E] font-bold text-xs uppercase">
                      {project.bannerBadge || "NEW ARRIVAL"}
                    </Badge>
                    {project.isReraApproved && (
                      <Badge variant="rera" className="bg-primary text-white font-medium flex items-center gap-1 text-xs">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        <span>RERA Registered</span>
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-white">
                    {project.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-white/90 flex items-center gap-1.5 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>{project.locality}, {project.city}</span>
                  </p>
                </div>
              </div>

              {project.images.length > 1 && (
                <div className="grid grid-cols-2 gap-2 p-3 bg-slate-100">
                  {project.images.slice(1).map((img, idx) => (
                    <div key={idx} className="relative aspect-[16/9] rounded-xl overflow-hidden">
                      <Image src={img} alt={`${project.name} preview`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Key Specifications Grid */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-heading font-extrabold text-lg text-slate-900 border-b border-slate-100 pb-3">
                Project Highlights & Specs
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Configurations</span>
                  <span className="text-sm font-extrabold text-primary block mt-1">
                    {project.bhkConfigs.join(", ")}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Possession</span>
                  <span className="text-sm font-extrabold text-slate-900 block mt-1 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {project.possessionDate}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Open Area</span>
                  <span className="text-sm font-extrabold text-emerald-600 block mt-1 flex items-center gap-1">
                    <TreePine className="h-3.5 w-3.5" />
                    {project.openAreaPercent}% Greenery
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block">Total Units</span>
                  <span className="text-sm font-extrabold text-slate-900 block mt-1 flex items-center gap-1">
                    <Layers className="h-3.5 w-3.5 text-primary" />
                    {project.totalUnits} Units
                  </span>
                </div>
              </div>

              {/* RERA Authentication Box */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-start gap-3 mt-4">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Official RERA Registration
                  </h4>
                  <p className="text-xs text-slate-700 font-mono font-bold mt-0.5">
                    {project.reraId}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Verified through State Real Estate Regulatory Authority. All buyer investments are legally protected under escrow accounting.
                  </p>
                </div>
              </div>
            </div>

            {/* 99acres-Style Floor Plans & Pricing + Configuration Details (User Requested) */}
            <PropertyFloorPlansAndPricing
              propertyName={project.name}
              developerName={project.builder.name}
              propertyType="Independent Floor"
            />

            {/* Amenities Section */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-heading font-extrabold text-lg text-slate-900 border-b border-slate-100 pb-3">
                World-Class Amenities
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: Waves, label: "Olympic-Size Pool" },
                  { icon: Dumbbell, label: "High-Tech Fitness Gym" },
                  { icon: TreePine, label: "Landscaped Zen Gardens" },
                  { icon: Car, label: "EV Charging Bays" },
                  { icon: Sparkles, label: "Grand Club House" },
                  { icon: ShieldCheck, label: "3-Tier 24x7 Security" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/60"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100/70 text-primary shrink-0">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-bold text-slate-800">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* About the Builder */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h2 className="font-heading font-extrabold text-lg text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <Building className="h-5 w-5 text-primary" />
                <span>About Developer: {project.builder.name}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.builder.name} has over {project.builder.experienceYears} years of architectural leadership, delivering more than {project.builder.totalProjects} iconic master developments across Indian metropolitan hubs. Known for uncompromising construction grade, transparent escrow handling, and timely handovers.
              </p>
            </div>
          </div>

          {/* Right Column: Pricing & Booking Action Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Inaugural Price Range
                </span>
                <div className="text-2xl sm:text-3xl font-heading font-extrabold text-primary mt-1">
                  {formatPriceRange(project.minPrice, project.maxPrice)}
                </div>
                <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block mt-1">
                  Zero Brokerage Deal
                </span>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <Button
                  size="lg"
                  onClick={() =>
                    openContactModal({
                      id: project.id,
                      name: project.name,
                      builderName: project.builder.name,
                    })
                  }
                  className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-extrabold text-sm rounded-xl gap-2 shadow-lg shadow-blue-500/20"
                >
                  <Phone className="h-4 w-4" />
                  <span>Request Instant Callback</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full h-12 border-slate-200 font-bold text-xs rounded-xl hover:bg-slate-50 text-slate-700"
                >
                  <Link href="/home-loans">
                    <span>Calculate Home Loan EMI</span>
                  </Link>
                </Button>
              </div>

              <div className="pt-4 border-t border-slate-100 text-center text-[11px] text-slate-500 space-y-1">
                <p className="font-semibold text-slate-700">Need immediate on-site assistance?</p>
                <p>Call toll-free: <span className="font-bold text-primary">1800-420-6378</span></p>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}

