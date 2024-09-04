import prisma from "@/lib/db";

export async function getUsers() {
  return await prisma.user.findMany({ take: 10 });
}
