import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { successStories } from "@/data/success-stories-data";
import { 
  Trophy, 
  ChevronRight, 
  Search, 
  Filter, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  TrendingUp,
  Clock,
  ArrowUpRight
} from "lucide-react";

import { prisma } from "@/lib/prisma";
import { StudentSuccessStory } from "@/data/success-stories-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Student Success Stories & Career Transitions | SkyReviews",
  description: "Read verified, in-depth success stories of students transitioning from non-technical backgrounds to high-paying tech careers in Data Science, Cyber Security, and DevOps.",
};

export default async function SuccessStoriesHub() {
  // 1. Fetch dynamic success stories from the database
  let dbStories: StudentSuccessStory[] = [];
  try {
    const records = await prisma.story.findMany({
      where: { isPublished: true },
      include: {
        alumni: true,
        categories: { include: { category: true } },
      },
      orderBy: { publishedAt: "desc" },
    });

    dbStories = (records as any[]).map((db: any) => {
      const parsedMeta = db.metaJson ? JSON.parse(db.metaJson) : {};
      return {
        id: db.id,
        slug: db.slug,
        name: db.alumni.name,
        photoUrl: db.alumni.imageUrl || db.thumbnailUrl || "",
        program: db.alumni.title,
        track: db.categories[0]?.category.name || "Career Transition",
        previousCareer: db.alumni.bio || "Non-Technical Background",
        currentCareerGoal: db.alumni.title,
        location: db.alumni.location || "United States",
        videoUrl: db.videoUrl || "",
        quickSummary: db.title,
        durationOfLearning: parsedMeta.durationOfLearning || "6 Months",
        projectsCompletedCount: parsedMeta.projectsCompletedCount || 1,
        technologiesLearned: parsedMeta.technologiesLearned || [],
        skillsDeveloped: parsedMeta.skillsDeveloped || [],
        ...parsedMeta,
      } as StudentSuccessStory;
    });
  } catch (error) {
    console.error("Error loading success stories from DB:", error);
  }

  // 2. Merge database stories with static stories, prioritizing DB ones by slug
  const allStoriesMap = new Map<string, StudentSuccessStory>();
  
  // Add static ones first
  successStories.forEach((s) => allStoriesMap.set(s.slug, s));
  
  // Overwrite or add database ones (database takes precedence)
  dbStories.forEach((s) => allStoriesMap.set(s.slug, s));
  
  const allStories = Array.from(allStoriesMap.values());
  const featuredStory = allStories.find((s) => s.slug === "shamim-kazi-data-science-career-transition") || allStories[0];

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 pt-16">
      {/* Premium Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="h-4 w-4" />
            Verified Career Outcomes
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-none">
            Student Success <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            These are not just testimonials. They are complete blueprints of real people transitioning into technology careers from non-technical backgrounds.
          </p>

          {/* Key Placement Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-12 pt-12 border-t border-slate-800">
            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">94.2%</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Placement Rate</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">180 Days</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Avg. Placement Window</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">4.8 / 5</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Alumni Satisfaction</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">$92,500</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Avg. Starting Salary</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Story Banner */}
      {featuredStory && (
        <div className="container mx-auto px-6 -mt-16 relative z-20 mb-20">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold border border-amber-500/20">
                    <Trophy className="h-3.5 w-3.5" />
                    Featured Success Story
                  </span>
                  <span className="text-slate-400 text-xs font-medium">• {featuredStory.durationOfLearning} Program</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                  {featuredStory.name}'s Career Transformation Blueprint
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-6 leading-relaxed">
                  "{featuredStory.quickSummary}"
                </p>

                {/* Profile Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Briefcase className="h-4 w-4 text-blue-500" />
                    <span><strong>Prev:</strong> {featuredStory.previousCareer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <GraduationCap className="h-4 w-4 text-indigo-500" />
                    <span><strong>Program:</strong> {featuredStory.program}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300">
                    SK
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{featuredStory.name}</p>
                    <p className="text-xs text-slate-500">{featuredStory.location}</p>
                  </div>
                </div>
                <Link 
                  href={`/success-stories/${featuredStory.slug}`} 
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all group"
                >
                  Read Case Study
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 relative min-h-[320px] bg-slate-950 flex items-center justify-center">
              <iframe 
                src={featuredStory.videoUrl} 
                title="Shamim Kazi Testimonial"
                className="w-full h-full min-h-[320px] border-none absolute inset-0 opacity-80"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Directory Hub grid */}
      <div className="container mx-auto px-6 pb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-slate-200/50 dark:border-slate-800/50">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Alumni Directory</h3>
            <p className="text-sm text-slate-500">Explore complete blueprints by professional background or technology stack.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input 
                type="text" 
                placeholder="Search alumni, previous careers..." 
                className="pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 text-slate-800 dark:text-slate-200 w-full md:w-64 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allStories.map((story) => (
            <div 
              key={story.id} 
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6">
                {/* Category Badge & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                    {story.track}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {story.durationOfLearning}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                  <Link href={`/success-stories/${story.slug}`}>{story.name}'s Success Roadmap</Link>
                </h4>
                <p className="text-slate-500 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {story.quickSummary}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {story.technologiesLearned.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {story.technologiesLearned.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-medium">
                      +{story.technologiesLearned.length - 4} more
                    </span>
                  )}
                </div>

                {/* Story details */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                    <span><strong>Prev:</strong> {story.previousCareer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <TrendingUp className="h-3.5 w-3.5 text-slate-400" />
                    <span><strong>Goal:</strong> {story.currentCareerGoal}</span>
                  </div>
                </div>
              </div>

              {/* Read Link */}
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">{story.location}</span>
                <Link 
                  href={`/success-stories/${story.slug}`} 
                  className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                >
                  View Blueprint
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
