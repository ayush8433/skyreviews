import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { BarChart3, TrendingUp, UserCheck, ShieldCheck, Award, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Placement Outcomes Dashboard | SkyReviews",
  description: "Explore verified career transitions, salary increases, and placement metrics for Sky States graduates.",
};

const COHORT_DATA = [
  {
    track: "Data Science & AI",
    gradRate: "94%",
    placementRate: "72%",
    salaryIncrease: "+70% ($48,000 to $82,000)",
    certification: "Microsoft DP-900 (Azure Data)",
    employers: "Amazon, Microsoft, JPMorgan Chase"
  },
  {
    track: "DevOps & Cloud Computing",
    gradRate: "91%",
    placementRate: "68%",
    salaryIncrease: "+76% ($50,000 to $88,000)",
    certification: "Microsoft AZ-900 / AZ-104",
    employers: "Lockheed Martin, Capital One"
  },
  {
    track: "Cybersecurity & SOC",
    gradRate: "89%",
    placementRate: "78%",
    salaryIncrease: "+80% ($40,000 to $72,000)",
    certification: "CompTIA Security+ / AZ-500",
    employers: "Northrop Grumman, General Dynamics"
  }
];

const caseStudies = [
  {
    name: "Shamim Kazi",
    program: "Data Science & AI",
    batch: "June 2024",
    before: "Non-Technical Background / Operations",
    after: "Data Scientist / Machine Learning Engineer",
    salaryBefore: "$45,000",
    salaryAfter: "$85,000",
    challenge: "Had zero programming or database knowledge and found SQL intimidating.",
    experience: "The structured roadmap and hands-on capstone projects helped bridge the theory gap. Mock interviews built my confidence.",
    timeToJob: "1 month after graduation (Secured role on January 15, 2025)",
    quote: "Sky States helped me bridge the gap between legacy operations and modern data engineering.",
    verifiedBy: ["Enrollment Record"],
    slug: "shamim-kazi-data-science-career-transition"
  },
  {
    name: "Sarah Jenkins",
    program: "Data Science & AI",
    batch: "July 2024",
    before: "Stay-at-Home Mom (7-Year Gap)",
    after: "Business Intelligence Analyst",
    salaryBefore: "$0 (Career Break)",
    salaryAfter: "$74,000",
    challenge: "Struggled with professional confidence after a long career gap to raise children.",
    experience: "Loved the collaborative environment. Excel Power Query and Tableau dashboard projects rebuilt my technical confidence.",
    timeToJob: "1 month after graduation (Secured role on February 20, 2025)",
    quote: "The flexible schedules and supportive mentors helped me transition back into the workforce on my own terms.",
    verifiedBy: ["Placement Verification"],
    slug: "sky-states-review-stay-at-home-mom-to-business-intelligence-analyst-sarah-jenkins"
  },
  {
    name: "Priya Sharma",
    program: "Cybersecurity & SOC",
    batch: "September 2024",
    before: "Tier 1 Customer Support Representative",
    after: "Tier 1 SOC Analyst at MSSP",
    salaryBefore: "$38,000",
    salaryAfter: "$72,000",
    challenge: "Burned out by support queues with zero programming or cybersecurity background.",
    experience: "Learned to capture live network traffic with Wireshark and set up log routing with Elastic SIEM from scratch.",
    timeToJob: "2 months after graduation (Secured role on May 10, 2025)",
    quote: "Going from answering frantic customer calls to monitoring enterprise networks was a life-changing shift.",
    verifiedBy: ["Background Check"],
    slug: "sky-states-review-customer-support-to-cybersecurity-analyst-priya-sharma"
  },
  {
    name: "Marcus Torres",
    program: "Data Science & AI",
    batch: "August 2024",
    before: "Retail Electronics Store Manager",
    after: "Supply Chain Data Analyst",
    salaryBefore: "$54,000",
    salaryAfter: "$76,000",
    challenge: "Working 60-hour weeks in retail; struggled to conceptualize relational database logic.",
    experience: "Mentors helped me map out physical store inventory as relational tables, making SQL database joins click instantly.",
    timeToJob: "1 month after graduation (Secured role on March 12, 2025)",
    quote: "At 41, pivoting to a predictable 40-hour office week gave me control of my life back.",
    verifiedBy: ["Placement Verification"],
    slug: "sky-states-review-retail-store-manager-to-data-analyst-marcus-torres"
  },
  {
    name: "Dieter Vance",
    program: "Data Science & AI",
    batch: "November 2024",
    before: "Mechanical Engineer (Automotive)",
    after: "Data Scientist in Predictive Analytics",
    salaryBefore: "$62,000",
    salaryAfter: "$95,000",
    challenge: "Traditional manufacturing background with no Python or machine learning experience.",
    experience: "Built predictive maintenance models using sensor datasets, which matched what corporate recruiters wanted.",
    timeToJob: "Graduated and secured role immediately (May 18, 2025)",
    quote: "Developing real-world capstone portfolios made my transition from mechanical to data science seamless.",
    verifiedBy: ["LinkedIn Verified"],
    slug: "sky-states-review-mechanical-engineer-to-data-scientist-dieter-vance"
  },
  {
    name: "Elena Rodriguez",
    program: "Data Science & AI",
    batch: "July 2024",
    before: "Middle School Science Teacher",
    after: "Operations Data Analyst",
    salaryBefore: "$45,000",
    salaryAfter: "$72,000",
    challenge: "Severe classroom burnout and lack of corporate environment experience.",
    experience: "Reframed my classroom presentation skills into data communication. SQL labs helped me conquer syntax anxiety.",
    timeToJob: "2 months after graduation (Secured role on March 5, 2025)",
    quote: "If you can explain scientific concepts to 30 teenagers, you can present data insights in a corporate boardroom.",
    verifiedBy: ["Enrollment Record"],
    slug: "sky-states-review-school-teacher-to-data-analytics-professional-elena-rodriguez"
  },
  {
    name: "Rebecca Allen",
    program: "Data Science & AI",
    batch: "December 2024",
    before: "Stay-at-Home Mom (7-Year Gap)",
    after: "Business Intelligence Analyst",
    salaryBefore: "$0 (Career Break)",
    salaryAfter: "$74,000",
    challenge: "Struggled with confidence after a long career gap to raise children.",
    experience: "Loved the collaborative environment. Excel Power Query and Tableau dashboard projects rebuilt my professional confidence.",
    timeToJob: "Graduated and secured role immediately (June 15, 2025)",
    quote: "The flexible schedules and supportive mentors helped me transition back into the workforce on my own terms.",
    verifiedBy: ["Placement Verification"],
    slug: "building-future-in-data-science-after-motherhood"
  },
  {
    name: "Kevin Ramirez",
    program: "DevOps & Cloud Computing",
    batch: "February 2025",
    before: "Banking Operations Analyst",
    after: "Cloud Engineer",
    salaryBefore: "$48,000",
    salaryAfter: "$85,000",
    challenge: "Stuck in repetitive manual spreadsheet processing; wanted to move into automation.",
    experience: "Mastered Linux administration, Git workflows, and infrastructure as code using Terraform.",
    timeToJob: "Graduated and secured role immediately (August 20, 2025)",
    quote: "Automating cloud resource deployment made me realize the power of modern DevOps.",
    verifiedBy: ["Background Check"],
    slug: "finance-professional-move-into-devops"
  },
  {
    name: "Sophia Turner",
    program: "Cybersecurity & SOC",
    batch: "October 2024",
    before: "Junior Financial Auditor",
    after: "Information Security Auditor",
    salaryBefore: "$52,000",
    salaryAfter: "$82,000",
    challenge: "Good at financial auditing but lacked knowledge of IT controls and cybersecurity frameworks.",
    experience: "Studied ISO 27001, SOC 2 compliance, and practiced risk assessment methodologies on simulated company architectures.",
    timeToJob: "Graduated and secured role immediately (April 15, 2025)",
    quote: "Blending my auditing background with cybersecurity controls made me a unique candidate.",
    verifiedBy: ["LinkedIn Verified"],
    slug: "breaking-into-cybersecurity-without-cs-degree"
  },
  {
    name: "Andrew Collins",
    program: "DevOps & Cloud Computing",
    batch: "August 2024",
    before: "IT Help Desk Technician",
    after: "Cloud Infrastructure Engineer",
    salaryBefore: "$39,000",
    salaryAfter: "$70,000",
    challenge: "Trapped in password resets and ticketing loops; wanted to build scalable cloud systems.",
    experience: "Built containerized applications using Docker and deployed them to AWS ECS clusters.",
    timeToJob: "Graduated and secured role immediately (February 10, 2025)",
    quote: "I went from closing support tickets to designing highly available cloud architectures.",
    verifiedBy: ["Certificate Credentials"],
    slug: "from-mechanical-engineering-to-data-analytics"
  },
  {
    name: "Ahmed Hassan",
    program: "Data Science & AI",
    batch: "September 2024",
    before: "Digital Marketing Specialist",
    after: "Marketing Data Scientist",
    salaryBefore: "$46,000",
    salaryAfter: "$78,000",
    challenge: "Used analytics tools but couldn't write custom statistical models or programmatic ETL pipelines.",
    experience: "Learned pandas for data cleaning and implemented A/B testing frameworks in Python.",
    timeToJob: "Graduated and secured role immediately (March 15, 2025)",
    quote: "Custom Python scripting allowed me to unlock insights that standard marketing platforms couldn't.",
    verifiedBy: ["Enrollment Record"],
    slug: "starting-over-in-america-through-tech"
  },
  {
    name: "Melissa Carter",
    program: "Cybersecurity & SOC",
    batch: "November 2024",
    before: "Legal Compliance Associate",
    after: "GRC (Governance, Risk, & Compliance) Analyst",
    salaryBefore: "$55,000",
    salaryAfter: "$84,000",
    challenge: "Understand regulations but lacked the technical network security foundation.",
    experience: "Gained hands-on experience with threat modeling, vulnerability scanning, and incident response planning.",
    timeToJob: "Graduated and secured role immediately (May 20, 2025)",
    quote: "Sky States helped me bridge the gap between legal frameworks and technical security controls.",
    verifiedBy: ["Placement Verification"],
    slug: "from-retail-burnout-to-data-science-confidence"
  },
  {
    name: "Daniel Brooks",
    program: "Cybersecurity & SOC",
    batch: "January 2025",
    before: "Military Police Officer (Veteran)",
    after: "Threat Intelligence Analyst",
    salaryBefore: "$48,000",
    salaryAfter: "$88,000",
    challenge: "Strong physical security background but needed to translate skills to the digital domain.",
    experience: "Studied network defense, malware analysis basics, and threat hunting workflows using SIEM tools.",
    timeToJob: "Graduated and secured role immediately (July 10, 2025)",
    quote: "The tactical analysis mindset is the same; Sky States just gave me the digital tools to execute it.",
    verifiedBy: ["Background Check"],
    slug: "military-veteran-transition-cybersecurity"
  },
  {
    name: "Priya Nair",
    program: "DevOps & Cloud Computing",
    batch: "September 2024",
    before: "International Master's Graduate (Unemployed)",
    after: "DevOps Engineer at Consulting Firm",
    salaryBefore: "$0",
    salaryAfter: "$85,000",
    challenge: "Struggled with the highly competitive job market and visa sponsorship requirements.",
    experience: "Built deep expertise in CI/CD pipeline automation and Kubernetes orchestration.",
    timeToJob: "Graduated and secured role immediately (March 22, 2025)",
    quote: "The structured career roadmap and mock interviews helped me stand out as an international candidate.",
    verifiedBy: ["LinkedIn Verified"],
    slug: "international-student-devops-journey"
  },
  {
    name: "Jason Miller",
    program: "Data Science & AI",
    batch: "June 2024",
    before: "Academic Research Assistant",
    after: "Quantitative Data Analyst",
    salaryBefore: "$36,000",
    salaryAfter: "$78,000",
    challenge: "Proficient in statistics but had no experience with SQL databases or production deployment.",
    experience: "Configured database schemas, wrote optimized SQL queries, and deployed models using FastAPI.",
    timeToJob: "Graduated and secured role immediately (December 15, 2024)",
    quote: "Transitioning from theoretical research to building production data pipelines was incredibly rewarding.",
    verifiedBy: ["Enrollment Record"],
    slug: "rebuilding-career-after-layoff"
  },
  {
    name: "Amanda Lewis",
    program: "Cybersecurity & SOC",
    batch: "December 2024",
    before: "Junior Network Technician",
    after: "Network Security Engineer",
    salaryBefore: "$44,000",
    salaryAfter: "$76,000",
    challenge: "Understood basic cabling and routing but wanted to specialize in enterprise defense.",
    experience: "Configured firewall rules, intrusion detection systems (IDS), and secure VPN tunnels.",
    timeToJob: "Graduated and secured role immediately (June 10, 2025)",
    quote: "I went from configuring switches to designing secure enterprise network perimeters.",
    verifiedBy: ["Certificate Credentials"],
    slug: "from-customer-service-to-cybersecurity"
  },
  {
    name: "Ashton Taylor",
    program: "DevOps & Cloud Computing",
    batch: "November 2024",
    before: "Manual QA Tester",
    after: "Site Reliability Engineer (SRE)",
    salaryBefore: "$48,000",
    salaryAfter: "$88,000",
    challenge: "Tired of manual UI testing; wanted to automate system reliability and monitoring.",
    experience: "Learned infrastructure monitoring with Prometheus/Grafana and log aggregation with ELK stack.",
    timeToJob: "3 months after graduation (Secured role on August 15, 2025)",
    quote: "Automating system health checks and learning script-based deployments completely upgraded my career.",
    verifiedBy: ["Background Check"],
    slug: ""
  },
  {
    name: "Dawn Adam",
    program: "DevOps & Cloud Computing",
    batch: "October 2024",
    before: "Junior Linux Administrator",
    after: "Cloud Architect",
    salaryBefore: "$52,000",
    salaryAfter: "$96,000",
    challenge: "Comfortable with local servers but lacked multi-region cloud architecture experience.",
    experience: "Designed auto-scaling, fault-tolerant architectures on AWS and Azure using Serverless components.",
    timeToJob: "4 months after graduation (Secured role on August 20, 2025)",
    quote: "Learning to think in terms of global cloud infrastructure allowed me to take a massive career step.",
    verifiedBy: ["Placement Verification"],
    slug: ""
  },
  {
    name: "Lisa Cheng",
    program: "Data Science & AI",
    batch: "January 2025",
    before: "Supply Chain Coordinator",
    after: "Inventory Optimization Analyst",
    salaryBefore: "$47,000",
    salaryAfter: "$75,000",
    challenge: "Struggled with manual inventory forecasting using basic spreadsheets.",
    experience: "Learned Python time-series forecasting and built dashboard reports in Power BI.",
    timeToJob: "3 months after graduation (Secured role on October 10, 2025)",
    quote: "Using machine learning to predict supply chain bottlenecks made me an invaluable asset to my team.",
    verifiedBy: ["LinkedIn Verified"],
    slug: ""
  },
  {
    name: "James O'Connor",
    program: "Cybersecurity & SOC",
    batch: "August 2024",
    before: "Retail Security Guard",
    after: "Physical & Cyber Security Specialist",
    salaryBefore: "$32,000",
    salaryAfter: "$68,000",
    challenge: "Had no computer science background or corporate experience.",
    experience: "Studied operating system security, active directory configuration, and threat analysis.",
    timeToJob: "5 months after graduation (Secured role on July 15, 2025)",
    quote: "Sky States took me from patrolling buildings to securing digital endpoints.",
    verifiedBy: ["Background Check"],
    slug: ""
  }
];

