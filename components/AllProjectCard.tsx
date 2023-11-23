import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

type Props = {};

const AllProjectCard = ({ data }: any) => {
  return (
    <div className="w-full px-0 md:px-3 pt-3 pb-4 flex flex-col md:flex-row gap-2 md:gap-0 border-b border-white/5 md:hover:bg-[#495057]/5 transition-colors ">
      <div className="w-full md:w-[70px] flex items-start">
        {data.year && (
          <p className="text-xs text-left text-[#adb5bd] font-semibold bg-[#F8F9FA]/10 py-1 px-2.5 rounded-full mt-0 md:mt-0.5">
            {data.year}
          </p>
        )}

        <div className="flex-1 flex md:hidden items-center justify-end gap-3 text-[#adb5bd] mt-0.5">
          {data.sourceUrl && (
            <a
              href={data.sourceUrl}
              target="_blank"
              className="hover:text-[#E9ECEF] transition-colors"
              rel="noopener noreferrer">
              <FaGithub size={21} />
            </a>
          )}

          {data.liveUrl && (
            <a
              href={data.liveUrl}
              target="_blank"
              className="hover:text-[#E9ECEF] transition-colors"
              rel="noopener noreferrer">
              <FaArrowUpRightFromSquare size={18} />
            </a>
          )}
        </div>
      </div>

      <div className="flex-1">
        <p className="text-lg text-left text-[#f8f9fa] font-semibold mb-2">
          {data.title}
        </p>

        <div className="text-xs text-left text-[#adb5bd] font-medium flex flex-wrap gap-1">
          {data.tools.map((tool: any, j: number) => (
            <p
              className="px-3 py-1 font-medium rounded-full bg-sky-500/20 text-sky-400"
              key={j}>
              {tool}
            </p>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center gap-3 w-[100px] text-[#adb5bd]">
        {data.sourceUrl && (
          <a
            href={data.sourceUrl}
            target="_blank"
            className="hover:text-[#E9ECEF] transition-colors"
            rel="noopener noreferrer">
            <FaGithub size={22} />
          </a>
        )}

        {data.liveUrl && (
          <a
            href={data.liveUrl}
            target="_blank"
            className="hover:text-[#E9ECEF] transition-colors"
            rel="noopener noreferrer">
            <FaArrowUpRightFromSquare size={19} />
          </a>
        )}
      </div>
    </div>
  );
};

export default AllProjectCard;
