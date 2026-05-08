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
    { name: "postgres", image: "/postgres.svg" },
    { name: "drizzle", image: "/drizzle.svg" },
  ];

  const projects = [
    {
      title: "Iris",
      desc: "An OIDC compliant oAuth server",
      motivation: "",
      techStack: ["bun", "express", "typescript", "postgres", "drizzle", "jwt"],
      githubUrl: "https://github.com/TheRealShreyash/auth-service",
      liveUrl: "https://iris.shreyxsh.me",
    },
    {
      title: "Checkboxes",
      desc: "Live collaboration 1k checkboxes inspired by \'1 million checkboxes\'",
      motivation: "",
      techStack: [
        "bun",
        "express",
        "typescript",
        "postgres",
        "drizzle",
        "redis",
        "websockets",
        "socket.io",
        "express",
      ],
      githubUrl: "https://github.com/TheRealShreyash/auth-service",
      liveUrl: "https://checkboxes.shreyxsh.me",
      demoUrl: "https://x.com/_wedan/status/2050901448851145113",
    },
    {
      imageUrl: "/authX.webp",
      title: "authX",
      desc: "A simple yet robust auth service",
      motivation:
        "I kept copy-pasting auth boilerplate across projects and wanted a single service I could point any app at. Built it to understand JWTs and session management deeply rather than just using a library.",
      techStack: ["bun", "express", "typescript", "postgres", "drizzle"],
      githubUrl: "https://github.com/TheRealShreyash/auth-service",
      liveUrl: "",
    },
    {
      imageUrl: "/huehaven.webp",
      title: "Hue Haven",
      desc: "A web app to get color information",
      motivation:
        "I was constantly switching between tools to get hex, rgb, and hsl values while designing. Hue Haven puts everything in one place with a clean UI.",
      techStack: ["react", "tailwindcss", "vite"],
      githubUrl: "",
      liveUrl: "https://thehuehaven.netlify.app/",
    },
    {
      imageUrl: "/genqrco.webp",
      title: "GenQrco",
      desc: "A simple QR code generator",
      motivation:
        "Needed a fast, no-signup QR generator for a college project. Every existing tool was cluttered with ads, so I built a clean one in an afternoon.",
      techStack: ["html", "css", "javascript"],
      githubUrl: "",
      liveUrl: "https://genqrco.netlify.app/",
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
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightCard;
