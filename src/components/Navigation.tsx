import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            SkyReviews
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              href="/#video-testimonials"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Video Testimonials
            </Link>

            <Link
              href="/outcomes"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Outcomes
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                Resources
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-slate-900/95 backdrop-blur-md border border-white/10 shadow-2xl py-2 rounded-xl w-48 mt-0 z-50 animate-fade-in">
                <Link href="/roadmaps" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  Learning Roadmaps
                </Link>
                <Link href="/certifications" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  Certification Guides
                </Link>
                <Link href="/glossary" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  Technical Glossary
                </Link>
                <Link href="/interview-prep" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  Interview Prep
                </Link>
                <Link href="/placement-managers" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  Placement Managers
                </Link>
              </div>
            </div>

            <Link
              href="/podcasts"
              className="text-slate-300 hover:text-white transition-colors"
            >
              Podcasts
            </Link>
            {/* Company Dropdown */}
            <div className="relative group flex items-center h-full">
              <button className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
                Company
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 hidden group-hover:block bg-slate-900/95 backdrop-blur-md border border-white/10 shadow-2xl py-2 rounded-xl w-48 mt-0 z-50 animate-fade-in">
                <Link href="/about" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/partnerships" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  Partnerships
                </Link>
                <Link href="/faq" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
                  FAQ
                </Link>
                <Link href="/contact" className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors">
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
