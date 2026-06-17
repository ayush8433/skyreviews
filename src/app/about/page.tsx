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
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-200">
      
      {/* Immersive Hero */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl space-y-6">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            About SkyStates
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Building Careers,{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Not Just Courses.
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            SkyStates is a technology training and career development platform focused on helping learners
            move from ambition to impact through practical skills, mentorship, and career outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto px-4 max-w-6xl">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 md:grid-cols-3">
            <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">10k+</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">Learners supported across training and career programs.</CardContent>
            </Card>

            <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">120+</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">Hiring partners and community collaborators in the ecosystem.</CardContent>
            </Card>

            <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-600 dark:text-blue-400">1 Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 dark:text-slate-400">Create life-changing opportunities through technology careers.</CardContent>
            </Card>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2">
            <Card className="h-full border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">What We Believe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {values.map((value) => (
                  <div key={value.title} className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
                    <h3 className="font-semibold text-slate-900 dark:text-white">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{value.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="h-full border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 dark:text-white">How SkyStates Supports Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3">
                  {milestones.map((step) => (
                    <li key={step} className="flex items-start gap-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                        {milestones.indexOf(step) + 1}
                      </span>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Voices Behind the Outcomes */}
      <section className="py-16 md:py-20 bg-slate-900 border-t border-white/10 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Meet the Voices Behind the Outcomes</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore stories from alumni who turned learning into momentum and momentum into meaningful careers.
          </p>
          <div className="pt-2 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-md">
              <Link href="/#featured-stories">Explore Alumni Stories</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-xl">
              <Link href="/submit">Share Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
