import crypto from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { hashPassword, verifyPassword } from "@/lib/password";

const SESSION_COOKIE = "skyreviews_admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 24 * 7;

export { hashPassword, verifyPassword };

export async function createAdminSession(adminUserId: string) {
  const token = crypto.randomBytes(32).toString("base64url");
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  await prisma.adminSession.create({
    data: {
      tokenHash,
      expiresAt,
      adminUserId,
    },
  });

  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value;

  if (sessionToken) {
    const tokenHash = crypto.createHash("sha256").update(sessionToken).digest("hex");
    await prisma.adminSession.deleteMany({ where: { tokenHash } });
  }

  cookieStore.delete(SESSION_COOKIE);
}

export async function getCurrentAdminUser() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE)?.value;

  if (!sessionToken) {
    return null;
  }

  const tokenHash = crypto.createHash("sha256").update(sessionToken).digest("hex");
  const session = await prisma.adminSession.findUnique({
    where: { tokenHash },
    include: { adminUser: true },
  });

  if (!session || session.expiresAt < new Date()) {
    return null;
  }

  return session.adminUser;
}

export async function requireAdminUser() {
  const adminUser = await getCurrentAdminUser();

  if (!adminUser) {
    redirect("/admin/login");
  }

  return adminUser;
}

export function getAdminSessionCookieName() {
  return SESSION_COOKIE;
}