import Link from "next/link";
import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { requireAdminUser } from "@/lib/admin-auth";
import { logoutAdmin } from "@/lib/admin-actions";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/stories", label: "Stories" },
  { href: "/admin/videos", label: "Videos" },
  { href: "/admin/taxonomy", label: "Categories & Tags" },
];

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const adminUser = await requireAdminUser();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <Link href="/admin" className="text-lg font-semibold text-white">
              SkyReviews Admin
            </Link>
            <p className="text-sm text-slate-400">Moderate stories and manage video testimonials.</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/15">
              {adminUser.name || adminUser.email}
            </Badge>
            <form action={logoutAdmin}>
              <Button type="submit" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white hover:text-slate-950">
                Sign out
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-8">
        <aside className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}