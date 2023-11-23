import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

import {
  featuredProjects,
  bigProjects,
  smallProjects,
} from "@/constant/constant";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import AllProjectCard from "@/components/AllProjectCard";

const page = ({}: any) => {
  return (
    <main className="relative max-w-[1300px] mx-auto px-6 md:px-14 lg:px-24 py-10 md:py-16 lg:py-24">
      <Link
        href={"/"}
        className="group flex gap-1 items-center text-sky-400 cursor-pointer font-semibold">
        <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" />{" "}
        Ckeanu Richer Locson
      </Link>
      <h1 className="font-bold text-2xl md:text-4xl text-[#f8f9fa] mb-10 mt-2">
        All Projects
      </h1>

      <section className="flex flex-col border-t border-white/5">
        {featuredProjects.map((data: any, i: number) => (
          <AllProjectCard data={data} key={i} />
        ))}

        {bigProjects.map((data: any, i: number) => (
          <AllProjectCard data={data} key={i} />
        ))}

        {smallProjects.map((data: any, i: number) => (
          <AllProjectCard data={data} key={i} />
        ))}
      </section>
    </main>
  );
};

export default page;
