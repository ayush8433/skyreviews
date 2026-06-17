import type { Metadata } from "next";
import Link from "next/link";
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
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    title: "Conflict of Interest Policy",
    description: "How we separate our commercial operations from our independent reviews.",
    href: "/transparency/conflict-of-interest",
    icon: AlertTriangle,
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    title: "Editorial Policy",
    description: "Our guidelines for creating unbiased content and maintaining standards.",
    href: "/editorial-policy",
    icon: FileText,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    title: "Review Methodology",
    description: "The 7-factor framework we use to grade ed-tech bootcamps.",
    href: "/transparency/methodology",
    icon: ShieldCheck,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Rating Calculation",
    description: "The math behind our editorial and student star ratings.",
    href: "/transparency/rating-calculation",
    icon: BarChart3,
    color: "text-cyan-600 bg-cyan-50 border-cyan-100",
  },
  {
    title: "Student Verification Process",
    description: "How we verify student enrollment badges to prevent fake reviews.",
    href: "/transparency/verification",
    icon: CheckSquare,
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    title: "Corrections Policy",
    description: "How errors are handled, corrected, and publicly logged.",
    href: "/transparency/corrections",
    icon: RefreshCw,
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
  {
    title: "Complaint Resolution Process",
    description: "Our mechanism for logging student complaints and tracking responses.",
    href: "/transparency/complaints",
    icon: HelpCircle,
    color: "text-slate-600 bg-slate-50 border-slate-100",
  },
];

export default function TransparencyHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 px-4 py-20 text-center text-white">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-400/25 rounded-full blur-3xl" />
        
        <div className="container relative z-10 mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/15 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" /> Trust &amp; Integrity
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Our Commitment to transparency
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100/90 leading-relaxed md:text-xl">
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
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div>
                    <div className={`inline-flex p-3 rounded-xl border mb-4 ${section.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                      {section.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
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
          <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-8 shadow-xs max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Need to verify a student testimonial?</h3>
            <p className="text-slate-600 mb-6 text-sm">
              We collect and store verification credentials from every student who submits a review with a verification badge. Learn more about our validation standards.
            </p>
            <Link
              href="/transparency/verification"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-colors"
            >
              Verify Badges
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
