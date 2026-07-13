import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Database, Terminal, Shield, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Career Learning Roadmaps | SkyReviews",
  description: "Step-by-step career path guides for Data Science, DevOps, and Cybersecurity roles with certification alignments.",
};

const ROADMAPS = [
  {
    title: "Data Analyst & Scientist Roadmap",
    icon: Database,
    description: "Learn how to collect, clean, analyze, and visualize data, leading up to Microsoft Azure data credentials.",
    color: "from-blue-600/80 to-cyan-600/80",
    textColors: "text-blue-400",
    bgColors: "bg-blue-950/50 border border-blue-900/30",
    borderColors: "border-blue-900/40",
    steps: [
      { name: "Excel & SQL Fundamentals", desc: "Data structures, query optimization, joins, aggregation, and schema layouts." },
      { name: "Data Visualization & BI", desc: "Building dashboards with Power BI or Tableau and interpreting metrics." },
      { name: "Azure Data Fundamentals (DP-900)", desc: "Relational/non-relational database concepts, analytics workloads on Azure." },
      { name: "Advanced Analytics & Python", desc: "Pandas, NumPy, introductory statistical models, and predictive analytics." }
    ]
  },
  {
    title: "DevOps & Cloud Engineer Roadmap",
    icon: Terminal,
    description: "Transition from administration into automating infrastructure, CI/CD pipelines, and cloud scaling.",
    color: "from-purple-600/80 to-indigo-600/80",
    textColors: "text-purple-400",
    bgColors: "bg-purple-950/50 border border-purple-900/30",
    borderColors: "border-purple-900/40",
    steps: [
      { name: "Linux & Bash Scripting", desc: "Operating system internals, shell automation, users, and network protocols." },
      { name: "Infrastructure as Code & Docker", desc: "Containerizing applications, writing Dockerfiles, and managing volumes." },
      { name: "CI/CD & Git Automation", desc: "Setting up automated build pipelines using GitHub Actions or GitLab CI." },
      { name: "Azure Administration (AZ-104)", desc: "Managing Azure subscriptions, virtual networks, identity services, and storage." }
    ]
  },
  {
    title: "Cybersecurity SOC Analyst Roadmap",
    icon: Shield,
    description: "Secure enterprise infrastructure, manage incidents, configure firewalls, and perform audits.",
    color: "from-rose-600/80 to-red-600/80",
    textColors: "text-rose-400",
    bgColors: "bg-rose-950/50 border border-rose-900/30",
    borderColors: "border-rose-900/40",
    steps: [
      { name: "Computer Networking Basics", desc: "TCP/IP models, routing/switching, DNS, firewalls, and subnetting." },
      { name: "Security Principles & Threat Modeling", desc: "Cia triad, asset identification, vulnerability mapping, and risk controls." },
      { name: "SIEM & Incident Response", desc: "Monitoring traffic, analyzing log sources, and threat hunting in Azure Sentinel." },
      { name: "CompTIA Security+ Alignment", desc: "Validating operational security knowledge, cryptography, and access control models." }
    ]
  }
];

export default function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-transparent py-12 md:py-20 px-4 text-slate-200">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Tech Career <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Learning Roadmaps</span>
          </h1>
          <p className="text-xl text-slate-350 max-w-2xl mx-auto">
            Choose your specialization track. Verified student reviews and outcome data are mapped directly to these stages.
          </p>
        </div>

        <div className="space-y-12">
          {ROADMAPS.map((roadmap, idx) => {
            const IconComponent = roadmap.icon;
            return (
              <div key={idx} className="bg-slate-900/40 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${roadmap.color} p-6 md:p-8 text-white flex items-center gap-4`}>
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">{roadmap.title}</h2>
                    <p className="text-white/95 mt-1 text-sm md:text-base max-w-2xl">{roadmap.description}</p>
                  </div>
                </div>

                {/* Timeline steps */}
                <div className="p-6 md:p-8">
                  <div className="relative border-l-2 border-dashed border-white/10 ml-4 md:ml-6 pl-6 md:pl-8 space-y-8">
                    {roadmap.steps.map((step, sIdx) => (
                      <div key={sIdx} className="relative group">
                        {/* Dot indicator */}
                        <div className={`absolute -left-[35px] md:-left-[43px] top-1.5 p-1 rounded-full bg-slate-950 border-2 ${roadmap.borderColors}`}>
                          <CheckCircle2 className={`w-5 h-5 ${roadmap.textColors}`} />
                        </div>
                        
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${roadmap.bgColors} ${roadmap.textColors}`}>
                              Phase {sIdx + 1}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white mt-1">{step.name}</h3>
                          <p className="text-slate-350 text-sm mt-1 leading-relaxed max-w-3xl">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-sm text-slate-400">
                      Standard Program Track Duration: <strong className="text-white">12 - 24 Weeks</strong>
                    </span>
                    <Link
                      href="/student-reviews"
                      className={`inline-flex items-center text-sm font-semibold ${roadmap.textColors} hover:underline`}
                    >
                      See Student Reviews for this Track <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
