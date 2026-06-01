import crypto from "crypto";

function base64Url(buffer: Buffer) {
  return buffer.toString("base64url");
}

export async function hashPassword(password: string) {
  const salt = crypto.randomBytes(16);
  const derivedKey = (await new Promise<Buffer>((resolve, reject) => {
    crypto.scrypt(password, salt, 64, (error, key) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(key as Buffer);
    });
  }));

  return `${base64Url(salt)}:${base64Url(derivedKey)}`;
}

export async function verifyPassword(password: string, storedHash: string) {
  const [saltPart, hashPart] = storedHash.split(":");

  if (!saltPart || !hashPart) {
    return false;
  }

  const salt = Buffer.from(saltPart, "base64url");
  const expectedHash = Buffer.from(hashPart, "base64url");

  const derivedKey = (await new Promise<Buffer>((resolve, reject) => {
    crypto.scrypt(password, salt, expectedHash.length, (error, key) => {
      if (error) {
        reject(error);
        return;
      }

      resolve(key as Buffer);
    });
  }));

  return crypto.timingSafeEqual(expectedHash, derivedKey);
}