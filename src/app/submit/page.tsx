import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  "Include your LinkedIn/profile link for verification.",
];

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 px-4 py-20 md:py-24">
        <div className="absolute right-10 top-8 h-36 w-36 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-8 left-10 h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">Alumni Story Submission</Badge>
          <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">Share Your Career Journey</h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Your story can inspire the next generation of SkyStates learners to take action and believe in what is possible.
          </p>
        </div>
      </section>

      <section className="bg-linear-to-b from-slate-50 to-white px-4 py-14 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 grid gap-4 md:grid-cols-2">
            <Card className="bg-white shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Story Prompt Ideas</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  {prompts.map((prompt) => (
                    <li key={prompt} className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                      {prompt}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">What Makes a Great Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  {tips.map((tip) => (
                    <li key={tip} className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white shadow-sm ring-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Submit Your Story</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full name</label>
                    <Input id="fullName" name="fullName" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="currentRole" className="text-sm font-medium text-gray-700">Current role</label>
                    <Input id="currentRole" name="currentRole" placeholder="e.g. Frontend Developer" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                    <Input id="company" name="company" placeholder="e.g. SkyTech Labs" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
                    <Input id="location" name="location" placeholder="City, Country" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium text-gray-700">LinkedIn or portfolio URL</label>
                    <Input id="linkedin" name="linkedin" type="url" placeholder="https://" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="headline" className="text-sm font-medium text-gray-700">Story headline</label>
                  <Input id="headline" name="headline" placeholder="A title for your journey" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="story" className="text-sm font-medium text-gray-700">Your story</label>
                  <Textarea
                    id="story"
                    name="story"
                    className="min-h-48"
                    placeholder="Tell us about your journey: where you started, what changed, and where you are now."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="consent" className="flex items-start gap-2 text-sm text-gray-700">
                    <input id="consent" name="consent" type="checkbox" className="mt-0.5 h-4 w-4 rounded border-gray-300" />
                    I confirm this story is mine and I consent to SkyStates editing for clarity before publication.
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-gray-500">
                    Prefer a direct route? Send your draft to hello@skystates.com.
                  </p>
                  <Button type="button" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                    Submit Story
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6 text-sm text-blue-900">
            Looking for inspiration first? Browse featured journeys on the <Link href="/stories" className="font-semibold underline underline-offset-4">stories page</Link>.
          </div>
        </div>
      </section>
    </div>
  );
}
