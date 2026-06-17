import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Non-Tech to Tech Career Transitions | SkyReviews",
  description: "Examine career switch pathways from operations, sales, and retail into cybersecurity, DevOps, and data science.",
};

export default function CareerTransitionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <RefreshCw className="w-8 h-8 text-blue-600" /> Career Transitions
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Approximately 60% of Sky States graduates come from non-technical backgrounds. Major transition pathways include:
        </p>

        <ul className="space-y-2 text-sm text-slate-600">
          <li><strong>System Admins / IT Support</strong> → DevOps Engineers</li>
          <li><strong>Business / Retail Ops</strong> → Data Analysts</li>
          <li><strong>Fresh BCA/BTech Graduates</strong> → Junior Security Analysts</li>
        </ul>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/outcomes/completion-rates" className="text-blue-600 hover:underline font-semibold">
            ← Completion Rates
          </Link>
          <Link href="/outcomes/portfolios" className="text-blue-600 hover:underline font-semibold">
            Portfolios →
          </Link>
        </div>
      </div>
    </div>
  );
}
