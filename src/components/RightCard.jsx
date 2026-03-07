import TechStack from "./TechStack";
import GithubSection from "./GithubSection";
import ProjectCard from "./ProjectCard";

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

  const projects = [
    {
      imageUrl: "",
      title: "Settled",
      desc: "A simple platform about rental listings and move in",
      url: "https://github.com/TheRealShreyash/settled",
    },
    {
      imageUrl: "/huehaven.png",
      title: "Hue Haven",
      desc: "A web app to get color information",
      url: "https://thehuehaven.netlify.app/",
    },
    {
      imageUrl: "",
      title: "GenQrco",
      desc: "A simple Qrcode Generator",
      url: "https://genqrco.netlify.app/",
    },
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
      <GithubSection className="mt-6" />
      <div className="mt-14">
        <h2 className="font-semibold text-2xl">Projects</h2>
        <div className="flex flex-col gap-3 mt-4">
          {projects.map((project) => (
            <a href={project.url} target="_blank">
              <ProjectCard
                imageUrl={project.imageUrl}
                title={project.title}
                desc={project.desc}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightCard;
