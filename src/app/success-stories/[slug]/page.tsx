import { notFound } from "next/navigation";
import { Metadata } from "next";
import { successStories, StudentSuccessStory } from "@/data/success-stories-data";
import SuccessStoryClient from "./SuccessStoryClient";

import { prisma } from "@/lib/prisma";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getStoryBySlug(slug: string): Promise<StudentSuccessStory | null> {
  // 1. Try to find the story in the database
  try {
    const dbStory = await prisma.story.findFirst({
      where: { slug, isPublished: true },
      include: {
        alumni: true,
        categories: { include: { category: true } },
      },
    }) as any;

    if (dbStory) {
      const parsedMeta = dbStory.metaJson ? JSON.parse(dbStory.metaJson) : null;
      if (parsedMeta) {
        return {
          id: dbStory.id,
          slug: dbStory.slug,
          name: dbStory.alumni.name,
          photoUrl: dbStory.alumni.imageUrl || dbStory.thumbnailUrl || "",
          program: dbStory.alumni.title,
          track: dbStory.categories[0]?.category.name || "Career Transition",
          previousCareer: dbStory.alumni.bio || "Non-Technical Background",
          currentCareerGoal: dbStory.alumni.title,
          location: dbStory.alumni.location || "United States",
          videoUrl: dbStory.videoUrl || "",
          quickSummary: dbStory.title,
          ...parsedMeta,
        } as StudentSuccessStory;
      }
    }
  } catch (error) {
    console.error("Error fetching story from DB:", error);
  }

  // 2. Fall back to static successStories array
  const staticStory = successStories.find((s) => s.slug === slug);
  return staticStory || null;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    return {
      title: "Story Not Found | SkyReviews",
      description: "The requested student success story could not be found.",
    };
  }

  return {
    title: `${story.name} Sky States Review | Transition from ${story.previousCareer} to ${story.currentCareerGoal}`,
    description: story.quickSummary,
    openGraph: {
      title: `${story.name} Student Success Story | SkyReviews`,
      description: story.quickSummary,
      type: "article",
      url: `https://skyreviews.us/success-stories/${story.slug}`,
    },
  };
}

export default async function SuccessStoryPage({ params }: Props) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  // Define structured JSON-LD schemas for maximum Knowledge Graph & search engine citations
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": story.name,
    "jobTitle": story.currentCareerGoal,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": story.location,
    },
    "knowsAbout": story.technologiesLearned,
    "worksFor": {
      "@type": "Organization",
      "name": "SkyStates Graduate",
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${story.name} Success Story: How he transitioned to Data Science`,
    "description": story.quickSummary,
    "author": {
      "@type": "Organization",
      "name": "SkyReviews Editorial Board",
      "url": "https://skyreviews.us"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SkyReviews",
      "logo": {
        "@type": "ImageObject",
        "url": "https://skyreviews.us/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://skyreviews.us/success-stories/${story.slug}`
    }
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": `${story.name} Sky States Review Video Testimonial`,
    "description": story.quickSummary,
    "thumbnailUrl": [
      "https://placehold.co/960x540/0b1120/bae6fd?text=Shamim+Kazi+Transition"
    ],
    "uploadDate": "2026-01-15T08:00:00Z",
    "contentUrl": story.videoUrl,
    "embedUrl": story.videoUrl,
    "transcript": story.transcript,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": story.faqs.slice(0, 10).map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://skyreviews.us"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Success Stories",
        "item": "https://skyreviews.us/success-stories"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": story.name,
        "item": `https://skyreviews.us/success-stories/${story.slug}`
      }
    ]
  };

  return (
    <>
      {/* Inject Structured JSON-LD SEO/GEO Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Render the rich interactive Client View */}
      <SuccessStoryClient story={story} />
    </>
  );
}
