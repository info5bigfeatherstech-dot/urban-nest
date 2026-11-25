import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
        accent: "bg-accent text-accent-foreground font-semibold hover:bg-accent-hover shadow-sm",
        destructive: "bg-danger text-white hover:bg-red-700 shadow-sm",
        outline: "border border-border bg-white text-ink hover:bg-tint hover:border-primary/40",
        secondary: "bg-tint text-primary font-medium hover:bg-primary/10",
        ghost: "hover:bg-tint text-ink hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        dark: "bg-dark text-white hover:bg-[#123d3c] shadow-sm",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-md px-3.5 text-xs",
        lg: "h-12 rounded-xl px-7 text-base font-semibold",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

