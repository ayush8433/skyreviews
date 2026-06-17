import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Career Transition Studies | Bootcamp vs Self-Taught | SkyReviews",
  description: "Examine success rates of career switchers in technology disciplines.",
};

export default function ResearchTransitionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <RefreshCw className="w-8 h-8 text-blue-600" /> Career Transition Studies
        </h1>

        <p className="text-sm text-slate-655 font-medium leading-relaxed">
          Focus study: <em>&quot;Career Switchers in Tech: 12-Month Outcomes Study India 2024&quot;</em>.
        </p>

        <p className="text-xs text-slate-600 leading-relaxed">
          Findings demonstrate that structured cohort learning leads to approximately 40% higher placement rates within 6 months compared to self-paced learning paths.
        </p>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/research" className="text-blue-600 hover:underline font-semibold text-sm">
            ← Research Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
