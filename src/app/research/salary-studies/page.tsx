import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: " upsell & Salary Studies | Tech Compensation Reports | SkyReviews",
  description: "Examine entry-level and experienced upskilling salary transitions and growth statistics.",
};

const studies = [
  "Entry-Level Data Scientist Salaries in India 2025",
  "Cybersecurity Analyst Salaries: Tier 1 vs. Tier 2 City Comparison",
  "DevOps Engineer Compensation by Experience Level 2025",
  "Salary Growth After Bootcamp Completion: 3-Year Tracking Study",
];

export default function SalaryStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <TrendingUp className="w-8 h-8 text-blue-600" /> Salary Studies
        </h1>

        <ul className="space-y-3 pl-0 text-sm text-slate-650">
          {studies.map((s) => (
            <li key={s} className="border border-slate-150 p-4 rounded-xl bg-slate-50 font-medium">
              📈 {s}
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
