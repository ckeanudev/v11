import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const FeaturedProjectCard = ({ project }: any) => {
  const { title, description, img, liveUrl, tools, status } = project;

  return (
    <a href={liveUrl} target="_blank">
      <article className="relative group flex flex-col-reverse sm:flex-row p-0 lg:p-4 gap-4 rounded-md border-t border-transparent lg:hover:bg-white/5 lg:hover:border-white/10 transition-colors lg:hover:shadow">
        <div className="relative w-[220px] sm:w-[200px] lg:w-[140px]">
          <Image
            src={img}
            className="w-full h-auto rounded-md border-2 border-white/10 group-hover:border-white/20 transition-colors"
            alt={title}
            width={200}
            height={140}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-base font-medium text-[#e9ecef] lg:group-hover:text-sky-400">{`${title}`}</h2>

            {status.underDevelopment && (
              <p className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-sky-500/20 text-sky-400">{`Under Development`}</p>
            )}
            {status.improving && (
              <p className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-sky-500/20 text-sky-400">{`Still Improving`}</p>
            )}

            <div className="flex-1 flex items-center justify-end text-white">
              <FiArrowUpRight className="-translate-x-2 group-hover:-translate-x-0 group-hover:-translate-y-1.5 transition-transform group-hover:text-sky-400" />
            </div>
          </div>
          <p className="text-sm text-[#adb5bd] mb-4">{`${description}`}</p>

          <div className="flex gap-1.5 flex-wrap">
            {tools.map((item: string, i: number) => (
              <p
                className="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/20 text-sky-400"
                key={i}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
};

export default FeaturedProjectCard;
