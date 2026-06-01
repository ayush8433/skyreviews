export const alumniImageMap: Record<string, string> = {
  "Ahmed Hassan": "/Ahmed%20hassan.jpg",
  "Andrew Collins": "/Andrew%20Collins.jpg",
  "Amanda Lewis": "/Amanda%20Lewis.jpg",
  "Kevin Ramirez": "/Kevin%20Ramirez.jpg",
  "Rebecca Allen": "/Rebecca%20allen.jpg",
  "Sophia Turner": "/Sophia%20Turner.jpg",
};

export const heroAlumniImages = [
  alumniImageMap["Ahmed Hassan"],
  alumniImageMap["Andrew Collins"],
  alumniImageMap["Amanda Lewis"],
  alumniImageMap["Kevin Ramirez"],
  alumniImageMap["Rebecca Allen"],
  alumniImageMap["Sophia Turner"],
];

export function getAlumniImageUrl(name: string, fallbackUrl?: string | null) {
  return alumniImageMap[name] ?? fallbackUrl ?? "";
}