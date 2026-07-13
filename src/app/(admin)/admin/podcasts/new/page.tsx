import { prisma } from "@/lib/prisma";
import PodcastForm from "../PodcastForm";

export default async function NewPodcastPage() {
  const placementManagers = await prisma.placementManager.findMany({
    orderBy: { name: "asc" },
  });

  return <PodcastForm podcast={null} placementManagers={placementManagers} />;
}
