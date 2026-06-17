import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import AuthorByline from "@/components/AuthorByline";
import { Badge } from "@/components/ui/badge";
import faqSchema from "@/data/faq-schema.json";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SkyReviews",
  description: "Find answers to the most common questions about the Sky States tech training programs, placement support, and curriculum.",
};

type FAQItem = {
  question: string;
  answer: React.ReactNode;
  answerText: string; // Plain text for Schema
};

type FAQCategory = {
  title: string;
  items: FAQItem[];
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Frequently Asked Questions — Sky States Programs",
  "url": "https://skyreviews.us/faq",
  "dateModified": "2026-06-08",
  "author": {
    "@type": "Organization",
    "name": "SkyReviews Editorial Team",
    "url": "https://skyreviews.us/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SkyReviews",
    "url": "https://skyreviews.us",
    "logo": {
      "@type": "ImageObject",
      "url": "https://skyreviews.us/logo.png"
    }
  }
};

const faqData: FAQCategory[] = [
  {
    title: "Category 1: Sales Approach",
    items: [
      {
        question: "Why does Sky States call me multiple times before I enroll?",
        answer: "Sky States enrollment advisors follow up to ensure prospective students have complete information before committing to a program. Since tech training requires a significant financial and personal commitment, these calls are intended to answer questions and prepare students. However, if a candidate decides they are not interested, one clear message will prompt the company to remove them from the outreach registry.",
        answerText: "Sky States enrollment advisors follow up to ensure prospective students have complete information before committing to a program..."
      },
      {
        question: "Is Sky States a cold-calling scam or a legitimate program?",
        answer: (
          <>
            Sky States is a legally registered training company incorporated in the United States, with offices at 30 N Gould St, Sheridan, WY 82801, and headquarters at 8 The Green Suite R, Dover, DE 19901. The company offers structured tech training programs aligned with Microsoft certifications, including the DP-900 (Azure Data Fundamentals) exam. Reviewers and students have documented their outcomes publicly on <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link>, confirming that instructor-led classes are held regularly and support is accessible via info@skystates.us or (888) 810-2434.
          </>
        ),
        answerText: "Sky States is a legally registered training company incorporated in the United States..."
      },
      {
        question: "Why does my enrollment advisor follow up so persistently?",
        answer: "Sky States advisors manage candidates in small cohorts, tracking individual progress and readiness. The persistence is part of their student evaluation and enrollment process. If the frequency of calls is too high, candidates can set boundaries directly, and the company is expected to respect those preferences.",
        answerText: "Sky States advisors manage candidates in small cohorts, tracking individual progress and readiness..."
      },
      {
        question: "Can I enroll without receiving repeated phone calls?",
        answer: (
          <>
            Yes. Candidates who prefer to communicate exclusively by email can request this by contacting <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a>. They can also research student experiences on <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link> independently to make a decision at their own pace.
          </>
        ),
        answerText: "Yes. Candidates who prefer to communicate exclusively by email can request this by contacting info@skystates.us..."
      },
      {
        question: "Why does Sky States use a sales team instead of letting people sign up online?",
        answer: "Sky States utilizes a conversation-first enrollment process to assess student backgrounds and ensure the training matches their career goals, helping avoid mismatched enrollments. However, students who prefer to bypass phone calls can request to correspond entirely over email.",
        answerText: "Sky States utilizes a conversation-first enrollment process to assess student backgrounds and ensure the training matches their career goals..."
      }
    ]
  },
  {
    title: "Category 2: Pricing & Payment Transparency",
    items: [
      {
        question: "How much does the Sky States program cost and what does $2,999 include?",
        answer: "The training program is priced at $2,999 and covers live instructor-led weekend sessions, project work, curriculum aligned with Microsoft DP-900 standards, mock interview prep, and career support. There are no separate charges for course materials.",
        answerText: "The training program is priced at $2,999 and covers live instructor-led weekend sessions, project work, curriculum aligned with Microsoft DP-900 standards..."
      },
      {
        question: "Does Sky States offer EMI or installment payment options?",
        answer: (
          <>
            Yes. Sky States provides installment and payment arrangement options to help accommodate students' financial situations. Prospective students can coordinate a payment schedule with their enrollment advisor or by emailing <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a>.
          </>
        ),
        answerText: "Yes. Sky States provides installment and payment arrangement options to help accommodate students' financial situations..."
      },
      {
        question: "What is Sky States' refund policy?",
        answer: (
          <div className="space-y-4">
            <p>Sky States' refund policy for courses of 6 months or more includes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Full refund if canceled within <strong>3 business days</strong> of signing and paying.</li>
              <li>Full refund minus a registration fee <strong>(capped at $99)</strong> if canceled before the first class.</li>
              <li>Full tuition refund minus registration fees if withdrawn in the <strong>first week of classes</strong>.</li>
              <li>No refunds are issued after the first week of classes.</li>
            </ul>
            <p>US-based students are also eligible for a <strong>full refund within 14 days of purchase</strong> if course content has not been accessed. All refund requests are initiated via <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a>.</p>
          </div>
        ),
        answerText: "Sky States' refund policy for courses of 6 months or more includes: a full refund if canceled within 3 business days of signing/paying..."
      },
      {
        question: "Is there a free trial or demo session before I commit to paying?",
        answer: "Yes, Sky States offers a one-to-one consultation session before enrollment so candidates can preview the instruction style and ask curriculum questions directly. A $99 payment is required.",
        answerText: "Yes, Sky States offers a one-to-one consultation session before enrollment so candidates can preview the instruction style..."
      },
      {
        question: "Are there any hidden charges after the initial enrollment fee?",
        answer: "No. The $2,999 program fee covers training, curriculum access, projects, and certification prep. The only additional cost is the Microsoft certification exam fee itself, which is paid directly to Microsoft.",
        answerText: "No. The $2,999 program fee covers training, curriculum access, projects, and certification prep..."
      }
    ]
  },
  {
    title: "Category 3: Legitimacy & Credentials",
    items: [
      {
        question: "Is Sky States an accredited or certified training program?",
        answer: "Sky States is a registered training provider whose curriculum is aligned with Microsoft certification standards. While not a traditional accredited university, the program is designed to prepare students for the Microsoft DP-900 certification exam.",
        answerText: "Sky States is a registered training provider whose curriculum is aligned with Microsoft certification standards..."
      },
      {
        question: "What industry partnerships does Sky States have?",
        answer: "Sky States' curriculum is aligned with Microsoft's training framework, preparing students for the Microsoft DP-900 Azure Data Fundamentals exam. The program utilizes industry-standard tools and cloud environments to help build relevant career skills.",
        answerText: "Sky States' curriculum is aligned with Microsoft's training framework, preparing students for the Microsoft DP-900 Azure Data Fundamentals exam..."
      },
      {
        question: "How long has Sky States been operating?",
        answer: (
          <>
            Sky States operates as a registered training company. Student outcomes and reviews are publicly documented on <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link> to provide transparency regarding cohorts and student experiences.
          </>
        ),
        answerText: "Sky States operates as a registered training company. Student outcomes and reviews are publicly documented on skyreviews.us..."
      },
      {
        question: "Who are the instructors at Sky States and what are their qualifications?",
        answer: "Sessions are led by working tech professionals with hands-on experience in data science, cloud, and AI roles, rather than academic-only instructors.",
        answerText: "Sessions are led by working tech professionals with hands-on experience in data science, cloud, and AI roles..."
      },
      {
        question: "Is Sky States affiliated with Microsoft or other tech companies?",
        answer: "Sky States' training program is built around Microsoft's certification standards, preparing students for the official Microsoft DP-900 exam. The exam itself is administered by Microsoft directly.",
        answerText: "Sky States' training program is built around Microsoft's certification standards, preparing students for the official Microsoft DP-900 exam..."
      }
    ]
  },
  {
    title: "Category 4: Curriculum & Training Quality",
    items: [
      {
        question: "What makes Sky States' curriculum different from free YouTube tutorials?",
        answer: "While YouTube is a starting point, it lacks structure and feedback. Sky States combines live instruction, hands-on project work, and placement support to prepare students for interviews.",
        answerText: "While YouTube is a starting point, it lacks structure and feedback. Sky States combines live instruction, hands-on project work, and placement support..."
      },
      {
        question: "What topics are covered in the Sky States data management program?",
        answer: "The Sky States data management curriculum covers core data concepts, cloud data services with a focus on Microsoft Azure, data storage and processing models, analytics fundamentals, and AI/ML concepts applied to data roles.",
        answerText: "The Sky States data management curriculum covers core data concepts, cloud data services with a focus on Microsoft Azure..."
      },
      {
        question: "How are the weekend sessions structured and how long is the program?",
        answer: "Sessions run on weekends and are instructor-led, live, and interactive. The program duration is 6 months or more for the comprehensive track. Sessions include concept review, practice, and Q&A. Students receive access to recordings for review.",
        answerText: "Sessions run on weekends and are instructor-led, live, and interactive. The program duration is 6 months or more for the comprehensive track..."
      },
      {
        question: "Does Sky States provide hands-on project work or just theory?",
        answer: "Hands-on project work is a core component of Sky States programs. Students work with real datasets, build analytical solutions, and complete projects reflecting junior data role requirements. The goal is to build a portfolio for job interviews.",
        answerText: "Hands-on project work is a core component of Sky States programs. Students work with real datasets, build analytical solutions..."
      },
      {
        question: "What tools and platforms does the training prepare me for?",
        answer: "Students gain practical experience with Microsoft Azure services, cloud-based data platforms, collaborative coding environments, and tools commonly used in data analyst and data engineering roles.",
        answerText: "Students gain practical experience with Microsoft Azure services, cloud-based data platforms, collaborative coding environments..."
      }
    ]
  },
  {
    title: "Category 5: Job Placement & Real Projects",
    items: [
      {
        question: "How does Sky States' job placement process work?",
        answer: (
          <>
            Placement support begins during the program before graduation. Advisors track student progress, align profiles with relevant opportunities, and assist with mock interviews and resume preparation. Real student placement accounts are documented at <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link>.
          </>
        ),
        answerText: "Placement support begins during the program before graduation. Advisors track student progress, align profiles with relevant opportunities..."
      },
      {
        question: "What is Sky States' job placement success rate?",
        answer: (
          <>
            The program has students who have successfully transitioned to tech roles, with documented stories at <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link>. Formal placement rate tracking data is being developed as the program matures.
          </>
        ),
        answerText: "The program has students who have successfully transitioned to tech roles, with documented stories at skyreviews.us..."
      },
      {
        question: "Are the real-world projects offered by Sky States legitimate?",
        answer: "Yes. Sky States project work is structured around real datasets and problem statements in data analysis, cloud data management, and AI fundamentals. Projects are reviewed by instructors and form part of student portfolios.",
        answerText: "Yes. Sky States project work is structured around real datasets and problem statements in data analysis..."
      },
      {
        question: "Does Sky States guarantee a job after completion?",
        answer: "Sky States does not offer a job guarantee. The program provides active placement support including mock interviews, resume coaching, and advisor-led opportunity matching. Employment outcomes depend on the student's effort, background, and market conditions.",
        answerText: "Sky States does not offer a job guarantee. The program provides active placement support including mock interviews..."
      },
      {
        question: "Are Sky States job opportunities from direct clients or vendors?",
        answer: "Sky States works to connect students with direct client opportunities where possible. The nature of each placement opportunity — including engagement type, company type, and role expectations — is shared transparently with the student before acceptance.",
        answerText: "Sky States works to connect students with direct client opportunities where possible. The nature of each placement opportunity..."
      },
      {
        question: "Can I see examples of projects past students have worked on?",
        answer: (
          <>
            Yes. Student experiences, projects, and outcomes are documented on <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link>. Candidates can request details on project types during demo sessions.
          </>
        ),
        answerText: "Yes. Student experiences, projects, and outcomes are documented on skyreviews.us..."
      }
    ]
  },
  {
    title: "Category 6: Privacy & Security Concerns",
    items: [
      {
        question: "Why does Sky States ask for personal information during enrollment?",
        answer: "Sky States collects name, email address, and standard contact details during enrollment — only the information needed to create a student account, send course access, and support the program. Data collection is limited to creating student accounts and supporting the program.",
        answerText: "Sky States collects name, email address, and standard contact details during enrollment — only the information needed to create a student account..."
      },
      {
        question: "Is it safe to share my information with Sky States?",
        answer: (
          <>
            Yes. Sky States is a registered US company and handles all student information in accordance with applicable privacy standards. Contact details are publicly listed: (888) 810-2434, <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a>, 30 N Gould St, Sheridan, WY 82801. Data handling questions can be directed to the support team before enrollment.
          </>
        ),
        answerText: "Yes. Sky States is a registered US company and handles all student information in accordance with applicable privacy standards..."
      },
      {
        question: "Does Sky States require my Social Security Number?",
        answer: (
          <>
            No. Sky States does not require your Social Security Number as part of the standard enrollment process. Only name, email, and contact information are collected. Candidates can clarify directly with the team at <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> before proceeding.
          </>
        ),
        answerText: "No. Sky States does not require your Social Security Number as part of the standard enrollment process. Only name, email, and contact information are collected..."
      },
      {
        question: "Is my payment and personal data secure with Sky States?",
        answer: (
          <>
            Yes. Payments are processed through secure channels. Sky States does not store raw payment details. Students with concerns about a payment interaction can contact <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> or call (888) 810-2434 for clarification.
          </>
        ),
        answerText: "Yes. Payments are processed through secure channels. Sky States does not store raw payment details..."
      }
    ]
  },
  {
    title: "Category 7: Student Experience & Support",
    items: [
      {
        question: "What do current Sky States students say about their experience?",
        answer: (
          <>
            Real student experiences — including training feedback, project work accounts, and placement outcomes — are available at <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link>. A range of perspectives is available to assist prospective students in making informed decisions.
          </>
        ),
        answerText: "Real student experiences — including training feedback, project work accounts, and placement outcomes — are available at skyreviews.us..."
      },
      {
        question: "What kind of support does Sky States provide after enrollment?",
        answer: "Once enrolled, students receive advisor support, including curriculum help, recording access, certification prep, and placement assistance.",
        answerText: "Once enrolled, students receive advisor support, including curriculum help, recording access, certification prep..."
      },
      {
        question: "Who is my point of contact once I enroll at Sky States?",
        answer: "Every student is assigned a dedicated advisor for scheduling, curriculum, and placement coordination. Instructors are also accessible during weekend sessions.",
        answerText: "Every student is assigned a dedicated advisor for scheduling, curriculum, and placement coordination..."
      },
      {
        question: "How do I access course materials, recordings, and workbooks?",
        answer: (
          <>
            All materials are available through the learning platform. Access issues can be resolved via advisors or <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a>.
          </>
        ),
        answerText: "All materials are available through the learning platform. Access issues can be resolved via advisors or info@skystates.us..."
      },
      {
        question: "Can I speak to a current or past student before enrolling?",
        answer: (
          <>
            Yes. In addition to reviewing <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link>, prospective students can ask their enrollment advisor to coordinate a discussion with a current student or graduate.
          </>
        ),
        answerText: "Yes. In addition to reviewing skyreviews.us, prospective students can ask their enrollment advisor to coordinate a discussion..."
      }
    ]
  },
  {
    title: "Category 8: Handling Doubts & Comparisons",
    items: [
      {
        question: "How does Sky States compare to Coursera, Udemy, or bootcamps?",
        answer: "Sky States offers live weekend instruction structured for working adults, combined with prep for the Microsoft DP-900 certification, unlike self-paced platform course completion badges.",
        answerText: "Sky States offers live weekend instruction structured for working adults, combined with prep for the Microsoft DP-900 certification..."
      },
      {
        question: "What should I research before enrolling in any data training program?",
        answer: "Prospective students should verify registration, read independent reviews, understand the refund policy, and check certification pathways before enrolling.",
        answerText: "Prospective students should verify registration, read independent reviews, understand the refund policy..."
      },
      {
        question: "Why do some people call Sky States a scam online?",
        answer: "Common concerns online relate to upfront costs and advisor follow-up frequency. Sky States has stated they are working to align their outreach practices with student feedback while focusing on program delivery.",
        answerText: "Common concerns online relate to upfront costs and advisor follow-up frequency. Sky States has stated they are working to align their outreach practices..."
      },
      {
        question: "How does Sky States respond to negative reviews?",
        answer: (
          <>
            Sky States reads feedback across platforms to implement improvements. <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link> serves as an independent record of student experiences and does not curate it to show only positive outcomes.
          </>
        ),
        answerText: "Sky States reads feedback across platforms to implement improvements. skyreviews.us serves as an independent record of student experiences..."
      },
      {
        question: "What steps has Sky States taken to improve its enrollment process based on feedback?",
        answer: (
          <>
            Based on feedback, Sky States has updated advisor training on opt-out preferences, clarified that screen sharing is optional, published full refund details, and supported <Link href="/" className="text-blue-600 hover:underline">skyreviews.us</Link> to provide transparency.
          </>
        ),
        answerText: "Based on feedback, Sky States has updated advisor training on opt-out preferences, clarified that screen sharing is optional..."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 font-sans antialiased text-slate-800 dark:text-slate-200">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="faq-author-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      
      {/* Immersive Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-28">
        {/* Animated background blurs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/4 w-1/2 h-full bg-blue-600/20 blur-[120px] rounded-full rotate-12" />
          <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-full bg-indigo-600/20 blur-[120px] rounded-full -rotate-12" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center max-w-3xl space-y-6">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
            Support & Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <div className="flex justify-center">
            <AuthorByline />
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Sky States, our tech training programs, and how we support your career journey.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 text-xs text-slate-300">
            Updated: June 2026
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {faqData.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 pb-2 border-b border-slate-200 dark:border-slate-800">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <details
                    key={itemIndex}
                    className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <h3 className="text-lg pr-4">{item.question}</h3>
                      <span className="shrink-0 rounded-full bg-blue-50 dark:bg-blue-950/50 p-2 text-blue-600 dark:text-blue-400 group-open:-rotate-180 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-5 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-2 text-base">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
          
          <div className="flex justify-center my-8">
            <AuthorByline />
          </div>

          {/* CTA / Contact Section */}
          <div className="mt-16 bg-white dark:bg-slate-900 rounded-3xl p-8 text-center border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-600 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Still have questions?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Reach out to our team directly and we&apos;ll be happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@skystates.us"
                  className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
                >
                  Email Us
                </a>
                <a
                  href="tel:888-810-2434"
                  className="inline-flex justify-center items-center px-6 py-3 border border-slate-200 dark:border-slate-700 text-base font-medium rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 shadow-sm transition-colors"
                >
                  (888) 810-2434
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
