"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { savePodcast } from "@/lib/admin-actions";

type PlacementManagerMin = {
  id: string;
  name: string;
  role: string;
};

type PodcastFormProps = {
  podcast?: {
    id: string;
    title: string;
    description: string;
    youtubeUrl: string;
    videoUrl: string | null;
    thumbnailUrl: string | null;
    isActive: boolean;
    placementManagerId?: string | null;
  } | null;
  placementManagers?: PlacementManagerMin[];
};

export default function PodcastForm({ podcast, placementManagers = [] }: PodcastFormProps) {
  return (
    <form action={savePodcast} className="space-y-6 text-white pb-12">
      {podcast?.id && <input type="hidden" name="podcastId" value={podcast.id} />}

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
        <div className="space-y-2">
          <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">
            {podcast ? "Edit" : "New"}
          </Badge>
          <h1 className="text-3xl font-bold text-white">
            {podcast ? `Edit Podcast: ${podcast.title}` : "New Podcast Episode"}
          </h1>
          <p className="max-w-2xl text-slate-300">
            Upload new podcast episodes, configure short teasers, and link to full YouTube videos.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-2">Episode Details</h2>
              
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-300">Podcast Title *</label>
                <Input
                  name="title"
                  required
                  defaultValue={podcast?.title || ""}
                  placeholder="e.g. Navigating Tech Layoffs in 2026"
                  className="border-white/10 bg-slate-900/60 text-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-300">YouTube URL *</label>
                <Input
                  name="youtubeUrl"
                  required
                  type="url"
                  defaultValue={podcast?.youtubeUrl || ""}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="border-white/10 bg-slate-900/60 text-white"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300">Teaser/Short Video URL (MP4)</label>
                  <Input
                    name="videoUrl"
                    defaultValue={podcast?.videoUrl || ""}
                    placeholder="/uploads/teaser.mp4 or external URL"
                    className="border-white/10 bg-slate-900/60 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300">Thumbnail Image URL</label>
                  <Input
                    name="thumbnailUrl"
                    defaultValue={podcast?.thumbnailUrl || ""}
                    placeholder="https://img.youtube.com/vi/.../maxresdefault.jpg"
                    className="border-white/10 bg-slate-900/60 text-white"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-300">Episode Description *</label>
                <Textarea
                  name="description"
                  required
                  rows={6}
                  defaultValue={podcast?.description || ""}
                  placeholder="Summarize what is discussed in this podcast episode..."
                  className="border-white/10 bg-slate-900/60 text-white"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-2">Status & Visibility</h2>
              
              <div className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-slate-950/40">
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-white">Active / Published</p>
                  <p className="text-xs text-slate-400">Control if this episode shows up publicly.</p>
                </div>
                <input
                  type="checkbox"
                  name="isActive"
                  defaultChecked={podcast ? podcast.isActive : true}
                  className="h-5 w-5 rounded border-white/15 bg-slate-950 text-blue-600 focus:ring-blue-500"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-2">Assigned Placement Manager</h2>
              
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-400">Select placement manager:</label>
                <select
                  name="placementManagerId"
                  defaultValue={podcast?.placementManagerId ?? ""}
                  className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white focus:outline-none"
                >
                  <option value="">Unassigned</option>
                  {placementManagers.map((pm) => (
                    <option key={pm.id} value={pm.id} className="text-black dark:text-white">
                      {pm.name} ({pm.role})
                    </option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
            <CardContent className="p-6 flex flex-col gap-3">
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 font-bold py-6 text-white border-none rounded-xl">
                Save Episode
              </Button>
              <Button asChild variant="outline" className="w-full border-white/10 bg-transparent text-white hover:bg-white/10 rounded-xl py-6">
                <a href="/admin/podcasts">Cancel</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
