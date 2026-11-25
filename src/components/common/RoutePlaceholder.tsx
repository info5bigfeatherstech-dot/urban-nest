import React from "react";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RoutePlaceholderProps {
  title: string;
  subtitle?: string;
}

export function RoutePlaceholder({
  title,
  subtitle = "This section is under active preparation. You can return to the home page or browse available properties.",
}: RoutePlaceholderProps) {
  return (
    <div className="container mx-auto px-4 py-24 sm:py-32 flex flex-col items-center justify-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-tint text-primary mb-5 shadow-sm">
        <Construction className="h-8 w-8" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-heading font-bold text-ink mb-2">
        {title}
      </h1>
      <p className="text-sm sm:text-base text-muted max-w-md mb-8">
        {subtitle}
      </p>
      <div className="flex items-center gap-3">
        <Button asChild variant="default" className="gap-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

