import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding new podcast into SQLite database...');

  const podcastData = {
    title: "Sky States Review: Abdul Najimudeen AI Career Success",
    description: `In this highly inspiring episode of the Sky Engineering Success Series, we sit down with **Abdul Najimudeen**, a forward-thinking professional who recognized the explosive corporate shift toward Artificial Intelligence and decided to future-proof his career pathway. Abdul enrolled in the **Sky States Advanced AI & Machine Learning Track** in March, completely determined to pivot his career trajectory toward cutting-edge automated infrastructure.

What follows is an unfiltered, honest look at what happens when relentless personal focus collides with a world-class training ecosystem—even when facing unexpected personal setbacks.

### The Sky States Onboarding Experience & First-Week Momentum
Abdul begins the episode by breaking down a question that trips up almost every prospective student: *What does the actual onboarding process of Sky States look like?*
For Abdul, the transition into the program was smooth, structured, and highly intentional. From the moment he logged in, he was integrated into a structured learning community, provided an explicit data curriculum roadmap, and assigned dedicated technical mentors.
He speaks incredibly highly of the **Sky States instructors**, praising their rare ability to take highly abstract, intimidating mathematical AI models and translate them into practical, conversational coding logic that a machine learning beginner can easily digest.

### Overcoming Health Hurdles and Landing the Initial Interview Calls
Shortly after his technical training gained momentum, Abdul faced a massive personal trial—he fell significantly ill. In traditional educational environments, a severe health setback often means falling behind or completely dropping out. However, Abdul notes that the asynchronous flexibility of the **Sky States training** platform, paired with rigorous backend placement push, kept him moving forward.
Despite not being physically at one hundred percent, the internal career services team at Sky States went to work on his profile. To his amazement, his phone began ringing with formal interview invitations from enterprise tech firms.

### Anatomy of the First Interview: Challenges & Absolute Focus
Abdul walks listeners step-by-step through his very first technical interview experience, providing invaluable insights for anyone currently undergoing **interview preparation**.
"I faced immediate challenges," Abdul admits candidly during the podcast. "The technical screening panel threw complex runtime complexity and predictive feature engineering problems at me that forced me to think entirely on my feet. But because of the mock interviews I had run through within the program, I kept my composure. I stayed completely dialed-in, maintained absolute focus on my logical frameworks, and handled the live whiteboarding panel exceptionally well."
While that specific initial interview panel did not provide an immediate hiring response, Abdul emphasizes how game-changing the **Sky States post-interview feedback loop** was. Instead of being left in the dark, the mentorship team analyzed the interview bottlenecks with him, identifying exactly where his technical explanations could be sharpened for the next round.

### The Ultimate Result: Landing a High-Paying AI Career Goal
That rapid refinement process yielded immediate dividends. Armed with elevated confidence, sharpened code architecture skills, and targeted resume optimization, Abdul went into his subsequent interview loops with a completely different energy.
The final result? Abdul bypassed entry-level stagnation entirely, securing a highly lucrative, **high-paying job** focused on machine learning deployments and AI infrastructure implementation.

### Constructive Feedback: Abdul’s Suggestions for Sky States Improvement
True to the journalistic, transparent nature of the platform, Abdul doesn’t hold back on areas where the ecosystem can continue to innovate. He suggests that while the current laboratory infrastructure is incredibly dense, introducing even more rapid-fire, real-time debugging modules earlier in the onboarding timeline would help students conquer command-line anxiety even faster.`,
    youtubeUrl: "https://www.youtube.com/watch?v=example_abdul_skystates",
    videoUrl: "https://storage.skyreviews.us/videos/abdul_teaser.mp4",
    thumbnailUrl: "https://storage.skyreviews.us/images/abdul_thumbnail.jpg",
    isActive: true,
  };

  // Upsert using the unique title or search for it
  const existing = await prisma.podcast.findFirst({
    where: { title: podcastData.title }
  });

  if (existing) {
    await prisma.podcast.update({
      where: { id: existing.id },
      data: podcastData
    });
    console.log(`Updated existing podcast: ${podcastData.title}`);
  } else {
    await prisma.podcast.create({
      data: podcastData
    });
    console.log(`Created new podcast: ${podcastData.title}`);
  }

  console.log('Seeding complete!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error seeding podcast:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
