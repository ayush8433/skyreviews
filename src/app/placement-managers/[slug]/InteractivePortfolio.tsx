"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function getYoutubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11
    ? `https://www.youtube.com/embed/${match[2]}`
    : null;
}

interface Review {
  id: string;
  reviewerName: string;
  reviewerRole: string | null;
  content: string;
  rating: number;
  createdAt: Date;
}

interface VideoTestimonial {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string | null;
}

interface AssignedVideoTestimonial {
  id: string;
  title: string;
  summary: string;
  name: string;
  role: string;
  company: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
}

interface AssignedStory {
  id: string;
  title: string;
  slug: string;
  alumni: {
    name: string;
    title: string;
    company: string | null;
    imageUrl: string | null;
  };
}

interface AssignedPodcast {
  id: string;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailUrl: string | null;
}

interface PlacementManager {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  imageUrl: string | null;
  linkedinUrl: string | null;
  assignedStories?: AssignedStory[];
  assignedVideos?: AssignedVideoTestimonial[];
  assignedPodcasts?: AssignedPodcast[];
}

interface InteractivePortfolioProps {
  manager: PlacementManager;
  reviews: Review[];
  videos: VideoTestimonial[];
  averageRating: string;
  starCounts: { stars: number; count: number }[];
  allManagers: PlacementManager[];
}

