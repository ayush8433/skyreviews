import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, HelpCircle } from "lucide-react";
import AuthorByline from "@/components/AuthorByline";

export const metadata: Metadata = {
  title: "Rating Calculation | SkyReviews",
  description: "Learn how we calculate star ratings and editorial scores for ed-tech programs.",
};

const scores = [
  { factor: "Curriculum Quality", points: 20, weight: "20%" },
  { factor: "Instructor Credentials", points: 15, weight: "15%" },
  { factor: "Pricing Transparency", points: 15, weight: "15%" },
  { factor: "Refund Policy Fairness", points: 15, weight: "15%" },
  { factor: "Career Support", points: 15, weight: "15%" },
  { factor: "Student Experience", points: 10, weight: "10%" },
  { factor: "Outcome Verification", points: 10, weight: "10%" },
];

const conversions = [
  { range: "90–100 points", stars: "★★★★★ (5 Stars)" },
  { range: "75–89 points", stars: "★★★★☆ (4 Stars)" },
  { range: "60–74 points", stars: "★★★☆☆ (3 Stars)" },
  { range: "45–59 points", stars: "★★☆☆☆ (2 Stars)" },
  { range: "Below 45 points", stars: "★☆☆☆☆ (1 Star)" },
];

export default function RatingCalculationPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs">
        {/* Header */}
        <div className="flex items-center gap-3 pb-6 border-b border-slate-200 mb-8">
          <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl border border-cyan-100">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-800">Rating Calculation</h1>
            <p className="text-sm text-slate-500 mb-2">The Formula Behind Our Star Ratings</p>
            <AuthorByline />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed font-normal">
          <p>
            Our star ratings are calculated from a strict 100-point scoring rubric, not from aggregated student reviews alone. Student reviews are displayed separately to ensure readers can distinguish between editorial scoring and subjective feedback.
          </p>

          <h2 className="text-xl font-bold text-slate-800">Scoring Breakdown Table</h2>
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">Evaluation Factor</th>
                  <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">Max Points</th>
                  <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">Weight</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((row) => (
                  <tr key={row.factor} className="hover:bg-slate-50/50">
                    <td className="border border-slate-200 px-4 py-3 font-medium text-slate-800">{row.factor}</td>
                    <td className="border border-slate-200 px-4 py-3 text-center font-semibold text-slate-700">{row.points}</td>
                    <td className="border border-slate-200 px-4 py-3 text-center text-slate-600">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-slate-800">Star Rating Conversion Rules</h2>
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">Total Points Range</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">Star Rating</th>
                </tr>
              </thead>
              <tbody>
                {conversions.map((row) => (
                  <tr key={row.range} className="hover:bg-slate-50/50">
                    <td className="border border-slate-200 px-4 py-3 font-medium text-slate-800">{row.range}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700 font-semibold">{row.stars}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-slate-800">Student Review Integration</h2>
          <p>
            When a school listing features user ratings, those are calculated as the arithmetic mean of all verified student submissions. The overall score featured at the top of a school page lists the Editorial score and the Student score separately (e.g. <em>Editorial: 78/100, Student: 4.1/5</em>).
          </p>

          <h2 className="text-xl font-bold text-slate-800">Score History</h2>
          <p>
            We save and log previous scores whenever a school undergoes its 6-month scheduled re-review. This tracking data helps prospective students determine whether a school&apos;s curriculum quality or support is improving or declining over time.
          </p>
        </div>

        <div className="flex justify-center my-6">
          <AuthorByline />
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between text-sm">
          <Link href="/transparency/methodology" className="text-blue-600 hover:underline font-semibold">
            ← Review Methodology
          </Link>
          <Link href="/transparency/verification" className="text-blue-600 hover:underline font-semibold">
            Student Verification →
          </Link>
        </div>
      </div>
    </div>
  );
}
