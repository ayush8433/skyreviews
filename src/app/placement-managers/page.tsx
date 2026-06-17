import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Video,
  MessageSquare,
  ArrowRight,
  Star,
  ShieldCheck,
  Briefcase,
  Award,
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

export default async function PublicPlacementManagersPage() {
  const managers = await prisma.placementManager.findMany({
    include: {
      reviews: true,
      videos: true,
    },
    orderBy: { createdAt: "asc" },
  });

  // Compute global stats
  const totalReviews = managers.reduce((acc, m) => acc + m.reviews.length, 0);
  const totalVideos = managers.reduce((acc, m) => acc + m.videos.length, 0);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      {/* ─── Immersive Hero ─── */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/4 h-1/3 bg-cyan-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative mx-auto px-4 text-center max-w-3xl space-y-6">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Users className="h-3 w-3 mr-1.5 inline" />
            Placement Assistance
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Placement Managers
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dedicated mentors working tirelessly behind the scenes to prepare
            you for interviews, refine your resumes, and connect you with
            top-tier employers.
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">{managers.length}</p>
                <p className="text-xs text-slate-400">Team Members</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-300">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-amber-400" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">{totalReviews}</p>
                <p className="text-xs text-slate-400">Alumni Reviews</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-300">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Video className="h-5 w-5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">{totalVideos}</p>
                <p className="text-xs text-slate-400">Video Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Directory Grid ─── */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-6xl">
        {managers.length === 0 ? (
          <div className="rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-16 text-center shadow-xl">
            <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <p className="text-xl font-bold text-slate-800 dark:text-white">
              Our Placement Managers will be listed shortly.
            </p>
            <p className="mt-2 text-slate-500 dark:text-slate-400">
              We are configuring team profiles.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managers.map((manager) => {
              const initials = getInitials(manager.name);
              const avgRating =
                manager.reviews.length > 0
                  ? (
                      manager.reviews.reduce((a, r) => a + r.rating, 0) /
                      manager.reviews.length
                    ).toFixed(1)
                  : null;

              return (
                <Card
                  key={manager.id}
                  className="border border-slate-100 dark:border-slate-800/80 shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden group hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Gradient Header Banner */}
                    <div className="h-28 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent)]" />
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    </div>

                    <CardContent className="px-8 pb-4 -mt-10 relative flex-grow">
                      {/* Avatar & Badges */}
                      <div className="flex items-end justify-between gap-4 mb-6">
                        <div className="h-20 w-20 md:h-24 md:w-24 rounded-2xl border-4 border-white dark:border-slate-900 bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-2xl flex items-center justify-center shadow-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
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
                        <div className="pb-1 flex flex-col items-end gap-1.5">
                          {avgRating && (
                            <div className="flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded-full">
                              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                              <span className="text-xs font-bold text-amber-600 dark:text-amber-400">
                                {avgRating}
                              </span>
                              <span className="text-[10px] text-slate-400">
                                ({manager.reviews.length})
                              </span>
                            </div>
                          )}
                          <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-none text-[10px] flex items-center gap-1 font-semibold">
                            <ShieldCheck className="h-3 w-3" />
                            Verified Team
                          </Badge>
                        </div>
                      </div>

                      {/* Header Info */}
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {manager.name}
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 text-xs uppercase tracking-wider font-bold mb-4">
                        {manager.role}
                      </p>

                      {/* Bio Details */}
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6">
                        {manager.bio ||
                          "Connecting graduates with modern enterprise hiring partners and offering dedicated career support."}
                      </p>
                    </CardContent>
                  </div>

                  {/* Footer Elements */}
                  <CardContent className="px-8 pb-8 pt-0 mt-auto">
                    {/* Stats & Social links */}
                    <div className="flex items-center gap-6 py-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 font-medium mb-6">
                      <span className="flex items-center gap-1.5">
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                        {manager.reviews.length} Reviews
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Video className="h-4 w-4 text-indigo-500" />
                        {manager.videos.length} Videos
                      </span>
                    </div>

                    {/* View Details button */}
                    <Button
                      asChild
                      className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white rounded-2xl shadow-sm border-none py-5 transition-colors duration-300 font-semibold"
                    >
                      <Link
                        href={`/placement-managers/${manager.id}`}
                        className="flex items-center justify-center gap-2"
                      >
                        <Briefcase className="h-4 w-4" />
                        View Portfolio &amp; Reviews
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Award className="h-40 w-40 text-white rotate-12" />
            </div>
            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Start Your Career Journey?
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Our placement managers have helped hundreds of students
                transition into rewarding tech careers. Schedule a call to learn
                how we can support your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  asChild
                  className="bg-white text-blue-600 hover:bg-slate-100 font-semibold border-none rounded-xl px-8 py-6 shadow-lg"
                >
                  <Link href="/contact">Schedule a Career Talk</Link>
                </Button>
                <Button
                  asChild
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl px-8 py-6 transition-all"
                >
                  <Link href="/submit">Share Your Story</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
