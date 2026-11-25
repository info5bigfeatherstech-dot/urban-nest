import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-tint text-primary font-medium",
        accent: "border-transparent bg-accent/20 text-[#9E600A] font-bold",
        success: "border-transparent bg-blue-50 text-primary font-semibold border border-blue-200",
        danger: "border-transparent bg-red-50 text-danger",
        outline: "text-ink border border-border bg-white",
        dark: "bg-dark text-white",
        rera: "bg-blue-50 text-primary border border-blue-200 font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

