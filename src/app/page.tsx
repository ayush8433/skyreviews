import Link from "next/link";
import { Button } from "@/components/ui/button";
import VerticalImageCarousel from "@/components/VerticalImageCarousel";
import HorizontalMarquee from "@/components/HorizontalMarquee";
import AlumniCard from "@/components/AlumniCard";
import { alumniData } from "@/data/alumniData";

export default function Home() {
  // Sample alumni images - replace with actual alumni photos
  const alumniImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop&crop=face",
  ];

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
                    Alumni.
                  </span>
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed">
                Our programs don't just equip talent to make an impact. 
                They unlock purpose and life-changing opportunities.
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
            {alumniData.slice(0, 6).map((alumni) => (
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
