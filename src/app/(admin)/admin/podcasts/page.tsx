import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deletePodcast } from "@/lib/admin-actions";
import { Video, ExternalLink } from "lucide-react";

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

export default async function AdminPodcastsPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const params = await searchParams;

  const podcasts = await prisma.podcast.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6 text-white">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">Podcasts</Badge>
            <h1 className="text-3xl font-bold text-white">Podcast Episodes CRUD</h1>
            <p className="max-w-2xl text-slate-300">
              Manage video podcast episodes, link YouTube URLs, and preview files.
            </p>
          </div>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
            <Link href="/admin/podcasts/new">New podcast</Link>
          </Button>
        </div>
        {params.message ? (
          <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">{params.message}</div>
        ) : null}
        {params.error ? (
          <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">{params.error}</div>
        ) : null}
      </section>

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">All Podcast Episodes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {podcasts.length === 0 ? (
            <p className="text-sm text-slate-400">No podcasts added yet.</p>
          ) : (
            podcasts.map((podcast: any) => (
              <div key={podcast.id} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-white text-lg">{podcast.title}</p>
                    {podcast.isActive ? (
                      <Badge className="bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/15">Active</Badge>
                    ) : (
                      <Badge className="bg-white/10 text-slate-200 hover:bg-white/10">Draft</Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-400 mt-1 max-w-xl truncate">{podcast.description}</p>
                  
                  <div className="flex items-center gap-4 mt-3 text-xs text-slate-300">
                    <a
                      href={podcast.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-red-400 transition-colors"
                    >
                      <YoutubeIcon className="h-3.5 w-3.5 text-red-500" />
                      YouTube Link
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    {podcast.videoUrl && (
                      <span className="flex items-center gap-1 text-sky-400">
                        <Video className="h-3.5 w-3.5" />
                        Teaser Uploaded
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                    <Link href={`/admin/podcasts/${podcast.id}`}>Edit</Link>
                  </Button>
                  <form action={deletePodcast}>
                    <input type="hidden" name="podcastId" value={podcast.id} />
                    <Button type="submit" variant="outline" className="border-white/15 bg-transparent text-rose-200 hover:bg-rose-500 hover:text-white">Delete</Button>
                  </form>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
