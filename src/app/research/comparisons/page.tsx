import type { Metadata } from "next";
import Link from "next/link";
import { GitCompare } from "lucide-react";

export const metadata: Metadata = {
  title: "Ed-Tech Comparison Reports | SkyReviews",
  description: "Read objective comparison logs comparing training cost and outcomes.",
};

export default function ComparisonsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <GitCompare className="w-8 h-8 text-blue-600" /> Ed-Tech Comparisons
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Objective side-by-side analyses comparing top technical bootcamp programs in pricing, mentor support, and certification alignment.
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
