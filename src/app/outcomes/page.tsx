import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, TrendingUp, UserCheck, ShieldCheck, Award, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Placement Outcomes Dashboard | SkyReviews",
  description: "Explore verified career transitions, salary increases, and placement metrics for Sky States graduates.",
};

const COHORT_DATA = [
  {
    track: "Data Science & AI",
    gradRate: "94%",
    placementRate: "72%",
    salaryIncrease: "+70% ($48,000 to $82,000)",
    certification: "Microsoft DP-900 (Azure Data)",
    employers: "Amazon, Microsoft, JPMorgan Chase"
  },
  {
    track: "DevOps & Cloud Computing",
    gradRate: "91%",
    placementRate: "68%",
    salaryIncrease: "+76% ($50,000 to $88,000)",
    certification: "Microsoft AZ-900 / AZ-104",
    employers: "Lockheed Martin, Capital One"
  },
  {
    track: "Cybersecurity & SOC",
    gradRate: "89%",
    placementRate: "78%",
    salaryIncrease: "+80% ($40,000 to $72,000)",
    certification: "CompTIA Security+ / AZ-500",
    employers: "Northrop Grumman, General Dynamics"
  }
];

const caseStudies = [
  {
    name: "Robert M.",
    program: "Data Science & AI",
    batch: "October 2024",
    before: "College Graduate (Computer Science)",
    after: "Junior Data Analyst at Amazon",
    salaryBefore: "$0 (Unemployed)",
    salaryAfter: "$65,000",
    challenge: "Had theoretical knowledge of coding but struggled to construct data projects or pass technical rounds.",
    experience: "The weekend labs forced me to apply SQL and Python on messy datasets. Mentor guidance during the capstone preparation was crucial.",
    timeToJob: "4 months after graduation",
    quote: "Sky States helped me bridge the gap between college coding and industry requirements.",
    verifiedBy: ["Enrollment Record"],
  },
  {
    name: "Sarah P.",
    program: "DevOps & Cloud Computing",
    batch: "January 2025",
    before: "Systems Administrator",
    after: "DevOps Engineer at Lockheed Martin",
    salaryBefore: "$42,000",
    salaryAfter: "$80,000",
    challenge: "Stuck in legacy sysadmin work; wanted to transition to Kubernetes and automated CI/CD pipelines.",
    experience: "Setting up a complete automated build and test pipeline on AWS was challenging but prepared me directly for interviews.",
    timeToJob: "3 months after graduation",
    quote: "Building real pipelines on Azure and AWS made all the difference in my technical interviews.",
    verifiedBy: ["Certificate Credentials"],
  },
];

export default function OutcomesDashboard() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Sky States Student Career Transition and Placement Outcomes",
    "description": "Aggregated graduation rates, placement timelines, and median compensation growth statistics for Sky States alumni.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Sky States",
      "url": "https://skystates.us"
    },
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "variableMeasured": [
      "Graduation Rate",
      "Placement Rate within 180 days",
      "Median Salary Increase"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <div className="container mx-auto max-w-6xl space-y-12">
        
        {/* Header Hero */}
        <section className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/15">
              <TrendingUp className="w-3.5 h-3.5" /> Career Metrics
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Outcomes &amp; Placement Dashboard</h1>
            <p className="text-blue-100 leading-relaxed text-base md:text-lg">
              We monitor, verify, and document career transitions of our graduates. Explore placement metrics and before/after compensation adjustments.
            </p>
          </div>
        </section>

        {/* STRUCTURED COHORT OUTCOMES TABLE */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Cohort Outcomes Summary</h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The following table highlights the graduation rates, job placement outcomes (within 180 days of graduation), and salary increases across our core specialization tracks:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Specialization Track</th>
                  <th scope="col" className="px-6 py-4 flex items-center gap-1"><GraduationCap className="w-4 h-4" /> Grad Rate</th>
                  <th scope="col" className="px-6 py-4"><Briefcase className="w-4 h-4 inline mr-1" /> Placement (180d)</th>
                  <th scope="col" className="px-6 py-4"><TrendingUp className="w-4 h-4 inline mr-1" /> Salary Increase</th>
                  <th scope="col" className="px-6 py-4"><Award className="w-4 h-4 inline mr-1" /> Certification</th>
                  <th scope="col" className="px-6 py-4">Top Employers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {COHORT_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-slate-900">{row.track}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-800">{row.gradRate}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-800">{row.placementRate}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-emerald-700 font-medium">{row.salaryIncrease}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-600 text-xs">{row.certification}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-500 text-xs">{row.employers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 leading-relaxed">
            <strong>Important Methodology Caveat:</strong> Placement rates reflect survey respondents who reported full-time or part-time employment in a related field within 180 days. Graduation rates measure students who completed all project requirements. Compensation growth reflects self-reported salary scales and is not an employment guarantee.
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">Verified Graduate Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Title Area */}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg">{study.name}</h3>
                      <p className="text-xs text-blue-600 font-semibold">{study.program} — {study.batch}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold bg-emerald-50 border border-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Graduate
                    </div>
                  </div>

                  {/* Career change */}
                  <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">Before Enrolling</span>
                      <span className="font-bold text-slate-700">{study.before}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">After Completing</span>
                      <span className="font-bold text-slate-700">{study.after}</span>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-indigo-500 pl-4 py-0.5 text-slate-700 italic text-sm leading-relaxed">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>

                  {/* Challenges & Experience */}
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <p><strong>The Challenge:</strong> {study.challenge}</p>
                    <p><strong>Program Experience:</strong> {study.experience}</p>
                    <p><strong>Time to First Job:</strong> {study.timeToJob}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
                  <div className="flex gap-2">
                    {study.verifiedBy.map((check) => (
                      <span key={check} className="text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                        ✓ {check}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
