import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import VerticalImageCarousel from "@/components/VerticalImageCarousel";
import HorizontalMarquee from "@/components/HorizontalMarquee";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import FeaturedStoriesSection from "@/components/FeaturedStoriesSection";
import { getAlumniImageUrl, heroAlumniImages } from "@/lib/alumni-images";
import { prisma } from "@/lib/prisma";
import { videoTestimonials } from "@/data/videoTestimonials";

const TRUSTSCHOOL_LINKS: Record<string, string> = {
  "finance-professional-move-into-devops": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sez0001ew5wyparkl1c#review-cmrdz0sez0001ew5wyparkl1c",
  "building-future-in-data-science-after-motherhood": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sf50003ew5w92a6zb1j#review-cmrdz0sf50003ew5w92a6zb1j",
  "from-customer-service-to-cybersecurity": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sfc0005ew5w85thmj5y#review-cmrdz0sfc0005ew5w85thmj5y",
  "sky-states-review-mechanical-engineer-to-data-scientist-dieter-vance": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sfr0008ew5w01d7g4ea#review-cmrdz0sfr0008ew5w01d7g4ea",
  "sky-states-review-customer-support-to-cybersecurity-analyst-priya-sharma": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sg2000bew5whn1bqrn6#review-cmrdz0sg2000bew5whn1bqrn6",
  "breaking-into-cybersecurity-without-cs-degree": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sg8000dew5w5awxqciq#review-cmrdz0sg8000dew5w5awxqciq",
  "starting-over-in-america-through-tech": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sgk000gew5wppncjlke#review-cmrdz0sgk000gew5wppncjlke",
  "sky-states-review-retail-store-manager-to-data-analyst-marcus-torres": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sgp000iew5wex9mb03a#review-cmrdz0sgp000iew5wex9mb03a",
  "sky-states-review-middle-school-science-teacher-to-data-analyst-elena-rodriguez": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sgu000kew5w7o2t8rmu#review-cmrdz0sgu000kew5w7o2t8rmu",
  "sky-states-review-stay-at-home-mom-to-business-intelligence-analyst-sarah-jenkins": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sh0000mew5w091ck3le#review-cmrdz0sh0000mew5w091ck3le",
  "from-mechanical-engineering-to-data-analytics": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sh5000oew5wks9ckbl4#review-cmrdz0sh5000oew5wks9ckbl4",
  "i-thought-it-was-another-scam": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sh6000pew5wk981ksla#review-cmrdz0sh6000pew5wk981ksla",
  "i-almost-hung-up-during-the-first-call": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sh7000qew5wk028kdns#review-cmrdz0sh7000qew5wk028kdns",
  "three-thousand-dollars-felt-like-a-huge-risk": "https://trustschool.us/businesses/skystates?reviewId=cmrdz0sh8000rew5wkm1lq9d0#review-cmrdz0sh8000rew5wkm1lq9d0",
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sky States Students Testimonials | SkyReviews",
  description: "Read Sky States student testimonials about real career journeys, mentorship, and outcomes in tech.",
};

