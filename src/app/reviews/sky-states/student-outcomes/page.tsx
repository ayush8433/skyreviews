import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States Student Outcomes & Placement Statistics | SkyReviews",
  description: "Check verified job placement rates and median salary growth statistics for Sky States cohorts.",
};

export default function StudentOutcomesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <TrendingUp className="w-8 h-8 text-blue-600" /> Student Outcomes
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Career statistics tracked at 6 months post-completion. Outcomes depend on student effort and portfolio quality.
        </p>

        <div className="space-y-4">
          {[
            { label: "Data Science & AI Placement", rate: "72%" },
            { label: "Cyber Security & Hacking Placement", rate: "78%" },
            { label: "DevOps & Cloud Systems Placement", rate: "68%" },
          ].map((item) => (
            <div key={item.label} className="flex justify-between items-center bg-slate-50 border border-slate-200 p-4 rounded-xl text-sm font-semibold text-slate-700">
              <span>{item.label}</span>
              <span className="text-blue-600">{item.rate}</span>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-500 leading-relaxed">
          <strong>Caveat Notice:</strong> Statistics are self-reported via graduate polls. Career tracking is ongoing. This does not represent an absolute placement guarantee.
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/reviews/sky-states/instructors" className="text-blue-600 hover:underline font-semibold">
            ← Instructors
          </Link>
          <Link href="/reviews/sky-states/pros-cons" className="text-blue-600 hover:underline font-semibold">
            Pros &amp; Cons →
          </Link>
        </div>
      </div>
    </div>
  );
}
