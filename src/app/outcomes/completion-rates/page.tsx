import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Program Graduation & Completion Rates | SkyReviews",
  description: "Explore typical cohort completion metrics and dropout stats for Sky States courses.",
};

export default function CompletionRatesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <CheckCircle2 className="w-8 h-8 text-blue-600" /> Completion Rates
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Typical completion percentages for enrolled cohorts:
        </p>

        <ul className="space-y-2 text-sm text-slate-600">
          <li><strong>Data Science &amp; AI:</strong> 85% completion rate</li>
          <li><strong>Cyber Security:</strong> 88% completion rate</li>
          <li><strong>DevOps:</strong> 82% completion rate</li>
        </ul>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/outcomes/salary-data" className="text-blue-600 hover:underline font-semibold">
            ← Salary Data
          </Link>
          <Link href="/outcomes/career-transitions" className="text-blue-600 hover:underline font-semibold">
            Career Transitions →
          </Link>
        </div>
      </div>
    </div>
  );
}