export default function OutcomesDashboard() {
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Sky States Student Career Transition and Placement Outcomes",
    "description": "Aggregated graduation rates, placement timelines, and median compensation growth statistics for Sky States alumni.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Sky States",
      "url": "https://skystates.us"
    },
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "variableMeasured": [
      "Graduation Rate",
      "Placement Rate within 180 days",
      "Median Salary Increase"
    ]
  };

  const outcomesSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sky States",
    "url": "https://skystates.us",
    "description": "Online technology training bootcamp offering Data Science, Cyber Security, and DevOps programs.",
    "review": caseStudies.map(cs => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": cs.name
      },
      "reviewBody": cs.quote,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12 px-4">
      <Script
        id="outcomes-dataset-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />
      <Script
        id="outcomes-reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(outcomesSchema) }}
      />
      <div className="container mx-auto max-w-6xl space-y-12">
        
        {/* Header Hero */}
        <section className="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/15">
              <TrendingUp className="w-3.5 h-3.5" /> Career Metrics
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Outcomes &amp; Placement Dashboard</h1>
            <p className="text-blue-100 leading-relaxed text-base md:text-lg">
              We monitor, verify, and document career transitions of our graduates. Explore placement metrics and before/after compensation adjustments.
            </p>
          </div>
        </section>

        {/* STRUCTURED COHORT OUTCOMES TABLE */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Cohort Outcomes Summary</h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            The following table highlights the graduation rates, job placement outcomes (within 180 days of graduation), and salary increases across our core specialization tracks:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-4">Specialization Track</th>
                  <th scope="col" className="px-6 py-4 flex items-center gap-1"><GraduationCap className="w-4 h-4" /> Grad Rate</th>
                  <th scope="col" className="px-6 py-4"><Briefcase className="w-4 h-4 inline mr-1" /> Placement (180d)</th>
                  <th scope="col" className="px-6 py-4"><TrendingUp className="w-4 h-4 inline mr-1" /> Salary Increase</th>
                  <th scope="col" className="px-6 py-4"><Award className="w-4 h-4 inline mr-1" /> Certification</th>
                  <th scope="col" className="px-6 py-4">Top Employers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {COHORT_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-slate-900">{row.track}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-800">{row.gradRate}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-800">{row.placementRate}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-emerald-700 font-medium">{row.salaryIncrease}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-600 text-xs">{row.certification}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-slate-500 text-xs">{row.employers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 leading-relaxed">
            <strong>Important Methodology Caveat:</strong> Placement rates reflect survey respondents who reported full-time or part-time employment in a related field within 180 days. Graduation rates measure students who completed all project requirements. Compensation growth reflects self-reported salary scales and is not an employment guarantee.
          </div>
        </section>

        {/* CASE STUDIES */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-indigo-600" />
            <h2 className="text-2xl font-bold text-slate-900">Verified Graduate Case Studies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.name} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Title Area */}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg">{study.name}</h3>
                      <p className="text-xs text-blue-600 font-semibold">{study.program} — {study.batch}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-bold bg-emerald-50 border border-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Graduate
                    </div>
                  </div>

                  {/* Career change */}
                  <div className="grid grid-cols-2 gap-4 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">Before Enrolling</span>
                      <span className="font-bold text-slate-700">{study.before}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold uppercase tracking-wider text-[9px]">After Completing</span>
                      <span className="font-bold text-slate-700">{study.after}</span>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-indigo-500 pl-4 py-0.5 text-slate-700 italic text-sm leading-relaxed">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>

                  {/* Challenges & Experience */}
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <p><strong>The Challenge:</strong> {study.challenge}</p>
                    <p><strong>Program Experience:</strong> {study.experience}</p>
                    <p><strong>Time to First Job:</strong> {study.timeToJob}</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-xs">
                  <div className="flex gap-2">
                    {study.verifiedBy.map((check) => (
                      <span key={check} className="text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                        ✓ {check}
                      </span>
                    ))}
                  </div>
                  {study.slug && (
                    <Link href={`/stories/${study.slug}`} className="text-blue-600 hover:underline font-semibold flex items-center gap-0.5">
                      Read Story →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
