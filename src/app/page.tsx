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
    };
  });

  const headerVideos = testimonialVideos.length > 0 ? testimonialVideos : videoTestimonials;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sky States",
    "url": "https://skystates.us",
    "logo": "https://skyreviews.us/logo.png",
    "sameAs": [
      "https://skyreviews.us"
    ],
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
      <VideoTestimonialsSection items={headerVideos} />

      {/* Hero Section */}
      <section id="Alumni-Hero-Section" className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-light text-blue-100">Fuelling Passions.</h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="block text-white">Meet Our</span>
                  <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">Student Testimonials.</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed">
                Read real Sky States student testimonials and discover how our programs unlock purpose, confidence, and life-changing opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="#featured-stories">Learn More</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
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
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4">
          <HorizontalMarquee images={heroAlumniImages} className="px-4" />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
      </section>

      {/* Featured Stories Preview */}
      <FeaturedStoriesSection stories={featuredAlumniData} />

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">We&apos;re With You All the Way.</h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">Are You a SkyStates Alumnus?<br />Share your career journey and inspire the next generation of tech professionals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <Link href="/submit">Share Your Story</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
