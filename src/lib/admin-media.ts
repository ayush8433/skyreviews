import crypto from "crypto";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

function sanitizeFileName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function saveUploadedFile(
  file: File,
  options: {
    folder: string;
    fallbackExtension: string;
  }
) {
  if (!file || file.size === 0) {
    return null;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const extensionFromName = path.extname(file.name).toLowerCase();
  const extension = extensionFromName || options.fallbackExtension;
  const fileName = `${crypto.randomUUID()}-${sanitizeFileName(file.name || "upload")}${extension}`;
  const relativeFolder = path.join("public", options.folder);
  const absoluteFolder = path.join(process.cwd(), relativeFolder);

  await mkdir(absoluteFolder, { recursive: true });
  await writeFile(path.join(absoluteFolder, fileName), buffer);

  return `/${path.posix.join(options.folder, fileName)}`;
}