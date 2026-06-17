import type { Metadata } from "next";
import Link from "next/link";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Advisory Board members | External validators | SkyReviews",
  description: "Meet the academic and cybersecurity experts auditing our methodologies.",
};

export default function AdvisoryBoardPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <Award className="w-8 h-8 text-blue-600" /> Advisory Board
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          External advisors who audit review rubrics and outcomes data standards (not employed by Sky States):
        </p>

        <div className="space-y-4">
          <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
            <h3 className="font-bold text-slate-800 text-sm">Dr. Amit V.</h3>
            <p className="text-xs text-blue-600">Head of Cyber Security Research, external auditor</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/team" className="text-blue-600 hover:underline font-semibold text-sm">
            ← Editorial Team
          </Link>
        </div>
      </div>
    </div>
  );
}
