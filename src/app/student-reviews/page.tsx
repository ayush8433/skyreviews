import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Alumni Reviews & Testimonials | SkyReviews",
  description: "Browse verified student outcomes, program reviews, and career reports.",
};

const reviewsList = [
  { name: "Aarav K.", course: "Data Science & AI", text: "Great structured curriculum, but you must invest significant time during the weekdays to catch up.", rating: "4/5", badge: "Verified Graduate" },
  { name: "Nisha P.", course: "Cyber Security & Ethical Hacking", text: "Hands-on projects in Kali Linux and Metasploit prepared me well for technical certification prep.", rating: "5/5", badge: "Verified Enrolled" },
  { name: "Kabir R.", course: "DevOps & Cloud Systems", text: "The AWS and Kubernetes automation tasks were highly challenging. Placement advisor helped with my resume.", rating: "4/5", badge: "Verified Graduate" },
];

export default function StudentReviewsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="container mx-auto max-w-4xl space-y-8">
        <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-200 pb-4">
          All Student Reviews
        </h1>

        <div className="flex gap-3 overflow-x-auto pb-2">
          <Link href="/student-reviews/data-science" className="bg-white border border-slate-250 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600">
            Data Science &amp; AI
          </Link>
          <Link href="/student-reviews/cyber-security" className="bg-white border border-slate-250 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600">
            Cyber Security
          </Link>
          <Link href="/student-reviews/devops" className="bg-white border border-slate-250 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600">
            DevOps
          </Link>
          <Link href="/student-reviews/verification-guide" className="bg-white border border-slate-250 px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-600">
            Badge Guide
          </Link>
        </div>

        <div className="space-y-4">
          {reviewsList.map((rev, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">{rev.name}</h3>
                  <p className="text-[10px] text-blue-600 font-semibold">{rev.course}</p>
                </div>
                <span className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5" /> {rev.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-bold mb-2">Rating: {rev.rating}</p>
              <p className="text-xs text-slate-650 leading-relaxed italic">&ldquo;{rev.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
