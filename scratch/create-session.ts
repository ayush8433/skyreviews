import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.adminUser.findFirst();
  if (!admin) {
    console.error("No admin user found!");
    return;
  }
  
  const token = crypto.randomBytes(32).toString("base64url");
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
  
  await prisma.adminSession.create({
    data: {
      tokenHash,
      expiresAt,
      adminUserId: admin.id,
    },
  });
  
  console.log("ADMIN_EMAIL:", admin.email);
  console.log("SESSION_TOKEN:", token);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
