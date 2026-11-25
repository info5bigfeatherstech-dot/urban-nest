import React from "react";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title = "No properties found",
  description = "Try adjusting your filters or search in another city.",
  actionLabel = "Reset Filters",
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-border rounded-2xl bg-tint/40 my-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tint text-primary mb-4">
        <Building2 className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-heading font-semibold text-ink mb-1">{title}</h3>
      <p className="text-sm text-muted max-w-md mb-6">{description}</p>
      {onAction && (
        <Button variant="secondary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

