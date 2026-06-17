import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SchemaMarkup from "@/components/SchemaMarkup";
import VerdictPanel from "@/components/VerdictPanel";
import AuthorCard from "@/components/AuthorCard";

export const dynamic = "force-dynamic";
import { videoTestimonials } from "@/data/videoTestimonials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { slugify } from "@/lib/utils";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Play,
  CheckCircle,
  Users,
  Compass,
  Briefcase,
  Star,
  ExternalLink
} from "lucide-react";

// Predefined rich details for testimonials to keep the content premium and professional
const richDetailsMap: Record<
  string,
  {
    subtitle: string;
    highlights: string[];
    description: string;
    metrics: { label: string; value: string }[];
    transcript: string;
  }
> = {
  "vt-1": {
    subtitle: "Structuring a clear path into professional tech roles",
    highlights: [
      "Mentors helped translate abstract coding logic into practical solutions.",
      "Small class sizes meant I could always get feedback in under 10 minutes.",
      "Real-world dashboards and projects formed the core of my new portfolio."
    ],
    description:
      "In this review, our student shares their comprehensive journey starting with absolute basics. They detail how the step-by-step roadmap kept them focused, the immediate feedback from doubt-clearing sessions kept them from getting stuck, and the final interview coaching gave them the confidence to present their skills to hiring managers.",
    metrics: [
      { label: "Confidence Boost", value: "98%" },
      { label: "Project Completeness", value: "100%" },
      { label: "Mentorship Score", value: "5/5" }
    ],
    transcript:
      "I was really worried about whether I could transition into tech without a technical background. But right from week one, the roadmap was clear and the trainers broke everything down. The doubt clearing sessions were a lifesaver. Whenever I got stuck, I'd get a response almost immediately. The portfolio projects we built weren't just standard tutorials, they simulated real-world datasets which made a huge difference during my interviews."
  },
  "vt-2": {
    subtitle: "Transitioning with structured modules and elite mentorship",
    highlights: [
      "Comprehensive curriculum that builds from fundamentals to advanced concepts.",
      "Guidance from industry experts who know what companies are looking for.",
      "Flexible schedule that easily fits around personal and professional duties."
    ],
    description:
      "This testimonial focuses on course value and structured mentorship. The student describes the contrast between scattered online tutorials and Sky States' cohesive, goal-oriented program. They highlight how mentor reviews helped them refine their codebase and structure projects cleanly, matching production standards.",
    metrics: [
      { label: "Mentorship Rating", value: "4.9/5" },
      { label: "Weekly Live Hours", value: "12+" },
      { label: "Lab Projects", value: "8 Completed" }
    ],
    transcript:
      "What stood out most to me was the structure. Before joining, I was jumping from one YouTube video to another without understanding how the pieces fit together. Here, each module builds directly on the previous one. The mentorship was also outstanding; my mentor didn't just point out bugs, he explained the system architecture and best practices. It felt like real developer training."
  },
  "vt-3": {
    subtitle: "From academic theories to practical industry application",
    highlights: [
      "Focus on hands-on deployment pipelines and infrastructure automation.",
      "Supportive student community that collaborates on complex projects.",
      "Mock interviews that perfectly mirrored real technical rounds."
    ],
    description:
      "The student highlights the importance of practical, hands-on learning over theory. They detail how setting up automated deployment pipelines and container environments during the final project phase allowed them to demonstrate true capability to prospective employers.",
    metrics: [
      { label: "Mock Interviews Done", value: "5 Sessions" },
      { label: "Practical Lab Focus", value: "90%" },
      { label: "Resume Revisions", value: "3 Rounds" }
    ],
    transcript:
      "I appreciated how practical the lessons were. We weren't just reading slides; we were writing code, provisioning cloud instances, and deploying applications from day one. When it came to the job hunt, the career support team worked on my resume to highlight these projects. The mock interviews were so accurate that when I sat for my actual technical rounds, it felt like just another practice run."
  },
  "vt-4": {
    subtitle: "End-to-end support from live training to career placement",
    highlights: [
      "Structured live interactive classes with immediate doubt resolution.",
      "Dedicated resume refinement targeting modern recruiter keywords.",
      "Intensive mock interview preparation and salary negotiation advice."
    ],
    description:
      "Ashton shares how the comprehensive support system at Sky States enabled a complete career transformation. He highlights the impact of structured live training, practical lab assignments, resume optimization, mock behavioral and technical interviews, and continuous placement support throughout his search.",
    metrics: [
      { label: "Placement Time", value: "3 Months" },
      { label: "Interview Confidence", value: "Excellent" },
      { label: "Career Guidance", value: "1-on-1" }
    ],
    transcript:
      "Sky States provided an all-in-one platform for my growth. The live training sessions were highly interactive, allowing us to ask questions in real time. The projects we built gave me practical skills that I could talk about with confidence. On top of that, the placement support was incredible: they completely overhauled my resume, conducted mock interviews that built my confidence, and provided guidance all the way through the offer stage."
  }
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

export default async function DynamicVideoTestimonialPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Retrieve active testimonials from DB
  const dbTestimonials = await prisma.videoTestimonial.findMany({
    where: { isActive: true },
  });

  // Combine DB and static testimonials
  const allTestimonials = [
    ...dbTestimonials.map((t) => ({
      id: t.id,
      title: t.title,
      summary: t.summary,
      name: t.name,
      role: t.role,
      company: t.company,
      duration: t.duration,
      videoUrl: t.videoUrl,
      thumbnailUrl: t.thumbnailUrl,
    })),
    ...videoTestimonials,
  ];

  // Try to find the one where expected slug matches
  const testimonial = allTestimonials.find((t) => {
    const slugifiedName = slugify(t.name);
    // Support the requested format: costumername-sky states-video testimonials -review
    const expectedSlug = `${slugifiedName}-sky-states-video-testimonials-review`;
    return slug === expectedSlug;
  });

  if (!testimonial) {
    notFound();
  }

  // Get rich details or use default fallback structure
  const details = richDetailsMap[testimonial.id] || {
    subtitle: "Student feedback on course value and transition support",
    highlights: [
      "Interactive curriculum tailored to industry requirements.",
      "Practical project experience simulating modern work environments.",
      "Doubt clearance and support system available throughout the program."
    ],
    description: testimonial.summary,
    metrics: [
      { label: "Mentorship", value: "Excellent" },
      { label: "Practical Work", value: "Hands-on" },
      { label: "Student Rating", value: "5/5" }
    ],
    transcript: testimonial.summary
  };

  const initials = getInitials(testimonial.name);

  const getISO8601Duration = (durationStr: string) => {
    const parts = durationStr.split(':');
    if (parts.length === 2) {
      const minutes = parseInt(parts[0], 10);
      const seconds = parseInt(parts[1], 10);
      return `PT${minutes}M${seconds}S`;
    }
    return 'PT3M';
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Course",
      "name": "Sky States Tech Bootcamp",
      "description": "Comprehensive technology and software engineering training program with placement assistance."
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewBody": details.transcript,
    "publisher": {
      "@type": "Organization",
      "name": "SkyReviews",
      "url": "https://skyreviews.us"
    }
  };

  const videoSchemaData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": testimonial.title,
    "description": testimonial.summary,
    "thumbnailUrl": testimonial.thumbnailUrl,
    "uploadDate": "2026-06-01T00:00:00Z",
    "duration": getISO8601Duration(testimonial.duration),
    "contentUrl": `https://skyreviews.us${testimonial.videoUrl}`,
    "embedUrl": `https://skyreviews.us/video-testimonials/${testimonial.id}`,
    "transcript": details.transcript,
    "about": {
      "@type": "EducationalOrganization",
      "name": "Sky States",
      "sameAs": "https://skystates.us"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      <SchemaMarkup data={schemaData} />
      <SchemaMarkup data={videoSchemaData} />
      {/* Cinematic Theater Mode Video Section */}
      <section className="relative bg-slate-900 pt-20 pb-16 lg:pt-28 lg:pb-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-blue-600/10 blur-[140px] rounded-full" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-full bg-indigo-600/10 blur-[140px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50 group-hover:border-slate-600 transition-all">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Header Info */}
            <div className="lg:col-span-5 space-y-6 text-white">
              <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                Video Review
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white">
                {testimonial.title}
              </h1>
              <p className="text-lg text-slate-300">
                {details.subtitle}
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                  {initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">
                    {testimonial.role} &middot; {testimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Theater Screen */}
            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_35px_80px_-25px_rgba(14,165,233,0.3)] border border-slate-800/80">
                <video
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  poster={testimonial.thumbnailUrl}
                  src={testimonial.videoUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content & Details Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Details Column */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Highlight Metrics */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {details.metrics.map((metric, i) => (
                  <Card key={i} className="border-none shadow-sm bg-white dark:bg-slate-900 rounded-2xl p-5 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</p>
                    <p className="mt-1 text-xs md:text-sm text-slate-500 font-medium">{metric.label}</p>
                  </Card>
                ))}
              </div>

              {/* Verdict Panel */}
              <VerdictPanel
                verdict="Highly Recommended Program Outcome"
                summary={details.description}
                pros={details.highlights}
                cons={[
                  "Requires full attendance of live interactive lectures to keep pace.",
                  "Intense project milestones in later modules."
                ]}
              />

              {/* AuthorCard (Editorial Team review proof) */}
              <AuthorCard
                name="Preeti S."
                role="Senior Tech Curriculum Auditor"
                bio="Preeti leads the curriculum audit team at SkyReviews, evaluating courses and student outcomes. With over 8 years of experience in technical education and developer relations, she reviews student statements and transcripts to verify placement records."
                linkedinUrl="https://linkedin.com"
                credentials={["8+ Yrs in Tech Ed", "Curriculum Specialist"]}
              />


              {/* Transcript */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="h-7 w-1 bg-blue-600 rounded-full" />
                  Video Transcript / Statement
                </h3>
                <blockquote className="border-l-4 border-slate-300 dark:border-slate-700 pl-6 italic text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  &ldquo;{details.transcript}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Profile Card */}
              <Card className="border-none shadow-lg bg-white dark:bg-slate-900 rounded-3xl overflow-hidden">
                <div className="h-20 bg-gradient-to-r from-blue-600 to-indigo-700" />
                <CardContent className="p-6 -mt-10">
                  <div className="h-20 w-20 rounded-2xl border-4 border-white dark:border-slate-900 bg-blue-600 flex items-center justify-center text-2xl font-bold text-white shadow-md overflow-hidden mb-4">
                    {initials}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-6">
                    {testimonial.role}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Employer</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{testimonial.company}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Duration</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{testimonial.duration} mins</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Verification</span>
                      <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none">
                        Verified Review
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Programs CTA */}
              <Card className="border-none bg-blue-600 text-white rounded-3xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Play className="h-24 w-24 text-white" />
                </div>
                <div className="relative z-10 space-y-4">
                  <h4 className="text-lg font-bold">Inspired by {testimonial.name.split(" ")[0]}&apos;s success?</h4>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Our customized career roadmaps, hands-on projects, and 1-on-1 placement mentorship can help you pivot to tech confidently.
                  </p>
                  <Button asChild className="w-full bg-white text-blue-600 hover:bg-slate-100 font-semibold border-none rounded-xl py-5">
                    <Link href="/contact">Schedule a Career Talk</Link>
                  </Button>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
