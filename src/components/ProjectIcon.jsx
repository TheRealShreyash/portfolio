const ProjectIcon = ({ title, className = "" }) => {
  const letter = title?.trim()[0]?.toUpperCase() || "?";

  return (
    <div
      className={`size-10 rounded-md bg-[#262626] border border-[#333] flex items-center justify-center shrink-0 ${className}`}
    >
      <span className="text-sm font-mono font-bold text-[#898989]">
        {letter}
      </span>
    </div>
  );
};

export default ProjectIcon;
