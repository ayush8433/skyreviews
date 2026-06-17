import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SchemaMarkup from "@/components/SchemaMarkup";

export const dynamic = "force-dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  CheckCircle,
  Star,
  Video,
  MessageSquare,
  ShieldCheck,
  Award,
  Users,
  Briefcase,
  Quote,
} from "lucide-react";

// LinkedIn icon helper
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

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

export default async function PublicPlacementManagerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const manager = await prisma.placementManager.findUnique({
    where: { id },
    include: {
      reviews: {
        orderBy: { createdAt: "desc" },
      },
      videos: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!manager) {
    notFound();
  }

  const initials = getInitials(manager.name);

  // Compute average rating
  const averageRating =
    manager.reviews.length > 0
      ? (
          manager.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
          manager.reviews.length
        ).toFixed(1)
      : "N/A";

  // Star distribution
  const starCounts = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: manager.reviews.filter((r) => r.rating === stars).length,
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": manager.name,
      "jobTitle": manager.role,
      "description": manager.bio || `${manager.name} is a Placement Manager at Sky Reviews.`,
      "image": manager.imageUrl || undefined,
      "sameAs": [],
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WriteAction",
        "userInteractionCount": manager.reviews.length
      },
      ...(manager.reviews.length > 0 ? {
        "review": manager.reviews.map(r => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": r.reviewerName
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": r.rating,
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": r.content,
          "datePublished": r.createdAt.toISOString().split('T')[0]
        }))
      } : {})
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-200">
      <SchemaMarkup data={schemaData} />
      {/* ─── Immersive Portfolio Header ─── */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-28 border-b border-slate-800/60">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <Link
            href="/placement-managers"
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 group-hover:border-slate-600 transition-all">
              <ArrowLeft className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">Back to Directory</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Profile Photo */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="h-36 w-36 md:h-44 md:w-44 rounded-3xl border-4 border-slate-800/80 bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-5xl md:text-6xl flex items-center justify-center shadow-2xl shadow-blue-500/20 overflow-hidden shrink-0">
                {manager.imageUrl ? (
                  <img
                    src={manager.imageUrl}
                    alt={manager.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>{initials}</span>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-9 text-center md:text-left space-y-4 text-white">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
                <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider">
                  Placement Team
                </Badge>
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Verified Profile
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {manager.name}
              </h1>
              <p className="text-lg text-blue-400 font-medium">
                {manager.role}
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-3">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
                  <span className="font-bold text-white text-lg">
                    {averageRating}
                  </span>
                  <span className="text-sm text-slate-400">
                    ({manager.reviews.length} reviews)
                  </span>
                </div>
                <div className="h-5 w-px bg-slate-700" />
                <div className="flex items-center gap-1.5 text-sm text-slate-300 font-medium">
                  <Video className="h-4 w-4 text-blue-400" />
                  {manager.videos.length} Videos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* ─── Left Column: Bio + Reviews ─── */}
          <div className="lg:col-span-8 space-y-12">
            {/* Biography */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="h-7 w-1.5 bg-blue-600 rounded-full" />
                About &amp; Approach
              </h2>
              <Card className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-[2rem] p-8">
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-normal">
                  {manager.bio ||
                    `${manager.name} works closely with students, providing specialized mentorship sessions, scheduling mock coding/technical interview reviews, and refining resumes to target automated hiring systems.`}
                </p>
              </Card>
            </div>

            {/* Reviews Section */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                <span className="h-7 w-1.5 bg-blue-600 rounded-full" />
                Alumni Reviews
                <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-none ml-2">
                  {manager.reviews.length} total
                </Badge>
              </h2>

              {/* Rating Summary Card */}
              {manager.reviews.length > 0 && (
                <Card className="border-none shadow-md bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-slate-900 dark:to-slate-800/30 rounded-[2rem] p-8">
                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <div className="text-center sm:border-r sm:border-slate-200 dark:sm:border-slate-800 sm:pr-8">
                      <p className="text-6xl font-black text-blue-600 dark:text-blue-400">
                        {averageRating}
                      </p>
                      <div className="flex items-center gap-0.5 mt-2 justify-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4.5 w-4.5 ${
                              i < Math.round(Number(averageRating))
                                ? "text-amber-400 fill-amber-400"
                                : "text-slate-300 dark:text-slate-700"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                        Based on {manager.reviews.length} reviews
                      </p>
                    </div>
                    <div className="flex-1 w-full space-y-2.5">
                      {starCounts.map(({ stars, count }) => (
                        <div
                          key={stars}
                          className="flex items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-400"
                        >
                          <span className="w-3 text-right">
                            {stars}
                          </span>
                          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                          <div className="flex-1 h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-amber-400 rounded-full transition-all duration-500"
                              style={{
                                width:
                                  manager.reviews.length > 0
                                    ? `${(count / manager.reviews.length) * 100}%`
                                    : "0%",
                              }}
                            />
                          </div>
                          <span className="w-4 text-right">{count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              )}

              {/* Individual Reviews */}
              {manager.reviews.length === 0 ? (
                <Card className="border-none shadow-sm bg-white dark:bg-slate-900 rounded-[2rem] p-8 text-center">
                  <MessageSquare className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    No written reviews submitted yet for {manager.name}.
                  </p>
                </Card>
              ) : (
                <div className="space-y-6">
                  {manager.reviews.map((review) => (
                    <Card
                      key={review.id}
                      className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-[2rem] p-6 relative hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
                    >
                      <div className="absolute top-5 right-6 opacity-[0.03] dark:opacity-[0.05]">
                        <Quote className="h-20 w-20 text-blue-600" />
                      </div>
                      <div className="space-y-4 relative">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-500/10">
                              {getInitials(review.reviewerName)}
                            </div>
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white text-base">
                                {review.reviewerName}
                              </p>
                              {review.reviewerRole && (
                                <p className="text-xs text-slate-500 dark:text-slate-400">
                                  {review.reviewerRole}
                                </p>
                              )}
                            </div>
                          </div>
                          <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none flex items-center gap-1 py-1 font-semibold text-xs shrink-0">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Verified Alum
                          </Badge>
                        </div>

                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star
                              key={idx}
                              className={`h-4.5 w-4.5 ${
                                idx < review.rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-slate-200 dark:text-slate-800"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                          &ldquo;{review.content}&rdquo;
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ─── Right Column: Videos + CTA ─── */}
          <div className="lg:col-span-4 space-y-8">
            {/* Video Testimonials */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Video className="h-5 w-5 text-blue-600" />
                Video Testimonials
              </h3>

              {manager.videos.length === 0 ? (
                <Card className="border-none shadow-sm bg-white dark:bg-slate-900 rounded-[2rem] p-6 text-center">
                  <Video className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    No video testimonials yet.
                  </p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {manager.videos.map((vid) => (
                    <Card
                      key={vid.id}
                      className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300"
                    >
                      <div className="aspect-video bg-black relative">
                        <video
                          src={vid.videoUrl}
                          poster={vid.thumbnailUrl || undefined}
                          controls
                          playsInline
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="p-4">
                        <p className="font-semibold text-slate-900 dark:text-white text-sm line-clamp-2 leading-snug">
                          {vid.title}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Stats Card */}
            <Card className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-slate-900 dark:text-white text-lg">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Average Rating</span>
                    <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1">
                      <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                      {averageRating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Total Reviews</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{manager.reviews.length}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Video Sessions</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{manager.videos.length} videos</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 dark:text-slate-400">Status</span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4" />
                      Verified
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Support CTA Card */}
            <Card className="border border-none bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-[2rem] overflow-hidden shadow-xl p-8 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_60%)]" />
              <div className="relative z-10 space-y-6">
                <div className="h-12 w-12 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Award className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl leading-tight">Ready to start your journey?</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Get custom career guidance, resume optimization, and placement training from industry experts like {manager.name}.
                  </p>
                </div>
                <Link href="/student-reviews/submit" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white border-none rounded-2xl py-6 font-semibold shadow-lg shadow-blue-500/20 transition-all duration-300">
                    Apply Now
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}


