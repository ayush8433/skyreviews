import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteStory, reviewStory } from "@/lib/admin-actions";

export default async function AdminStoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const params = await searchParams;

  const stories = await prisma.story.findMany({
    include: { alumni: true, categories: { include: { category: true } }, tags: { include: { tag: true } } },
    orderBy: { publishedAt: "desc" },
  });

  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const pendingStories = stories.filter((story) => story.moderationStatus === "PENDING");

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">Stories</Badge>
            <h1 className="text-3xl font-bold text-white">Story moderation and CRUD</h1>
            <p className="max-w-2xl text-slate-300">Approve or reject submissions, edit any published story, and keep story metadata aligned with the public site.</p>
          </div>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
            <Link href="/admin/stories/new">New story</Link>
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
          <CardTitle className="text-xl text-white">Pending submissions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {pendingStories.length === 0 ? (
            <p className="text-sm text-slate-400">No stories are waiting for review right now.</p>
          ) : (
            pendingStories.map((story) => (
              <div key={story.id} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="font-semibold text-white">{story.title}</p>
                    <p className="text-sm text-slate-400">{story.alumni.name} · {story.alumni.title}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {story.categories.map(({ category }) => (
                        <Badge key={category.name} className="bg-white/10 text-slate-200 hover:bg-white/10">{category.name}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <form action={reviewStory}>
                      <input type="hidden" name="storyId" value={story.id} />
                      <input type="hidden" name="nextAction" value="approve" />
                      <Button type="submit" className="bg-emerald-500 text-white hover:bg-emerald-400">Approve</Button>
                    </form>
                    <form action={reviewStory}>
                      <input type="hidden" name="storyId" value={story.id} />
                      <input type="hidden" name="nextAction" value="reject" />
                      <Button type="submit" variant="outline" className="border-rose-400/30 bg-rose-500/10 text-rose-100 hover:bg-rose-500 hover:text-white">Reject</Button>
                    </form>
                    <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                      <Link href={`/admin/stories/${story.id}`}>Edit</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">All stories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-white">{story.title}</p>
                  <Badge className="bg-white/10 text-slate-200 hover:bg-white/10">{story.moderationStatus.toLowerCase()}</Badge>
                  {story.isPublished ? <Badge className="bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/15">published</Badge> : null}
                </div>
                <p className="text-sm text-slate-400">{story.alumni.name} · {story.alumni.title}</p>
                  <p className="text-xs text-slate-500">Published {formatDate(story.publishedAt)}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                  <Link href={`/admin/stories/${story.id}`}>Edit</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                  <Link href={`/stories/${story.slug}`}>View public</Link>
                </Button>
                <form action={deleteStory}>
                  <input type="hidden" name="storyId" value={story.id} />
                  <Button type="submit" variant="outline" className="border-white/15 bg-transparent text-rose-200 hover:bg-rose-500 hover:text-white">Delete</Button>
                </form>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}