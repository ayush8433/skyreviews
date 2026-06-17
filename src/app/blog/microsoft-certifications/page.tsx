import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Briefcase,
  Cpu,
  Shield,
  Activity,
  Layers,
  ArrowRight,
  Sparkles,
  BookOpen,
  Award,
  TrendingUp,
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "How Microsoft Certifications Accelerate Career Growth | Sky States",
  description:
    "Discover how Microsoft certifications help professionals build successful careers in Cloud Computing, Artificial Intelligence, Cybersecurity, and DevOps. Learn with Sky States.",
  keywords: [
    "Microsoft Certifications",
    "Azure Certification",
    "Cloud Computing Careers",
    "AI Certification",
    "Cybersecurity Training",
    "Azure Fundamentals",
    "Microsoft Azure",
    "Cloud Security",
    "Career Growth in Technology",
    "Sky States"
  ],
};

export default function MicrosoftCertificationsBlog() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-200">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white py-20 lg:py-32">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-cyan-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-8">
          <div className="flex flex-wrap gap-2 items-center">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-none px-3 py-1 text-xs uppercase tracking-wider font-semibold">
              Career Insights
            </Badge>
            <Badge className="bg-slate-800 text-slate-300 border-slate-700 px-3 py-1 text-xs">
              Microsoft Azure
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white">
            How Microsoft Certifications Accelerate Career Growth in Cloud, AI, and Cybersecurity
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Industry-recognized Microsoft certifications help professionals validate skills, increase employability, and stay competitive in today&apos;s rapidly evolving technology landscape.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 pt-4 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>June 7, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" />
              <span>Sky States Editorial Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-16 lg:py-24 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left">
              The modern enterprise landscape is undergoing a massive structural shift. Cloud computing, artificial intelligence, cybersecurity, and DevOps have transitioned from forward-looking initiatives to core operational requirements. As companies migrate infrastructure to hybrid ecosystems, harness generative AI, and defend against increasingly sophisticated digital threats, the talent required to support these architectures has become highly sought after.
            </p>
            <p>
              However, the talent market is saturated with candidates who claim expertise but lack verified validation. In this competitive landscape, employers and enterprise recruiters increasingly prefer candidates with verified technical credentials. Standard resumes are no longer enough; decision-makers need objective proof of an engineer&apos;s capabilities before trusting them with mission-critical systems.
            </p>
            <p>
              This is where <strong>Microsoft Certifications</strong> come in. As one of the most respected validation systems in the technology industry worldwide, Microsoft&apos;s certification ecosystem offers structured learning pathways that align precisely with real-world enterprise requirements, helping both aspiring and experienced tech professionals build credibility.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Why Microsoft Certifications Matter (Alternating Layout) */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
        <div className="container mx-auto max-w-6xl space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Microsoft Certifications Matter
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              An investment in certification is an investment in your career currency. Here is how Microsoft credentials create professional advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm bg-white dark:bg-slate-900 hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Global Industry Recognition</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Microsoft Azure commands a massive share of the enterprise market. Holding a Microsoft credential means your skills are recognized by top organizations worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white dark:bg-slate-900 hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Real-World Skill Validation</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Microsoft exams test scenario-based practical problems, proving you can execute actual engineering work and configure live environments under pressure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white dark:bg-slate-900 hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Improved Job Opportunities</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Recruiters prioritize certified candidates in automated applicant tracking systems (ATS), putting your profile on the fast-track to hiring manager reviews.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white dark:bg-slate-900 hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Better Salary Potential</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Studies show certified IT specialists command higher base salaries and enjoy greater leverage during compensation negotiations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white dark:bg-slate-900 hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Increased Professional Credibility</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Having certifications listed alongside your portfolio tells clients and team leaders that you hold yourself to rigorous technical standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm bg-white dark:bg-slate-900 hover:shadow-md transition-shadow duration-300 rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enterprise Alignment</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Microsoft Azure certifications directly map to the architecture, compliance structures, and deployment pipelines used by modern Fortune 500 companies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Building Expertise in High-Demand Domains */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Building Expertise in High-Demand Domains
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Microsoft offers structured learning paths tailored to specific technical specializations. Find your track below.
            </p>
          </div>

          {/* Domain 1: Cloud Computing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>Domain Focus</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Cloud Computing</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Cloud architecture forms the foundation of modern infrastructure. Navigating Microsoft Azure effectively requires understanding cloud models, resource governance, and scale-out strategies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <strong>Microsoft Azure Fundamentals (AZ-900):</strong> Core cloud services, storage, and networking basics.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <strong>Azure Administrator (AZ-104):</strong> Managing compute, storage, virtual networks, and identities.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                  <strong>Azure Solutions Architect (AZ-305):</strong> Designing infrastructure, security, and business continuity.
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="h-4 w-1/3 bg-blue-200 dark:bg-blue-900 rounded-full" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Featured Career Path</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Azure Engineers design scale-out computing nodes and manage high-availability clusters. Validating your skills in this domain positions you perfectly for Infrastructure Engineer and Systems Administrator roles.
              </p>
              <div className="h-32 w-full bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-dashed border-blue-300/30">
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Azure Infrastructure Blueprint</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Domain 2: AI & Data Science (Alternating Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 order-last lg:order-first bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="h-4 w-1/3 bg-cyan-200 dark:bg-cyan-900 rounded-full" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Practical AI Implementation</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Learn to integrate pre-built models and cognitive APIs. Validate your ability to build conversational agents, computer vision architectures, and natural language interfaces on the Azure platform.
              </p>
              <div className="h-32 w-full bg-linear-to-r from-cyan-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center border border-dashed border-cyan-300/30">
                <span className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Cognitive Services Node</span>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-sm font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Domain Focus</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Artificial Intelligence & Data Science</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Generative AI and automated data pipelines are transforming businesses. Developing certifications in this track demonstrates your capacity to extract meaningful insights and deploy scalable intelligence.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                  <strong>Azure AI Fundamentals (AI-900):</strong> Core concepts of ML and cognitive services workloads.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                  <strong>Azure AI Engineer (AI-102):</strong> Building and deploying computer vision and language translation.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                  <strong>AI-Powered Business Solutions:</strong> Leveraging pre-built models to automate legacy flows.
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Domain 3: Cybersecurity */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
                <Shield className="w-4 h-4" />
                <span>Domain Focus</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Cybersecurity</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                As cyber threats grow in scale and severity, organizations need professionals who understand cloud governance, identity federation, and system hardening.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                  <strong>Microsoft Security Certifications (SC Series):</strong> From fundamentals (SC-900) to advanced operations.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                  <strong>Identity & Access Management:</strong> Configuring Azure Active Directory / Microsoft Entra ID securely.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" />
                  <strong>Threat Detection & Cloud Security:</strong> Setting up Microsoft Defender and Sentinel dashboards.
                </li>
              </ul>
            </div>
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="h-4 w-1/3 bg-indigo-200 dark:bg-indigo-900 rounded-full" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Security Operation Centers (SOC)</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Security Engineers analyze raw audit logs and resolve security incidents. With Microsoft security credentials, you prove you can manage zero-trust architectures and enforce enterprise compliance policies.
              </p>
              <div className="h-32 w-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-dashed border-indigo-300/30">
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Zero-Trust Network Perimeter</span>
              </div>
            </div>
          </div>

          <hr className="border-slate-100 dark:border-slate-800" />

          {/* Domain 4: DevOps & Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 order-last lg:order-first bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4">
              <div className="h-4 w-1/3 bg-purple-200 dark:bg-purple-900 rounded-full" />
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">Automation Pipelines</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Configure build agents, manage containerized environments, and program cloud state models. This certification validates you can run robust systems with minimal manual overhead.
              </p>
              <div className="h-32 w-full bg-linear-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center border border-dashed border-purple-300/30">
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">CI/CD Release Orchestration</span>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold">
                <Layers className="w-4 h-4" />
                <span>Domain Focus</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">DevOps & Infrastructure</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                DevOps bridges software development and system administration. Continuous Integration (CI) and Infrastructure as Code (IaC) are essential requirements for modern tech teams.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                  <strong>Azure DevOps (AZ-400):</strong> Designing instrumentation, site reliability, and compliance.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                  <strong>CI/CD Pipelines:</strong> Automated testing, build triggers, and release stages.
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                  <strong>Infrastructure Automation:</strong> Infrastructure as Code (IaC) using Terraform / ARM templates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Staying Current with Technology Evolution */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Continuous Adaptation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Staying Current with Technology Evolution
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            In technology, skills deprecate quickly. A strategy that worked last year may be suboptimal today due to new automation and cloud capabilities. Certification pathways help structure your learning so you don&apos;t fall behind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Keeping Pace with AI</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                As LLMs and agents integrate into enterprise processes, AI certifications ensure you understand model tuning, vector databases, and safe context management principles.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">Cloud Security & Compliance</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                As cloud networks grow complex, keeping security policies updated prevents costly data exposure incidents and ensures regulatory alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industry Trust and Employer Confidence */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Industry Trust and Employer Confidence
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Hiring managers use credentials as an objective filter. For an employer, hiring a certified engineer minimizes risk and shortens onboarding timelines because the baseline engineering competency is already validated.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-left">
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="text-blue-600 font-bold text-lg">01</div>
              <h4 className="font-bold text-slate-900 dark:text-white">Assess Competency</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Enables HR teams to immediately filter out candidates without real cloud or AI engineering experience.
              </p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="text-blue-600 font-bold text-lg">02</div>
              <h4 className="font-bold text-slate-900 dark:text-white">Reduce Hiring Risk</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Guarantees that new hires can log into Azure, build dashboards, and audit security metrics safely from day one.
              </p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-3">
              <div className="text-blue-600 font-bold text-lg">03</div>
              <h4 className="font-bold text-slate-900 dark:text-white">Identify Candidates Faster</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Speeds up the recruitment lifecycle by focusing resources on technical professionals who have already cleared rigorous standard testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. The Sky States Learning Approach */}
      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden rounded-t-[3rem]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge className="bg-blue-600 text-white hover:bg-blue-600 border-none px-3 py-1 text-xs">
              The Sky States Methodology
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              Practical Implementation, Not Just Exam Prep
            </h2>
            <p className="text-slate-300">
              Sky States is a career-focused technology learning platform that helps learners gain practical experience. We believe passing the exam is only half the battle; being ready to run production code is what gets you hired.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-3">
              <h4 className="font-bold text-white">Instructor-Led Training</h4>
              <p className="text-sm text-slate-300">
                Weekend sessions conducted by tech leaders who build products at scale every day.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-3">
              <h4 className="font-bold text-white">Real-World Projects</h4>
              <p className="text-sm text-slate-300">
                Build end-to-end applications and ETL pipelines using live, production-grade datasets.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-3">
              <h4 className="font-bold text-white">Hands-On Labs</h4>
              <p className="text-sm text-slate-300">
                Log into live cloud platforms and configure virtual firewalls, clusters, and database schemas.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-3">
              <h4 className="font-bold text-white">Interview Preparation</h4>
              <p className="text-sm text-slate-300">
                Undergo rigorous technical mock interviews and receive actionable feedback on your code and behavior.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-3">
              <h4 className="font-bold text-white">Industry Mentorship</h4>
              <p className="text-sm text-slate-300">
                Receive direct feedback from practicing professionals to polish your design patterns.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 space-y-3">
              <h4 className="font-bold text-white">Portfolio Development</h4>
              <p className="text-sm text-slate-300">
                Document and publish your codebase on GitHub so you have proof of expertise to show recruiters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Benefits for Students and Professionals (Visual Icon Grid) */}
      <section className="py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-5xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Your Professional Upgrade Path
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Completing a certified training path translates to direct professional advantages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                ✓
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">Industry-recognized credentials</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                ✓
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">Enhanced career opportunities</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                ✓
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">Practical cloud experience</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                ✓
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">AI and cybersecurity readiness</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                ✓
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">Higher earning potential</p>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                ✓
              </div>
              <p className="font-semibold text-slate-900 dark:text-white text-sm">Stronger professional credibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Conclusion & CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-blue-950 to-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-10 left-10 w-48 h-48 bg-blue-600 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyan-600 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            Unlock the Next Phase of Your Career
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Microsoft certifications offer a structured and respected path for career transitions into cloud computing, AI engineering, cybersecurity, and DevOps. Paired with Sky States&apos; project-first methodology, you get the tools to actually implement your knowledge.
          </p>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 max-w-3xl mx-auto space-y-6">
            <p className="text-xl font-medium text-white">
              &ldquo;Ready to build your future in Cloud, AI, or Cybersecurity? Explore Sky States training programs and start developing the skills that today&apos;s employers demand.&rdquo;
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-8 py-6 shadow-lg shadow-blue-500/20">
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Explore Sky States Programs</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
