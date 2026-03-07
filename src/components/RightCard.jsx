import React from "react";
import TechStack from "./TechStack";

const RightCard = ({ className }) => {
  const line1 = [
    { name: "javascript", image: "/js.png" },
    { name: "nodejs", image: "/nodejs.png" },
    { name: "vite", image: "/vite.png" },
    { name: "react", image: "/react.png" },
    { name: "html5", image: "/html5.png" },
    { name: "css3", image: "/css3.png" },
    { name: "tailwindcss", image: "/tailwindcss.png" },
    { name: "mongodb", image: "/mongodb.svg" },
    { name: "expressjs", image: "/express.svg" },
    { name: "python", image: "/python.png" },
  ];

  return (
    <div className={className}>
      <h1 className="text-7xl w-36 text-center font-semibold">
        Software <span className="text-[#898989]">Engineer</span>
      </h1>
      <p className="mt-7 text-[#898989]">
        Hello, myself <span className="text-white">Shreyash Koshta</span>, I am
        currently learning <span className="text-white">full-stack</span> web
        development. While I am still in the learning phase I am proficient in{" "}
        <span className="text-white">Javascript, TailwindCSS</span>. I have also
        worked with Python in past. Apart from coding I also love watching anime
        and reading books.
      </p>
      <div className="techstack mt-6">
        <TechStack items={line1} />
      </div>
    </div>
  );
};

export default RightCard;
