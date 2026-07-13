import { PrismaClient, StoryModerationStatus } from '@prisma/client';
import { hashPassword } from '../src/lib/password';
import { videoTestimonials } from '../src/data/videoTestimonials';

const toSqliteDateTimeString = (date: Date) => date.toISOString().replace('T', ' ').replace('Z', '');

const prisma = new PrismaClient();

const adminEmail = process.env.ADMIN_EMAIL ?? 'skyreviews@.us';
const adminPassword = process.env.ADMIN_PASSWORD ?? 'Admin@123';
const adminName = process.env.ADMIN_NAME ?? 'SkyReviews Admin';

const stories = [
  {
    title: "From Retail Burnout to Data Science Confidence",
    slug: "from-retail-burnout-to-data-science-confidence",
    publishedAt: "2025-05-20",
    content: `## How Melissa Rebuilt Her Career Through Data Science

Before tech became part of her life, Melissa Carter spent nearly twelve years managing retail stores in Phoenix. She was used to handling stressful shifts, customer complaints, and nonstop schedules, but eventually she realized she wanted something more stable and future-focused.

"I didn't want to wake up ten years later doing the exact same thing," Melissa said. "I wanted a career where I could actually grow."

She had always been curious about analytics and reporting, but going back to college full-time wasn't realistic. Between work, bills, and helping take care of her parents, she needed something flexible and structured.

That's when she found SkyStates.

## Finding a Program That Felt Different

The first thing that stood out to Melissa was the payment flexibility.

"The EMI option made the transition feel possible financially," she explained. "I didn't have to put my life on hold just to start learning."

Once classes began, her nervousness slowly disappeared.

"The roadmap was super clear from day one," she said. "I never felt confused about what I should focus on next."

She especially appreciated the small batch sizes because they allowed direct interaction with trainers and mentors.

"It didn't feel like I was just another person watching videos online. The support felt personal."

Whenever she struggled with SQL queries or Python assignments, the support team responded quickly.

"If I got stuck, somebody was always there to help me work through it."

## Turning Knowledge Into Real Experience

The biggest shift happened during the real-world project phase of the program. Melissa worked on customer behavior analysis projects and dashboard reporting systems that simulated actual business environments.

"That's when things finally started feeling real," she said. "I wasn't just studying anymore. I was solving actual business problems."

The mock interview experience also became a turning point in her confidence.

"My first mock interview was rough," Melissa laughed. "But after a few sessions, I stopped panicking and started communicating confidently."

The resume transformation team helped her completely reposition her previous experience.

"They showed me how my retail background actually demonstrated leadership, communication, and analytical thinking."

## Starting a Career She Never Thought Possible

Three months after completing the program, Melissa landed a remote junior data analyst role with a healthcare company.

"The craziest part is that I almost didn't apply because I thought I wasn't qualified enough," she admitted.

Today, instead of managing store operations, she works with dashboards, reports, and performance metrics every day.

"The biggest thing SkyStates gave me wasn't just technical skills," Melissa said. "It gave me confidence that I belonged in tech."`,
    alumni: {
      name: "Melissa Carter",
      title: "Junior Data Analyst",
      company: "Healthcare Company",
      imageUrl: "/Melissa%20Carter.jpg"
    },
    categories: ["Career Change", "Data Science"]
  },
  {
    title: "Finding Purpose After Military Service",
    slug: "military-veteran-transition-cybersecurity",
    publishedAt: "2025-07-10",
    content: `## A Veteran's Transition into Cybersecurity

After serving in the military for eight years, Daniel Brooks returned to civilian life unsure about what came next. He wanted structure, challenge, and a long-term future, but translating military experience into the tech industry felt overwhelming.

Cybersecurity immediately caught his attention.

"It felt mission-oriented," Daniel said. "Protecting systems, solving problems under pressure, responding to threats - it matched the way my mind already worked."

Still, he questioned whether he could realistically transition into tech without a computer science degree.

After researching different programs, he enrolled with SkyStates.

## Learning in an Environment That Felt Supportive

"The biggest difference for me was how supportive everything felt," Daniel explained. "It didn't feel like they only cared about enrollment numbers."

The instructors broke down difficult cybersecurity concepts in a way that felt approachable for career changers.

"They taught to make sure you understood, not to show off how much they knew."

Daniel also appreciated how responsive the doubt-clearing sessions were.

"There were nights I'd get stuck during labs, and somebody would still help me through it."

The hands-on projects quickly became his favorite part of the program. He participated in vulnerability assessments, incident response simulations, and network security exercises that mirrored real-world scenarios.

"That practical exposure helped me tremendously during interviews because I could actually explain what I'd worked on."

## Preparing for Real Interviews and Real Opportunities

SkyStates' placement support team helped Daniel understand how recruiters think and what companies actually expect from candidates.

"They showed me how to communicate my background in a way that made sense to employers."

The mock interviews prepared him for both technical and behavioral rounds.

"By the time I interviewed for actual jobs, it felt familiar instead of stressful."

Daniel eventually accepted a cybersecurity analyst role with a managed security services company.

"I went from feeling completely uncertain about my future to working in a field I genuinely enjoy," he said. "That transition changed my life."`,
    alumni: {
      name: "Daniel Brooks",
      title: "Cybersecurity Analyst",
      company: "Managed Security Services",
      imageUrl: "/Daniel%20Brooks.jpg"
    },
    categories: ["Career Change", "Cybersecurity", "Veterans"]
  },
  {
    title: "Navigating Tech as an International Student",
    slug: "international-student-devops-journey",
    publishedAt: "2025-03-22",
    content: `## How Priya Built a Career in DevOps

When Priya Nair moved to Dallas for her master's degree, she quickly realized how competitive the American tech market could be for international students.

"You already have visa pressure," she said. "Then you're competing with people who already have years of experience."

At first, she focused on software development, but eventually she became fascinated by DevOps, cloud infrastructure, and automation.

The problem was finding a learning path that actually made sense.

"With YouTube and random courses, I was learning isolated topics but never understanding how everything connected together."

That changed after she joined SkyStates.

## Finally Finding Structure and Mentorship

"The roadmap clarity made a huge difference," Priya explained. "Everything was organized step by step."

Because she was balancing graduate school and campus responsibilities, flexible class timings became essential.

"The schedule made it manageable without overwhelming me."

Priya said the mentorship became the most valuable part of her experience.

"My mentor didn't just teach tools. He explained how DevOps actually works inside companies."

She spent months building projects involving Docker, Kubernetes, CI/CD pipelines, and AWS deployments that later became a core part of her portfolio.

"Recruiters cared much more about hands-on projects than just certifications."

## Building Confidence in a New Country

SkyStates also helped her adapt her resume for the American job market.

"That was something I completely misunderstood before. Resumes are written very differently here."

The networking community gave her additional support during the job search process.

"We had students from different backgrounds helping each other with referrals, interview prep, and motivation. It never felt competitive in a toxic way."

After multiple interviews and technical rounds, Priya accepted a DevOps engineer position with a consulting company.

"For international students, having the right support system matters a lot," she said. "I never felt like I was figuring everything out alone."`,
    alumni: {
      name: "Priya Nair",
      title: "DevOps Engineer",
      company: "Consulting Firm",
      imageUrl: "/Priya%20Nair.jpg"
    },
    categories: ["Career Growth", "DevOps", "International"]
  },
  {
    title: "Turning a Layoff into a Career Upgrade",
    slug: "rebuilding-career-after-layoff",
    publishedAt: "2024-12-15",
    content: `## Rebuilding a Future Through DevOps

Jason Miller spent almost fifteen years working traditional IT support roles before his company downsized unexpectedly.

"At first, I felt blindsided," Jason admitted. "Then I realized the industry had changed faster than I had."

He understood basic infrastructure, but cloud computing and automation were becoming the future.

Instead of staying stuck, he decided to pivot into DevOps through SkyStates.

## Learning From People Who Knew the Industry

"The trainer quality was honestly incredible," Jason said. "These were people who clearly had real industry experience."

He appreciated the small batch sizes because they allowed more personalized attention.

"You weren't fighting hundreds of students just to ask a question."

The real-world labs exposed him to Linux administration, deployment automation, cloud infrastructure, and monitoring systems.

"It felt practical instead of overly academic."

Still, confidence became one of Jason's biggest struggles initially.

"Being older than some students made me doubt myself."

But the mentors constantly reminded him that his prior experience still mattered.

"They helped me understand that I didn't need to start over completely. I just needed updated skills."

## Proving to Himself That He Could Still Adapt

The mock interview sessions helped Jason modernize how he presented himself professionally.

"They taught me how to explain my older IT background in a way that still sounded valuable and relevant."

Within four months of finishing the program, Jason secured a DevOps support role.

"I thought getting laid off was the end of my career," he said. "Turns out it pushed me toward something better."`,
    alumni: {
      name: "Jason Miller",
      title: "DevOps Support",
      company: "Tech Company",
      imageUrl: "/Jason%20Miller.jpg"
    },
    categories: ["Career Change", "DevOps", "Overcoming Challenges"]
  },
  {
    title: "From Customer Support to Cybersecurity",
    slug: "from-customer-service-to-cybersecurity",
    publishedAt: "2025-06-10",
    content: `## How Amanda Found Confidence in Tech

Amanda Lewis spent years working customer support jobs while constantly feeling financially stuck.

"I wanted a career where hard work actually led somewhere," she said.

Cybersecurity caught her attention because she enjoyed analytical thinking and solving problems, but she worried she wouldn't fit into a technical environment.

"The first week honestly intimidated me," Amanda admitted. "But the instructors made everything feel approachable."

She eventually enrolled with SkyStates.

## Learning Without Feeling Left Behind

One of Amanda's favorite parts of the program was the live doubt-clearing support.

"I never felt embarrassed asking questions, even when I thought they were basic."

The internship and project experience became a huge turning point for her growth. Through simulated enterprise environments and guided labs, she gained practical experience with network security and threat analysis.

"That gave me something real to talk about during interviews."

The resume support team also completely transformed her professional profile.

"My old resume looked like random customer service experience," she said. "After they worked on it, it actually looked like somebody transitioning into cybersecurity."

## Finally Seeing Herself in Tech

Amanda eventually accepted a security operations center role with a financial services company.

"The best part honestly wasn't even getting hired," she said. "It was finally believing that I was capable of succeeding in tech."`,
    alumni: {
      name: "Amanda Lewis",
      title: "Security Operations Center Analyst",
      company: "Financial Services Company",
      imageUrl: "/Amanda%20Lewis.jpg"
    },
    categories: ["Career Change", "Cybersecurity"]
  },
  {
    title: "Restarting Her Career After Motherhood",
    slug: "building-future-in-data-science-after-motherhood",
    publishedAt: "2025-06-15",
    content: `## Building a Future in Data Science

After spending several years raising her children full-time, Rebecca Allen struggled with the idea of restarting her career.

"I felt like I had completely lost my confidence," she admitted.

She wanted a field that offered both analytical work and long-term flexibility, which eventually led her toward data science and SkyStates.

## Finding a Learning Environment That Worked

"The flexible class timings honestly saved me," Rebecca explained. "As a mom, you need something realistic."

She quickly found herself enjoying the collaborative environment.

"The community felt supportive instead of competitive."

The trainers also simplified difficult technical concepts in a way that made them feel manageable.

"I thought machine learning would be impossible for me to understand, but they made it practical."

Her portfolio projects included forecasting models and customer segmentation analysis, which later became major talking points during interviews.

"The project-building process made me finally feel like a real analyst."

## Rebuilding More Than Just a Career

After months of preparation, portfolio work, and mock interviews, Rebecca accepted a business intelligence analyst role.

"I started this journey doubting myself every day," she said. "Now I finally feel independent and confident again."`,
    alumni: {
      name: "Rebecca Allen",
      title: "Business Intelligence Analyst",
      company: "Tech Company",
      imageUrl: "/rebecca.jpg"
    },
    categories: ["Career Change", "Data Science", "Remote Work"]
  },
  {
    title: "Leaving Finance Behind for Cloud Engineering",
    slug: "finance-professional-move-into-devops",
    publishedAt: "2025-08-20",
    content: `## Kevin's Move into DevOps

Kevin Ramirez spent nearly ten years working in banking operations before realizing he wanted a more technical and future-proof career.

"I wanted work that challenged me and gave me room to grow," he said.

That decision led him to SkyStates and eventually into DevOps.

## Learning Skills That Actually Felt Relevant

"The structure kept me disciplined," Kevin explained. "I always knew exactly what I should focus on next."

He especially valued the technical mentorship.

"The mentors didn't just teach commands. They explained why companies actually use these technologies."

Kevin spent months building CI/CD pipelines, cloud automation systems, and deployment workflows that later became a major part of his portfolio.

"The projects made me feel genuinely job-ready."

## Turning Preparation Into Opportunity

The placement support team also helped Kevin understand recruiter communication and salary discussions.

"That guidance honestly helped me more than I expected."

Today, Kevin works remotely as a cloud operations engineer.

"The transition definitely wasn't easy," he admitted. "But it completely changed my future."`,
    alumni: {
      name: "Kevin Ramirez",
      title: "Cloud Operations Engineer",
      company: "Tech Company",
      imageUrl: "/Kevin%20Ramirez.jpg"
    },
    categories: ["Career Change", "DevOps"]
  },
  {
    title: "Breaking Into Cybersecurity Without a Tech Degree",
    slug: "breaking-into-cybersecurity-without-cs-degree",
    publishedAt: "2025-04-15",
    content: `## Sophia's Unexpected Career Shift

Sophia Turner graduated with a psychology degree and spent years assuming technology careers weren't realistic for her.

"I thought everyone in cybersecurity had been coding since they were teenagers," she said.

Everything changed after she joined SkyStates.

## Discovering That Tech Was Learnable

"The instructors built confidence gradually," Sophia explained. "They never made you feel behind."

She loved the small class sizes because students could interact directly with trainers and mentors.

"The learning experience felt personal instead of overwhelming."

Her favorite part of the program involved security labs and attack simulations.

"You stop feeling like a student and start thinking like an analyst."

The certification guidance also helped her focus on the right goals.

"They explained which certifications actually mattered and why."

## Building a Career She Once Thought Was Impossible

After months of preparation and interview coaching, Sophia secured an entry-level cybersecurity analyst role.

"I used to think tech careers were reserved for certain people," she said. "Now I know they're possible for anyone willing to learn."`,
    alumni: {
      name: "Sophia Turner",
      title: "Entry-level Cybersecurity Analyst",
      company: "Security Firm",
      imageUrl: "/Sophia%20Turner.jpg"
    },
    categories: ["Career Change", "Cybersecurity"]
  },
  {
    title: "Combining Engineering and Analytics",
    slug: "from-mechanical-engineering-to-data-analytics",
    publishedAt: "2025-02-10",
    content: `## How Andrew Transitioned into Data Science

Andrew Collins came from a mechanical engineering background but struggled finding long-term satisfaction in the industry.

"I liked solving problems," he explained. "I just didn't enjoy the work environment anymore."

Eventually, he discovered data analytics and enrolled at SkyStates.

## Learning How Data Drives Business Decisions

"The trainers connected analytics to actual business problems instead of teaching random theory," Andrew said.

He also appreciated how responsive the student support team remained throughout the program.

"You never felt ignored or forgotten."

The career support team helped him completely reposition his previous engineering experience.

"They showed me how to present my engineering background as analytical and problem-solving experience."

## Turning Existing Skills Into a New Career

Andrew eventually accepted a data analyst role with a logistics company.

"Looking back, changing careers was one of the best decisions I've ever made," he said.`,
    alumni: {
      name: "Andrew Collins",
      title: "Data Analyst",
      company: "Logistics Company",
      imageUrl: "/Andrew%20Collins.jpg"
    },
    categories: ["Career Change", "Data Science"]
  },
  {
    title: "Starting Over and Finding Opportunity",
    slug: "starting-over-in-america-through-tech",
    publishedAt: "2025-03-15",
    content: `## Ahmed's Journey Into DevOps in America

When Ahmed Hassan moved to the United States, he faced a challenge many immigrants understand well: starting over professionally.

"In my home country, I already had experience," he explained. "But after moving here, it felt like I was beginning from zero."

Searching for a path forward, he enrolled in the DevOps program at SkyStates.

## Finding Support During a Difficult Transition

"The support for international students really stood out to me," Ahmed said.

He especially appreciated the recruiter communication coaching.

"They taught me how to explain my experience confidently during interviews."

The program also helped him build a portfolio filled with cloud deployment projects and automation systems.

"That portfolio became proof that I had real skills."

## Rebuilding Confidence Along the Way

Through networking sessions, mentorship, and interview preparation, Ahmed slowly rebuilt his confidence.

"The environment constantly pushed me to believe in myself again."

Today, Ahmed works as a junior DevOps engineer for a healthcare technology company.

"For immigrants, rebuilding your career can feel overwhelming," he said. "Having the right guidance changes everything."`,
    alumni: {
      name: "Ahmed Hassan",
      title: "Junior DevOps Engineer",
      company: "Healthcare Technology Company",
      imageUrl: "/Ahmed%20hassan.jpg"
    },
    categories: ["Career Growth", "DevOps", "International"]
  },
  {
    title: "I Thought It Was Another Scam",
    slug: "i-thought-it-was-another-scam",
    publishedAt: "2026-05-15",
    content: `## I Thought It Was Another Scam

After nearly fifteen years in accounting, Jennifer Morales had become an expert at spotting things that didn't add up.

At 37, she was a senior accountant for a manufacturing company in Austin, Texas. She had a stable job, decent pay, and a predictable routine. But every quarter felt the same.

"I wasn't unhappy," she said. "I was just stuck."

Over time, she became more interested in the data side of her work than the accounting itself. She found herself creating dashboards, analyzing trends, and building reports that went beyond traditional bookkeeping.

"I liked figuring out why numbers changed, not just recording them."

Eventually, she started researching careers in analytics and data science.

## A Lot of Research and a Lot of Questions

Jennifer did what accountants do best: research.

She compared bootcamps, online courses, community colleges, and certificate programs.

"I had spreadsheets comparing tuition, course length, curriculum, and reviews," she laughed.

When SkyStates first reached out to her, she wasn't impressed.

"I thought it was another one of those companies trying to sell me something."

The follow-up calls made her even more skeptical.

"I probably ignored the first few calls."

But one day, she decided to answer.

"I didn't sign up after the first call. Honestly, I was skeptical. I probably asked them thirty questions."

She asked about curriculum, instructors, career support, payment options, projects, and outcomes.

"What surprised me was that nobody seemed bothered by my questions. They answered every single one."

## Deciding to Bet on Herself

The tuition still felt expensive.

"I won't lie. Spending that kind of money scared me."

She considered taking individual courses on Coursera and Udemy instead.

"But I realized I had already spent months trying to teach myself. I wasn't making progress because I had no structure."

The EMI payment option made the decision easier.

"I didn't need to pay everything upfront, which made it feel manageable."

More importantly, she wanted accountability.

"I needed people who would push me when I felt like quitting."

So she enrolled.

## Learning Something Completely New

The first few weeks were intimidating.

Jennifer had never written a line of Python code.

"My first SQL query took almost an hour."

But she quickly realized she wasn't alone.

"The small class sizes helped a lot because you could actually ask questions."

She attended almost every doubt-clearing session and frequently stayed after class to talk with mentors.

"The instructors never made me feel like I was asking dumb questions."

She learned:

* SQL
* Python
* Pandas
* Tableau
* Power BI
* Statistics
* Data visualization

The projects became her favorite part of the program.

She built:

* A customer segmentation model
* A retail sales dashboard
* A forecasting project using historical data

"Those projects made me realize I could actually do this professionally."

## The Part That Changed Everything

The resume team completely rewrote her professional story.

"They showed me that my accounting background wasn't irrelevant. It was actually an advantage."

Her experience with spreadsheets, financial reporting, and business analysis became strengths instead of limitations.

The mock interviews also helped tremendously.

"I was terrible during the first one."

By the third mock interview, she felt like a different person.

"I stopped trying to sound technical and started talking about how I solve problems."

## Receiving the Offer

Two months after graduation, Jennifer accepted a Data Analyst position with a software company in Austin.

"When I got the offer letter, I just stared at my computer screen."

She called her husband and cried.

"I don't cry often, but that moment felt different."

Today, she spends her days working with dashboards and business metrics instead of month-end closings.

"The price felt big at the time," she said. "Looking back, staying stuck would've cost me much more."`,
    alumni: {
      name: "Jennifer Morales",
      title: "Data Analyst",
      company: "Software Company",
      imageUrl: "/Jennifer Morales.jpg"
    },
    categories: ["Career Change", "Data Science", "Featured"]
  },
  {
    title: "I Almost Hung Up During the First Call",
    slug: "i-almost-hung-up-during-the-first-call",
    publishedAt: "2026-06-02",
    content: `## I Almost Hung Up During the First Call

Teaching was all Emily Parker had ever planned to do.

For eleven years, she taught middle school science in Minneapolis.

She loved her students, but by her early thirties, the stress had become overwhelming.

"I was taking work home every night. I was exhausted."

She started thinking about other careers.

One evening, a friend who worked in technology suggested data analytics.

"I honestly didn't know what a data analyst did."

So she started researching.

## The Call She Almost Ignored

When SkyStates reached out, Emily was skeptical.

"I almost hung up."

She had already looked at several programs and was tired of sales conversations.

"At first, I thought they were trying to sell me something."

But the conversation surprised her.

"They kept asking about my goals and why I wanted to change careers."

No one had asked her that before.

"Then I realized they were actually trying to understand why I wanted to change careers."

## Going From Classroom to Code

Emily enrolled in the Data Science track.

The transition wasn't easy.

"I hadn't been a student in years."

Her biggest challenge was Python.

"I remember staring at my screen wondering if I'd made a huge mistake."

The mentors encouraged her to keep going.

"They never made me feel behind."

The flexible class schedule helped because she was still teaching full-time.

Most nights, she studied after grading papers.

"There were evenings when I didn't start studying until nine o'clock."

## Building Real Skills

Her favorite project involved analyzing student performance data.

"It combined my teaching background with my new technical skills."

She also built:

* Tableau dashboards
* SQL reporting projects
* Customer segmentation models

"I finally started feeling like a data professional."

## Getting Ready for Interviews

The mock interviews changed everything.

"I didn't realize interviews could actually be practiced."

The resume team also helped her reposition her experience.

"They showed me how teaching had given me communication and analytical skills."

A month after graduation, she received an offer for an Education Data Analyst position.

"I remember calling my mom immediately."

Today, she works remotely and helps school districts analyze student performance data.

"I still help students. I just do it differently now."`,
    alumni: {
      name: "Emily Parker",
      title: "Education Data Analyst",
      company: "School Districts",
      imageUrl: "/Emily Parker.jpeg"
    },
    categories: ["Career Change", "Data Science", "Featured"]
  },
  {
    title: "Three Thousand Dollars Felt Like a Huge Risk",
    slug: "three-thousand-dollars-felt-like-a-huge-risk",
    publishedAt: "2026-06-25",
    content: `## Three Thousand Dollars Felt Like a Huge Risk

At 39, Rachel Green was raising two children alone while working in customer service.

She wanted something better for her family.

"I wasn't looking to get rich. I just wanted stability."

Data analytics caught her attention because it seemed practical and offered remote opportunities.

The problem was money.

## Doing the Math

"I remember seeing the tuition and immediately thinking, 'There's no way I can afford this.'"

She looked into going back to college.

The numbers didn't make sense.

"I spent more than that on community college classes that never changed my career."

The EMI option changed everything.

"It allowed me to invest in myself without putting my family in financial trouble."

## Learning Around Real Life

Rachel studied after her children went to sleep.

"There were nights when I didn't start until ten."

She often attended recorded sessions because her schedule was unpredictable.

"The flexibility honestly saved me."

The community also became important.

"There were other parents going through the same thing."

## Slowly Building Confidence

She struggled with SQL at first.

"I almost quit during the second month."

A mentor encouraged her to stick with it.

"He reminded me that everybody struggles in the beginning."

She eventually completed projects involving:

* Sales forecasting
* Customer segmentation
* Business dashboards
* Data visualization

"Every project made me a little more confident."

## Getting Hired

The career coaching team helped her rewrite her resume and prepare for interviews.

The mock interviews made a huge difference.

"My first real interview felt familiar because I had already practiced so much."

Three months after graduating, Rachel accepted a remote Business Intelligence Analyst position.

Her salary increased significantly, but that wasn't what mattered most.

"My kids saw me work for something and actually achieve it."

Today, she works from home and spends evenings with her family instead of worrying about money.

"For me, this wasn't just a career change," she said. "It was proof that betting on yourself can actually work."`,
    alumni: {
      name: "Rachel Green",
      title: "Business Intelligence Analyst",
      company: "Remote Company",
      imageUrl: "/Rachel green.jpg"
    },
    categories: ["Career Change", "Data Science", "Remote Work", "Featured"]
  }
];

