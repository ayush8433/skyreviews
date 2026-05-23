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
    title: "From Retail to Data Confidence",
    summary: "Melissa explains how structured mentorship helped her pivot into analytics.",
    name: "Melissa Carter",
    role: "Junior Data Analyst",
    company: "Healthcare Company",
    duration: "3:42",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnailUrl: "https://placehold.co/960x540/0f172a/93c5fd?text=Melissa+Carter",
  },
  {
    id: "vt-2",
    title: "A Veteran's Cybersecurity Mission",
    summary: "Daniel shares how the program translated his military mindset to security.",
    name: "Daniel Brooks",
    role: "Cybersecurity Analyst",
    company: "Managed Security Services",
    duration: "4:05",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnailUrl: "https://placehold.co/960x540/111827/7dd3fc?text=Daniel+Brooks",
  },
  {
    id: "vt-3",
    title: "International Student to DevOps",
    summary: "Priya talks about building cloud confidence while balancing grad school.",
    name: "Priya Nair",
    role: "DevOps Engineer",
    company: "Consulting Firm",
    duration: "3:18",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnailUrl: "https://placehold.co/960x540/0b1120/bae6fd?text=Priya+Nair",
  },
  {
    id: "vt-4",
    title: "Turning a Layoff into DevOps",
    summary: "Jason explains how practical labs rebuilt his confidence and skills.",
    name: "Jason Miller",
    role: "DevOps Support",
    company: "Tech Company",
    duration: "3:56",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnailUrl: "https://placehold.co/960x540/111827/60a5fa?text=Jason+Miller",
  },
  {
    id: "vt-5",
    title: "Customer Support to SOC Analyst",
    summary: "Amanda highlights the hands-on labs that made interviews click.",
    name: "Amanda Lewis",
    role: "SOC Analyst",
    company: "Financial Services Company",
    duration: "3:12",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnailUrl: "https://placehold.co/960x540/0f172a/38bdf8?text=Amanda+Lewis",
  },
  {
    id: "vt-6",
    title: "Restarting After Motherhood",
    summary: "Rebecca shares how flexible cohorts helped her return to data work.",
    name: "Rebecca Allen",
    role: "Business Intelligence Analyst",
    company: "Tech Company",
    duration: "4:10",
    videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnailUrl: "https://placehold.co/960x540/0b1320/93c5fd?text=Rebecca+Allen",
  },
];
