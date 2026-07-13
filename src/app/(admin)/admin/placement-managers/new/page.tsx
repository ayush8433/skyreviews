import { prisma } from "@/lib/prisma";
import ManagerForm from "../ManagerForm";

export default async function NewManagerPage() {
  const allStories = await prisma.story.findMany({
    orderBy: { title: "asc" },
  });

  const allPodcasts = await prisma.podcast.findMany({
    orderBy: { title: "asc" },
  });

  const videoTestimonials = await prisma.videoTestimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <ManagerForm
      manager={null}
      allStories={allStories}
      allPodcasts={allPodcasts}
      videoTestimonials={videoTestimonials}
    />
  );
}
