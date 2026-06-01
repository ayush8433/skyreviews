import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import VideoForm from "../VideoForm";

export const metadata: Metadata = {
  title: "Edit Video | SkyReviews Admin",
};

export default async function EditVideoPage({
  params,
  searchParams,
}: {
  params: Promise<{ videoId: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { videoId } = await params;
  const query = await searchParams;

  const video = await prisma.videoTestimonial.findUnique({ where: { id: videoId } });

  if (!video) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">Edit</Badge>
            <h1 className="text-3xl font-bold text-white">Edit video testimonial</h1>
            <p className="max-w-2xl text-slate-300">Update the media, title, and ordering for this testimonial.</p>
          </div>
          <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
            <Link href="/admin/videos">Back to videos</Link>
          </Button>
        </div>
        {query.error ? (
          <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">{query.error}</div>
        ) : null}
      </section>

      <VideoForm video={video} />
    </div>
  );
}