import type { Metadata } from "next";
import Script from "next/script";
import SkyStatesReviewClient from "./ReviewClient";

export const metadata: Metadata = {
  title: "Sky States Review 2026: Programs, Pricing & Student Outcomes | SkyReviews",
  description:
    "A comprehensive review of Sky States — covering programs, pricing ($2,999), refund policy, student outcomes, pros and cons, and common concerns. Updated June 2026.",
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Sky States",
  "url": "https://skystates.us",
  "description": "Online technology training bootcamp offering Data Science, Cyber Security, and DevOps programs aligned to Microsoft certifications.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.1",
    "reviewCount": "47",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Robert M." },
      "datePublished": "2025-02-15",
      "reviewBody": "Sky States helped me bridge the gap between college coding and industry requirements. I went from unemployed to a Junior Data Analyst at Amazon within 4 months of graduation."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Sarah P." },
      "datePublished": "2025-05-10",
      "reviewBody": "Building real pipelines on Azure and AWS made all the difference in my technical interviews. Went from Systems Admin to DevOps Engineer at Lockheed Martin."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Daniel K." },
      "datePublished": "2025-07-20",
      "reviewBody": "The weekend schedule is perfect for working professionals. The DP-900 prep was thorough and I passed on my first attempt."
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "30 N Gould St",
      "addressLocality": "Sheridan",
      "addressRegion": "WY",
      "postalCode": "82801",
      "addressCountry": "US"
    }
  ],
  "telephone": "+1-888-810-2434",
  "email": "info@skystates.us"
};

export default function SkyStatesProfilePage() {
  return (
    <>
      <Script
        id="sky-states-aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <SkyStatesReviewClient />
    </>
  );
}
