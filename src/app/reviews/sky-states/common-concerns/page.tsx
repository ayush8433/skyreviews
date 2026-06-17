import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States Common Concerns & Criticisms | SkyReviews",
  description: "Direct published responses to recurring concerns about sales calls, pricing, and refund policies.",
};

const concernsList = [
  {
    q: "1. Are sales calls too aggressive?",
    student: "Students report persistent follow-ups from advisors before enrollment.",
    company: "Advisors follow up to answer questions. We remove names from outreach immediately upon request.",
    editorial: "Follow-ups can feel persistent. Clearly state your decision to opt out if you do not wish to enroll.",
  },
  {
    q: "2. Is the refund policy fair?",
    student: "Some students report missing the 7-day cancellation window and failing to receive refunds.",
    company: "The 7-day cutoff is enforced to cover session slot allocation. Terms are in the contract.",
    editorial: "The policy is strict but clear. Ensure you evaluate program compatibility in the first week.",
  },
];

export default function CommonConcernsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <HelpCircle className="w-8 h-8 text-blue-600" /> Common Concerns
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          We believe credibility comes from honesty. Here is our assessment of recurring student complaints:
        </p>

        <div className="space-y-6">
          {concernsList.map((c, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-3">
              <h3 className="font-bold text-slate-800 text-sm border-b border-slate-200/50 pb-2">{c.q}</h3>
              <p className="text-xs text-slate-600"><strong>Student Reports:</strong> {c.student}</p>
              <p className="text-xs text-slate-600"><strong>Company Response:</strong> {c.company}</p>
              <p className="text-xs text-blue-900 bg-blue-50 border border-blue-100 p-3 rounded-lg">
                <strong>Editorial Assessment:</strong> {c.editorial}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/reviews/sky-states/pros-cons" className="text-blue-600 hover:underline font-semibold">
            ← Pros &amp; Cons
          </Link>
          <Link href="/reviews/sky-states/vs-competitors" className="text-blue-600 hover:underline font-semibold">
            vs Competitors →
          </Link>
        </div>
      </div>
    </div>
  );
}
