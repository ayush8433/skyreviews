import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Author & Reviewer Directory | SkyReviews",
  description: "Browse profile articles, credentials, and review histories of our editorial staff.",
};

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-blue-600" /> Author Index
        </h1>

        <div className="space-y-4">
          <div className="border border-slate-150 p-4 rounded-xl bg-slate-50">
            <h3 className="font-bold text-slate-800 text-sm">Preeti S.</h3>
            <p className="text-xs text-slate-500">Senior reviewer with 6 years experience in data analytics.</p>
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
