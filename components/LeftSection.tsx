import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaMobileScreenButton,
} from "react-icons/fa6";

import { about } from "@/constant/constant";

const LeftSection = ({}: any) => {
  return (
    <section className="relative lg:sticky top-0 py-10 md:py-16 lg:py-24 flex flex-col gap-12 lg:gap-0 justify-between lg:h-screen">
      <div>
        <h1 className="font-bold text-4xl text-[#f8f9fa] mb-2.5">
          {about.fullName}
        </h1>
        <h2 className="font-medium text-xl text-[#dee2e6] mb-5">
          {about.position}
        </h2>
        <p className="text-base text-[#adb5bd] mb-10 lg:mb-14">
          I focus on building beautiful and interactive <br />
          interfaces with great experiences.
        </p>

        <div className="flex flex-col gap-5">
          <p className="flex items-center gap-3 text-xs text-[#CED4DA] tracking-widest font-medium">
            <FaLocationDot size={16} /> {about.homeAddress}
          </p>
          <p className="flex items-center gap-3 text-xs text-[#CED4DA] tracking-widest font-medium">
            <FaEnvelope size={16} /> {about.emailAddress}
          </p>
          <p className="flex items-center gap-3 text-xs text-[#CED4DA] tracking-widest font-medium">
            <FaMobileScreenButton size={16} /> {about.contactNumber}
          </p>
        </div>

        <div className="hidden flex-col gap-5">
          <p className="text-xs text-[#adb5bd] tracking-widest font-bold cursor-pointer">
            ABOUT
          </p>
          <p className="text-xs text-[#adb5bd] tracking-widest font-bold cursor-pointer">
            EXPERIENCE
          </p>
          <p className="text-xs text-[#adb5bd] tracking-widest font-bold cursor-pointer">
            PROJECTS
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5 ">
        <a
          href={about.githubLink}
          className="text-[#adb5bd] hover:text-[#E9ECEF] transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a
          href={about.linkedInLink}
          className="text-[#adb5bd] hover:text-[#E9ECEF] transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
        <a
          href={about.instagramLink}
          className="text-[#adb5bd] hover:text-[#E9ECEF] transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a
          href={about.facebookLink}
          className="text-[#adb5bd] hover:text-[#E9ECEF] transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          <FaFacebook size={24} />
        </a>
      </div>
    </section>
  );
};

export default LeftSection;
