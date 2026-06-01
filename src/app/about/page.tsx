import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Career-First Learning",
    description:
      "Every learning path is designed around real hiring expectations, not just theory.",
  },
  {
    title: "Mentorship That Scales",
    description:
      "Learners get practical guidance from people who have built products and teams.",
  },
  {
    title: "Community and Accountability",
    description:
      "Progress accelerates when learners build in public, collaborate, and support each other.",
  },
  {
    title: "Outcome Transparency",
    description:
      "We focus on measurable growth: skills, confidence, interviews, and career progression.",
  },
];

const milestones = [
  "Discover: identify your target role and skill gap.",
  "Build: complete practical projects mapped to real job scenarios.",
  "Showcase: publish a portfolio and tell your professional story.",
  "Launch: prepare for interviews and transition into a tech role.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 px-4 py-20 md:py-24">
        <div className="absolute top-12 left-8 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute right-6 bottom-8 h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-5xl text-center text-white">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">About SkyStates</Badge>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Building Careers, Not Just Courses.
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-blue-100 md:text-xl">
            SkyStates is a technology training and career development platform focused on helping learners
            move from ambition to impact through practical skills, mentorship, and career outcomes.
          </p>
        </div>
      </section>

      <section className="bg-linear-to-b from-slate-50 to-white px-4 py-16 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            <Card className="bg-white/90 shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-700">10k+</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Learners supported across training and career programs.</CardContent>
            </Card>

            <Card className="bg-white/90 shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-700">120+</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Hiring partners and community collaborators in the ecosystem.</CardContent>
            </Card>

            <Card className="bg-white/90 shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-700">1 Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Create life-changing opportunities through technology careers.</CardContent>
            </Card>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <Card className="h-full bg-white shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">What We Believe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="rounded-xl border border-gray-200 bg-white p-4">
                    <h3 className="font-semibold text-gray-900">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{value.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="h-full bg-white shadow-sm ring-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">How SkyStates Supports Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {milestones.map((step) => (
                    <li key={step} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {milestones.indexOf(step) + 1}
                      </span>
                      <span className="text-sm text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 px-4 py-16">
        <div className="container relative z-10 mx-auto max-w-4xl text-center text-white">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">Meet the Voices Behind the Outcomes</h2>
          <p className="mx-auto mb-8 max-w-2xl text-blue-100">
            Explore stories from alumni who turned learning into momentum and momentum into meaningful careers.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/#featured-stories">Explore Alumni Stories</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700">
              <Link href="/submit">Share Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
