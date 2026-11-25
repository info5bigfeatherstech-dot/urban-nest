"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Landmark,
  ArrowLeft,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeLoansPage() {
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 Lac
  const [interestRate, setInterestRate] = useState(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState(20); // 20 years
  const [submitted, setSubmitted] = useState(false);

  // Calculate monthly EMI formula: E = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="min-h-screen bg-slate-50/60 pb-20">
      {/* Top Header */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-semibold">Home Loans</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-xs font-bold mb-2">
                <Landmark className="h-4 w-4" />
                <span>Instant Pre-Approval Network</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                Home Loans Starting at 8.35%* p.a.
              </h1>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                Compare and apply across 25+ leading banks including SBI, HDFC, and ICICI. Minimal documentation, doorstep assistance, and zero commission charges.
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive EMI Calculator (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  <h2 className="font-heading font-extrabold text-lg text-slate-900">
                    Home Loan EMI Calculator
                  </h2>
                </div>
                <span className="text-xs font-semibold text-slate-500">Live Simulation</span>
              </div>

              {/* Slider 1: Loan Amount */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Loan Amount
                  </label>
                  <span className="text-sm font-extrabold text-primary">
                    ₹{(loanAmount / 100000).toFixed(1)} Lac (₹{loanAmount.toLocaleString("en-IN")})
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="500000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>₹5 Lac</span>
                  <span>₹5 Cr</span>
                </div>
              </div>

              {/* Slider 2: Interest Rate */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Interest Rate (% p.a.)
                  </label>
                  <span className="text-sm font-extrabold text-primary">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="7.5"
                  max="14.0"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>7.5%</span>
                  <span>14.0%</span>
                </div>
              </div>

              {/* Slider 3: Loan Tenure */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Tenure (Years)
                  </label>
                  <span className="text-sm font-extrabold text-primary">{tenureYears} Years</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>5 Years</span>
                  <span>30 Years</span>
                </div>
              </div>

              {/* EMI Calculation Summary Box */}
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-2">
                  <span className="text-xs font-semibold text-slate-600 block">Monthly EMI</span>
                  <span className="text-2xl font-heading font-extrabold text-primary block mt-1">
                    ₹{emi.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="p-2 sm:border-x sm:border-blue-200">
                  <span className="text-xs font-semibold text-slate-600 block">Total Interest</span>
                  <span className="text-lg font-bold text-slate-800 block mt-1">
                    ₹{totalInterest.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="p-2">
                  <span className="text-xs font-semibold text-slate-600 block">Total Amount Payable</span>
                  <span className="text-lg font-bold text-slate-800 block mt-1">
                    ₹{totalPayment.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {/* Bank Comparison Table */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-heading font-extrabold text-lg text-slate-900 border-b border-slate-100 pb-3">
                Top Bank Interest Rate Comparison
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 uppercase text-[11px] font-bold">
                      <th className="pb-3">Bank Partner</th>
                      <th className="pb-3">Interest Rate</th>
                      <th className="pb-3">Processing Fee</th>
                      <th className="pb-3">Max LTV</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { name: "State Bank of India (SBI)", rate: "8.40% - 9.15%", fee: "0.20% (Max ₹10K)", ltv: "90%" },
                      { name: "HDFC Bank", rate: "8.50% - 9.40%", fee: "0.25% or ₹3,000", ltv: "85%" },
                      { name: "ICICI Bank", rate: "8.60% - 9.55%", fee: "0.25% - 0.50%", ltv: "85%" },
                      { name: "Bank of Baroda", rate: "8.35% - 9.10%", fee: "NIL on Select Schemes", ltv: "90%" },
                      { name: "Axis Bank", rate: "8.55% - 9.35%", fee: "Up to 1% or ₹10K", ltv: "85%" },
                    ].map((bank, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="py-3 font-bold text-slate-900">{bank.name}</td>
                        <td className="py-3 font-semibold text-primary">{bank.rate}</td>
                        <td className="py-3 text-slate-600">{bank.fee}</td>
                        <td className="py-3 font-semibold text-slate-700">{bank.ltv}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Application Form */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4 sticky top-24">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                  Quick Pre-Approval
                </span>
                <h3 className="text-lg font-heading font-extrabold text-slate-900 mt-1">
                  Check Your Eligibility
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Get calls from certified bank loan advisors within 30 minutes.
                </p>
              </div>

              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900">Application Submitted!</h4>
                  <p className="text-xs text-slate-600">
                    Our loan specialist will contact you shortly with personalized quotes.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-3"
                >
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Verma"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Mobile Number (+91)
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="9876543210"
                      pattern="[0-9]{10}"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Monthly In-Hand Income
                    </label>
                    <input
                      required
                      type="number"
                      placeholder="₹85,000"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Employment Type
                    </label>
                    <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-primary">
                      <option>Salaried (Private / MNC)</option>
                      <option>Salaried (Government / PSU)</option>
                      <option>Self-Employed Professional (Doctor, CA, etc.)</option>
                      <option>Business Owner / Entrepreneur</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11 bg-primary hover:bg-primary-hover text-white font-extrabold text-xs rounded-xl shadow-md gap-2 mt-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Apply for Pre-Approval</span>
                  </Button>
                </form>
              )}

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Your financial data is encrypted and 100% confidential.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

