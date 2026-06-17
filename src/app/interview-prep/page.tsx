import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageSquare, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & Data Interview Preparation Hub | SkyReviews",
  description: "Common technical and behavioral interview questions with structured answer frameworks for tech job seekers.",
};

const QUESTIONS = [
  {
    q: "What is the difference between a Clustered and a Non-Clustered index in SQL?",
    a: "A clustered index determines the physical order of data rows in a database table. Because of this, a table can only have one clustered index. A non-clustered index is stored in a separate structure from the actual table data, acting as a pointer system (like an index at the back of a textbook). Tables can have multiple non-clustered indexes.",
    track: "Data Science / Analytics"
  },
  {
    q: "How does a CI/CD pipeline differ from manual deployment deployments?",
    a: "A CI/CD pipeline automates integration, testing, build phases, and deployment. This prevents human deployment errors, ensures tests are run on every commit, speeds up feedback loops, and guarantees consistent server configuration setups across environments.",
    track: "DevOps & Cloud"
  },
  {
    q: "What are the core steps to investigate a potential alert in a SIEM console?",
    a: "1. Triage the alert to confirm it isn't a known false positive. 2. Scope the affected assets and user accounts involved. 3. Correlate timestamps across event sources (e.g. login attempts, firewall packets). 4. Isolate systems if active malware/exfiltration is discovered. 5. Document incident details and update detection rules.",
    track: "Cybersecurity / SOC"
  }
];

export default function InterviewPrepPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4">
            Interview Prep <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Review mock technical interview questions and learn how to structure your answers for technical interviewers.
          </p>
        </div>

        <div className="space-y-8">
          {QUESTIONS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
                  {item.track}
                </span>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-950 mb-3">{item.q}</h3>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm md:text-base text-gray-700 leading-relaxed flex gap-3">
                    <MessageSquare className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
