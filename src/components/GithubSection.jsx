import { GitHubCalendar } from "react-github-calendar";

const GithubSection = ({ className }) => {
  const customTheme = {
    dark: ["#1A1A1A", "#444444", "#666666", "#888888", "#f8f8f8"],
  };

  return (
    <div
      className={`p-6 bg-[#1a1a1a] border border-[#262626] rounded-xl mt-12 ${className || ""}`}
    >
      <div className="flex justify-between items-center mb-6 gap-2">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <img
            src="/favicon.jfif"
            className="w-5 h-5 md:w-6 md:h-6 grayscale rounded-2xl shrink-0"
            alt="GitHub"
          />
          <span className="pp-font text-base sm:text-lg md:text-xl truncate">
            therealshreyash
          </span>
        </div>
        <a
          href="https://github.com/therealshreyash"
          className="bg-white text-black px-3 md:px-4 py-1 rounded-md text-xs md:text-sm font-bold hover:bg-gray-200 transition-colors shrink-0"
        >
          follow
        </a>
      </div>
      <div className="overflow-x-auto pb-2">
        <GitHubCalendar
          username="therealshreyash"
          theme={customTheme}
          colorScheme="dark"
          blockSize={10.3}
          blockMargin={2}
          blockRadius={4}
        />
      </div>
    </div>
  );
};

export default GithubSection;
