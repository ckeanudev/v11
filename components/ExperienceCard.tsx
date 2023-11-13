import React from "react";

const ExperienceCard = ({ experience }: any) => {
  const { position, company, timeline, description, tools } = experience;

  return (
    <article className="group flex-1 flex flex-col sm:flex-row gap-1.5 sm:gap-4 md: p-0 lg:p-4 rounded-md border-t border-transparent lg:hover:bg-white/5 lg:hover:border-white/10 transition-colors lg:hover:shadow">
      <div className="flex w-[220px] sm:w-[200px] lg:w-[140px]">
        <p className="text-xs font-semibold text-[#6c757d]">{`${timeline}`}</p>
      </div>

      <div className="flex-1">
        <h2 className="flex-1 text-base font-medium text-[#e9ecef] lg:group-hover:text-sky-400 mb-3 sm:mb-2">
          {`${position}`} • {`${company}`}
        </h2>

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
  );
};

export default ExperienceCard;
