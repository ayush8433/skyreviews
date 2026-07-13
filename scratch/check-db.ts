import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const stories = await prisma.$queryRaw`SELECT * FROM stories`;
  console.log(JSON.stringify(stories, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
