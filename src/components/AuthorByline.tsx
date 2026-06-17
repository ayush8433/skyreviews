import React from "react";

interface AuthorBylineProps {
  editorName?: string;
  date?: string;
  datetime?: string;
}

export default function AuthorByline({
  editorName = "Preeti S.",
  date = "June 2026",
  datetime = "2026-06-08"
}: AuthorBylineProps) {
  return (
    <div className="flex items-center gap-2.5 py-3 border-y border-slate-200/60 my-5 text-sm text-slate-500 font-medium max-w-xl">
      <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-800 border border-blue-100 flex items-center justify-center font-bold text-xs shrink-0 select-none">
        SR
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-slate-800 text-sm">SkyReviews Editorial Team</span>
        <span className="text-xs text-slate-400">
          Reviewed by <strong className="text-slate-600 font-bold">{editorName}</strong> · Last updated: <time dateTime={datetime}>{date}</time>
        </span>
      </div>
    </div>
  );
}
