import { useState } from "react";

const ResumeFab = () => {
  const [showLabel, setShowLabel] = useState(false);
  return (
    <a
    href="/resume.pdf"
      download="shreyashkoshta-resume.pdf"
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
      onTouchStart={() => setShowLabel(true)}
      onTouchEnd={() => setShowLabel(false)}
      className="fixed top-3 md:top-5 md:right-5 z-50 flex items-center justify-center size-8 right-4 md:size-10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-none backdrop-blur-sm"
    >
      <span
        className={`absolute top-7 md:top-10 px-3 py-1 text-white text-[10px] tracking-[0.2em] transition-all duration-300 pointer-events-none whitespace-nowrap pp-font ${
          showLabel ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
        } `}
      >
        resume
      </span>
      <img
        src="/download.svg"
        alt="Download"
        className="w-4 md:w-6 opacity-70 group-hover:opacity-100 transition-opacity"
      />

      <div className="absolute inset-0 rounded-full bg-white/5 blur-md -z-10 group-hover:bg-white/10 transition-all"></div>
    </a>
  );
};

export default ResumeFab;
