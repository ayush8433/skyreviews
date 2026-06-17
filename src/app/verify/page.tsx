import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ShieldCheck,
  Building2,
  FileText,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Lock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Award,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sky States Trust & Verification Hub | SkyReviews",
  description:
    "A fact-based verification of Sky States' legitimacy, including business registration, refund policy, SSN policy, screen sharing policy, and Microsoft DP-900 certification alignment.",
};

const verifySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Sky States Trust & Verification Hub",
  url: "https://skyreviews.us/verify",
  datePublished: "2026-06-01",
  dateModified: new Date().toISOString().split("T")[0],
  description:
    "A comprehensive fact-check and trust verification of Sky States, covering business registration, refund policy, data collection, and curriculum alignment.",
  author: {
    "@type": "Organization",
    name: "SkyReviews Editorial Team",
    url: "https://skyreviews.us/about",
  },
  publisher: {
    "@type": "Organization",
    name: "SkyReviews",
    url: "https://skyreviews.us",
    logo: {
      "@type": "ImageObject",
      url: "https://skyreviews.us/logo.png",
    },
  },
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "Sky States",
    url: "https://skystates.us",
    legalName: "Sky States",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "30 N Gould St",
        addressLocality: "Sheridan",
        addressRegion: "WY",
        postalCode: "82801",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "8 The Green Suite R",
        addressLocality: "Dover",
        addressRegion: "DE",
        postalCode: "19901",
        addressCountry: "US",
      },
    ],
    telephone: "+1-888-810-2434",
    email: "info@skystates.us",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Sky States ask for a Social Security Number (SSN)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Sky States does not require a Social Security Number (SSN) as part of its standard enrollment process. Only standard contact details — name, email address, and phone number — are collected. Any request for an SSN should be questioned and reported to info@skystates.us.",
      },
    },
    {
      "@type": "Question",
      name: "Is screen sharing mandatory during enrollment at Sky States?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Screen sharing is not mandatory during Sky States enrollment. Any invitation to screen-share for a demo session is strictly optional. No enrollment requirement demands screen access to personal devices.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sky States a registered company in the United States?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sky States is a legally registered company in the United States, operating at 30 N Gould St, Sheridan, WY 82801, with headquarters at 8 The Green Suite R, Dover, DE 19901. It can be reached at (888) 810-2434 or info@skystates.us.",
      },
    },
    {
      "@type": "Question",
      name: "What is Sky States' refund policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sky States offers a full refund if canceled within 3 business days of signing and payment. A full refund minus a $99 registration fee is available if canceled before the first class. A full tuition refund minus registration fees is available if withdrawn in the first week of classes. No refunds are issued after the first week. US-based students may receive a full refund within 14 days of purchase if course content has not been accessed.",
      },
    },
    {
      "@type": "Question",
      name: "Is Sky States aligned with Microsoft certifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Sky States' curriculum is structured around Microsoft's official certification standards, specifically preparing students for the Microsoft DP-900 (Azure Data Fundamentals) certification exam. The exam itself is administered and proctored directly by Microsoft.",
      },
    },
  ],
};

