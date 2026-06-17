"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/admin-auth";
import { requireAdminUser } from "@/lib/admin-auth";
import { saveUploadedFile } from "@/lib/admin-media";

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function readBoolean(formData: FormData, key: string) {
  return formData.get(key) === "on" || formData.get(key) === "true";
}

// ─── CERTIFICATIONS ──────────────────────────────────────────────────────────

export async function saveCertification(formData: FormData) {
  const certId = readString(formData, "certId");
  const studentName = readString(formData, "studentName");
  const program = readString(formData, "program");
  const certCode = readString(formData, "certCode");
  const certName = readString(formData, "certName");
  const issueDate = readString(formData, "issueDate");
  const linkedinUrl = readString(formData, "linkedinUrl");
  const testimonial = readString(formData, "testimonial");
  const fallbackImageUrl = readString(formData, "certificateImageUrl");
  const isPublished = readBoolean(formData, "isPublished");

  if (!studentName || !program || !certCode || !certName || !issueDate) {
    redirect(
      `/admin/certifications${certId ? `/${certId}` : "/new"}?error=Please%20fill%20all%20required%20fields`
    );
  }

  const uploadedImage = formData.get("certificateImageFile");
  const certificateImageUrl =
    uploadedImage instanceof File && uploadedImage.size > 0
      ? await saveUploadedFile(uploadedImage, {
          folder: "uploads/admin/certificates",
          fallbackExtension: ".jpg",
        })
      : fallbackImageUrl;

  if (certId) {
    await prisma.studentCertification.update({
      where: { id: certId },
      data: {
        studentName,
        program,
        certCode,
        certName,
        issueDate,
        certificateImageUrl: certificateImageUrl || null,
        linkedinUrl: linkedinUrl || null,
        testimonial: testimonial || null,
        isPublished,
      },
    });
  } else {
    await prisma.studentCertification.create({
      data: {
        studentName,
        program,
        certCode,
        certName,
        issueDate,
        certificateImageUrl: certificateImageUrl || null,
        linkedinUrl: linkedinUrl || null,
        testimonial: testimonial || null,
        isPublished,
      },
    });
  }

  revalidatePath("/admin/certifications");
  revalidatePath("/certifications");
  redirect("/admin/certifications?message=Certificate%20saved");
}

export async function deleteCertification(formData: FormData) {
  const certId = readString(formData, "certId");
  if (certId) {
    await prisma.studentCertification.delete({ where: { id: certId } });
  }
  revalidatePath("/admin/certifications");
  revalidatePath("/certifications");
  redirect("/admin/certifications?message=Certificate%20deleted");
}

// ─── ADMIN USER MANAGEMENT ───────────────────────────────────────────────────

export async function createAdminUser(formData: FormData) {
  const currentAdmin = await requireAdminUser();

  const name = readString(formData, "name");
  const email = readString(formData, "email");
  const password = readString(formData, "password");

  if (!email || !password) {
    redirect("/admin/admins?error=Email%20and%20password%20are%20required");
  }

  if (password.length < 8) {
    redirect("/admin/admins?error=Password%20must%20be%20at%20least%208%20characters");
  }

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    redirect("/admin/admins?error=An%20admin%20with%20this%20email%20already%20exists");
  }

  const passwordHash = await hashPassword(password);

  await prisma.adminUser.create({
    data: { name: name || null, email, passwordHash },
  });

  revalidatePath("/admin/admins");
  redirect("/admin/admins?message=Admin%20user%20created%20successfully");
}

export async function deleteAdminUser(formData: FormData) {
  const currentAdmin = await requireAdminUser();
  const targetId = readString(formData, "adminUserId");

  if (!targetId) {
    redirect("/admin/admins?error=Invalid%20user%20ID");
  }

  // Prevent self-deletion
  if (targetId === currentAdmin.id) {
    redirect("/admin/admins?error=You%20cannot%20delete%20your%20own%20account");
  }

  // Ensure at least one admin remains
  const adminCount = await prisma.adminUser.count();
  if (adminCount <= 1) {
    redirect("/admin/admins?error=Cannot%20delete%20the%20last%20admin%20account");
  }

  await prisma.adminUser.delete({ where: { id: targetId } });
  // Cascade deletes sessions via schema relation

  revalidatePath("/admin/admins");
  redirect("/admin/admins?message=Admin%20user%20deleted");
}
