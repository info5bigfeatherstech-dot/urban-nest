"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Tag, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";
import { formatPriceRange } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useUiStore } from "@/store/useUiStore";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const { openContactModal } = useUiStore();

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover",
        className
      )}
    >
      {/* Image Banner */}
      <Link href={`/projects/${project.id}`} className="relative aspect-[16/10] w-full overflow-hidden bg-tint block cursor-pointer">
        <Image
          src={project.images[0] || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge variant="accent" className="bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A] font-bold text-[10px] tracking-wider uppercase shadow-sm">
            {project.bannerBadge || "NEW ARRIVAL"}
          </Badge>
          {project.isReraApproved && (
            <Badge variant="rera" className="bg-primary text-white border-0 font-medium flex items-center gap-1 shadow-sm text-[10px]">
              <CheckCircle2 className="h-3 w-3" />
              <span>RERA</span>
            </Badge>
          )}
        </div>

        {/* Price on Banner overlay */}
        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-[11px] uppercase tracking-wider text-white/80 font-medium">Starting from</div>
          <div className="font-heading text-lg font-bold">
            {formatPriceRange(project.minPrice, project.maxPrice)}
          </div>
        </div>
      </Link>

      {/* Content Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Project Name & Builder */}
        <div className="mb-2">
          <Link href={`/projects/${project.id}`}>
            <h3 className="font-heading text-base font-bold text-ink line-clamp-1 hover:text-primary transition-colors flex items-center justify-between">
              <span>{project.name}</span>
              <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 text-primary transition-opacity shrink-0" />
            </h3>
          </Link>
          <p className="text-xs font-medium text-muted mt-0.5">
            By <span className="text-ink font-semibold">{project.builder.name}</span>
          </p>
        </div>

        {/* Locality */}
        <div className="flex items-center gap-1.5 text-xs text-muted mb-3">
          <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
          <span className="line-clamp-1">{project.locality}, {project.city}</span>
        </div>

        {/* Config Chips */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {project.bhkConfigs.map((config) => (
            <span
              key={config}
              className="rounded-md bg-tint px-2 py-0.5 text-[11px] font-semibold text-primary"
            >
              {config}
            </span>
          ))}
        </div>

        {/* Footer info: Zero Brokerage & Blue View Number CTA */}
        <div className="mt-auto pt-3 border-t border-border/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-[11px] text-muted">
            <Tag className="h-3.5 w-3.5 text-primary shrink-0" />
            <span className="line-clamp-1 font-medium">@zero brokerage</span>
          </div>

          <Button
            size="sm"
            variant="default"
            onClick={() =>
              openContactModal({
                id: project.id,
                name: project.name,
                builderName: project.builder.name,
              })
            }
            className="text-xs h-8 px-3.5 bg-primary hover:bg-primary-hover text-white font-bold shadow-sm"
          >
            View Number
          </Button>
        </div>
      </div>
    </div>
  );
}
