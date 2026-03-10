import { useState } from "react";

const ProjectCard = ({ imageUrl, title, desc }) => {
  const [touched, setTouched] = useState(false);

  return (
    <div
      className={`flex flex-col sm:flex-row bg-[#1A1A1A] rounded-lg p-6 md:p-10 hover:bg-[#242424] transition duration-500 ease-in-out gap-6 md:gap-12 items-center text-center sm:text-left border-l-2 ${
        touched
          ? "border-l-purple-400"
          : "border-l-transparent hover:border-l-purple-400"
      }`}
      onTouchStart={() => setTouched(true)}
      onTouchEnd={() => setTouched(false)}
    >
      <img
        src={imageUrl ? imageUrl : null}
        alt={title}
        className="size-20 md:size-24 rounded-xl"
        loading="lazy"
      />
      <div>
        <h3 className="text-lg md:text-xl">{title}</h3>
        <p className="text-[#898989] text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
