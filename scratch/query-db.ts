import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const stories = await prisma.story.findMany({
    include: { alumni: true }
  });
  console.log("STORIES:", JSON.stringify(stories, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
