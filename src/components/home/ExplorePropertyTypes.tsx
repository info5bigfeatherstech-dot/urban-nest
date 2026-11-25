import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { EXPLORE_CATEGORIES } from "@/constants/filters";
import { ArrowUpRight } from "lucide-react";

interface ExplorePropertyTypesProps {
  title?: string;
  subtitle?: string;
}

export function ExplorePropertyTypes({
  title = "Explore by Property Type",
  subtitle = "Whether you are looking for ready society apartments, luxury independent villas, or high-ROI commercial plots.",
}: ExplorePropertyTypesProps) {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Property Categories"
          title={title}
          subtitle={subtitle}
          viewAllHref="/buy"
          viewAllText="Explore All Types"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {EXPLORE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-tint">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-90" />
                <div className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>

              <div className="p-3.5 text-center sm:text-left">
                <h3 className="font-heading text-sm font-bold text-ink group-hover:text-primary transition-colors line-clamp-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  {cat.count}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

