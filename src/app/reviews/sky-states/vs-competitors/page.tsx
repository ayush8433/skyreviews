import type { Metadata } from "next";
import Link from "next/link";
import { GitCompare, CheckCircle, XCircle, ArrowLeft, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States vs Competitors Comparison Matrix | SkyReviews",
  description: "Objective comparison matrix comparing Sky States pricing, formats, live hours, and refund terms with competitors.",
};

const comparisonData = [
  {
    platform: "Sky States",
    price: "$2,999 – $6,499",
    format: "Live Weekend + Recorded Labs",
    refund: "100% Refund in 7 Days",
    support: "1-on-1 Advisor + Resume Vetting",
    projects: "Verified Capstone Portfolio",
    rating: "4.8"
  },
  {
    platform: "Traditional US Bootcamps",
    price: "$10,000 – $20,000",
    format: "Full-time Weekdays Only",
    refund: "Pro-rated (14-30 Days)",
    support: "Group Forums Only",
    projects: "General Assignments",
    rating: "4.1"
  },
  {
    platform: "Self-Paced Portals",
    price: "$300 – $1,200",
    format: "Pre-recorded Only",
    refund: "No Refund / 7 Days",
    support: "Automated Ticket Support",
    projects: "Self-graded projects",
    rating: "3.8"
  }
];

export default function CompetitorsComparisonPage() {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sky States Tech Bootcamps",
    "description": "Comprehensive technology training programs in Data Science, DevOps, and Cybersecurity.",
    "brand": {
      "@type": "Brand",
      "name": "Sky States"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "2999",
      "highPrice": "6499",
      "offerCount": "3"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 md:py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <div className="container mx-auto max-w-5xl space-y-8">
        <div className="mb-4">
          <Link href="/reviews/sky-states" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Review Hub
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-xl space-y-8">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 w-max">
              <GitCompare className="w-3.5 h-3.5" /> Market Analysis
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Sky States vs Ed-Tech Competitors
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Before committing to a tech transition program, evaluate pricing scale, support networks, and refund safety nets side-by-side:
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-150">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
                <tr>
                  <th scope="col" className="px-6 py-4">Platform</th>
                  <th scope="col" className="px-6 py-4">Pricing Range</th>
                  <th scope="col" className="px-6 py-4">Format</th>
                  <th scope="col" className="px-6 py-4">Refund Window</th>
                  <th scope="col" className="px-6 py-4">Advisor Support</th>
                  <th scope="col" className="px-6 py-4">Student Portfolios</th>
                  <th scope="col" className="px-6 py-4 text-center">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`hover:bg-slate-50/50 transition-colors ${row.platform === "Sky States" ? "bg-blue-50/10 font-medium" : ""}`}>
                    <td className="px-6 py-4 font-bold text-slate-900">{row.platform}</td>
                    <td className="px-6 py-4 text-slate-800">{row.price}</td>
                    <td className="px-6 py-4 text-slate-700 text-xs">{row.format}</td>
                    <td className="px-6 py-4 text-slate-700 text-xs">{row.refund}</td>
                    <td className="px-6 py-4 text-slate-600 text-xs">{row.support}</td>
                    <td className="px-6 py-4 text-slate-600 text-xs">{row.projects}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-700 px-2 py-0.5 rounded text-xs font-bold">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" /> {row.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 leading-relaxed">
            <strong>Disclosure:</strong> Competitor metrics represent industry averages gathered from public directory filings. Tuition costs and support availability vary by cohorts and specialization tracks.
          </div>
        </div>
      </div>
    </div>
  );
}
