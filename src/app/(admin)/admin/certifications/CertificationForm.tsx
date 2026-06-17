"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveCertification } from "@/lib/admin-cert-actions";

type CertRecord = {
  id: string;
  studentName: string;
  program: string;
  certCode: string;
  certName: string;
  issueDate: string;
  certificateImageUrl: string | null;
  linkedinUrl: string | null;
  testimonial: string | null;
  isPublished: boolean;
};

const CERT_OPTIONS = [
  { code: "DP-900", name: "Microsoft Azure Data Fundamentals" },
  { code: "AZ-900", name: "Microsoft Azure Fundamentals" },
  { code: "AZ-104", name: "Microsoft Azure Administrator" },
  { code: "SC-900", name: "Microsoft Security, Compliance, and Identity Fundamentals" },
  { code: "AI-900", name: "Microsoft Azure AI Fundamentals" },
];

const PROGRAM_OPTIONS = [
  "Data Science & Artificial Intelligence",
  "Cyber Security & Ethical Hacking",
  "DevOps & Cloud Computing",
];

export default function CertificationForm({ cert }: { cert?: CertRecord | null }) {
  return (
    <form action={saveCertification} encType="multipart/form-data" className="space-y-6">
      <input type="hidden" name="certId" value={cert?.id ?? ""} />

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">Student Information</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-5 lg:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="studentName">
              Student Name <span className="text-rose-400">*</span>
            </label>
            <Input
              id="studentName"
              name="studentName"
              defaultValue={cert?.studentName ?? ""}
              placeholder="e.g. Priya S."
              required
              className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="program">
              Program Completed <span className="text-rose-400">*</span>
            </label>
            <select
              id="program"
              name="program"
              defaultValue={cert?.program ?? ""}
              required
              className="w-full rounded-md border border-white/10 bg-slate-950/70 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a program…</option>
              {PROGRAM_OPTIONS.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="certCode">
              Certification Code <span className="text-rose-400">*</span>
            </label>
            <select
              id="certCode"
              name="certCode"
              defaultValue={cert?.certCode ?? "DP-900"}
              required
              onChange={(e) => {
                const selected = CERT_OPTIONS.find((c) => c.code === e.target.value);
                const nameInput = document.getElementById("certName") as HTMLInputElement;
                if (nameInput && selected) nameInput.value = selected.name;
              }}
              className="w-full rounded-md border border-white/10 bg-slate-950/70 text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {CERT_OPTIONS.map((c) => (
                <option key={c.code} value={c.code}>{c.code}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="certName">
              Certification Full Name <span className="text-rose-400">*</span>
            </label>
            <Input
              id="certName"
              name="certName"
              defaultValue={cert?.certName ?? "Microsoft Azure Data Fundamentals"}
              placeholder="e.g. Microsoft Azure Data Fundamentals"
              required
              className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="issueDate">
              Issue Date <span className="text-rose-400">*</span>
            </label>
            <Input
              id="issueDate"
              name="issueDate"
              type="date"
              defaultValue={cert?.issueDate ?? ""}
              required
              className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="linkedinUrl">
              LinkedIn Profile URL
            </label>
            <Input
              id="linkedinUrl"
              name="linkedinUrl"
              defaultValue={cert?.linkedinUrl ?? ""}
              placeholder="https://linkedin.com/in/..."
              className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">Certificate Image & Quote</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200" htmlFor="certificateImageFile">
                Upload Certificate Screenshot
              </label>
              <Input
                id="certificateImageFile"
                name="certificateImageFile"
                type="file"
                accept="image/*"
                className="border-white/10 bg-slate-950/70 text-white"
              />
              <p className="text-xs text-slate-500">Upload a screenshot of the Microsoft certificate PDF</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-200" htmlFor="certificateImageUrl">
                Or Enter Certificate Image URL
              </label>
              <Input
                id="certificateImageUrl"
                name="certificateImageUrl"
                defaultValue={cert?.certificateImageUrl ?? ""}
                placeholder="https://... or /uploads/..."
                className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
              />
              {cert?.certificateImageUrl && (
                <div className="mt-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.certificateImageUrl}
                    alt="Current certificate"
                    className="h-20 rounded-lg border border-white/10 object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="testimonial">
              Student Quote / Testimonial
            </label>
            <Textarea
              id="testimonial"
              name="testimonial"
              defaultValue={cert?.testimonial ?? ""}
              placeholder="e.g. 'The DP-900 prep sessions were structured exactly like the real exam — I passed on my first attempt.'"
              rows={3}
              className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="isPublished"
              defaultChecked={cert?.isPublished ?? false}
              className="h-4 w-4 rounded border-white/20 bg-slate-950/70"
            />
            <span className="text-sm text-slate-200">
              Publish to public gallery (<code className="text-slate-400 text-xs">/certifications</code>)
            </span>
          </label>
        </CardContent>
      </Card>

      <div className="flex items-center justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950"
          onClick={() => history.back()}
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-white text-slate-950 hover:bg-slate-100">
          {cert ? "Update Certificate" : "Save Certificate"}
        </Button>
      </div>
    </form>
  );
}
