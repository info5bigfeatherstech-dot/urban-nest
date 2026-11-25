import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllText?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  viewAllHref,
  viewAllText = "View All",
  className,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8",
        centered && "text-center md:items-center",
        className,
      )}
    >
      <div className={cn("space-y-1.5", centered && "mx-auto")}>
        {badge && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary bg-tint px-2.5 py-1 rounded-full mb-1">
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-ink tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-muted max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>

      {viewAllHref && !centered && (
        <Link
          href={viewAllHref}
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover whitespace-nowrap self-start md:self-auto transition-colors"
        >
          <span>{viewAllText}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
