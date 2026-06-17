"use client";

import { useState } from "react";
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
  projectTitle?: string | null;
  projectUrl?: string | null;
};

type FeaturedStoriesSectionProps = {
  stories: FeaturedStory[];
};

export default function FeaturedStoriesSection({ stories }: FeaturedStoriesSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleStories = showAll ? stories : stories.slice(0, 6);

  return (
    <section id="featured-stories" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white scroll-mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Real Careers in Tech</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover the success stories of our alumni and why we do what we do.</p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleStories.map((alumni) => (
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
                projectTitle={alumni.projectTitle}
                projectUrl={alumni.projectUrl}
              />
            ))}
          </div>
        </div>

        {stories.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {showAll ? "Show Less" : `Show More (${stories.length - 6} more)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}