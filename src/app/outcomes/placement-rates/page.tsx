import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Job Placement Rates by Cohort | SkyReviews",
  description: "Detailed breakdown of career placement statistics by training path at 6 months.",
};

export default function PlacementRatesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-blue-600" /> Placement Rates
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Job placement percentages across cohorts (at 6 months post-graduation):
        </p>

        <ul className="space-y-2 text-sm text-slate-600">
          <li><strong>Data Science &amp; AI:</strong> 72% placement</li>
          <li><strong>Cyber Security &amp; Hacking:</strong> 78% placement</li>
          <li><strong>DevOps &amp; Cloud Systems:</strong> 68% placement</li>
        </ul>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/outcomes" className="text-blue-600 hover:underline font-semibold">
            ← Outcomes Dashboard
          </Link>
          <Link href="/outcomes/salary-data" className="text-blue-600 hover:underline font-semibold">
            Salary Data →
          </Link>
        </div>
      </div>
    </div>
  );
}
