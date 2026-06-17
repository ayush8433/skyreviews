import { prisma } from "@/lib/prisma";
import { requireAdminUser } from "@/lib/admin-auth";
import { createAdminUser, deleteAdminUser } from "@/lib/admin-cert-actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Users, ShieldCheck, Trash2, Plus, Calendar } from "lucide-react";

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string; error?: string }>;
}) {
  const params = await searchParams;
  const currentAdmin = await requireAdminUser();
  const admins = await prisma.adminUser.findMany({
    orderBy: { createdAt: "asc" },
    include: { _count: { select: { sessions: true } } },
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="space-y-2">
          <Badge className="bg-violet-500/15 text-violet-200 hover:bg-violet-500/15">
            Admin Users
          </Badge>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Users className="w-7 h-7 text-violet-400" />
            Admin User Management
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Create and manage admin accounts for the SkyReviews admin panel. You cannot delete your own account or the last remaining admin.
          </p>
        </div>

        {params.message && (
          <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
            ✓ {params.message}
          </div>
        )}
        {params.error && (
          <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
            ✗ {params.error}
          </div>
        )}
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Existing Admins */}
        <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              Admin Accounts ({admins.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {admins.map((admin) => {
              const isCurrentUser = admin.id === currentAdmin.id;
              const isLastAdmin = admins.length === 1;
              const canDelete = !isCurrentUser && !isLastAdmin;

              return (
                <div
                  key={admin.id}
                  className={`flex items-center justify-between gap-4 rounded-2xl border p-4 ${
                    isCurrentUser
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : "border-white/10 bg-slate-950/50"
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-white truncate">{admin.name || "—"}</p>
                      {isCurrentUser && (
                        <span className="text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          You
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400 truncate">{admin.email}</p>
                    <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Joined {new Date(admin.createdAt).toLocaleDateString("en-US", {
                          month: "short", day: "numeric", year: "numeric",
                        })}
                      </span>
                      <span>{admin._count.sessions} active session{admin._count.sessions !== 1 ? "s" : ""}</span>
                    </div>
                  </div>

                  {canDelete && (
                    <form action={deleteAdminUser}>
                      <input type="hidden" name="adminUserId" value={admin.id} />
                      <Button
                        type="submit"
                        variant="outline"
                        size="sm"
                        className="border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500 hover:text-white shrink-0"
                        onClick={(e) => {
                          if (!confirm(`Remove admin access for ${admin.email}?`)) e.preventDefault();
                        }}
                      >
                        <Trash2 className="w-3.5 h-3.5 mr-1.5" /> Remove
                      </Button>
                    </form>
                  )}
                  {!canDelete && (
                    <span className="text-xs text-slate-600 shrink-0">
                      {isCurrentUser ? "Current session" : "Last admin"}
                    </span>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Create New Admin */}
        <Card className="border-white/10 bg-white/5 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-blue-400" />
              Create New Admin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={createAdminUser} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200" htmlFor="name">
                  Full Name (optional)
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="e.g. Priya Sharma"
                  className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200" htmlFor="email">
                  Email Address <span className="text-rose-400">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@skystates.us"
                  required
                  className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-200" htmlFor="password">
                  Password <span className="text-rose-400">*</span>
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Minimum 8 characters"
                  required
                  minLength={8}
                  className="border-white/10 bg-slate-950/70 text-white placeholder:text-slate-400"
                />
                <p className="text-xs text-slate-500">
                  The new admin will be able to log in immediately with this password.
                </p>
              </div>

              <div className="pt-2 border-t border-white/10">
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 mb-4">
                  <p className="text-xs text-amber-200 leading-relaxed">
                    ⚠️ New admin users will have full access to all content management features. Share credentials securely.
                  </p>
                </div>
                <Button type="submit" className="w-full bg-white text-slate-950 hover:bg-slate-100">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Admin Account
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
