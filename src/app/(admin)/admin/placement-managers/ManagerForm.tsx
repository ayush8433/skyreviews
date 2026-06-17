"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus, Trash2 } from "lucide-react";
import { savePlacementManager } from "@/lib/admin-actions";

type ReviewItem = {
  id?: string;
  reviewerName: string;
  reviewerRole: string | null;
  content: string;
  rating: number;
};

type VideoItem = {
  id?: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string | null;
};

type VideoTestimonialItem = {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  name: string;
  role: string;
  company: string;
};

type ManagerFormProps = {
  manager?: {
    id: string;
    name: string;
    role: string;
    linkedinUrl: string | null;
    imageUrl: string | null;
    bio: string | null;
    reviews: ReviewItem[];
    videos: VideoItem[];
  } | null;
  videoTestimonials?: VideoTestimonialItem[];
};

export default function ManagerForm({ manager, videoTestimonials = [] }: ManagerFormProps) {
  const [reviews, setReviews] = useState<ReviewItem[]>(manager?.reviews || []);
  const [videos, setVideos] = useState<VideoItem[]>(manager?.videos || []);

  const [newReview, setNewReview] = useState({
    reviewerName: "",
    reviewerRole: "",
    content: "",
    rating: 5,
  });

  const [newVideo, setNewVideo] = useState({
    title: "",
    videoUrl: "",
    thumbnailUrl: "",
  });

  const handleAddReview = () => {
    if (!newReview.reviewerName || !newReview.content) return;
    setReviews([...reviews, { ...newReview }]);
    setNewReview({
      reviewerName: "",
      reviewerRole: "",
      content: "",
      rating: 5,
    });
  };

  const handleRemoveReview = (index: number) => {
    setReviews(reviews.filter((_, i) => i !== index));
  };

  const handleAddVideo = () => {
    if (!newVideo.title || !newVideo.videoUrl) return;
    setVideos([...videos, { ...newVideo }]);
    setNewVideo({
      title: "",
      videoUrl: "",
      thumbnailUrl: "",
    });
  };

  const handleRemoveVideo = (index: number) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  return (
    <form action={savePlacementManager} className="space-y-6 text-white pb-12">
      {manager?.id && <input type="hidden" name="managerId" value={manager.id} />}
      
      {/* Serialize arrays to pass via standard HTML form submission to server actions */}
      <input type="hidden" name="reviewsJson" value={JSON.stringify(reviews)} />
      <input type="hidden" name="videosJson" value={JSON.stringify(videos)} />

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
        <div className="space-y-2">
          <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">
            {manager ? "Edit" : "New"}
          </Badge>
          <h1 className="text-3xl font-bold text-white">
            {manager ? `Edit Placement Manager: ${manager.name}` : "New Placement Manager"}
          </h1>
          <p className="max-w-2xl text-slate-300">
            Define profile, biography, external links, and add testimonials or videos.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main profile settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-white mb-2 border-b border-white/10 pb-2">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300">Full Name *</label>
                  <Input
                    name="name"
                    required
                    defaultValue={manager?.name || ""}
                    placeholder="Sarah Jenkins"
                    className="border-white/10 bg-slate-900/60 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300">Job Title / Role *</label>
                  <Input
                    name="role"
                    required
                    defaultValue={manager?.role || ""}
                    placeholder="Lead Placement Director"
                    className="border-white/10 bg-slate-900/60 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300">LinkedIn Profile URL</label>
                  <Input
                    name="linkedinUrl"
                    defaultValue={manager?.linkedinUrl || ""}
                    placeholder="https://linkedin.com/in/..."
                    className="border-white/10 bg-slate-900/60 text-white"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-300">Profile Image URL</label>
                  <Input
                    name="imageUrl"
                    defaultValue={manager?.imageUrl || ""}
                    placeholder="https://yourdomain.com/..."
                    className="border-white/10 bg-slate-900/60 text-white"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-300">Bio / About</label>
                <Textarea
                  name="bio"
                  rows={4}
                  defaultValue={manager?.bio || ""}
                  placeholder="Describe their experience and placement philosophy..."
                  className="border-white/10 bg-slate-900/60 text-white"
                />
              </div>
            </CardContent>
          </Card>

          {/* Manage Reviews */}
          <Card className="border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Reviews / Testimonials</h2>
              
              {/* Add review form */}
              <div className="p-4 rounded-2xl border border-white/10 bg-slate-900/40 space-y-4">
                <h3 className="text-sm font-bold text-white">Add Reviewer Testimonial</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Reviewer Name"
                    value={newReview.reviewerName}
                    onChange={(e) => setNewReview({ ...newReview, reviewerName: e.target.value })}
                    className="border-white/10 bg-slate-950/80 text-white"
                  />
                  <Input
                    placeholder="Reviewer Role (e.g. Software Engineer Alum)"
                    value={newReview.reviewerRole}
                    onChange={(e) => setNewReview({ ...newReview, reviewerRole: e.target.value })}
                    className="border-white/10 bg-slate-950/80 text-white"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                  <Textarea
                    placeholder="Review comments..."
                    value={newReview.content}
                    onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                    rows={2}
                    className="border-white/10 bg-slate-950/80 text-white"
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-300">Rating (1-5):</span>
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-white"
                    >
                      <option value="5">5 Stars</option>
                      <option value="4">4 Stars</option>
                      <option value="3">3 Stars</option>
                      <option value="2">2 Stars</option>
                      <option value="1">1 Star</option>
                    </select>
                    <Button type="button" onClick={handleAddReview} className="ml-auto bg-blue-600 hover:bg-blue-700">
                      <Plus className="h-4 w-4 mr-1" /> Add
                    </Button>
                  </div>
                </div>
              </div>

              {/* Reviews list */}
              <div className="space-y-3">
                {reviews.length === 0 ? (
                  <p className="text-sm text-slate-400 text-center">No reviews added yet.</p>
                ) : (
                  reviews.map((rev, index) => (
                    <div key={index} className="flex justify-between items-start p-4 rounded-xl border border-white/5 bg-slate-950/40">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-white text-sm">{rev.reviewerName}</p>
                          {rev.reviewerRole && <span className="text-xs text-slate-400">&middot; {rev.reviewerRole}</span>}
                          <span className="flex items-center text-amber-400 text-xs gap-0.5 ml-2">
                            <Star className="h-3 w-3 fill-amber-400" /> {rev.rating}
                          </span>
                        </div>
                        <p className="text-sm text-slate-300">{rev.content}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => handleRemoveReview(index)}
                        className="text-rose-400 hover:text-rose-500 hover:bg-rose-500/10 p-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Videos section */}
        <div className="space-y-6">
          <Card className="border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
            <CardContent className="p-6 space-y-6">
              <h2 className="text-xl font-bold text-white border-b border-white/10 pb-2">Related Videos</h2>
              
              {/* Add video form */}
              <div className="p-4 rounded-2xl border border-white/10 bg-slate-900/40 space-y-3">
                <h3 className="text-sm font-bold text-white">Add Video Reference</h3>
                
                {videoTestimonials.length > 0 && (
                  <div className="space-y-1 pb-2 border-b border-white/5">
                    <label className="text-xs font-semibold text-slate-400">Link from uploaded testimonials:</label>
                    <select
                      onChange={(e) => {
                        const selected = videoTestimonials.find(v => v.id === e.target.value);
                        if (selected) {
                          setNewVideo({
                            title: `${selected.name} - ${selected.title}`,
                            videoUrl: selected.videoUrl,
                            thumbnailUrl: selected.thumbnailUrl || "",
                          });
                        }
                      }}
                      defaultValue=""
                      className="w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-white focus:outline-none"
                    >
                      <option value="" disabled>-- Select a video testimonial --</option>
                      {videoTestimonials.map(vt => (
                        <option key={vt.id} value={vt.id} className="text-black dark:text-white">
                          {vt.name} - {vt.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <Input
                  placeholder="Video Title (e.g. Interview prep session)"
                  value={newVideo.title}
                  onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                  className="border-white/10 bg-slate-950/80 text-white"
                />
                <Input
                  placeholder="Video MP4 URL"
                  value={newVideo.videoUrl}
                  onChange={(e) => setNewVideo({ ...newVideo, videoUrl: e.target.value })}
                  className="border-white/10 bg-slate-950/80 text-white"
                />
                <Input
                  placeholder="Thumbnail Image URL (optional)"
                  value={newVideo.thumbnailUrl}
                  onChange={(e) => setNewVideo({ ...newVideo, thumbnailUrl: e.target.value })}
                  className="border-white/10 bg-slate-950/80 text-white"
                />
                <Button type="button" onClick={handleAddVideo} className="w-full bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-1" /> Add Video
                </Button>
              </div>

              {/* Videos list */}
              <div className="space-y-3">
                {videos.length === 0 ? (
                  <p className="text-sm text-slate-400 text-center">No videos added yet.</p>
                ) : (
                  videos.map((vid, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-xl border border-white/5 bg-slate-950/40">
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white text-sm truncate">{vid.title}</p>
                        <p className="text-xs text-slate-400 truncate">{vid.videoUrl}</p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => handleRemoveVideo(index)}
                        className="text-rose-400 hover:text-rose-500 hover:bg-rose-500/10 p-2 ml-2"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>

            </CardContent>
          </Card>

          {/* Form Actions */}
          <Card className="border-white/10 bg-white/5 shadow-xl backdrop-blur-xl">
            <CardContent className="p-6 flex flex-col gap-3">
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 font-bold py-6 text-white border-none rounded-xl">
                Save Profile
              </Button>
              <Button asChild variant="outline" className="w-full border-white/10 bg-transparent text-white hover:bg-white/10 rounded-xl py-6">
                <a href="/admin/placement-managers">Cancel</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
