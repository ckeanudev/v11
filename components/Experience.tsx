import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experience } from "@/constant/constant";

const Experience = ({}: any) => {
  return (
    <section className="flex flex-col gap-10">
      {experience.map((experience: any, i: number) => {
        return <ExperienceCard experience={experience} key={i} />;
      })}
    </section>
  );
};

export default Experience;
