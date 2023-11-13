import React from "react";
import LeftSection from "@/components/LeftSection";
import RightSection from "@/components/RightSection";

const page = ({}: any) => {
  return (
    <main className="relative max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[0.96fr_1.04fr] px-6 md:px-14 lg:px-24">
      <LeftSection />

      <RightSection />
    </main>
  );
};

export default page;
