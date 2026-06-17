import type { Metadata } from "next";
import Link from "next/link";
import { UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States Instructor Bios & Credentials | SkyReviews",
  description: "Read profiles and background summaries of Sky States trainers.",
};

const instructorsList = [
  {
    name: "Dr. Anand K.",
    role: "Lead Instructor, Data Science & AI",
    bio: "Over 12 years of enterprise data modeling experience. Formerly senior data architect at Tech Mahindra.",
    linkedin: "#",
  },
  {
    name: "Vikram S.",
    role: "Lead Instructor, Cyber Security",
    bio: "Certified Information Systems Security Professional (CISSP). Over 8 years of penetration testing experience.",
    linkedin: "#",
  },
  {
    name: "Siddharth P.",
    role: "Lead Instructor, DevOps & Cloud Systems",
    bio: "AWS Certified Solutions Architect & Kubernetes coordinator. Expert in CI/CD release automation.",
    linkedin: "#",
  },
];

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-3xl bg-white rounded-2xl border border-slate-200 p-8 md:p-12 shadow-xs space-y-6">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4 flex items-center gap-2">
          <UserCheck className="w-8 h-8 text-blue-600" /> Instructor Bios
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed">
          Weekend sessions are led by tech practitioners rather than academic-only trainers. Review our lead coordinators below.
        </p>

        <div className="space-y-6">
          {instructorsList.map((inst) => (
            <div key={inst.name} className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-2">
              <h3 className="font-bold text-slate-800 text-sm">{inst.name}</h3>
              <p className="text-xs text-blue-600 font-semibold">{inst.role}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{inst.bio}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-between text-sm">
          <Link href="/reviews/sky-states/programs" className="text-blue-600 hover:underline font-semibold">
            ← Program Details
          </Link>
          <Link href="/reviews/sky-states/student-outcomes" className="text-blue-600 hover:underline font-semibold">
            Student Outcomes →
          </Link>
        </div>
      </div>
    </div>
  );
}
