import { PrismaClient } from '@prisma/client'

const dbUrl = "file:" + process.cwd().replace(/\\/g, '/') + "/prisma/dev.db";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  datasources: {
    db: {
      url: dbUrl
    }
  }
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
