import type { Metadata } from "next";
import Link from "next/link";
import { CheckSquare, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Student Verification Process | SkyReviews",
  description: "Learn how we verify student reviews and assign verification trust badges.",
};

const tiers = [
  {
    badge: "Verified Enrolled Student ✓",
    color: "bg-blue-50 border-blue-200 text-blue-800",
    description: "The reviewer has provided documentation confirming enrollment (e.g., student portal dashboard screenshot, enrollment receipt, or confirmation email).",
  },
  {
    badge: "Verified Graduate ✓✓",
    color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    description: "The reviewer has provided a graduation certificate, completion transcript, or credentials verification URL.",
  },
  {
    badge: "Active Student",
    color: "bg-cyan-50 border-cyan-200 text-cyan-800",
    description: "The reviewer is currently attending classes, and their enrollment batch has been cross-checked with cohort lists.",
  },
  {
    badge: "Unverified Review",
    color: "bg-slate-50 border-slate-200 text-slate-700",
    description: "The reviewer did not provide verifying documentation. Unverified reviews are displayed but carry less weight in our overall calculation.",
  },
];

export default function VerificationPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl border border-purple-100">
            <CheckSquare className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800">Student Verification</h1>
            <p className="text-sm text-slate-500 mb-2">How We Validate Testimonials &amp; Reviews</p>
            <AuthorByline />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-normal">
          <p>
            Fake reviews can skew ratings and mislead students. To prevent review manipulation, SkyReviews.us uses a tiered verification badge system to identify student inputs.
          </p>

          <h2 className="text-xl font-bold text-slate-800">Verification Tiers &amp; Badges</h2>
          <div className="space-y-4 my-8">
            {tiers.map((tier, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <div className={`inline-block px-3 py-1 rounded-md text-xs font-bold border mb-2.5 ${tier.color}`}>
                  {tier.badge}
                </div>
                <p className="text-sm text-slate-600">{tier.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-slate-800">Fraud Prevention Checks</h2>
          <p>
            Every review submitted undergoes a series of fraud detection tests before publication:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Single Review Filter:</strong> We restrict submissions to one review per verified email address per program.</li>
            <li><strong>IP Network Analysis:</strong> Submissions coming in clusters from matching IPs are flagged and manually checked.</li>
            <li><strong>Incentive Disclosure:</strong> We ask: <em>&quot;Were you offered anything in exchange for this review?&quot;</em> If yes, a disclosure label is attached.</li>
            <li><strong>Spam Pattern Filters:</strong> Machine learning algorithms filter boilerplate templates or duplicate sentences.</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-900 flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong>Appeals &amp; Verification Requests:</strong> If you believe a published review is fraudulent or inaccurate, you can submit a query to <a href="mailto:support@skyreviews.us" className="text-blue-600 hover:underline">support@skyreviews.us</a> and our editors will audit it within 10 business days.
            </div>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <AuthorByline />
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between text-sm">
          <Link href="/transparency/rating-calculation" className="text-blue-600 hover:underline font-semibold">
            ← Rating Calculation
          </Link>
          <Link href="/transparency/corrections" className="text-blue-600 hover:underline font-semibold">
            Corrections Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
