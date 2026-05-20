"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Building, 
  Calendar, 
  Share2, 
  ArrowLeft,
  Quote,
  Clock,
  ChevronRight,
  ExternalLink,
  BookOpen,
  Award,
  Trophy
} from "lucide-react";

// Custom LinkedIn icon since brand icons were removed in lucide-react v1.0+
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// In a real app, this would come from a database/API
const storiesData: Record<string, any> = {
  "sarah-johnson": {
    id: "1",
    title: "From Student to Senior Developer",
    slug: "sarah-johnson",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    company: "Tech Corp",
    location: "San Francisco, CA",
    category: "Career Growth",
    isFeatured: true,
    tags: ["Software Engineering", "Leadership", "Career Change"],
    content: [
      {
        type: "paragraph",
        text: "My journey through SkyStates transformed my career in ways I never imagined possible."
      },
      {
        type: "paragraph",
        text: "When I first joined the program, I was working in a completely different field and had little to no coding experience. The comprehensive curriculum and hands-on approach made all the difference."
      },
      {
        type: "heading",
        text: "The Beginning"
      },
      {
        type: "paragraph",
        text: "Starting from scratch was challenging, but the supportive community and excellent mentors at SkyStates made the transition smooth. I remember spending countless hours practicing coding problems and working on projects that would later become part of my portfolio."
      },
      {
        type: "heading",
        text: "The Learning Process"
      },
      {
        type: "paragraph",
        text: "What sets SkyStates apart is their focus on practical skills. Instead of just theory, we worked on real-world projects that prepared us for actual job scenarios. The peer programming sessions and code reviews helped me improve rapidly."
      },
      {
        type: "quote",
        text: "SkyStates doesn't just teach you to code; they prepare you for a successful career in tech.",
        author: "Sarah Johnson"
      },
      {
        type: "heading",
        text: "Landing the Dream Job"
      },
      {
        type: "paragraph",
        text: "After completing the program, I felt confident enough to apply for senior positions. The career services team helped me polish my resume and prepare for interviews. Within three months, I landed a role at a major tech company as a Senior Software Engineer."
      },
      {
        type: "heading",
        text: "Life After SkyStates"
      },
      {
        type: "paragraph",
        text: "Now, I'm leading development teams and mentoring junior developers. The skills I learned at SkyStates continue to serve me well, and I'm grateful for the foundation they provided."
      },
      {
        type: "heading",
        text: "Advice for Future Students"
      },
      {
        type: "paragraph",
        text: "If you're considering joining SkyStates, my advice is to go all in. The program is intensive but incredibly rewarding. Take advantage of every resource, connect with your peers, and don't be afraid to ask for help."
      },
      {
        type: "paragraph",
        text: "The investment in your education will pay off exponentially."
      }
    ],
    alumni: {
      initials: "SJ",
      name: "Sarah Johnson",
      bio: "Passionate software engineer with expertise in full-stack development and team leadership. Currently focusing on building scalable distributed systems and mentoring the next generation of engineers.",
      role: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    related: [
      {
        id: "2",
        title: "Breaking into Tech from Finance",
        author: "Michael Chen",
        slug: "breaking-into-tech-from-finance",
        initials: "MC"
      },
      {
        id: "3",
        title: "Remote Work Success Story",
        author: "Emily Rodriguez",
        slug: "remote-work-success-story",
        initials: "ER"
      }
    ]
  }
};

export default function StoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  // Get story data or fallback to Sarah Johnson
  const story = storiesData[slug] || storiesData["sarah-johnson"];

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      // In a real app, use a toast
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      {/* Dynamic Header / Hero */}
      <div className="relative overflow-hidden bg-slate-900 pt-24 pb-48 lg:pt-32 lg:pb-64">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        </div>

        <div className="container relative mx-auto px-6">
          <div className="max-w-4xl">
            <Link 
              href="/stories" 
              className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 group-hover:border-slate-500 transition-all">
                <ArrowLeft className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Back to Success Stories</span>
            </Link>

            <div className="flex flex-wrap gap-3 mb-6 animate-fade-in">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                {story.category}
              </Badge>
              {story.isFeatured && (
                <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 text-white">
                  <Trophy className="h-3 w-3 text-amber-400" />
                  Featured Story
                </Badge>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1] animate-fade-in">
              {story.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="h-10 w-10 rounded-full border-2 border-slate-900 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                    {story.alumni.initials}
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white">{story.alumni.name}</span>
                  <span className="text-xs text-slate-400">{story.alumni.role}</span>
                </div>
              </div>
              
              <div className="h-10 w-px bg-slate-800 hidden md:block" />

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{story.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>{story.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 -mt-24 lg:-mt-32 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Article Body */}
          <div className="lg:col-span-8">
            <Card className="border-none shadow-2xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-slate lg:prose-xl dark:prose-invert max-w-none">
                  {story.content.map((block: any, idx: number) => {
                    if (block.type === "heading") {
                      return (
                        <h2 key={idx} className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-6 flex items-center gap-3">
                          <span className="h-8 w-1 bg-blue-500 rounded-full" />
                          {block.text}
                        </h2>
                      );
                    }
                    if (block.type === "quote") {
                      return (
                        <div key={idx} className="my-12 relative p-8 md:p-12 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                          <Quote className="absolute top-6 left-6 h-12 w-12 text-blue-500/10" />
                          <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 italic leading-relaxed relative z-10">
                            "{block.text}"
                          </p>
                          <p className="mt-6 font-bold text-blue-600 dark:text-blue-400">— {block.author}</p>
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg">
                        {block.text}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {story.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors cursor-default border-none">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={handleShare}
                    variant="outline" 
                    className="rounded-full px-6 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 transition-all active:scale-95"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Story
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Stories */}
            <div className="mt-16">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <BookOpen className="h-6 w-6 text-blue-500" />
                  Continue Reading
                </h3>
                <Link href="/stories" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group">
                  View all stories
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {story.related.map((item: any) => (
                  <Link key={item.id} href={`/stories/${item.slug}`} className="group">
                    <Card className="h-full border-none shadow-lg shadow-slate-200/40 dark:shadow-none bg-white dark:bg-slate-900 rounded-2xl overflow-hidden group-hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400">
                            {item.initials}
                          </div>
                          <span className="text-xs font-medium text-slate-500">by {item.author}</span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-blue-600 text-sm font-semibold mt-4">
                          Read Story
                          <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Author Profile Card */}
            <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden sticky top-8">
              <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-700" />
              <CardContent className="p-8 -mt-12">
                <div className="relative mb-6">
                  <div className="h-24 w-24 rounded-2xl border-4 border-white dark:border-slate-900 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-3xl font-bold text-slate-400 shadow-xl overflow-hidden">
                    {story.alumni.imageUrl ? (
                      <Image src={story.alumni.imageUrl} alt={story.alumni.name} fill className="object-cover" />
                    ) : (
                      <span>{story.alumni.initials}</span>
                    )}
                  </div>
                  {story.isFeatured && (
                    <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white p-2 rounded-xl shadow-lg border-2 border-white dark:border-slate-900">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{story.alumni.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">{story.alumni.role}</p>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 italic">
                  "{story.alumni.bio}"
                </p>

                <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <div className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                      <Building className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-sm">
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Company</p>
                      <p className="font-semibold">{story.alumni.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                    <div className="h-8 w-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-blue-500" />
                    </div>
                    <div className="text-sm">
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Location</p>
                      <p className="font-semibold">{story.alumni.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-6 shadow-lg shadow-blue-500/20 border-none">
                    <Link href={story.alumni.linkedin || "#"}>
                      <LinkedInIcon className="h-4 w-4 mr-2 text-white" />
                      <span className="text-white">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full rounded-xl py-6 border-slate-200 dark:border-slate-700">
                    Portfolio
                    <ExternalLink className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Program CTA Card */}
            <Card className="border-none bg-blue-600 rounded-3xl overflow-hidden p-8 text-white relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Trophy className="h-32 w-32 rotate-12 text-white" />
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2 text-white">Ready to start your journey?</h4>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Join Sarah and thousands of other students who transformed their careers through SkyStates.
                </p>
                <Button className="w-full bg-white text-blue-600 hover:bg-slate-100 rounded-xl font-bold py-6 border-none">
                  Explore Programs
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
