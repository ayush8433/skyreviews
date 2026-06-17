"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveVideoTestimonial } from "@/lib/admin-actions";

type VideoRecord = {
  id: string;
  title: string;
  summary: string;
  name: string;
  role: string;
  company: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
  isActive: boolean;
  sortOrder: number;
};

export default function VideoForm({ video }: { video?: VideoRecord | null }) {
  return (
    <form action={saveVideoTestimonial} encType="multipart/form-data" className="space-y-6">
      <input type="hidden" name="videoId" value={video?.id ?? ""} />

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">Video testimonial details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2 lg:col-span-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="title">Title</label>
            <Input id="title" name="title" defaultValue={video?.title ?? ""} placeholder="Testimonial title" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2 lg:col-span-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="summary">Summary</label>
            <Textarea id="summary" name="summary" defaultValue={video?.summary ?? ""} placeholder="Short summary" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="name">Name</label>
            <Input id="name" name="name" defaultValue={video?.name ?? ""} placeholder="Student name" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="role">Role</label>
            <Input id="role" name="role" defaultValue={video?.role ?? ""} placeholder="Current role" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="company">Company</label>
            <Input id="company" name="company" defaultValue={video?.company ?? ""} placeholder="Company" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="duration">Duration</label>
            <Input id="duration" name="duration" defaultValue={video?.duration ?? ""} placeholder="3:42" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="sortOrder">Sort order</label>
            <Input id="sortOrder" name="sortOrder" type="number" defaultValue={video?.sortOrder ?? 0} min={0} className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="videoUrl">Video URL</label>
            <Input id="videoUrl" name="videoUrl" defaultValue={video?.videoUrl ?? ""} placeholder="https://... or /uploads/..." className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="thumbnailUrl">Thumbnail URL</label>
            <Input id="thumbnailUrl" name="thumbnailUrl" defaultValue={video?.thumbnailUrl ?? ""} placeholder="https://... or /uploads/..." className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="videoFile">Upload video file</label>
            <Input id="videoFile" name="videoFile" type="file" accept="video/*" className="border-white/10 bg-slate-950/70 text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="thumbnailFile">Upload thumbnail</label>
            <Input id="thumbnailFile" name="thumbnailFile" type="file" accept="image/*" className="border-white/10 bg-slate-950/70 text-white" />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-200 lg:col-span-2">
            <input type="checkbox" name="isActive" defaultChecked={video?.isActive ?? true} className="h-4 w-4 rounded border-white/20 bg-slate-950/70" />
            Active on the public homepage
          </label>
        </CardContent>
      </Card>

      <div className="flex items-center justify-end gap-3">
        <Button type="submit" className="bg-white text-slate-950 hover:bg-slate-100">
          Save video
        </Button>
      </div>
    </form>
  );
}