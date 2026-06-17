import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, FileWarning } from "lucide-react";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Corrections Policy & Archive | SkyReviews",
  description: "How SkyReviews.us handles, corrects, and logs factual errors on our review pages.",
};

const correctionsArchive = [
  {
    date: "June 02, 2026",
    page: "Sky States Overview",
    nature: "Corrected headquarters address in Delaware registration description from Suite K to Suite R.",
    status: "Completed",
  },
  {
    date: "May 14, 2026",
    page: "Data Science Pricing",
    nature: "Updated installment fee structure from monthly flat rate to dynamic billing options.",
    status: "Completed",
  },
];

export default function CorrectionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
          <div className="p-3 bg-rose-50 text-rose-600 rounded-xl border border-rose-100">
            <RefreshCw className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800">Corrections Policy</h1>
            <p className="text-sm text-slate-500 mb-2">Handling and Logging Factual Errors</p>
            <AuthorByline />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-normal">
          <p>
            Accuracy is vital to student trust. When we make mistakes in pricing, syllabus details, or corporate details, we fix them promptly and transparently.
          </p>

          <h2 className="text-xl font-bold text-slate-800">Our Corrections Process</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong>Submission:</strong> Readers report errors via email to <a href="mailto:corrections@skyreviews.us" className="text-blue-600 hover:underline">corrections@skyreviews.us</a> with supporting evidence.</li>
            <li><strong>Investigation:</strong> Our editors verify the report against official catalogs or school registries within 7 business days.</li>
            <li><strong>Implementation:</strong> We strike through the original text (e.g. <del>original text</del>) and insert the corrected fact inline. A &quot;Correction Notice&quot; banner is appended to the top of the modified page.</li>
            <li><strong>Archive:</strong> We log the change in our public Corrections Archive below.</li>
          </ol>

          <h2 className="text-xl font-bold text-slate-800">Corrections Archive</h2>
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">Date</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">Affected Page</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">Correction Detail</th>
                  <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {correctionsArchive.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50">
                    <td className="border border-slate-200 px-4 py-3 text-slate-500 font-medium whitespace-nowrap">{row.date}</td>
                    <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">{row.page}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{row.nature}</td>
                    <td className="border border-slate-200 px-4 py-3 text-center"><span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <AuthorByline />
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between text-sm">
          <Link href="/transparency/verification" className="text-blue-600 hover:underline font-semibold">
            ← Student Verification
          </Link>
          <Link href="/transparency/complaints" className="text-blue-600 hover:underline font-semibold">
            Complaint Resolution →
          </Link>
        </div>
      </div>
    </div>
  );
}
