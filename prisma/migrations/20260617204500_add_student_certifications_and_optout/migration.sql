-- CreateTable
CREATE TABLE IF NOT EXISTS "opt_out_requests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "phone" TEXT,
    "reason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "student_certifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "studentName" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "certCode" TEXT NOT NULL,
    "certName" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "certificateImageUrl" TEXT,
    "linkedinUrl" TEXT,
    "testimonial" TEXT,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
