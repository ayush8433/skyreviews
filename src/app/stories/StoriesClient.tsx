"use client";

import { useState, useEffect } from "react";
import VideoTestimonialCard from "@/components/VideoTestimonialCard";
import StoryFilters from "@/components/StoryFilters";

type StoriesClientProps = {
  initialStories: any[];
  availableCategories: string[];
  availableTags: string[];
};

export default function StoriesClient({ initialStories, availableCategories, availableTags }: StoriesClientProps) {
  const [stories, setStories] = useState(initialStories);
  const [filteredStories, setFilteredStories] = useState(initialStories);
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
          story.tags.some((tag: any) => tag.tag.name.toLowerCase().includes(searchLower))
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter((story) =>
        story.categories.some((cat: any) => cat.category.name === filters.category)
      );
    }

    // Apply tags filter
    if (filters.tags.length > 0) {
      filtered = filtered.filter((story) =>
        filters.tags.some((tag) =>
          story.tags.some((storyTag: any) => storyTag.tag.name === tag)
        )
      );
    }

    // Apply sorting
    switch (filters.sort) {
      case "latest":
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "oldest":
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
      case "name":
        filtered.sort((a, b) => a.alumni.name.localeCompare(b.alumni.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.alumni.name.localeCompare(a.alumni.name));
        break;
      case "featured":
        filtered.sort((a, b) => {
          const aFeatured = a.categories.some((cat: any) => cat.category.name === "Featured");
          const bFeatured = b.categories.some((cat: any) => cat.category.name === "Featured");
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
