"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/common/BrandLogo";
import { FOOTER_COLUMNS } from "@/constants/navigation";
import {
  ShieldCheck,
  Mail,
  Phone,
  Search,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const router = useRouter();
  const [stateQuery, setStateQuery] = useState("");

  const handleStateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = stateQuery.trim();
    if (!trimmed) return;
    router.push(`/buy?state=${encodeURIComponent(trimmed)}`);
    setStateQuery("");
  };

  return (
    <footer className="bg-dark text-white border-t border-[#1E293B] pt-16 pb-12">
      <div className="container space-y-12">
        {/* Row 1: Brand blurb & Core Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" showTagline />
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              UrbanNest Realty is India&apos;s premier, editorial real estate discovery platform.
              We combine strict RERA compliance, verified owner listings, and true locality market intelligence to bring you homes that genuinely feel like yours.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-accent hover:text-ink transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-accent hover:text-ink transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-accent hover:text-ink transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-accent hover:text-ink transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-accent hover:text-ink transition-colors"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick contact blurb */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-1">
                <Phone className="h-4 w-4" />
                <span>Call Center</span>
              </div>
              <p className="text-sm text-white font-medium">1800-420-NEST (Toll Free)</p>
              <p className="text-xs text-white/60 mt-1">Mon - Sun: 9:00 AM - 9:00 PM</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-1">
                <Mail className="h-4 w-4" />
                <span>Write to Us</span>
              </div>
              <p className="text-sm text-white font-medium">concierge@urbannest.in</p>
              <p className="text-xs text-white/60 mt-1">Average response time: 2 hours</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-1">
                <ShieldCheck className="h-4 w-4" />
                <span>RERA Registered</span>
              </div>
              <p className="text-sm text-white font-medium">Govt. Authorized Portal</p>
              <p className="text-xs text-white/60 mt-1">100% verified registry</p>
            </div>
          </div>
        </div>

        {/* Row 2: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-heading text-sm font-semibold text-white tracking-wide">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/70 hover:text-accent hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Row 3: Search Properties by State */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-white/80">
            Find Properties by State
          </h4>
          <form
            onSubmit={handleStateSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-md"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
              <input
                type="text"
                value={stateQuery}
                onChange={(e) => setStateQuery(e.target.value)}
                placeholder="Enter state (e.g. Maharashtra, Karnataka)..."
                aria-label="Search properties by state"
                className="w-full h-10 pl-9 pr-3 rounded-lg bg-white/10 border border-white/15 text-xs sm:text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-accent focus:bg-white/15 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 h-10 px-4 rounded-lg bg-accent hover:bg-accent-hover text-ink font-semibold text-xs sm:text-sm transition-colors shrink-0"
            >
              <span>View Properties</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        {/* Row 4: Copyright and Disclaimer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} UrbanNest Realty Private Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Preferences
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
