import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import type { StudentCertification } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import {
  ArrowLeft, Award, BookOpen, ExternalLink, Calendar,
  CheckSquare, CheckCircle2, Shield,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Microsoft Certified Graduates | Sky States Certification Gallery | SkyReviews",
  description:
    "Verified Microsoft certification gallery for Sky States graduates. Browse DP-900 and AZ-900 holders, with certificate screenshots and student testimonials.",
};

const CERTIFICATIONS_GUIDE = [
  {
    code: "DP-900",
    name: "Microsoft Azure Data Fundamentals",
    description: "Designed for beginners to validate knowledge of core database concepts and Azure data cloud operations.",
    color: "border-blue-900/40 hover:border-blue-700/60 bg-blue-950/20 text-slate-200",
    badgeColor: "bg-blue-600 text-white",
    requirements: [
      "Describe core data concepts (relational, non-relational, analytics workloads).",
      "Describe relational data architectures on Azure (Azure SQL Database, Synapse Link).",
      "Describe non-relational data concepts (Azure Cosmos DB, Blob Storage).",
      "Describe analytics workloads on Azure (Synapse Analytics, Databricks, Power BI).",
    ],
    resources: [
      { label: "Microsoft Learn Learning Paths", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-data-fundamentals/" },
      { label: "Free Practice Exam (Microsoft Assessment)", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/dp-900/practice/assessment" },
    ],
  },
  {
    code: "AZ-900",
    name: "Microsoft Azure Fundamentals",
    description: "Validates foundational level knowledge of cloud services, Azure architecture, security governance, and pricing.",
    color: "border-indigo-900/40 hover:border-indigo-700/60 bg-indigo-950/20 text-slate-200",
    badgeColor: "bg-indigo-600 text-white",
    requirements: [
      "Describe cloud concepts (highly available, scalable, resilient architectures).",
      "Describe Azure architecture and services (Resource Groups, VMs, VPNs, Subnets).",
      "Describe Azure management and governance (Azure Portal, Policy, Cost Management).",
      "Describe security architectures and identity protocols (Entra ID, Key Vault).",
    ],
    resources: [
      { label: "Microsoft Learn AZ-900 Paths", url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" },
      { label: "Free Practice Exam (AZ-900 Assessment)", url: "https://learn.microsoft.com/en-us/credentials/certifications/exams/az-900/practice/assessment" },
    ],
  },
];

const CERT_BADGE_COLORS: Record<string, string> = {
  "DP-900": "bg-blue-600 text-white",
  "AZ-900": "bg-indigo-600 text-white",
  "AZ-104": "bg-violet-600 text-white",
  "SC-900": "bg-cyan-600 text-white",
  "AI-900": "bg-emerald-600 text-white",
};

export default async function CertificationsPage() {
  const publishedCerts = await prisma.studentCertification.findMany({
    where: { isPublished: true },
    orderBy: { issueDate: "desc" },
  });

  // Build Certification schema for each graduate
  const certificationSchemas = publishedCerts.map((cert: StudentCertification, i: number) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    "name": cert.certName,
    "credentialCategory": "certification",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Microsoft",
      "url": "https://microsoft.com",
    },
    "validFor": "P2Y",
    "dateCreated": cert.issueDate,
    "about": {
      "@type": "Person",
      "name": cert.studentName,
    },
    "competencyRequired": cert.program,
    "description": `${cert.studentName} earned the ${cert.certName} (${cert.certCode}) certification through the Sky States ${cert.program} program.`,
  }));

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sky States Microsoft Certified Graduates",
    "description": `${publishedCerts.length} verified Microsoft-certified graduates of the Sky States training programs`,
    "numberOfItems": publishedCerts.length,
    "url": "https://skyreviews.us/certifications",
    "itemListElement": publishedCerts.map((cert, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${cert.studentName} — ${cert.certCode}`,
    })),
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-200">
      {certificationSchemas.map((schema: Record<string, unknown>, i: number) => (
        <Script
          key={`cert-schema-${i}`}
          id={`cert-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Script
        id="cert-collection-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
            <Shield className="w-3.5 h-3.5" />
            Verified Certifications
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
            Microsoft{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Certified Graduates
            </span>
          </h1>
          <p className="text-xl text-slate-350 max-w-2xl mx-auto">
            Verified Microsoft certifications earned by Sky States graduates through structured bootcamp preparation.
          </p>
        </div>

        {/* Tabs: Gallery then Guides */}
        {/* ── VERIFIED GRADUATES GALLERY ── */}
        {publishedCerts.length > 0 ? (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Verified Graduate Gallery
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  {publishedCerts.length} certified graduates · All certificates independently verified
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                {publishedCerts.length} Verified
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {publishedCerts.map((cert: StudentCertification) => (
                <div
                  key={cert.id}
                  className="group bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
                >
                  {/* Certificate Image */}
                  {cert.certificateImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <div className="relative h-44 overflow-hidden bg-slate-950">
                      <img
                        src={cert.certificateImageUrl}
                        alt={`${cert.studentName} ${cert.certCode} certificate`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full shadow-sm ${CERT_BADGE_COLORS[cert.certCode] ?? "bg-slate-700 text-white"}`}>
                          {cert.certCode}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <div className="flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-sm text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-44 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <Award className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                        <span className={`text-sm font-bold px-3 py-1 rounded-full ${CERT_BADGE_COLORS[cert.certCode] ?? "bg-slate-700 text-white"}`}>
                          {cert.certCode}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-white text-base leading-tight">
                          {cert.studentName}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">{cert.program}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {cert.certName} · Issued{" "}
                        {new Date(cert.issueDate).toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    {cert.testimonial && (
                      <blockquote className="border-l-2 border-blue-500 pl-3 italic text-xs text-slate-350 leading-relaxed">
                        &ldquo;{cert.testimonial}&rdquo;
                      </blockquote>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <section className="mb-20">
            <div className="bg-slate-900/40 border border-white/10 rounded-2xl p-12 text-center">
              <Award className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Gallery Coming Soon</h2>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                Verified student certificates will appear here as they are submitted and approved.
              </p>
            </div>
          </section>
        )}

        {/* Study Guides */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Certification Preparation Guides</h2>
            <p className="text-slate-400 text-sm mt-1">
              Practical roadmap checkpoints and study checklists for key Microsoft cloud exams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {CERTIFICATIONS_GUIDE.map((cert) => (
              <div key={cert.code} className={`flex flex-col justify-between border rounded-2xl p-6 md:p-8 transition-all duration-300 shadow-md ${cert.color}`}>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${cert.badgeColor}`}>
                      {cert.code}
                    </span>
                    <Award className="w-6 h-6 text-slate-400" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-slate-350 text-sm mb-6 leading-relaxed">{cert.description}</p>

                  <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-emerald-450" /> Core Skill Domains
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {cert.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-350 flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-500 font-bold mt-0.5">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-white/10 pt-6 mt-auto">
                  <h5 className="text-xs font-bold text-slate-200 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-400" /> Reference Resources
                  </h5>
                  <div className="space-y-2">
                    {cert.resources.map((res, resIdx) => (
                      <a
                        key={resIdx}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-400 hover:text-blue-300 hover:underline flex items-center gap-1.5"
                      >
                        {res.label} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Study tips */}
          <div className="bg-gradient-to-br from-indigo-950 to-slate-950 border border-white/10 text-white rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-indigo-455" /> Professional Exam Study Tips
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                {[
                  { n: "01", title: "Use Interactive Labs", body: "Theory alone isn't enough. Go into Azure portal, set up sandbox storage containers, and practice querying real databases." },
                  { n: "02", title: "Review Practice Tests", body: "Microsoft's practice assessments are structured similarly to actual questions. Focus on why specific answers are correct." },
                  { n: "03", title: "Align with Mock Interviews", body: "During placement interviews, practice talking about cloud configurations aloud to demonstrate core technical communication skills." },
                ].map((tip) => (
                  <div key={tip.n} className="space-y-2">
                    <span className="text-2xl font-black text-indigo-400">{tip.n}</span>
                    <h4 className="font-bold text-lg">{tip.title}</h4>
                    <p className="text-xs text-indigo-200/90 leading-relaxed">{tip.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
