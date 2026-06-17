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
              href="/placement-managers"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Placement Managers
            </Link>
            <Link
              href="/outcomes"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Outcomes
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer">
                Resources
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-100 shadow-xl py-2 rounded-xl w-48 mt-0 z-50 animate-fade-in">
                <Link href="/roadmaps" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  Learning Roadmaps
                </Link>
                <Link href="/certifications" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  Certification Guides
                </Link>
                <Link href="/glossary" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  Technical Glossary
                </Link>
                <Link href="/interview-prep" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  Interview Prep
                </Link>
              </div>
            </div>

            <Link
              href="/podcasts"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Podcasts
            </Link>
            {/* Company Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer">
                Company
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white border border-gray-100 shadow-xl py-2 rounded-xl w-48 mt-0 z-50 animate-fade-in">
                <Link href="/about" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
                <Link href="/partnerships" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  Partnerships
                </Link>
                <Link href="/faq" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          <Button asChild>
            <Link href="/submit">Share Your Story</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
