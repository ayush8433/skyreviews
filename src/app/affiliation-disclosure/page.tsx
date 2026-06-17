import type { Metadata } from "next";
import Link from "next/link";
import { Info, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliation Disclosure | SkyReviews",
  description: "Detailed description of the connection and shared ownership of SkyReviews.us and Sky States.",
};

export default function AffiliationDisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-xl border border-amber-100">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Affiliation Disclosure</h1>
            <p className="text-sm text-slate-500">Last Updated: June 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-normal">
          <p className="text-lg font-medium text-slate-700">
            SkyReviews.us is an independent digital publication owned by Sky Media Group, which shares parent company ownership with Sky States (skystates.us).
          </p>
          <p>
            All evaluations, reviews, data, and editorial content published on this platform are produced under an independent editorial policy. Commercial executives, salespeople, and admissions coordinators of Sky States do not have access to SkyReviews' drafting tools, nor do they approve or pre-screen reviews.
          </p>

          <h2 className="text-xl font-bold text-slate-800">Why does this affiliation exist?</h2>
          <p>
            By establishing SkyReviews.us, the ownership group has created a transparent, central forum to document student reviews, outcomes, pricing details, and refund policy concerns in one place. 
          </p>
          <p>
            The platform's management guarantees that critical feedback and negative testimonials will not be suppressed or deleted, providing prospective learners with a true, complete picture of Sky States programs.
          </p>

          <h2 className="text-xl font-bold text-slate-800">Factual Integrity Safeguards</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Disclosure Banner:</strong> An affiliation disclosure is visible at the top of every page.</li>
            <li><strong>Editorial Safeguards:</strong> Our writers and reviewers are separate from course operations.</li>
            <li><strong>Methodology rubrics:</strong> Star ratings are governed by our 7-factor scoring system.</li>
          </ul>

          <p className="pt-4">
            For more details, please review our full <Link href="/transparency/conflict-of-interest" className="text-blue-600 hover:underline">Conflict of Interest Policy</Link> and <Link href="/editorial-policy" className="text-blue-600 hover:underline">Editorial Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