export default function InteractivePortfolio({
  manager,
  reviews,
  videos,
  averageRating,
  starCounts,
  allManagers,
}: InteractivePortfolioProps) {
  const [activeTab, setActiveTab] = useState<"strategy" | "stories" | "reviews" | "videos" | "podcasts">("strategy");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [activeTimelineStep, setActiveTimelineStep] = useState<number>(0);
  
  // Password Protection Gate States
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const sessionKey = `portfolio_unlocked_${manager.id}`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const unlocked = sessionStorage.getItem(sessionKey);
      if (unlocked === "true") {
        setIsUnlocked(true);
      }
    }
  }, [sessionKey]);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    // Use only the first name (lowercase) + @123
    const firstName = manager.name.split(" ")[0].toLowerCase();
    const expectedPassword = `${firstName}@123`;
    
    if (password === expectedPassword) {
      setIsUnlocked(true);
      setPasswordError("");
      if (typeof window !== "undefined") {
        sessionStorage.setItem(sessionKey, "true");
      }
    } else {
      setPasswordError("ACCESS DENIED // INVALID ACCESS KEY");
    }
  };

  const filteredReviews = selectedRating
    ? reviews.filter((r) => r.rating === selectedRating)
    : reviews;

  const timelineSteps = [
    {
      title: "Intake & Profile Optimization",
      desc: "Perform a thorough intake assessment to map skills against tech recruitment patterns. Re-write the resume to optimize for Applicant Tracking Systems (ATS) and frame career history for American recruiter expectations.",
    },
    {
      title: "Interactive Mock Loops",
      desc: "Schedule mock coding and technical interview sessions. Provide in-depth feedback on cloud architecture diagrams, DevOps automation explanations, and technical presentations.",
    },
    {
      title: "Warm Employer Submissions",
      desc: "Leverage direct warm connections with hiring partners to bypass generic job application queues. Submit optimized profiles directly to engineering managers and talent acquisition teams.",
    },
    {
      title: "Offer & Compensation Negotiation",
      desc: "Coach candidates through behavioral negotiation sequences. Analyze total compensation packages (base salary, sign-on bonuses, and equity) to maximize final offers.",
    },
  ];

  const nodeColors = [
    { name: "AMBER NODE", hex: "#FFBF00", bg: "bg-[#FFBF00]" },
    { name: "RED NODE", hex: "#FF4B4B", bg: "bg-[#FF4B4B]" },
    { name: "TEAL NODE", hex: "#00dfc6", bg: "bg-[#00dfc6]" },
    { name: "COGNAC NODE", hex: "#A36B4D", bg: "bg-[#A36B4D]" },
    { name: "VIOLET NODE", hex: "#8B5CF6", bg: "bg-[#8B5CF6]" },
    { name: "GREEN NODE", hex: "#22C55E", bg: "bg-[#22C55E]" },
  ];

  const assignedStories = manager.assignedStories || [];
  const assignedVideos = manager.assignedVideos || [];
  const assignedPodcasts = manager.assignedPodcasts || [];

  if (!isUnlocked) {
    return (
      <div className="max-w-md mx-auto my-12 hairline bg-slate-900/60 backdrop-blur-md p-8 border-t-2 border-t-[#00dfc6] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,229,204,0.05),transparent_70%)] pointer-events-none" />
        <div className="relative z-10 space-y-6">
          <div className="flex justify-center">
            <svg className="h-10 w-10 text-[#00dfc6] glow-teal animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h3 className="font-mono-tech text-sm uppercase tracking-[0.3em] text-[#00dfc6]">// SECURITY PROTOCOL</h3>
            <p className="font-geist text-xs text-[#c4c7c7]">
              Enter the access key to decrypt and view the portfolio for <br/>
              <strong className="text-white">{manager.name}</strong>.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ENTER ACCESS KEY"
                className="w-full h-11 border border-white/10 bg-slate-950/60 text-center text-white font-mono-tech text-sm tracking-widest outline-none focus:border-[#00dfc6] transition-all rounded-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-[#00dfc6] transition-colors"
                title={showPassword ? "Hide Password" : "Show Password"}
              >
                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && (
              <p className="font-mono-tech text-[10px] text-[#FF4B4B] tracking-wider uppercase">
                {passwordError}
              </p>
            )}
            <button
              type="submit"
              className="w-full h-11 bg-[#00dfc6] hover:bg-[#00c5af] text-[#00201b] font-mono-tech text-xs tracking-widest uppercase font-bold transition-all rounded-none"
            >
              DECRYPT_NODE_DATA
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16">
      {/* ─── Main Content Layout ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Dynamic Tabs and Details */}
        <div className="lg:col-span-8 space-y-8">
          {/* Custom High-Tech Tabs */}
          <div className="flex border-b border-white/10 gap-6 font-mono-tech text-xs tracking-widest uppercase overflow-x-auto pb-1">
            <button
              onClick={() => setActiveTab("strategy")}
              className={`pb-4 transition-all border-b-2 flex items-center gap-2 shrink-0 ${
                activeTab === "strategy"
                  ? "border-[#00dfc6] text-[#00dfc6] glow-teal"
                  : "border-transparent text-[#c4c7c7] hover:text-white"
              }`}
            >
              [ APPROACH ]
            </button>
            <button
              onClick={() => setActiveTab("stories")}
              className={`pb-4 transition-all border-b-2 flex items-center gap-2 shrink-0 ${
                activeTab === "stories"
                  ? "border-[#00dfc6] text-[#00dfc6] glow-teal"
                  : "border-transparent text-[#c4c7c7] hover:text-white"
              }`}
            >
              [ SUCCESS STORIES ({assignedStories.length}) ]
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-4 transition-all border-b-2 flex items-center gap-2 shrink-0 ${
                activeTab === "reviews"
                  ? "border-[#00dfc6] text-[#00dfc6] glow-teal"
                  : "border-transparent text-[#c4c7c7] hover:text-white"
              }`}
            >
              [ REVIEWS ({reviews.length}) ]
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`pb-4 transition-all border-b-2 flex items-center gap-2 shrink-0 ${
                activeTab === "videos"
                  ? "border-[#00dfc6] text-[#00dfc6] glow-teal"
                  : "border-transparent text-[#c4c7c7] hover:text-white"
              }`}
            >
              [ VIDEO LOGS ({videos.length + assignedVideos.length}) ]
            </button>
            {assignedPodcasts.length > 0 && (
              <button
                onClick={() => setActiveTab("podcasts")}
                className={`pb-4 transition-all border-b-2 flex items-center gap-2 shrink-0 ${
                  activeTab === "podcasts"
                    ? "border-[#00dfc6] text-[#00dfc6] glow-teal"
                    : "border-transparent text-[#c4c7c7] hover:text-white"
                }`}
              >
                [ PODCASTS ({assignedPodcasts.length}) ]
              </button>
            )}
          </div>

          {/* ─── Tab Content: Approach ─── */}
          {activeTab === "strategy" && (
            <div className="space-y-10">
              {/* Bio block */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00dfc6] uppercase">
                  <span>// CORE STRATEGY</span>
                </div>
                <div className="hairline bg-white/[0.02] p-8 rounded-none border-l-2 border-l-[#00dfc6] font-geist text-base leading-relaxed text-[#c4c7c7] whitespace-pre-wrap">
                  {manager.bio || `${manager.name} is dedicated to refining candidate positioning and navigating C-Suite and technical recruitment environments.`}
                </div>
              </div>

              {/* Interactive Timeline */}
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#00dfc6] uppercase">
                  <span>// PLACEMENT TIMELINE</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Step Buttons */}
                  <div className="md:col-span-5 space-y-3 font-geist">
                    {timelineSteps.map((step, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTimelineStep(idx)}
                        className={`w-full text-left p-4 rounded-none border transition-all duration-300 flex items-center justify-between group ${
                          activeTimelineStep === idx
                            ? "border-[#00dfc6] bg-[#00dfc6]/5 text-[#00dfc6]"
                            : "border-white/10 bg-transparent text-[#c4c7c7] hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-7 w-7 rounded-none font-mono-tech text-xs flex items-center justify-center ${
                              activeTimelineStep === idx
                                ? "bg-[#00dfc6] text-[#00201b]"
                                : "bg-white/5 text-[#c4c7c7]"
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <span className="font-semibold text-sm">{step.title}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Step Details */}
                  <div className="md:col-span-7">
                    <div className="hairline bg-white/[0.01] p-8 h-full flex flex-col justify-center border-l-2 border-l-white/20">
                      <span className="font-mono-tech text-[10px] uppercase text-[#00dfc6] mb-2 block">
                        PHASE 0{activeTimelineStep + 1} // ACTIVE
                      </span>
                      <h4 className="text-lg font-display text-white mb-3 font-semibold">
                        {timelineSteps[activeTimelineStep].title}
                      </h4>
                      <p className="font-geist text-sm text-[#c4c7c7] leading-relaxed">
                        {timelineSteps[activeTimelineStep].desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ─── Tab Content: Success Stories ─── */}
          {activeTab === "stories" && (
            <div className="space-y-6">
              {assignedStories.length === 0 ? (
                <div className="hairline bg-white/[0.01] p-12 text-center font-mono-tech text-[#c4c7c7]">
                  [ NO PLACEMENT SUCCESS STORIES CLAIMED BY THIS NODE ]
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {assignedStories.map((story) => (
                    <div
                      key={story.id}
                      className="hairline bg-white/[0.01] p-6 hover:bg-white/[0.02] hover:border-[#00dfc6]/30 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 border border-white/10 bg-white/5 overflow-hidden shrink-0">
                            {story.alumni.imageUrl ? (
                              <img src={story.alumni.imageUrl} alt={story.alumni.name} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center font-bold text-sm bg-[#00dfc6]/10 text-[#00dfc6]">
                                {story.alumni.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-mono-tech text-xs text-white uppercase">{story.alumni.name}</h4>
                            <p className="text-[11px] text-[#c4c7c7] font-geist">
                              {story.alumni.title} {story.alumni.company ? `@ ${story.alumni.company}` : ""}
                            </p>
                          </div>
                        </div>
                        <h3 className="font-display text-lg text-white font-semibold line-clamp-2 hover:text-[#00dfc6] transition-colors">
                          <Link href={`/stories/${story.slug}`}>{story.title}</Link>
                        </h3>
                      </div>

                      <div className="pt-6 border-t border-white/5 mt-6 flex justify-end">
                        <Link href={`/stories/${story.slug}`} className="font-mono-tech text-[10px] text-[#00dfc6] flex items-center gap-1">
                          READ_DOSSIER →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ─── Tab Content: Reviews (Terminal Logs Style) ─── */}
          {activeTab === "reviews" && (
            <div className="space-y-8">
              {/* Stats Card */}
              {reviews.length > 0 && (
                <div className="hairline bg-white/[0.02] p-8 flex flex-col sm:flex-row items-center gap-8 justify-between">
                  <div className="text-center sm:border-r sm:border-white/10 sm:pr-8 shrink-0">
                    <p className="text-6xl font-display font-bold text-[#00dfc6] glow-teal">
                      {averageRating}
                    </p>
                    <div className="flex items-center gap-0.5 mt-2 justify-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4.5 w-4.5 ${
                            i < Math.round(Number(averageRating))
                              ? "text-[#00dfc6] fill-[#00dfc6]"
                              : "text-white/10"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-mono-tech text-[10px] text-[#c4c7c7] mt-2 uppercase">
                      verified base // {reviews.length} logs
                    </p>
                  </div>
                  <div className="flex-1 w-full space-y-2 font-mono-tech text-[11px] text-[#c4c7c7]">
                    {starCounts.map(({ stars, count }) => (
                      <button
                        key={stars}
                        onClick={() => setSelectedRating(selectedRating === stars ? null : stars)}
                        className={`flex items-center gap-3 w-full hover:bg-white/5 p-1 transition-colors ${
                          selectedRating === stars ? "bg-[#00dfc6]/10 text-[#00dfc6]" : ""
                        }`}
                      >
                        <span className="w-4 text-right">{stars}L</span>
                        <div className="flex-1 h-1.5 bg-white/10 rounded-none overflow-hidden">
                          <div
                            className="h-full bg-[#00dfc6] transition-all duration-500"
                            style={{
                              width: reviews.length > 0 ? `${(count / reviews.length) * 100}%` : "0%",
                            }}
                          />
                        </div>
                        <span className="w-8 text-right">
                          {count} {selectedRating === stars && "[x]"}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Review Logs */}
              {filteredReviews.length === 0 ? (
                <div className="hairline bg-white/[0.01] p-8 text-center font-mono-tech text-[#c4c7c7]">
                  [ SYSTEM LOGS EMPTY FOR SPECIFIED QUERY ]
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredReviews.map((review, rIdx) => (
                    <div
                      key={review.id}
                      className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 hairline p-6 bg-white/[0.01] transition-all hover:border-[#00dfc6]/35 hover:bg-white/[0.02]"
                    >
                      {/* Left Metadata column */}
                      <div className="font-mono-tech text-[11px] text-[#00dfc6] flex flex-col gap-1.5 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0">
                        <span className="opacity-40 uppercase">LOG TIMESTAMP</span>
                        <span>{new Date(review.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
                        <span className="mt-2 opacity-40 uppercase">CANDIDATE ID</span>
                        <span>USR_T_{100 + rIdx}</span>
                      </div>

                      {/* Right Review content column */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00dfc6] animate-pulse"></span>
                            <span className="font-mono-tech text-xs uppercase tracking-widest text-[#e5e2dd]">
                              {review.reviewerName}
                            </span>
                          </div>
                          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 text-[9px] font-mono-tech uppercase tracking-widest">
                            VERIFIED SUCCESS
                          </span>
                        </div>

                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <svg
                              key={idx}
                              className={`h-3.5 w-3.5 ${
                                idx < review.rating ? "text-amber-400 fill-amber-400" : "text-white/10"
                              }`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        <p className="font-geist text-base text-[#c4c7c7] leading-relaxed italic">
                          &ldquo;{review.content}&ldquo;
                        </p>

                        {review.reviewerRole && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            <div className="bg-white/5 px-3 py-1 border border-white/5 font-mono-tech text-[10px] text-[#c4c7c7] uppercase">
                              ROLE: {review.reviewerRole}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ─── Tab Content: Videos ─── */}
          {activeTab === "videos" && (
            <div className="space-y-6">
              {videos.length === 0 && assignedVideos.length === 0 ? (
                <div className="hairline bg-white/[0.01] p-12 text-center font-mono-tech text-[#c4c7c7]">
                  [ NO VIDEO LOGS ARCHIVED FOR THIS NODE ]
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Specific Manager Videos */}
                  {videos.map((vid) => (
                    <div
                      key={vid.id}
                      className="hairline bg-white/[0.02] overflow-hidden hover:border-[#00dfc6]/30 transition-all"
                    >
                      <div className="aspect-video bg-black relative">
                        {getYoutubeEmbedUrl(vid.videoUrl) ? (
                          <iframe
                            src={getYoutubeEmbedUrl(vid.videoUrl)!}
                            title={vid.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full border-none"
                          />
                        ) : (
                          <video
                            src={vid.videoUrl}
                            poster={vid.thumbnailUrl || undefined}
                            controls
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <div className="p-4 font-mono-tech text-xs text-[#e5e2dd]">
                        {vid.title}
                      </div>
                    </div>
                  ))}

                  {/* Assigned Global Video Testimonials */}
                  {assignedVideos.map((vid) => (
                    <div
                      key={vid.id}
                      className="hairline bg-white/[0.02] overflow-hidden hover:border-[#00dfc6]/30 transition-all"
                    >
                      <div className="aspect-video bg-black relative">
                        {getYoutubeEmbedUrl(vid.videoUrl) ? (
                          <iframe
                            src={getYoutubeEmbedUrl(vid.videoUrl)!}
                            title={vid.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full border-none"
                          />
                        ) : (
                          <video
                            src={vid.videoUrl}
                            poster={vid.thumbnailUrl || undefined}
                            controls
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <div className="p-4 font-mono-tech text-xs text-[#e5e2dd] space-y-1">
                        <div>{vid.title}</div>
                        <div className="text-[10px] opacity-60">
                          {vid.name} ({vid.role} @ {vid.company}) // {vid.duration}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {/* ─── Tab Content: Podcasts ─── */}
          {activeTab === "podcasts" && (
            <div className="space-y-6">
              {assignedPodcasts.length === 0 ? (
                <div className="hairline bg-white/[0.01] p-12 text-center font-mono-tech text-[#c4c7c7]">
                  [ NO PODCAST EPISODES ARCHIVED FOR THIS NODE ]
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {assignedPodcasts.map((podcast) => (
                    <div
                      key={podcast.id}
                      className="hairline bg-white/[0.02] overflow-hidden hover:border-[#00dfc6]/30 transition-all flex flex-col justify-between"
                    >
                      <div className="aspect-video bg-black relative">
                        {podcast.thumbnailUrl ? (
                          <img
                            src={podcast.thumbnailUrl}
                            alt={podcast.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-slate-900 flex items-center justify-center font-mono-tech text-xs text-[#00dfc6]">
                            [ NO THUMBNAIL ]
                          </div>
                        )}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/20 transition-all">
                          <a
                            href={podcast.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 w-12 rounded-full bg-red-650 hover:bg-red-700 flex items-center justify-center text-white shadow-lg transition-transform transform hover:scale-110"
                          >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                      <div className="p-4 font-geist space-y-2 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <h4 className="font-bold text-white text-sm line-clamp-1">{podcast.title}</h4>
                          <p className="text-xs text-[#c4c7c7] line-clamp-3">{podcast.description}</p>
                        </div>
                        <a
                          href={podcast.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#00dfc6] hover:underline font-mono-tech pt-2 self-start"
                        >
                          View on YouTube →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Sidebar Stats and CTAs */}
        <aside className="lg:col-span-4 space-y-8 font-geist">
          {/* Node Dossier Card */}
          <div className="hairline bg-white/[0.02] relative p-6 space-y-6">
            <div className="absolute top-0 right-0 w-16 h-1 bg-[#00dfc6]"></div>
            <h4 className="font-mono-tech text-xs uppercase tracking-widest text-[#00dfc6]">// NODE DOSSIER</h4>
            <div className="space-y-4 text-sm text-[#c4c7c7]">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Node Status</span>
                <span className="font-mono-tech text-xs text-[#00dfc6] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#00dfc6] rounded-full animate-ping"></span>
                  ONLINE // ACTIVE
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Global Rating</span>
                <span className="text-white font-bold flex items-center gap-1">
                  <span className="text-[#00dfc6]">★</span> {averageRating}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Logged Reviews</span>
                <span className="text-white font-semibold font-mono-tech">{reviews.length} logs</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span>Video Records</span>
                <span className="text-white font-semibold font-mono-tech">{videos.length + assignedVideos.length} clips</span>
              </div>

              {manager.linkedinUrl && (
                <a
                  href={manager.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00dfc6]/10 hover:bg-[#00dfc6]/20 border border-[#00dfc6]/20 text-[#00dfc6] rounded-none py-3 px-4 text-xs font-mono-tech uppercase tracking-widest transition-all mt-4"
                >
                  CONNECT_VIA_LINKEDIN
                </a>
              )}
            </div>
          </div>

          {/* Technical CTA Box */}
          <div className="hairline bg-slate-900/60 backdrop-blur-md p-8 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,229,204,0.05),transparent_60%)] pointer-events-none" />
            <span className="font-mono-tech text-[10px] text-[#00dfc6] uppercase tracking-[0.3em] block">// INITIATE TRANSITION</span>
            <h4 className="font-display text-xl text-white font-bold leading-tight">Re-Engineer Your Trajectory</h4>
            <p className="text-sm text-[#c4c7c7] leading-relaxed">
              Unlock C-suite and technical coaching, ATS optimizations, and direct warm submissions to tech hiring partners.
            </p>
            <Link href="/contact" className="block">
              <button className="w-full bg-[#00dfc6] hover:bg-[#00c5af] text-[#00201b] font-bold py-4 text-sm uppercase tracking-tighter transition-all">
                REQUEST ALIGNMENT
              </button>
            </Link>
          </div>
        </aside>
      </div>

      {/* ─── Leadership Nexus (Consolidated Navigation) ─── */}
      <section className="border-t border-white/10 pt-16 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display text-3xl text-white mb-3 font-semibold uppercase tracking-tighter">The Leadership Nexus</h2>
            <p className="text-[#c4c7c7] font-geist text-sm max-w-lg">
              A consolidated architecture of specialized career mastery. Select a node to view their dossier.
            </p>
          </div>
          <div className="font-mono-tech text-xs text-[#00dfc6] border-l border-[#00dfc6]/30 pl-4">
            NODES ONLINE: 0{allManagers.length} <br />
            STATUS: SYNCHRONIZED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allManagers.map((mgr, index) => {
            const node = nodeColors[index % nodeColors.length];
            const isCurrent = mgr.id === manager.id;

            return (
              <div
                key={mgr.id}
                className={`hairline p-6 bg-white/[0.01] group hover:bg-white/[0.03] transition-all duration-500 relative overflow-hidden ${
                  isCurrent ? "border-[#00dfc6] bg-[#00dfc6]/5" : ""
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-1 h-12 ${node.bg} ${
                    isCurrent ? "h-full" : "group-hover:h-full"
                  } transition-all duration-500`}
                ></div>
                <div className="flex flex-col gap-4">
                  <div className="w-full aspect-[4/5] bg-white/5 overflow-hidden border border-white/5">
                    <img
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        isCurrent ? "grayscale-0" : "grayscale group-hover:grayscale-0"
                      }`}
                      src={mgr.imageUrl || "https://placehold.co/400x500/3b82f6/ffffff?text=Avatar"}
                      alt={mgr.name}
                    />
                  </div>
                  <div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider" style={{ color: node.hex }}>
                      {isCurrent ? "[ CURRENT NODE ]" : node.name}
                    </span>
                    <h3 className="font-display text-lg text-white mt-1 font-semibold hover:text-[#00dfc6] transition-colors">
                      <Link href={`/placement-managers/${mgr.id}`}>{mgr.name}</Link>
                    </h3>
                    <p className="text-[#c4c7c7] text-xs font-geist mt-1">{mgr.role}</p>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex justify-between items-center font-mono-tech text-[9px] text-[#c4c7c7] uppercase">
                    <span>DS_KEY: SKY-0{index + 1}</span>
                    <Link href={`/placement-managers/${mgr.id}`} className="text-[#00dfc6] flex items-center gap-0.5">
                      ACCESS
                      <span className="text-xs">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
