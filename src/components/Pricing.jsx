import React from "react";
import { Cover } from "./aceternity/Cover";
import { CardSpotlight } from "./aceternity/CardSpotlight";
import { BiCheck } from "react-icons/bi";

const Pricing = () => {
  const data = [
    {
      title: "Static Website Development",
      price: "Starting at ₹5,999",
      description:
        "Fast and secure static websites with optimized performance and SEO.",
      steps: [
        "Responsive design for all devices",
        "Optimized for fast loading speed",
        "SEO-friendly structure",
        "Basic contact form integration",
        "Hosting & domain setup assistance",
      ],
    },
    {
      title: "Dynamic Website Development",
      price: "Starting at ₹11,999",
      description:
        "Feature-rich, database-driven websites tailored to your business needs.",
      steps: [
        "Admin panel for content management",
        "User authentication & roles",
        "Interactive UI with animations",
        "Database integration (MongoDB, MySQL, etc.)",
        "Third-party API integration",
      ],
    },
    {
      title: "Mobile Application Development",
      price: "Starting at ₹19,999",
      description: "Custom mobile apps for iOS and Android with modern UI/UX.",
      steps: [
        "Cross-platform development",
        "Push notifications & real-time updates",
        "Secure authentication system",
        "Offline functionality support",
        "Deployment (Google Play & App Store)",
      ],
    },
  ];

  return (
    <div id="pricing">
      <div className="px-8 py-8 flex flex-col justify-center items-center ">
        <h2 className="mx-auto text-neutral-800 text-xl md:text-3xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>Our Pricing</Cover>
        </h2>
        <p className="max-w-xl text-[1rem] text-center mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
          Top-Quality Services at the Best Value
        </p>
      </div>
      <div className="max-w-[1000px] w-[90%] m-[90px_auto] grid md:grid-cols-3 gap-[25px]">
        {data.map((card) => {
          return (
            <CardSpotlight
              key={"card" + card}
              className="w-full p-[30px] flex flex-col"
            >
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                {card.title}
              </p>
              <span className="text-white text-2xl flex mt-2 font-medium relative z-20">
                {card.price}
              </span>
              <div className="text-neutral-200 mt-4 relative z-20">
                Features:
                <ul className="list-none  mt-2">
                  {card.steps.map((step, index) => {
                    return <Step key={index} title={step} />;
                  })}
                </ul>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                {card.description}
              </p>
              <a
                href="#contact"
                className="bg-[#242424] text-[0.9rem] relative z-20 p-[6px_10px] rounded-[5px] justify-center max-w-[110px] mt-4 flex text-white font-[600]"
              >
                Contact Us
              </a>
            </CardSpotlight>
          );
        })}
      </div>
    </div>
  );
};

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <BiCheck />
      <p className="text-white">{title}</p>
    </li>
  );
};

export default Pricing;
