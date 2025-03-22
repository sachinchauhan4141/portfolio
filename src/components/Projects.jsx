import React from "react";
import { Carousel, Card } from "./aceternity/AppleCardsCarousel";

function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          The first rule of Apple club is that you boast about Apple club.
        </span>
        Keep a journal, quickly jot down a grocery list, and take amazing class
        notes. Want to convert those notes to text? No problem. Langotiya jeetu
        ka mara hua yaar is ready to capture every thought.
      </p>
      <img
        src="https://assets.aceternity.com/macbook.png"
        alt="Macbook mockup from Aceternity UI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "E-commerce Platform",
    title: "A feature-rich online store with seamless user experience.",
    src: "https://plus.unsplash.com/premium_photo-1664201890484-a5f7109c8e56?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Video Streaming App",
    title: "A high-performance platform for video content.",
    src: "https://images.unsplash.com/photo-1673196649654-d3ed2f58483c?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Admin Dashboard",
    title: "A role-based dashboard for business management.",
    src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Music Academy Website",
    title: "A platform for online music learning & booking lessons.",
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "PDF Editor",
    title: "Convert, edit, and save PDFs easily.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "IT Services Website",
    title: "Website for a digital marketing & development agency.",
    src: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Job Portal",
    title: "A fully functional job posting & application system.",
    src: "https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
];

export default Projects;
