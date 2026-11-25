import React from "react";
import Link from "next/link";
import { Building } from "lucide-react";
import { Builder } from "@/types/content";
import { cn } from "@/lib/utils";

interface BuilderLogoProps {
  builder: Builder;
  className?: string;
}

export function BuilderLogo({ builder, className }: BuilderLogoProps) {
  return (
    <Link
      href={`/projects?builder=${encodeURIComponent(builder.shortName)}`}
      className={cn(
        "group flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-primary/40 text-center min-w-[150px] sm:min-w-[170px]",
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-tint text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
        <Building className="h-6 w-6" />
      </div>
      <h4 className="font-heading font-bold text-sm text-ink group-hover:text-primary transition-colors">
        {builder.name}
      </h4>
      <p className="text-[11px] text-muted mt-0.5">
        {builder.projectsCount}+ Projects • {builder.experienceYears} Yrs Exp
      </p>
    </Link>
  );
}

