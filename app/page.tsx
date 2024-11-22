import Card from "@/components/Card";
import prisma from "@/public/db";
import { JSX } from "react";

async function getProjects() {
  const result = await prisma.project.findMany();
  return result;
}

export default async function Home() {
  const projects = await getProjects();


  
  return ( 
    <div className="">

    <div className="flex flex-col gap-y-20 justify-center items-center">
    {projects.map((project) => (
        <Card key={project.id} project={project} />  
      ))}
    </div>
     
      </div>
  );
}
