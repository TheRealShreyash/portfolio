import { LeftCard, RightCard } from "./components";

const App = () => {
  return (
    <div className="text-white mx-auto my-0 border-4 border-[#262626] border-dashed w-full max-w-6xl p-6 md:p-10 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
      <LeftCard className="w-full md:w-fit pp-font shrink-0" />
      <RightCard className="w-full md:w-auto pp-font min-w-0" />
    </div>
  );
};

export default App;
