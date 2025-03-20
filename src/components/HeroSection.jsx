import React from "react";
import { Cover } from "./aceternity/Cover";
import { AnimatedTooltip } from "./aceternity/AnimatedTootip";
import { Skills } from "./Skills";
import { ShootingStars } from "./aceternity/ShootingStars";
import { StarsBackground } from "./aceternity/StarsBackground";

const people = [
  {
    id: 1,
    name: "Sachin",
    designation: "Web Developer",
    image: "/avatars/sachin.jpeg",
  },
  {
    id: 2,
    name: "Saurabh",
    designation: "App Developer",
    image: "/avatars/saurabh.jpg",
  },
  {
    id: 3,
    name: "Sandeep",
    designation: "Marketing",
    image: "/avatars/sandeep.jpg",
  },
  {
    id: 4,
    name: "Mohit",
    designation: "Designer",
    image: "/avatars/mohit.jpg",
  },
  {
    id: 5,
    name: "Madhav",
    designation: "Content Writer",
    image: "/avatars/madhav.jpg",
  },
  {
    id: 6,
    name: "Jeet Chauhan",
    designation: "DevOps Engineer",
    image: "/avatars/jeet.jpg",
  },
];

const projectData = [
  {
    src: "/projects/grocerystorebanner.jpg",
    alt: "grocerystorebanner",
    top: "0%",
    zIndex: 1,
  },
  {
    src: "/projects/musicacademybanner.jpg",
    alt: "musicacademybanner",
    top: "25%",
    zIndex: 2,
  },
  {
    src: "/projects/gymsymbanner.png",
    alt: "gymsymbanner",
    top: "50%",
    zIndex: 3,
  },
  {
    src: "/projects/logikartbanner.jpg",
    alt: "logikartbanner",
    top: "75%",
    zIndex: 4,
  },
];

function HeroSection() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
      <div className="max-w-[600px] w-[90%] mx-auto py-[30px] ">
        <a href="#">
          <img
            src="/logo.svg"
            width={120}
            alt="logo"
            className="max-h-[80px] h-full object-contain object-center "
          />
        </a>
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-[#4e69e0] font-medium">We are</span>
          <h2 className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Empowering Businesses, <br /> <Cover>Building Futures.</Cover>
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

      <div className="relative w-full h-full flex bg-[#0d0d0e] overflow-hidden">
        {projectData.map((image, index) => (
          <BannerImage
            key={index} // Use a unique key for each item
            src={image.src}
            alt={image.alt}
            top={image.top}
            zIndex={image.zIndex}
          />
        ))}
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

const BannerImage = ({ src, alt, top, zIndex }) => (
  <img
    src={src}
    alt={alt}
    width={800}
    className={`border-2 border-white absolute z-${zIndex} hover:z-5 top-[${top}] hover:top-0 w-full object-cover object-top transition-all transform-fill delay-200`}
  />
);

export default HeroSection;
