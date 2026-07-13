import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import SchemaMarkup from "@/components/SchemaMarkup";
import InteractivePortfolio from "./InteractivePortfolio";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const manager = await prisma.placementManager.findFirst({
    where: {
      OR: [
        { slug },
        { id: slug },
      ],
    },
  });

  if (!manager) {
    return {
      title: "Placement Manager | SkyReviews",
    };
  }

  return {
    title: `${manager.name} | ${manager.role} - SkyReviews`,
    description: manager.bio || `${manager.name} is a Placement Manager at Sky Reviews.`,
  };
}

const ArrowLeftIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
);

export default async function PublicPlacementManagerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const manager = await prisma.placementManager.findFirst({
    where: {
      OR: [
        { slug },
        { id: slug },
      ],
    },
    include: {
      reviews: {
        orderBy: { createdAt: "desc" },
      },
      videos: {
        orderBy: { createdAt: "desc" },
      },
      assignedStories: {
        where: { isPublished: true },
        include: { alumni: true },
      },
      assignedVideos: {
        where: { isActive: true },
      },
      assignedPodcasts: {
        where: { isActive: true },
      },
    },
  });

  if (!manager) {
    notFound();
  }

  // Fetch all managers for the Leadership Nexus navigation at the bottom
  const allManagers = await prisma.placementManager.findMany({
    orderBy: { createdAt: "asc" },
  });

  // Compute average rating
  const averageRating =
    manager.reviews.length > 0
      ? (
          manager.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
          manager.reviews.length
        ).toFixed(1)
      : "5.0";

  // Star distribution
  const starCounts = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: manager.reviews.filter((r) => r.rating === stars).length,
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": manager.name,
      "jobTitle": manager.role,
      "description": manager.bio || `${manager.name} is a Placement Manager at Sky Reviews.`,
      "image": manager.imageUrl || undefined,
      "sameAs": [],
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": "https://schema.org/WriteAction",
        "userInteractionCount": manager.reviews.length
      },
      ...(manager.reviews.length > 0 ? {
        "review": manager.reviews.map(r => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": r.reviewerName
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": r.rating,
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": r.content,
          "datePublished": r.createdAt.toISOString().split('T')[0]
        }))
      } : {})
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-200 font-sans antialiased selection:bg-[#00dfc6] selection:text-[#00201b] dark">
      <SchemaMarkup data={schemaData} />
      
      {/* Load Google Fonts & Custom CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Geist:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .grid-pulse {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(253, 250, 245, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(253, 250, 245, 0.03) 1px, transparent 1px);
        }
        .grain-overlay {
            background-image: url("https://www.transparenttextures.com/patterns/p6-dark.png");
            opacity: 0.03;
            pointer-events: none;
        }
        .font-display {
            font-family: 'Playfair Display', serif;
        }
        .font-geist {
            font-family: 'Geist', sans-serif;
        }
        .font-mono-tech {
            font-family: 'JetBrains Mono', monospace;
        }
        .corner-notch {
            clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%);
        }
        .hairline {
            border: 1px solid rgba(253, 250, 245, 0.08);
        }
        .glow-teal {
            filter: drop-shadow(0 0 15px rgba(0, 229, 204, 0.15));
        }
      `}} />

      {/* Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-[100]"></div>

      {/* ─── Immersive Portfolio Header ─── */}
      <section className="relative overflow-hidden pt-32 pb-20 border-b border-white/10 grid-pulse">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-cyan-500/5 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-[#00dfc6]/5 blur-[120px] rounded-full -rotate-12" />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <Link
            href="/placement-managers"
            className="group inline-flex items-center gap-2 text-[#c4c7c7] hover:text-white transition-colors mb-8"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 group-hover:border-white/30 transition-all">
              <ArrowLeftIcon />
            </div>
            <span className="text-sm font-medium font-geist">Back to Directory</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Profile Photo */}
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="h-36 w-36 md:h-44 md:w-44 rounded-none border border-white/15 bg-gradient-to-br from-slate-800 to-slate-950 text-white font-bold flex items-center justify-center shadow-2xl overflow-hidden shrink-0 corner-notch">
                <img
                  src={manager.imageUrl || "https://placehold.co/400x400/3b82f6/ffffff?text=Avatar"}
                  alt={manager.name}
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="md:col-span-9 text-center md:text-left space-y-4">
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
                <span className="bg-[#00dfc6]/10 text-[#00dfc6] border border-[#00dfc6]/20 px-3 py-1 text-xs font-mono-tech uppercase tracking-widest">
                  PLACEMENT OFFICE
                </span>
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 text-xs font-mono-tech uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  VERIFIED MENTOR
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                {manager.name}
              </h1>
              <p className="text-lg text-[#00dfc6] font-mono-tech uppercase tracking-wider">
                {manager.role}
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-3 font-geist">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-amber-400 fill-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-bold text-white text-lg">
                    {averageRating}
                  </span>
                  <span className="text-sm text-[#c4c7c7]">
                    ({manager.reviews.length} candidate reviews)
                  </span>
                </div>
                <div className="h-5 w-px bg-white/15" />
                <div className="flex items-center gap-1.5 text-sm text-[#c4c7c7] font-medium">
                  <svg className="h-4 w-4 text-[#00dfc6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {manager.videos.length} Video Insights
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content Section ─── */}
      <section className="py-16 container mx-auto px-6 max-w-6xl relative z-10">
        <InteractivePortfolio
          manager={manager}
          reviews={manager.reviews}
          videos={manager.videos}
          averageRating={averageRating}
          starCounts={starCounts}
          allManagers={allManagers}
        />
      </section>
    </div>
  );
}
