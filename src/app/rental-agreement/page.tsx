"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCheck,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RentalAgreementPage() {
  const [step, setStep] = useState(1);
  const [completed, setCompleted] = useState(false);

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
            <span className="text-slate-900 font-semibold">Online Rental Agreement</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <FileCheck className="h-4 w-4" />
                <span>Legally Binding Digital Agreements</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Online Rental Agreement & e-Stamping
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Create a customized, lawyer-vetted rent agreement with state-approved e-Stamp papers and doorstep biometric delivery in 48 hours.
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 max-w-4xl">
        {/* Step Indicator */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { num: 1, title: "Tenancy Terms", desc: "Rent, deposit & tenure" },
            { num: 2, title: "Parties Info", desc: "Owner & Tenant KYC" },
            { num: 3, title: "e-Stamp & Delivery", desc: "Biometric sign" },
          ].map((s) => (
            <div
              key={s.num}
              onClick={() => !completed && setStep(s.num)}
              className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                step === s.num
                  ? "bg-white border-primary shadow-sm"
                  : "bg-slate-100/70 border-slate-200 opacity-60"
              }`}
            >
              <span
                className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold mb-1 ${
                  step === s.num ? "bg-primary text-white" : "bg-slate-300 text-slate-700"
                }`}
              >
                {s.num}
              </span>
              <h4 className="text-xs font-bold text-slate-900">{s.title}</h4>
              <p className="text-[10px] text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Wizard Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          {completed ? (
            <div className="py-12 text-center space-y-4">
              <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-heading font-extrabold text-slate-900">
                Draft Generated Successfully!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Your draft has been submitted to the legal desk. You will receive an SMS and WhatsApp link for Aadhaar e-Sign within 15 minutes.
              </p>
              <Button asChild className="bg-primary hover:bg-primary-hover text-white font-bold text-xs h-10 px-6">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3">
                Step 1: Tenancy Terms & Financials
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Monthly Rent Amount (₹)</label>
                  <input
                    type="number"
                    defaultValue={28000}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary font-bold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Security Deposit Amount (₹)</label>
                  <input
                    type="number"
                    defaultValue={75000}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary font-bold"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Tenancy Agreement Duration</label>
                  <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary">
                    <option>11 Months Standard (Recommended)</option>
                    <option>22 Months with Escrow</option>
                    <option>33 Months Long-Term</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Lock-in Period</label>
                  <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary">
                    <option>3 Months</option>
                    <option>6 Months Standard</option>
                    <option>No Lock-in</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button onClick={() => setStep(2)} className="bg-primary text-white text-xs font-bold h-10 px-6">
                  Continue to Parties Info &rarr;
                </Button>
              </div>
            </div>
          ) : step === 2 ? (
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3">
                Step 2: Owner & Tenant Particulars
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Property Owner Full Name</label>
                  <input
                    type="text"
                    placeholder="As per PAN / Aadhaar"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Tenant Full Name</label>
                  <input
                    type="text"
                    placeholder="As per PAN / Aadhaar"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 block mb-1">Rented Premises Full Address</label>
                  <textarea
                    rows={2}
                    placeholder="Flat/House No., Society Name, Locality, Pin code"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)} className="text-xs font-bold h-10 px-6">
                  &larr; Back
                </Button>
                <Button onClick={() => setStep(3)} className="bg-primary text-white text-xs font-bold h-10 px-6">
                  Continue to e-Stamp & Delivery &rarr;
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-heading font-extrabold text-base text-slate-900 border-b border-slate-100 pb-3">
                Step 3: State e-Stamp & Verification
              </h3>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">UrbanNest Drafting Fee:</span>
                  <span className="font-bold text-slate-900">₹499 (Flat)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">Govt e-Stamp Paper (SHCIL):</span>
                  <span className="font-bold text-slate-900">₹200</span>
                </div>
                <div className="flex items-center justify-between text-xs border-t border-blue-200 pt-2 font-extrabold text-primary">
                  <span>Total Payable:</span>
                  <span className="text-sm">₹699 All Inclusive</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)} className="text-xs font-bold h-10 px-6">
                  &larr; Back
                </Button>
                <Button onClick={() => setCompleted(true)} className="bg-primary text-white text-xs font-bold h-10 px-6">
                  Pay & Generate Agreement
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

