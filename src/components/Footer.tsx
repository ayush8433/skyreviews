import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h3 className="text-sm font-bold text-white tracking-wide">SkyReviews</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sharing success stories from SkyStates alumni around the world.
            </p>
            <p className="text-[10px] text-slate-500">
              Part of the SkyStates family.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Explore</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#featured-stories" className="text-slate-400 hover:text-white transition-colors">
                  Alumni Stories
                </Link>
              </li>
              <li>
                <Link href="/placement-managers" className="text-slate-400 hover:text-white transition-colors">
                  Placement Managers
                </Link>
              </li>
              <li>
                <Link href="/outcomes" className="text-slate-400 hover:text-white transition-colors font-semibold">
                  Outcomes &amp; Placements
                </Link>
              </li>
              <li>
                <Link href="/roadmaps" className="text-slate-400 hover:text-white transition-colors">
                  Learning Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-slate-400 hover:text-white transition-colors">
                  Certification Guides
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-slate-400 hover:text-white transition-colors">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About SkyStates
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Participate</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/submit" className="text-slate-400 hover:text-white transition-colors">
                  Share Your Story
                </Link>
              </li>
              <li>
                <Link href="/interview-prep" className="text-slate-400 hover:text-white transition-colors">
                  Interview Prep Hub
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-slate-400 hover:text-white transition-colors">
                  Technical Glossary
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Legal &amp; Trust</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/affiliation-disclosure" className="text-slate-400 hover:text-white transition-colors">
                  Affiliation Disclosure
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy" className="text-slate-400 hover:text-white transition-colors">
                  Editorial Policy
                </Link>
              </li>
              <li>
                <Link href="/transparency" className="text-slate-400 hover:text-white transition-colors">
                  Transparency Hub
                </Link>
              </li>
              <li>
                <Link href="/transparency/updates" className="text-slate-400 hover:text-white transition-colors font-medium">
                  Transparency Updates Log
                </Link>
              </li>
              <li>
                <Link href="/opt-out" className="text-slate-400 hover:text-white transition-colors text-amber-300 hover:text-amber-200 font-semibold">
                  Communications Opt-Out
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Connect</h4>
            <p className="text-xs text-slate-400 leading-relaxed">Learn more about SkyStates and our programs.</p>
            <p className="text-xs text-slate-400">
              Email:{" "}
              <a className="text-blue-400 hover:underline" href="mailto:support@skyreviews.us">
                support@skyreviews.us
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-6 pt-6 text-center">
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} SkyReviews. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
