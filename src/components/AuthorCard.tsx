import React from "react";
import Link from "next/link";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AuthorCardProps {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  linkedinUrl?: string;
  credentials?: string[];
}

export default function AuthorCard({
  name,
  role,
  bio,
  imageUrl,
  linkedinUrl,
  credentials = [],
}: AuthorCardProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");

  return (
    <Card className="border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl overflow-hidden my-6">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Avatar / Profile image */}
          <div className="h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-xl md:text-2xl flex items-center justify-center shadow-lg shrink-0 overflow-hidden">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
            ) : (
              <span>{initials}</span>
            )}
          </div>

          {/* Author Details */}
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                {name}
              </h4>
              <span className="inline-flex items-center gap-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full text-xs font-bold border border-blue-500/10">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified Editor
              </span>
            </div>

            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {role}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {bio}
            </p>

            {/* Credentials / Badges */}
            {credentials.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {credentials.map((cred, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2 py-1 rounded-md font-medium"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            )}

            {/* Action footer */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 text-xs">
              <Link
                href="/transparency/methodology"
                className="text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors font-medium underline underline-offset-2"
              >
                Our Editorial Standards &amp; Review Policy
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
