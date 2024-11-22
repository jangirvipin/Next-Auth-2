import prisma from "@/public/db"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    await prisma.$connect();
    const data= await req.json();

    
    

    const result = await prisma.project.create({
        data: {
          title: data.title,
          description: data.Description,
          githublink: data.Github,
          livelink: data.Project,
          technologyUsed: data.checkboxes, // Directly use the array of strings
          image: "https://static-cse.canva.com/blob/1100760/create_quiz-maker_how-to2x.jpg"
        },
      });

    

       console.log(result);

    
    
      
    return NextResponse.json({message:"Data received"});
}
