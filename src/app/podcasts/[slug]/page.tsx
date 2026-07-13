import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PlayCircle,
  Clock,
  ExternalLink,
  Headphones,
  Mic2,
  ArrowLeft,
  Calendar,
  ChevronRight,
  BookOpen
} from "lucide-react";
import { slugify } from "@/lib/utils";
import { podcastsRichData, PodcastRichData } from "@/data/podcasts-rich-data";
import {
  PodcastHero,
  ExecutiveSummary,
  StudentProfile,
  CareerTimeline,
  PodcastTranscript,
  ExpandedTopics,
  KeyLessons,
  TechnologiesCovered,
  ProjectsSection,
  InterviewPrepGuide,
  FAQSection,
  QuotesSection
} from "@/components/podcasts/components";

interface Props {
  params: Promise<{ slug: string }>;
}

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

function getYoutubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : null;
}

function getOrGenerateRichData(podcast: any, slug: string): PodcastRichData {
  const lookupSlug = slug.includes("peter") 
    ? "sky-states-review-peter-journey-technology-professional" 
    : slug.includes("shamim")
    ? "sky-states-review-shamim-kazi-data-science-transition"
    : slug;
  if (podcastsRichData[lookupSlug]) {
    return podcastsRichData[lookupSlug];
  }
  
  // Clean student name
  let name = "Industry Expert";
  if (podcast.title.includes(":")) {
    name = podcast.title.split(":")[0].replace("How", "").replace("Transitioned", "").trim();
  } else if (podcast.title.includes("From")) {
    name = podcast.title.split("From")[0].trim() || "Student Story";
  }

  return {
    slug,
    studentName: name,
    studentPhoto: podcast.thumbnailUrl || "https://placehold.co/400x400/8b5cf6/ffffff?text=Student+Story",
    currentRole: "Technology Professional",
    previousBackground: "Non-Technical Background",
    duration: "35-50 minutes",
    keyOutcomeSummary: podcast.description,
    executiveSummary: {
      background: "Determined career transitioner looking to enter high-demand technical roles.",
      problem: "Overcoming lack of traditional technical experience and mastering modern industry tools.",
      journey: "Acquired database query logic, fundamental programming syntax, and hands-on portfolio experience.",
      skills: ["Database Scripting", "Logic and Programming", "Technical Resumes", "Interview Practice"],
      projects: ["Industry Capstone Project", "Data Management Implementation"],
      outcomes: "Transitioned to active tech operations with enhanced career progression.",
      lessons: "Continuous daily practice, peer review, and mockup interviews are essential."
    },
    profile: {
      name: name,
      background: "Professional Background",
      course: "Sky States Professional Training Track",
      technologies: ["SQL", "Python", "Dashboard Tools"],
      projects: [
        { title: "Enterprise Database Pipeline", description: "Optimized relational database ingestion using structured queries." }
      ],
      goals: "To continuously develop robust solutions and contribute to analytics and dev teams."
    },
    timeline: [
      { title: "Initial Decision", description: "Recognized need for career update and structured skill growth." },
      { title: "Skills & Core Foundations", description: "Learned database scripting, syntax rules, and data structures." },
      { title: "Practical Application", description: "Built portfolio projects simulating real-world operational challenges." },
      { title: "Interviews & Job Transition", description: "Collaborated with coaching staff on mock rounds and accepted modern role." }
    ],
    transcript: [
      { speaker: "Host", text: "Welcome to Sky States Career Journeys. Today we discuss transitioning into modern technology roles." },
      { speaker: "Guest", text: `Thanks! It was a major step starting with no background, but the curriculum and guidance made all the difference.` },
      { speaker: "Host", text: "What is your main advice for other aspiring professionals?" },
      { speaker: "Guest", text: "Focus heavily on SQL and clean problem-solving logic. Don't skip the project phase." }
    ],
    expandedTopics: [
      {
        title: "Relational Query Languages & Database Analytics",
        content: "Understanding database relations, tables, primary keys, and data relationships is crucial. Learning SQL opens access to enterprise data warehouses where all key records are stored."
      }
    ],
    keyLessons: [
      { title: "Consistency is Key", content: "Dedicating a small amount of focused time every single day ensures syntax retention and long-term analytical habits." }
    ],
    technologiesCovered: [
      {
        name: "SQL",
        overview: "Relational Database Scripting language.",
        whyMatters: "Universal standard for data storage and extraction.",
        whereUsed: "Corporate warehouses, data cleaning, dashboard ingestion.",
        resources: ["W3Schools SQL", "SQLZoo Tutorial"],
        relationToGoals: "Core data retrieval asset."
      }
    ],
    projects: [
      {
        title: "Relational Database Performance Pipeline",
        problem: "Simulated analytics system requiring optimized indexing and aggregation.",
        dataset: "Sample customer transaction database with 5,000 records.",
        tools: ["SQL", "Relational Database Client"],
        architecture: "Database views, indexing setups, and aggregations for reporting.",
        outcome: "Enhanced analytical processing speeds by 25%.",
        businessValue: "Improved response time for operational business intelligence.",
        skills: "RDBMS, Query Optimization, Star Schema.",
        portfolioRelevance: "Proves database architecture knowledge and analytical querying capability."
      }
    ],
    interviewPrep: {
      resume: "Quantify your achievements. Reposition non-tech management tasks to showcase structured thinking and process improvement.",
      portfolio: "Publish clean GitHub repositories with detailed readme files describing architecture and conclusions.",
      mocks: "Complete video mock runs to review body language and communication flow.",
      behavioral: "Structure answers using STAR (Situation, Task, Action, Result) to highlight ownership.",
      technical: "Practice dry-running queries and explaining technical logic clearly.",
      mistakes: "Memorizing code without understanding core principles, or failing to clarify requirements.",
      strategies: "Solve LeetCode or query exercises daily to keep skills sharp.",
      advice: "Recruiters want adaptable problem solvers. Be transparent about your thought process."
    },
    faqs: [
      { q: "Is prior computer science experience mandatory?", a: "No. The program is designed specifically to help non-technical candidates learn step-by-step." }
    ],
    quotes: [
      "The best way to build confidence is to write code and fix errors yourself.",
      "Don't worry about learning everything at once. Focus on the next logical step."
    ]
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const podcasts = await prisma.podcast.findMany({
    where: { isActive: true },
  });

  const podcast = podcasts.find((p) => {
    const s = slugify(p.title);
    return s === slug || 
      (slug === "sky-states-review-peter-journey-technology-professional" && s.includes("peter")) ||
      (slug === "how-peter-s-sky-states-journey-transitioned-to-technology-professional" && s.includes("peter")) ||
      (slug === "sky-states-review-shamim-kazi-data-science-transition" && s.includes("shamim")) ||
      (slug === "how-shamim-kazi-transitioned-from-a-non-technical-background-to-data-science-his-complete-learning-journey" && s.includes("shamim")) ||
      (slug === "how-industry-expert-transitioned-to-technology-professional-shamim-kazi-case-study" && s.includes("shamim"));
  });

  if (!podcast) {
    return {};
  }

  const title = `${podcast.title} | Sky Reviews`;
  const description = podcast.description.length > 155 
    ? `${podcast.description.slice(0, 155)}...` 
    : podcast.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://skyreviews.us/podcasts/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://skyreviews.us/podcasts/${slug}`,
      siteName: "Sky Reviews",
      images: podcast.thumbnailUrl ? [{ url: podcast.thumbnailUrl }] : [],
      locale: "en_US",
      type: "video.episode",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: podcast.thumbnailUrl ? [podcast.thumbnailUrl] : [],
    },
  };
}

