import React from "react";
import { Cover } from "./aceternity/Cover";
import { AnimatedTooltip } from "./aceternity/AnimatedTootip";
import { Skills } from "./Skills";
import { ShootingStars } from "./aceternity/ShootingStars";
import { StarsBackground } from "./aceternity/StarsBackground";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

function HeroSection() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px] ">
        <a href="#">
          <img
            src="/vite.svg"
            width={40}
            height={40}
            alt="logo"
            className="max-h-[80px] h-full object-contain object-center "
          />
        </a>
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-[#4e69e0] font-medium">Its me</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Empowering Businesses, <br /> <Cover>Building Futures.</Cover>.
          </h2>
          <a
            href="#contact"
            className="text-white border-b border-l border-[#525252] hover:p-[10px] hover:bg-[#5070ff2f] transition-all ease-in-out mr-auto py-[10px] font-[600]"
          >
            Hire Us &rarr;
          </a>
          <div className="flex flex-row mt-[60px]">
            <AnimatedTooltip items={people} />
          </div>
          <p className="max-w-xl text-[1rem] text-start mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
            Our Team Members
          </p>
        </div>
      </div>

      <div className="w-full h-full flex items-end bg-[#0d0d0e]">
        <img
          src="/bannerimage.jpg"
          width={800}
          height={1200}
          alt="model"
          className="w-full max-h-[90vh] object-contain object-bottom"
        />
      </div>

      <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2">
        <a
          href="#contact"
          className="max-w-[130px] w-full h-[40px] flex justify-center items-center border border-l border-[#333333] text-white font-[600] rounded-[30px] mx-auto pb-[2px] "
        >
          Hire Us
        </a>
        <h2 className="bg-clip-text mt-[100px] text-transparent text-start mr-auto bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-2xl lg:text-3xl font-sans relative z-20 font-bold tracking-tight">
          About Us
        </h2>
        <p className="max-w-xl mx-auto text-xs text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          We are a team of passionate developers, designers, and strategists
          committed to building modern digital solutions that help businesses
          grow and succeed online. Whether it’s a website, mobile app, or a
          complete digital transformation, we create solutions that are
          scalable, user-friendly, and impactful.
        </p>
        <p className="max-w-xl mx-auto text-xs text-neutral-700 dark:text-neutral-400 text-start mt-[20px]">
          With a focus on innovation, performance, and user experience, we work
          closely with clients to bring their ideas to life. Let’s build
          something amazing together!
        </p>
        <Skills />
      </div>
      <ShootingStars className="z-[-1]" />
      <StarsBackground className="z-[-1]" />
    </div>
  );
}

export default HeroSection;
