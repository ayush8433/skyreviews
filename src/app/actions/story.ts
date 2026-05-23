"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitStory(formData: FormData) {
  try {
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const currentRole = formData.get("currentRole") as string;
    const company = formData.get("company") as string;
    const location = formData.get("location") as string;
    const linkedin = formData.get("linkedin") as string;
    const headline = formData.get("headline") as string;
    const storyContent = formData.get("story") as string;

    if (!fullName || !email || !currentRole || !headline || !storyContent) {
      return { success: false, error: "Missing required fields" };
    }

    let alumni = await prisma.alumni.findUnique({
      where: { email }
    });

    if (!alumni) {
      alumni = await prisma.alumni.create({
        data: {
          name: fullName,
          email,
          title: currentRole,
          company,
          location,
          linkedinUrl: linkedin,
        }
      });
    }

    const slug = headline.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    await prisma.story.create({
      data: {
        title: headline,
        slug: slug + '-' + Date.now(),
        content: storyContent,
        isPublished: false,
        alumniId: alumni.id,
      }
    });

    revalidatePath("/stories");
    return { success: true };
  } catch (error) {
    console.error("Error submitting story:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
}
