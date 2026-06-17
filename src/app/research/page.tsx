import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Research & Ed-Tech Studies | SkyReviews",
  description: "Browse data-backed analyses, hiring trends, and program comparisons in the upskilling market.",
};

const researchLinks = [
  { name: "Industry Reports", href: "/research/industry-reports" },
  { name: "Salary Studies", href: "/research/salary-studies" },
  { name: "Career Transitions", href: "/research/career-transitions" },
  { name: "Ed-Tech Comparisons", href: "/research/comparisons" },
  { name: "Glossary of Terms", href: "/research/glossary" },
];

export default function ResearchHub() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-blue-600" /> Research &amp; Authority Hub
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Explore our market studies and salary analyses evaluating the effectiveness of technical upskilling programs:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {researchLinks.map((item) => (
            <Link key={item.name} href={item.href} className="border border-slate-200 rounded-xl p-4 bg-slate-50 font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-300 transition-all text-sm">
              {item.name} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
