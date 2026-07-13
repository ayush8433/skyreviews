import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const stories = await prisma.story.findMany({
    include: { alumni: true, categories: { include: { category: true } }, tags: { include: { tag: true } } },
  });
  const videoTestimonials = await prisma.videoTestimonial.findMany();
  const podcasts = await prisma.podcast.findMany();

  console.log("=== DATA_START ===");
  console.log(JSON.stringify({ stories, videoTestimonials, podcasts }));
  console.log("=== DATA_END ===");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
