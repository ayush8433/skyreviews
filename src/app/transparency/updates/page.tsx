import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, RefreshCw, CheckCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Transparency Updates & Policy Log | SkyReviews",
  description: "Chronological log of curriculum updates, brand disclosures, placement data verification audits, and opt-out registry adjustments.",
};

const LOG_ENTRIES = [
  {
    date: "June 10, 2026",
    title: "Self-Serve Opt-Out Portal Deployed",
    category: "Policy Compliance",
    description: "Added a public `/opt-out` registry page to allow users to self-register their details to the Do Not Call (DNC) list, improving privacy compliance and control.",
  },
  {
    date: "May 28, 2026",
    title: "Database Structure Verification Audit",
    category: "Data Verification",
    description: "Verified unique constraints and slug configurations on dynamic student review schemas to ensure long-term indexing stability in search systems.",
  },
  {
    date: "April 15, 2026",
    title: "Affiliation Disclosure Standardized",
    category: "Editorial Standards",
    description: "Updated global headers with a standardized affiliation banner detailing the shared ownership structure of SkyReviews and Sky States in compliance with FTC specifications.",
  },
  {
    date: "March 01, 2026",
    title: "Outcomes Dashboard Rebuilt",
    category: "Data Verification",
    description: "Re-structured the outcomes dashboard to include clear tabular data outlining graduation and placement metrics by cohort specialization track.",
  }
];

export default function TransparencyUpdatesPage() {
  return (
    <div className="min-h-screen bg-transparent py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href="/transparency" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Transparency Hub
          </Link>
        </div>

        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Transparency <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Updates Log</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A chronological timeline of operational updates, database audits, and compliance policy modifications.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 pl-8 space-y-12 mb-16">
          {LOG_ENTRIES.map((entry, idx) => (
            <div key={idx} className="relative group">
              {/* Dot indicator */}
              <div className="absolute -left-[42px] md:-left-[44px] top-1.5 p-1 rounded-full bg-slate-950 border-2 border-purple-500">
                <CheckCircle className="w-4 h-4 text-purple-400" />
              </div>
              
              <div className="bg-slate-900/60 border border-slate-808/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 space-y-3 text-left">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{entry.date}</span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">
                    {entry.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">{entry.title}</h2>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex gap-3 text-slate-400 text-xs leading-relaxed text-left">
          <RefreshCw className="w-4 h-4 text-slate-500 shrink-0 mt-0.5 animate-spin-slow" />
          <p>
            This log is updated automatically upon the implementation of significant backend optimizations or operational policies. It acts as our public audit registry.
          </p>
        </div>
      </div>
    </div>
  );
}
