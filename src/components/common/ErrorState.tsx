import React from "react";
import { AlertCircle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Failed to load listings",
  message = "An error occurred while fetching real-time data. Please check your connection and retry.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-12 text-center border border-red-200 rounded-2xl bg-red-50/40 my-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-danger mb-3">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h3 className="text-base font-semibold text-ink mb-1">{title}</h3>
      <p className="text-sm text-muted max-w-sm mb-5">{message}</p>
      {onRetry && (
        <Button
          variant="outline"
          size="sm"
          onClick={onRetry}
          className="gap-2 border-red-200 text-ink hover:bg-white"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Retry</span>
        </Button>
      )}
    </div>
  );
}

