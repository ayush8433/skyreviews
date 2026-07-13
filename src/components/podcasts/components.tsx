"use client";

import React, { useState } from "react";
import { 
  Play, 
  Clock, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Code2, 
  Target, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  AlertCircle,
  FolderGit2,
  Terminal,
  Award,
  Video,
  ExternalLink
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PodcastRichData } from "@/data/podcasts-rich-data";

// --- HERO SECTION ---
export function PodcastHero({ data }: { data: PodcastRichData }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 mb-12 shadow-2xl border border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-indigo-900/20 to-slate-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 text-xs">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 inline text-purple-400" />
            Student Success Story
          </Badge>
          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 text-xs flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {data.duration}
          </Badge>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          How {data.studentName} Transitioned to {data.currentRole}
        </h1>

        <p className="text-slate-350 text-base md:text-lg leading-relaxed max-w-3xl">
          {data.keyOutcomeSummary}
        </p>

        <div className="flex flex-wrap gap-4 items-center bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-sm max-w-2xl">
          <div className="flex items-center gap-3">
            <img 
              src={data.studentPhoto} 
              alt={data.studentName} 
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/50"
            />
            <div>
              <p className="text-sm font-bold text-white">{data.studentName}</p>
              <p className="text-xs text-slate-400">Previous: {data.previousBackground}</p>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block" />
          <div className="text-left sm:pl-2">
            <p className="text-xs text-slate-400">Target Role</p>
            <p className="text-sm font-semibold text-purple-400">{data.currentRole}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- EXECUTIVE SUMMARY ---
export function ExecutiveSummary({ data }: { data: PodcastRichData }) {
  const s = data.executiveSummary;
  return (
    <Card className="border-none bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-slate-100/50 dark:shadow-none p-6 md:p-8 border border-slate-100 dark:border-slate-850 mb-12">
      <CardContent className="p-0 space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
          <FileText className="h-6 w-6 text-purple-600" />
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Executive Summary</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Background & Starting Point</h4>
              <p className="text-slate-650 dark:text-slate-350 text-sm mt-1">{s.background}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Primary Obstacle</h4>
              <p className="text-slate-650 dark:text-slate-350 text-sm mt-1">{s.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Learning Path</h4>
              <p className="text-slate-650 dark:text-slate-350 text-sm mt-1">{s.journey}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Skills Acquired</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {s.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-xs px-2.5 py-0.5 border-none">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Completed Projects</h4>
              <ul className="text-slate-650 dark:text-slate-350 text-sm mt-1 list-disc pl-4 space-y-1">
                {s.projects.map((proj) => <li key={proj}>{proj}</li>)}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Career Outcomes</h4>
              <p className="text-slate-650 dark:text-slate-350 text-sm mt-1 font-medium text-green-600 dark:text-green-400">{s.outcomes}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// --- STUDENT PROFILE ---
export function StudentProfile({ data }: { data: PodcastRichData }) {
  const p = data.profile;
  return (
    <Card className="border-none bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] p-6 md:p-8 mb-12 border border-slate-100 dark:border-slate-850">
      <CardContent className="p-0 space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-150 dark:border-slate-800 pb-4">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Student Entity Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Briefcase className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Previous Title</p>
                <p className="text-sm text-slate-800 dark:text-slate-200 mt-0.5">{p.background}</p>
              </div>
            </div>
            {p.education && (
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Education</p>
                  <p className="text-sm text-slate-800 dark:text-slate-200 mt-0.5">{p.education}</p>
                </div>
              </div>
            )}
            {p.region && (
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
                  <p className="text-sm text-slate-800 dark:text-slate-200 mt-0.5">{p.region}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Course Completed</p>
                <p className="text-sm text-slate-800 dark:text-slate-200 mt-0.5">{p.course}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Code2 className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Technologies Learned</p>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {p.technologies.map((t) => (
                    <span key={t} className="text-[11px] bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 px-2 py-0.5 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FolderGit2 className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Key Projects</p>
                <ul className="text-sm text-slate-800 dark:text-slate-200 mt-1 space-y-1 list-disc pl-4">
                  {p.projects.map((proj) => (
                    <li key={proj.title}>
                      <span className="font-semibold">{proj.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Professional Goals</p>
                <p className="text-sm text-slate-800 dark:text-slate-200 mt-0.5">{p.goals}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// --- TIMELINE ---
export function CareerTimeline({ timeline }: { timeline: { title: string; description: string }[] }) {
  return (
    <section className="mb-12 space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <TrendingUp className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Career Journey Timeline</h2>
      </div>

      <div className="relative pl-6 md:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8 ml-2">
        {timeline.map((step, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-white dark:border-slate-900 group-hover:scale-125 transition-transform duration-200" />
            
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-600 dark:text-purple-400">Step {idx + 1}</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h4>
              <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed max-w-3xl">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- TRANSCRIPT ---
export function PodcastTranscript({ transcript }: { transcript: { speaker: string; text: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden mb-12 shadow-sm bg-white dark:bg-slate-900">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-purple-600" />
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">Complete Podcast Transcript</h3>
            <p className="text-xs text-slate-500">Read the fully formatted dialogue</p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
      </button>

      {isOpen && (
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 max-h-[500px] overflow-y-auto space-y-4">
          {transcript.map((t, idx) => (
            <div key={idx} className="space-y-1">
              <span className={`text-xs font-bold ${t.speaker.toLowerCase().includes("interviewer") ? "text-purple-600 dark:text-purple-400" : "text-blue-600 dark:text-blue-400"}`}>
                {t.speaker}
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900/70 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-850">
                {t.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

// --- EXPANDED TOPICS ---
export function ExpandedTopics({ topics }: { topics: { title: string; content: string }[] }) {
  return (
    <section className="mb-12 space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <Sparkles className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Topic Deep Dives & Career Guides</h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {topics.map((topic, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-3">
            <Badge className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-none font-medium px-2.5 py-0.5 text-xs">
              Topic Breakdown
            </Badge>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{topic.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">{topic.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- KEY LESSONS ---
export function KeyLessons({ lessons }: { lessons: { title: string; content: string }[] }) {
  return (
    <section className="mb-12 space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <AlertCircle className="h-6 w-6 text-indigo-600" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Key Lessons & Turning Points</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lessons.map((lesson, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-850 space-y-2">
            <h4 className="text-sm font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              {lesson.title}
            </h4>
            <p className="text-xs md:text-sm text-slate-650 dark:text-slate-350 leading-relaxed">{lesson.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- TECHNOLOGIES COVERED ---
export function TechnologiesCovered({ tech }: { tech: PodcastRichData["technologiesCovered"] }) {
  return (
    <section className="mb-12 space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <Terminal className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Technical Concept Breakdown</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tech.map((t, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t.name}</h3>
              <Badge variant="outline" className="border-purple-500/20 text-purple-600 dark:text-purple-400 text-[10px]">
                Concept Hub
              </Badge>
            </div>
            
            <div className="space-y-2 text-xs md:text-sm">
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block text-[11px] uppercase tracking-wider">Overview</span>
                <p className="text-slate-600 dark:text-slate-350">{t.overview}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block text-[11px] uppercase tracking-wider">Why it Matters</span>
                <p className="text-slate-600 dark:text-slate-350">{t.whyMatters}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-500 dark:text-slate-400 block text-[11px] uppercase tracking-wider">Where it was used</span>
                <p className="text-slate-600 dark:text-slate-350">{t.whereUsed}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="font-semibold text-slate-500 dark:text-slate-400 block text-[11px] uppercase tracking-wider mb-1.5">Beginner Resources</span>
              <div className="flex flex-wrap gap-1">
                {t.resources.map((res) => (
                  <span key={res} className="text-[10px] bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-350 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-750">
                    {res}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- PROJECTS SECTION ---
export function ProjectsSection({ projects }: { projects: PodcastRichData["projects"] }) {
  return (
    <section className="mb-12 space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <FolderGit2 className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Practical Project Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <Card key={idx} className="border-none bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-8 shadow-lg border border-slate-100 dark:border-slate-800 space-y-5">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">{proj.title}</h3>
                <FolderGit2 className="h-5 w-5 text-purple-500" />
              </div>

              <div className="space-y-2 text-xs md:text-sm">
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">Problem Statement</span>
                  <p className="text-slate-650 dark:text-slate-350 mt-0.5">{proj.problem}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">Dataset Used</span>
                  <p className="text-slate-655 dark:text-slate-355 mt-0.5">{proj.dataset}</p>
                </div>
                <div>
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">Pipeline Architecture</span>
                  <p className="text-slate-650 dark:text-slate-350 mt-0.5">{proj.architecture}</p>
                </div>
                <div className="text-green-600 dark:text-green-400">
                  <span className="font-bold text-slate-400 uppercase tracking-wider text-[10px] block">Business Impact</span>
                  <p className="font-medium mt-0.5">{proj.businessValue}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {proj.tools.map((tool) => (
                  <Badge key={tool} variant="outline" className="border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-[10px]">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// --- INTERVIEW PREPARATION ---
export function InterviewPrepGuide({ prep }: { prep: PodcastRichData["interviewPrep"] }) {
  return (
    <section className="mb-12 space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <Target className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Technical Interview Preparation Guide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Resume Optimization Strategy</h4>
            <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">{prep.resume}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">Mock Interview Framework</h4>
            <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">{prep.mocks}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-850">
              <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1.5">Behavioral Rounds</h5>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350">{prep.behavioral}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-850">
              <h5 className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-1.5">Technical Rounds</h5>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-350">{prep.technical}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 space-y-6">
          <div className="bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 p-6 rounded-[2rem] space-y-3">
            <h4 className="text-base font-bold text-red-700 dark:text-red-400">Common Mistakes</h4>
            <p className="text-xs md:text-sm text-red-900/80 dark:text-red-300 leading-relaxed">{prep.mistakes}</p>
          </div>
          <div className="bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/20 p-6 rounded-[2rem] space-y-3">
            <h4 className="text-base font-bold text-indigo-700 dark:text-indigo-400">Preparation Strategy</h4>
            <p className="text-xs md:text-sm text-indigo-900/80 dark:text-indigo-300 leading-relaxed">{prep.strategies}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FAQs SECTION ---
export function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="mb-12 space-y-6">
      <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
        <CheckCircle2 className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
            <button 
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors text-left"
            >
              <span className="font-bold text-slate-900 dark:text-white text-sm md:text-base">{faq.q}</span>
              {openIndex === idx ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
            </button>
            {openIndex === idx && (
              <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
                <p className="text-sm text-slate-650 dark:text-slate-350 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// --- QUOTES ---
export function QuotesSection({ quotes }: { quotes: string[] }) {
  return (
    <section className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
      {quotes.map((quote, idx) => (
        <blockquote key={idx} className="bg-purple-500/5 border-l-4 border-purple-500 p-6 rounded-r-3xl dark:bg-slate-900">
          <p className="text-base text-slate-700 dark:text-slate-300 italic leading-relaxed">
            "{quote}"
          </p>
        </blockquote>
      ))}
    </section>
  );
}
