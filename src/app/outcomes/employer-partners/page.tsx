import type { Metadata } from "next";
import Link from "next/link";
import { Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Employer Partners & Talent Pipelines | SkyReviews",
  description: "View community collaborators, companies, and agencies hiring tech graduates.",
};

export default function EmployerPartnersPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <Handshake className="w-8 h-8 text-blue-600" /> Employer Partners
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Sky States works with ecosystem collaborators and local agencies to facilitate referrals and placements for qualified graduates.
        </p>

        <ul className="space-y-2 text-sm text-slate-600">
          <li>✓ Referral pipelines with Indian technology consultants and service providers.</li>
          <li>✓ Mock interviews hosted by external professionals from top IT firms.</li>
        </ul>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/outcomes" className="text-blue-600 hover:underline font-semibold text-sm">
            ← Outcomes Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
