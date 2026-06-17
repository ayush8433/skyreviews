"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitStory } from "@/app/actions/story";

const prompts = [
  "Where were you before joining SkyStates?",
  "What changed in your confidence, skills, or mindset?",
  "What role are you in now, and what impact are you making?",
  "What advice would you share with new learners?",
];

const tips = [
  "Use specific milestones, projects, and outcomes.",
  "Share one challenge and how you overcame it.",
  "Keep your draft between 300 and 700 words.",
  "Include your portfolio link for verification.",
];

export default function SubmitPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const result = await submitStory(formData);

    if (result.success) {
      setStatus({ type: "success", message: "Story submitted successfully! It will be reviewed shortly." });
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus({ type: "error", message: result.error || "An error occurred." });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-200">
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl space-y-6">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Alumni Story Submission
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Share Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Your story can inspire the next generation of SkyStates learners to take action and believe in what is possible.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Story Prompt Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {prompts.map((prompt) => (
                    <li key={prompt} className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3">
                      {prompt}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">What Makes a Great Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {tips.map((tip) => (
                    <li key={tip} className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-3">
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white">Submit Your Story</CardTitle>
            </CardHeader>
            <CardContent>
              {status.type === "success" && (
                <div className="mb-4 rounded-xl bg-green-50 dark:bg-green-950/20 p-4 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800">
                  {status.message}
                </div>
              )}
              {status.type === "error" && (
                <div className="mb-4 rounded-xl bg-red-50 dark:bg-red-950/20 p-4 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800">
                  {status.message}
                </div>
              )}
              <form className="space-y-5" noValidate onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-slate-700 dark:text-slate-300">Full name</label>
                    <Input id="fullName" name="fullName" placeholder="Your full name" required className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="currentRole" className="text-sm font-medium text-slate-700 dark:text-slate-300">Current role</label>
                    <Input id="currentRole" name="currentRole" placeholder="e.g. Frontend Developer" required className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-slate-300">Company</label>
                    <Input id="company" name="company" placeholder="e.g. SkyTech Labs" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-slate-700 dark:text-slate-300">Location</label>
                    <Input id="location" name="location" placeholder="City, Country" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium text-slate-700 dark:text-slate-300">Portfolio URL</label>
                    <Input id="linkedin" name="linkedin" type="url" placeholder="https://" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="headline" className="text-sm font-medium text-slate-700 dark:text-slate-300">Story headline</label>
                  <Input id="headline" name="headline" placeholder="A title for your journey" required className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="story" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your story</label>
                  <Textarea
                    id="story"
                    name="story"
                    className="min-h-48 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                    placeholder="Tell us about your journey: where you started, what changed, and where you are now."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="consent" className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <input id="consent" name="consent" type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300 dark:border-slate-700" required />
                    I confirm this story is mine and I consent to SkyStates editing for clarity before publication.
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Prefer a direct route? Send your draft to support@skyreviews.us.
                  </p>
                  <Button type="submit" size="lg" className="bg-blue-600 text-white hover:bg-blue-700 rounded-xl" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Story"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 rounded-2xl border border-blue-200 dark:border-slate-850 bg-blue-50/50 dark:bg-slate-900/50 p-6 text-sm text-blue-900 dark:text-blue-300">
            Looking for inspiration first? Browse featured journeys on the <Link href="/#featured-stories" className="font-semibold underline underline-offset-4">home page stories section</Link>.
          </div>
        </div>
      </section>
    </div>
  );
}
