import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Review Verification Status Guide | SkyReviews",
  description: "Learn about the student validation badges and audit checklist utilized by our editors.",
};

export default function VerificationGuidePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <BadgeCheck className="w-8 h-8 text-blue-600" /> Verification Status Guide
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          This guide outlines how we evaluate, moderate, and badge user reviews. Reviews submitted without supporting documents are marked as Unverified and weighted lower.
        </p>

        <div className="space-y-4">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-slate-600">
            <h3 className="font-bold text-slate-800 text-sm mb-1">✓ Verified Enrolled Badge</h3>
            <p>Assigned when the user provides an active student portal dashboard snapshot or billing receipt.</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-slate-600">
            <h3 className="font-bold text-slate-800 text-sm mb-1">✓✓ Verified Graduate Badge</h3>
            <p>Assigned when a graduation certificate, completion badge link, or transcript credentials are submitted.</p>
          </div>
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
