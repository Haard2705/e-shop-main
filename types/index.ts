import { User } from "@prisma/client";

export type SafeUser = Omit<User,"createdAt" | "updatAt" | "emailVerified"> & {
    createdAt: string;
    updatAt: string;
    emailVerified: string | null;
}