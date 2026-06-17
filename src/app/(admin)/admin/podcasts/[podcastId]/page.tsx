import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import PodcastForm from "../PodcastForm";

export default async function EditPodcastPage({
  params,
}: {
  params: Promise<{ podcastId: string }>;
}) {
  const { podcastId } = await params;

  const podcast = await prisma.podcast.findUnique({
    where: { id: podcastId },
  });

  if (!podcast) {
    notFound();
  }

  return <PodcastForm podcast={podcast} />;
}
