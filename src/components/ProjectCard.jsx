import { useState } from "react";
import ProjectIcon from "./ProjectIcon";

const ProjectCard = ({
  imageUrl,
  title,
  desc,
  motivation,
  techStack = [],
  liveUrl,
  demoUrl,
  githubUrl,
}) => {
  const [open, setOpen] = useState(false);
  const [touched, setTouched] = useState(false);

  return (
    <div
      className={`bg-[#1A1A1A] rounded-lg border-l-2 transition-all duration-300 ease-in-out ${
        open || touched
          ? "border-l-purple-400"
          : "border-l-transparent hover:border-l-purple-400"
      }`}
      onTouchStart={() => setTouched(true)}
      onTouchEnd={() => setTouched(false)}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-4 p-5 md:p-6 hover:bg-[#222] transition-colors duration-200 rounded-lg text-left cursor-pointer"
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="size-10 rounded-md object-cover shrink-0"
            loading="lazy"
          />
        ) : (
          <ProjectIcon title={title} />
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-lg font-semibold truncate">
            {title}
          </h3>
          <p className="text-[#666] text-sm truncate">{desc}</p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-[#555] shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Expanded content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 flex flex-col gap-4 border-t border-[#262626] pt-4">
          {motivation && (
            <div>
              <span className="text-[10px] tracking-widest text-[#555] uppercase font-semibold pp-font">
                motivation
              </span>
              <p className="text-[#c0c0c0] text-sm mt-1.5 leading-relaxed">
                {motivation}
              </p>
            </div>
          )}

          {techStack.length > 0 && (
            <div>
              <span className="text-[10px] tracking-widest text-[#555] uppercase font-semibold pp-font">
                built with
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-[#d4d4d4] bg-[#2a2a2a] border border-[#3a3a3a] rounded-md px-2.5 py-1 font-mono hover:border-[#555] hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 mt-1 flex-wrap">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold bg-white text-black px-3 py-1.5 rounded-md hover:bg-gray-200 transition-colors"
              >
                live ↗
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#c0c0c0] hover:text-white border border-[#3a3a3a] hover:border-[#555] px-3 py-1.5 rounded-md transition-colors"
              >
                demo on 𝕏 ↗
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#c0c0c0] hover:text-white border border-[#3a3a3a] hover:border-[#555] px-3 py-1.5 rounded-md transition-colors"
              >
                github ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
