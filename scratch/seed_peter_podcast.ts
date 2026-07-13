import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Upserting Peter podcast in the database...');

  const title = "How Peter's Sky States Journey Transitioned to Technology Professional";
  const description = `In this episode, Peter shares his experience with **Sky States** and discusses the learning culture, professionalism, and supportive environment throughout his journey. He talks about how the structured curriculum, detailed end-to-end projects, and hands-on training helped him build practical industry skills. Peter also explains how the resume optimization process strengthened his profile, leading to interview opportunities within the first few weeks of completing his training. He highlights the interview preparation sessions, placement support, and career guidance provided by the team. A key part of his success was using the **Sky States Job Board** to discover relevant opportunities, apply for positions, and ultimately secure his placement. Throughout the conversation, Peter appreciates the training, mentorship, and career support that helped him confidently transition into the tech industry.`;

  const podcastData = {
    title,
    description,
    youtubeUrl: "https://youtu.be/U69KBuiF33w",
    videoUrl: "/uploads/Peter.mp4",
    thumbnailUrl: "https://kommodo.ai/i/N84Tjj4LALZf1BgeJwxP",
    isActive: true,
  };

  // Find the existing Peter podcast
  const existing = await prisma.podcast.findFirst({
    where: {
      OR: [
        { title: { contains: "Peter" } },
        { title: title }
      ]
    }
  });

  if (existing) {
    const updated = await prisma.podcast.update({
      where: { id: existing.id },
      data: podcastData,
    });
    console.log(`Successfully updated existing Peter podcast (ID: ${updated.id}) to: "${updated.title}"`);
  } else {
    const created = await prisma.podcast.create({
      data: podcastData,
    });
    console.log(`Successfully created new Peter podcast (ID: ${created.id}): "${created.title}"`);
  }

  console.log('Database operation completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error upserting Peter podcast:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
