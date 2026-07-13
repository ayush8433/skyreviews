import type { Metadata } from "next";
import Link from "next/link";
import { AlertOctagon, HelpCircle, FileText, CheckCircle } from "lucide-react";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Conflict of Interest Policy | SkyReviews",
  description: "How SkyReviews.us maintains editorial independence and manages conflicts of interest.",
};

export default function ConflictOfInterestPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl border border-amber-100">
            <AlertOctagon className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800">Conflict of Interest Policy</h1>
            <p className="text-sm text-slate-500 mb-2">Effective Date: June 2026</p>
            <AuthorByline />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-normal">
          <h2 className="text-xl font-bold text-slate-800">1. Context &amp; Purpose</h2>
          <p>
            At SkyReviews.us, maintaining trust and absolute review integrity is our highest priority. To prevent any commercial influence or bias from impacting our coverage of educational providers like Sky States, we enforce a strict Conflict of Interest policy.
          </p>
          <p>
            This Conflict of Interest (COI) policy defines the boundaries, structural separations, and absolute restrictions designed to keep our editorial assessments completely independent.
          </p>

          <h2 className="text-xl font-bold text-slate-800">2. Separation of Teams</h2>
          <p>
            We enforce strict separation of duties and reporting structures:
          </p>
          <ul className="space-y-3 pl-0">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No Editorial Pre-Screening:</strong> No review, course evaluation, or article is shared with Sky States' sales, marketing, or admissions teams prior to publication.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Reporting Isolation:</strong> The managing editor of SkyReviews.us does not report to any commercial coordinator or marketing executive of Sky States.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Separate Communication Channels:</strong> Communication between the editorial staff and the training product staff is restricted to formal requests for clarification or factual responses.</span>
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-800">3. Positive &amp; Negative Feedback</h2>
          <p>
            We do not filter negative feedback. All student reviews, complaints, and rating points are processed strictly using our rating rubric and verification methodology. Sky States cannot request or require the deletion or alteration of a verified student review under any circumstances.
          </p>

          <h2 className="text-xl font-bold text-slate-800">4. Commitment &amp; Whistleblowing</h2>
          <p>
            If any editorial member feels pressured to adjust ratings or omit critiques, they have the right to request a formal review. In the event that our editorial independence is ever compromised, we commit to publishing a notice on this portal.
          </p>
        </div>

        <div className="flex justify-center my-6">
          <AuthorByline />
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between text-sm">
          <Link href="/transparency/ownership" className="text-blue-600 hover:underline font-semibold">
            ← Ownership Disclosure
          </Link>
          <Link href="/editorial-policy" className="text-blue-600 hover:underline font-semibold">
            Editorial Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
