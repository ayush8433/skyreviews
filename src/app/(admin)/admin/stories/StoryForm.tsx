import { StoryModerationStatus } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveStory } from "@/lib/admin-actions";

type StoryRecord = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  videoUrl: string | null;
  thumbnailUrl: string | null;
  isPublished: boolean;
  isFeatured: boolean;
  moderationStatus: StoryModerationStatus;
  alumni: {
    name: string;
    email: string;
    title: string;
    company: string | null;
    location: string | null;
    linkedinUrl: string | null;
    imageUrl: string | null;
    bio: string | null;
  };
  categories: Array<{ category: { name: string } }>;
  tags: Array<{ tag: { name: string } }>;
  metaJson?: string | null;
  placementManagerId?: string | null;
};

type PlacementManagerMin = {
  id: string;
  name: string;
  role: string;
};

export default function StoryForm({
  story,
  placementManagers = [],
}: {
  story?: StoryRecord | null;
  placementManagers?: PlacementManagerMin[];
}) {
  const categoryValue = story?.categories.map((item) => item.category.name).join(", ") ?? "";
  const tagValue = story?.tags.map((item) => item.tag.name).join(", ") ?? "";
  const publishedAtValue = story?.publishedAt ? new Date(story.publishedAt).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10);

  return (
    <form action={saveStory} className="space-y-6">
      <input type="hidden" name="storyId" value={story?.id ?? ""} />

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-xl text-white">Story details</CardTitle>
            <Badge className="bg-sky-500/15 text-sky-100 hover:bg-sky-500/15">
              {story ? "Editing existing story" : "Creating new story"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2 lg:col-span-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="title">Title</label>
            <Input id="title" name="title" defaultValue={story?.title ?? ""} placeholder="Story title" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="publishedAt">Published date</label>
            <Input id="publishedAt" name="publishedAt" type="date" defaultValue={publishedAtValue} className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="moderationStatus">Moderation status</label>
            <select
              id="moderationStatus"
              name="moderationStatus"
              defaultValue={story?.moderationStatus ?? StoryModerationStatus.PENDING}
              className="h-10 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3 text-sm text-white outline-none"
            >
              <option value={StoryModerationStatus.PENDING}>Pending</option>
              <option value={StoryModerationStatus.APPROVED}>Approved</option>
              <option value={StoryModerationStatus.REJECTED}>Rejected</option>
            </select>
          </div>
          <div className="space-y-2 lg:col-span-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="placementManagerId">Assigned Placement Manager (Optional)</label>
            <select
              id="placementManagerId"
              name="placementManagerId"
              defaultValue={story?.placementManagerId ?? ""}
              className="h-10 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3 text-sm text-white outline-none"
            >
              <option value="">Unassigned</option>
              {placementManagers.map((pm) => (
                <option key={pm.id} value={pm.id}>
                  {pm.name} ({pm.role})
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="videoUrl">Story video URL</label>
            <Input id="videoUrl" name="videoUrl" defaultValue={story?.videoUrl ?? ""} placeholder="https://..." className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="thumbnailUrl">Story thumbnail URL</label>
            <Input id="thumbnailUrl" name="thumbnailUrl" defaultValue={story?.thumbnailUrl ?? ""} placeholder="https://..." className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2 lg:col-span-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="content">Story content</label>
            <Textarea id="content" name="content" defaultValue={story?.content ?? ""} className="min-h-80 border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" placeholder="Write the full story" required />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-200">
            <input type="checkbox" name="isPublished" defaultChecked={story?.isPublished ?? false} className="h-4 w-4 rounded border-white/20 bg-slate-950/70" />
            Publish publicly
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-200">
            <input type="checkbox" name="isFeatured" defaultChecked={story?.isFeatured ?? false} className="h-4 w-4 rounded border-white/20 bg-slate-950/70" />
            Mark as featured
          </label>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">Alumni profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniName">Full name</label>
            <Input id="alumniName" name="alumniName" defaultValue={story?.alumni.name ?? ""} placeholder="Alumni full name" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniEmail">Email</label>
            <Input id="alumniEmail" name="alumniEmail" type="email" defaultValue={story?.alumni.email ?? ""} placeholder="alumni@example.com" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniTitle">Current role</label>
            <Input id="alumniTitle" name="alumniTitle" defaultValue={story?.alumni.title ?? ""} placeholder="Current role" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniCompany">Company</label>
            <Input id="alumniCompany" name="alumniCompany" defaultValue={story?.alumni.company ?? ""} placeholder="Company name" className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniLocation">Location</label>
            <Input id="alumniLocation" name="alumniLocation" defaultValue={story?.alumni.location ?? ""} placeholder="City, Country" className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniLinkedin">LinkedIn URL</label>
            <Input id="alumniLinkedin" name="alumniLinkedin" defaultValue={story?.alumni.linkedinUrl ?? ""} placeholder="https://..." className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniImageFile">Profile image (Upload file)</label>
            <Input id="alumniImageFile" name="alumniImageFile" type="file" accept="image/*" className="border-white/10 bg-slate-950/70 text-white" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniImageUrl">Profile image URL (Alternative)</label>
            <Input id="alumniImageUrl" name="alumniImageUrl" defaultValue={story?.alumni.imageUrl ?? ""} placeholder="https://..." className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="alumniBio">Bio</label>
            <Input id="alumniBio" name="alumniBio" defaultValue={story?.alumni.bio ?? ""} placeholder="Short bio" className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">Taxonomy and publishing</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="categories">Categories</label>
            <Textarea id="categories" name="categories" defaultValue={categoryValue} placeholder="Career Change, Featured" className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="tags">Tags</label>
            <Textarea id="tags" name="tags" defaultValue={tagValue} placeholder="Mentorship, Confidence, Interview Prep" className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
          </div>
        </CardContent>
      </Card>
 
      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">Success Story Metadata (JSON)</CardTitle>
          <p className="text-xs text-slate-400">
            Provide structured JSON metadata including the roadmap steps, project details, FAQ array, GEO optimization answers, and social media repurposed assets.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-200" htmlFor="metaJson">Metadata JSON</label>
            <Textarea 
              id="metaJson" 
              name="metaJson" 
              defaultValue={story?.metaJson ?? ""} 
              placeholder={`{\n  "durationOfLearning": "7 Months",\n  "projectsCompletedCount": 4,\n  "technologiesLearned": ["Python", "SQL", "Tableau"],\n  "skillsDeveloped": ["Statistical Modeling"],\n  "timestamps": [],\n  "keyMoments": [],\n  "roadmap": [],\n  "projects": [],\n  "faqs": [],\n  "geoAnswers": {}\n}`} 
              className="min-h-80 border-white/10 bg-slate-950/70 text-white placeholder:text-slate-450 font-mono text-xs" 
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-end gap-3">
        <Button type="submit" className="bg-white text-slate-950 hover:bg-slate-100">
          Save story
        </Button>
      </div>
    </form>
  );
}