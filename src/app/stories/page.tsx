"use client";

import { useState, useEffect } from "react";
import VideoTestimonialCard from "@/components/VideoTestimonialCard";
import StoryFilters from "@/components/StoryFilters";

// Mock data for now - will be replaced with database data
const mockStories = [
  {
    id: "1",
    title: "From Student to Senior Developer",
    slug: "from-student-to-senior-developer",
    thumbnailUrl: undefined,
    content: "My journey through SkyStates transformed my career. I started as a complete beginner and now I'm leading development teams at major tech companies.",
    alumni: {
      name: "Sarah Johnson",
      title: "Senior Software Engineer",
      company: "Tech Corp",
      location: "San Francisco, CA",
      imageUrl: undefined,
    },
    categories: [
      { category: { name: "Career Growth" } },
      { category: { name: "Featured" } },
    ],
    tags: [
      { tag: { name: "Software Engineering" } },
      { tag: { name: "Leadership" } },
      { tag: { name: "Career Change" } },
    ],
  },
  {
    id: "2",
    title: "Breaking into Tech from Finance",
    slug: "breaking-into-tech-from-finance",
    thumbnailUrl: undefined,
    content: "After 10 years in finance, I decided to make a career change. SkyStates provided the perfect pathway to transition into the tech industry.",
    alumni: {
      name: "Michael Chen",
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      imageUrl: undefined,
    },
    categories: [
      { category: { name: "Career Change" } },
    ],
    tags: [
      { tag: { name: "Career Transition" } },
      { tag: { name: "Full Stack" } },
      { tag: { name: "Finance to Tech" } },
    ],
  },
  {
    id: "3",
    title: "Remote Work Success Story",
    slug: "remote-work-success-story",
    thumbnailUrl: undefined,
    content: "SkyStates prepared me for the remote work environment. I now work for a global company from my home in Texas.",
    alumni: {
      name: "Emily Rodriguez",
      title: "Frontend Developer",
      company: "GlobalTech",
      location: "Austin, TX",
      imageUrl: undefined,
    },
    categories: [
      { category: { name: "Remote Work" } },
    ],
    tags: [
      { tag: { name: "Remote" } },
      { tag: { name: "Frontend" } },
      { tag: { name: "Work-Life Balance" } },
    ],
  },
];

export default function StoriesPage() {
  const [stories, setStories] = useState(mockStories);
  const [filteredStories, setFilteredStories] = useState(mockStories);
  const [filters, setFilters] = useState<{
    search: string;
    category: string;
    tags: string[];
    sort: string;
  }>({
    search: "",
    category: "",
    tags: [],
    sort: "latest",
  });

  const availableCategories = ["Career Growth", "Career Change", "Remote Work", "Featured"];
  const availableTags = [
    "Software Engineering",
    "Leadership",
    "Career Change",
    "Career Transition",
    "Full Stack",
    "Finance to Tech",
    "Remote",
    "Frontend",
    "Work-Life Balance",
  ];

  useEffect(() => {
    let filtered = [...stories];

    // Apply search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (story) =>
          story.title.toLowerCase().includes(searchLower) ||
          story.content.toLowerCase().includes(searchLower) ||
          story.alumni.name.toLowerCase().includes(searchLower) ||
          story.alumni.title.toLowerCase().includes(searchLower) ||
          story.alumni.company?.toLowerCase().includes(searchLower) ||
          story.tags.some((tag) => tag.tag.name.toLowerCase().includes(searchLower))
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter((story) =>
        story.categories.some((cat) => cat.category.name === filters.category)
      );
    }

    // Apply tags filter
    if (filters.tags.length > 0) {
      filtered = filtered.filter((story) =>
        filters.tags.some((tag) =>
          story.tags.some((storyTag) => storyTag.tag.name === tag)
        )
      );
    }

    // Apply sorting
    switch (filters.sort) {
      case "latest":
        // In a real app, this would sort by creation date
        break;
      case "oldest":
        filtered.reverse();
        break;
      case "name":
        filtered.sort((a, b) => a.alumni.name.localeCompare(b.alumni.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.alumni.name.localeCompare(a.alumni.name));
        break;
      case "featured":
        filtered.sort((a, b) => {
          const aFeatured = a.categories.some(cat => cat.category.name === "Featured");
          const bFeatured = b.categories.some(cat => cat.category.name === "Featured");
          return bFeatured ? 1 : aFeatured ? -1 : 0;
        });
        break;
    }

    setFilteredStories(filtered);
  }, [stories, filters]);

  const handleSearch = (query: string) => {
    setFilters({ ...filters, search: query });
  };

  const handleCategoryFilter = (category: string) => {
    setFilters({ ...filters, category });
  };

  const handleTagFilter = (tagsString: string) => {
    const tags = tagsString ? tagsString.split(',').filter(t => t.trim()) : [];
    setFilters({ ...filters, tags });
  };

  const handleSort = (sort: string) => {
    setFilters({ ...filters, sort });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StoryFilters
        onSearch={handleSearch}
        onCategoryFilter={handleCategoryFilter}
        onTagFilter={handleTagFilter}
        onSort={handleSort}
        availableCategories={availableCategories}
        availableTags={availableTags}
        activeFilters={filters}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Alumni Stories</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the career journeys and experiences of SkyStates alumni
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Showing {filteredStories.length} of {stories.length} stories
          </p>
        </div>

        {filteredStories.length === 0 ? (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No stories found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms to find more stories.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map((story) => (
              <VideoTestimonialCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
