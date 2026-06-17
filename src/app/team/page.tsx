import type { Metadata } from "next";
import Link from "next/link";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Editorial Team | SkyReviews",
  description: "Meet the independent writers, editors, and technical reviewers of SkyReviews.us.",
};

export default function EditorialTeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <Users className="w-8 h-8 text-blue-600" /> Editorial Team
        </h1>

        <p className="text-sm text-slate-655 font-medium leading-relaxed">
          Our reviewers separate corporate upskilling programs from commercial marketing campaigns.
        </p>

        <div className="space-y-4">
          <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
            <h3 className="font-bold text-slate-800 text-sm">Preeti S.</h3>
            <p className="text-xs text-blue-600">Managing Editor, Tech Education</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex gap-4 text-xs font-bold text-blue-600">
          <Link href="/team/advisory-board" className="hover:underline">Advisory Board</Link>
          <Link href="/authors" className="hover:underline">Author Index</Link>
          <Link href="/team/reviewer-standards" className="hover:underline">Reviewer Standards</Link>
        </div>
      </div>
    </div>
  );
}
