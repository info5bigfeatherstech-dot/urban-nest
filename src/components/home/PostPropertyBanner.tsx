import React from "react";
import Link from "next/link";
import {
  PlusCircle,
  CheckCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function PostPropertyBanner() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-white p-8 sm:p-12 lg:p-16 shadow-floating">
          {/* Subtle geometric circles in background */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5 pointer-events-none blur-2xl" />
          <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-accent/10 pointer-events-none blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent border border-white/15">
                <Zap className="h-3.5 w-3.5 text-accent" />
                <span>Zero Brokerage • Direct Buyer Outreach</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                List your property for free. <br />
                <span className="text-accent">
                  Connect with genuine buyers in 48 hours.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                Whether you have an apartment, independent house, or commercial
                office to lease or sell, list in 3 simple steps without paying
                any broker fees.
              </p>

              {/* Value Checks */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs sm:text-sm text-white/90 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  Live in under 3 minutes
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  100% verified genuine callers
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  Privacy-first number masking
                </span>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <Button
                asChild
                variant="accent"
                size="lg"
                className="w-full sm:w-auto text-base font-bold shadow-xl px-8 h-14 rounded-xl gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Link href="/post-property">
                  <PlusCircle className="h-5 w-5" />
                  <span>List Your Property Free</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <span className="text-xs text-white/70 italic text-center lg:text-right w-full">
                *No credit card or upfront deposit required
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
