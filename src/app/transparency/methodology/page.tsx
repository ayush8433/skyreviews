import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Database, Award, AlertCircle } from "lucide-react";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Review Methodology | SkyReviews",
  description: "Learn about our 7-factor framework for scoring ed-tech programs objectively.",
};

const factors = [
  {
    name: "1. Curriculum Quality (20 Points)",
    details: "Industry relevance, tool coverage (Python, Azure, Docker, etc.), hands-on project work, and frequency of updates.",
  },
  {
    name: "2. Instructor Credentials (15 Points)",
    details: "Real-world experience, teaching background, and student accessibility outside live lectures.",
  },
  {
    name: "3. Pricing Transparency (15 Points)",
    details: "All-in cost clarity, hidden fee audit, and how installment/payment plans compare to market rates.",
  },
  {
    name: "4. Refund & Cancellation Policy (15 Points)",
    details: "Clarity of the refund window, cancellation mechanisms, and documented enforcement.",
  },
  {
    name: "5. Career Support (15 Points)",
    details: "Placement services, resume preparation, mock interviews, and recruiter connections.",
  },
  {
    name: "6. Student Experience (10 Points)",
    details: "Portal usability, administrative response times, and active community spaces (Discord, WhatsApp).",
  },
  {
    name: "7. Outcome Verification (10 Points)",
    details: "Placement rates, salary growth, and tracking graduation and career transitions on LinkedIn.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
          <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl border border-emerald-100">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800">Review Methodology</h1>
            <p className="text-sm text-slate-500 mb-2">How We Review &amp; Score Online Bootcamps</p>
            <AuthorByline />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-normal">
          <h2 className="text-xl font-bold text-slate-800">Our 7-Factor Review Framework</h2>
          <p>
            Rather than assigning arbitrary ratings based on sponsorships or qualitative opinions, we use a structured 100-point rubric to score every organization reviewed on our platform.
          </p>

          <div className="space-y-4 my-8">
            {factors.map((factor, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50">
                <h3 className="font-bold text-slate-800 text-base mb-1">{factor.name}</h3>
                <p className="text-sm text-slate-600">{factor.details}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-slate-800">Data Sources We Use</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Student Interviews:</strong> We require a minimum of 3 student interviews per program to assess teaching style, advisor support, and pricing.</li>
            <li><strong>Public Review Monitoring:</strong> We check platforms like Google Maps Reviews, Trustpilot, and forums (Reddit) to spot common complaint clusters.</li>
            <li><strong>Alumni Tracking:</strong> We use LinkedIn to track cohorts and measure actual placements at 3, 6, and 12 months post-graduation.</li>
          </ul>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-sm text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>What We Do Not Do:</strong> We do not accept payment to remove negative reviews, fabricate quotes, or modify ratings at the request of the school.
            </div>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <AuthorByline />
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between text-sm">
          <Link href="/editorial-policy" className="text-blue-600 hover:underline font-semibold">
            ← Editorial Policy
          </Link>
          <Link href="/transparency/rating-calculation" className="text-blue-600 hover:underline font-semibold">
            Rating Calculation →
          </Link>
        </div>
      </div>
    </div>
  );
}
