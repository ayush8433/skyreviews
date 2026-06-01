import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SkyReviews
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              href="/#video-testimonials"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Video Testimonials
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/submit" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Share Story
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </div>
          
          <Button asChild>
            <Link href="/submit">Share Your Story</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
