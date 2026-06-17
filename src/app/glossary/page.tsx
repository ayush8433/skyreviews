import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Book, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Cloud & DevOps Technical Glossary | SkyReviews",
  description: "A comprehensive glossary of terms defining DevOps, Cloud, AI, and Cybersecurity terminology for tech career switchers.",
};

const GLOSSARY_TERMS = [
  {
    term: "CI/CD (Continuous Integration / Continuous Deployment)",
    definition: "A set of operating principles and practices that enable application development teams to deliver code changes more frequently and reliably through automated pipelines.",
    category: "DevOps"
  },
  {
    term: "SIEM (Security Information and Event Management)",
    definition: "A security management subsystem that combines security information management (SIM) and security event management (SEM) to analyze security alerts in real-time.",
    category: "Cybersecurity"
  },
  {
    term: "DP-900",
    definition: "The Microsoft certification exam syllabus mapping the foundational concepts of database workloads, storage types, analytics structures, and security configurations on Azure.",
    category: "Cloud / Azure"
  },
  {
    term: "Infrastructure as Code (IaC)",
    definition: "The management and provisioning of infrastructure (networks, virtual machines, load balancers, connection topologies) through machine-readable definition files (like Terraform or Ansible), rather than physical hardware configuration or interactive configuration tools.",
    category: "DevOps"
  },
  {
    term: "Azure Cosmos DB",
    definition: "Microsoft's globally distributed, multi-model database service supporting schema-less data structures, designed to manage high-throughput transactional workloads.",
    category: "Cloud / Azure"
  },
  {
    term: "SOC (Security Operations Center)",
    definition: "A centralized function within an organization employing people, processes, and technologies to continuously monitor and improve cybersecurity posture while preventing, detecting, and responding to incidents.",
    category: "Cybersecurity"
  }
];

export default function GlossaryPage() {
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
            Technical <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Glossary</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Essential definitions and acronym breakdowns for Cloud, DevOps, and Cybersecurity terms.
          </p>
        </div>

        <div className="space-y-6">
          {GLOSSARY_TERMS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Book className="w-5 h-5 text-indigo-500" />
                  <dfn className="not-italic font-bold">{item.term}</dfn>
                </h2>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-7 border-l-2 border-indigo-100">
                {item.definition}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3">
          <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs text-blue-800 leading-relaxed">
            Definitions are curated to align with curriculum objectives and common interview requirements. For detailed references, visit the official Microsoft Learn documentation hubs.
          </p>
        </div>
      </div>
    </div>
  );
}
