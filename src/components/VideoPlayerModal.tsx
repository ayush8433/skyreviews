"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Share2, Download } from "lucide-react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

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
  const [isPlaying, setIsPlaying] = useState(false);

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
      <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          {/* Video player */}
          <div className="aspect-video bg-black">
            {videoUrl ? (
              <ReactPlayer
                src={videoUrl}
                width="100%"
                height="100%"
                playing={isPlaying}
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                <p>No video available</p>
              </div>
            )}
          </div>
          
          {/* Video info and actions */}
          <div className="p-6 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-gray-600">by {alumniName}</p>
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
