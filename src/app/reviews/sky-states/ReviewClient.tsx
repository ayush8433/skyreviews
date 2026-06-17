"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldAlert, BadgeCheck, CheckCircle2, XCircle } from "lucide-react";

export default function SkyStatesReviewClient() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "programs", label: "Programs" },
    { id: "pricing", label: "Pricing" },
    { id: "refund", label: "Refund Policy" },
    { id: "outcomes", label: "Outcomes" },
    { id: "proscons", label: "Pros & Cons" },
    { id: "concerns", label: "Common Concerns" },
    { id: "faqs", label: "FAQs" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Zone */}
      <section className="bg-white border-b border-slate-200 py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-2.5 py-1 rounded border border-blue-100">
                  Ed-Tech Profile
                </span>
                <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded border border-emerald-100 flex items-center gap-1">
                  <BadgeCheck className="w-3.5 h-3.5" /> Verified Entity
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Sky States</h1>
              <p className="text-slate-500 text-sm mt-1">Online technology training bootcamp and career development platform.</p>
            </div>

            <div className="flex items-center gap-6 bg-slate-50 border border-slate-200 rounded-xl p-4 shrink-0">
              <div className="text-center">
                <div className="text-xs text-slate-500 font-semibold uppercase">Editorial Score</div>
                <div className="text-2xl font-bold text-blue-600">78<span className="text-sm text-slate-400">/100</span></div>
                <div className="text-xs text-amber-500 font-bold">★★★★☆</div>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div className="text-center">
                <div className="text-xs text-slate-500 font-semibold uppercase">Student Rating</div>
                <div className="text-2xl font-bold text-slate-800">4.1<span className="text-sm text-slate-400">/5</span></div>
                <div className="text-xs text-slate-400">Based on 47 verified reviews</div>
              </div>
            </div>
          </div>

          {/* ALWAYS VISIBLE AFFILIATION NOTICE */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6 flex gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 leading-relaxed">
              <strong>⚠️ Affiliation Disclosure:</strong> SkyReviews.us is owned and operated by the same ownership group as Sky States. Both entities are part of the same corporate group. All review scores, rating factors, and editorial policies are administered under independent guidelines. Read our{" "}
              <Link href="/transparency/conflict-of-interest" className="underline font-bold hover:text-amber-950 transition-colors">
                Conflict of Interest Policy
              </Link>{" "}
              for details.
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              href="/transparency/methodology"
              className="text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg border border-slate-200 transition-colors"
            >
              Read Our Review Methodology
            </Link>
            <Link
              href="/student-reviews/submit"
              className="text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-xs transition-colors"
            >
              Submit a Student Review
            </Link>
            <Link
              href="/verify"
              className="text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg shadow-xs transition-colors"
            >
              View Trust Verification →
            </Link>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="container mx-auto max-w-6xl overflow-x-auto">
          <div className="flex gap-1 py-2 min-w-max px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Contents */}
      <main className="container mx-auto max-w-6xl py-10 px-4">
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-8 shadow-xs">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-3">About Sky States</h2>
              <p className="text-slate-600 leading-relaxed">
                Sky States is an online ed-tech training platform offering specialized cohorts in Data Science, Cyber Security, DevOps, and AI. Built with a weekend-led hybrid model, it caters to working professionals and career changers who cannot attend full-time university courses but require mentored support, real datasets, and certification preparation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Company Information</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li><strong>Headquarters:</strong> Sheridan, Wyoming &amp; Dover, Delaware (USA)</li>
                  <li><strong>Format:</strong> Live Online Lectures (Weekends) + Recorded Dashboard Access</li>
                  <li><strong>Target Audience:</strong> Career switchers, fresh graduates, working professionals</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Accreditations &amp; Alignment</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Sky States is a Microsoft-aligned learning provider. Programs are explicitly structured to prepare students for international technical credentials, such as the Microsoft DP-900 (Azure Data Fundamentals) certification exam.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PROGRAMS TAB */}
        {activeTab === "programs" && (
          <div className="space-y-6">
            {[
              {
                name: "Data Science & Artificial Intelligence",
                duration: "6 Months",
                format: "Live weekend lectures + assignments",
                prereqs: "Basic computer literacy, spreadsheet familiarity",
                tools: "Python, Pandas, NumPy, Scikit-learn, SQL, Power BI, Azure fundamentals",
                projects: "Customer churn predictor, retail sales pipeline analytics dashboard, database migration case study",
              },
              {
                name: "Cyber Security & Ethical Hacking",
                duration: "4 Months",
                format: "Live weekend classes + virtual lab sessions",
                prereqs: "Basic command-line familiarity recommended",
                tools: "Kali Linux, Wireshark, Metasploit, Nmap, OWASP framework",
                projects: "Vulnerability assessment audit, packet capture anomaly analysis, secure firewall config simulation",
              },
              {
                name: "DevOps & Cloud Computing",
                duration: "4 Months",
                format: "Live weekend lectures + project milestones",
                prereqs: "Software engineering or database fundamentals",
                tools: "AWS, Azure, Docker, Kubernetes, Jenkins, Git",
                projects: "CI/CD automated release pipeline, Kubernetes microservices orchestration, IaC terraform deployment",
              },
            ].map((program) => (
              <div key={program.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3 mb-4">{program.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600">
                  <p><strong>Duration:</strong> {program.duration}</p>
                  <p><strong>Format:</strong> {program.format}</p>
                  <p><strong>Prerequisites:</strong> {program.prereqs}</p>
                  <p><strong>Key Tools:</strong> {program.tools}</p>
                  <p className="md:col-span-2 mt-2 bg-slate-50 border border-slate-100 p-3 rounded-lg text-xs">
                    <strong>Projects:</strong> {program.projects}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* PRICING TAB */}
        {activeTab === "pricing" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-slate-800">Program Tuition Fees</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">Program Path</th>
                    <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">Base Fee</th>
                    <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">EMI Options</th>
                    <th className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-700">All-in Tuition</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { path: "Data Science & AI (Standard Cohort)", base: "$2,999", emi: "$300/mo (10 mos)", total: "$2,999" },
                    { path: "Cyber Security & Ethical Hacking (Standard Cohort)", base: "$2,999", emi: "$300/mo (10 mos)", total: "$2,999" },
                    { path: "DevOps & Cloud Computing (Standard Cohort)", base: "$2,999", emi: "$300/mo (10 mos)", total: "$2,999" },
                    { path: "Data Science & AI (One-to-One Short Term)", base: "$6,499", emi: "$650/mo (10 mos)", total: "$6,499" },
                    { path: "Cyber Security & Ethical Hacking (One-to-One Short Term)", base: "$6,499", emi: "$650/mo (10 mos)", total: "$6,499" },
                    { path: "DevOps & Cloud Computing (One-to-One Short Term)", base: "$6,499", emi: "$650/mo (10 mos)", total: "$6,499" },
                  ].map((row) => (
                    <tr key={row.path} className="hover:bg-slate-50/30">
                      <td className="border border-slate-200 px-4 py-3 font-semibold text-slate-800">{row.path}</td>
                      <td className="border border-slate-200 px-4 py-3 text-center text-slate-600">{row.base}</td>
                      <td className="border border-slate-200 px-4 py-3 text-center text-slate-600">{row.emi}</td>
                      <td className="border border-slate-200 px-4 py-3 text-center font-bold text-slate-800">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-xs text-emerald-950 space-y-3">
              <p className="font-bold text-emerald-900 text-sm">Value Breakdown &amp; Hourly Cost Analysis</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="bg-white p-3 rounded-lg border border-emerald-100 space-y-1">
                  <span className="font-bold text-emerald-800">Standard Cohort ($2,999)</span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 mt-1">
                    <li>~104 hours of live weekend classes</li>
                    <li>~52 hours of live doubt-solving sessions</li>
                    <li>~15 hours of portfolio reviews &amp; mock prep</li>
                    <li><strong>Estimated Cost:</strong> ~$17.50 / hour</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded-lg border border-emerald-100 space-y-1">
                  <span className="font-bold text-emerald-800">One-to-One Short Term ($6,499)</span>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 mt-1">
                    <li>All standard cohort resources</li>
                    <li>Dedicated weekly 1-on-1 private mentoring</li>
                    <li>Personalized resume &amp; LinkedIn audits</li>
                    <li>Private mock interview drills</li>
                    <li><strong>Estimated Cost:</strong> ~$31.39 / hour</li>
                  </ul>
                </div>
              </div>
              <p className="text-[10px] text-emerald-700 italic">
                * Average US bootcamps cost $10,000–$20,000 ($50–$100+/hr). Private technical tutoring starts at $150+/hr.
              </p>
            </div>
          </div>
        )}

        {/* REFUND POLICY TAB */}
        {activeTab === "refund" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-slate-800">Refund Policy &amp; Terms</h2>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-xl">
              <h3 className="font-bold text-blue-900 mb-1 text-sm">Official Refund Framework</h3>
              <p className="text-xs text-blue-800 leading-relaxed">
                If the student application is rejected, or if cancellation is requested within 3 business days of signing and payment, a full refund is processed. For withdrawals in the first week, a refund is issued minus a registration fee capped at $99. After the first week, tuition is non-refundable.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-sm">Plain-English Translation</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li><strong>Can I get a refund after Week 1?</strong> No. Ensure you evaluate program fit in the first 7 days of classes.</li>
                <li><strong>Are installment options refundable?</strong> Installment cancellations follow the same 7-day cutoff.</li>
                <li><strong>Refund request turnaround:</strong> Processed within 30 days of filing request via email to admissions.</li>
              </ul>
            </div>
          </div>
        )}

        {/* OUTCOMES TAB */}
        {activeTab === "outcomes" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-slate-800">Verified Outcomes Data</h2>
            <p className="text-sm text-slate-600">
              Placement statistics collected from alumni surveys and cross-checked against public LinkedIn profiles at 6 months post-program:
            </p>

            <div className="space-y-4">
              {[
                { label: "Data Science & AI", rate: "72%", bar: "w-[72%]" },
                { label: "Cyber Security & Hacking", rate: "78%", bar: "w-[78%]" },
                { label: "DevOps & Cloud Systems", rate: "68%", bar: "w-[68%]" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>{item.label}</span>
                    <span>{item.rate}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3">
                    <div className={`bg-blue-600 h-3 rounded-full ${item.bar}`} />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500 leading-relaxed mt-4">
              <strong>Caveat Box:</strong> Placement statistics are self-reported via graduate polls. They reflect active program graduates who sought employment in related tech roles within 6 months. This does not represent an absolute placement guarantee.
            </div>
          </div>
        )}

        {/* PROS & CONS TAB */}
        {activeTab === "proscons" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-emerald-800 flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Key Strengths (Pros)
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Live, interactive classes (not dry pre-recordings).</li>
                <li>✓ Industry-standard curriculum (Azure, SQL, Docker).</li>
                <li>✓ Weekend schedules accommodate full-time jobs.</li>
                <li>✓ Hands-on projects help build git portfolios.</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <h3 className="text-lg font-bold text-rose-800 flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-rose-600" /> Common Criticisms (Cons)
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✗ Short refund window (7 days) compared to universities.</li>
                <li>✗ Admissions follow-ups can feel persistent.</li>
                <li>✗ Workload requires 15-20 hours/week, which is demanding.</li>
                <li>✗ Career services help prepare files but do not guarantee job hires.</li>
              </ul>
            </div>
          </div>
        )}

        {/* COMMON CONCERNS TAB */}
        {activeTab === "concerns" && (
          <div className="space-y-6">
            {[
              {
                q: "1. Are sales and enrollment follow-up calls too aggressive?",
                reports: "Prospective students report receiving multiple follow-up calls from assigned advisors prior to enrollment.",
                response: "Advisors work with fixed cohort limits and follow up to answer program questions. Opt-out is immediate upon text/email confirmation.",
                take: "Admissions follow-up frequency can feel persistent. If you do not wish to enroll, clearly state your opt-out preference so advisors can remove you from catalogs.",
              },
              {
                q: "2. Is the refund policy fair?",
                reports: "Some students report missing the 7-day cancellation window and being unable to cancel subsequent payments.",
                response: "The 7-day refund window is strictly enforced to cover class seat allocation. Terms are documented in the enrollment agreement.",
                take: "The policy is clear but strict. Students should thoroughly evaluate program compatibility during their first week.",
              },
              {
                q: "3. Does Sky States ask for Social Security Numbers?",
                reports: "Some Reddit users reported being asked for their SSN during enrollment calls.",
                response: "Sky States does not require Social Security Numbers as part of standard enrollment. Only name, email, and phone are collected.",
                take: "Any request for an SSN is not aligned with stated policy. Report such requests to info@skystates.us and decline to provide the information.",
              },
            ].map((concern, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
                <h3 className="font-bold text-slate-800 text-sm border-b border-slate-100 pb-2">{concern.q}</h3>
                <p className="text-xs text-slate-600"><strong>Student reports:</strong> {concern.reports}</p>
                <p className="text-xs text-slate-600"><strong>Official response:</strong> {concern.response}</p>
                <p className="text-xs text-blue-900 bg-blue-50 border border-blue-100 p-3 rounded-lg">
                  <strong>Editorial take:</strong> {concern.take}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* FAQs TAB */}
        {activeTab === "faqs" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-xs">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Core Program FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "Is Sky States accredited?", a: "Sky States is a registered US training provider but is not a traditional university or accredited degree program." },
                { q: "Does Sky States offer placement guarantees?", a: "No. Sky States offers comprehensive career coaching, resume audits, and mock interview preparations but does not guarantee placement." },
                { q: "What happens if I miss a live lecture?", a: "All live weekend sessions are recorded and uploaded to the student portal dashboard within 24 hours." },
                { q: "Does Sky States require an SSN?", a: "No. Sky States does not require a Social Security Number. Only standard contact information (name, email, phone) is collected during enrollment." },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-3">
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{faq.q}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
