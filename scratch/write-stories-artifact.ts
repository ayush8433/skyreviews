import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();
const artifactPath = "/root/.gemini/antigravity-ide/brain/6ba9c51a-8c7e-4645-bff4-fb4c943e35e1/all_success_stories.md";

async function main() {
  const stories = await prisma.story.findMany({
    include: {
      alumni: true,
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  let markdown = `# Sky States Success Stories Catalog\n\n`;
  markdown += `This document contains the complete catalog of all **${stories.length} success stories** currently registered in the database, including full story contents, publication dates, and alumni details.\n\n`;

  // TOC
  markdown += `## Table of Contents\n\n`;
  stories.forEach((story, index) => {
    const dateStr = story.publishedAt ? ` (${story.publishedAt})` : "";
    markdown += `${index + 1}. [${story.alumni?.name || "Unknown"} - ${story.title}](#${story.slug})${dateStr}\n`;
  });
  markdown += `\n---\n\n`;

  // Stories
  stories.forEach((story, index) => {
    const alumniName = story.alumni?.name || "N/A";
    const alumniTitle = story.alumni?.title || "N/A";
    const alumniCompany = story.alumni?.company ? `@ ${story.alumni.company}` : "";
    const dateStr = story.publishedAt || "N/A";

    markdown += `<a id="${story.slug}"></a>\n`;
    markdown += `## ${index + 1}. ${story.title}\n\n`;
    markdown += `> **Alumni**: ${alumniName} (${alumniTitle} ${alumniCompany})\n`;
    markdown += `> **Publication Date**: ${dateStr}\n`;
    markdown += `> **URL**: [https://skyreviews.us/stories/${story.slug}](https://skyreviews.us/stories/${story.slug})\n\n`;
    
    // Process markdown headers to not break global TOC nesting
    let content = story.content || "";
    // Replace markdown headers inside the story so they are subheadings
    content = content.replace(/^# /gm, "### ");
    content = content.replace(/^## /gm, "#### ");
    content = content.replace(/^### /gm, "##### ");

    markdown += `${content}\n\n`;
    markdown += `---\n\n`;
  });

  fs.mkdirSync(path.dirname(artifactPath), { recursive: true });
  fs.writeFileSync(artifactPath, markdown, "utf-8");
  console.log(`Successfully wrote ${stories.length} stories to ${artifactPath}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
