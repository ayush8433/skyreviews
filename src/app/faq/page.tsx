import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

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

const faqData: FAQCategory[] = [
  {
    title: "Category 1: Sales Approach",
    items: [
      {
        question: "Why does Sky States call me multiple times before I enroll?",
        answer: "Our enrollment advisors are genuinely invested in making sure every prospective student gets the right information before making a decision. Tech training is a significant commitment — financially and personally — and we've found that most people have questions they forget to ask in a single conversation. The follow-ups aren't pressure tactics; they're our way of making sure no one walks into the program confused or underprepared. That said, if you've decided this isn't for you, one clear message is all it takes — we remove you from our outreach list immediately.",
        answerText: "Our enrollment advisors are genuinely invested in making sure every prospective student gets the right information before making a decision..."
      },
      {
        question: "Is Sky States a cold-calling scam or a legitimate program?",
        answer: (
          <>
            Sky States is a legally registered training company incorporated in the United States, with offices at 30 N Gould St, Sheridan, WY 82801, and our INC headquarters at 8 The Green Suite R, Dover, DE 19901. We offer structured tech training programs that prepare students for Microsoft certifications, including the DP-900 (Azure Data Fundamentals). Our students have documented their experiences and outcomes publicly at <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link>. A legitimate program doesn't vanish after payment — our instructors show up every weekend, the curriculum is delivered as promised, and our support team is reachable at <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> or (888) 810-2434.
          </>
        ),
        answerText: "Sky States is a legally registered training company incorporated in the United States..."
      },
      {
        question: "Why does my enrollment advisor follow up so persistently?",
        answer: "Our advisors work closely with a limited batch of candidates at a time, which means they're tracking each person's journey individually rather than sending bulk emails into a void. The persistence comes from a place of accountability — advisors are measured not just on enrollments but on whether students they bring in actually succeed. If the frequency of calls feels like too much for you personally, that's a completely fair boundary to set, and we respect it without question.",
        answerText: "Our advisors work closely with a limited batch of candidates at a time, which means they're tracking each person's journey individually..."
      },
      {
        question: "Can I enroll without receiving repeated phone calls?",
        answer: (
          <>
            Absolutely. If you'd prefer to communicate by email or simply want time to research independently before speaking to anyone, just let us know at <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a>. You can also visit <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link> to read through real student experiences and make your decision at your own pace. We're not in the business of pressuring anyone — the program works best for students who choose it because they genuinely want to be here.
          </>
        ),
        answerText: "Absolutely. If you'd prefer to communicate by email or simply want time to research independently before speaking to anyone, just let us know..."
      },
      {
        question: "Why does Sky States use a sales team instead of letting people sign up online?",
        answer: "Tech training — especially a program that includes live instruction, project work, certification prep, and placement support — isn't something that fits neatly into a checkout cart. Our enrollment process involves understanding where each student currently is in their career, what they're hoping to achieve, and whether our program is genuinely the right match. The conversation-first approach means fewer mismatched enrollments and better outcomes. That said, if you want to skip the calls entirely and correspond over email, we accommodate that fully.",
        answerText: "Tech training — especially a program that includes live instruction, project work, certification prep, and placement support — isn't something that fits neatly into a checkout cart."
      }
    ]
  },
  {
    title: "Category 2: Pricing & Payment Transparency",
    items: [
      {
        question: "How much does the Sky States program cost and what does $2,999 include?",
        answer: "The Sky States training program is priced at $2,999 and covers end-to-end delivery: live instructor-led weekend sessions, hands-on project work with real datasets, structured curriculum aligned with Microsoft certification standards, mock interview preparation, and ongoing advisor support through your placement process. There are no separate charges for course materials or the certification prep component. For students who want to pursue the Microsoft DP-900 exam, guidance and preparation resources are included as part of the program.",
        answerText: "The Sky States training program is priced at $2,999 and covers end-to-end delivery: live instructor-led weekend sessions, hands-on project work with real datasets..."
      },
      {
        question: "Does Sky States offer EMI or installment payment options?",
        answer: (
          <>
            Yes. We understand that $2,999 is a meaningful amount for most people, and we don't think financial constraints should be the reason someone misses out on building a career in tech. Our team works with students to set up installment payment arrangements that fit their situation. Reach out to your enrollment advisor or email <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> to discuss a payment schedule that works for you before you commit to anything.
          </>
        ),
        answerText: "Yes. We understand that $2,999 is a meaningful amount for most people, and we don't think financial constraints should be the reason someone misses out on building a career in tech..."
      },
      {
        question: "What is Sky States' refund policy?",
        answer: (
          <div className="space-y-4">
            <p>Our refund policy is structured and clearly documented. For long-term courses (6 months and above):</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>If we don't accept your application, or if you cancel within <strong>3 business days</strong> of signing and paying, you receive a <strong>full refund</strong></li>
              <li>If you cancel after admission but before your first class, you get a refund of all fees paid <strong>except the registration fee (capped at $99)</strong></li>
              <li>If you withdraw during the <strong>first week of classes</strong>, you receive a full tuition refund minus the registration fee</li>
              <li>After the first week, no further refunds are issued — however, your access and classes continue as agreed</li>
            </ul>
            <p>For US-based students, consumer protection law entitles you to a <strong>full refund within 14 days of purchase</strong> if course content has not been accessed. All refunds are processed within 30 days of the request. Contact <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> to initiate a refund.</p>
          </div>
        ),
        answerText: "Our refund policy is structured and clearly documented. For long-term courses (6 months and above): If we don't accept your application..."
      },
      {
        question: "Is there a free trial or demo session before I commit to paying?",
        answer: "Yes — we offer a one-to-one session before enrollment so you can experience how our instruction works, ask curriculum questions directly, and decide whether the program fits your learning style and goals. We'd rather you make an informed decision than have regrets after signing up. Reach out to our team to schedule yours. You need to pay at least 99 dollars.",
        answerText: "Yes — we offer a one-to-one session before enrollment so you can experience how our instruction works, ask curriculum questions directly, and decide whether the program fits your learning style and goals. We'd rather you make an informed decision than have regrets after signing up. Reach out to our team to schedule yours. You need to pay at least 99 dollars."
      },
      {
        question: "Are there any hidden charges after the initial enrollment fee?",
        answer: "No. The program fee of $2,999 covers your training, curriculum access, project work, and certification preparation. There are no surprise charges buried in the process. The only additional cost a student would ever incur is the Microsoft certification exam fee itself, which is paid directly to Microsoft when you're ready to sit the exam — Sky States doesn't collect that fee.",
        answerText: "No. The program fee of $2,999 covers your training, curriculum access, project work, and certification preparation. There are no surprise charges buried in the process."
      }
    ]
  },
  {
    title: "Category 3: Legitimacy & Credentials",
    items: [
      {
        question: "Is Sky States an accredited or certified training program?",
        answer: "Sky States is a registered US company (incorporated in Delaware, with operational offices in Wyoming). We are a Microsoft-aligned training provider, meaning our curriculum is built around Microsoft certification pathways — specifically the DP-900 Azure Data Fundamentals exam. While we are not a traditional university or college, our programs are designed to produce measurable, verifiable outcomes: students who complete the program walk away with skills they can demonstrate and a certification they can put on a resume.",
        answerText: "Sky States is a registered US company (incorporated in Delaware, with operational offices in Wyoming). We are a Microsoft-aligned training provider..."
      },
      {
        question: "What industry partnerships does Sky States have?",
        answer: "Our curriculum is aligned with Microsoft's certification framework, and students who complete our program are prepared to sit for the Microsoft DP-900 (Azure Data Fundamentals) certification exam. Our training makes use of industry-standard tools and platforms used across data, cloud, and AI roles. We continue to build relationships in the industry to expand direct placement opportunities for our graduates.",
        answerText: "Our curriculum is aligned with Microsoft's certification framework, and students who complete our program are prepared to sit for the Microsoft DP-900 (Azure Data Fundamentals) certification exam."
      },
      {
        question: "How long has Sky States been operating?",
        answer: (
          <>
            Sky States has been operating as a registered US company and has worked with students across multiple cohorts in data, AI, and cloud training. Our student experience records and reviews are publicly available at <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link>, where you can read real accounts from people who have gone through the program at various stages.
          </>
        ),
        answerText: "Sky States has been operating as a registered US company and has worked with students across multiple cohorts in data, AI, and cloud training."
      },
      {
        question: "Who are the instructors at Sky States and what are their qualifications?",
        answer: "Our instructors are working tech professionals with hands-on experience in data science, cloud computing, and AI — not just academics teaching from textbooks. Weekend sessions are led by practitioners who bring real project context into the classroom. If you'd like to know more about the specific instructors for a particular program track before enrolling, our team can arrange a direct introduction during your one-to-one demo session.",
        answerText: "Our instructors are working tech professionals with hands-on experience in data science, cloud computing, and AI — not just academics teaching from textbooks."
      },
      {
        question: "Is Sky States affiliated with Microsoft or other tech companies?",
        answer: "Our training program is built around Microsoft's certification standards, and students completing our program are prepared for the official Microsoft DP-900 exam. The exam itself is administered by Microsoft directly. We use Microsoft Azure tools and environments as part of the hands-on curriculum, giving students practical exposure to the same platforms they'll encounter in real jobs.",
        answerText: "Our training program is built around Microsoft's certification standards, and students completing our program are prepared for the official Microsoft DP-900 exam."
      }
    ]
  },
  {
    title: "Category 4: Curriculum & Training Quality",
    items: [
      {
        question: "What makes Sky States' curriculum different from free YouTube tutorials?",
        answer: "YouTube is a great starting point, but it doesn't give you structure, accountability, deadlines, feedback, or someone to answer your specific questions when you're stuck. Our program combines live instruction with a defined learning path, hands-on project work, mock interviews, and placement support — things no YouTube playlist delivers. The difference isn't just content; it's the system around the content that takes someone from watching videos to being interview-ready.",
        answerText: "YouTube is a great starting point, but it doesn't give you structure, accountability, deadlines, feedback, or someone to answer your specific questions when you're stuck."
      },
      {
        question: "What topics are covered in the Sky States data management program?",
        answer: "Our curriculum spans core data concepts, cloud data services (with a focus on Microsoft Azure), data storage and processing models, analytics fundamentals, and AI/ML concepts as they apply to data roles. The program is designed to align with what employers are actually hiring for and what Microsoft tests in the DP-900 certification. Students also work on applied projects that go beyond theory and build the kind of portfolio that gets attention in interviews.",
        answerText: "Our curriculum spans core data concepts, cloud data services (with a focus on Microsoft Azure), data storage and processing models, analytics fundamentals, and AI/ML concepts as they apply to data roles."
      },
      {
        question: "How are the weekend sessions structured and how long is the program?",
        answer: "Sessions run on weekends and are instructor-led, live, and interactive — not pre-recorded videos you watch alone. The program duration is 6 months or more for the comprehensive track, with structured progression through curriculum phases, project milestones, and interview preparation. Each session includes concept review, guided practice using collaborative notebooks, and time for questions. Students receive access to all session recordings and materials for review between classes.",
        answerText: "Sessions run on weekends and are instructor-led, live, and interactive — not pre-recorded videos you watch alone."
      },
      {
        question: "Does Sky States provide hands-on project work or just theory?",
        answer: "Hands-on project work is a core part of the program. Students work with real datasets, build analytical solutions, and complete projects that reflect the kind of work they'd be expected to do in a junior data role. This isn't simulated busywork — the goal is to have something tangible in your portfolio by the time you're interviewing. Project scope and complexity increase as you progress through the program.",
        answerText: "Hands-on project work is a core part of the program. Students work with real datasets, build analytical solutions, and complete projects that reflect the kind of work they'd be expected to do in a junior data role."
      },
      {
        question: "What tools and platforms does the training prepare me for?",
        answer: "Students gain practical experience with Microsoft Azure services, cloud-based data platforms, collaborative coding environments, and the tools commonly used in data analyst and data engineering roles. The program prepares you specifically for the Microsoft DP-900 certification, which covers Azure data fundamentals — a widely recognized credential in the industry. Beyond certification prep, the curriculum introduces tools that appear regularly in job descriptions for entry-level and mid-level data roles.",
        answerText: "Students gain practical experience with Microsoft Azure services, cloud-based data platforms, collaborative coding environments, and the tools commonly used in data analyst and data engineering roles."
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
            Placement support begins well before you finish the program. As you move through training and project work, your advisor tracks your progress and starts aligning your profile with opportunities. The process includes mock interviews, resume preparation, and connecting you with relevant openings. Real student placement stories and experiences are documented at <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link> — we encourage prospective students to read them before deciding.
          </>
        ),
        answerText: "Placement support begins well before you finish the program. As you move through training and project work, your advisor tracks your progress and starts aligning your profile with opportunities."
      },
      {
        question: "What is Sky States' job placement success rate?",
        answer: (
          <>
            We have students who have successfully moved into tech roles after completing the program, and their stories are shared at <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link>. We're building our formal tracking data as our program matures, but we don't publish a number we can't stand behind. What we can say is that placement is an active, supported process — not something left to the student to figure out alone after graduation.
          </>
        ),
        answerText: "We have students who have successfully moved into tech roles after completing the program, and their stories are shared at skyreview.us."
      },
      {
        question: "Are the real-world projects offered by Sky States legitimate?",
        answer: "Yes. Project work is structured around real datasets and real problem statements in data analysis, cloud data management, and AI fundamentals. Projects are reviewed by instructors and form part of a student's portfolio. Any project opportunity offered through the program is discussed with the student in full — including scope, timeline, and expectations — before any commitment is made. Students are never asked to pay additional fees to participate in project work included in their program.",
        answerText: "Yes. Project work is structured around real datasets and real problem statements in data analysis, cloud data management, and AI fundamentals."
      },
      {
        question: "Does Sky States guarantee a job after completion?",
        answer: "We do not make a blanket job guarantee, and we'd encourage you to be skeptical of any training program that does. What we do commit to is active placement support: mock interviews, resume coaching, advisor-led opportunity matching, and ongoing guidance until you land. The outcomes depend on the student's effort and background as much as the program's support — and we're upfront about that.",
        answerText: "We do not make a blanket job guarantee, and we'd encourage you to be skeptical of any training program that does. What we do commit to is active placement support."
      },
      {
        question: "Are Sky States job opportunities from direct clients or vendors?",
        answer: "We work to connect students with direct client opportunities where possible. The specifics of each placement opportunity are shared transparently with the student involved, including the nature of the engagement, the company type, and the role expectations. Students are encouraged to ask questions and evaluate any opportunity on its own merits before accepting.",
        answerText: "We work to connect students with direct client opportunities where possible. The specifics of each placement opportunity are shared transparently with the student involved."
      },
      {
        question: "Can I see examples of projects past students have worked on?",
        answer: (
          <>
            Yes — student experiences, including project work and outcomes, are documented at <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link>. During your one-to-one demo session, you can also ask your instructor to walk you through the types of projects covered in the specific track you're interested in. We want you to know exactly what you're signing up for.
          </>
        ),
        answerText: "Yes — student experiences, including project work and outcomes, are documented at skyreview.us."
      }
    ]
  },
  {
    title: "Category 6: Privacy & Security Concerns",
    items: [
      {
        question: "Why does Sky States ask for personal information during enrollment?",
        answer: "We collect only the information needed to process your enrollment — name, email address, and standard contact details. This is consistent with what any legitimate training program collects to create your student account, send you course access, and keep you informed about your program. We do not collect information beyond what's necessary, and we do not sell your data to third parties.",
        answerText: "We collect only the information needed to process your enrollment — name, email address, and standard contact details."
      },
      {
        question: "Is it safe to share my information with Sky States?",
        answer: (
          <>
            Yes. Sky States is a registered US company and handles all student information in accordance with applicable privacy standards. Our contact details are publicly listed — (888) 810-2434, <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a>, 30 N Gould St, Sheridan, WY 82801 — and we operate transparently. If you have specific questions about how your data is stored or used, reach out to our support team directly before enrolling.
          </>
        ),
        answerText: "Yes. Sky States is a registered US company and handles all student information in accordance with applicable privacy standards."
      },
      {
        question: "Does Sky States require my Social Security Number?",
        answer: (
          <>
            No. Sky States does not require your Social Security Number as part of the standard enrollment process. We collect name, email, and contact information only. If you are ever asked for sensitive financial identity information during any enrollment interaction and feel uncomfortable, you are within your rights to pause and clarify directly with our team at <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> before proceeding.
          </>
        ),
        answerText: "No. Sky States does not require your Social Security Number as part of the standard enrollment process. We collect name, email, and contact information only."
      },
      {
        question: "Is my payment and personal data secure with Sky States?",
        answer: (
          <>
            Yes. Payments are processed through secure channels and your personal information is handled with standard data protection practices. Sky States does not store raw payment details on our end. If you have concerns about a specific payment interaction or want to confirm a charge, contact <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> or call (888) 810-2434 and our team will clarify within one business day.
          </>
        ),
        answerText: "Yes. Payments are processed through secure channels and your personal information is handled with standard data protection practices. Sky States does not store raw payment details on our end."
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
            Real student experiences — including training feedback, project work accounts, and placement outcomes — are available at <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link>. We maintain this as a transparent record of the program's impact. You'll find a range of perspectives there, and we encourage you to read them fully before making any decision about enrolling.
          </>
        ),
        answerText: "Real student experiences — including training feedback, project work accounts, and placement outcomes — are available at skyreview.us."
      },
      {
        question: "What kind of support does Sky States provide after enrollment?",
        answer: "Once enrolled, students have access to a dedicated advisor throughout the program — not just during the sales process. Support includes answers to curriculum questions between sessions, access to all session recordings and materials, guidance on certification preparation, mock interview coaching, and placement assistance. You're not handed a login and left alone.",
        answerText: "Once enrolled, students have access to a dedicated advisor throughout the program — not just during the sales process."
      },
      {
        question: "Who is my point of contact once I enroll at Sky States?",
        answer: "Every student is assigned a dedicated advisor who stays with them through the program. This person is your go-to for scheduling questions, curriculum concerns, project milestones, and placement coordination. You'll also have access to your instructors during and after weekend sessions. The goal is to make sure you always have a real person to reach out to, not a ticketing system.",
        answerText: "Every student is assigned a dedicated advisor who stays with them through the program."
      },
      {
        question: "How do I access course materials, recordings, and workbooks?",
        answer: (
          <>
            All materials — including session recordings, collaborative notebooks, workbooks, and curriculum documents — are made available to enrolled students through our learning platform. If you ever have trouble accessing a resource, contact your advisor or email <a href="mailto:info@skystates.us" className="text-blue-600 hover:underline">info@skystates.us</a> and it will be resolved promptly. Materials are yours to use throughout the duration of your program.
          </>
        ),
        answerText: "All materials — including session recordings, collaborative notebooks, workbooks, and curriculum documents — are made available to enrolled students through our learning platform."
      },
      {
        question: "Can I speak to a current or past student before enrolling?",
        answer: (
          <>
            Yes — and we encourage it. Reading through <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link> is a good starting point, and if you'd like to speak directly with someone who's been through the program, ask your enrollment advisor to arrange that. Making an informed decision matters more to us than rushing an enrollment.
          </>
        ),
        answerText: "Yes — and we encourage it. Reading through skyreview.us is a good starting point, and if you'd like to speak directly with someone who's been through the program, ask your enrollment advisor to arrange that."
      }
    ]
  },
  {
    title: "Category 8: Handling Doubts & Comparisons",
    items: [
      {
        question: "How does Sky States compare to Coursera, Udemy, or bootcamps?",
        answer: "Platforms like Coursera and Udemy are self-paced, which works well for disciplined learners who need flexibility but not structured accountability. Bootcamps are intensive and fast but often expensive and time-compressed. Sky States sits in a different lane — live weekend instruction that fits around a working adult's schedule, with the structure of a formal program and the outcome focus of a bootcamp. The Microsoft DP-900 certification component also gives you a credential with independent market recognition, not just a course completion badge.",
        answerText: "Platforms like Coursera and Udemy are self-paced, which works well for disciplined learners who need flexibility but not structured accountability."
      },
      {
        question: "What should I research before enrolling in any data training program?",
        answer: "Before enrolling anywhere, verify the company's registration, look for independently published student reviews, understand the refund policy in writing, confirm what certifications (if any) the program prepares you for, and make sure you know exactly what \"job placement support\" means — is it active or passive? Ask for instructor credentials and sample project work. Sky States is happy to answer all of these questions before you commit to anything.",
        answerText: "Before enrolling anywhere, verify the company's registration, look for independently published student reviews, understand the refund policy in writing, confirm what certifications (if any) the program prepares you for..."
      },
      {
        question: "Why do some people call Sky States a scam online?",
        answer: "The most common concerns come from the frequency of our outreach calls and the upfront cost of the program. We understand why that combination raises flags — aggressive sales calls are a signature move of bad actors in the online education space, and we take that association seriously. The difference is that our program delivers: live instruction every weekend, real projects, Microsoft certification prep, and placement support. We're working to improve how we communicate and reach out so that the first impression matches the quality of what we actually provide.",
        answerText: "The most common concerns come from the frequency of our outreach calls and the upfront cost of the program. We understand why that combination raises flags..."
      },
      {
        question: "How does Sky States respond to negative reviews?",
        answer: (
          <>
            We read every piece of feedback — on Reddit, on review platforms, and through direct student communication. Where a complaint is valid, we use it to improve. Where there's been miscommunication, we try to address it directly. We know that a training company's reputation is built over time through consistent delivery, not marketing. <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link> exists as a space for honest student voices, and we don't curate it to show only positive outcomes.
          </>
        ),
        answerText: "We read every piece of feedback — on Reddit, on review platforms, and through direct student communication. Where a complaint is valid, we use it to improve."
      },
      {
        question: "What steps has Sky States taken to improve its enrollment process based on feedback?",
        answer: (
          <>
            Based on feedback from students and prospective enrollees, we've made several changes: enrollment advisors are now trained to respect stated opt-out preferences immediately, screen sharing during enrollment is explicitly optional and never required, and our refund policy is published in full on our website so there's no ambiguity. We've also built out <Link href="/" className="text-blue-600 hover:underline">skyreview.us</Link> as a transparent student review platform so that prospective students can hear from people already in the program before deciding. This process is ongoing — we'd rather fix a problem than defend it.
          </>
        ),
        answerText: "Based on feedback from students and prospective enrollees, we've made several changes: enrollment advisors are now trained to respect stated opt-out preferences immediately..."
      }
    ]
  }
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answerText,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Everything you need to know about Sky States, our tech training programs, and how we support your career journey.
          </p>
          <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm">
            Updated: June 2026
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          {faqData.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <details
                    key={itemIndex}
                    className="group bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold text-slate-800 hover:bg-slate-50 transition-colors">
                      <h3 className="text-lg pr-4">{item.question}</h3>
                      <span className="shrink-0 rounded-full bg-blue-50 p-2 text-blue-600 group-open:-rotate-180 transition-transform duration-300">
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
                    <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 text-base">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
          
          {/* CTA / Contact Section */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Still have questions?</h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our team directly and we&apos;ll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@skystates.us"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:888-810-2434"
                className="inline-flex justify-center items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-colors"
              >
                (888) 810-2434
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
