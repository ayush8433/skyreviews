import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginAdmin } from "@/lib/admin-actions";

export const metadata: Metadata = {
  title: "Admin Login | SkyReviews",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>;
}) {
  const params = await searchParams;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_34%),linear-gradient(180deg,#020617_0%,#0f172a_100%)] px-4 py-16 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="bg-white/10 text-white hover:bg-white/10">Admin access</Badge>
            <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Review submissions, approve stories, and manage testimonial media.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Sign in with the admin email and password to manage story approvals, update published content, and control video testimonials.
            </p>
          </div>

          <Card className="border-white/10 bg-white/95 text-slate-950 shadow-2xl shadow-black/30">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-950">Admin Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {params.message ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  {params.message}
                </div>
              ) : null}
              {params.error ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
                  {params.error}
                </div>
              ) : null}

              <form action={loginAdmin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="support@skyreviews.us" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <Input id="password" name="password" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800">
                  Sign in
                </Button>
              </form>

              <p className="text-sm text-slate-500">
                Need the public site? Return to <Link href="/" className="font-medium text-slate-900 underline underline-offset-4">SkyReviews</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}