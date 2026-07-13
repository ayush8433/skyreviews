import type { Metadata } from "next";
import Link from "next/link";
import { Info, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Disclosure | SkyReviews",
  description: "Detailed description of the editorial disclosure and independence of SkyReviews.us.",
};

export default function AffiliationDisclosurePage() {
  return (
    <div className="min-h-screen bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl text-slate-350 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-800 mb-8">
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
            <Info className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white">Editorial Disclosure</h1>
            <p className="text-sm text-slate-400">Last Updated: June 2026</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-6 leading-relaxed font-normal">
          <p className="text-lg font-medium text-slate-200">
            SkyReviews.us is an independent digital publication owned by Sky Media Group.
          </p>
          <p className="text-slate-300">
            All evaluations, reviews, data, and editorial content published on this platform are produced under an independent editorial policy. Commercial executives, salespeople, and admissions coordinators of reviewed programs do not have access to SkyReviews' drafting tools, nor do they approve or pre-screen reviews.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">Why was SkyReviews.us established?</h2>
          <p className="text-slate-300">
            SkyReviews.us has created a transparent, central forum to document student reviews, outcomes, pricing details, and refund policy concerns in one place. 
          </p>
          <p className="text-slate-300">
            The platform's management guarantees that critical feedback and negative testimonials will not be suppressed or deleted, providing prospective learners with a true, complete picture of Sky States programs.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">Factual Integrity Safeguards</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong>Disclosure Banner:</strong> An affiliation disclosure is visible at the top of every page.</li>
            <li><strong>Editorial Safeguards:</strong> Our writers and reviewers are separate from course operations.</li>
            <li><strong>Methodology rubrics:</strong> Star ratings are governed by our 7-factor scoring system.</li>
          </ul>

          <p className="pt-4 border-t border-slate-800">
            For more details, please review our full <Link href="/transparency/conflict-of-interest" className="text-purple-400 hover:text-purple-300 underline transition-colors">Conflict of Interest Policy</Link> and <Link href="/editorial-policy" className="text-purple-400 hover:text-purple-300 underline transition-colors">Editorial Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