export default async function PodcastDetailPage({ params }: Props) {
  const { slug } = await params;
  const podcasts = await prisma.podcast.findMany({
    where: { isActive: true },
  });

  const podcast = podcasts.find((p) => {
    const s = slugify(p.title);
    return s === slug || 
      (slug === "sky-states-review-peter-journey-technology-professional" && s.includes("peter")) ||
      (slug === "how-peter-s-sky-states-journey-transitioned-to-technology-professional" && s.includes("peter")) ||
      (slug === "sky-states-review-shamim-kazi-data-science-transition" && s.includes("shamim")) ||
      (slug === "how-shamim-kazi-transitioned-from-a-non-technical-background-to-data-science-his-complete-learning-journey" && s.includes("shamim")) ||
      (slug === "how-industry-expert-transitioned-to-technology-professional-shamim-kazi-case-study" && s.includes("shamim"));
  });

  if (!podcast) {
    notFound();
  }

  // Fetch recent podcasts (excluding current)
  const recentPodcasts = await prisma.podcast.findMany({
    where: {
      isActive: true,
      id: { not: podcast.id },
    },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  const embedUrl = getYoutubeEmbedUrl(podcast.youtubeUrl);
  const richData = getOrGenerateRichData(podcast, slug);

  // Schema.org structured data modeling: PodcastEpisode, VideoObject, FAQPage, BreadcrumbList
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://skyreviews.us"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Podcasts",
          "item": "https://skyreviews.us/podcasts"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": podcast.title,
          "item": `https://skyreviews.us/podcasts/${slug}`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "PodcastEpisode",
      "name": podcast.title,
      "description": podcast.description,
      "datePublished": podcast.createdAt.toISOString(),
      "url": `https://skyreviews.us/podcasts/${slug}`,
      "partOfSeries": {
        "@type": "PodcastSeries",
        "name": "Sky States Career Transitions",
        "url": "https://skyreviews.us/podcasts"
      },
      "actor": {
        "@type": "Person",
        "name": richData.studentName,
        "jobTitle": richData.currentRole
      },
      "associatedMedia": {
        "@type": "VideoObject",
        "name": podcast.title,
        "description": podcast.description,
        "thumbnailUrl": podcast.thumbnailUrl || "https://skyreviews.us/default-podcast-thumbnail.jpg",
        "uploadDate": podcast.createdAt.toISOString(),
        "embedUrl": embedUrl || podcast.youtubeUrl,
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": richData.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pt-20">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 max-w-6xl py-8">
        {/* Breadcrumb Navigation for Accessibility & SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-purple-650 transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/podcasts" className="hover:text-purple-650 transition-colors">Podcasts</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[200px] md:max-w-none" aria-current="page">
            {podcast.title}
          </span>
        </nav>

        {/* Back Link */}
        <Link
          href="/podcasts"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-purple-605 dark:text-slate-400 dark:hover:text-purple-400 transition-colors mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to all episodes
        </Link>

        {/* --- HERO SECTION --- */}
        <PodcastHero data={richData} />

        {/* Main Grid */}
        <div className="space-y-12">
          {/* Top Row: Video Player + Episode Notes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 xl:col-span-8 flex">
              {/* Player Container */}
              <div className="rounded-[2rem] overflow-hidden bg-black aspect-video shadow-2xl relative border border-slate-200 dark:border-slate-800 w-full flex">
                {embedUrl ? (
                  <iframe
                    src={embedUrl}
                    title={podcast.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-none min-h-[350px]"
                  />
                ) : podcast.videoUrl ? (
                  <video
                    src={podcast.videoUrl}
                    poster={podcast.thumbnailUrl || undefined}
                    controls
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-slate-950 flex flex-col items-center justify-center p-6 text-center text-slate-400">
                    <PlayCircle className="h-16 w-16 text-purple-500/50 mb-3" />
                    <span className="text-sm">Preview video coming soon</span>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 xl:col-span-4 flex">
              {/* Info and Description */}
              <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-8 shadow-xl shadow-slate-100/50 dark:shadow-none border border-slate-100 dark:border-slate-800 w-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="bg-red-50/10 text-red-600 dark:text-red-400 border-none flex items-center gap-1.5 py-1 px-3">
                      <YoutubeIcon className="h-3 w-3" />
                      Watch
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(podcast.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4">
                    <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                      Episode Notes
                    </h2>
                    <div className="text-slate-650 dark:text-slate-350 text-sm leading-relaxed whitespace-pre-wrap max-h-[300px] overflow-y-auto pr-1">
                      {podcast.description}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                  <Button
                    asChild
                    className="w-full bg-red-650 hover:bg-red-700 text-white rounded-xl shadow-lg shadow-red-500/20 border-none px-6 py-5"
                  >
                    <a
                      href={podcast.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <YoutubeIcon className="h-5 w-5 text-white" />
                      Watch on YouTube
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column sections layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column (Student Case Study Details) */}
            <div className="space-y-8">
              {/* --- EXECUTIVE SUMMARY --- */}
              <ExecutiveSummary data={richData} />

              {/* --- STUDENT PROFILE --- */}
              <StudentProfile data={richData} />

              {/* --- CAREER TIMELINE --- */}
              <CareerTimeline timeline={richData.timeline} />

              {/* --- PROJECTS SECTION --- */}
              <ProjectsSection projects={richData.projects} />

              {/* --- QUOTES --- */}
              <QuotesSection quotes={richData.quotes} />
            </div>

            {/* Right Column (Practical Guides / Lessons Learned) */}
            <div className="space-y-8">
              {/* --- INTERVIEW PREPARATION --- */}
              <InterviewPrepGuide prep={richData.interviewPrep} />

              {/* --- TECHNOLOGIES COVERED --- */}
              <TechnologiesCovered tech={richData.technologiesCovered} />

              {/* --- EXPANDED TOPICS --- */}
              <ExpandedTopics topics={richData.expandedTopics} />

              {/* --- KEY LESSONS --- */}
              <KeyLessons lessons={richData.keyLessons} />

              {/* --- TRANSCRIPT --- */}
              <PodcastTranscript transcript={richData.transcript} />

              {/* --- FAQs --- */}
              <FAQSection faqs={richData.faqs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
