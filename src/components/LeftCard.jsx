import React from "react";

const LeftCard = ({ className }) => {
  return (
    <div className={className}>
      <img
        src="/favicon.jfif"
        alt="Favicon"
        className="grayscale rounded-md w-64"
      />
      <p className="text-left  font-semibold text-6xl mt-10">shreyash</p>
      <p className="text-[#898989] font-bold w-60">
        a software engineer who works with the{" "}
        <span
          className="text-[#F8F8F8]
        
        px-1.5 py-0.5 rounded-sm drop-shadow-[0_0_8px_rgba(248,248,248,0.6)]
        "
        >
          web
        </span>
      </p>
      <div className="socials flex items-center mt-8 gap-5">
        <a href="https://github.com/therealshreyash">
          <img
            src="/GitHub_Invertocat_White.svg"
            className="w-6 cursor-default rounded-md hover:scale-110 transition duration-300 ease-in-out"
            alt="Github"
          />
        </a>
        <a href="https://x.com/_wedan">
          <img
            src="/logo-white.png"
            className="w-6 cursor-default rounded-md hover:scale-110 transition duration-300 ease-in-out"
            alt="X"
          />
        </a>
        <a href="#">
          <img
            src="/InBug-White.png"
            className="w-6 cursor-default rounded-md hover:scale-110 transition duration-300 ease-in-out"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
};

export default LeftCard;
