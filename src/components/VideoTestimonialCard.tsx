import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, MapPin, Building } from "lucide-react";

interface VideoTestimonialCardProps {
  story: {
    id: string;
    title: string;
    slug: string;
    thumbnailUrl?: string;
    content: string;
    alumni: {
      name: string;
      title: string;
      company?: string;
      location?: string;
      imageUrl?: string;
    };
    categories: Array<{
      category: {
        name: string;
      };
    }>;
    tags: Array<{
      tag: {
        name: string;
      };
    }>;
  };
}

export default function VideoTestimonialCard({ story }: VideoTestimonialCardProps) {
  const excerpt = story.content.substring(0, 150) + "...";
  
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/stories/${story.slug}`}>
        <div className="relative">
          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden bg-gray-100">
            {story.thumbnailUrl ? (
              <Image
                src={story.thumbnailUrl}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-gray-200">
                <Play className="w-12 h-12 text-gray-400" />
              </div>
            )}
            
            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="bg-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <Play className="w-6 h-6 text-blue-600 fill-current" />
              </div>
            </div>
          </div>
          
          {/* Featured badge */}
          {story.categories.some(cat => cat.category.name === 'Featured') && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-yellow-500 text-white">Featured</Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          {/* Alumni info */}
          <div className="flex items-center gap-3 mb-4">
            {story.alumni.imageUrl ? (
              <Image
                src={story.alumni.imageUrl}
                alt={story.alumni.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 font-semibold">
                  {story.alumni.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
            <div>
              <h3 className="font-semibold text-gray-900">{story.alumni.name}</h3>
              <p className="text-sm text-gray-600">{story.alumni.title}</p>
              {story.alumni.company && (
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Building className="w-3 h-3" />
                  {story.alumni.company}
                </div>
              )}
              {story.alumni.location && (
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="w-3 h-3" />
                  {story.alumni.location}
                </div>
              )}
            </div>
          </div>
          
          {/* Story title and excerpt */}
          <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {story.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {story.tags.slice(0, 3).map((tag) => (
              <Badge key={tag.tag.name} variant="secondary" className="text-xs">
                {tag.tag.name}
              </Badge>
            ))}
            {story.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{story.tags.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
