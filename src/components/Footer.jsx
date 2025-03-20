import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between items-center border-t border-[#1d1d1d]">
      <a href="#">
        <img
          src="/logo.svg"
          width={70}
          alt="logo"
          className="max-h-[80px] h-full object-contain object-center "
        />
      </a>
      <span className="text-[0.9rem] font-medium text-[#9e9e9e]">
        s3dev - copyright 2025
      </span>
    </div>
  );
};

export default Footer;
