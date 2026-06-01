"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, X } from "lucide-react";

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
  alumniName: string;
}

export default function VideoPlayerModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  alumniName,
}: VideoPlayerModalProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} - ${alumniName}`,
          text: `Watch ${alumniName}'s story on SkyReviews`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="h-[92vh] w-[96vw] max-w-7xl overflow-hidden p-0 bg-black border-0">
        <div className="relative flex h-full flex-col bg-slate-950">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-20 bg-black/50 text-white hover:bg-black/70"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
            {videoUrl ? (
              <video
                className="h-full w-full object-contain"
                controls
                autoPlay
                playsInline
                controlsList="nodownload noplaybackrate"
                disablePictureInPicture
                onContextMenu={(event) => event.preventDefault()}
                src={videoUrl}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <p>No video available</p>
              </div>
            )}
          </div>

          <div className="border-t border-white/10 bg-slate-950 px-6 py-5 text-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
                <p className="text-white/70">by {alumniName}</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
