import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Ed-Tech Industry Reports | SkyReviews",
  description: "Examine upskilling enrollment trends, completion rates, and market forecasts.",
};

const reports = [
  "India Ed-Tech Market Report 2025: Enrollment Trends in Tech Upskilling",
  "Online Learning Completion Rates in India: What the Data Shows",
  "Cybersecurity Workforce Gap in India 2025: Skills Most in Demand",
  "Data Science Hiring Trends in India: 2024–2025 Analysis",
];

export default function IndustryReportsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <FileText className="w-8 h-8 text-blue-600" /> Industry Reports
        </h1>

        <ul className="space-y-3 pl-0 text-sm text-slate-650">
          {reports.map((r) => (
            <li key={r} className="border border-slate-150 p-4 rounded-xl bg-slate-50 font-medium">
              📄 {r}
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/research" className="text-blue-600 hover:underline font-semibold text-sm">
            ← Research Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
