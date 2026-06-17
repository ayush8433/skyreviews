import type { Metadata } from "next";
import Link from "next/link";
import { Landmark, ShieldAlert, Check } from "lucide-react";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Ownership & Affiliation Disclosure | SkyReviews",
  description: "Detailed ownership structure of SkyReviews.us and relationship with Sky States.",
};

export default function OwnershipPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
            <Landmark className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800">Who Owns and Operates SkyReviews.us</h1>
            <p className="text-sm text-slate-500 mb-2">Last Updated: June 2026</p>
            <AuthorByline />
          </div>
        </div>

        {/* PROMINENT DISCLOSURE BOX */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
          <div className="flex gap-3">
            <ShieldAlert className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-amber-800 font-bold mb-2">Important Ownership Disclosure</h2>
              <p className="text-amber-900 text-sm leading-relaxed font-medium">
                SkyReviews.us is an independent digital publication owned by Sky Media Group, which shares parent company ownership with Sky States (the online training provider reviewed on this site, skystates.us). The publishing operations and the training business are run under separate management.
              </p>
              <p className="text-amber-900 text-sm leading-relaxed mt-2">
                This disclosure is published prominently on every page to ensure transparency and trust regarding corporate relationships. Reviews published on this site are governed by independent editorial guidelines and are not approved, edited, or modified by the Sky States commercial team.
              </p>
            </div>
          </div>
        </div>

        {/* content */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-800">Why We Publish This</h2>
          <p>
            The tech training market is crowded and opaque. Many comparison websites feature affiliate links without disclosing corporate alignments or commercial incentives. 
          </p>
          <p>
            Affiliated review portals can still provide substantial, high-fidelity consumer utility, provided they are <strong>completely transparent</strong>. Rather than obscuring this relationship, it is disclosed front and center. The managing team pledges to publish criticism, negative student experiences, and honest ratings alongside success stories.
          </p>

          <h2 className="text-xl font-bold text-slate-800">Our Safeguards Against Bias</h2>
          <p>
            To prevent corporate relationships from influencing ratings, we have implemented strict organizational and operational structures:
          </p>
          
          <ul className="space-y-3 pl-0">
            {[
              "Independent Editorial Control: The writers and reviewers of SkyReviews.us report to an independent managing editor, completely separate from Sky States sales and admissions teams.",
              "Formula-driven Star Ratings: We calculate ratings using a structured 100-point scoring framework. Ratings are not assigned subjectively.",
              "Unedited Student Reviews: Student reviews (both positive and negative) are published without modification, provided they meet our verification and moderation standards.",
              "Audits & Grievance Logs: We maintain a public Corrections Archive and Complaint Resolution page to track errors and student concerns.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-slate-800">Legal Entity Information</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm">
            <p className="mb-2"><strong>Corporate Entity:</strong> Sky States Inc.</p>
            <p className="mb-2"><strong>Registration Address:</strong> 8 The Green Suite R, Dover, DE 19901</p>
            <p className="mb-2"><strong>Operational Office:</strong> 30 N Gould St, Sheridan, WY 82801</p>
            <p><strong>Transparency Inquiries:</strong> <a href="mailto:support@skyreviews.us" className="text-blue-600 hover:underline">support@skyreviews.us</a></p>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <AuthorByline />
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between text-sm">
          <Link href="/transparency" className="text-blue-600 hover:underline font-semibold flex items-center">
            ← Back to Transparency Hub
          </Link>
          <Link href="/transparency/conflict-of-interest" className="text-blue-600 hover:underline font-semibold flex items-center">
            Read Conflict of Interest Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
