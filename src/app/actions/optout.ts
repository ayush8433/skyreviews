"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function submitOptOut(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const reason = formData.get("reason") as string;

    if (!email && !phone) {
      return { success: false, error: "Please provide either an email address or a phone number." };
    }

    await prisma.optOutRequest.create({
      data: {
        email: email || null,
        phone: phone || null,
        reason: reason || null,
      },
    });

    revalidatePath("/opt-out");
    return { success: true };
  } catch (error) {
    console.error("Error submitting opt-out request:", error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
