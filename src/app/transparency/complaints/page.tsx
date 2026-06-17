import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Complaint Resolution Process | SkyReviews",
  description: "Learn how student complaints regarding course enrollment are registered and reviewed.",
};

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
          <div className="p-3 bg-slate-50 text-slate-600 rounded-xl border border-slate-200">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Complaint Resolution Process</h1>
            <p className="text-sm text-slate-500">How Grievances Are Registered and Tracked</p>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-normal">
          <p>
            This page provides student grievance instructions. While SkyReviews.us is a review platform and not a legal or training entity that can process refunds directly, we document enrollment and policy complaint patterns to maintain training transparency.
          </p>

          <h2 className="text-xl font-bold text-slate-800">Recommended Steps for Resolving Disputes</h2>
          
          <div className="space-y-4 my-6">
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
              <h3 className="font-bold text-slate-800 text-sm mb-1">Step 1: Contact Training Support Directly</h3>
              <p className="text-xs text-slate-600 mb-2">Reach out to your assigned student advisor or the official support channel in writing.</p>
              <p className="text-xs font-semibold text-slate-700">Email: <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> | Phone: (888) 810-2434</p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
              <h3 className="font-bold text-slate-800 text-sm mb-1">Step 2: Escalate to Grievance/Consumer Forums</h3>
              <p className="text-xs text-slate-600">
                If support fails to respond or resolve refund requests in 10 business days, students can escalate disputes to national consumer forums (such as the Consumer Protection Act in India or the State Board of Education/Attorney General in the US depending on local residency).
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
              <h3 className="font-bold text-slate-800 text-sm mb-1">Step 3: Document &amp; Log Your Case with Us</h3>
              <p className="text-xs text-slate-600">
                Submit details of your unresolved grievance through our review form. We document complaint volumes, response rates, and dispute types to include in our periodic score reviews.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-800">Quarterly Aggregate Complaint Data (Q1 2026)</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Complaints Logged:</strong> 4 cases</li>
            <li><strong>Resolved Cases:</strong> 3 cases</li>
            <li><strong>Unresolved Cases:</strong> 1 case</li>
            <li><strong>Average Response Time:</strong> 4 business days</li>
            <li><strong>Primary Concerns:</strong> Refund processing delays, installment payment coordination.</li>
          </ul>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between text-sm">
          <Link href="/transparency/corrections" className="text-blue-600 hover:underline font-semibold">
            ← Corrections Policy
          </Link>
          <Link href="/transparency" className="text-blue-600 hover:underline font-semibold">
            Back to Transparency Hub →
          </Link>
        </div>
      </div>
    </div>
  );
}
