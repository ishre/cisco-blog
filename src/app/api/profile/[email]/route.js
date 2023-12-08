import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async(req, {params})=>{
    const {email} = params;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email : email,
            },
            include: {Post: true},
        });
        return new NextResponse(
            JSON.stringify(user, {status: 200})
        );
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({message: "profile/[slug]: Something went wrong!"}, {status: 500})
        );
    }
}