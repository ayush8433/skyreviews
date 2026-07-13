import { PrismaClient, StoryModerationStatus } from '@prisma/client';
import { successStories } from '../src/data/success-stories-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Synchronizing success stories from TS to SQLite database with full-length markdown content...');

  for (const story of successStories) {
    const email = `${story.slug}@skyreviews.us`;

    // 1. Upsert Alumni
    const alumni = await prisma.alumni.upsert({
      where: { email },
      update: {
        name: story.name,
        title: story.program,
        bio: story.previousCareer,
        location: story.location,
        imageUrl: story.photoUrl,
      },
      create: {
        email,
        name: story.name,
        title: story.program,
        bio: story.previousCareer,
        location: story.location,
        imageUrl: story.photoUrl,
      },
    });

    // 2. Compile full-length markdown content for the database content field
    let fullMarkdownContent = ``;

    if (story.quickSummary) {
      fullMarkdownContent += `* **Quick Summary:** ${story.quickSummary}\n\n`;
    }

    if (story.beforeJoining) {
      fullMarkdownContent += `## Life Before Joining Sky States\n\n${story.beforeJoining}\n\n`;
    }

    if (story.learningJourney) {
      fullMarkdownContent += `## Why She Chose Technology & Sky States\n\n${story.learningJourney}\n\n`;
    }

    if (story.projects && story.projects.length > 0) {
      fullMarkdownContent += `## High-Impact Projects Built at Sky States\n\n`;
      for (const project of story.projects) {
        fullMarkdownContent += `### Project: ${project.title}\n\n`;
        fullMarkdownContent += `* **The Problem:** ${project.problem}\n`;
        fullMarkdownContent += `* **Tools Used:** ${project.toolsUsed.join(', ')}\n`;
        fullMarkdownContent += `* **The Process & Approach:** ${project.approach}\n`;
        if (project.challenges) {
          fullMarkdownContent += `* **Challenges Faced:** ${project.challenges}\n`;
        }
        if (project.lessonsLearned) {
          fullMarkdownContent += `* **Lessons Learned:** ${project.lessonsLearned}\n`;
        }
        if (project.realWorldApplications) {
          fullMarkdownContent += `* **Real-World Outcome:** ${project.realWorldApplications}\n`;
        }
        fullMarkdownContent += `\n`;
      }
    }

    if (story.interviewPrep) {
      fullMarkdownContent += `## Comprehensive Interview Preparation\n\n${story.interviewPrep}\n\n`;
    }

    if (story.results) {
      fullMarkdownContent += `## Results & Professional Outcomes\n\n${story.results}\n\n`;
    }

    if (story.faqs && story.faqs.length > 0) {
      fullMarkdownContent += `## Comprehensive FAQ Section\n\n`;
      for (const faq of story.faqs) {
        fullMarkdownContent += `### ${faq.question}\n\n${faq.answer}\n\n`;
      }
    }

    // Extract meta fields that are stored in metaJson
    const {
      id,
      slug,
      name,
      photoUrl,
      program,
      track,
      previousCareer,
      currentCareerGoal,
      location,
      videoUrl,
      quickSummary,
      ...metaFields
    } = story;

    const metaJson = JSON.stringify(metaFields);

    // 3. Upsert Story with the full markdown content
    const savedStory = await prisma.story.upsert({
      where: { slug: story.slug },
      update: {
        title: story.quickSummary,
        content: fullMarkdownContent.trim(),
        videoUrl: story.videoUrl,
        thumbnailUrl: story.photoUrl,
        isPublished: true,
        moderationStatus: StoryModerationStatus.APPROVED,
        publishedAt: story.publishedAt ? story.publishedAt.replace('T', ' ').replace('Z', '') : new Date().toISOString().replace('T', ' ').replace('Z', ''),
        metaJson,
        alumniId: alumni.id,
      },
      create: {
        title: story.quickSummary,
        slug: story.slug,
        content: fullMarkdownContent.trim(),
        videoUrl: story.videoUrl,
        thumbnailUrl: story.photoUrl,
        isPublished: true,
        moderationStatus: StoryModerationStatus.APPROVED,
        publishedAt: story.publishedAt ? story.publishedAt.replace('T', ' ').replace('Z', '') : new Date().toISOString().replace('T', ' ').replace('Z', ''),
        metaJson,
        alumniId: alumni.id,
      },
    });

    // 4. Ensure Category exists and associate it
    const categoryName = story.track || "Career Transition";
    const category = await prisma.category.upsert({
      where: { name: categoryName },
      update: {},
      create: { name: categoryName },
    });

    await prisma.storyCategory.upsert({
      where: {
        storyId_categoryId: {
          storyId: savedStory.id,
          categoryId: category.id,
        },
      },
      update: {},
      create: {
        storyId: savedStory.id,
        categoryId: category.id,
      },
    });

    console.log(`Successfully synced full-length story: ${story.name} (${story.slug})`);
  }

  console.log('Database sync complete!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error syncing stories:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
