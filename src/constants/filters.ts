import { PropertyType } from "@/types/property";

export const BHK_OPTIONS = [
  "1 RK / 1 BHK",
  "2 BHK",
  "3 BHK",
  "4 BHK",
  "5+ BHK",
];

export const BUY_BUDGET_MIN_OPTIONS = [
  { label: "Min Budget", value: null },
  { label: "₹20 Lac", value: 2000000 },
  { label: "₹40 Lac", value: 4000000 },
  { label: "₹60 Lac", value: 6000000 },
  { label: "₹80 Lac", value: 8000000 },
  { label: "₹1.00 Cr", value: 10000000 },
  { label: "₹1.50 Cr", value: 15000000 },
  { label: "₹2.00 Cr", value: 20000000 },
  { label: "₹3.00 Cr", value: 30000000 },
  { label: "₹5.00 Cr", value: 50000000 },
];

export const BUY_BUDGET_MAX_OPTIONS = [
  { label: "Max Budget", value: null },
  { label: "₹50 Lac", value: 5000000 },
  { label: "₹75 Lac", value: 7500000 },
  { label: "₹1.00 Cr", value: 10000000 },
  { label: "₹1.50 Cr", value: 15000000 },
  { label: "₹2.00 Cr", value: 20000000 },
  { label: "₹3.00 Cr", value: 30000000 },
  { label: "₹5.00 Cr", value: 50000000 },
  { label: "₹10.00 Cr", value: 100000000 },
];

export const RENT_BUDGET_MIN_OPTIONS = [
  { label: "Min Rent", value: null },
  { label: "₹10,000", value: 10000 },
  { label: "₹15,000", value: 15000 },
  { label: "₹25,000", value: 25000 },
  { label: "₹35,000", value: 35000 },
  { label: "₹50,000", value: 50000 },
  { label: "₹75,000", value: 75000 },
  { label: "₹1.00 Lac", value: 100000 },
];

export const RENT_BUDGET_MAX_OPTIONS = [
  { label: "Max Rent", value: null },
  { label: "₹20,000", value: 20000 },
  { label: "₹35,000", value: 35000 },
  { label: "₹50,000", value: 50000 },
  { label: "₹75,000", value: 75000 },
  { label: "₹1.00 Lac", value: 100000 },
  { label: "₹1.50 Lac", value: 150000 },
  { label: "₹2.50 Lac+", value: 250000 },
];

export const PROPERTY_TYPE_OPTIONS: Array<{ label: string; value: PropertyType | "All Residential" | "All Commercial" }> = [
  { label: "All Residential", value: "All Residential" },
  { label: "Apartment / Flat", value: "Apartment / Flat" },
  { label: "Independent House / Villa", value: "Independent House / Villa" },
  { label: "Builder Floor", value: "Builder Floor" },
  { label: "Plot / Land", value: "Plot / Land" },
  { label: "Commercial Space", value: "Commercial Space" },
  { label: "Office Space", value: "Office Space" },
  { label: "Shop / Showroom", value: "Shop / Showroom" },
  { label: "Studio Apartment", value: "Studio Apartment" },
];

export const QUICK_FILTERS = [
  "Ready to Move",
  "Under ₹50 L",
  "RERA Approved",
  "Owner Properties",
];

export const EXPLORE_CATEGORIES = [
  {
    id: "flats",
    title: "Flats & Apartments",
    count: "45,200+ listings",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&auto=format&fit=crop&q=80",
    href: "/buy?type=flats",
  },
  {
    id: "villas",
    title: "Independent Villas",
    count: "12,800+ listings",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format&fit=crop&q=80",
    href: "/buy?type=villas",
  },
  {
    id: "plots",
    title: "Residential Plots",
    count: "18,450+ listings",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80",
    href: "/plots",
  },
  {
    id: "commercial",
    title: "Commercial Space",
    count: "9,700+ listings",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80",
    href: "/commercial",
  },
  {
    id: "office",
    title: "Office Spaces",
    count: "7,300+ listings",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
    href: "/commercial?type=office",
  },
  {
    id: "shops",
    title: "Retail Shops & Hubs",
    count: "5,900+ listings",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&auto=format&fit=crop&q=80",
    href: "/commercial?type=shops",
  },
];

