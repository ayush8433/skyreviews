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
    <div className="min-h-screen bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>

        <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl space-y-8">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mx-auto border border-amber-500/20">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Admissions Communications Opt-Out</h1>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              If you no longer wish to receive phone calls, emails, or messages from our advisors, submit your details below to be registered on our Do Not Call (DNC) list.
            </p>
          </div>

          <OptOutForm />

          <div className="border-t border-slate-800 pt-6 space-y-3 text-left">
            <h2 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
              <Info className="w-4 h-4 text-purple-400" /> Compliance Details
            </h2>
            <p className="text-xs text-slate-450 leading-relaxed">
              Opt-out requests are processed automatically and applied across our central outreach registry within 24 to 48 business hours. If you continue to receive communications after this window, contact us directly at <a href="mailto:info@skystates.us" className="text-purple-400 hover:text-purple-300 underline transition-colors font-semibold">info@skystates.us</a> with subject line &quot;Opt-Out Escalation&quot;.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
