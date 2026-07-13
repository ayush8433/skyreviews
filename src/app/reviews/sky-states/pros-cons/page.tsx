import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States Pros & Cons | Honest Bootcamp Review | SkyReviews",
  description: "Balanced editorial assessment of Sky States. Learn the key strengths and criticisms.",
};

export default function ProsConsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
          Sky States Pros &amp; Cons
        </h1>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 leading-relaxed">
          <strong>Quick Answer:</strong> The primary <strong>pros</strong> of Sky States include live weekend-led instruction, hands-on portfolio projects, and curriculum alignment with official Microsoft certifications. The main <strong>cons</strong> are a strict 7-day refund policy, a high-frequency advisor outreach process during enrollment, and a demanding weekly workload of 15–20 hours.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border border-slate-200 rounded-xl p-5 bg-emerald-50/20">
            <h3 className="text-base font-bold text-emerald-800 flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Key Pros
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>✓ Live, interactive classes rather than pre-recordings.</li>
              <li>✓ Practical syllabus aligning with industry standards.</li>
              <li>✓ Weekend schedules accommodate working learners.</li>
              <li>✓ Hands-on projects help build git portfolios.</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 rounded-xl p-5 bg-rose-50/20">
            <h3 className="text-base font-bold text-rose-800 flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-rose-600" /> Key Cons
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>✗ Short refund policy window (1 week of classes).</li>
              <li>✗ Pricing not always clearly displayed before enrollment.</li>
              <li>✗ Admissions follow-ups can feel persistent.</li>
              <li>✗ Career guidance does not guarantee a job.</li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/reviews/sky-states/student-outcomes" className="text-blue-600 hover:underline font-semibold">
            ← Student Outcomes
          </Link>
          <Link href="/reviews/sky-states/common-concerns" className="text-blue-600 hover:underline font-semibold">
            Common Concerns →
          </Link>
        </div>
      </div>
    </div>
  );
}
