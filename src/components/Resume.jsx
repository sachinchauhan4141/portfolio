import React from "react";
import { Timeline } from "./aceternity/Timeline";

function Resume() {
  const data = [
    {
      title: "Planning",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            We start by understanding client requirements, market research, and
            project scope. A detailed roadmap is created to ensure seamless
            execution.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Planning phase"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="Project planning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Designing",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Creating visually appealing and user-friendly UI/UX designs that
            align with the brand identity and enhance user experience.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Design process"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="UI Components"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Transforming designs into a fully functional product using modern
            technologies and best coding practices.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="Development process"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="Code structure"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Deployment & Delivery",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Ensuring a smooth deployment with optimized performance, followed by
            delivery and post-launch support.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="Deployment process"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="Final product delivery"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="resume">
      <Timeline data={data} />
    </div>
  );
}

export default Resume;
