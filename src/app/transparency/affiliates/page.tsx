import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate & Advertising Disclosure | SkyReviews",
  description: "Revenue model disclosure and affiliate guidelines for SkyReviews.us.",
};

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <Info className="w-8 h-8 text-blue-600" /> Affiliate Disclosure
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          SkyReviews.us does not receive affiliate fees from Sky States. Any sponsorships or advertisement units implemented in the future will be clearly labeled as such.
        </p>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/transparency/data-standards" className="text-blue-600 hover:underline font-semibold">
            ← Data Standards
          </Link>
          <Link href="/transparency" className="text-blue-600 hover:underline font-semibold">
            Transparency Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
