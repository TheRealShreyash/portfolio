import { LeftCard, RightCard } from "./components";

const App = () => {
  return (
    <div className="text-white mx-auto my-0 border-4 border-[#262626] border-dashed w-[75%] p-10 flex gap-24">
      <LeftCard className="w-fit pp-font" />
      <RightCard className="pp-font" />
    </div>
  );
};

export default App;
