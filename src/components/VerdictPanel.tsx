import React from "react";
import { Check, X, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface VerdictPanelProps {
  verdict: string;
  summary: string;
  pros: string[];
  cons: string[];
}

export default function VerdictPanel({
  verdict,
  summary,
  pros,
  cons,
}: VerdictPanelProps) {
  return (
    <Card className="border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-xl shadow-slate-100 dark:shadow-none my-8">
      {/* Visual Verdict Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Editorial Verdict
            </span>
            <h3 className="text-2xl font-black tracking-tight">{verdict}</h3>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 self-start sm:self-auto">
            <ThumbsUp className="h-4.5 w-4.5 text-blue-200 fill-blue-200" />
            <span className="text-xs font-bold">Tested &amp; Verified</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6 md:p-8 space-y-6">
        {/* TL;DR Summary Block */}
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="verdict-summary text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-normal">
            {summary}
          </p>
        </div>

        <div className="h-px bg-slate-200/60 dark:bg-slate-800/60" />

        {/* Side-by-side Pros & Cons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pros */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <Check className="h-3 w-3 stroke-[3]" />
              </span>
              Key Strengths (Pros)
            </h4>
            <ul className="pro-list space-y-2.5">
              {pros.map((pro, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-rose-600 dark:text-rose-400 flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                <X className="h-3 w-3 stroke-[3]" />
              </span>
              Considerations (Cons)
            </h4>
            <ul className="con-list space-y-2.5">
              {cons.map((con, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
