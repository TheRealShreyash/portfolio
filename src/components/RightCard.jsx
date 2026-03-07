import React from "react";

const RightCard = ({ className }) => {
  const line1 = [
    { name: "javascript", image: "" },
    { name: "nodejs", image: "" },
    { name: "vite", image: "" },
    { name: "react", image: "" },
    { name: "html5", image: "" },
    { name: "css3", image: "" },
    { name: "tailwindcss", image: "" },
    { name: "mongodb", image: "" },
    { name: "expressjs", image: "" },
    { name: "python", image: "" },
  ];

  const line2 = [
    { name: "vscode", image: "" },
    { name: "git", image: "" },
    { name: "react", image: "" },
    { name: "html5", image: "" },
    { name: "css3", image: "" },
    { name: "tailwindcss", image: "" },
    { name: "mongodb", image: "" },
    { name: "expressjs", image: "" },
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
      <div className="techstack">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </div>
  );
};

export default RightCard;
