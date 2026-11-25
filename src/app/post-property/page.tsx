"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PostPropertyPage() {
  const [listingType, setListingType] = useState<"sell" | "rent">("sell");
  const [published, setPublished] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Post Property Free</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2 border border-emerald-200">
                <Sparkles className="h-4 w-4" />
                <span>100% Free Listing • Zero Commission</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                List Your Property for Free
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Reach over 10 Million+ genuine homebuyers and verified tenants across India. No brokerage, direct tenant inquiries.
              </p>
            </div>

            <Button asChild variant="outline" size="sm" className="gap-2 shrink-0">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 max-w-3xl">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          {published ? (
            <div className="py-12 text-center space-y-4">
              <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900">
                Your Property is Live!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your listing has been submitted and verified. Genuine buyers and tenants will now contact you directly via phone and WhatsApp.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <Button asChild className="bg-primary hover:bg-primary-hover text-white text-xs font-bold h-10 px-6">
                  <Link href="/buy">Browse Active Listings</Link>
                </Button>
                <Button asChild variant="outline" className="text-xs font-bold h-10 px-6">
                  <Link href="/">Return to Home</Link>
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPublished(true);
              }}
              className="space-y-6"
            >
              {/* Intent Toggle */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2 uppercase tracking-wider">
                  You are listing to:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setListingType("sell")}
                    className={`py-3 rounded-2xl border text-sm font-extrabold transition-all ${
                      listingType === "sell"
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    Sell Property
                  </button>
                  <button
                    type="button"
                    onClick={() => setListingType("rent")}
                    className={`py-3 rounded-2xl border text-sm font-extrabold transition-all ${
                      listingType === "rent"
                        ? "bg-primary text-white border-primary shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    Rent / Lease Out
                  </button>
                </div>
              </div>

              {/* Property Details */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="font-heading font-bold text-base text-slate-900">
                  Property Particulars
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Property Type</label>
                    <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary">
                      <option>Multistorey Apartment / Flat</option>
                      <option>Builder Floor</option>
                      <option>Independent House / Villa</option>
                      <option>Residential Plot</option>
                      <option>Commercial Office / Shop</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Configuration (BHK)</label>
                    <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary">
                      <option>1 RK / 1 BHK</option>
                      <option>2 BHK</option>
                      <option>3 BHK</option>
                      <option>4 BHK</option>
                      <option>5+ BHK / Penthouse</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">City</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Gurugram, Mumbai, Bengaluru"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Locality / Society Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Golf Course Ext, Bandra West"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      {listingType === "sell" ? "Expected Price (₹)" : "Monthly Rent (₹)"}
                    </label>
                    <input
                      required
                      type="number"
                      placeholder={listingType === "sell" ? "₹85,00,000" : "₹35,000"}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Super Area (Sq.Ft)</label>
                    <input
                      required
                      type="number"
                      placeholder="1450"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="font-heading font-bold text-base text-slate-900">
                  Owner Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number (+91)</label>
                    <input
                      required
                      type="tel"
                      pattern="[0-9]{10}"
                      placeholder="9876543210"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>No hidden listing charges. 100% Free Forever.</span>
                </div>

                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary-hover text-white text-xs font-extrabold h-11 px-8 rounded-xl shadow-md gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Publish Property Free</span>
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
