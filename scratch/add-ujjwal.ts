import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const manager = await prisma.placementManager.create({
    data: {
      name: "Ujjwal Jaiswal",
      role: "Hiring Mentor",
      linkedinUrl:
        "https://www.linkedin.com/in/ujjwal-jaiswal-976aa222b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      imageUrl: "/uploads/ujjwal-jaiswal.jpg",
      bio: "I don't just talk about careers, I help people transform them. I connect ambition with opportunity, turn uncertainty into action, and help candidates invest in a future they're proud of. I believe every conversation has the potential to change someone's life, and I treat it that way.",
    },
  });

  console.log("Created placement manager:", manager.id, manager.name);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
