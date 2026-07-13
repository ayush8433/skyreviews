import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Award, Calendar, CheckSquare } from "lucide-react";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Editorial Policy | SkyReviews",
  description: "Learn how SkyReviews.us creates independent, unbiased content and enforces editorial standards.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl text-slate-300 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-800 mb-8">
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
            <FileText className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-extrabold text-white">Editorial Policy</h1>
            <p className="text-sm text-slate-400 mb-2">Last Updated: June 2026 | Reviewed Every: 6 Months</p>
            <AuthorByline />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white">Our Mission</h2>
          <p>
            The mission of SkyReviews.us is to provide students researching online tech education with accurate, balanced, and verifiable information so they can make confident enrollment decisions.
          </p>

          <h2 className="text-xl font-bold text-white">Independence</h2>
          <p>
            Our editorial team operates independently. We do not have reporting relationships with Sky States&apos; sales, admissions, marketing, or commercial teams. Editorial bonuses or salaries are not tied to enrollment numbers, course purchases, or conversion rates.
          </p>

          <h2 className="text-xl font-bold text-white">What We Review and How</h2>
          <p>
            When conducting school evaluations, we score platforms based on five core criteria:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>Curriculum quality and industry relevance</li>
            <li>Instructor credentials and teaching experience</li>
            <li>Pricing transparency and installment clarity</li>
            <li>Refund policy fairness and actual execution</li>
            <li>Job placement support and student career transitions</li>
          </ul>

          <h2 className="text-xl font-bold text-white">How We Handle Negative Information</h2>
          <p>
            We do not suppress criticism. When concerns are raised by students or third-party platforms (like Google Reviews, Trustpilot, or forums), we investigate and include these findings in our company profiles. We afford the company 10 business days to provide an official response before publishing.
          </p>

          <h2 className="text-xl font-bold text-white">Commercial Relationships</h2>
          <p>
            SkyReviews.us does not receive affiliate fees from Sky States. Any sponsorships or display advertising (if introduced in the future) will be explicitly labeled as such.
          </p>

          <h2 className="text-xl font-bold text-white">Our Review Process Step-by-Step</h2>
          <ol className="list-decimal pl-5 space-y-2 text-slate-300">
            <li><strong>Initial Research:</strong> Auditing course curriculums and inspecting registration documents.</li>
            <li><strong>Data Collection:</strong> Scraping public reviews and tracking graduate placements through verified databases.</li>
            <li><strong>Student Interviews:</strong> Interviewing a minimum of 3 students per program.</li>
            <li><strong>Company Response Period:</strong> Giving the platform 10 business days to answer queries.</li>
            <li><strong>Editorial Review:</strong> Verification of sources and facts by a senior editor.</li>
            <li><strong>Publication:</strong> Publishing scores and reviews.</li>
            <li><strong>Scheduled Re-Review:</strong> Auditing company profiles every 6 months.</li>
          </ol>
        </div>

        <div className="flex justify-center my-6 border-t border-b border-slate-800 py-6">
          <AuthorByline />
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 flex justify-between text-sm">
          <Link href="/transparency/conflict-of-interest" className="text-purple-400 hover:text-purple-300 underline font-semibold transition-colors">
            ← Conflict of Interest Policy
          </Link>
          <Link href="/transparency/methodology" className="text-purple-400 hover:text-purple-300 underline font-semibold transition-colors">
            Review Methodology →
          </Link>
        </div>
      </div>
    </div>
  );
}