export default async function Home() {
  const latestStories = await prisma.story.findMany({
    where: { isPublished: true },
    include: { alumni: true },
    orderBy: { publishedAt: "desc" },
  });

  const testimonialVideos = await prisma.videoTestimonial.findMany({
    where: { isActive: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "desc" }],
  });

  const podcasts = await prisma.podcast.findMany({
    where: { isActive: true },
    include: { placementManager: true },
    orderBy: { createdAt: "desc" },
  });

  const alumni = await prisma.alumni.findMany({
    select: { name: true, linkedinUrl: true }
  });

  const getAlumniLinkedin = (name: string) => {
    const found = alumni.find(a => a.name.toLowerCase() === name.toLowerCase());
    if (found?.linkedinUrl) return found.linkedinUrl;
    return `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(name + " Sky States")}`;
  };

  const featuredAlumniData = latestStories.map((story) => {
    const firstParagraph = story.content.split("\n\n")[0].replace(/^['“]|['”]$/g, "");
    return {
      id: story.id,
      name: story.alumni.name,
      title: story.alumni.title,
      company: story.alumni.company || "",
      companyLogo: "",
      image:
        getAlumniImageUrl(story.alumni.name, story.alumni.imageUrl) ||
        "https://placehold.co/400x300/e2e8f0/1e293b?text=" + encodeURIComponent(story.alumni.name),
      testimonial: firstParagraph.substring(0, 150) + (firstParagraph.length > 150 ? "..." : ""),
      slug: story.slug,
      projectTitle: story.alumni.projectTitle,
      projectUrl: story.alumni.projectUrl,
      linkedinUrl: story.alumni.linkedinUrl || getAlumniLinkedin(story.alumni.name),
      trustschoolUrl: TRUSTSCHOOL_LINKS[story.slug] || null,
    };
  });

  const headerVideos = testimonialVideos.length > 0 ? testimonialVideos : videoTestimonials;

  // Map to unified layout format
  const mappedVideos = headerVideos.map((v) => ({
    id: v.id,
    type: "testimonial" as const,
    title: v.title,
    summary: v.summary,
    name: v.name,
    role: v.role,
    company: v.company,
    duration: v.duration,
    videoUrl: v.videoUrl,
    thumbnailUrl: v.thumbnailUrl || "",
    createdAt: 'createdAt' in v ? (v.createdAt as Date) : new Date(0),
    linkedinUrl: getAlumniLinkedin(v.name),
  }));

  const mappedPodcasts = podcasts.map((p) => ({
    id: p.id,
    type: "podcast" as const,
    title: p.title,
    summary: p.description,
    name: "Podcast Episode",
    role: p.placementManager ? `${p.placementManager.name} (${p.placementManager.role})` : "Placement Team & Alumni",
    company: "Sky States",
    duration: "Podcast",
    videoUrl: p.youtubeUrl || p.videoUrl || "",
    thumbnailUrl: p.thumbnailUrl || "",
    createdAt: p.createdAt,
    linkedinUrl: p.placementManager?.linkedinUrl || "https://www.linkedin.com/school/sky-states/",
  }));

  // Combine and sort by date/order
  const combinedItems = [...mappedVideos, ...mappedPodcasts].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  // Dynamic review count calculation
  const totalStoriesCount = await prisma.story.count({ where: { isPublished: true } });
  const totalVideosCount = await prisma.videoTestimonial.count({ where: { isActive: true } });
  const totalCertsCount = await prisma.studentCertification.count({ where: { isPublished: true } });
  const totalReviews = (totalStoriesCount || 0) + (totalVideosCount || 0) + (totalCertsCount || 0) + 18;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sky States",
    "url": "https://skystates.us",
    "logo": "https://skyreviews.us/logo.png",
    "sameAs": [
      "https://skyreviews.us"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": totalReviews
    },
    "location": [
      {
        "@type": "Place",
        "name": "Wyoming Operations",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "30 N Gould St",
          "addressLocality": "Sheridan",
          "addressRegion": "WY",
          "postalCode": "82801",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Place",
        "name": "Delaware Headquarters",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8 The Green Suite R",
          "addressLocality": "Dover",
          "addressRegion": "DE",
          "postalCode": "19901",
          "addressCountry": "US"
        }
      }
    ]
  };


  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <VideoTestimonialsSection items={combinedItems} />


      {/* Hero Section */}
      <section id="Alumni-Hero-Section" className="relative min-h-[80vh] flex items-center bg-transparent overflow-hidden py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-light text-blue-300">Fuelling Passions.</h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="block text-white">Meet Our</span>
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Student Testimonials.</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-slate-300 max-w-lg leading-relaxed">
                Read real Sky States student testimonials and discover how our programs unlock purpose, confidence, and life-changing opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-500 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/20"
                >
                  <Link href="#featured-stories">Learn More</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                  <Link href="#featured-stories">Explore Stories</Link>
                </Button>
              </div>
            </div>

            {/* Right - Vertical Image Carousel (Desktop) */}
            <div className="hidden lg:block h-96 lg:h-[500px]">
              <VerticalImageCarousel images={heroAlumniImages} />
            </div>
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm py-4">
          <HorizontalMarquee images={heroAlumniImages} className="px-4" />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
      </section>

      {/* Featured Stories Preview */}
      <FeaturedStoriesSection stories={featuredAlumniData} />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-transparent border-t border-b border-white/5 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">We&apos;re With You All the Way.</h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">Are You a SkyStates Alumnus?<br />Share your career journey and inspire the next generation of tech professionals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/20">
                <Link href="/submit">Share Your Story</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
