import { useState } from "react";
import TechStack from "./TechStack";
import GithubSection from "./GithubSection";
import ProjectCard from "./ProjectCard";
import LeetCodeSection from "./LeetCodeSection";

const RightCard = ({ className }) => {
  const [copied, setCopied] = useState(false);
  const email = "koshta.shreyash02@gmail.com";

  const handleCtaClick = async (e) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard write can fail (permissions, insecure context) — mailto href still fires
    }
  };

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
      imageUrl: "/pulse.webp",
      title: "Pulse",
      desc: "A real-time polling platform where creators can build live polls, share them instantly, and watch responses roll in as they happen. Supports both anonymous and authenticated voting with duplicate prevention, a live analytics dashboard with response velocity tracking, and shareable result cards.",
      motivation:
        "I wanted to explore real-time bidirectional communication in a product that actually benefits from it. Polls felt perfect because the moment a vote lands, everyone in the room should feel it. Built this to go deep on Socket.IO room management, JWKS-based JWT auth, and shipping a complete full-stack product from scratch under pressure.",
      techStack: [
        "bun",
        "express",
        "typescript",
        "postgres",
        "drizzle",
        "socket.io",
        "tanstack router",
        "vite",
        "react",
        "tailwindcss",
      ],
      githubUrl: "https://github.com/TheRealShreyash/pulse",
      liveUrl: "https://pulse.shreyxsh.me",
    },
    {
      title: "Iris",
      desc: "A login & auth system built from scratch — no per-user fees, no black box",
      motivation:
        'Most developers treat auth as a black box plug in Auth0/Clerk and move on, then pay per-user pricing forever. I wanted to understand what actually happens between clicking "Login with Google" and receiving a JWT, so I built Iris from scratch: the full OIDC compliant authentication code flow with PKCE, refresh token rotation, and JWT signing, without any auth library.',
      techStack: ["bun", "express", "typescript", "postgres", "drizzle", "jwt"],
      githubUrl: "https://github.com/TheRealShreyash/iris",
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
      <div className="flex flex-wrap gap-2 mt-5 justify-center md:justify-start">
        {["auth systems", "real-time features", "full-stack builds"].map(
          (tag) => (
            <span
              key={tag}
              className="text-[11px] text-[#c0c0c0] bg-[#1A1A1A] border border-[#262626] rounded-full px-3 py-1 font-mono"
            >
              {tag}
            </span>
          ),
        )}
      </div>
      <p className="mt-5 text-[#898989]">
        A cs undergrad who can't stop building. I dig into how things work. I've
        shipped auth systems, real-time apps, and tools I actually use. Mostly
        with TypeScript, Node.js, and whatever gets the job done. Apart from
        code — anime and books.
      </p>
      <a
        href={`mailto:${email}?subject=Let's build something`}
        onClick={handleCtaClick}
        className="mt-4 inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition-colors w-fit"
      >
        {copied ? "email copied ✓" : "Let's build something ↗"}
      </a>
      {copied && (
        <p className="text-[#666] text-xs mt-1.5">
          {email} — pasted to your clipboard
        </p>
      )}
      <div className="techstack mt-6">
        <TechStack items={line1} />
      </div>
      <GithubSection className="mt-12" />
      <div className="mt-14">
        <h2 className="font-semibold text-2xl">Projects</h2>
        <div className="flex flex-col gap-3 mt-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      {/* <div className="mt-14">
        <h2 className="font-semibold text-2xl">Leetcode</h2>
        <LeetCodeSection className="mt-4" />
      </div> */}
    </div>
  );
};

export default RightCard;
