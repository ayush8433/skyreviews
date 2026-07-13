export const alumniImageMap: Record<string, string> = {
  "Ahmed Hassan": "/Ahmed%20hassan.jpg",
  "Andrew Collins": "/Andrew%20Collins.jpg",
  "Amanda Lewis": "/Amanda%20Lewis.jpg",
  "Kevin Ramirez": "/Kevin%20Ramirez.jpg",
  "Rebecca Allen": "/rebecca.jpg",
  "Sophia Turner": "/Sophia%20Turner.jpg",
  "Jennifer Morales": "/Jennifer%20Morales.jpg",
  "Emily Parker": "/Emily%20Parker.jpeg",
  "Rachel Green": "/Rachel%20green.jpg",
};

export const heroAlumniImages = [
  alumniImageMap["Ahmed Hassan"],
  alumniImageMap["Andrew Collins"],
  alumniImageMap["Amanda Lewis"],
  alumniImageMap["Kevin Ramirez"],
  alumniImageMap["Rebecca Allen"],
  alumniImageMap["Sophia Turner"],
  alumniImageMap["Jennifer Morales"],
  alumniImageMap["Emily Parker"],
  alumniImageMap["Rachel Green"],
];

export function getAlumniImageUrl(name: string, fallbackUrl?: string | null) {
  return fallbackUrl || alumniImageMap[name] || "";
}