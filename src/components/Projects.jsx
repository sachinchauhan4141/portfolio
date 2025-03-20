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
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
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
      })}
    </>
  );
};

const data = [
  {
    category: "Team Portfolio",
    title: "Showcasing our team's skills & expertise.",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "E-commerce Platform",
    title: "A feature-rich online store with seamless user experience.",
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Video Streaming App",
    title: "A high-performance platform for video content.",
    src: "https://images.unsplash.com/photo-1573164574230-345a6ce397b7?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Admin Dashboard",
    title: "A role-based dashboard for business management.",
    src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Email App",
    title: "A custom email solution with HTML templates & attachments.",
    src: "https://images.unsplash.com/photo-1555435022-8a30961f0a38?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Freelance Client Project",
    title: "A tailored solution for a local business going online.",
    src: "https://images.unsplash.com/photo-1610484826967-9996b61e4628?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Chat App",
    title: "Real-time chat application with instant messaging.",
    src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4bde?q=80&w=1080&h=1920&auto=format&fit=crop",
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
    category: "CloudSparrow Technology",
    title: "A complete IT solutions company website.",
    src: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Job Portal",
    title: "A fully functional job posting & application system.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Subscription-Based SaaS",
    title: "A platform with role-based access & recurring payments.",
    src: "https://images.unsplash.com/photo-1627556712446-d83ef91a9d21?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Portfolio Website",
    title: "A modern, responsive portfolio built with the latest tech.",
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1080&h=1920&auto=format&fit=crop",
    content: <DummyContent />,
  },
];

export default Projects;
