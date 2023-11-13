import React from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const RightSection = ({}: any) => {
  return (
    <section className="py-10 md:py-16 lg:py-24 flex flex-col gap-16 lg:gap-24">
      <About />

      <Experience />

      <Projects />
    </section>
  );
};

export default RightSection;
