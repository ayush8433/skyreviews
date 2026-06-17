import type { Metadata } from "next";
import Link from "next/link";
import { Book } from "lucide-react";

export const metadata: Metadata = {
  title: "Upskilling & Ed-Tech Glossary | SkyReviews",
  description: "Learn definitions of standard terms used in data science, cloud DevOps, and cybersecurity certifications.",
};

const glossaryItems = [
  { term: "LPA", definition: "Lakhs Per Annum. A standard unit of yearly compensation in India (1 Lakh = 100,000 Rupees)." },
  { term: "EMI", definition: "Equated Monthly Installment. A monthly payment structure option allowed for student tuition." },
  { term: "DP-900", definition: "Microsoft Azure Data Fundamentals certification. An industry-aligned database credential." },
];

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <Book className="w-8 h-8 text-blue-600" /> Glossary
        </h1>

        <div className="space-y-4">
          {glossaryItems.map((item) => (
            <div key={item.term} className="border border-slate-150 p-4 rounded-xl bg-slate-50">
              <h3 className="font-bold text-slate-800 text-sm mb-1">{item.term}</h3>
              <p className="text-xs text-slate-600">{item.definition}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100">
          <Link href="/research" className="text-blue-600 hover:underline font-semibold text-sm">
            ← Research Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
