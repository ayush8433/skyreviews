import { prisma } from "@/lib/prisma";
import ManagerForm from "../ManagerForm";

export default async function NewManagerPage() {
  const videoTestimonials = await prisma.videoTestimonial.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <ManagerForm manager={null} videoTestimonials={videoTestimonials} />;
}
