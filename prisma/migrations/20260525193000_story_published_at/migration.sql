-- AlterTable
PRAGMA foreign_keys=OFF;

CREATE TABLE "new_stories" (
	"id" TEXT NOT NULL PRIMARY KEY,
	"title" TEXT NOT NULL,
	"slug" TEXT NOT NULL,
	"content" TEXT NOT NULL,
	"videoUrl" TEXT,
	"thumbnailUrl" TEXT,
	"publishedAt" TEXT NOT NULL DEFAULT '',
	"isPublished" BOOLEAN NOT NULL DEFAULT false,
	"isFeatured" BOOLEAN NOT NULL DEFAULT false,
	"moderationStatus" TEXT NOT NULL DEFAULT 'PENDING',
	"createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	"updatedAt" DATETIME NOT NULL,
	"alumniId" TEXT NOT NULL,
	CONSTRAINT "new_stories_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "alumni" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO "new_stories" (
	"id",
	"title",
	"slug",
	"content",
	"videoUrl",
	"thumbnailUrl",
	"publishedAt",
	"isPublished",
	"isFeatured",
	"moderationStatus",
	"createdAt",
	"updatedAt",
	"alumniId"
)
SELECT
	"id",
	"title",
	"slug",
	"content",
	"videoUrl",
	"thumbnailUrl",
	COALESCE("publishedAt", "createdAt"),
	"isPublished",
	"isFeatured",
	"moderationStatus",
	"createdAt",
	"updatedAt",
	"alumniId"
FROM "stories";

DROP TABLE "stories";
ALTER TABLE "new_stories" RENAME TO "stories";

CREATE UNIQUE INDEX "stories_slug_key" ON "stories"("slug");

PRAGMA foreign_keys=ON;