import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User {
        role: string | null;
        registered: string[];
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        role: string | null;
        registered: string[];
    }
}
