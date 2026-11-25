"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { CitySelector } from "./CitySelector";
import { MobileNav } from "./MobileNav";
import { ContactModal } from "./ContactModal";
import { MegaMenu, MegaMenuCategory } from "./MegaMenu";
import { cn } from "@/lib/utils";

interface NavCategoryLink {
  id: MegaMenuCategory;
  label: string;
  href: string;
  badge?: string;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavCategoryLink[] = [
  { id: "buy", label: "Buy", href: "/buy", hasDropdown: true },
  { id: "rent", label: "Rent", href: "/rent", hasDropdown: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuCategory | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Scroll listener for sticky shadow
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (cat: MegaMenuCategory) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveMegaMenu(cat);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  return (
    <>
      <header
        ref={navContainerRef}
        style={{ backgroundColor: "#ffffff" }}
        className={cn(
          "sticky top-0 z-50 w-full bg-white transition-[box-shadow,border-color] duration-200",
          scrolled ? "shadow-md border-b border-slate-200/90" : "border-b border-slate-200/60"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex h-16 sm:h-[68px] items-center justify-between gap-2 lg:gap-3 2xl:gap-4 relative">
          {/* Left: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <BrandLogo />
          </div>

          {/* Center Links (Desktop - 768px+) */}
          <nav className="hidden md:flex items-center gap-1 2xl:gap-2 shrink-0">
            {NAV_ITEMS.map((item) => {
              const isOpen = activeMegaMenu === item.id;
              return (
                <div
                  key={item.label}
                  className="relative shrink-0"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    onClick={() => setActiveMegaMenu(null)}
                    className={cn(
                      "relative flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-lg text-[13px] 2xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0",
                      isOpen
                        ? "text-primary bg-blue-50"
                        : "text-slate-700 hover:text-primary hover:bg-slate-50"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-amber-100 text-amber-800 tracking-wider">
                        {item.badge}
                      </span>
                    )}
                    {item.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 text-slate-400 transition-transform duration-200 shrink-0",
                          isOpen && "rotate-180 text-primary"
                        )}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Right Action Buttons (City Selector) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* City Selector */}
            <div className="hidden sm:block shrink-0">
              <CitySelector />
            </div>

            {/* Mobile Hamburger Drawer */}
            <MobileNav />
          </div>

          {/* 99acres-Style Mega-Menu Dropdown */}
          {activeMegaMenu && (
            <div
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
              }}
              onMouseLeave={handleMouseLeave}
              className="absolute left-0 right-0 top-full w-full"
            >
              <MegaMenu
                initialCategory={activeMegaMenu}
                onClose={() => setActiveMegaMenu(null)}
              />
            </div>
          )}
        </div>
      </header>

      {/* Global Modals */}
      <ContactModal />
    </>
  );
}
