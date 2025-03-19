import React from "react";
import { FloatingDock } from "./aceternity/FloatingDock";
import { IconHome } from "@tabler/icons-react";
import { BiCode, BiStar } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { RiRoadMapFill } from "react-icons/ri";
import { FaRupeeSign } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Services",
      icon: (
        <BiCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#services",
    },
    {
      title: "Projects",
      icon: (
        <CiSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Resume",
      icon: (
        <RiRoadMapFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#resume",
    },
    {
      title: "Testimonials",
      icon: (
        <BiStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#testimonials",
    },

    {
      title: "Pricing",
      icon: (
        <FaRupeeSign className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#pricing",
    },
    {
      title: "Contact",
      icon: (
        <CgMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (
    <div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock items={links} />
    </div>
  );
}

export default Navbar;
