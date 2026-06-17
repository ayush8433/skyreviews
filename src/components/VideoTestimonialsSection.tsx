"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { VideoTestimonial } from "@/data/videoTestimonials";
import { slugify } from "@/lib/utils";

type VideoTestimonialsSectionProps = {
  items: VideoTestimonial[];
};

export default function VideoTestimonialsSection({ items }: VideoTestimonialsSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollerRef.current) return;
    const amount = direction === "left" ? -420 : 420;
    scrollerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="video-testimonials"
      className="relative overflow-hidden py-24"
      style={{ background: "linear-gradient(180deg, var(--video-surface) 0%, rgba(255,255,255,0.96) 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(1100px 480px at 12% 0%, var(--video-glow), transparent), radial-gradient(900px 420px at 88% 12%, rgba(14, 165, 233, 0.18), transparent)",
        }}
      />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-700/80">
              Video Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Real voices. Real progress. Real stories from Sky States students.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Hear how students describe their learning journeys, the support they received, and the confidence they built along the way.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-blue-200 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur">
              {items.length} videos ready to watch
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-300 bg-white/80 shadow-sm hover:bg-white"
                onClick={() => scrollByAmount("left")}
                aria-label="Scroll video testimonials left"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-300 bg-white/80 shadow-sm hover:bg-white"
                onClick={() => scrollByAmount("right")}
                aria-label="Scroll video testimonials right"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <Button asChild className="rounded-full bg-blue-700 px-5 text-white hover:bg-blue-800">
              <Link href="/#featured-stories">View all stories</Link>
            </Button>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="mt-12 rounded-[2rem] border border-dashed border-blue-200 bg-white/75 p-10 text-center backdrop-blur">
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
                className="group relative w-[min(88vw,420px)] shrink-0 snap-start"
              >
                <Link
                  href={`/${slugify(story.name)}-sky-states-video-testimonials-review`}
                  className="block w-full text-left"
                  aria-label={`Open ${story.title} in full view`}
                >
                  <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.55)] backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="relative aspect-video bg-slate-950">
                      <video
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 bg-black"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={story.thumbnailUrl}
                        src={encodeURI(story.videoUrl)}
                        onMouseEnter={(event) => {
                          void event.currentTarget.play();
                        }}
                        onMouseLeave={(event) => {
                          event.currentTarget.pause();
                          event.currentTarget.currentTime = 0;
                        }}
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                        {story.duration}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white pointer-events-none">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-blue-100/90">Video testimonial</p>
                          <p className="mt-1 text-sm text-blue-50/90">Tap play, then scroll to the next story.</p>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-blue-700 shadow-lg">
                          <PlayCircle className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 text-sm font-bold">
                          {story.name
                            .split(" ")
                            .filter(Boolean)
                            .map((part) => part[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{story.name}</p>
                          <p className="text-xs text-slate-500">{story.role} · {story.company}</p>
                        </div>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-slate-900">{story.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{story.summary}</p>
                      <p className="mt-4 text-sm font-semibold text-blue-700">Click to open full view</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
