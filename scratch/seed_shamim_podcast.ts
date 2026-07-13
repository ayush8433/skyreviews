import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Upserting Shamim Kazi podcast in the database...');

  const title = "How Industry Expert Transitioned to Technology Professional: Shamim Kazi Case Study";
  const description = `Making the transition into Data Science without a technical background can feel overwhelming, but Shamim Kazi's experience shows how consistent learning and the right guidance can make a difference. In this video, Shamim shares his honest experience as a student at SkyStates, where he started with little technical knowledge and gradually built confidence in Python, data handling, and core Data Science concepts through a structured learning approach. One of the biggest challenges for Shamim was understanding technical topics without prior exposure to programming. He talks about how trainer Abhishek simplified complex concepts, explained every topic patiently, and ensured students understood the "why" behind each lesson rather than simply memorizing code. Shamim also highlights the value of SkyStates' personalized learning experience, including one-on-one doubt-clearing sessions, practical assignments, and continuous mentorship that helped him stay motivated throughout the program.`;

  const podcastData = {
    title,
    description,
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    videoUrl: "/video 1.mp4",
    thumbnailUrl: "https://placehold.co/960x540/0b1120/bae6fd?text=Shamim+Kazi+Transition",
    isActive: true,
  };

  // Find the existing Shamim Kazi podcast by contains "Shamim"
  const existing = await prisma.podcast.findFirst({
    where: {
      OR: [
        { title: { contains: "Shamim" } },
        { title: title }
      ]
    }
  });

  if (existing) {
    const updated = await prisma.podcast.update({
      where: { id: existing.id },
      data: podcastData,
    });
    console.log(`Successfully updated existing Shamim Kazi podcast (ID: ${updated.id}) to: "${updated.title}"`);
  } else {
    const created = await prisma.podcast.create({
      data: podcastData,
    });
    console.log(`Successfully created new Shamim Kazi podcast (ID: ${created.id}): "${created.title}"`);
  }

  console.log('Database operation completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error upserting Shamim Kazi podcast:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
