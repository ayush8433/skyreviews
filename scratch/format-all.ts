import { PrismaClient } from "@prisma/client";
import { successStories } from "../src/data/success-stories-data";
import { videoTestimonials as staticVideos } from "../src/data/videoTestimonials";
import { podcastsRichData } from "../src/data/podcasts-rich-data";
import { alumniStories } from "../src/data/alumniStories";

const prisma = new PrismaClient();

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function parseYoutubeId(url: string | null | undefined): string {
  if (!url) return "";
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^"&?\/\s]{11})/i);
  return match ? match[1] : "";
}

async function main() {
  // Fetch database entries
  const dbStories = await prisma.story.findMany({
    include: { alumni: true, categories: { include: { category: true } } },
  });
  const dbVideos = await prisma.videoTestimonial.findMany();
  const dbPodcasts = await prisma.podcast.findMany();

  const output: string[] = [];

  // Helper to add formatted story/podcast/video
  function formatItem(data: {
    name: string;
    track: string;
    mediaType: string;
    youtubeId: string;
    redirectionUrl: string;
    duration: string;
    salaryHike: string;
    toolsLearned: string;
    beforeRole: string;
    afterRole: string;
    title: string;
    summary: string;
    quote: string;
    q1: string;
    q2: string;
    q3: string;
    q4: string;
  }) {
    return `Add New Success Story / Podcast
close
Candidate Name
${data.name || "N/A"}
Program Track
${data.track || "N/A"}
Media Type
${data.mediaType || "N/A"}
YouTube Video ID
${data.youtubeId || "N/A"}
Redirection Link (External URL e.g. skyreviews.us)
${data.redirectionUrl || "N/A"}
Duration (Videos/Podcasts)
${data.duration || "N/A"}
Salary Hike (e.g. 85%)
${data.salaryHike || "N/A"}
Tools Learned (comma separated)
${data.toolsLearned || "N/A"}
Transition Before Role
${data.beforeRole || "N/A"}
Transition After Role
${data.afterRole || "N/A"}
Headline / Title
${data.title || "N/A"}
Summary Paragraph (List View)
${data.summary || "N/A"}
Highlight Quote (List View)
${data.quote || "N/A"}
Detailed Case Study Profile (Q&A Style)
1. Where were you before starting? (The Challenge)
${data.q1 || "N/A"}
2. How was the learning experience? (The Journey)
${data.q2 || "N/A"}
3. What has been the outcome? (The Outcome)
${data.q3 || "N/A"}
4. Advice to future candidates
${data.q4 || "N/A"}
Cancel
Save Story
--------------------------------------------------------------------------------`;
  }

  // 1. Success Stories from success-stories-data.ts
  for (const story of successStories) {
    const youtubeId = parseYoutubeId(story.videoUrl);
    
    // Q&A mapping
    const q1 = story.beforeJoining || story.geoAnswers?.background || "N/A";
    const q2 = story.learningJourney || story.geoAnswers?.challengesFaced || "N/A";
    const q3 = story.results || story.geoAnswers?.projectsBuilt || "N/A";
    const q4 = story.interviewPrepDetails?.careerAdvice || story.geoAnswers?.adviceForBeginners || "N/A";

    output.push(formatItem({
      name: story.name,
      track: story.program || story.track,
      mediaType: "Success Story",
      youtubeId,
      redirectionUrl: `https://skyreviews.us/success-stories/${story.slug}`,
      duration: story.durationOfLearning || "N/A",
      salaryHike: "N/A", // Not explicitly standard, but if we can find it in text or keep N/A
      toolsLearned: story.technologiesLearned ? story.technologiesLearned.join(", ") : "N/A",
      beforeRole: story.previousCareer || "N/A",
      afterRole: story.currentCareerGoal || "N/A",
      title: story.quickSummary || `Transition of ${story.name}`,
      summary: story.quickSummary || "N/A",
      quote: story.reusedAssets?.linkedinArticle?.split("\n")[0] || "N/A",
      q1,
      q2,
      q3,
      q4
    }));
  }

  // 2. Podcasts from podcasts-rich-data.ts
  for (const [key, pod] of Object.entries(podcastsRichData)) {
    output.push(formatItem({
      name: pod.studentName,
      track: pod.profile?.course || "N/A",
      mediaType: "Podcast",
      youtubeId: "N/A", // Let's check if there is youtube ID in description or slug or default
      redirectionUrl: `https://skyreviews.us/podcasts/${pod.slug}`,
      duration: pod.duration,
      salaryHike: "N/A",
      toolsLearned: pod.profile?.technologies ? pod.profile.technologies.join(", ") : "N/A",
      beforeRole: pod.previousBackground,
      afterRole: pod.currentRole,
      title: pod.keyOutcomeSummary?.split(".")[0] || "N/A",
      summary: pod.keyOutcomeSummary,
      quote: pod.quotes?.[0] || "N/A",
      q1: pod.executiveSummary?.problem || pod.profile?.background || "N/A",
      q2: pod.executiveSummary?.journey || "N/A",
      q3: pod.executiveSummary?.outcomes || "N/A",
      q4: pod.interviewPrep?.advice || "N/A"
    }));
  }

  // 3. Alumni Stories from alumniStories.js
  for (const story of alumniStories) {
    const q1 = story.sections?.find(s => s.title.toLowerCase().includes("beginning") || s.title.toLowerCase().includes("transition"))?.content || "N/A";
    const q2 = story.sections?.find(s => s.title.toLowerCase().includes("learning") || s.title.toLowerCase().includes("difference"))?.content || "N/A";
    const q3 = story.sections?.find(s => s.title.toLowerCase().includes("job") || s.title.toLowerCase().includes("opportunity") || s.title.toLowerCase().includes("life"))?.content || "N/A";
    
    output.push(formatItem({
      name: story.name,
      track: story.category || "N/A",
      mediaType: "Alumni Story",
      youtubeId: "N/A",
      redirectionUrl: `https://skyreviews.us/stories/${story.slug}`,
      duration: story.readTime || "N/A",
      salaryHike: "N/A",
      toolsLearned: story.tags ? story.tags.join(", ") : "N/A",
      beforeRole: "N/A",
      afterRole: story.role,
      title: story.storyTitle || "N/A",
      summary: story.summary || "N/A",
      quote: story.quote || "N/A",
      q1,
      q2,
      q3,
      q4: "N/A"
    }));
  }

  // 4. Video Testimonials from staticVideos
  for (const vt of staticVideos) {
    const youtubeId = parseYoutubeId(vt.videoUrl);
    output.push(formatItem({
      name: vt.name,
      track: vt.role || "N/A",
      mediaType: "Video Testimonial",
      youtubeId,
      redirectionUrl: `https://skyreviews.us/${slugify(vt.name)}-sky-states-video-testimonials-review`,
      duration: vt.duration,
      salaryHike: "N/A",
      toolsLearned: "N/A",
      beforeRole: "N/A",
      afterRole: vt.role,
      title: vt.title,
      summary: vt.summary,
      quote: vt.summary,
      q1: "N/A",
      q2: "N/A",
      q3: "N/A",
      q4: "N/A"
    }));
  }

  // 5. Database Stories
  for (const s of dbStories) {
    const youtubeId = parseYoutubeId(s.videoUrl);
    let meta: any = {};
    try {
      if (s.metaJson) meta = JSON.parse(s.metaJson);
    } catch {}

    const q1 = meta.beforeJoining || s.content.substring(0, 300);
    const q2 = meta.learningJourney || "N/A";
    const q3 = meta.results || "N/A";
    const q4 = meta.interviewPrepDetails?.careerAdvice || "N/A";

    output.push(formatItem({
      name: s.alumni.name,
      track: s.alumni.title || s.categories?.[0]?.category?.name || "N/A",
      mediaType: "Story (DB)",
      youtubeId,
      redirectionUrl: `https://skyreviews.us/stories/${s.slug}`,
      duration: meta.durationOfLearning || "N/A",
      salaryHike: "N/A",
      toolsLearned: meta.technologiesLearned ? meta.technologiesLearned.join(", ") : "N/A",
      beforeRole: s.alumni.bio || "N/A",
      afterRole: s.alumni.title || "N/A",
      title: s.title,
      summary: s.content.substring(0, 200),
      quote: meta.keyMoments?.[0] || s.title,
      q1,
      q2,
      q3,
      q4
    }));
  }

  // 6. Database Video Testimonials
  for (const vt of dbVideos) {
    const youtubeId = parseYoutubeId(vt.videoUrl);
    output.push(formatItem({
      name: vt.name,
      track: vt.role || "N/A",
      mediaType: "Video Testimonial (DB)",
      youtubeId,
      redirectionUrl: `https://skyreviews.us/${slugify(vt.name)}-sky-states-video-testimonials-review`,
      duration: vt.duration,
      salaryHike: "N/A",
      toolsLearned: "N/A",
      beforeRole: "N/A",
      afterRole: vt.role,
      title: vt.title,
      summary: vt.summary,
      quote: vt.summary,
      q1: "N/A",
      q2: "N/A",
      q3: "N/A",
      q4: "N/A"
    }));
  }

  // 7. Database Podcasts
  for (const p of dbPodcasts) {
    const youtubeId = parseYoutubeId(p.youtubeUrl || p.videoUrl);
    output.push(formatItem({
      name: p.title.split(" - ")[0] || "N/A",
      track: "N/A",
      mediaType: "Podcast (DB)",
      youtubeId,
      redirectionUrl: `https://skyreviews.us/podcasts/${p.id}-${slugify(p.title)}`,
      duration: "N/A",
      salaryHike: "N/A",
      toolsLearned: "N/A",
      beforeRole: "N/A",
      afterRole: "N/A",
      title: p.title,
      summary: p.description,
      quote: p.description.substring(0, 100),
      q1: "N/A",
      q2: "N/A",
      q3: "N/A",
      q4: "N/A"
    }));
  }

  const fs = require("fs");
  const path = require("path");
  const finalOutput = output.join("\n\n");
  fs.writeFileSync("/root/.gemini/antigravity-ide/brain/bfb8cc03-c2bc-473a-9e6c-1c9ff0b498c0/formatted_stories_podcasts.md", finalOutput);
  console.log("Successfully wrote all success stories and podcasts to formatted_stories_podcasts.md");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
