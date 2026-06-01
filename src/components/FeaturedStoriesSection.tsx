"use client";

import AlumniCard from "@/components/AlumniCard";

type FeaturedStory = {
  id: string;
  name: string;
  title: string;
  company: string;
  companyLogo: string;
  image: string;
  testimonial: string;
  slug: string;
};

type FeaturedStoriesSectionProps = {
  stories: FeaturedStory[];
};

export default function FeaturedStoriesSection({ stories }: FeaturedStoriesSectionProps) {
  return (
    <section id="featured-stories" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Real Careers in Tech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the success stories of our alumni and why we do what we do.</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((alumni) => (
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
        </div>
      </div>
    </section>
  );
}