import type { Metadata } from "next";
import Link from "next/link";
import { Info, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States Program Tuition & Pricing | SkyReviews",
  description: "Transparent breakdown of Sky States training fees, installment options, and refund windows.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
          Sky States Tuition &amp; Fees
        </h1>
        
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 leading-relaxed">
          <strong>Quick Answer:</strong> Sky States programs are priced at <strong>$2,999</strong> for the standard cohort and <strong>$6,499</strong> for one-to-one personalized training. Installment plans are available at approximately $300/month. The tuition covers all course materials, weekend live lectures, and career placement services. The only external cost is the Microsoft certification exam fee, which is paid directly to Microsoft.
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-slate-200 text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">Course Track</th>
                <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">Base Fee</th>
                <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">Installments</th>
                <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Data Science & AI (Standard Cohort)", base: "$2,999.00", emi: "$300/mo (10 mos)", total: "$2,999.00" },
                { name: "Cyber Security & Ethical Hacking (Standard Cohort)", base: "$2,999.00", emi: "$300/mo (10 mos)", total: "$2,999.00" },
                { name: "DevOps & Cloud Computing (Standard Cohort)", base: "$2,999.00", emi: "$300/mo (10 mos)", total: "$2,999.00" },
                { name: "Data Science & AI (One-to-One Short Term)", base: "$6,499.00", emi: "$650/mo (10 mos)", total: "$6,499.00" },
                { name: "Cyber Security & Ethical Hacking (One-to-One Short Term)", base: "$6,499.00", emi: "$650/mo (10 mos)", total: "$6,499.00" },
                { name: "DevOps & Cloud Computing (One-to-One Short Term)", base: "$6,499.00", emi: "$650/mo (10 mos)", total: "$6,499.00" },
              ].map((row) => (
                <tr key={row.name} className="hover:bg-slate-50/40">
                  <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">{row.name}</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-slate-600">{row.base}</td>
                  <td className="border border-slate-200 px-4 py-3 text-center text-slate-600">{row.emi}</td>
                  <td className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-800">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Value & Per-Hour Cost Breakdown */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-xs text-emerald-950 space-y-3">
          <p className="font-bold text-emerald-900 text-sm">Value Breakdown &amp; Hourly Cost Analysis</p>
          <p className="leading-relaxed">
            When analyzed by active hours of live guidance, mentoring, and direct career prep, Sky States programs offer highly competitive rates compared to US industry standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="bg-white p-3 rounded-lg border border-emerald-100 space-y-1 shadow-2xs">
              <span className="font-bold text-emerald-800">Standard Cohort ($2,999)</span>
              <ul className="list-disc pl-4 space-y-1 text-slate-600 mt-1">
                <li>~104 hours of live weekend classes</li>
                <li>~52 hours of live doubt-solving sessions</li>
                <li>~15 hours of portfolio reviews &amp; mock prep</li>
                <li><strong>Estimated Cost:</strong> ~$17.50 / hour</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded-lg border border-emerald-100 space-y-1 shadow-2xs">
              <span className="font-bold text-emerald-800">One-to-One Short Term ($6,499)</span>
              <ul className="list-disc pl-4 space-y-1 text-slate-600 mt-1">
                <li>All standard cohort resources</li>
                <li>Dedicated weekly 1-on-1 private mentoring</li>
                <li>Personalized resume &amp; LinkedIn audits</li>
                <li>Private mock interview drills</li>
                <li><strong>Estimated Cost:</strong> ~$31.39 / hour</li>
              </ul>
            </div>
          </div>
          <p className="text-[10px] text-emerald-700 italic leading-relaxed">
            * Comparison: Average US bootcamps cost between $10,000 and $20,000 (equivalent to $50–$100+/hr), while private technical tutoring rates start at $150+/hr in the United States.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-xs text-blue-900 space-y-2">
          <p className="font-bold text-blue-950">What is included in the fee:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li>Live weekend sessions and interactive class forums.</li>
            <li>Recorded lecture replays available throughout the program.</li>
            <li>One-on-one mock interview drills and career support modules.</li>
            <li>Prerequisites and pre-class coding exercises.</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-2">
          <p className="font-bold text-slate-700">Additional Costs Students Should Know:</p>
          <ul className="list-disc pl-4 space-y-1">
            <li><strong>Microsoft Certification Fee:</strong> Microsoft DP-900 exam fees are paid directly to Microsoft (not collected by Sky States).</li>
            <li><strong>Hardware Requirements:</strong> Students must have a personal laptop or desktop capable of running Docker or cloud sandbox interfaces.</li>
          </ul>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/reviews/sky-states" className="text-blue-600 hover:underline font-semibold">
            ← Back to Overview
          </Link>
          <Link href="/reviews/sky-states/refund-policy" className="text-blue-600 hover:underline font-semibold">
            Refund Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
