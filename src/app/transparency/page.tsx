import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Info, FileText, BarChart3, CheckSquare, RefreshCw, AlertTriangle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Trust & Transparency Hub | SkyReviews",
  description: "Explore our framework of ownership disclosures, review methodologies, and student outcome standards.",
};

const transparencySections = [
  {
    title: "Ownership Disclosure",
    description: "Full disclosure of our relationship with Sky States and corporate structure.",
    href: "/transparency/ownership",
    icon: Info,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    title: "Conflict of Interest Policy",
    description: "How we separate our commercial operations from our independent reviews.",
    href: "/transparency/conflict-of-interest",
    icon: AlertTriangle,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    title: "Editorial Policy",
    description: "Our guidelines for creating unbiased content and maintaining standards.",
    href: "/editorial-policy",
    icon: FileText,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    title: "Review Methodology",
    description: "The 7-factor framework we use to grade ed-tech bootcamps.",
    href: "/transparency/methodology",
    icon: ShieldCheck,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    title: "Rating Calculation",
    description: "The math behind our editorial and student star ratings.",
    href: "/transparency/rating-calculation",
    icon: BarChart3,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    title: "Student Verification Process",
    description: "How we verify student enrollment badges to prevent fake reviews.",
    href: "/transparency/verification",
    icon: CheckSquare,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    title: "Corrections Policy",
    description: "How errors are handled, corrected, and publicly logged.",
    href: "/transparency/corrections",
    icon: RefreshCw,
    color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  },
  {
    title: "Complaint Resolution Process",
    description: "Our mechanism for logging student complaints and tracking responses.",
    href: "/transparency/complaints",
    icon: HelpCircle,
    color: "text-slate-400 bg-slate-500/10 border-slate-500/20",
  },
];

export default function TransparencyHub() {
  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900/40 via-indigo-950/30 to-slate-950 px-4 py-20 text-center text-white border-b border-slate-800">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container relative z-10 mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Trust &amp; Integrity
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Our Commitment to Transparency
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 leading-relaxed md:text-xl">
            We believe learners deserve honest, audited, and unbiased data before making life-changing education choices. Here is how we enforce objectivity.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {transparencySections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group flex flex-col justify-between bg-slate-900/60 border border-slate-805/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-purple-500/40 hover:bg-slate-900/80 transition-all duration-300 transform hover:-translate-y-1 text-left"
                >
                  <div>
                    <div className={`inline-flex p-3 rounded-xl border mb-4 ${section.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors mb-2">
                      {section.title}
                    </h2>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-semibold text-purple-400 group-hover:text-purple-300 transition-colors">
                    Read policy
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Quick Disclaimer box */}
          <div className="mt-16 bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">Need to verify a student testimonial?</h3>
            <p className="text-slate-350 mb-6 text-sm max-w-2xl mx-auto">
              We collect and store verification credentials from every student who submits a review with a verification badge. Learn more about our validation standards.
            </p>
            <Button asChild className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-xl border-none shadow-lg shadow-purple-500/20">
              <Link href="/transparency/verification">
                Verify Badges
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
