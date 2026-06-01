import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteVideoTestimonial } from "@/lib/admin-actions";

export default async function AdminVideosPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const params = await searchParams;

  const videos = await prisma.videoTestimonial.findMany({ orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }] });

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">Videos</Badge>
            <h1 className="text-3xl font-bold text-white">Video testimonials CRUD</h1>
            <p className="max-w-2xl text-slate-300">Manage homepage testimonials, upload new media, and keep the public carousel fresh.</p>
          </div>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
            <Link href="/admin/videos/new">New video</Link>
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
          <CardTitle className="text-xl text-white">All videos</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {videos.length === 0 ? (
            <p className="text-sm text-slate-400">No video testimonials yet.</p>
          ) : (
            videos.map((video) => (
              <div key={video.id} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-white">{video.title}</p>
                    {video.isActive ? <Badge className="bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/15">active</Badge> : <Badge className="bg-white/10 text-slate-200 hover:bg-white/10">inactive</Badge>}
                    <Badge className="bg-white/10 text-slate-200 hover:bg-white/10">{video.duration}</Badge>
                  </div>
                  <p className="text-sm text-slate-400">{video.name} · {video.role} · {video.company}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                    <Link href={`/admin/videos/${video.id}`}>Edit</Link>
                  </Button>
                  <form action={deleteVideoTestimonial}>
                    <input type="hidden" name="videoId" value={video.id} />
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