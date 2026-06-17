import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Admissions FAQs | SkyReviews",
  description: "Find answers regarding eligibility requirements, screening calls, and batch registrations.",
};

export default function AdmissionsFAQsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <HelpCircle className="w-8 h-8 text-blue-600" /> Admissions FAQs
        </h1>

        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-slate-800 text-sm mb-1">What are the eligibility requirements?</h3>
            <p className="text-xs text-slate-600">Courses are open to graduates and working professionals. No prior computer science degree is required.</p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/faq" className="text-blue-600 hover:underline font-semibold text-sm">
            ← FAQ Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
