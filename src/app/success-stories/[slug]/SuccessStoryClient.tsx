"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { StudentSuccessStory } from "@/data/success-stories-data";
import { 
  Trophy, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Calendar,
  Clock,
  Play,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileText,
  Video,
  Share2,
  Bookmark,
  ChevronRight,
  Sparkles,
  Info,
  Layers,
  FileCode,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  ExternalLink,
  MessageSquare
} from "lucide-react";

const TRUSTSCHOOL_LINKS: Record<string, string> = {
  "finance-professional-move-into-devops": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sez0001ew5wyparkl1c#review-cmrdz0sez0001ew5wyparkl1c",
  "building-future-in-data-science-after-motherhood": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sf50003ew5w92a6zb1j#review-cmrdz0sf50003ew5w92a6zb1j",
  "from-customer-service-to-cybersecurity": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sfc0005ew5w85thmj5y#review-cmrdz0sfc0005ew5w85thmj5y",
  "sky-states-review-mechanical-engineer-to-data-scientist-dieter-vance": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sfr0008ew5w01d7g4ea#review-cmrdz0sfr0008ew5w01d7g4ea",
  "sky-states-review-customer-support-to-cybersecurity-analyst-priya-sharma": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sg2000bew5whn1bqrn6#review-cmrdz0sg2000bew5whn1bqrn6",
  "breaking-into-cybersecurity-without-cs-degree": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sg8000dew5w5awxqciq#review-cmrdz0sg8000dew5w5awxqciq",
  "starting-over-in-america-through-tech": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sgk000gew5wppncjlke#review-cmrdz0sgk000gew5wppncjlke",
  "sky-states-review-retail-store-manager-to-data-analyst-marcus-torres": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sgp000iew5wex9mb03a#review-cmrdz0sgp000iew5wex9mb03a",
  "sky-states-review-middle-school-science-teacher-to-data-analyst-elena-rodriguez": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sgu000kew5w7o2t8rmu#review-cmrdz0sgu000kew5w7o2t8rmu",
  "sky-states-review-stay-at-home-mom-to-business-intelligence-analyst-sarah-jenkins": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sh0000mew5w091ck3le#review-cmrdz0sh0000mew5w091ck3le",
  "from-mechanical-engineering-to-data-analytics": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sh5000oew5wks9ckbl4#review-cmrdz0sh5000oew5wks9ckbl4",
};