const TRUST_CHECKS = [
  {
    id: "ssn",
    icon: Lock,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    verdict: "VERIFIED SAFE",
    title: "Social Security Number (SSN) Policy",
    claim: "Reddit concern: \"They asked for my Social Security Number\"",
    finding:
      "Sky States does NOT require a Social Security Number (SSN) at any stage of enrollment. Standard enrollment collects only: name, email address, and phone number. No financial identification data (SSN, bank account, or credit report) is required.",
    policyText:
      "Official Policy: SSN is never collected as part of the standard enrollment or onboarding workflow.",
    action: "Any advisor requesting an SSN should be reported to info@skystates.us immediately.",
    status: "safe",
  },
  {
    id: "screen-sharing",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    verdict: "OPTIONAL — NOT REQUIRED",
    title: "Screen Sharing During Demo Sessions",
    claim: "Reddit concern: \"They asked me to share my screen during an orientation call\"",
    finding:
      "Screen sharing is strictly optional and not a mandatory component of the enrollment process. Some advisors may demonstrate the student portal by requesting a shared view, but this is never a condition of enrollment.",
    policyText:
      "Official Policy: Screen sharing is an optional demo feature only. You may decline without affecting your enrollment status.",
    action: "If you feel pressured to share your screen, you can decline and email info@skystates.us to report the experience.",
    status: "caution",
  },
  {
    id: "registration",
    icon: Building2,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    verdict: "VERIFIED — US REGISTERED ENTITY",
    title: "Business Registration & Legal Presence",
    claim: "Reddit concern: \"Is Sky States even a real company?\"",
    finding:
      "Sky States is a legally registered business operating in the United States with verifiable physical addresses and publicly accessible contact information.",
    policyText:
      "Registered Addresses: 30 N Gould St, Sheridan, WY 82801 | 8 The Green Suite R, Dover, DE 19901",
    action: "Contact: (888) 810-2434 | info@skystates.us",
    status: "safe",
  },
  {
    id: "refund",
    icon: CreditCard,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    verdict: "POLICY DOCUMENTED — STRICT BUT CLEAR",
    title: "Refund Policy",
    claim: "Reddit concern: \"They won't refund me\" / \"Refund policy is unclear\"",
    finding:
      "Sky States has a documented refund policy. The window is strict (7 days for classes started) but is defined in writing in the enrollment agreement. The policy exists and is enforceable.",
    policyText:
      "Policy: Full refund within 3 business days of signing. Full refund (minus $99) before first class. Full tuition refund (minus registration fees) within Week 1. No refunds after Week 1.",
    action: "Submit refund requests to info@skystates.us with your enrollment ID.",
    status: "info",
  },
  {
    id: "cold-calling",
    icon: Phone,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    verdict: "ACKNOWLEDGED — OPT-OUT AVAILABLE",
    title: "Enrollment Advisor Follow-Ups",
    claim: "Reddit concern: \"They call me every day — is this harassment?\"",
    finding:
      "Sky States uses a conversation-first enrollment model where advisors follow up with prospective students. This practice is acknowledged. A clear opt-out mechanism exists: one written request to info@skystates.us is sufficient to remove yourself from outreach.",
    policyText:
      "Opt-Out Policy: Send 'OPT OUT' to info@skystates.us or text STOP to remove yourself from call lists.",
    action: "If calls continue after an opt-out, contact info@skystates.us with the date and number of continued contact.",
    status: "caution",
  },
  {
    id: "certification",
    icon: Award,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    verdict: "VERIFIED — MICROSOFT DP-900 ALIGNED",
    title: "Microsoft Certification Alignment",
    claim: "Reddit concern: \"Is the curriculum actually tied to real certifications?\"",
    finding:
      "Sky States' flagship Data Science & AI track is explicitly aligned to prepare students for Microsoft's official DP-900 (Azure Data Fundamentals) exam. The DP-900 is a globally recognized Microsoft certification.",
    policyText:
      "Verification: Microsoft's DP-900 exam page: https://learn.microsoft.com/en-us/certifications/exams/dp-900/",
    action: "Students can verify the DP-900 exam independently at Microsoft's official certification portal.",
    status: "safe",
  },
];

