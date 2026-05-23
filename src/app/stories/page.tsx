import { prisma } from "@/lib/prisma";
import StoriesClient from "./StoriesClient";

export default async function StoriesPage() {
  const stories = await prisma.story.findMany({
    where: { isPublished: true },
    include: {
      alumni: true,
      categories: {
        include: {
          category: true,
        },
      },
      tags: {
        include: {
          tag: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const categories = await prisma.category.findMany();
  const tags = await prisma.tag.findMany();

  const availableCategories = categories.map((c) => c.name);
  const availableTags = tags.map((t) => t.name);

  return (
    <StoriesClient
      initialStories={stories}
      availableCategories={availableCategories}
      availableTags={availableTags}
    />
  );
}
