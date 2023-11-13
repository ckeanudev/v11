import React from "react";
import { about } from "@/constant/constant";

const About = ({}: any) => {
  return (
    <section className="px-0 lg:px-4">
      <p className="text-base text-[#adb5bd]">
        {about.bigDescription1 || ""}
        <br />
        <br />
        {about.bigDescription2 || ""}
      </p>
    </section>
  );
};

export default About;
