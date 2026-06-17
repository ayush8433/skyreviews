import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Science Student Reviews | SkyReviews",
  description: "Read verified student reviews and outcome ratings for the Sky States Data Science & AI program.",
};

export default function DataScienceReviewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
          Data Science &amp; AI Reviews
        </h1>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-xs">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-slate-800 text-sm">Aarav K.</h3>
              <p className="text-[10px] text-blue-600 font-semibold">Batch: Oct 2024</p>
            </div>
            <span className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <BadgeCheck className="w-3.5 h-3.5" /> Verified Graduate
            </span>
          </div>
          <p className="text-xs text-slate-500 font-bold mb-2">Rating: 4/5</p>
          <p className="text-xs text-slate-650 leading-relaxed italic">&ldquo;Great structured curriculum, but you must invest significant time during the weekdays to catch up.&rdquo;</p>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/student-reviews" className="text-blue-600 hover:underline font-semibold text-sm">
            ← All Student Reviews
          </Link>
        </div>
      </div>
    </div>
  );
}
