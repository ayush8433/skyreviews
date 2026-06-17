import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sky States Videos Student Reviews | Real Testimonials & Feedback",
  description:
    "Watch real Sky States student review videos and testimonials. Explore honest feedback about Data Science, AI, Cyber Security courses, mentorship, and career support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="3geyZ91dLgGj-mR6A8wpgbt87U35q0e5EBFRIUppJc4"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Sky Reviews",
              "url": "https://skyreviews.us/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://skyreviews.us/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why does Sky States call me multiple times before I enroll?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sky States' enrollment advisors follow up to ensure prospective students have complete information before committing to a program. Since tech training requires a significant financial and personal commitment, these calls are intended to answer questions and prepare students. However, if a candidate decides they are not interested, one clear message will prompt the company to remove them from the outreach registry."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Sky States a cold-calling scam or a legitimate program?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sky States is a legally registered training company incorporated in the United States, with offices at 30 N Gould St, Sheridan, WY 82801, and headquarters at 8 The Green Suite R, Dover, DE 19901. The company offers structured tech training programs aligned with Microsoft certifications, including the DP-900 (Azure Data Fundamentals) exam. Reviewers and students have documented their outcomes publicly on skyreviews.us, confirming that instructor-led classes are held regularly and support is accessible via info@skystates.us or (888) 810-2434."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why does my enrollment advisor follow up so persistently?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sky States advisors manage candidates in small cohorts, tracking individual progress and readiness. The persistence is part of their student evaluation and enrollment process. If the frequency of calls is too high, candidates can set boundaries directly, and the company is expected to respect those preferences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I enroll without receiving repeated phone calls?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Candidates who prefer to communicate exclusively by email can request this by contacting info@skystates.us. They can also research student experiences on skyreviews.us independently to make a decision at their own pace."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Why does Sky States use a sales team instead of letting people sign up online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sky States utilizes a conversation-first enrollment process to assess student backgrounds and ensure the training matches their career goals, helping avoid mismatched enrollments. However, students who prefer to bypass phone calls can request to correspond entirely over email."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does the Sky States program cost and what does $2,999 include?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The training program is priced at $2,999 and covers live instructor-led weekend sessions, project work, curriculum aligned with Microsoft DP-900 standards, mock interview prep, and career support. There are no separate charges for course materials."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does Sky States offer EMI or installment payment options?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Sky States provides installment and payment arrangement options to help accommodate students' financial situations. Prospective students can coordinate a payment schedule with their enrollment advisor or by emailing info@skystates.us."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Sky States' refund policy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sky States' refund policy for courses of 6 months or more includes: a full refund if canceled within 3 business days of signing/paying; a full refund minus a registration fee (capped at $99) if canceled before the first class; and a full tuition refund minus registration fees if withdrawn in the first week. No refunds are issued after the first week of classes. US-based students are also eligible for a full refund within 14 days of purchase if course content has not been accessed. All refund requests are initiated via info@skystates.us."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is there a free trial or demo session before I commit to paying?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sky States offers a one-to-one consultation session before enrollment so candidates can preview the instruction style and ask curriculum questions directly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there any hidden charges after the initial enrollment fee?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The $2,999 program fee covers training, curriculum access, projects, and certification prep. The only additional cost is the Microsoft certification exam fee itself, which is paid directly to Microsoft."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Sky States an accredited or certified training program?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sky States is a registered training provider whose curriculum is aligned with Microsoft certification standards. While not a traditional accredited university, the program is designed to prepare students for the Microsoft DP-900 certification exam."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industry partnerships does Sky States have?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sky States' curriculum is aligned with Microsoft's training framework, preparing students for the Microsoft DP-900 Azure Data Fundamentals exam. The program utilizes industry-standard tools and cloud environments to help build relevant career skills."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long has Sky States been operating?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sky States operates as a registered training company. Student outcomes and reviews are publicly documented on skyreviews.us to provide transparency regarding cohorts and student experiences."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Who are the instructors at Sky States and what are their qualifications?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sessions are led by working tech professionals with hands-on experience in data science, cloud, and AI roles, rather than academic-only instructors."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="bg-amber-50 border-b border-amber-200 py-2.5 px-4 text-center text-xs md:text-sm text-amber-900 font-medium min-h-[40px] md:min-h-[38px] flex items-center justify-center flex-wrap gap-x-1">
          <span>⚠️ <strong>Editorial Independence & Ownership Disclosure:</strong> SkyReviews.us is an independent digital publication owned by the same parent company as Sky States, operating under separate editorial management. All reviews and editorial content are produced under an independent editorial policy. See our</span>
          <Link href="/transparency/conflict-of-interest" className="underline hover:text-amber-900 font-bold transition-colors">Conflict of Interest Policy</Link>
          <span>for full details.</span>
        </div>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