export default function SuccessStoryClient({ story }: { story: StudentSuccessStory }) {
  const [isTranscriptExpanded, setIsTranscriptExpanded] = useState(false);
  const [activeRoadmapStep, setActiveRoadmapStep] = useState(0);
  const [activeProjectTab, setActiveProjectTab] = useState(0);
  const [activeAssetTab, setActiveAssetTab] = useState("blog");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [faqSearch, setFaqSearch] = useState("");

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const filteredFaqs = story.faqs.filter(faq => 
    faq.question.toLowerCase().includes(faqSearch.toLowerCase()) || 
    faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  const trustschoolLink = TRUSTSCHOOL_LINKS[story.slug];

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pt-20 pb-24">
      {/* 1. HERO SECTION (Dark Premium Theme) */}
      <div className="relative overflow-hidden bg-slate-900 text-white py-16 lg:py-24">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/25 blur-[130px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/25 blur-[130px] rounded-full -rotate-12" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <Link 
            href="/success-stories" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-800 bg-slate-900 group-hover:border-slate-600 transition-all">
              &larr;
            </span>
            Back to Success Stories
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
                  <Trophy className="h-3.5 w-3.5" />
                  Alumni Spotlight
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                  {story.durationOfLearning} Learning Duration
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                {story.name}
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                "{story.quickSummary}"
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Previous Career</p>
                  <p className="text-sm font-bold text-white line-clamp-1">{story.previousCareer}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Current Goal</p>
                  <p className="text-sm font-bold text-white line-clamp-1">{story.currentCareerGoal}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Program</p>
                  <p className="text-sm font-bold text-white line-clamp-1">{story.program}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold mb-1">Location</p>
                  <p className="text-sm font-bold text-white line-clamp-1">{story.location}</p>
                </div>
              </div>
            </div>

            {/* Right Video Embed */}
            <div className="lg:col-span-5 relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl shadow-blue-500/5">
              <iframe 
                src={story.videoUrl} 
                title={`${story.name} Testimonial Video`}
                className="w-full h-full border-none absolute inset-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* 2. STUDENT PROFILE PANEL */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-500" />
                Verified Student Profile
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex justify-between py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-sm text-slate-500">Student Name</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{story.name}</span>
                  </div>
                  <div className="flex justify-between py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-sm text-slate-500">Learning Track</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{story.track}</span>
                  </div>
                  <div className="flex justify-between py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-sm text-slate-500">Program Completed</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{story.program}</span>
                  </div>
                  <div className="flex justify-between py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-sm text-slate-500">Previous Role</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{story.previousCareer}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-sm text-slate-500">Learning Duration</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{story.durationOfLearning}</span>
                  </div>
                  <div className="flex justify-between py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-sm text-slate-500">Portfolio Projects</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{story.projectsCompletedCount} Completed</span>
                  </div>
                  <div className="flex justify-between py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-sm text-slate-500">Target Career Goal</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{story.currentCareerGoal}</span>
                  </div>
                  <div className="flex justify-between py-2.5 border-b border-slate-100 dark:border-slate-800/80">
                    <span className="text-sm text-slate-500">Status</span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-1 rounded-md">
                      <CheckCircle2 className="h-3 w-3" /> Verified Success
                    </span>
                  </div>
                </div>
              </div>

              {trustschoolLink && (
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-blue-50/15 dark:bg-blue-950/10 p-5 rounded-2xl">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">TrustSchool.us Verification</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">This student success story corresponds to an independently verified review on TrustSchool.</p>
                  </div>
                  <a
                    href={trustschoolLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white dark:bg-slate-900 hover:bg-slate-50 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    Verify Review on TrustSchool
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-sm font-semibold text-slate-500 mb-3">Technologies Mastered:</p>
                <div className="flex flex-wrap gap-2">
                  {story.technologiesLearned.map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. VIDEO TRANSCRIPT & KEY MOMENTS */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Video className="h-6 w-6 text-blue-500" />
                  Video Testimonial Transcript
                </h2>
                <button 
                  onClick={() => setIsTranscriptExpanded(!isTranscriptExpanded)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                  {isTranscriptExpanded ? "Collapse Transcript" : "View Full Transcript"}
                  {isTranscriptExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>

              {/* Timestamps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {story.timestamps.map((ts, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <span className="font-mono text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/50 px-2 py-1 rounded-lg h-fit">
                      {ts.time}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{ts.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{ts.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {isTranscriptExpanded && (
                <div className="prose prose-slate dark:prose-invert max-w-none bg-slate-50 dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 mb-8">
                  <p className="text-slate-650 dark:text-slate-300 leading-relaxed text-sm italic whitespace-pre-line">
                    "{story.transcript}"
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <p className="text-sm font-bold text-slate-900 dark:text-white mb-3">Key Takeaways & Moments:</p>
                <ul className="space-y-2">
                  {story.keyMoments.map((moment, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                      <span className="h-5 w-5 rounded-full bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center text-xs font-bold text-blue-600 shrink-0">
                        {idx + 1}
                      </span>
                      <span>{moment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 4. DEEP DIVE SUCCESS STORY CASE STUDY */}
            <section className="space-y-12">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  The Journey: Full Case Study
                </h2>
                <p className="text-slate-500 mt-1">A detailed breakdown of Shamim's 7-month transition phase by phase.</p>
              </div>

              <div className="space-y-10 border-l-2 border-slate-200 dark:border-slate-800 pl-6 md:pl-8 ml-4">
                {/* Section 1: Before Joining */}
                <div className="relative">
                  <div className="absolute -left-[35px] md:-left-[43px] top-1 h-6 w-6 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950 shadow" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Before Enrolling: The Operations Impasse</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base whitespace-pre-line">
                      {story.beforeJoining}
                    </p>
                  </div>
                </div>

                {/* Section 2: Learning Journey */}
                <div className="relative">
                  <div className="absolute -left-[35px] md:-left-[43px] top-1 h-6 w-6 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 shadow" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. The Learning Journey: Overcoming the Coding Wall</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base whitespace-pre-line">
                      {story.learningJourney}
                    </p>
                  </div>
                </div>

                {/* Section 3: Interview Prep */}
                <div className="relative">
                  <div className="absolute -left-[35px] md:-left-[43px] top-1 h-6 w-6 rounded-full bg-sky-600 border-4 border-white dark:border-slate-950 shadow" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Interview Preparation: Rebuilding Professional Identity</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base whitespace-pre-line">
                      {story.interviewPrep}
                    </p>
                  </div>
                </div>

                {/* Section 4: Results */}
                <div className="relative">
                  <div className="absolute -left-[35px] md:-left-[43px] top-1 h-6 w-6 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950 shadow" />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Verified Results & Looking Forward</h3>
                  <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="text-slate-650 dark:text-slate-400 leading-relaxed text-base whitespace-pre-line">
                      {story.results}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. INTERACTIVE LEARNING ROADMAP */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-500" />
                Month-by-Month Success Roadmap
              </h2>
              <p className="text-sm text-slate-500 mb-8">Click on any month to explore the exact skills and milestones targeted during Shamim's program.</p>

              {/* Horizontal Month Timeline */}
              <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-none snap-x border-b border-slate-100 dark:border-slate-800 mb-8">
                {story.roadmap.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveRoadmapStep(idx)}
                    className={`px-5 py-3 rounded-xl text-sm font-bold shrink-0 transition-all snap-start ${
                      activeRoadmapStep === idx 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                        : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {step.month}
                  </button>
                ))}
              </div>

              {/* Active Roadmap Step Details */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 animate-fade-in">
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                  {story.roadmap[activeRoadmapStep].month} Milestone
                </p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {story.roadmap[activeRoadmapStep].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {story.roadmap[activeRoadmapStep].description}
                </p>

                <p className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2.5">Key Core Competencies:</p>
                <div className="flex flex-wrap gap-2">
                  {story.roadmap[activeRoadmapStep].topics.map(topic => (
                    <span key={topic} className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. PROJECTS CAROUSEL / SECTION */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <FileCode className="h-6 w-6 text-blue-500" />
                Featured Portfolio Projects
              </h2>
              <p className="text-sm text-slate-500 mb-6">Select a project to review the technical problem, tools, challenges, and real-world ROI.</p>

              {/* Project Toggle Tabs */}
              <div className="flex gap-2 mb-8">
                {story.projects.map((proj, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProjectTab(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      activeProjectTab === idx 
                        ? "bg-indigo-600 text-white shadow" 
                        : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100"
                    }`}
                  >
                    Project {idx + 1}: {proj.title.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Active Project View */}
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {story.projects[activeProjectTab].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-455 text-sm leading-relaxed">
                    <strong>Business Problem:</strong> {story.projects[activeProjectTab].problem}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/45 text-xs">
                    <strong className="text-slate-900 dark:text-white block mb-1">Dataset Used:</strong>
                    <span className="text-slate-500 leading-relaxed">{story.projects[activeProjectTab].dataset}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/45 text-xs">
                    <strong className="text-slate-900 dark:text-white block mb-1">Approach & Solution:</strong>
                    <span className="text-slate-500 leading-relaxed">{story.projects[activeProjectTab].approach}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 text-xs">
                    <strong className="text-amber-750 dark:text-amber-400 block mb-1">Key Challenges:</strong>
                    <span className="text-slate-500 leading-relaxed">{story.projects[activeProjectTab].challenges}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 text-xs">
                    <strong className="text-emerald-750 dark:text-emerald-400 block mb-1">Real-World Application:</strong>
                    <span className="text-slate-500 leading-relaxed">{story.projects[activeProjectTab].realWorldApplications}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-150 dark:border-slate-800 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {story.projects[activeProjectTab].toolsUsed.map(t => (
                      <span key={t} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 7. INTERVIEW PREPARATION MASTERCLASS */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Award className="h-6 w-6 text-blue-500" />
                Technical Interview Preparation Breakdown
              </h2>
              <p className="text-sm text-slate-500 mb-8">How Shamim trained for the highly rigorous screening rounds of corporate hiring processes.</p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">SQL live Coding Rounds</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{story.interviewPrepDetails.technicalAssessments}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Take-Home Assignments</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{story.interviewPrepDetails.assignments}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Behavioral & Communication</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{story.interviewPrepDetails.behavioralInterviews}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">Mock Screenings</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{story.interviewPrepDetails.mockInterviews}</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                  <h4 className="font-bold text-blue-900 dark:text-blue-400 text-sm mb-1.5">Confidence Building & Career Advice</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{story.interviewPrepDetails.careerAdvice}</p>
                </div>
              </div>
            </section>

            {/* 8. GEO QUESTION-ANSWER SECTION */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-blue-500" />
                GEO Optimization: Verified Career QA
              </h2>
              <p className="text-sm text-slate-500 mb-8">Authoritative answers targeting common search queries regarding Shamim's tech transition.</p>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">What was {story.name}'s professional background before enrolling?</h4>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">{story.geoAnswers.background}</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">What technical tools and skills did he learn?</h4>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">{story.geoAnswers.whatLearned}</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">What portfolio projects did he build?</h4>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">{story.geoAnswers.projectsBuilt}</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">What challenges did he face during the career change?</h4>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">{story.geoAnswers.challengesFaced}</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">How did he prepare for technical interviews?</h4>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">{story.geoAnswers.interviewPrep}</p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">What advice would he give to other non-technical beginners?</h4>
                  <p className="text-slate-650 dark:text-slate-400 text-sm leading-relaxed">{story.geoAnswers.adviceForBeginners}</p>
                </div>
              </div>
            </section>

            {/* 9. EXTENSIVE FAQ ACCORDION (25 FAQs) */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-blue-500" />
                    Comprehensive FAQ Library
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">25 verified answers covering bootcamps, roadmaps, programming, and interviews.</p>
                </div>
                <input 
                  type="text" 
                  placeholder="Filter FAQs..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs bg-slate-50 dark:bg-slate-950 focus:outline-none w-full md:w-48"
                />
              </div>

              <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-2">
                {filteredFaqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className="border border-slate-100 dark:border-slate-850 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-800/20"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-sm text-slate-900 dark:text-white hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {expandedFaq === idx ? <ChevronUp className="h-4 w-4 text-slate-400" /> : <ChevronDown className="h-4 w-4 text-slate-400" />}
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-5 pb-4 text-slate-500 text-xs leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
                {filteredFaqs.length === 0 && (
                  <p className="text-center text-xs text-slate-400 py-6">No matching FAQs found.</p>
                )}
              </div>
            </section>

            {/* 10. CONTENT REUSE & Repurposed Ecosystem switcher */}
            <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 shadow-xl">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-400 text-xs font-semibold border border-indigo-500/20">
                  <Layers className="h-3.5 w-3.5" />
                  Repurposed Content Ecosystem
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-3">
                  Multi-Channel Asset Library
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  See how this single student video testimonial was transformed into a massive supporting marketing ecosystem.
                </p>
              </div>

              {/* Asset toggle headers */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
                {[
                  { id: "blog", label: "Blog Case Study" },
                  { id: "linkedin", label: "LinkedIn Article" },
                  { id: "youtube", label: "YouTube Optimization" },
                  { id: "podcast", label: "Podcast Script" },
                  { id: "newsletter", label: "Newsletter Email" },
                  { id: "transition", label: "Transition Blueprint" },
                  { id: "interview", label: "Interview Prep Guide" }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveAssetTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeAssetTab === tab.id 
                        ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900" 
                        : "bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Active Repurposed Asset Body */}
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/80 max-h-[400px] overflow-y-auto">
                {activeAssetTab === "blog" && (
                  <div className="prose prose-slate dark:prose-invert max-w-none text-xs">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Optimized Blog Case Study</h4>
                    <div className="whitespace-pre-line text-slate-650 leading-relaxed">{story.reusedAssets.blogArticle}</div>
                  </div>
                )}

                {activeAssetTab === "linkedin" && (
                  <div className="prose prose-slate dark:prose-invert max-w-none text-xs">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">High-Engagement LinkedIn Pulse Post</h4>
                    <div className="whitespace-pre-line text-slate-650 leading-relaxed">{story.reusedAssets.linkedinArticle}</div>
                  </div>
                )}

                {activeAssetTab === "youtube" && (
                  <div className="space-y-4 text-xs">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">YouTube Metadata Optimization</h4>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border">
                      <strong className="text-slate-900 dark:text-white block mb-1">Optimized Title:</strong>
                      <span className="text-slate-600">{story.reusedAssets.youtubeTitle}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border">
                      <strong className="text-slate-900 dark:text-white block mb-1">Video Description (500-1000 words):</strong>
                      <span className="text-slate-600 whitespace-pre-line block mt-2">{story.reusedAssets.youtubeDescription}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-950 border">
                      <strong className="text-slate-900 dark:text-white block mb-1">Tags & Search Keywords:</strong>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {story.reusedAssets.youtubeTags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-600 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeAssetTab === "podcast" && (
                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">Podcast Episode Page</h4>
                      <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded font-bold">{story.reusedAssets.podcastDuration}</span>
                    </div>
                    <p className="text-slate-500"><strong>Title:</strong> {story.reusedAssets.podcastTitle}</p>
                    <p className="text-slate-500"><strong>Hosted by:</strong> {story.reusedAssets.podcastHost}</p>
                    <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/60 mt-4">
                      <strong className="text-slate-900 dark:text-white block mb-2 font-mono text-[10px]">TRANSCRIPT EXCERPT:</strong>
                      <div className="whitespace-pre-line text-slate-650 leading-relaxed font-mono text-[10px]">{story.reusedAssets.podcastTranscriptExcerpt}</div>
                    </div>
                  </div>
                )}

                {activeAssetTab === "newsletter" && (
                  <div className="prose prose-slate dark:prose-invert max-w-none text-xs">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Marketing Email Broadcast</h4>
                    <div className="whitespace-pre-line text-slate-650 leading-relaxed">{story.reusedAssets.emailNewsletter}</div>
                  </div>
                )}

                {activeAssetTab === "transition" && (
                  <div className="prose prose-slate dark:prose-invert max-w-none text-xs">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Non-Technical Career Transition Guide</h4>
                    <div className="whitespace-pre-line text-slate-650 leading-relaxed">{story.reusedAssets.careerTransitionGuide}</div>
                  </div>
                )}

                {activeAssetTab === "interview" && (
                  <div className="prose prose-slate dark:prose-invert max-w-none text-xs">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">Technical Interview Prep Manual</h4>
                    <div className="whitespace-pre-line text-slate-650 leading-relaxed">{story.reusedAssets.interviewPrepGuide}</div>
                  </div>
                )}
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            {/* Student Entity Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-xl">
              <div className="h-28 bg-gradient-to-r from-blue-600 to-indigo-700 relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <span className="text-white/20 font-extrabold text-5xl tracking-widest">ALUMNI</span>
              </div>
              <div className="p-6 -mt-10 relative z-10 text-center">
                <div className="h-20 w-20 rounded-2xl bg-white dark:bg-slate-900 border-4 border-white dark:border-slate-900 shadow-xl mx-auto flex items-center justify-center text-2xl font-bold text-blue-600">
                  SK
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">{story.name}</h3>
                <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-1">{story.currentCareerGoal}</p>
                <p className="text-slate-500 text-xs italic mt-3 leading-relaxed">
                  "Transitioned from a non-tech operations role to Data Science in 7 months."
                </p>

                <div className="space-y-3.5 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 text-left text-xs text-slate-650">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>{story.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-indigo-500 shrink-0">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <span><strong>Prev:</strong> {story.previousCareer}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-sky-500 shrink-0">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <span>{story.program}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Educational value quick link cards */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 shadow-xl space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Educational Quick Guide</h4>
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <strong className="text-slate-900 dark:text-white block mb-1">What is Data Science?</strong>
                  <p className="text-slate-500 leading-relaxed">{story.educationalContent.whatIsField}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                  <strong className="text-slate-900 dark:text-white block mb-1">Why Learn Python first?</strong>
                  <p className="text-slate-500 leading-relaxed">{story.educationalContent.whyLearnCoreTech}</p>
                </div>
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Trophy className="h-28 w-28 rotate-12" />
              </div>
              <h4 className="font-bold text-lg mb-2">Build Your Own Success Story</h4>
              <p className="text-blue-100 text-xs mb-6 leading-relaxed">
                Join thousands of students who have transitioned into high-paying tech careers with our structured roadmap.
              </p>
              <button className="w-full bg-white text-blue-600 hover:bg-slate-100 rounded-xl font-bold py-3 text-xs border-none transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
