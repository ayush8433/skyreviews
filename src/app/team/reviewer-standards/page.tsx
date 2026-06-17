import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Reviewer & Evaluation Standards | SkyReviews",
  description: "Learn about the standards and criteria used by our editors to evaluate ed-tech bootcamps.",
};

export default function ReviewerStandardsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <ShieldAlert className="w-8 h-8 text-blue-600" /> Reviewer Standards
        </h1>

        <p className="text-sm text-slate-655 font-medium leading-relaxed">
          Reviewers must adhere to the following evaluation criteria when scoring bootcamp programs:
        </p>

        <ul className="space-y-2 text-sm text-slate-600">
          <li>✓ Confirm factual pricing against current class registration forms.</li>
          <li>✓ Validate syllabus and prerequisite statements with technical lead trainers.</li>
        </ul>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/team" className="text-blue-600 hover:underline font-semibold text-sm">
            ← Editorial Team
          </Link>
        </div>
      </div>
    </div>
  );
}
