import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { slugify } from "@/lib/utils";

export const dynamic = "force-dynamic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  PlayCircle,
  Clock,
  ExternalLink,
  Headphones,
  Mic2,
  Radio,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// YouTube Icon helper
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

export default async function PublicPodcastsPage() {
  const podcasts = await prisma.podcast.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
  });

  const featured = podcasts[0] ?? null;
  const remaining = podcasts.slice(1);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      {/* ─── Immersive Hero ─── */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Animated background blurs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-purple-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-indigo-500/15 blur-[100px] rounded-full" />
        </div>

        <div className="container relative mx-auto px-4 text-center max-w-3xl space-y-6">
          <Badge className="bg-purple-500/10 text-purple-400 border-purple-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            <Mic2 className="h-3 w-3 mr-1.5 inline" />
            Podcast Series
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Sky States{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Podcast
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Deep-dive conversations on tech careers, placement strategies,
            industry trends, and real stories from students who made the
            transition into tech.
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Headphones className="h-5 w-5 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">{podcasts.length}</p>
                <p className="text-xs text-slate-400">Episodes</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-300">
              <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <YoutubeIcon className="h-5 w-5 text-red-400" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">YouTube</p>
                <p className="text-xs text-slate-400">Available on</p>
              </div>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div className="flex items-center gap-2 text-slate-300">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Radio className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-white">Live</p>
                <p className="text-xs text-slate-400">New weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Content ─── */}
      <section className="py-16 md:py-24 container mx-auto px-4 max-w-6xl">
        {podcasts.length === 0 ? (
          <div className="rounded-[2.5rem] border border-dashed border-purple-200 bg-white p-16 text-center shadow-lg dark:bg-slate-900 dark:border-slate-800">
            <Mic2 className="h-12 w-12 text-purple-300 mx-auto mb-4" />
            <p className="text-xl font-bold text-slate-800 dark:text-white">
              New episodes are on the way.
            </p>
            <p className="mt-2 text-slate-500">
              We are recording and preparing transcripts for our next release.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {featured && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400">
                    Latest Episode
                  </h2>
                </div>

                <Card className="border-none shadow-2xl shadow-purple-200/30 dark:shadow-none bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden group">
                  <div className="grid grid-cols-1 lg:grid-cols-12">
                    {/* Video / Thumbnail */}
                    <div className="lg:col-span-7 bg-black aspect-video lg:aspect-auto lg:min-h-[380px] relative overflow-hidden">
                      {getYoutubeEmbedUrl(featured.youtubeUrl) ? (
                        <iframe
                          src={getYoutubeEmbedUrl(featured.youtubeUrl)!}
                          title={featured.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full border-none absolute inset-0"
                        />
                      ) : featured.videoUrl ? (
                        <video
                          src={featured.videoUrl}
                          poster={featured.thumbnailUrl || undefined}
                          controls
                          playsInline
                          className="w-full h-full object-contain absolute inset-0"
                        />
                      ) : featured.thumbnailUrl ? (
                        <img
                          src={featured.thumbnailUrl}
                          alt={featured.title}
                          className="w-full h-full object-cover absolute inset-0"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-purple-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center text-slate-400 absolute inset-0">
                          <PlayCircle className="h-16 w-16 text-purple-500/50 mb-3" />
                          <span className="text-sm">Preview coming soon</span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center space-y-5">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-red-500/10 text-red-600 dark:text-red-400 border-none flex items-center gap-1">
                          <YoutubeIcon className="h-3 w-3" />
                          YouTube
                        </Badge>
                        <Badge className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-none flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          Featured
                        </Badge>
                      </div>

                      <Link href={`/podcasts/${slugify(featured.title)}`}>
                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight hover:text-purple-600 dark:hover:text-purple-400 transition-colors line-clamp-2">
                          {featured.title}
                        </h2>
                      </Link>

                      <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-4">
                        {featured.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="h-3.5 w-3.5" />
                        {new Date(featured.createdAt).toLocaleDateString(
                          "en-US",
                          { month: "long", day: "numeric", year: "numeric" }
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        <Button
                          asChild
                          className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg shadow-purple-500/20 border-none px-6 py-5"
                        >
                          <Link href={`/podcasts/${slugify(featured.title)}`} className="flex items-center gap-2">
                            <PlayCircle className="h-5 w-5 text-white" />
                            Watch Episode
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-xl border-slate-200 dark:border-slate-800 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:border-red-500/20 px-6 py-5"
                        >
                          <a
                            href={featured.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <YoutubeIcon className="h-5 w-5 text-red-500" />
                            YouTube
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* ─── All Episodes Grid ─── */}
            {remaining.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <Headphones className="h-5 w-5 text-blue-500" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    More Episodes
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  {remaining.map((podcast) => {
                    const dynamicSlug = slugify(podcast.title);
                    return (
                      <Card
                        key={podcast.id}
                        className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none bg-white dark:bg-slate-900 rounded-3xl overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                      >
                        {/* Video player embedded */}
                        <div className="aspect-video bg-black relative overflow-hidden shrink-0">
                          {getYoutubeEmbedUrl(podcast.youtubeUrl) ? (
                            <iframe
                              src={getYoutubeEmbedUrl(podcast.youtubeUrl)!}
                              title={podcast.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              className="w-full h-full border-none absolute inset-0"
                            />
                          ) : podcast.videoUrl ? (
                            <video
                              src={podcast.videoUrl}
                              poster={podcast.thumbnailUrl || undefined}
                              controls
                              playsInline
                              className="w-full h-full object-contain absolute inset-0"
                            />
                          ) : podcast.thumbnailUrl ? (
                            <img
                              src={podcast.thumbnailUrl}
                              alt={podcast.title}
                              className="w-full h-full object-cover absolute inset-0"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center text-slate-500 absolute inset-0">
                              <PlayCircle className="h-10 w-10 mb-2" />
                              <span className="text-xs">No preview</span>
                            </div>
                          )}
                        </div>

                        {/* Card Body */}
                        <CardContent className="p-6 flex-grow flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <Badge className="bg-red-500/10 text-red-600 dark:text-red-400 border-none flex items-center gap-1 text-[10px]">
                                <YoutubeIcon className="h-2.5 w-2.5" />
                                YouTube
                              </Badge>
                              <span className="text-xs text-slate-400 flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {new Date(podcast.createdAt).toLocaleDateString(
                                  "en-US",
                                  {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                  }
                                )}
                              </span>
                            </div>

                            <Link href={`/podcasts/${dynamicSlug}`} className="block">
                              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-tight line-clamp-2">
                                {podcast.title}
                              </h3>
                            </Link>

                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                              {podcast.description}
                            </p>
                          </div>

                          <div className="pt-6 mt-auto">
                            <Button
                              asChild
                              className="rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-all w-full py-5 border-none"
                            >
                              <Link
                                href={`/podcasts/${dynamicSlug}`}
                                className="flex items-center justify-center gap-2"
                              >
                                <PlayCircle className="h-4 w-4 text-white" />
                                Watch Episode
                                <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ─── Subscribe CTA ─── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5">
              <Mic2 className="h-40 w-40 text-white rotate-12" />
            </div>
            <div className="absolute bottom-0 left-0 p-6 opacity-5">
              <Headphones className="h-32 w-32 text-white -rotate-12" />
            </div>

            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Never Miss an Episode
              </h3>
              <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Subscribe to the Sky States podcast on YouTube to get notified
                when new episodes drop. From career advice to technical
                deep-dives, every episode is designed to help you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  asChild
                  className="bg-white text-purple-600 hover:bg-slate-100 font-semibold border-none rounded-xl px-8 py-6 shadow-lg"
                >
                  <a
                    href="https://youtube.com/@skystatess?si=Wbzo71qEgPedn9Sc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <YoutubeIcon className="h-5 w-5 text-red-500" />
                    Subscribe on YouTube
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold rounded-xl px-8 py-6 transition-all"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
