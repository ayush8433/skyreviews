import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const params = await searchParams;

  const [pendingStories, approvedStories, rejectedStories, videoCount, categoryCount, tagCount, certCount, adminCount, recentStories] =
    await Promise.all([
      prisma.story.count({ where: { moderationStatus: "PENDING" } }),
      prisma.story.count({ where: { moderationStatus: "APPROVED" } }),
      prisma.story.count({ where: { moderationStatus: "REJECTED" } }),
      prisma.videoTestimonial.count(),
      prisma.category.count(),
      prisma.tag.count(),
      prisma.studentCertification.count({ where: { isPublished: true } }),
      prisma.adminUser.count(),
      prisma.story.findMany({
        include: { alumni: true },
        orderBy: { publishedAt: "desc" },
        take: 5,
      }),
    ]);

  const cards = [
    { label: "Pending stories", value: pendingStories, href: "/admin/stories" },
    { label: "Approved stories", value: approvedStories, href: "/admin/stories" },
    { label: "Rejected stories", value: rejectedStories, href: "/admin/stories" },
    { label: "Video testimonials", value: videoCount, href: "/admin/videos" },
    { label: "Published certificates", value: certCount, href: "/admin/certifications" },
    { label: "Categories", value: categoryCount, href: "/admin/taxonomy" },
    { label: "Tags", value: tagCount, href: "/admin/taxonomy" },
    { label: "Admin users", value: adminCount, href: "/admin/admins" },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">Dashboard</Badge>
            <h1 className="text-3xl font-bold text-white">Moderation queue and content overview</h1>
            <p className="max-w-2xl text-slate-300">
              Review new alumni submissions, manage the public story library, and keep video testimonials in sync with the editorial team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
              <Link href="/admin/stories/new">New story</Link>
            </Button>
            <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
              <Link href="/admin/videos/new">New video</Link>
            </Button>
          </div>
        </div>

        {params.message ? (
          <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
            {params.message}
          </div>
        ) : null}
        {params.error ? (
          <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
            {params.error}
          </div>
        ) : null}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.label} className="border-white/10 bg-slate-900/70 text-white shadow-xl shadow-black/20">
            <CardHeader>
              <CardTitle className="text-base text-slate-300">{card.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="text-4xl font-bold">{card.value}</div>
              <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                <Link href={card.href}>Open</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-xl text-white">Recent stories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentStories.map((story) => (
            <div key={story.id} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-semibold text-white">{story.title}</p>
                <p className="text-sm text-slate-400">{story.alumni.name} · {story.moderationStatus.toLowerCase()}</p>
                <p className="text-xs text-slate-500">
                  {new Date(story.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                  <Link href={`/admin/stories/${story.id}`}>Edit</Link>
                </Button>
                <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                  <Link href={`/stories/${story.slug}`}>View public</Link>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}