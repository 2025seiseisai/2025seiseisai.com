import { PrismaClient } from "@/generated/prisma/client";
export * from "@/generated/prisma/enums";
export * from "@/generated/prisma/models";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
const dbClient = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = dbClient;
export default dbClient;
