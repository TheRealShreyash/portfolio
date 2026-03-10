import TechStack from "./TechStack";
import GithubSection from "./GithubSection";
import ProjectCard from "./ProjectCard";

const RightCard = ({ className }) => {
  const line1 = [
    { name: "javascript", image: "/js.svg" },
    { name: "typescript", image: "/typescript.svg" },
    { name: "nodejs", image: "/nodejs.svg" },
    { name: "vite", image: "/vite.svg" },
    { name: "react", image: "/react.svg" },
    { name: "html5", image: "/html5.webp" },
    { name: "css", image: "/css.svg" },
    { name: "tailwindcss", image: "/tailwindcss.svg" },
    { name: "mongodb", image: "/mongodb.svg" },
    { name: "express", image: "/express.svg" },
    { name: "python", image: "/python.svg" },
    { name: "git", image: "/git.svg" },
  ];

  const projects = [
    {
      imageUrl: "/S.webp",
      title: "Settled",
      desc: "A simple platform about rental listings and move in",
      url: "https://github.com/TheRealShreyash/settled",
    },
    {
      imageUrl: "/huehaven.webp",
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
      <h1 className="text-4xl md:text-7xl w-full md:w-36 text-center md:text-left font-semibold">
        Software{" "}
        <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Engineer
        </span>
      </h1>
      <p className="mt-7 text-[#898989]">
        Hello, myself <span className="text-white">Shreyash Koshta</span> a CS
        undergrad obsessed with building for the web, I am currently learning{" "}
        <span className="text-white">full-stack</span> web development. While I
        am still in the learning phase I am proficient in{" "}
        <span className="text-white">Javascript, TailwindCSS</span>. I ship
        things, break things and then fix them. Apart from coding I also love
        watching anime and reading books.
      </p>
      <div className="techstack mt-6">
        <TechStack items={line1} />
      </div>
      <GithubSection className="mt-6" />
      <div className="mt-14">
        <h2 className="font-semibold text-2xl">Projects</h2>
        <div className="flex flex-col gap-3 mt-4">
          {projects.map((project) => (
            <a key={project.title} href={project.url} target="_blank">
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