async function main() {
  console.log('Start seeding...');

  const adminUser = await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: {
      name: adminName,
      passwordHash: await hashPassword(adminPassword),
    },
    create: {
      email: adminEmail,
      name: adminName,
      passwordHash: await hashPassword(adminPassword),
    },
  });

  await prisma.adminSession.deleteMany({ where: { adminUserId: adminUser.id } });

  const allCategories = Array.from(new Set(stories.flatMap((story) => story.categories)));

  const categoryMap = new Map<string, string>();

  for (const categoryName of allCategories) {
    const category = await prisma.category.upsert({
      where: { name: categoryName },
      update: {},
      create: { name: categoryName },
    });
    categoryMap.set(categoryName, category.id);
  }

  for (const story of stories) {
    const email = `${story.slug}@example.com`;

    const alumni = await prisma.alumni.upsert({
      where: { email },
      update: {},
      create: {
        name: story.alumni.name,
        email,
        title: story.alumni.title,
        company: story.alumni.company,
        imageUrl: story.alumni.imageUrl,
      },
    });

    const existingStory = await prisma.story.findUnique({
      where: { slug: story.slug }
    });

    if (existingStory) {
      await prisma.story.update({
        where: { id: existingStory.id },
        data: {
          publishedAt: toSqliteDateTimeString(new Date(story.publishedAt)),
        }
      });
    } else {
      const savedStory = await prisma.story.create({
        data: {
          title: story.title,
          slug: story.slug,
          content: story.content,
          isPublished: true,
          moderationStatus: StoryModerationStatus.APPROVED,
          publishedAt: toSqliteDateTimeString(new Date(story.publishedAt)),
          alumniId: alumni.id,
        }
      });

      await prisma.storyCategory.createMany({
        data: story.categories.map((categoryName) => ({
          storyId: savedStory.id,
          categoryId: categoryMap.get(categoryName) as string,
        })),
      });
    }
  }

  for (const [index, video] of videoTestimonials.entries()) {
    await prisma.videoTestimonial.upsert({
      where: { id: video.id },
      update: {},
      create: {
        id: video.id,
        title: video.title,
        summary: video.summary,
        name: video.name,
        role: video.role,
        company: video.company,
        duration: video.duration,
        videoUrl: video.videoUrl,
        thumbnailUrl: video.thumbnailUrl,
        isActive: true,
        sortOrder: video.id === "vt-4" ? 0 : index,
      }
    });
  }

  // Seed Placement Managers
  const managersData = [
    {
      id: "pm-1",
      name: "Ujjwal Jaiswal",
      role: "Hiring Mentor & Senior Partner",
      linkedinUrl: "https://linkedin.com/in/ujjwal-jaiswal",
      imageUrl: "/uploads/ujjwal.png",
      bio: "Architect of executive transitions for Fortune 550 tech leaders, specializing in bridging the gap between legacy infrastructure and generative future-states.",
      reviews: [
        { id: "pmr-1", reviewerName: "Amit Patel", reviewerRole: "Software Engineer Alum", content: "Ujjwal was extremely helpful in setting up my mock interviews and guiding me through salary negotiations. His connections are top-notch!", rating: 5 },
        { id: "pmr-2", reviewerName: "Jessica Wu", reviewerRole: "Data Analyst Alum", content: "Ujjwal completely transformed my resume. Within two weeks of working with him, I started getting callbacks from companies I never thought would notice me.", rating: 5 },
      ],
      videos: [
        { id: "pmv-1", title: "Ujjwal's Placement Strategy Presentation", videoUrl: "/video 1.mp4", thumbnailUrl: null },
      ],
    },
    {
      id: "pm-2",
      name: "Kajal Pippal (Kelly)",
      role: "Lead Placement Director",
      linkedinUrl: "https://linkedin.com/in/kajal-pippal",
      imageUrl: "/uploads/kajal.jpg",
      bio: "Curating specialized talent pipelines for the world's most secretive private equity firms and family offices.",
      reviews: [
        { id: "pmr-3", reviewerName: "Daniel Brooks", reviewerRole: "Cybersecurity Analyst Alum", content: "Kelly helped me translate my military experience into tech language. Her coaching was the reason I landed my first cybersecurity role.", rating: 5 },
      ],
      videos: [
        { id: "pmv-2", title: "Talent Pipeline Overview", videoUrl: "/video 2.mp4", thumbnailUrl: null },
      ],
    },
    {
      id: "pm-3",
      name: "Jasdev Singh",
      role: "Strategy Consultant",
      linkedinUrl: "https://linkedin.com/in/jasdev-singh",
      imageUrl: "/uploads/jasdev.jpg",
      bio: "An expert in narrative repositioning, helping mid-career professionals break through the glass ceiling into C-suite roles.",
      reviews: [
        { id: "pmr-4", reviewerName: "Priya Nair", reviewerRole: "DevOps Engineer Alum", content: "Jasdev walked me through everything from cultural expectations to technical whiteboarding. An incredible mentor.", rating: 5 },
      ],
      videos: [],
    },
    {
      id: "pm-8",
      name: "Shubham K. Kumar",
      role: "Strategic Placement Director",
      linkedinUrl: "https://linkedin.com/in/shubham-k-kumar",
      imageUrl: "/uploads/shubham.jpg",
      bio: "Fostering strategic corporate relationships and designing tailored placement opportunities for candidates.",
      reviews: [],
      videos: [],
    },
    {
      id: "pm-4",
      name: "Sarah Jenkins",
      role: "Certified Senior Partner",
      linkedinUrl: "https://linkedin.com/in/sarah-jenkins",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVEWkeUrlHaLqIJ2gZvJKM1EL_m_XFhxIwIzN72-w_nwGt1QAVGnd9SCZUFg-OAvbWhoD6ntLW0aI4Mh1R5DgcRkO8kx29dPQcbdEM-5dSeTWOzoCPMhQ6YlCs1OFzBhAPkVOMDXnt_SFoEwtqqCGj6bSdR1V20UWazyTdq676W0-wABzHlO4Qq8QuFJxkJcAl9yvYbO5EdaEYn2JPpKOTfsvwqQwGYww9Atf1UM89VLukR_zYqIimsM_Yh9D93d_6U_T1hg-ILFQ",
      bio: "Sarah leads our European division, facilitating global mobility for elite candidates across London, Zurich, and Milan.",
      reviews: [
        { id: "pmr-5", reviewerName: "Carlos Rivera", reviewerRole: "DevOps Engineer Alum", content: "The mock interviews Sarah organized were incredibly realistic. I felt completely prepared when my actual interviews came around.", rating: 5 },
      ],
      videos: [
        { id: "pmv-3", title: "Global Mobility Strategy", videoUrl: "/video 3.mp4", thumbnailUrl: null },
      ],
    },
    {
      id: "pm-5",
      name: "Marcus Thompson",
      role: "Lead Talent Scout",
      linkedinUrl: "https://linkedin.com/in/marcus-thompson",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2onXkpPxyNc8LFLcW5BsE_ZlmIFvEpJuMyPXG9SoZrVamM84AAPhJKhK1ow-TJv0Fa2J1Fv7rLKfQRiYm4lcPkXkMZNRF12hYNcrOtYv5G1nShTdJXsRYADaZK4FBh3panNBxEeTBVhXrq4DHBOZaRrFIVfG58td9roXjWtVUj34oCI46cKHAiAFNBRWsyUMrKhs1hqGXmE3u76XuLB0ECdnUrWB29VnQS8MPqlTgEOHz9_xcyRcUtqb829B0SO2wYLHvOIkURvk",
      bio: "Master of identifying 'dark-horse' candidates and preparing them for unprecedented pivots into emerging sectors.",
      reviews: [],
      videos: [],
    },
    {
      id: "pm-6",
      name: "Emily Rodriguez",
      role: "Career Strategist",
      linkedinUrl: "https://linkedin.com/in/emily-rodriguez",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQn3E-oydA3rFmmp5xJ_bqvj5GJ0138VQUfP4yQzxbAALl25OgzXucZNCMDvRg-F1JbDrvzK8HUVsbbiH4rXJzuD-YeNJKB2iDjwYdXCowqU--KDmq1HapwZjV56_rCoH6dYhfeTn2AX7XmIhmmGHWUQUN42103YDzWzrId6DxMZAdeQyh5JBqMyFiKWq6ucMzcK1eLPth2ndaEOl4IkgSiu2Px5aK6Dh94m-DqVR1d-x6xYbre9iNr4dZOemZaHkU5AfRLqHG4Q4",
      bio: "Specializing in 'The Return'—re-entering the workforce at peak performance after intentional career hiatuses or entrepreneurial ventures.",
      reviews: [],
      videos: [],
    },
    {
      id: "pm-7",
      name: "David Kim",
      role: "Managing Principal",
      linkedinUrl: "https://linkedin.com/in/david-kim",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYosJQnPyOI_-MjUS2GzrhMhAXV8cjhb25-7yTUIOMY3ODi6mp8EWugffnio5beMcwCP1q5IVpNHzv92yEoKKzBdAlP943JTVn-JHYB4CNeaO4EKlgvzelz51819pH9GFewY1yVmR-LJiHoWBtXU7dtLGb4nSRErib6ay9K7LqAy8_KnUIeYSmqh5Qp6CEF__jMc9UItrjzSFzdKPt0Q__s8TiUlDYiS2JfaY-VHQWdbbLtVd4DSN-s1MZ23fRAMFwDgJtMgavVrQ",
      bio: "The architect behind the firm's placement philosophy. David has personally engineered over 400 executive transitions for some of the world's most influential boardrooms.",
      reviews: [],
      videos: [],
    }
  ];

  for (const mgr of managersData) {
    const manager = await prisma.placementManager.upsert({
      where: { id: mgr.id },
      update: {},
      create: {
        id: mgr.id,
        name: mgr.name,
        role: mgr.role,
        linkedinUrl: mgr.linkedinUrl,
        imageUrl: mgr.imageUrl,
        bio: mgr.bio,
      },
    });

    for (const rev of mgr.reviews) {
      await prisma.placementManagerReview.upsert({
        where: { id: rev.id },
        update: {},
        create: {
          id: rev.id,
          reviewerName: rev.reviewerName,
          reviewerRole: rev.reviewerRole,
          content: rev.content,
          rating: rev.rating,
          placementManagerId: manager.id,
        },
      });
    }

    for (const vid of mgr.videos) {
      await prisma.placementManagerVideo.upsert({
        where: { id: vid.id },
        update: {},
        create: {
          id: vid.id,
          title: vid.title,
          videoUrl: vid.videoUrl,
          thumbnailUrl: vid.thumbnailUrl,
          placementManagerId: manager.id,
        },
      });
    }
  }

  // Seed Podcasts
  const podcastsData = [
    {
      id: "pod-1",
      title: "Navigating Tech Layoffs & Career Pivots",
      description: "In this episode, we explore the rapidly shifting tech landscape of 2026. We discuss strategies for candidates affected by layoffs, how to position yourself for new roles, and the emerging sectors that are actively hiring. Featuring insights from industry recruiters and successful career changers.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoUrl: "/video 2.mp4",
      thumbnailUrl: "https://placehold.co/960x540/1e293b/60a5fa?text=Tech+Layoffs+%26+Pivots",
      isActive: true,
    },
    {
      id: "pod-2",
      title: "From Zero to DevOps: A Complete Roadmap",
      description: "A comprehensive breakdown of the DevOps learning path for absolute beginners. We cover essential tools like Docker, Kubernetes, CI/CD pipelines, and cloud platforms. Our panel of DevOps engineers share their personal journeys and the mistakes they wish they had avoided.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoUrl: "/video 1.mp4",
      thumbnailUrl: "https://placehold.co/960x540/0f172a/93c5fd?text=Zero+to+DevOps",
      isActive: true,
    },
    {
      id: "pod-3",
      title: "Cybersecurity Careers: What Employers Really Want",
      description: "We sit down with hiring managers from leading cybersecurity firms to uncover what they actually look for in candidates. Beyond certifications, we discuss practical skills, soft skills, and portfolio projects that make applicants stand out. Essential listening for anyone considering a career in security.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoUrl: "/video 3.mp4",
      thumbnailUrl: "https://placehold.co/960x540/111827/7dd3fc?text=Cybersecurity+Careers",
      isActive: true,
    },
    {
      id: "pod-4",
      title: "The Art of the Technical Interview",
      description: "Our most popular episode! David Kim, former Google engineer and Sky States Technical Interview Specialist, breaks down the anatomy of a perfect technical interview. From data structures to system design, behavioral questions to salary negotiation — this episode covers it all with real examples and actionable tips.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoUrl: "/video 2.mp4",
      thumbnailUrl: "https://placehold.co/960x540/0b1120/bae6fd?text=Technical+Interviews",
      isActive: true,
    },
    {
      id: "pod-5",
      title: "How Shamim Kazi Transitioned from a Non-Technical Background to Data Science: His Complete Learning Journey",
      description: "Changing careers into Data Science can feel intimidating, especially for professionals without a background in programming, mathematics, or computer science. Shamim Kazi's journey illustrates how consistent study, practical projects, mentorship, and interview preparation can help someone build technical confidence over time. Learn about his learning path, projects, and interview preparation.",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      videoUrl: "/video 1.mp4",
      thumbnailUrl: "https://placehold.co/960x540/0b1120/bae6fd?text=Shamim+Kazi+Transition",
      isActive: true,
    },
  ];

  for (const pod of podcastsData) {
    await prisma.podcast.upsert({
      where: { id: pod.id },
      update: {
        title: pod.title,
        description: pod.description,
        youtubeUrl: pod.youtubeUrl,
        videoUrl: pod.videoUrl,
        thumbnailUrl: pod.thumbnailUrl,
        isActive: pod.isActive,
      },
      create: {
        id: pod.id,
        title: pod.title,
        description: pod.description,
        youtubeUrl: pod.youtubeUrl,
        videoUrl: pod.videoUrl,
        thumbnailUrl: pod.thumbnailUrl,
        isActive: pod.isActive,
      },
    });
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
