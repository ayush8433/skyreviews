"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calculator,
  TrendingUp,
  Coins,
  Clock,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function RoiCalculatorClient() {
  const [bootcampCost, setBootcampCost] = useState(15000);
  const [currentSalary, setCurrentSalary] = useState(45000);
  const [expectedSalary, setExpectedSalary] = useState(85000);
  const [placementTime, setPlacementTime] = useState(4); // in months

  // Calculate stats
  const salaryIncrease = Math.max(0, expectedSalary - currentSalary);
  
  // Calculate months to payback
  const monthlyCurrent = currentSalary / 12;
  const monthlyIncrease = salaryIncrease / 12;
  
  // Total Investment = Cost + (placementTime * monthlyCurrent)
  const totalInvestment = bootcampCost + (placementTime * monthlyCurrent);
  
  // Payback period in months from job start
  const paybackMonths = monthlyIncrease > 0 
    ? Math.ceil(totalInvestment / monthlyIncrease)
    : 0;

  // First-year ROI % = (Salary Increase / Total Investment) * 100
  const firstYearRoi = totalInvestment > 0
    ? Math.round((salaryIncrease / totalInvestment) * 100)
    : 0;

  // JSON-LD Schema for FAQs
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is Bootcamp ROI calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bootcamp ROI is calculated by dividing the expected annual salary increase (Post-Bootcamp Salary minus Pre-Bootcamp Salary) by the total investment. The total investment includes the upfront tuition cost plus the opportunity cost of lost wages during your job hunt."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good payback period for a tech bootcamp?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, a payback period under 12 to 18 months is considered excellent. Many graduates paying $15,000 for a tuition course and landing an $80,000 job pay back their entire investment within 6 to 9 months of starting their new role."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-200">
      <SchemaMarkup data={faqSchema} />

      {/* ─── Premium Header ─── */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 border-b border-slate-800/60">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 group-hover:border-slate-600 transition-all">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">Back to Reviews</span>
          </Link>

          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              Interactive E-E-A-T Tools
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Tech Bootcamp ROI Calculator
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl font-normal">
              Calculate your potential salary lift, payback timeframe, and first-year return on investment before joining a software academy.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Interactive Section ─── */}
      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Sliders Input Panel */}
          <div className="md:col-span-7 space-y-6">
            <Card className="border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-[2rem] p-6 shadow-xl shadow-slate-200/40 dark:shadow-none space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <Calculator className="h-5 w-5 text-blue-600" />
                Investment Inputs
              </h2>

              {/* Slider 1: Tuition Cost */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-600 dark:text-slate-400">Bootcamp / Program Cost</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">${bootcampCost.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40000"
                  step="1000"
                  value={bootcampCost}
                  onChange={(e) => setBootcampCost(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>

              {/* Slider 2: Current Salary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-600 dark:text-slate-400">Current Annual Salary</span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">${currentSalary.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="120000"
                  step="5000"
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-600 dark:accent-slate-400"
                />
              </div>

              {/* Slider 3: Expected Post-Bootcamp Salary */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-600 dark:text-slate-400">Expected Post-Graduate Salary</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">${expectedSalary.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="180000"
                  step="5000"
                  value={expectedSalary}
                  onChange={(e) => setExpectedSalary(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Slider 4: Job Hunt Placement Time */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-600 dark:text-slate-400">Time to Find Job (Months)</span>
                  <span className="font-bold text-indigo-500">{placementTime} months</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={placementTime}
                  onChange={(e) => setPlacementTime(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                />
              </div>
            </Card>
          </div>

          {/* Calculations Output Panel */}
          <div className="md:col-span-5 space-y-6">
            <Card className="border-none bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-[2rem] p-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_60%)]" />
              <div className="relative z-10 space-y-6">
                <h3 className="text-lg font-bold">ROI Projections</h3>

                {/* Salary Lift */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    Annual Salary Increase
                  </div>
                  <p className="text-3xl font-black text-emerald-400">
                    +${salaryIncrease.toLocaleString()}
                  </p>
                </div>

                {/* Return on Investment */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <Coins className="h-4 w-4 text-blue-400" />
                    First-Year ROI
                  </div>
                  <p className="text-3xl font-black text-blue-400">
                    {firstYearRoi}%
                  </p>
                </div>

                {/* Payback Period */}
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    <Clock className="h-4 w-4 text-indigo-400" />
                    Months to Payback
                  </div>
                  <p className="text-3xl font-black text-indigo-400">
                    {paybackMonths} Months
                  </p>
                  <p className="text-[10px] text-slate-500 leading-tight">
                    *Includes tuition cost and opportunity cost of lost wages during your {placementTime}-month job search.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* ─── Crawlable FAQ & Editorial Block ─── */}
        <div className="mt-16 border-t border-slate-200 dark:border-slate-900 pt-12 max-w-3xl space-y-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                How is Bootcamp ROI calculated?
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Bootcamp ROI is calculated by dividing the expected annual salary increase (Post-Bootcamp Salary minus Pre-Bootcamp Salary) by the total investment. The total investment includes the upfront tuition cost plus the opportunity cost of lost wages during your job hunt.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-lg">
                What is a good payback period for a tech bootcamp?
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Typically, a payback period under 12 to 18 months is considered excellent. Many graduates paying $15,000 for a tuition course and landing an $80,000 job pay back their entire investment within 6 to 9 months of starting their new role.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
