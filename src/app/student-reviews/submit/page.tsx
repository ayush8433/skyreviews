"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function ReviewSubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [ratings, setRatings] = useState({
    curriculum: 5,
    instructor: 5,
    career: 5,
    value: 5,
    support: 5,
  });

  const handleRatingChange = (factor: keyof typeof ratings, val: number) => {
    setRatings((prev) => ({ ...prev, [factor]: val }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4">
        <Card className="max-w-md w-full bg-white shadow-lg rounded-2xl border border-slate-200 p-8 text-center space-y-6">
          <div className="mx-auto inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <CardHeader className="p-0">
            <CardTitle className="text-2xl font-extrabold text-slate-800">Review Submitted!</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Thank you for sharing your experience. Our editors will verify the uploaded documents and apply the corresponding trust badge (Verified Graduate or Verified Enrolled) within 3-5 business days.
            </p>
            <div className="pt-2">
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/reviews/sky-states">Back to Sky States Profile</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-950 text-white py-16 px-4 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <Badge className="bg-white/10 text-blue-200 border border-white/15 px-3 py-1 text-xs font-semibold">
            🛡️ Review Authenticity System
          </Badge>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Submit Your Student Review</h1>
          <p className="text-blue-100 text-sm md:text-base leading-relaxed">
            Your review helps other students make informed career upskilling choices. Submit verification details to claim your trust badge.
          </p>
        </div>
      </section>

      {/* Form Area */}
      <section className="py-12 px-4 max-w-3xl mx-auto">
        <Card className="bg-white shadow-xs rounded-2xl border border-slate-200">
          <CardContent className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dropdown details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="program" className="text-sm font-semibold text-slate-700 block">Select Program</label>
                  <select
                    id="program"
                    name="program"
                    required
                    className="h-10 w-full rounded-lg border border-slate-300 bg-transparent px-3 text-sm outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Choose your path</option>
                    <option value="data-science">Data Science &amp; AI</option>
                    <option value="cyber-security">Cyber Security &amp; Ethical Hacking</option>
                    <option value="devops">DevOps &amp; Cloud Systems</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="batch" className="text-sm font-semibold text-slate-700 block">Batch / Cohort</label>
                  <Input id="batch" name="batch" placeholder="e.g. October 2024" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="status" className="text-sm font-semibold text-slate-700 block">Enrollment Status</label>
                  <select
                    id="status"
                    name="status"
                    required
                    className="h-10 w-full rounded-lg border border-slate-300 bg-transparent px-3 text-sm outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select status</option>
                    <option value="enrolled">Currently Enrolled (Active)</option>
                    <option value="completed">Graduated (Completed)</option>
                    <option value="dropped">Withdrew / Dropped</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="recommend" className="text-sm font-semibold text-slate-700 block">Would you recommend?</label>
                  <select
                    id="recommend"
                    name="recommend"
                    required
                    className="h-10 w-full rounded-lg border border-slate-300 bg-transparent px-3 text-sm outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select recommendation</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="maybe">Maybe</option>
                  </select>
                </div>
              </div>

              {/* Rating sliders */}
              <div className="border-t border-slate-100 pt-6 space-y-4">
                <h3 className="text-base font-bold text-slate-800 flex items-center gap-1.5">
                  <Sparkles className="w-5 h-5 text-blue-600" /> Individual Rating Factors (1-5)
                </h3>
                
                {[
                  { key: "curriculum", label: "Curriculum Quality" },
                  { key: "instructor", label: "Instructor & Support Quality" },
                  { key: "career", label: "Career & Placement Guidance" },
                  { key: "value", label: "Value for Money" },
                  { key: "support", label: "Response & Administration Speed" },
                ].map((factor) => (
                  <div key={factor.key} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-600">
                      <span>{factor.label}</span>
                      <span className="font-bold text-blue-600">{ratings[factor.key as keyof typeof ratings]} Stars</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={ratings[factor.key as keyof typeof ratings]}
                      onChange={(e) => handleRatingChange(factor.key as keyof typeof ratings, Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                ))}
              </div>

              {/* Textareas */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                <div className="space-y-2">
                  <label htmlFor="liked" className="text-sm font-semibold text-slate-700 block">What you liked (Pros)</label>
                  <Textarea id="liked" name="liked" placeholder="What parts of the curriculum or training stood out?" required className="min-h-24" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="better" className="text-sm font-semibold text-slate-700 block">What could be better (Cons)</label>
                  <Textarea id="better" name="better" placeholder="Factual recommendations or issues you faced." required className="min-h-24" />
                </div>
              </div>

              {/* Upload & Consent */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 block">Upload Verification Document (Optional)</label>
                  <p className="text-xs text-slate-400">Upload a screenshot of enrollment receipt or completion credentials to claim a verified trust badge.</p>
                  <Input type="file" className="text-xs text-slate-500 cursor-pointer border-dashed border-2 border-slate-300 rounded-lg p-2.5" />
                </div>

                <div className="space-y-3 bg-slate-50 border border-slate-100 p-4 rounded-xl text-xs text-slate-600">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-blue-600 shrink-0" />
                    <span>I confirm I did not receive incentives (gifts, tuition adjustments, vouchers) for submitting this review.</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-blue-600 shrink-0" />
                    <span>I consent to publishing this review with the verified badge status determined by editors.</span>
                  </label>
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg" disabled={isSubmitting}>
                  {isSubmitting ? "Uploading details..." : "Submit Verified Review"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
