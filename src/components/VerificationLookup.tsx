"use client";

import React, { useState } from "react";
import Link from "next/link";
import { searchCertifications } from "@/app/actions/verify";
import { Search, Award, CheckCircle2, ShieldAlert, ExternalLink, Calendar } from "lucide-react";

interface VerificationItem {
  id: string;
  studentName: string;
  program: string;
  certCode: string;
  certName: string;
  issueDate: string;
  certificateImageUrl: string | null;
  linkedinUrl: string | null;
  testimonial: string | null;
}

export default function VerificationLookup() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<VerificationItem[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || query.trim().length < 2) return;

    setLoading(true);
    try {
      const res = await searchCertifications(query);
      if (res.success && res.data) {
        setResults(res.data as VerificationItem[]);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  // Generate dynamic JSON-LD schemas for the matching results
  const dynamicSchemas = results.map((cert) => ({
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
    "description": `Independently verified: ${cert.studentName} completed the Sky States training program in ${cert.program} and earned the Microsoft ${cert.certName} (${cert.certCode}) credential.`,
  }));

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
      {dynamicSchemas.map((schema, idx) => (
        <script
          key={`dynamic-schema-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600 animate-pulse" />
          Live Student Credential Verification Ledger
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Perform a real-time lookup in the SkyReviews secure verification ledger database to verify student graduation and Microsoft certifications.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by student name (e.g. Shamim)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm bg-slate-50/50"
          />
          <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
        </div>
        <button
          type="submit"
          disabled={loading || query.trim().length < 2}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-100 disabled:text-slate-400 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors shrink-0"
        >
          {loading ? "Searching..." : "Verify"}
        </button>
      </form>

      {/* Results Display */}
      {searched && (
        <div className="space-y-4 pt-2">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map((cert) => (
                <div
                  key={cert.id}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 hover:bg-slate-50 transition-colors p-4 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{cert.studentName}</h4>
                      <p className="text-xxs text-slate-500">{cert.program}</p>
                    </div>
                    <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <p><strong>Certification:</strong> {cert.certName} ({cert.certCode})</p>
                    <p className="flex items-center gap-1.5 text-xxs text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      Issued: {cert.issueDate}
                    </p>
                  </div>

                  {cert.testimonial && (
                    <blockquote className="border-l-2 border-blue-200 pl-2.5 italic text-xxs text-slate-500 leading-relaxed bg-white p-2 rounded-r-lg">
                      &ldquo;{cert.testimonial}&rdquo;
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-100 rounded-xl p-4 text-xs text-amber-900 leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0" />
              <span>No certified student found matching <strong>&ldquo;{query}&rdquo;</strong>. Ensure spelling is correct, or browse all certified graduates on our main <Link href="/certifications" className="underline font-bold">Certifications Page</Link>.</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
