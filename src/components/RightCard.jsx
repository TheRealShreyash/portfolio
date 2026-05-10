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
    { name: "bun", image: "/bun.svg" },
    { name: "tailwindcss", image: "/tailwindcss.svg" },
    { name: "mongodb", image: "/mongodb.svg" },
    { name: "express", image: "/express.svg" },
    { name: "postgres", image: "/postgres.svg" },
    { name: "redis", image: "/redis.svg" },
    { name: "docker", image: "/docker.svg" },
    { name: "drizzle", image: "/drizzle.svg" },
    { name: "socket.io", image: "/socket.io.svg" },
    { name: "git", image: "/git.svg" },
    { name: "python", image: "/python.svg" },
  ];

  const projects = [
    {
      title: "Iris",
      desc: "A production-grade OIDC compliant authorization server",
      motivation:
        'Most developers treat auth as a black box — plug in Auth0/Clerk and move on. I wanted to understand what actually happens between clicking "Login with Google" and receiving a JWT. So I built Iris from scratch, implementing the full authorization code flow with PKCE, refresh token rotation, and JWT signing without any auth library.',
      techStack: ["bun", "express", "typescript", "postgres", "drizzle", "jwt"],
      githubUrl: "https://github.com/TheRealShreyash/auth-service",
      liveUrl: "https://iris.shreyxsh.me",
    },
    {
      title: "Checkboxes",
      desc: "Real-time multiplayer shared canvas 1000 checkboxes, infinite chaos",
      motivation: "",
      techStack: [
        "bun",
        "express",
        "typescript",
        "postgres",
        "drizzle",
        "redis",
        "socket.io",
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
      desc: "A clean, distraction-free color toolkit for designers and developers",
      motivation:
        "I was constantly switching between tools to get hex, rgb, and hsl values while designing. Hue Haven puts everything in one place with a clean UI.",
      techStack: ["react", "tailwindcss", "vite"],
      githubUrl: "",
      liveUrl: "https://thehuehaven.netlify.app/",
    },
    {
      imageUrl: "/genqrco.webp",
      title: "GenQrco",
      desc: "A fast, no-signup QR code generator with zero clutter",
      motivation:
        "Every existing tool was cluttered with ads, so I built a clean one in an afternoon.",
      techStack: ["react", "vite", "yarn"],
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
        A cs undergrad who can't stop building. I dig into how things work. I've
        shipped auth systems, real-time apps, and tools I actually use. Mostly
        with TypeScript, Node.js, and whatever gets the job done. Apart from
        code — anime and books.
      </p>
      <p className="mt-3 text-[#898989]">
        <span className="text-white">Lets build something:</span>{" "}
        koshta.shreyash02@gmail.com
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
