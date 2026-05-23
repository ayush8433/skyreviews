"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ShareButton() {
  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Button 
      onClick={handleShare}
      variant="outline" 
      className="rounded-full px-6 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 transition-all active:scale-95"
    >
      <Share2 className="h-4 w-4 mr-2" />
      Share Story
    </Button>
  );
}
