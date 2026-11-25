"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  ArrowUpRight,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { useCityStore } from "@/store/useCityStore";
import { cn } from "@/lib/utils";

export type MegaMenuCategory =
  | "buy"
  | "rent"
  | "pg-coliving"
  | "commercial"
  | "plots"
  | "projects"
  | "popular-areas"
  | "insights"
  | "articles";

interface MegaMenuProps {
  initialCategory?: MegaMenuCategory;
  onClose: () => void;
}

const CATEGORIES: Array<{
  id: MegaMenuCategory;
  label: string;
  badge?: string;
}> = [
  { id: "buy", label: "BUY A HOME" },
  { id: "rent", label: "RENT A HOME" },
];

export function MegaMenu({ initialCategory = "buy", onClose }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState<MegaMenuCategory>(initialCategory);
  const { selectedCity, selectedCitySlug } = useCityStore();

  // Dynamic links based on activeTab
  const getSubMenuData = () => {
    switch (activeTab) {
      case "rent":
      case "pg-coliving":
        return {
          col1Title: `PROPERTIES FOR RENT IN ${selectedCity.toUpperCase()}`,
          col1Links: [
            { label: "Flats & Apartments for Rent", href: `/rent?city=${selectedCitySlug}&type=flats` },
            { label: "Builder Floors for Rent", href: `/rent?city=${selectedCitySlug}&type=builder-floors` },
            { label: "Independent House / Villa", href: `/rent?city=${selectedCitySlug}&type=villas` },
            { label: "Serviced Apartments", href: `/rent?city=${selectedCitySlug}&type=serviced` },
            { label: "Studio Apartments / 1 RK Flats", href: `/rent?city=${selectedCitySlug}&type=studio` },
            { label: "PG & Co-Living Spaces", href: `/rent?city=${selectedCitySlug}&type=pg` },
            { label: "Short Stay & Furnished Homes", href: `/rent?city=${selectedCitySlug}&filter=furnished` },
          ],
          col2Title: "POPULAR RENTAL SEARCHES",
          col2Links: [
            { label: `Owner Properties in ${selectedCity} (Zero Brokerage)`, href: `/rent?city=${selectedCitySlug}&filter=owner` },
            { label: "Affordable Rentals Under ₹20,000/mo", href: `/rent?city=${selectedCitySlug}&maxBudget=20000` },
            { label: "Bachelors Friendly Apartments", href: `/rent?city=${selectedCitySlug}&filter=bachelors` },
            { label: "Family Gated Communities", href: `/rent?city=${selectedCitySlug}&filter=family` },
            { label: "Pet Friendly Homes", href: `/rent?city=${selectedCitySlug}&filter=pet-friendly` },
            { label: "Rental Agreement Online Service", href: "/rental-agreement" },
          ],
          promoBadge: "E-STAMP AGREEMENT",
          promoTitle: "Rental Agreement in 48 Hours",
          promoBullets: [
            "Biometric e-Stamping at your doorstep",
            "Legally vetted standard draft",
            "Police verification assistance",
            "100% online & hassle-free",
          ],
          promoHref: "/rental-agreement",
        };

      case "commercial":
        return {
          col1Title: `COMMERCIAL REAL ESTATE IN ${selectedCity.toUpperCase()}`,
          col1Links: [
            { label: "Office Spaces for Rent / Buy", href: `/commercial?city=${selectedCitySlug}&type=office` },
            { label: "Retail Shops & Showrooms", href: `/commercial?city=${selectedCitySlug}&type=shops` },
            { label: "Commercial Plots & Land", href: `/commercial?city=${selectedCitySlug}&type=land` },
            { label: "Co-Working Desks & Private Cabins", href: `/commercial?city=${selectedCitySlug}&type=coworking` },
            { label: "Industrial Sheds & Warehouses", href: `/commercial?city=${selectedCitySlug}&type=warehouse` },
            { label: "Ready-to-Move Corporate Parks", href: `/commercial?city=${selectedCitySlug}&filter=ready` },
          ],
          col2Title: "COMMERCIAL INVESTMENTS",
          col2Links: [
            { label: "Pre-Leased Commercial Assets", href: `/commercial?filter=pre-leased` },
            { label: "High ROI Grade-A Offices (8-10% Yield)", href: `/commercial?filter=high-yield` },
            { label: "Retail High Street Hubs", href: `/commercial?filter=high-street` },
            { label: "Institutional & IT SEZ Spaces", href: `/commercial?filter=sez` },
            { label: "Commercial Property Valuation", href: "/property-valuation" },
          ],
          promoBadge: "INVESTMENT ADVISORY",
          promoTitle: "Commercial Yield Reports",
          promoBullets: [
            "Grade-A tenant lease profiles",
            "Guaranteed rental lock-ins",
            "Cap rate & IRR forecasting",
            "Dedicated institutional manager",
          ],
          promoHref: "/commercial",
        };

      case "plots":
        return {
          col1Title: `PLOTS & LAND IN ${selectedCity.toUpperCase()}`,
          col1Links: [
            { label: "Residential Plots for Sale", href: `/plots?city=${selectedCitySlug}&type=residential` },
            { label: "Gated Community Enclave Plots", href: `/plots?city=${selectedCitySlug}&type=gated` },
            { label: "Farmhouse & Agricultural Land", href: `/plots?city=${selectedCitySlug}&type=agricultural` },
            { label: "Commercial / Mixed-Use Plots", href: `/plots?city=${selectedCitySlug}&type=commercial` },
            { label: "Industrial & Institutional Land", href: `/plots?city=${selectedCitySlug}&type=industrial` },
          ],
          col2Title: "POPULAR PLOT CORRIDORS",
          col2Links: [
            { label: "Highway Growth Corridors", href: `/plots?filter=expressway` },
            { label: "Upcoming Metro Extended Belts", href: `/plots?filter=metro` },
            { label: "RERA Approved Gated Layouts", href: `/plots?filter=rera` },
            { label: "Clear Title / Bank Loan Approved Plots", href: `/plots?filter=bank-approved` },
            { label: "Freehold Residential Plots", href: `/plots?filter=freehold` },
          ],
          promoBadge: "TITLE VERIFIED",
          promoTitle: "100% Legal Land Vetting",
          promoBullets: [
            "30-year encumbrance search",
            "Demarcation & registry guidance",
            "RERA boundary authentication",
            "Pre-approved builder loans",
          ],
          promoHref: "/plots",
        };

      case "projects":
        return {
          col1Title: `NEW PROJECTS IN ${selectedCity.toUpperCase()}`,
          col1Links: [
            { label: "Newly Launched Projects", href: `/projects?city=${selectedCitySlug}&status=new` },
            { label: "Pre-Launch Exclusive Enclaves", href: `/projects?city=${selectedCitySlug}&status=pre-launch` },
            { label: "Under Construction Developments", href: `/projects?city=${selectedCitySlug}&status=under-construction` },
            { label: "Ready Possession in 2026", href: `/projects?city=${selectedCitySlug}&possession=2026` },
            { label: "Luxury Highrises & Penthouse Enclaves", href: `/projects?city=${selectedCitySlug}&type=luxury` },
            { label: "Integrated Gated Townships", href: `/projects?city=${selectedCitySlug}&type=township` },
          ],
          col2Title: "PROJECTS BY TOP BUILDERS",
          col2Links: [
            { label: "DLF Luxury Residences", href: "/projects?builder=DLF" },
            { label: "Godrej Properties", href: "/projects?builder=Godrej" },
            { label: "Prestige Group Enclaves", href: "/projects?builder=Prestige" },
            { label: "Sobha High-Craft Homes", href: "/projects?builder=Sobha" },
            { label: "RERA Approved Projects Only", href: "/projects?filter=rera" },
            { label: "Zero Brokerage Direct Builder Deals", href: "/projects?filter=zero-brokerage" },
          ],
          promoBadge: "BUILDER ASSIST",
          promoTitle: "Guaranteed Inaugural Prices",
          promoBullets: [
            "Direct developer inventory",
            "Free chauffeured site visits",
            "Exclusive pre-launch discounts",
            "Zero brokerage fee guarantee",
          ],
          promoHref: "/projects",
        };

      case "popular-areas":
      case "insights":
        return {
          col1Title: `LOCALITY INTELLIGENCE IN ${selectedCity.toUpperCase()}`,
          col1Links: [
            { label: "Top Trending Localities", href: "/localities" },
            { label: "Price Trends & Rate per Sq.Ft", href: "/insights?view=price-trends" },
            { label: "Resident Society Reviews & Ratings", href: "/insights?view=reviews" },
            { label: "Locality Infrastructure Scorecards", href: "/insights" },
            { label: "Metro Connectivity & Commute Maps", href: "/insights" },
          ],
          col2Title: "POPULAR LOCALITIES",
          col2Links: [
            { label: `Golf Course Road, Gurugram`, href: `/localities/golf-course-road` },
            { label: `Sector 150, Noida`, href: `/localities/sector-150-noida` },
            { label: `Whitefield, Bengaluru`, href: `/localities/whitefield` },
            { label: `Bandra West, Mumbai`, href: `/localities/bandra-west` },
            { label: `Hinjawadi IT Corridor, Pune`, href: `/localities/hinjawadi` },
            { label: `Gachibowli, Hyderabad`, href: `/localities/gachibowli` },
          ],
          promoBadge: "INTRODUCING",
          promoTitle: "Insights",
          promoBullets: [
            "Understand localities",
            "Read Resident Reviews",
            "Check Price Trends",
            "Tools, Utilities & more",
          ],
          promoHref: "/insights",
        };

      case "articles":
        return {
          col1Title: "REAL ESTATE INSIGHTS & ADVICE",
          col1Links: [
            { label: "Latest Housing News", href: "/articles" },
            { label: "Home Buying Guidelines & Legal Checklist", href: "/articles" },
            { label: "RBI Repo Rate & Home Loan Trends", href: "/articles" },
            { label: "Tax Benefits on Home Loans (Section 80C & 24b)", href: "/articles" },
            { label: "Interior Design & Smart Homes", href: "/articles" },
          ],
          col2Title: "FINANCIAL TOOLS & CALCULATORS",
          col2Links: [
            { label: "Home Loan EMI Calculator", href: "/home-loans" },
            { label: "Instant Property Valuation Report", href: "/property-valuation" },
            { label: "Stamp Duty & Registration Calculator", href: "/property-valuation" },
            { label: "Rental Yield & ROI Calculator", href: "/home-loans" },
            { label: "Affordability Estimator", href: "/home-loans" },
          ],
          promoBadge: "EDITORIAL",
          promoTitle: "UrbanNest Property Journal",
          promoBullets: [
            "Quarterly real estate market reports",
            "Expert interviews with top architects",
            "Neighborhood livability rankings",
            "Govt policy & RERA legal updates",
          ],
          promoHref: "/articles",
        };

      case "buy":
      default:
        return {
          col1Title: `PROPERTIES IN ${selectedCity.toUpperCase()}`,
          col1Links: [
            { label: "Flats & Apartments", href: `/buy?city=${selectedCitySlug}&type=flats` },
            { label: "Builder Floors", href: `/buy?city=${selectedCitySlug}&type=builder-floors` },
            { label: "Independent House", href: `/buy?city=${selectedCitySlug}&type=independent-houses` },
            { label: "Luxury Villas", href: `/buy?city=${selectedCitySlug}&type=villas` },
            { label: "Serviced Apartments", href: `/buy?city=${selectedCitySlug}&type=serviced` },
            { label: "Studio Apartments / 1 RK Flats", href: `/buy?city=${selectedCitySlug}&type=studio` },
            { label: "Penthouse Residences", href: `/buy?city=${selectedCitySlug}&type=penthouse` },
          ],
          col2Title: "POPULAR SEARCHES",
          col2Links: [
            { label: `Verified Property in ${selectedCity}`, href: `/buy?city=${selectedCitySlug}&filter=verified` },
            { label: "Ready to Move Flats", href: `/buy?city=${selectedCitySlug}&filter=ready-to-move` },
            { label: "Owner Properties (Zero Brokerage)", href: `/buy?city=${selectedCitySlug}&filter=owner` },
            { label: "Affordable Homes Under ₹50 Lac", href: `/buy?city=${selectedCitySlug}&maxBudget=5000000` },
            { label: "Luxury Enclaves Above ₹2 Cr", href: `/buy?city=${selectedCitySlug}&minBudget=20000000` },
            { label: "RERA Approved Projects Only", href: `/projects?city=${selectedCitySlug}&filter=rera` },
          ],
          promoBadge: "INTRODUCING",
          promoTitle: "Insights",
          promoBullets: [
            "Understand localities",
            "Read Resident Reviews",
            "Check Price Trends",
            "Tools, Utilities & more",
          ],
          promoHref: "/insights",
        };
    }
  };

  const subData = getSubMenuData();

  return (
    <div
      style={{ backgroundColor: "#ffffff" }}
      className="smooth-dropdown absolute left-0 right-0 top-full w-full max-w-[1280px] mx-auto rounded-b-2xl border-x border-b border-slate-200 bg-white shadow-2xl z-50 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row min-h-[380px]">
        {/* Left Column: Vertical Category Sidebar */}
        <div className="w-full md:w-[220px] bg-slate-50/80 border-r border-slate-200/80 p-3 flex flex-col justify-between shrink-0">
          <div className="space-y-1">
            {CATEGORIES.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onMouseEnter={() => setActiveTab(cat.id)}
                  onClick={() => setActiveTab(cat.id)}
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2.5 rounded-xl text-[12px] font-bold tracking-wide transition-all text-left",
                    isActive
                      ? "bg-white text-primary shadow-sm border border-slate-200/80 translate-x-1"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  )}
                >
                  <span className="uppercase">{cat.label}</span>
                  {cat.badge && (
                    <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-primary text-white tracking-wider">
                      {cat.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Helpline Footer */}
          <div className="pt-4 mt-3 border-t border-slate-200/60 px-1 text-[11px] text-slate-500">
            <div className="flex items-center gap-1.5 font-semibold text-slate-700 mb-0.5">
              <PhoneCall className="h-3 w-3 text-primary" />
              <span>Toll Free Helpline</span>
            </div>
            <p className="text-[10px] text-slate-500">1800-420-6378 (9am - 8pm)</p>
          </div>
        </div>

        {/* Center Columns: Sub-navigation links */}
        <div className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white">
          {/* Column 1: Properties in selected city */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-3.5 pb-1 border-b border-slate-100">
              {subData.col1Title}
            </h4>
            <ul className="space-y-2.5">
              {subData.col1Links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-xs sm:text-[13px] font-medium text-slate-700 hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Popular Searches / Highlights */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-3.5 pb-1 border-b border-slate-100">
              {subData.col2Title}
            </h4>
            <ul className="space-y-2.5">
              {subData.col2Links.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-xs sm:text-[13px] font-medium text-slate-700 hover:text-primary hover:translate-x-1 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Signature 99acres-Style Insights Promo Card */}
        <div className="w-full md:w-[280px] p-5 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 border-l border-slate-200/80 flex flex-col justify-between shrink-0">
          <Link
            href={subData.promoHref}
            onClick={onClose}
            className="group block p-4 rounded-2xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            {/* Top Badge & Title with Arrow */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500 text-white shadow-sm">
                  <Compass className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary block">
                    {subData.promoBadge}
                  </span>
                  <span className="font-heading font-extrabold text-base text-slate-900 group-hover:text-primary transition-colors">
                    {subData.promoTitle}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            {/* Checklist bullets matching user image */}
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              {subData.promoBullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-primary">
              <span>Explore Now</span>
              <span className="text-xs">&rarr;</span>
            </div>
          </Link>

          {/* Micro trust guarantee */}
          <div className="pt-3 px-1 flex items-center gap-2 text-[11px] text-slate-500">
            <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>100% Verified Real Estate Data</span>
          </div>
        </div>
      </div>
    </div>
  );
}

