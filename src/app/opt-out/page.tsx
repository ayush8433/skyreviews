import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, CheckCircle, Info } from "lucide-react";
import OptOutForm from "./OptOutForm";

export const metadata: Metadata = {
  title: "Admissions Communications Opt-Out | SkyReviews",
  description: "Request removal of your contact information from Sky States admissions and informational outreach cycles.",
};

export default function OptOutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>

        <div className="bg-white border border-gray-150 rounded-2xl shadow-xl p-6 md:p-10 space-y-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-100">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Admissions Communications Opt-Out</h1>
            <p className="text-sm text-gray-600 max-w-md mx-auto">
              If you no longer wish to receive phone calls, emails, or messages from our advisors, submit your details below to be registered on our Do Not Call (DNC) list.
            </p>
          </div>

          <OptOutForm />

          <div className="border-t border-gray-100 pt-6 space-y-3">
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest flex items-center gap-1.5">
              <Info className="w-4 h-4 text-blue-500" /> Compliance Details
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Opt-out requests are processed automatically and applied across our central outreach registry within 24 to 48 business hours. If you continue to receive communications after this window, contact us directly at <a href="mailto:info@skystates.us" className="text-blue-600 underline">info@skystates.us</a> with subject line &quot;Opt-Out Escalation&quot;.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