function StatusBadge({ status, label }: { status: string; label: string }) {
  const colors = {
    safe: "bg-emerald-100 text-emerald-800 border-emerald-300",
    caution: "bg-amber-100 text-amber-800 border-amber-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
    risk: "bg-red-100 text-red-800 border-red-300",
  }[status] || "bg-slate-100 text-slate-800 border-slate-300";

  const icons = {
    safe: <CheckCircle2 className="w-3.5 h-3.5" />,
    caution: <AlertTriangle className="w-3.5 h-3.5" />,
    info: <FileText className="w-3.5 h-3.5" />,
    risk: <XCircle className="w-3.5 h-3.5" />,
  }[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide border px-2.5 py-1 rounded-full ${colors}`}
    >
      {icons}
      {label}
    </span>
  );
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Script
        id="verify-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(verifySchema) }}
      />
      <Script
        id="verify-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-emerald-600/15 blur-[140px] rounded-full" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-blue-600/15 blur-[140px] rounded-full" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Independent Fact-Check & Verification
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Sky States{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Trust Verification
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We independently verified the most common concerns raised about Sky States — including their SSN policy, screen sharing, refund policy, and business registration. Every check is documented below with official policy references.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 border border-white/10 px-3 py-1.5 rounded-full text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              6 Trust Checks Completed
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 border border-white/10 px-3 py-1.5 rounded-full text-xs">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              Policy-Backed Findings
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 border border-white/10 px-3 py-1.5 rounded-full text-xs">
              Updated: June 2026
            </span>
          </div>
        </div>
      </section>

      {/* Quick Summary Table */}
      <section className="py-10 px-4 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            Quick-Reference Summary
          </h2>
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-3.5 text-left font-bold text-slate-700 text-xs uppercase tracking-wider">Concern</th>
                  <th className="px-5 py-3.5 text-left font-bold text-slate-700 text-xs uppercase tracking-wider">Verdict</th>
                  <th className="px-5 py-3.5 text-left font-bold text-slate-700 text-xs uppercase tracking-wider">Key Fact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  { concern: "SSN Required?", verdict: "NO", fact: "SSN is never collected during enrollment", status: "safe" },
                  { concern: "Screen Sharing Mandatory?", verdict: "NO — Optional Only", fact: "You can decline any screen-share request", status: "caution" },
                  { concern: "Is Sky States a Real Company?", verdict: "YES — US Registered", fact: "Verified addresses in WY & DE, public phone & email", status: "safe" },
                  { concern: "Refund Policy Exists?", verdict: "YES — Documented", fact: "Full refund within 3 days; partial within Week 1", status: "info" },
                  { concern: "Can I Stop Calls?", verdict: "YES — Opt-Out Available", fact: "One written request stops all follow-ups", status: "caution" },
                  { concern: "Microsoft Cert Alignment?", verdict: "YES — DP-900 Verified", fact: "Curriculum maps to Microsoft DP-900 exam", status: "safe" },
                ].map((row, idx) => {
                  const statusColors: Record<string, string> = {
                    safe: "text-emerald-700 font-bold",
                    caution: "text-amber-700 font-bold",
                    info: "text-blue-700 font-bold",
                  };
                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-5 py-3.5 font-semibold text-slate-800">{row.concern}</td>
                      <td className={`px-5 py-3.5 ${statusColors[row.status] || ""}`}>{row.verdict}</td>
                      <td className="px-5 py-3.5 text-slate-600">{row.fact}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Trust Checks */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Detailed Trust Checks
          </h2>
          <p className="text-sm text-slate-600 mb-8 leading-relaxed">
            Each check below addresses a specific concern raised in public reviews and discussions about Sky States. All findings are based on documented company policy and independently verified information.
          </p>

          {TRUST_CHECKS.map((check) => {
            const Icon = check.icon;
            return (
              <div
                key={check.id}
                id={check.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Check Header */}
                <div className={`${check.bgColor} ${check.borderColor} border-b px-6 py-4 flex items-start gap-4`}>
                  <div className={`rounded-xl p-2.5 bg-white border ${check.borderColor} shrink-0`}>
                    <Icon className={`w-5 h-5 ${check.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-bold text-slate-900 text-lg">{check.title}</h3>
                      <StatusBadge status={check.status} label={check.verdict} />
                    </div>
                    <p className="text-xs text-slate-500 mt-1 italic">{check.claim}</p>
                  </div>
                </div>

                {/* Check Body */}
                <div className="px-6 py-5 space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">What we found</p>
                    <p className="text-sm text-slate-700 leading-relaxed">{check.finding}</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      📋 Official Policy Statement
                    </p>
                    <p className="text-sm text-slate-800 font-medium leading-relaxed">{check.policyText}</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4 py-0.5">
                    <p className="text-xs text-blue-900 leading-relaxed">
                      <strong>What you can do:</strong> {check.action}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact & Registration Section */}
      <section className="py-12 px-4 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-blue-600" />
            Verified Business Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "Wyoming Operations",
                icon: MapPin,
                value: "30 N Gould St, Sheridan, WY 82801, USA",
              },
              {
                label: "Delaware Headquarters",
                icon: MapPin,
                value: "8 The Green Suite R, Dover, DE 19901, USA",
              },
              {
                label: "Phone",
                icon: Phone,
                value: "(888) 810-2434",
                href: "tel:888-810-2434",
              },
              {
                label: "Email",
                icon: Mail,
                value: "info@skystates.us",
                href: "mailto:info@skystates.us",
              },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4"
                >
                  <ItemIcon className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-blue-600 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-slate-800">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-10 px-4 bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white font-bold text-lg mb-5">More Transparency Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { href: "/faq", label: "Full FAQ (40+ Questions)" },
              { href: "/reviews/sky-states", label: "Full Sky States Review" },
              { href: "/outcomes", label: "Placement Outcomes Dashboard" },
              { href: "/transparency/ownership", label: "Ownership Disclosure" },
              { href: "/affiliation-disclosure", label: "Affiliation Policy" },
              { href: "/research/is-sky-states-legit", label: "\"Is Sky States Legit?\" Investigation" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl px-4 py-3 text-sm text-slate-300 hover:text-white transition-all group"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
