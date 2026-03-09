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
          className={`grayscale rounded-md w-48 md:w-64 group-hover:grayscale-0 transition duration-300 ease-in-out group-hover:cursor-crosshair ${showStatus ? "grayscale-0" : "grayscale"}`}
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
          className="text-[#F8F8F8]
        px-1.5 py-0.5 rounded-sm drop-shadow-[0_0_8px_rgba(248,248,248,0.6)]
        "
        >
          web
        </span>
      </p>
      <div className="socials flex items-center mt-8 gap-5 justify-center md:justify-start">
        <a href="https://github.com/therealshreyash">
          <img
            src="/GitHub_Invertocat_White.svg"
            className="w-6 cursor-default rounded-md hover:scale-110 transition duration-300 ease-in-out"
            alt="Github"
          />
        </a>
        <a href="https://x.com/_wedan">
          <img
            src="/logo-white.webp"
            className="w-6 cursor-default rounded-md hover:scale-110 transition duration-300 ease-in-out"
            alt="X"
          />
        </a>
        <a href="#">
          <img
            src="/InBug-White.webp"
            className="w-6 cursor-default rounded-md hover:scale-110 transition duration-300 ease-in-out"
            alt="LinkedIn"
          />
        </a>
      </div>
      {/* <button className="mt-10 md:mt-auto flex items-center md:gap-2 border border-[#262626] text-[#898989] rounded-md w-full justify-center py-1 hover:text-white hover:bg-[#1a1a1a] hover:border-[#444] transition-all duration-300 ease-in-out group">
        resume{" "}
        <img
          src="/download.svg"
          width={18}
          height={18}
          className="opacity-50 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all"
          alt=""
        />
      </button> */}
    </div>
  );
};

export default LeftCard;
