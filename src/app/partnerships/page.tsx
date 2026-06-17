import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
  TrendingUp,
  FileText,
  ShieldCheck,
  Building
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Partnerships | Sky States",
  description:
    "Explore Sky States' industry partnerships and Microsoft-aligned curriculum pathways designed to prepare students for real-world tech careers.",
};

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-200">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Animated background blurs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl space-y-6">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Collaborations & Alignment
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Industry Alignment &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Strategic Partnerships
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We align our educational models with top enterprise technologies, ensuring our graduates are ready to deploy solutions for the world&apos;s leading organizations.
          </p>
        </div>
      </section>

      {/* Main Partnerships Section */}
      <section className="py-16 md:py-20 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl space-y-16">
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-none font-semibold">
                Curriculum Integration
              </Badge>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Microsoft-Aligned Training Pathway
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Our curriculum is built around Microsoft&apos;s certification framework, preparing students for official credentials including the <strong>DP-900 (Microsoft Azure Data Fundamentals)</strong>. By integrating standard-aligned tools, we help students build enterprise competence.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Official Framework Blueprint</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Our training tracks map directly to Microsoft Azure certification standards, giving graduates resumes that match automated ATS filters.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Verified Professional Credentials</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Graduates earn globally recognized certifications that validate cloud, AI, and cybersecurity expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ecosystem Numbers</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white dark:bg-slate-900 border-none shadow-xs">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-blue-600">120+</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-slate-500">
                    Hiring partners in the ecosystem.
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-slate-900 border-none shadow-xs">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold text-blue-600">10k+</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-slate-500">
                    Learners supported globally.
                  </CardContent>
                </Card>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                By maintaining connections with global software integrators and tech staffing firms, Sky States acts as a direct talent pipeline for entry-level cloud and security roles.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Insights/Blog Section (The Blog Link Requested) */}
      <section className="py-16 md:py-20 px-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-none font-semibold">
              Insights & Career Growth
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Featured Partnerships Publication
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Read our latest professional editorial on the value of verified vendor credentials in the enterprise sector.
            </p>
          </div>

          <Card className="border-none shadow-lg bg-white dark:bg-slate-900 rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-5 bg-gradient-to-br from-blue-700 via-blue-900 to-indigo-950 p-8 flex flex-col justify-between text-white relative min-h-[250px]">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Award className="w-36 h-36" />
                </div>
                <Badge className="bg-white/15 text-white border-none self-start">
                  Featured Resource
                </Badge>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-blue-200">
                    <FileText className="w-4 h-4" />
                    <span>8 min read &middot; Editorial Team</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    How Microsoft Certifications Accelerate Career Growth in Cloud, AI, and Cybersecurity
                  </h3>
                </div>
              </div>
              <div className="md:col-span-7 p-8 flex flex-col justify-between space-y-6">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Discover why global enterprises prioritize candidates with verified Microsoft credentials. Learn how certifications in Azure cloud architecture, cognitive AI models, zero-trust cybersecurity, and DevOps pipelines provide professionals with structured pathways to fast-track their career transitions and secure high-paying tech roles.
                </p>
                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Topics: Cloud, AI, Security
                  </span>
                  <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                    <Link href="/blog/microsoft-certifications" className="flex items-center gap-2">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Corporate Collaboration CTA */}
      <section className="py-16 md:py-20 bg-slate-900 border-t border-white/10 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-600 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Partner With Sky States
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Are you looking to hire certified cloud, AI, or cybersecurity talent? Or want to discuss community integration opportunities? Get in touch with our partnerships office.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl shadow-md">
              <Link href="/contact?subject=partnership">Inquire About Partnerships</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-xl">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
