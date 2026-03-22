import { useState } from "react";

const LeftCard = ({ className }) => {
  const [showStatus, setShowStatus] = useState(false);

  return (
    <div
      className={`flex flex-col items-center md:items-start md:sticky md:top-11 ${className}`}
    >
      <div className="relative w-48 md:w-64 group">
        <img
          src="/favicon.webp"
          alt="Favicon"
          fetchPriority="high"
          className={`rounded-md w-48 md:w-64 transition duration-300 ease-in-out group-hover:cursor-crosshair hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
        />

        {/* status dot — bottom right corner */}
        <div
          className="absolute -bottom-1.5 -right-1.5 group/dot cursor-default"
          onMouseEnter={() => setShowStatus(true)}
          onMouseLeave={() => setShowStatus(false)}
          onTouchStart={() => setShowStatus(true)}
          onTouchEnd={() => setTimeout(() => setShowStatus(false), 1500)}
        >
          {/* pulsing green dot */}
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-400 border-2 border-black"></span>
          </span>

          {/* tooltip on hover */}
          <div
            className={`absolute top-5 right-0 flex items-center gap-1.5  border border-[#262626] rounded-full px-2.5 py-1 transition-all duration-300 whitespace-nowrap ${
              showStatus
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            <span className="text-[10px] text-green-400 tracking-widest pp-font">
              open to work
            </span>
          </div>
        </div>
      </div>
      <p className="text-center md:text-left font-semibold text-4xl md:text-6xl mt-10">
        shreyash
      </p>
      <p className="text-[#898989] font-bold w-full max-w-60 text-center md:text-left">
        a software engineer who works with the{" "}
        <span
          className="text-purple-300 px-1.5 py-0.5 rounded-sm drop-shadow-[0_0_8px_rgba(192,132,252,0.8)]
        "
        >
          web
        </span>
      </p>
      <div className="socials flex items-center mt-8 gap-5 justify-center md:justify-start">
        <a href="https://github.com/therealshreyash">
          <img
            src="/GitHub_Invertocat_White.svg"
            className="w-6 cursor-default rounded-md hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition duration-300"
            alt="Github"
          />
        </a>
        <a href="https://x.com/_wedan">
          <img
            src="/logo-white.webp"
            className="w-6 cursor-default rounded-md hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition duration-300"
            alt="X"
          />
        </a>
        <a href="https://www.linkedin.com/in/shreyash-koshta-784b7a381/">
          <img
            src="/InBug-White.webp"
            className="w-6 cursor-default rounded-md hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition duration-300"
            alt="LinkedIn"
          />
        </a>
        <a href="https://leetcode.com/u/2PQT9RQGGy/">
          <img
            src="/leetcode.svg"
            className="w-6 cursor-default rounded-md hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition duration-300"
            alt="LinkedIn"
          />
        </a>
      </div>
    </div>
  );
};

export default LeftCard;
