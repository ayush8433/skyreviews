"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X, Filter } from "lucide-react";

interface StoryFiltersProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onTagFilter: (tag: string) => void;
  onSort: (sort: string) => void;
  availableCategories: string[];
  availableTags: string[];
  activeFilters: {
    search: string;
    category: string;
    tags: string[];
    sort: string;
  };
}

export default function StoryFilters({
  onSearch,
  onCategoryFilter,
  onTagFilter,
  onSort,
  availableCategories,
  availableTags,
  activeFilters,
}: StoryFiltersProps) {
  const [searchQuery, setSearchQuery] = useState(activeFilters.search);
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleTagToggle = (tag: string) => {
    const newTags = activeFilters.tags.includes(tag)
      ? activeFilters.tags.filter(t => t !== tag)
      : [...activeFilters.tags, tag];
    onTagFilter(newTags.join(','));
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    onSearch('');
    onCategoryFilter('');
    onTagFilter('');
    onSort('latest');
  };

  const hasActiveFilters = activeFilters.search || activeFilters.category || activeFilters.tags.length > 0;

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="container mx-auto px-4 py-4">
        {/* Search bar */}
        <form onSubmit={handleSearchSubmit} className="flex gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search alumni by name, role, company, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button type="submit">Search</Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-1">
                {activeFilters.category ? 1 : 0 + activeFilters.tags.length}
              </Badge>
            )}
          </Button>
        </form>

        {/* Expanded filters */}
        {showFilters && (
          <div className="space-y-4 pb-4 border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <Select
                  value={activeFilters.category}
                  onValueChange={onCategoryFilter}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {availableCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Sort by */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <Select value={activeFilters.sort} onValueChange={onSort}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Latest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                    <SelectItem value="featured">Featured First</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Clear filters */}
              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  disabled={!hasActiveFilters}
                  className="w-full"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters
                </Button>
              </div>
            </div>

            {/* Tags */}
            {availableTags.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableTags.slice(0, 20).map((tag) => (
                    <Badge
                      key={tag}
                      variant={activeFilters.tags.includes(tag) ? "default" : "outline"}
                      className="cursor-pointer hover:bg-blue-100"
                      onClick={() => handleTagToggle(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Active filters summary */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-600">Active filters:</span>
                {activeFilters.search && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {activeFilters.search}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => {
                        setSearchQuery('');
                        onSearch('');
                      }}
                    />
                  </Badge>
                )}
                {activeFilters.category && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Category: {activeFilters.category}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => onCategoryFilter('')}
                    />
                  </Badge>
                )}
                {activeFilters.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => handleTagToggle(tag)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
