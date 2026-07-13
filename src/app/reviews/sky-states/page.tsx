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
      "author": { "@type": "Person", "name": "Shamim Kazi" },
      "datePublished": "2025-01-15",
      "reviewBody": "Sky States helped me bridge the gap between legacy operations and modern data engineering. The structured roadmap and hands-on capstone projects helped bridge the theory gap."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Sarah Jenkins" },
      "datePublished": "2025-02-20",
      "reviewBody": "The flexible schedules and supportive mentors helped me transition back into the workforce on my own terms. Excel Power Query and Tableau dashboard projects rebuilt my technical confidence."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "author": { "@type": "Person", "name": "Marcus Torres" },
      "datePublished": "2025-03-12",
      "reviewBody": "At 41, pivoting to a predictable 40-hour office week gave me control of my life back. Mentors helped me map out physical store inventory as relational tables, making SQL database joins click instantly."
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
      "name": "Sky States Review",
      "item": "https://skyreviews.us/reviews/sky-states"
    }
  ]
};

export default function SkyStatesProfilePage() {
  return (
    <>
      <Script
        id="sky-states-aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <Script
        id="sky-states-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SkyStatesReviewClient />
    </>
  );
}
