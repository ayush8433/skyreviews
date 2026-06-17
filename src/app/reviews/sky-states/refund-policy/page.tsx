import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States Refund & Cancellation Policy | SkyReviews",
  description: "Official refund terms and plain-English breakdown of Sky States refund windows.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
          Refund &amp; Cancellation Policy
        </h1>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl text-amber-900 text-sm leading-relaxed">
          <strong>⚠️ Notice:</strong> Refund requests are bound by strict calendar windows. Review these cutoffs carefully before making payments.
        </div>

        <h2 className="text-lg font-bold text-slate-800">Official Policy Language</h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-3 leading-relaxed">
          <p>
            1. If admission is not granted or if the student requests cancellation within 3 business days of fee payment, all fees paid are fully refunded.
          </p>
          <p>
            2. If cancellation is filed prior to the first weekend of classes, a refund is issued minus a registration fee capped at $99 (or INR equivalent).
          </p>
          <p>
            3. If withdrawal occurs within the first calendar week of program lectures, a full tuition refund is issued minus the registration fee.
          </p>
          <p>
            4. Past the first calendar week of classes, no refunds or fee cancellations will be processed.
          </p>
        </div>

        <h2 className="text-lg font-bold text-slate-800">Plain-English Explanation</h2>
        <ul className="space-y-3 text-sm text-slate-600 pl-0">
          <li><strong>Can I get a refund after Day 1?</strong> Yes, if you file the request within the first week of class.</li>
          <li><strong>Can I get a refund after completing Module 1?</strong> No. Ensure you evaluate program compatibility during the initial 7 days.</li>
          <li><strong>How long does the refund process take?</strong> Refund requests are verified and processed within 30 days of submission.</li>
        </ul>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/reviews/sky-states/pricing" className="text-blue-600 hover:underline font-semibold">
            ← Pricing &amp; Fees
          </Link>
          <Link href="/reviews/sky-states/programs" className="text-blue-600 hover:underline font-semibold">
            Program Curriculums →
          </Link>
        </div>
      </div>
    </div>
  );
}
