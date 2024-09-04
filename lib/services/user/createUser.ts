import prisma from "@/lib/db";
import { PrismaModels } from "@/lib/types";

export const createUser = async (payload: PrismaModels["User"]) =>
  await prisma.user.create({ data: payload });
