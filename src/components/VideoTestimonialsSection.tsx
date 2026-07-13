"use client";

import { useState } from "react";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { slugify } from "@/lib/utils";

export type TestimonialOrPodcastItem = {
  id: string;
  type: "testimonial" | "podcast";
  title: string;
  summary: string;
  name: string;
  role: string;
  company: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
  linkedinUrl?: string;
};

type VideoTestimonialsSectionProps = {
  items: TestimonialOrPodcastItem[];
};

function getYoutubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
    : null;
}

function getYoutubeThumbnailUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    // hqdefault or 0.jpg are guaranteed to exist on YouTube
    return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
  }
  return null;
}

function getResolvedThumbnail(item: TestimonialOrPodcastItem): string {
  // 1. YouTube video auto-thumbnail
  const ytThumb = getYoutubeThumbnailUrl(item.videoUrl);
  if (ytThumb) return ytThumb;

  // 2. Custom database thumbnail (filter out broken template domains)
  if (item.thumbnailUrl && !item.thumbnailUrl.includes("yourdomain.com") && !item.thumbnailUrl.includes("placeholder")) {
    return item.thumbnailUrl;
  }

  // 3. Editorial premium placeholder images
  const fallbacks: Record<string, string> = {
    "vt-1": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    "vt-2": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    "vt-3": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    "vt-4": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
  };

  return fallbacks[item.id] || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80";
}

export default function VideoTestimonialsSection({ items }: VideoTestimonialsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "testimonial" | "podcast">("all");
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const filteredItems = items.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  const visibleItems = filteredItems.slice(0, visibleCount);

  return (
    <section
      id="video-testimonials"
      className="relative overflow-hidden pt-20 pb-12 bg-transparent"
    >
      <div className="container mx-auto px-4 relative mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-400 font-geist">
            Featured Media & Podcasts
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight font-clash">
            Real voices. Real progress. Real stories from Sky States.
          </h2>
          <p className="text-lg text-slate-300 font-geist">
            Hear from our students and team members through direct video testimonials and in-depth podcast episodes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 shrink-0 bg-white/5 p-1.5 rounded-2xl w-fit border border-white/10 shadow-sm backdrop-blur-md">
          <button
            onClick={() => {
              setActiveFilter("all");
              setVisibleCount(3);
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === "all"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            All Media
          </button>
          <button
            onClick={() => {
              setActiveFilter("testimonial");
              setVisibleCount(3);
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === "testimonial"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Testimonials
          </button>
          <button
            onClick={() => {
              setActiveFilter("podcast");
              setVisibleCount(3);
            }}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === "podcast"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Podcasts
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        {filteredItems.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-white/10 bg-white/5 p-12 text-center backdrop-blur">
            <p className="text-lg font-semibold text-white">Media items are coming soon.</p>
            <p className="mt-2 text-slate-400">
              Add video testimonials or podcasts to show them here.
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleItems.map((item) => {
                const isPlaying = activeVideoId === item.id;
                const youtubeEmbedUrl = getYoutubeEmbedUrl(item.videoUrl);
                const resolvedThumb = getResolvedThumbnail(item);

                return (
                  <div
                    key={item.id}
                    className="flex flex-col h-full bg-slate-900/60 backdrop-blur-md rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_24px_50px_rgba(15,23,42,0.4)] hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    {/* Video Player / Thumbnail Preview */}
                    <div className="relative aspect-video bg-slate-950 overflow-hidden">
                      {isPlaying ? (
                        youtubeEmbedUrl ? (
                          <iframe
                            src={youtubeEmbedUrl}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="h-full w-full border-none absolute inset-0 bg-black"
                          />
                        ) : (
                          <video
                            className="h-full w-full object-contain bg-black"
                            controls
                            autoPlay
                            playsInline
                            src={encodeURI(item.videoUrl)}
                          />
                        )
                      ) : (
                        <div
                          className="relative w-full h-full cursor-pointer overflow-hidden"
                          onClick={() => setActiveVideoId(item.id)}
                        >
                          {/* Thumbnail */}
                          <img
                            src={resolvedThumb}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                            loading="lazy"
                          />
                          
                          {/* Play Button Glassmorphism Overlay */}
                          <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/45 transition-colors duration-300 flex items-center justify-center">
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-blue-600 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                              {/* Pulse effect */}
                              <span className="absolute inset-0 rounded-full bg-white/40 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <PlayCircle className="h-8 w-8 relative z-10" />
                            </div>
                          </div>

                          {/* Duration Badge */}
                          {item.duration && (
                            <div className="absolute left-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-[11px] font-bold text-white backdrop-blur">
                              {item.duration}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Metadata & Content */}
                    <div className="p-7 flex flex-col flex-1 text-left">
                      <div className="flex items-center gap-2.5 mb-4">
                        {item.type === "podcast" ? (
                          <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-[11px] font-bold uppercase tracking-wider font-geist">
                            Podcast
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[11px] font-bold uppercase tracking-wider font-geist">
                            Alumni Video
                          </span>
                        )}
                        <span className="text-xs text-slate-300 font-semibold font-geist flex items-center gap-1.5 flex-wrap">
                          {item.name}
                          {item.linkedinUrl && (
                            <span className="inline-flex items-center bg-blue-500/10 text-blue-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-blue-500/20 gap-0.5 select-none" title="LinkedIn Verified Profile">
                              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                              Verified
                            </span>
                          )}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white leading-snug mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 font-clash">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 font-geist font-light">
                        "{item.summary.length > 180 ? item.summary.substring(0, 180) + '...' : item.summary}"
                      </p>

                      <div className="mt-auto pt-4 border-t border-white/5 flex items-center">
                        {item.type === "podcast" ? (
                          <Link
                            href={`/podcasts/${slugify(item.title)}`}
                            className="inline-flex items-center gap-1.5 text-indigo-400 font-bold text-sm hover:text-indigo-300 transition-colors font-geist"
                          >
                            Read Podcast Details
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </Link>
                        ) : (
                          <Link
                            href={`/${slugify(item.name)}-sky-states-video-testimonials-review`}
                            className="inline-flex items-center gap-1 text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors font-geist"
                          >
                            Read Full Success Story
                            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {visibleCount < filteredItems.length && (
              <div className="flex justify-center pt-4">
                <button
                  onClick={handleShowMore}
                  className="px-8 py-3.5 rounded-full bg-slate-900 border border-white/10 hover:border-blue-500/30 hover:bg-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                >
                  Show More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}




