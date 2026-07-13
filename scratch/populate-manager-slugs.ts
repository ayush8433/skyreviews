import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 120) || "manager";
}

async function main() {
  const managers = await prisma.placementManager.findMany();
  console.log(`Found ${managers.length} managers. Generating slugs...`);

  for (const manager of managers) {
    if (manager.slug) {
      console.log(`Manager ${manager.name} already has slug: ${manager.slug}`);
      continue;
    }

    let baseSlug = slugify(manager.name);
    let slug = baseSlug;
    let count = 1;

    // Ensure uniqueness
    while (true) {
      const existing = await prisma.placementManager.findFirst({
        where: { slug, NOT: { id: manager.id } },
      });
      if (!existing) break;
      count++;
      slug = `${baseSlug}-${count}`;
    }

    await prisma.placementManager.update({
      where: { id: manager.id },
      data: { slug },
    });
    console.log(`Assigned slug "${slug}" to manager ${manager.name}`);
  }

  console.log("Migration complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
