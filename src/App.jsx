import { LeftCard, RightCard } from "./components";
import ResumeFab from "./components/ResumeFab";

const App = () => {
  return (
    <div className="text-white mx-auto my-0 md:border-x-4 md:border-[#262626] border-dashed w-full max-w-6xl p-6 md:p-10 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
      <LeftCard
        className="w-full md:w-fit pp-font shrink-0 animate-fade-in-up"
        style={{ animationDelay: "80ms" }}
      />
      <div
        className="w-full md:w-auto min-w-0 animate-fade-in-up"
        style={{ animationDelay: "220ms" }}
      >
        <RightCard className="w-full md:w-auto pp-font min-w-0" />
      </div>
      <ResumeFab />
    </div>
  );
};

export default App;
