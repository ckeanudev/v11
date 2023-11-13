import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

import {
  featuredProjects,
  bigProjects,
  smallProjects,
} from "@/constant/constant";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

const page = ({}: any) => {
  return (
    <main className="relative max-w-[1300px] mx-auto p-24">
      <Link
        href={"/"}
        className="group flex gap-1 items-center text-sky-400 cursor-pointer font-semibold">
        <FiArrowLeft className="group-hover:-translate-x-2 transition-transform" />{" "}
        Ckeanu Richer Locson
      </Link>
      <h1 className="font-bold text-4xl text-[#f8f9fa] mb-10 mt-2">
        All Projects
      </h1>

      <section className="">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5 pb-2">
              <th className="w-[60px] py-3 text-sm text-left text-[#dee2e6] font-semibold">
                Year
              </th>
              <th className="min-w-[200px] py-3 text-sm text-left text-[#dee2e6] font-semibold">
                Project
              </th>
              <th className="py-3 text-sm text-left text-[#dee2e6] font-semibold">
                Built with
              </th>

              <th className="w-[140px] py-3 text-sm text-left text-[#dee2e6] font-semibold">
                Links
              </th>
            </tr>
          </thead>
          <tbody>
            {featuredProjects.map((project: any, i: number) => (
              <tr className="border-b border-white/5" key={i}>
                <td className="pt-3 pb-5 text-sm text-left text-[#adb5bd] font-medium">
                  {project.year}
                </td>
                <td className=" min-w-[400px] pt-3 pb-5 text-base text-left text-[#f8f9fa] font-semibold">
                  {project.title}
                </td>
                <td className="pt-3 pb-5 text-xs text-left text-[#adb5bd] font-medium flex flex-wrap gap-1">
                  {project.tools.map((tool: any, j: number) => (
                    <p
                      className="px-3 py-1 font-medium rounded-full bg-sky-500/20 text-sky-400"
                      key={j}>
                      {tool}
                    </p>
                  ))}
                </td>

                <td className="pt-3 pb-5 text-sm text-left text-[#adb5bd] font-medium">
                  <div className="flex gap-4 items-center">
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaGithub size={22} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaArrowUpRightFromSquare size={19} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}

            {bigProjects.map((project: any, i: number) => (
              <tr className="border-b border-white/5" key={i}>
                <td className="pt-3 pb-5 text-sm text-left text-[#adb5bd] font-medium">
                  {project.year}
                </td>
                <td className="pt-3 pb-5 text-base text-left text-[#f8f9fa] font-semibold">
                  {project.title}
                </td>
                <td className="pt-3 pb-5 text-xs text-left text-[#adb5bd] font-medium flex flex-wrap gap-1">
                  {project.tools.map((tool: any, j: number) => (
                    <p
                      className="px-3 py-1 font-medium rounded-full bg-sky-500/20 text-sky-400"
                      key={j}>
                      {tool}
                    </p>
                  ))}
                </td>

                <td className=" pt-3 pb-5 text-sm text-left text-[#adb5bd] font-medium"></td>
              </tr>
            ))}

            {smallProjects.map((project: any, i: number) => (
              <tr className="border-b border-white/5" key={i}>
                <td className="pt-3 pb-5 text-sm text-left text-[#adb5bd] font-medium">
                  {/* {project.year} */}
                </td>
                <td className="pt-3 pb-5 pr-5 text-base text-left text-[#f8f9fa] font-semibold">
                  {project.title}
                </td>
                <td className="pt-3 pb-5 text-xs text-left text-[#adb5bd] font-medium flex flex-wrap gap-1">
                  {project.tools.map((tool: any, j: number) => (
                    <p
                      className="px-3 py-1 font-medium rounded-full bg-sky-500/20 text-sky-400"
                      key={j}>
                      {tool}
                    </p>
                  ))}
                </td>

                <td className=" pt-3 pb-5 text-sm text-left text-[#adb5bd] font-medium">
                  <div className="flex gap-4 items-center">
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaGithub size={22} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaArrowUpRightFromSquare size={19} />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default page;
