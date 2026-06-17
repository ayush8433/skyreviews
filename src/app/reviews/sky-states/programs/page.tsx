import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States Program Curriculums & Paths | SkyReviews",
  description: "View syllabus details, technologies covered, and prerequisites for Sky States training paths.",
};

const programsList = [
  {
    title: "Data Science & Artificial Intelligence",
    duration: "6 Months",
    prereqs: "Basic math and computer literacy",
    tools: "Python, Pandas, NumPy, SQL, Power BI, Azure fundamentals, Scikit-learn",
    projects: "Sales pipeline dashboard, predictive churn modeling, database migration capstone",
  },
  {
    title: "Cyber Security & Ethical Hacking",
    duration: "4 Months",
    prereqs: "Command-line interface basics",
    tools: "Kali Linux, Wireshark, Metasploit, Nmap, OWASP framework",
    projects: "Vulnerability audit reports, network traffic analysis, virtual firewall setups",
  },
  {
    title: "DevOps & Cloud Systems",
    duration: "4 Months",
    prereqs: "Command line and programming fundamentals",
    tools: "AWS, Azure, Docker, Kubernetes, Jenkins, Terraform, Git",
    projects: "CI/CD release automation, Kubernetes clustering, Cloud infrastructure automation",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <BookOpen className="w-8 h-8 text-blue-600" /> Program Details
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Sky States programs are designed to combine weekend lectures with weekly project milestones. Review the technologies and prerequisites below.
        </p>

        <div className="space-y-6">
          {programsList.map((program) => (
            <div key={program.title} className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-3">
              <h3 className="font-bold text-slate-800 text-base">{program.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
                <p><strong>Duration:</strong> {program.duration}</p>
                <p><strong>Prerequisites:</strong> {program.prereqs}</p>
                <p className="md:col-span-2"><strong>Tools &amp; Technologies:</strong> {program.tools}</p>
                <p className="md:col-span-2 bg-white border border-slate-150 p-2.5 rounded-lg text-slate-500 font-mono mt-1">
                  <strong>Projects:</strong> {program.projects}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/reviews/sky-states/refund-policy" className="text-blue-600 hover:underline font-semibold">
            ← Refund Policy
          </Link>
          <Link href="/reviews/sky-states/instructors" className="text-blue-600 hover:underline font-semibold">
            Instructors →
          </Link>
        </div>
      </div>
    </div>
  );
}
