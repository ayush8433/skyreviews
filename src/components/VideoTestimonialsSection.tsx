"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import VideoPlayerModal from "@/components/VideoPlayerModal";
import { Button } from "@/components/ui/button";
import type { VideoTestimonial } from "@/data/videoTestimonials";

type VideoTestimonialsSectionProps = {
  items: VideoTestimonial[];
};

export default function VideoTestimonialsSection({ items }: VideoTestimonialsSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<VideoTestimonial | null>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;
    const amount = direction === "left" ? -360 : 360;
    scrollerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="video-testimonials"
      className="relative overflow-hidden py-20"
      style={{ background: "var(--video-surface)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 400px at 10% -10%, var(--video-glow), transparent), radial-gradient(900px 500px at 90% 10%, rgba(14, 165, 233, 0.2), transparent)",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-700/80">
              Video Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Hear the turning points in their own words.
            </h2>
            <p className="text-lg text-slate-600">
              Short, honest stories from alumni who broke into tech. Pick a video,
              press play, and hear exactly how they did it.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-300 bg-white/70 shadow-sm"
                onClick={() => scrollByAmount("left")}
                aria-label="Scroll video testimonials left"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-300 bg-white/70 shadow-sm"
                onClick={() => scrollByAmount("right")}
                aria-label="Scroll video testimonials right"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <Button asChild variant="outline" className="border-blue-600 text-blue-700">
              <Link href="/stories">View all stories</Link>
            </Button>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-dashed border-blue-200 bg-white/70 p-10 text-center">
            <p className="text-lg font-semibold text-slate-800">Videos are coming soon.</p>
            <p className="mt-2 text-slate-600">
              Add entries to the video testimonials list to show them here.
            </p>
          </div>
        ) : (
          <div
            ref={scrollerRef}
            className="mt-12 flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory"
          >
            {items.map((story) => (
              <div
                key={story.id}
                className="group relative w-70 sm:w-80 shrink-0 snap-start"
              >
                <button
                  type="button"
                  className="text-left w-full"
                  onClick={() => setActive(story)}
                  aria-label={`Play ${story.title} video testimonial`}
                >
                  <div className="rounded-3xl border border-white/70 bg-white/80 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.7)] backdrop-blur">
                    <div className="relative aspect-16/10 overflow-hidden rounded-3xl">
                      {story.thumbnailUrl ? (
                        <Image
                          src={story.thumbnailUrl}
                          alt={story.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-linear-to-br from-slate-900 via-blue-900 to-slate-800" />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Video Story</p>
                        <h3 className="mt-2 text-lg font-semibold text-white leading-snug">
                          {story.title}
                        </h3>
                        <p className="mt-1 text-sm text-blue-100/80">
                          {story.name} · {story.role}
                        </p>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-blue-700 shadow-lg transition-transform duration-300 group-hover:scale-110">
                          <Play className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
                          {story.name
                            .split(" ")
                            .filter(Boolean)
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{story.name}</p>
                          <p className="text-xs text-slate-500">{story.company}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-slate-600">{story.summary}</p>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="text-blue-700 font-semibold">Play video</span>
                        <span className="text-slate-500">{story.duration}</span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <VideoPlayerModal
        isOpen={Boolean(active)}
        onClose={() => setActive(null)}
        videoUrl={active?.videoUrl ?? ""}
        title={active?.title ?? ""}
        alumniName={active?.name ?? ""}
      />
    </section>
  );
}
