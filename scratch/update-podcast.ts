import { PrismaClient } from "@prisma/client";

async function updateDb(dbUrl: string) {
  console.log(`Connecting to: ${dbUrl}`);
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: dbUrl,
      },
    },
  });

  try {
    const podcast = await prisma.podcast.findFirst({
      where: { title: { contains: "Peter" } },
    });

    if (podcast) {
      console.log(`Found podcast: ${podcast.title}. Current videoUrl: ${podcast.videoUrl}`);
      const updated = await prisma.podcast.update({
        where: { id: podcast.id },
        data: { videoUrl: "/uploads/Peter.mp4" },
      });
      console.log(`Updated videoUrl to: ${updated.videoUrl}`);
    } else {
      console.log("No podcast matching 'Peter' found in this database.");
    }
  } catch (error) {
    console.error(`Error updating db:`, error);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  await updateDb("file:/root/skyreviews/prisma/dev.db");
  await updateDb("file:/root/skyreviews/prisma/prisma/dev.db");
}

main().catch(console.error);
