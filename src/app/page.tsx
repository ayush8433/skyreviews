import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import VerticalImageCarousel from "@/components/VerticalImageCarousel";
import HorizontalMarquee from "@/components/HorizontalMarquee";
import AlumniCard from "@/components/AlumniCard";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import { prisma } from "@/lib/prisma";
import { videoTestimonials } from "@/data/videoTestimonials";

<<<<<<< Updated upstream
export default async function Home() {
=======
export const metadata: Metadata = {
  title: "Sky States Students Testimonials | SkyReviews",
  description:
    "Read Sky States student testimonials about real career journeys, mentorship, and outcomes in tech.",
};

export default function Home() {
>>>>>>> Stashed changes
  // Sample alumni images - replace with actual alumni photos
  const alumniImages = [
    "https://placehold.co/400x300/e2e8f0/1e293b?text=Placeholder+1",
    "https://placehold.co/400x300/e2e8f0/1e293b?text=Placeholder+2",
    "https://placehold.co/400x300/e2e8f0/1e293b?text=Placeholder+3",
    "https://placehold.co/400x300/e2e8f0/1e293b?text=Placeholder+4",
    "https://placehold.co/400x300/e2e8f0/1e293b?text=Placeholder+5",
    "https://placehold.co/400x300/e2e8f0/1e293b?text=Placeholder+6",
  ];

  const latestStories = await prisma.story.findMany({
    where: { isPublished: true },
    include: { alumni: true },
    take: 6,
    orderBy: { createdAt: 'desc' }
  });


  const featuredAlumniData = latestStories.map(story => {
    // Extract a short snippet for testimonial
    const firstParagraph = story.content.split('\n\n')[0].replace(/^["“]|["”]$/g, '');
    return {
      id: story.id,
      name: story.alumni.name,
      title: story.alumni.title,
      company: story.alumni.company || '',
      companyLogo: '',
      image: story.alumni.imageUrl || 'https://placehold.co/400x300/e2e8f0/1e293b?text=' + encodeURIComponent(story.alumni.name),
      testimonial: firstParagraph.substring(0, 150) + (firstParagraph.length > 150 ? '...' : ''),
      slug: story.slug
    };
  });
export default async function Home() {
  const headerVideos = videoTestimonials;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="Alumni-Hero-Section" className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="text-white space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-light text-blue-100">
                  Fuelling Passions.
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <span className="block text-white">Meet Our</span>
                  <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                    Student Testimonials.
                  </span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed">
                Read real Sky States student testimonials and discover how our programs
                unlock purpose, confidence, and life-changing opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="#alumni-section">Learn More</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <Link href="/stories">Explore Stories</Link>
                </Button>
              </div>
            </div>

            {/* Right - Vertical Image Carousel (Desktop) */}
            <div className="hidden lg:block h-96 lg:h-[500px]">
              <VerticalImageCarousel images={alumniImages} />
            </div>
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="lg:hidden absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm py-4">
          <HorizontalMarquee images={alumniImages} className="px-4" />
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
      </section>

      <VideoTestimonialsSection items={headerVideos} />

      {/* Featured Stories Preview */}
      <section id="alumni-section" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Careers in Tech
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the success stories of our alumni and why we do what we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredAlumniData.map((alumni) => (
              <AlumniCard
                key={alumni.id}
                id={alumni.id}
                name={alumni.name}
                title={alumni.title}
                company={alumni.company}
                companyLogo={alumni.companyLogo}
                image={alumni.image}
                testimonial={alumni.testimonial}
                slug={alumni.slug}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <Link href="/stories">View All Stories</Link>
            </Button>
          </div>
        </div>
      </section>

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
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              We're With You All the Way.
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Are You a SkyStates Alumnus?
              <br />
              Share your career journey and inspire the next generation of tech professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/submit">Share Your Story</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
