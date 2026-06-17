import Link from "next/link";
import type { StudentCertification } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteCertification } from "@/lib/admin-cert-actions";
import { Award, Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react";

export default async function AdminCertificationsPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const params = await searchParams;
  const certs = await prisma.studentCertification.findMany({
    orderBy: { createdAt: "desc" },
  });

  const CERT_COLORS: Record<string, string> = {
    "DP-900": "bg-blue-500/15 text-blue-300 border-blue-500/20",
    "AZ-900": "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
    "AZ-104": "bg-violet-500/15 text-violet-300 border-violet-500/20",
    "SC-900": "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <Badge className="bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/15">
              Certifications
            </Badge>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <Award className="w-7 h-7 text-emerald-400" />
              Verified Student Certifications
            </h1>
            <p className="text-slate-300 max-w-2xl">
              Manage Microsoft certification records for Sky States graduates. Published certificates appear on the public gallery page with structured schema markup.
            </p>
          </div>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
            <Link href="/admin/certifications/new">
              <Plus className="w-4 h-4 mr-2" /> Add Certificate
            </Link>
          </Button>
        </div>

        {params.message && (
          <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
            ✓ {params.message}
          </div>
        )}
        {params.error && (
          <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
            ✗ {params.error}
          </div>
        )}
      </section>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Certificates", value: certs.length },
          { label: "Published", value: certs.filter((c) => c.isPublished).length },
          { label: "Drafts", value: certs.filter((c) => !c.isPublished).length },
          { label: "DP-900 Holders", value: certs.filter((c) => c.certCode === "DP-900").length },
        ].map((stat) => (
          <Card key={stat.label} className="border-white/10 bg-slate-900/70 text-white">
            <CardContent className="pt-5">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certificates Table */}
      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">All Certificates ({certs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {certs.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Award className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-slate-400">No certificates added yet.</p>
              <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
                <Link href="/admin/certifications/new">Add First Certificate</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {certs.map((cert) => (
                <div
                  key={cert.id}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div className="flex items-start gap-4">
                    {cert.certificateImageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={cert.certificateImageUrl}
                        alt={`${cert.studentName} certificate`}
                        className="w-16 h-12 object-cover rounded-lg border border-white/10 shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-12 bg-slate-800 rounded-lg border border-white/10 shrink-0 flex items-center justify-center">
                        <Award className="w-6 h-6 text-slate-600" />
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-semibold text-white">{cert.studentName}</p>
                        <span
                          className={`text-xs font-bold border px-2 py-0.5 rounded-full ${
                            CERT_COLORS[cert.certCode] || "bg-slate-500/15 text-slate-300 border-slate-500/20"
                          }`}
                        >
                          {cert.certCode}
                        </span>
                        {cert.isPublished ? (
                          <span className="flex items-center gap-1 text-xs text-emerald-400">
                            <Eye className="w-3 h-3" /> Published
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <EyeOff className="w-3 h-3" /> Draft
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-400 mt-0.5">
                        {cert.program} · Issued: {cert.issueDate}
                      </p>
                      {cert.testimonial && (
                        <p className="text-xs text-slate-500 mt-1 italic line-clamp-1">
                          &ldquo;{cert.testimonial}&rdquo;
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 shrink-0">
                    <Button asChild variant="outline" size="sm" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                      <Link href={`/admin/certifications/${cert.id}`}>
                        <Edit2 className="w-3.5 h-3.5 mr-1.5" /> Edit
                      </Link>
                    </Button>
                    <form action={deleteCertification}>
                      <input type="hidden" name="certId" value={cert.id} />
                      <Button
                        type="submit"
                        variant="outline"
                        size="sm"
                        className="border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500 hover:text-white"
                        onClick={(e) => {
                          if (!confirm(`Delete certificate for ${cert.studentName}?`)) e.preventDefault();
                        }}
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1.5" /> Delete
                      </Button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
