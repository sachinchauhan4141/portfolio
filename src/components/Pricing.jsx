import React from "react";
import { Cover } from "./aceternity/Cover";
import { CardSpotlight } from "./aceternity/CardSpotlight";
import { BiCheck } from "react-icons/bi";

const Pricing = () => {
  return (
    <div id="pricing">
      <div className="px-8 py-8 flex flex-col justify-center items-center ">
        <h2 className="mx-auto text-neutral-800 text-xl md:text-3xl lg:text-5xl font-sans relative z-20 font-bold tracking-tight">
          <Cover>Our Pricing</Cover>.
        </h2>
        <p className="max-w-xl text-[1rem] text-center mt-[10px] md:text-lg text-neutral-700 dark:text-neutral-400">
          We Provide You Quality Of Services
        </p>
      </div>
      <div className="max-w-[1000px] w-[90%] m-[90px_auto] grid md:grid-cols-3 gap-[25px]">
        {[1, 2, 3].map((card) => {
          return (
            <CardSpotlight
              key={"card" + card}
              className="w-full p-[30px] flex flex-col"
            >
              <p className="text-xl font-bold relative z-20 mt-2 text-white">
                Authentication steps
              </p>
              <span className="text-white text-2xl flex mt-2 font-medium relative z-20">
                800$
              </span>
              <div className="text-neutral-200 mt-4 relative z-20">
                Follow these steps to secure your account:
                <ul className="list-none  mt-2">
                  <Step title="Enter your email address" />
                  <Step title="Create a strong password" />
                  <Step title="Set up two-factor authentication" />
                  <Step title="Verify your identity" />
                </ul>
              </div>
              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                Ensuring your account is properly secured helps protect your
                personal information and data.
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
