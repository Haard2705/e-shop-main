import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/libs/prismadb"
import { create } from "domain";

export async function getSession() {
    return await getServerSession(authOptions)
}

export async function getCurrentUser(){
    try{
        const session = await getSession()

        if(!session?.user?.email){
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session?.user?.email,
            },
            include:{orders: true}
        });

        if(!currentUser){
            return null
        }

        return{
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatAt: currentUser.updateAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toISOString() || null
        }

    }catch(error: any){
        return null
    }
}

export default getCurrentUser;