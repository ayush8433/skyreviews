"use server";

import { StoryModerationStatus } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import {
  clearAdminSession,
  createAdminSession,
  verifyPassword,
} from "@/lib/admin-auth";
import { saveUploadedFile } from "@/lib/admin-media";

function readString(formData: FormData, key: string) {
  const value = formData.get(key);

  return typeof value === "string" ? value.trim() : "";
}

function readBoolean(formData: FormData, key: string) {
  return formData.get(key) === "on" || formData.get(key) === "true";
}

function splitList(value: string) {
  return value
    .split(/[\n,]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")
    .slice(0, 120) || "story";
}

function toSqliteDateTimeString(date: Date) {
  return date.toISOString().replace("T", " ").replace("Z", "");
}

async function syncStoryTaxonomy(storyId: string, categories: string[], tags: string[]) {
  const categoryRecords = await Promise.all(
    categories.map((name) =>
      prisma.category.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );

  const tagRecords = await Promise.all(
    tags.map((name) =>
      prisma.tag.upsert({
        where: { name },
        update: {},
        create: { name },
      })
    )
  );

  await prisma.storyCategory.deleteMany({ where: { storyId } });
  await prisma.storyTag.deleteMany({ where: { storyId } });

  if (categoryRecords.length > 0) {
    await prisma.storyCategory.createMany({
      data: categoryRecords.map((category) => ({
        storyId,
        categoryId: category.id,
      })),
    });
  }

  if (tagRecords.length > 0) {
    await prisma.storyTag.createMany({
      data: tagRecords.map((tag) => ({
        storyId,
        tagId: tag.id,
      })),
    });
  }
}

export async function loginAdmin(formData: FormData) {
  const email = readString(formData, "email");
  const password = readString(formData, "password");

  const adminUser = await prisma.adminUser.findUnique({ where: { email } });

  if (!adminUser) {
    redirect("/admin/login?error=Invalid%20email%20or%20password");
  }

  const isValid = await verifyPassword(password, adminUser.passwordHash);

  if (!isValid) {
    redirect("/admin/login?error=Invalid%20email%20or%20password");
  }

  await createAdminSession(adminUser.id);
  redirect("/admin?message=Signed%20in%20successfully");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin/login?message=Signed%20out");
}

export async function saveStory(formData: FormData) {
  const storyId = readString(formData, "storyId");
  const title = readString(formData, "title");
  const content = readString(formData, "content");
  const moderationStatus = readString(formData, "moderationStatus") as StoryModerationStatus;
  const isPublished = readBoolean(formData, "isPublished");
  const isFeatured = readBoolean(formData, "isFeatured");
  const publishedAtInput = readString(formData, "publishedAt");
  const videoUrl = readString(formData, "videoUrl");
  const thumbnailUrl = readString(formData, "thumbnailUrl");

  const alumniName = readString(formData, "alumniName");
  const alumniEmail = readString(formData, "alumniEmail");
  const alumniTitle = readString(formData, "alumniTitle");
  const alumniCompany = readString(formData, "alumniCompany");
  const alumniLocation = readString(formData, "alumniLocation");
  const alumniLinkedin = readString(formData, "alumniLinkedin");
  const alumniImageUrl = readString(formData, "alumniImageUrl");
  const alumniBio = readString(formData, "alumniBio");

  const categoryNames = splitList(readString(formData, "categories"));
  const tagNames = splitList(readString(formData, "tags"));

  if (!title || !content || !alumniName || !alumniEmail || !alumniTitle) {
    redirect(`/admin/stories${storyId ? `/${storyId}` : "/new"}?error=Please%20fill%20the%20required%20fields`);
  }

  const existingStory = storyId
    ? await prisma.story.findUnique({ where: { id: storyId } })
    : null;

  const slug = existingStory?.slug ?? `${slugify(title)}-${Date.now()}`;
  const publishedAt = publishedAtInput
    ? toSqliteDateTimeString(new Date(`${publishedAtInput}T00:00:00.000Z`))
    : existingStory?.publishedAt || toSqliteDateTimeString(new Date());

  const alumni = await prisma.alumni.upsert({
    where: { email: alumniEmail },
    update: {
      name: alumniName,
      title: alumniTitle,
      company: alumniCompany || null,
      location: alumniLocation || null,
      linkedinUrl: alumniLinkedin || null,
      imageUrl: alumniImageUrl || null,
      bio: alumniBio || null,
    },
    create: {
      name: alumniName,
      email: alumniEmail,
      title: alumniTitle,
      company: alumniCompany || null,
      location: alumniLocation || null,
      linkedinUrl: alumniLinkedin || null,
      imageUrl: alumniImageUrl || null,
      bio: alumniBio || null,
    },
  });

  const story = storyId
    ? await prisma.story.update({
        where: { id: storyId },
        data: {
          title,
          content,
          publishedAt,
          videoUrl: videoUrl || null,
          thumbnailUrl: thumbnailUrl || null,
          isPublished,
          isFeatured,
          moderationStatus: moderationStatus || StoryModerationStatus.PENDING,
          alumniId: alumni.id,
        },
      })
    : await prisma.story.create({
        data: {
          title,
          slug,
          content,
          publishedAt,
          videoUrl: videoUrl || null,
          thumbnailUrl: thumbnailUrl || null,
          isPublished,
          isFeatured,
          moderationStatus: moderationStatus || StoryModerationStatus.PENDING,
          alumniId: alumni.id,
        },
      });

  await syncStoryTaxonomy(story.id, categoryNames, tagNames);

  revalidatePath("/admin");
  revalidatePath("/admin/stories");
  revalidatePath("/");
  revalidatePath(`/stories/${story.slug}`);
  revalidatePath("/");

  redirect("/admin/stories?message=Story%20saved");
}

export async function reviewStory(formData: FormData) {
  const storyId = readString(formData, "storyId");
  const nextAction = readString(formData, "nextAction");

  const story = await prisma.story.findUnique({ where: { id: storyId } });

  if (!story) {
    redirect("/admin/stories?error=Story%20not%20found");
  }

  const isApproved = nextAction === "approve";

  await prisma.story.update({
    where: { id: storyId },
    data: {
      moderationStatus: isApproved ? StoryModerationStatus.APPROVED : StoryModerationStatus.REJECTED,
      isPublished: isApproved,
    },
  });

  revalidatePath("/admin");
  revalidatePath("/admin/stories");
  revalidatePath("/");
  revalidatePath(`/stories/${story.slug}`);
  revalidatePath("/");

  redirect(`/admin/stories?message=Story%20${isApproved ? "approved" : "rejected"}`);
}

export async function deleteStory(formData: FormData) {
  const storyId = readString(formData, "storyId");
  const story = await prisma.story.findUnique({ where: { id: storyId } });

  if (!story) {
    redirect("/admin/stories?error=Story%20not%20found");
  }

  await prisma.story.delete({ where: { id: storyId } });

  revalidatePath("/admin");
  revalidatePath("/admin/stories");
  revalidatePath("/");
  revalidatePath(`/stories/${story.slug}`);
  revalidatePath("/");

  redirect("/admin/stories?message=Story%20deleted");
}

export async function saveVideoTestimonial(formData: FormData) {
  const videoId = readString(formData, "videoId");
  const title = readString(formData, "title");
  const summary = readString(formData, "summary");
  const name = readString(formData, "name");
  const role = readString(formData, "role");
  const company = readString(formData, "company");
  const duration = readString(formData, "duration");
  const fallbackVideoUrl = readString(formData, "videoUrl");
  const fallbackThumbnailUrl = readString(formData, "thumbnailUrl");
  const isActive = readBoolean(formData, "isActive");
  const sortOrder = Number.parseInt(readString(formData, "sortOrder") || "0", 10);

  const uploadedVideo = formData.get("videoFile");
  const uploadedThumbnail = formData.get("thumbnailFile");

  if (!title || !summary || !name || !role || !company || !duration) {
    redirect(`/admin/videos${videoId ? `/${videoId}` : "/new"}?error=Please%20fill%20the%20required%20fields`);
  }

  const videoUrl =
    uploadedVideo instanceof File && uploadedVideo.size > 0
      ? await saveUploadedFile(uploadedVideo, { folder: "uploads/admin/videos", fallbackExtension: ".mp4" })
      : fallbackVideoUrl;
  const thumbnailUrl =
    uploadedThumbnail instanceof File && uploadedThumbnail.size > 0
      ? await saveUploadedFile(uploadedThumbnail, { folder: "uploads/admin/thumbnails", fallbackExtension: ".jpg" })
      : fallbackThumbnailUrl;

  if (!videoUrl || !thumbnailUrl) {
    redirect(`/admin/videos${videoId ? `/${videoId}` : "/new"}?error=Please%20provide%20a%20video%20and%20thumbnail`);
  }

  if (videoId) {
    await prisma.videoTestimonial.update({
      where: { id: videoId },
      data: {
        title,
        summary,
        name,
        role,
        company,
        duration,
        videoUrl,
        thumbnailUrl,
        isActive,
        sortOrder: Number.isNaN(sortOrder) ? 0 : sortOrder,
      },
    });
  } else {
    await prisma.videoTestimonial.create({
      data: {
        title,
        summary,
        name,
        role,
        company,
        duration,
        videoUrl,
        thumbnailUrl,
        isActive,
        sortOrder: Number.isNaN(sortOrder) ? 0 : sortOrder,
      },
    });
  }

  revalidatePath("/admin");
  revalidatePath("/admin/videos");
  revalidatePath("/");

  redirect("/admin/videos?message=Video%20saved");
}

export async function deleteVideoTestimonial(formData: FormData) {
  const videoId = readString(formData, "videoId");

  await prisma.videoTestimonial.delete({ where: { id: videoId } });

  revalidatePath("/admin");
  revalidatePath("/admin/videos");
  revalidatePath("/");

  redirect("/admin/videos?message=Video%20deleted");
}

export async function createTaxonomyEntry(formData: FormData) {
  const taxonomyType = readString(formData, "taxonomyType");

  if (taxonomyType === "category") {
    const name = readString(formData, "categoryName");
    const description = readString(formData, "categoryDescription");

    if (!name) {
      redirect("/admin/taxonomy?error=Category%20name%20is%20required");
    }

    await prisma.category.upsert({
      where: { name },
      update: { description: description || null },
      create: { name, description: description || null },
    });
  }

  if (taxonomyType === "tag") {
    const name = readString(formData, "tagName");

    if (!name) {
      redirect("/admin/taxonomy?error=Tag%20name%20is%20required");
    }

    await prisma.tag.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  revalidatePath("/admin");
  revalidatePath("/admin/taxonomy");
  revalidatePath("/");
  revalidatePath("/");

  redirect("/admin/taxonomy?message=Saved");
}

export async function deleteTaxonomyEntry(formData: FormData) {
  const taxonomyType = readString(formData, "taxonomyType");
  const entryId = readString(formData, "entryId");

  if (taxonomyType === "category") {
    await prisma.storyCategory.deleteMany({ where: { categoryId: entryId } });
    await prisma.category.delete({ where: { id: entryId } });
  }

  if (taxonomyType === "tag") {
    await prisma.storyTag.deleteMany({ where: { tagId: entryId } });
    await prisma.tag.delete({ where: { id: entryId } });
  }

  revalidatePath("/admin");
  revalidatePath("/admin/taxonomy");
  revalidatePath("/");
  revalidatePath("/");

  redirect("/admin/taxonomy?message=Deleted");
}