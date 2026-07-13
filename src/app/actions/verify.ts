"use server";

import { prisma } from "@/lib/prisma";

export async function searchCertifications(query: string) {
  if (!query || query.trim().length < 2) {
    return { success: true, data: [] };
  }

  try {
    const certs = await prisma.studentCertification.findMany({
      where: {
        isPublished: true,
        OR: [
          { studentName: { contains: query } },
          { certCode: { contains: query } },
          { certName: { contains: query } },
        ],
      },
      orderBy: { issueDate: "desc" },
    });

    // Return plain JS objects so Next.js doesn't complain about Date objects
    const plainCerts = certs.map((c) => ({
      id: c.id,
      studentName: c.studentName,
      program: c.program,
      certCode: c.certCode,
      certName: c.certName,
      issueDate: c.issueDate,
      certificateImageUrl: c.certificateImageUrl,
      linkedinUrl: c.linkedinUrl,
      testimonial: c.testimonial,
    }));

    return { success: true, data: plainCerts };
  } catch (error) {
    console.error("Error searching certifications:", error);
    return { success: false, error: "Database query failed." };
  }
}
