import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Graduate Salary Growth Statistics | SkyReviews",
  description: "Explore before/after median compensation stats for bootcamp graduates.",
};

export default function SalaryDataPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <TrendingUp className="w-8 h-8 text-blue-600" /> Salary Growth Data
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Median self-reported compensation for graduates with prior working experience 12 months after program completion:
        </p>

        <ul className="space-y-2 text-sm text-slate-600">
          <li><strong>Data Science:</strong> ₹4.8 LPA (Before) → ₹8.2 LPA (After)</li>
          <li><strong>Cyber Security:</strong> ₹4.0 LPA (Before) → ₹7.2 LPA (After)</li>
          <li><strong>DevOps:</strong> ₹5.0 LPA (Before) → ₹8.8 LPA (After)</li>
        </ul>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/outcomes/placement-rates" className="text-blue-600 hover:underline font-semibold">
            ← Placement Rates
          </Link>
          <Link href="/outcomes/completion-rates" className="text-blue-600 hover:underline font-semibold">
            Completion Rates →
          </Link>
        </div>
      </div>
    </div>
  );
}
