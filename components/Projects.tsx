import React from "react";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { featuredProjects } from "@/constant/constant";
import Link from "next/link";

const Projects = ({}: any) => {
  return (
    <section className="flex flex-col gap-10">
      {featuredProjects.map((project: any, i: number) => (
        <FeaturedProjectCard project={project} key={i} />
      ))}

      <div className="flex">
        <Link href={"/allprojects"}>
          <p className="text-[#f8f9fa] cursor-pointer border-b-2 border-transparent hover:border-sky-500 transition-colors">
            View All Projects
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
