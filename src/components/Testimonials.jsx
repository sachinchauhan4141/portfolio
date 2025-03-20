import React from "react";
import { InfiniteMovingCards } from "./aceternity/InfiniteMovingCards";

function Testimonials() {
  return (
    <div
      id="testimonials"
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden"
    >
      <h4 className="text-3xl lg:text-5xl lg:leading-tight ma-w-5xl mx-auto text-center text-white font-medium">
        What Our Clients Says
      </h4>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The team built a fast and modern website for our company. The UI/UX was outstanding, and we saw a significant increase in online inquiries after the launch!",
    name: "Rajesh Kumar",
    title: "Founder, CloudSparrow Technology",
  },
  {
    quote:
      "We needed a feature-rich chat application, and they delivered beyond expectations. Real-time messaging and smooth performance made our platform a hit among users.",
    name: "Ankita Sharma",
    title: "Product Manager, ChatSphere",
  },
  {
    quote:
      "Our e-commerce store needed a revamp, and the team executed it perfectly. The new site is highly responsive, visually appealing, and optimized for SEO.",
    name: "Vikram Patel",
    title: "Owner, TrendyCart",
  },
  {
    quote:
      "They developed a custom dashboard for our music academy, making student management seamless. The UI is intuitive, and it has saved us countless hours of admin work.",
    name: "Priya Mehta",
    title: "Director, Harmony Music Academy",
  },
  {
    quote:
      "From website design to deployment, their process was smooth and efficient. They handled everything professionally and delivered on time!",
    name: "Sandeep Verma",
    title: "CEO, WebNexa Solutions",
  },
  {
    quote:
      "Their expertise in React and backend technologies was evident in the web app they built for us. The performance and security features were top-notch!",
    name: "Neha Agarwal",
    title: "Co-Founder, EduTech Innovators",
  },
  {
    quote:
      "The mobile app they developed for our delivery service was a game-changer. It’s fast, user-friendly, and has significantly improved customer satisfaction.",
    name: "Rohit Malhotra",
    title: "CTO, QuickDeliver",
  },
  {
    quote:
      "I highly recommend them for any web and app development needs. They truly understand modern web technologies and build solutions that are both functional and beautiful.",
    name: "Kunal Desai",
    title: "Head of IT, NextGen Enterprises",
  },
  {
    quote:
      "We wanted a strong online presence for our local business, and they delivered a stunning website that helped us attract more customers.",
    name: "Ananya Roy",
    title: "Owner, The Craft Store",
  },
  {
    quote:
      "The best team we’ve worked with for web development! They not only built a great platform but also provided valuable insights on improving user engagement.",
    name: "Rishi Patel",
    title: "Marketing Lead, Startup Boost",
  },
];

export default Testimonials;
