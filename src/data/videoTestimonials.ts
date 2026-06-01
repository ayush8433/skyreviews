export type VideoTestimonial = {
  id: string;
  title: string;
  summary: string;
  name: string;
  role: string;
  company: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "vt-1",
    title: "Student Review One",
    summary: "A direct, honest review from one of our students about the learning experience and support.",
    name: "Sky States Student 01",
    role: "Video Testimonial",
    company: "Sky States",
    duration: "3:42",
    videoUrl: "/video 1.mp4",
    thumbnailUrl: "https://placehold.co/960x540/0f172a/93c5fd?text=Sky+States+01",
  },
  {
    id: "vt-2",
    title: "Student Review Two",
    summary: "Another student story highlighting the mentorship, structure, and course value.",
    name: "Sky States Student 02",
    role: "Video Testimonial",
    company: "Sky States",
    duration: "4:05",
    videoUrl: "/video 2.mp4",
    thumbnailUrl: "https://placehold.co/960x540/111827/7dd3fc?text=Sky+States+02",
  },
  {
    id: "vt-3",
    title: "Student Review Three",
    summary: "A final testimonial focused on smooth learning, practical guidance, and outcomes.",
    name: "Sky States Student 03",
    role: "Video Testimonial",
    company: "Sky States",
    duration: "3:18",
    videoUrl: "/video 3.mp4",
    thumbnailUrl: "https://placehold.co/960x540/0b1120/bae6fd?text=Sky+States+03",
  },
  {
    id: "vt-4",
    title: "Excellent Training & Placement Support Experience",
    summary:
      "A student shares how Sky States provided structured live training, hands-on projects, mock interviews, resume guidance, and continuous placement support throughout the learning journey.",
    name: "Ashton Taylor",
    role: "Software Engineer",
    company: "Confidential (NDA)",
    duration: "1:58",
    videoUrl: "/Ashton taylor .mp4",
    thumbnailUrl: "https://yourdomain.com/uploads/skystates-testimonial-thumb.jpg",
  },
];
