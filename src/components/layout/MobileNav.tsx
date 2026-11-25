"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, ChevronDown, PhoneCall } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrandLogo } from "@/components/common/BrandLogo";
import {
  MAIN_NAV_LINKS,
  RESIDENTIAL_DROPDOWN_ITEMS,
} from "@/constants/navigation";
import { useUiStore } from "@/store/useUiStore";
import { CitySelector } from "./CitySelector";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [residentialExpanded, setResidentialExpanded] = useState(false);
  const { setAuthModalOpen } = useUiStore();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="xl:hidden text-ink hover:bg-tint shrink-0"
          aria-label="Open mobile navigation menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[300px] sm:w-[360px] p-0 flex flex-col justify-between"
      >
        <div className="overflow-y-auto p-6 space-y-6">
          <SheetHeader className="text-left border-b border-border pb-4">
            <BrandLogo />
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          </SheetHeader>

          {/* City Selector on mobile */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-xs font-semibold text-muted uppercase">
              Selected City
            </span>
            <CitySelector />
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-1">
            {MAIN_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-ink hover:bg-tint transition-colors"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <Badge
                    variant="success"
                    className="text-[10px] px-1.5 py-0.2"
                  >
                    {link.badge}
                  </Badge>
                )}
              </Link>
            ))}

            {/* All Residential Collapsible */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setResidentialExpanded(!residentialExpanded)}
                className="flex w-full items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-primary hover:bg-tint transition-colors"
              >
                <span>All Residential Types</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    residentialExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {residentialExpanded && (
                <div className="ml-3 pl-3 border-l-2 border-primary/20 space-y-1 pt-1.5">
                  {RESIDENTIAL_DROPDOWN_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-2.5 py-1.5 text-xs text-muted hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="p-6 border-t border-border bg-tint/30 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-600 px-1 font-medium">
            <PhoneCall className="h-3.5 w-3.5 text-primary" />
            <span>Toll-Free: 1800-420-6378</span>
          </div>

          <Button
            variant="default"
            className="w-full font-semibold bg-primary hover:bg-primary-hover text-white"
            onClick={() => {
              setOpen(false);
              setAuthModalOpen(true, "login");
            }}
          >
            Login / Sign Up
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
