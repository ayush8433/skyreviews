import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ManagerForm from "../ManagerForm";

export default async function EditManagerPage({
  params,
}: {
  params: Promise<{ managerId: string }>;
}) {
  const { managerId } = await params;

  const manager = await prisma.placementManager.findUnique({
    where: { id: managerId },
    include: {
      reviews: true,
      videos: true,
    },
  });

  if (!manager) {
    notFound();
  }

  const videoTestimonials = await prisma.videoTestimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <ManagerForm manager={manager} videoTestimonials={videoTestimonials} />;
}
