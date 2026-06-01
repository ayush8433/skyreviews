import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createTaxonomyEntry, deleteTaxonomyEntry } from "@/lib/admin-actions";

export default async function AdminTaxonomyPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const params = await searchParams;

  const [categories, tags] = await Promise.all([
    prisma.category.findMany({ orderBy: { name: "asc" } }),
    prisma.tag.findMany({ orderBy: { name: "asc" } }),
  ]);

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="space-y-2">
          <Badge className="bg-sky-500/15 text-sky-200 hover:bg-sky-500/15">Categories & Tags</Badge>
          <h1 className="text-3xl font-bold text-white">Taxonomy management</h1>
          <p className="max-w-2xl text-slate-300">Create or remove categories and tags, then reuse them across story records.</p>
        </div>
        {params.message ? (
          <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">{params.message}</div>
        ) : null}
        {params.error ? (
          <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">{params.error}</div>
        ) : null}
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Add category</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={createTaxonomyEntry} className="space-y-4">
              <input type="hidden" name="taxonomyType" value="category" />
              <div className="space-y-2">
                <label htmlFor="categoryName" className="text-sm font-medium text-slate-200">Name</label>
                <Input id="categoryName" name="categoryName" placeholder="Featured" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
              </div>
              <div className="space-y-2">
                <label htmlFor="categoryDescription" className="text-sm font-medium text-slate-200">Description</label>
                <Textarea id="categoryDescription" name="categoryDescription" placeholder="Short explanation" className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
              </div>
              <Button type="submit" className="bg-white text-slate-950 hover:bg-slate-100">Save category</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Add tag</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={createTaxonomyEntry} className="space-y-4">
              <input type="hidden" name="taxonomyType" value="tag" />
              <div className="space-y-2">
                <label htmlFor="tagName" className="text-sm font-medium text-slate-200">Name</label>
                <Input id="tagName" name="tagName" placeholder="Interview Prep" required className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400" />
              </div>
              <Button type="submit" className="bg-white text-slate-950 hover:bg-slate-100">Save tag</Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {categories.length === 0 ? (
              <p className="text-sm text-slate-400">No categories yet.</p>
            ) : (
              categories.map((category) => (
                <div key={category.id} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="font-semibold text-white">{category.name}</p>
                    <p className="text-sm text-slate-400">{category.description || "No description provided."}</p>
                  </div>
                  <form action={deleteTaxonomyEntry}>
                    <input type="hidden" name="taxonomyType" value="category" />
                    <input type="hidden" name="entryId" value={category.id} />
                    <Button type="submit" variant="outline" className="border-white/15 bg-transparent text-rose-200 hover:bg-rose-500 hover:text-white">Delete</Button>
                  </form>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Tags</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {tags.length === 0 ? (
              <p className="text-sm text-slate-400">No tags yet.</p>
            ) : (
              tags.map((tag) => (
                <div key={tag.id} className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="font-semibold text-white">{tag.name}</p>
                  <form action={deleteTaxonomyEntry}>
                    <input type="hidden" name="taxonomyType" value="tag" />
                    <input type="hidden" name="entryId" value={tag.id} />
                    <Button type="submit" variant="outline" className="border-white/15 bg-transparent text-rose-200 hover:bg-rose-500 hover:text-white">Delete</Button>
                  </form>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}