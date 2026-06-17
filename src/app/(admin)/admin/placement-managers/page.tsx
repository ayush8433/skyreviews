import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deletePlacementManager } from "@/lib/admin-actions";
import { Star, Video, MessageSquare } from "lucide-react";

export default async function AdminPlacementManagersPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const params = await searchParams;

  const managers = await prisma.placementManager.findMany({
    include: {
      reviews: true,
      videos: true,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6 text-white">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-2">
            <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">Managers</Badge>
            <h1 className="text-3xl font-bold text-white">Placement Managers CRUD</h1>
            <p className="max-w-2xl text-slate-300">
              Manage placement team profiles, alumni reviews, video recordings, and their LinkedIn handles.
            </p>
          </div>
          <Button asChild className="bg-white text-slate-950 hover:bg-slate-100">
            <Link href="/admin/placement-managers/new">New manager</Link>
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
          <CardTitle className="text-xl text-white">All Managers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {managers.length === 0 ? (
            <p className="text-sm text-slate-400">No placement managers added yet.</p>
          ) : (
            managers.map((manager) => (
              <div key={manager.id} className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/50 p-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-white text-lg">{manager.name}</p>
                    <Badge className="bg-white/10 text-slate-200 hover:bg-white/10">{manager.role}</Badge>
                  </div>
                  <p className="text-sm text-slate-400 mt-1 max-w-xl truncate">{manager.bio || "No biography provided."}</p>
                  
                  <div className="flex items-center gap-4 mt-3 text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
                      {manager.reviews.length} reviews
                    </span>
                    <span className="flex items-center gap-1">
                      <Video className="h-3.5 w-3.5 text-blue-400" />
                      {manager.videos.length} videos
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                    <Link href={`/admin/placement-managers/${manager.id}`}>Edit</Link>
                  </Button>
                  <form action={deletePlacementManager}>
                    <input type="hidden" name="managerId" value={manager.id} />
                    <Button type="submit" variant="outline" className="border-white/15 bg-transparent text-rose-200 hover:bg-rose-500 hover:text-white">Delete</Button>
                  </form>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
